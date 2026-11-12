/* 넓은 화면(PC) 전용 '책장 넘김' 보기.
   작품 감상의 다섯 장면을 그대로 쓰되, 왼쪽에는 미술작품을 두고 오른쪽 쪽에 장면 하나씩 펼친다.
   - 장면 DOM(음악 플레이어·메모 수첩·사진 포함)은 옮기거나 다시 만들지 않고 보이기/숨기기만 한다 → 화면 크기를 바꿔도 작성 중인 글과 재생 상태가 유지된다.
   - 화면이 좁으면(휴대전화·태블릿 세로) 아무것도 하지 않으며, 기존의 위아래 스크롤 감상이 그대로 쓰인다.
   - 쪽 이동: 이전/다음 버튼 · 키보드 ← → · 아래 점. 메모 입력 중에는 방향키가 쪽을 넘기지 않는다. */
(function () {
  "use strict";
  var AB = window.ArtBook = window.ArtBook || {};
  var MQ = "(min-width:1100px) and (min-height:600px)";

  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function add(p) { for (var i = 1; i < arguments.length; i++) if (arguments[i]) p.appendChild(arguments[i]); return p; }

  AB.mountSpread = function (B, host) {
    if (!window.matchMedia || !host || !host.hooks) return null;
    var H = host.hooks, sc = H.scenes, mq = window.matchMedia(MQ);
    var book = document.getElementById("book"), box = H.resume, body = document.body, root = document.documentElement;
    // 쪽 구성: 장면 하나 = 한 쪽. 마지막 쪽(간직하다)에는 나의 기록(메모 수첩)과 자료 출처가 이어서 나온다.
    var groups = sc.map(function (s) { return [s.id]; });
    groups[groups.length - 1] = groups[groups.length - 1].concat(["note", "sources"]);
    var allIds = [].concat.apply([], groups);
    var isOn = false, page = 0, art = null, nav = null, dots = [], prev = null, next = null, status = null, offs = [];

    function on(t, ev, fn, o) { t.addEventListener(ev, fn, o); offs.push(function () { t.removeEventListener(ev, fn, o); }); }
    function node(id) { return document.getElementById(id); }

    function layout() { // 이어 읽기 안내 줄이 있으면 그 아래부터 쪽을 시작한다
      var top = 44 + (parseFloat(getComputedStyle(root).getPropertyValue("--site-h")) || 0); // 사이트 공통 메뉴 + 진행 막대
      if (box && !box.hidden) { var r = box.getBoundingClientRect(); if (r.bottom > top) top = Math.ceil(r.bottom); }
      root.style.setProperty("--sp-top", top + "px");
    }

    function buildArt() {
      var L = B.look, f = L.caption || {};
      var a = el("aside", "sp-art"); a.setAttribute("aria-label", "미술작품");
      var b = el("button", "sp-frame"); b.type = "button"; b.setAttribute("aria-label", "작품 크게 보기: " + (f.work || B.title));
      var im = el("img"); im.src = L.image.src; if (L.image.srcset) { im.srcset = L.image.srcset; im.sizes = "46vw"; }
      im.alt = L.image.alt || ""; im.decoding = "async";
      b.appendChild(im);
      b.addEventListener("click", function () { var orig = document.querySelector("#s1 .frame"); if (orig) orig.click(); }); // 확대 보기는 기존 것을 그대로 쓴다
      var cap = el("div", "sp-cap");
      add(cap, el("p", "sp-artist", (f.artist || "").replace(/\s*\(.*$/, "")), el("p", "sp-work", f.work || ""), el("p", "sp-hint", "그림을 누르면 크게 볼 수 있습니다"));
      return add(a, b, cap);
    }
    function buildNav() {
      var n = el("nav", "sp-nav"); n.setAttribute("aria-label", "책장 넘기기");
      prev = el("button", "sp-btn sp-prev", "‹ 이전"); prev.type = "button";
      next = el("button", "sp-btn sp-next", "다음 ›"); next.type = "button";
      var mid = el("div", "sp-mid"); dots = [];
      var dl = el("div", "sp-dots");
      sc.forEach(function (s, i) {
        var d = el("button", "sp-dot"); d.type = "button"; d.setAttribute("aria-label", (i + 1) + "쪽 " + s.name);
        d.title = s.name; d.addEventListener("click", function () { show(i, true); });
        dots.push(d); dl.appendChild(d);
      });
      status = el("p", "sp-status"); status.setAttribute("role", "status"); status.setAttribute("aria-live", "polite");
      add(mid, dl, status);
      prev.addEventListener("click", function () { show(page - 1, true); });
      next.addEventListener("click", function () { show(page + 1, true); });
      return add(n, prev, mid, next);
    }

    function show(i, animate) {
      i = Math.max(0, Math.min(sc.length - 1, i));
      var changed = i !== page;
      page = i;
      allIds.forEach(function (id) { var e = node(id); if (e) e.classList.add("sp-hide"); });
      groups[i].forEach(function (id) { var e = node(id); if (e) e.classList.remove("sp-hide"); });
      body.setAttribute("data-sp-page", String(i));
      book.scrollTop = 0;
      H.setScene(i);
      H.barLine.style.width = ((i + 1) / sc.length * 100) + "%";
      dots.forEach(function (d, k) { if (k === i) d.setAttribute("aria-current", "page"); else d.removeAttribute("aria-current"); });
      prev.disabled = i === 0; next.disabled = i === sc.length - 1;
      status.textContent = (i + 1) + " / " + sc.length + " · " + sc[i].name;
      if (animate && changed) { book.classList.remove("sp-turn"); void book.offsetWidth; book.classList.add("sp-turn"); }
      var ae = document.activeElement; // 글을 쓰는 중이 아니면 쪽에 초점을 두어 위아래 방향키로 읽을 수 있게 한다
      if (!ae || ae === body || ae.closest && ae.closest(".sp-nav")) { try { book.focus({ preventScroll: true }); } catch (e) {} }
    }

    function typing(t) {
      if (!t || !t.tagName) return false;
      var n = t.tagName;
      return n === "INPUT" || n === "TEXTAREA" || n === "SELECT" || t.isContentEditable;
    }
    function onKey(e) {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      var z = node("zoom"); if (z && !z.hidden) return;
      if (typing(e.target)) return;
      e.preventDefault();
      show(page + (e.key === "ArrowRight" ? 1 : -1), true);
    }

    function activate() {
      if (isOn) return;
      isOn = true; AB._sp = api;
      var start = H.getScene();
      body.classList.add("sp-on");
      art = buildArt(); nav = buildNav(); body.appendChild(art); body.appendChild(nav);
      layout();
      page = -1; show(start, false);
      on(document, "keydown", onKey);
      on(window, "resize", layout);
      if (box) on(box, "click", function () { setTimeout(layout, 0); });
    }
    function deactivate() {
      if (!isOn) return;
      isOn = false; AB._sp = null;
      var cur = page;
      offs.splice(0).forEach(function (f) { f(); });
      allIds.forEach(function (id) { var e = node(id); if (e) e.classList.remove("sp-hide"); });
      if (art && art.parentNode) art.parentNode.removeChild(art);
      if (nav && nav.parentNode) nav.parentNode.removeChild(nav);
      art = nav = null; dots = [];
      body.classList.remove("sp-on"); body.removeAttribute("data-sp-page");
      book.classList.remove("sp-turn"); book.scrollTop = 0;
      root.style.removeProperty("--sp-top");
      H.barLine.style.width = "0";
      var t = node(sc[cur] ? sc[cur].id : "s1");
      if (t) t.scrollIntoView({ block: "start", behavior: "instant" }); // 보던 장면에서 위아래 스크롤로 이어 읽는다
      H.onScroll();
    }
    function sync() { if (mq.matches) activate(); else deactivate(); }

    var api = {
      active: function () { return isOn; },
      go: function (i) { if (isOn) show(i, true); },
      goId: function (id) { if (!isOn) return; for (var i = 0; i < groups.length; i++) if (groups[i].indexOf(id) !== -1) { show(i, true); return; } },
      unmount: function () {
        if (mq.removeEventListener) mq.removeEventListener("change", sync); else if (mq.removeListener) mq.removeListener(sync);
        deactivate();
      }
    };
    if (mq.addEventListener) mq.addEventListener("change", sync); else if (mq.addListener) mq.addListener(sync);
    sync();
    return api;
  };
})();

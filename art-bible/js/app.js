/* 작품 감상 화면 렌더러: 작품 데이터(content/works/*.js)를 읽어 다섯 장면을 그린다.
   ArtBook.mountWork(작품) → { unmount, goTo(장면id) }. 콘텐츠 문자열은 textContent로만 삽입한다. */
(function () {
  "use strict";
  var AB = window.ArtBook = window.ArtBook || {};
  var root = document.getElementById("book");
  AB.mountWork = function (B) {
  var offs = [];
  function on(t, ev, fn, o) { t.addEventListener(ev, fn, o); offs.push(function () { t.removeEventListener(ev, fn, o); }); }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function add(parent) { for (var i = 1; i < arguments.length; i++) if (arguments[i]) parent.appendChild(arguments[i]); return parent; }
  function item(it) {
    var p = el("p", "item");
    add(p, el("span", "tag tag-" + it.tag, it.tag));
    p.appendChild(document.createTextNode(it.text));
    return p;
  }
  function link(l) {
    var a = el("a", null, l.label);
    a.href = l.url; a.target = "_blank"; a.rel = "noopener noreferrer";
    return a;
  }
  function nextLink(toId, label) {
    var w = el("div", "next-wrap");
    var a = el("a", "next", label + " ↓");
    a.href = "#" + toId;
    a.addEventListener("click", function (e) { e.preventDefault(); if (AB._sp && AB._sp.active()) { AB._sp.goId(toId); return; } var t = document.getElementById(toId); if (t) t.scrollIntoView({ block: "start" }); });
    return add(w, a);
  }
  function section(id, cls, num, name) {
    var s = el("section", "sec " + cls); s.id = id;
    s.setAttribute("aria-labelledby", id + "-h");
    var inner = el("div", "in");
    if (num) add(inner, el("p", "scene-no", "장면 " + num));
    var h = el("h2", null, name); h.id = id + "-h";
    if (name) add(inner, h);
    s.appendChild(inner);
    return { s: s, inner: inner };
  }
  var sc = B.scenes;
  function nextOf(i) { return sc[i + 1] ? nextLink(sc[i + 1].id, sc[i + 1].name) : null; }

  /* ---- 장면 1 ---- */
  (function () {
    var L = B.look, s = el("section", "sec"); s.id = "s1"; s.setAttribute("aria-labelledby", "s1-h");
    var in1 = el("div", "in");
    add(in1, el("p", "cover-series", B.series + " · " + B.seriesSub));
    var btn = el("button", "frame"); btn.type = "button";
    btn.setAttribute("aria-label", "작품 크게 보기: " + L.caption.work);
    var img = el("img"); img.src = L.image.src;
    if (L.image.srcset) { img.srcset = L.image.srcset; img.sizes = "(max-width:700px) 92vw, 640px"; } // 작은 원본은 srcset 없이
    img.width = L.image.width; img.height = L.image.height; img.alt = L.image.alt; img.decoding = "async";
    btn.appendChild(img);
    add(in1, btn, el("p", "zoom-hint", L.zoomHint));
    var h1 = el("h1", null, B.title); h1.id = "s1-h";
    add(in1, h1, el("p", "passage", B.passage + " · " + B.themes));
    var cap = el("div", "caption");
    add(cap, el("p", "artist", L.caption.artist), el("p", "meta", L.caption.work + " · " + L.caption.meta),
      el("p", null, L.caption.owner));
    [L.caption.stolen].concat(L.caption.notes || []).forEach(function (t) { if (t) cap.appendChild(el("p", "stolen", t)); }); // 작품 종류·상태 안내(선택)
    add(in1, cap, el("p", "prompt", L.prompt), nextOf(0));
    s.appendChild(in1); root.appendChild(s);
    openZoomOn(btn, L.image.zoom, L.image.alt);
  })();

  /* ---- 장면 2 ---- */
  (function () {
    var D = B.discover, o = section("s2", "paper", 2, sc[1].name);
    add(o.inner, el("p", "lead", D.lead));
    D.items.forEach(function (it) { o.inner.appendChild(item(it)); });
    add(o.inner, el("p", "again", D.again), nextOf(1));
    root.appendChild(o.s);
  })();

  /* ---- 장면 3 ---- */
  (function () {
    var M = B.listen, o = section("s3", "paper2", 3, sc[2].name);
    add(o.inner, el("p", "work", M.work), el("p", "de", M.titleDe), el("p", "ko", M.titleKo));
    M.items.forEach(function (it) { o.inner.appendChild(item(it)); });
    var pl = el("div", "player"), embedded = !!M.videoId;
    var play = el(embedded ? "button" : "a", "play" + (embedded ? "" : " ext"));
    if (embedded) play.type = "button";
    else { play.href = M.externalPlayUrl || (M.links[0] && M.links[0].url) || "#"; play.target = "_blank"; play.rel = "noopener noreferrer"; }
    var disc = el("span", "disc"); disc.appendChild(el("span", "tri"));
    var meta = el("span", "pmeta");
    add(meta, el("span", "t", M.playLabel), el("small", null, M.channel + " · " + M.duration),
      el("small", "src", embedded ? "누르면 YouTube 공식 영상을 불러옵니다" : "공식 감상 페이지를 새 창으로 엽니다"));
    add(play, disc, meta);
    play.setAttribute("aria-label", M.playLabel + (embedded ? " — 영상 재생하기 (YouTube에서 불러옴)" : " — 공식 감상 페이지에서 열기"));
    if (embedded) play.addEventListener("click", function () {
      // 파일로 직접 열었을 때(file://)는 YouTube가 출처 정보 없는 임베드를 거부해 검은 화면만 나온다 → 공식 영상 페이지를 새 탭으로 연다
      if (location.protocol === "file:") { window.open("https://www.youtube.com/watch?v=" + encodeURIComponent(M.videoId), "_blank", "noopener"); return; }
      var f = document.createElement("iframe");
      f.referrerPolicy = "strict-origin-when-cross-origin"; // YouTube는 출처(Referer) 없는 임베드를 막는다
      var helpNote = el("p", "note", "영상이 멈춰 있으면 화면의 재생 단추를 한 번 더 눌러 주세요.");
      pl.parentNode.insertBefore(helpNote, pl.nextSibling);
      f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(M.videoId) + "?autoplay=1&rel=0&playsinline=1";
      f.title = M.embedTitle;
      f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      f.allowFullscreen = true;
      pl.className = "player live"; pl.textContent = ""; pl.appendChild(f);
    });
    pl.appendChild(play);
    var ul = el("ul", "links");
    M.links.forEach(function (l, i) { var a = link(l); a.className = "obtn" + (i === 0 ? " main" : ""); add(ul, add(el("li"), a)); });
    add(o.inner, pl, el("p", "perf", M.performance), ul, el("p", "note", M.note), nextOf(2));
    root.appendChild(o.s);
  })();

  /* ---- 장면 4 ---- */
  (function () {
    var W = B.word, o = section("s4", "paper", 4, sc[3].name);
    var S = W.scripture, bq = el("blockquote", "scripture");
    add(bq, el("p", "sc-head", S.range + " · " + S.version));
    S.lines.forEach(function (l) { var p = el("p", "sc-line"); add(p, el("sup", null, String(l.v)), document.createTextNode(" " + l.t)); bq.appendChild(p); });
    add(o.inner, bq, el("p", "intro", W.intro));
    add(o.inner, el("h3", null, W.flowTitle));
    W.beats.forEach(function (b) {
      var d = el("div", b.ref.length > 6 ? "beat beat-long" : "beat"); add(d, el("div", "ref", b.ref)); // 절 범위가 길면 위에 얹어 본문 폭을 넓힌다
      var c = el("div"); b.items.forEach(function (it) { c.appendChild(item(it)); });
      add(d, c); o.inner.appendChild(d);
    });
    add(o.inner, el("h3", null, W.echoesTitle));
    W.echoes.forEach(function (e) {
      var d = el("div", "echo"), p = el("p", "item");
      add(p, el("span", "tag tag-" + e.tag, e.tag), el("b", null, e.ref + " "), document.createTextNode(e.text));
      add(d, p); o.inner.appendChild(d);
    });
    var care = el("div", "care"); add(care, el("h3", null, W.care.title));
    var ul = el("ul"); W.care.lines.forEach(function (t) { add(ul, el("li", null, t)); });
    add(care, ul);
    add(o.inner, care, nextOf(3));
    root.appendChild(o.s);
  })();

  /* ---- 장면 5 ---- */
  (function () {
    var K = B.keep, s = el("section", "sec"); s.id = "s5"; s.setAttribute("aria-labelledby", "s5-h");
    var inn = el("div", "in");
    var h = el("h2", "scene-no", "장면 5 · " + sc[4].name); h.id = "s5-h";
    add(inn, h, el("p", "orn", "· · ·"), el("p", "sentence", K.sentence), el("p", "question", K.question));
    var b = el("button", "keep", K.save); b.type = "button"; b.setAttribute("aria-pressed", "false");
    var msg = el("p", "keep-msg"); msg.setAttribute("role", "status"); msg.setAttribute("aria-live", "polite");
    add(inn, b, msg); s.appendChild(inn); root.appendChild(s);
    b.addEventListener("click", function () {
      onScroll();
      var ok = saveBookmark(currentScene);
      b.setAttribute("aria-pressed", ok ? "true" : "false");
      msg.textContent = ok ? K.saved : K.unavailable;
      if (ok) b.textContent = "간직했습니다 ✓";
    });
  })();

  /* ---- 작품과 자료 출처 (콘텐츠의 sources.groups를 그대로 표시) ---- */
  (function () {
    var C = B.sources, s = el("footer", "colophon"), inn = el("div", "in");
    s.id = "sources"; s.setAttribute("aria-labelledby", "src-h");
    var h = el("h2", null, C.title); h.id = "src-h"; inn.appendChild(h);
    C.groups.forEach(function (g) {
      var d = el("div", "src");
      add(d, el("h3", null, g.label));
      g.lines.forEach(function (t) { add(d, el("p", null, t)); });
      if (g.links.length) { var p = el("p", "src-links"); g.links.forEach(function (l) { p.appendChild(link(l)); }); d.appendChild(p); }
      inn.appendChild(d);
    });
    add(inn, el("p", "status", "확인 " + C.checkedOn + " · " + C.releaseStatus));
    s.appendChild(inn); root.appendChild(s);
  })();

  /* ---- 확대 보기 ---- */
  var zoom = document.getElementById("zoom"), zs = document.getElementById("zoomScroll"),
      zi = document.getElementById("zoomImg"), zt = document.getElementById("zoomToggle"),
      zc = document.getElementById("zoomClose"), lastFocus = null;
  function openZoomOn(trigger, src, alt) {
    trigger.addEventListener("click", function () {
      lastFocus = document.activeElement;
      zi.src = src; zi.alt = alt; zs.classList.remove("big");
      zoom.hidden = false; document.body.classList.add("lock"); zc.focus();
    });
  }
  function closeZoom() {
    zoom.hidden = true; document.body.classList.remove("lock");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function toggleZoom(ev) {
    var big = zs.classList.contains("big"), r = zi.getBoundingClientRect();
    var fx = .5, fy = .5;
    if (ev && ev.clientX != null && r.width) { fx = (ev.clientX - r.left) / r.width; fy = (ev.clientY - r.top) / r.height; }
    zs.classList.toggle("big", !big);
    if (!big) {
      var go = function () {
        zs.scrollLeft = fx * zi.offsetWidth - zs.clientWidth / 2;
        zs.scrollTop = fy * zi.offsetHeight - zs.clientHeight / 2;
      };
      go(); requestAnimationFrame(go);
    }
  }
  on(zi, "click", toggleZoom);
  on(zt, "click", function () { toggleZoom(null); });
  on(zc, "click", closeZoom);
  on(document, "keydown", function (e) {
    if (zoom.hidden) return;
    if (e.key === "Escape") closeZoom();
    if (e.key === "Tab") { // 두 버튼 사이에서 포커스 유지
      var first = zt, last = zc;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---- 현재 장면 · 진행 표시 ---- */
  var currentScene = 0, barScene = document.getElementById("barScene"),
      barLine = document.getElementById("barLine"), bar = document.getElementById("bar");
  function setScene(i) {
    currentScene = i;
    barScene.textContent = (i + 1) + " / " + sc.length + " · " + sc[i].name;
    bar.classList.toggle("on-wall", i === 0);
  }
  setScene(0);
  function onScroll() {
    if (AB._sp && AB._sp.active()) return; // 책장 넘김 보기에서는 쪽 번호가 현재 장면이다
    var h = document.documentElement, max = h.scrollHeight - h.clientHeight;
    barLine.style.width = (max > 0 ? Math.min(100, h.scrollTop / max * 100) : 0) + "%";
    // 화면 상단 1/3 지점에 걸친 장면을 현재 장면으로 본다
    var probe = window.innerHeight * 0.35, idx = 0;
    for (var i = 0; i < sc.length; i++) {
      var e = document.getElementById(sc[i].id);
      if (e && e.getBoundingClientRect().top <= probe) idx = i;
    }
    if (idx !== currentScene) setScene(idx);
  }
  var ticking = false;
  on(window, "scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; onScroll(); }); }
  }, { passive: true });
  on(window, "resize", onScroll);
  onScroll();

  /* ---- 책갈피 (브라우저 로컬 저장소만 사용) ---- */
  var KEY = "artbible:" + B.id + ":bookmark:v1";
  function saveBookmark(i) {
    try { localStorage.setItem(KEY, JSON.stringify({ scene: i, savedAt: new Date().toISOString() })); return true; }
    catch (e) { return false; }
  }
  function readBookmark() {
    try { var v = JSON.parse(localStorage.getItem(KEY)); return v && typeof v.scene === "number" && sc[v.scene] ? v : null; }
    catch (e) { return null; }
  }
  function clearBookmark() { try { localStorage.removeItem(KEY); } catch (e) {} }
  var bm = readBookmark(), box = document.getElementById("resume");
  if (bm && bm.scene > 0) {
    var d = new Date(bm.savedAt), ds = isNaN(d) ? "" : " (" + (d.getMonth() + 1) + "월 " + d.getDate() + "일)";
    add(box, el("span", null, "지난번에 간직한 자리: 장면 " + (bm.scene + 1) + " · " + sc[bm.scene].name + ds));
    var go = el("button", null, "이어 읽기"); go.type = "button";
    go.addEventListener("click", function () {
      if (AB._sp && AB._sp.active()) AB._sp.goId(sc[bm.scene].id);
      else { var t = document.getElementById(sc[bm.scene].id); if (t) t.scrollIntoView({ behavior: "auto", block: "start" }); }
      box.hidden = true;
    });
    var no = el("button", "quiet", "처음부터"); no.type = "button";
    no.addEventListener("click", function () { clearBookmark(); box.hidden = true; });
    add(box, go, no); box.hidden = false;
  }

  return {
    unmount: function () {
      offs.forEach(function (f) { f(); });
      root.textContent = ""; box.hidden = true; box.textContent = "";
      zoom.hidden = true; document.body.classList.remove("lock");
      bar.classList.remove("on-wall"); barLine.style.width = "0";
    },
    goTo: function (id) { if (AB._sp && AB._sp.active()) { AB._sp.goId(id); return; } var t = document.getElementById(id); if (t) t.scrollIntoView({ block: "start" }); },
    // 책장 넘김 보기(js/spread.js)가 쓰는 연결 고리
    hooks: { scenes: sc, setScene: setScene, getScene: function () { return currentScene; }, onScroll: onScroll, bar: bar, barLine: barLine, resume: box }
  };
  };
})();

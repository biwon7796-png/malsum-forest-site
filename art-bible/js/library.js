/* 작품 서재 + 간단 검색 + 나의 서재(책갈피·메모·사진). 작품 수가 늘어도 같은 구조로 동작한다.
   개인 기록은 항상 작품의 고유 id로만 연결된다(목록 순서·제목이 바뀌어도 영향 없음).
   - 책갈피: localStorage  artbible:<id>:bookmark:v1
   - 메모·사진: IndexedDB  artbible-notes / notes (key = id), 글만 저장 모드: localStorage artbible:<id>:note-text:v1 */
(function () {
  "use strict";
  var AB = window.ArtBook = window.ArtBook || {};
  var root = document.getElementById("book");
  var state = { q: "", f: "all" }; // 작품을 열었다 돌아와도 검색어·보기 유지
  var DEFAULT_COVER = "assets/default-cover-1080.jpg"; // default-cover.png(원본)를 같은 크기로 가볍게 다시 저장한 파일. 원본은 그대로 둠
  var COVER_KEY = "artbible:library-cover:v1";

  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function add(p) { for (var i = 1; i < arguments.length; i++) if (arguments[i]) p.appendChild(arguments[i]); return p; }

  /* ---------- 서재 표지 ---------- */
  function savedCover() {
    try {
      var v = localStorage.getItem(COVER_KEY);
      return v && /^data:image\/(?:jpeg|png|webp);base64,/i.test(v) ? v : "";
    } catch (e) { return ""; }
  }
  function prepareCover(file) {
    return new Promise(function (resolve, reject) {
      if (!file || (!/^image\//i.test(file.type) && !/\.(?:jpe?g|png|webp)$/i.test(file.name || ""))) return reject(new Error("type"));
      var url = URL.createObjectURL(file), img = new Image();
      img.onload = function () {
        var longest = Math.max(img.naturalWidth, img.naturalHeight), scale = Math.min(1, 1800 / longest);
        var w = Math.max(1, Math.round(img.naturalWidth * scale)), h = Math.max(1, Math.round(img.naturalHeight * scale));
        var canvas = document.createElement("canvas"); canvas.width = w; canvas.height = h;
        var ctx = canvas.getContext("2d");
        if (!ctx) { URL.revokeObjectURL(url); reject(new Error("canvas")); return; }
        ctx.fillStyle = "#1b1830"; ctx.fillRect(0, 0, w, h); ctx.drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(url);
        try { resolve(canvas.toDataURL("image/jpeg", .84)); } catch (e) { reject(e); }
      };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error("decode")); };
      img.src = url;
    });
  }

  /* ---------- 검색 ---------- */
  function norm(s) { return String(s == null ? "" : s).normalize("NFC").toLowerCase().replace(/[\s·,.:;–—\-_\/()「」《》“”'"‘’?!]+/g, ""); }
  function arr(x) { return x == null ? [] : Array.isArray(x) ? x : [x]; }

  function buildFields(w) {
    var m = w.meta, f = [];
    function put(label, w8, texts) { arr(texts).forEach(function (t) { if (t) f.push({ label: label, weight: w8, text: String(t), n: norm(t) }); }); }
    put("제목", 5, [w.title, m.art.title, arr(m.art.titleAliases), m.music.work, arr(m.music.workAliases)].reduce(function (a, b) { return a.concat(arr(b)); }, []));
    put("주제", 4, m.themes);
    put("성경", 3, [].concat(arr(m.bible.ranges), arr(m.bible.books), arr(m.bible.bookAliases)));
    put("화가", 3, [m.art.artist].concat(arr(m.art.artistAliases)));
    put("작곡가", 3, [m.music.composer].concat(arr(m.music.composerAliases)));
    put("태그", 2, m.tags);
    put("관련 본문", 1, m.bible.related);
    put("소개", 1, m.summary);
    return f;
  }
  function search(works, query) {
    var toks = String(query || "").split(/\s+/).map(norm).filter(Boolean);
    if (!toks.length) return works.map(function (w, i) { return { w: w, score: 0, i: i, hits: [] }; });
    var out = [];
    works.forEach(function (w, i) {
      var fields = w._fields || (w._fields = buildFields(w)), score = 0, hits = [], ok = true;
      toks.forEach(function (t) {
        var best = null;
        fields.forEach(function (fd) { if (fd.n.indexOf(t) !== -1 && (!best || fd.weight > best.weight)) best = fd; });
        if (!best) ok = false; else { score += best.weight; hits.push(best); }
      });
      if (ok) out.push({ w: w, score: score, i: i, hits: hits });
    });
    out.sort(function (a, b) { return b.score - a.score || a.i - b.i; });
    // 여러 단어를 이어 쓴 검색어(예: ‘누가복음 15’)가 한 항목 안에 통째로 들어 있는 작품이 있으면 그 작품만 보여 준다.
    if (toks.length > 1) {
      var phrase = norm(query), exact = out.filter(function (r) {
        return (r.w._fields || []).some(function (fd) { return fd.n.indexOf(phrase) !== -1; });
      });
      if (exact.length) return exact.map(function (r) {
        var best = null; (r.w._fields || []).forEach(function (fd) { if (fd.n.indexOf(phrase) !== -1 && (!best || fd.weight > best.weight)) best = fd; });
        return { w: r.w, score: r.score, i: r.i, hits: [best] };
      });
    }
    return out;
  }
  AB._search = search; // 시험용 노출

  /* ---------- 개인 기록 읽기(읽기 전용) ---------- */
  function readBookmark(id) {
    try { var v = JSON.parse(localStorage.getItem("artbible:" + id + ":bookmark:v1")); return v && typeof v.scene === "number" ? v : null; } catch (e) { return null; }
  }
  function readNotes(ids) {
    var res = {}; ids.forEach(function (id) { res[id] = { text: false, photos: 0 }; });
    return new Promise(function (resolve) {
      function lsFallback() {
        ids.forEach(function (id) { try { var v = JSON.parse(localStorage.getItem("artbible:" + id + ":note-text:v1")); if (v && ((v.feeling || "").trim() || (v.reflection || "").trim())) res[id].text = true; } catch (e) {} });
        resolve(res);
      }
      if (!window.indexedDB) return lsFallback();
      var r; try { r = indexedDB.open("artbible-notes", 1); } catch (e) { return lsFallback(); }
      r.onupgradeneeded = function () { try { r.result.createObjectStore("notes", { keyPath: "id" }); } catch (e) {} };
      r.onerror = function () { lsFallback(); };
      r.onsuccess = function () {
        var db = r.result;
        try {
          var q = db.transaction("notes", "readonly").objectStore("notes").getAll();
          q.onsuccess = function () {
            (q.result || []).forEach(function (rec) {
              if (!res[rec.id]) return; // 서재에 없는 작품의 기록은 건드리지도 지우지도 않는다
              res[rec.id].text = !!(((rec.feeling || "") + (rec.reflection || "")).trim());
              res[rec.id].photos = (rec.photos || []).length;
            });
            db.close(); resolve(res);
          };
          q.onerror = function () { db.close(); lsFallback(); };
        } catch (e) { db.close(); lsFallback(); }
      };
    });
  }

  /* ---------- 화면 ---------- */
  var FILTERS = [
    { k: "all", label: "전체" },
    { k: "bm", label: "책갈피" },
    { k: "note", label: "메모" },
    { k: "photo", label: "사진" }
  ];
  var EMPTY = {
    all: "아직 서재에 작품이 없습니다.",
    bm: "책갈피한 작품이 아직 없습니다. 작품 마지막 장면에서 ‘이 자리를 책갈피로 간직하기’를 눌러 보세요.",
    note: "메모를 남긴 작품이 아직 없습니다. 작품 끝의 ‘나의 작은 묵상 노트’에 적어 보세요.",
    photo: "사진을 담은 작품이 아직 없습니다."
  };

  AB.mountLibrary = function (works) {
    var alive = true, personal = {};
    var wrap = el("div", "lib");
    var head = el("header", "lib-head");
    var cover = el("img", "lib-cover-art"); cover.alt = ""; cover.decoding = "async"; cover.fetchPriority = "high";
    var customCover = savedCover(); cover.src = customCover || AB.vurl(DEFAULT_COVER);
    var titlebox = el("div", "lib-titlebox");
    add(titlebox, el("p", "lib-kicker", "ART · MUSIC · SCRIPTURE"), el("h1", null, "내 손안의 예술성경"), el("p", "lib-sub", "그림 한 점, 음악 한 곡, 말씀 한 자락"));
    var tools = el("div", "cover-tools");
    var choose = el("button", "cover-btn", "표지 바꾸기"); choose.type = "button"; choose.setAttribute("aria-label", "내 사진으로 서재 표지 바꾸기");
    var reset = el("button", "cover-btn", "기본 표지로"); reset.type = "button"; reset.setAttribute("aria-label", "기본 표지로 돌아가기"); reset.hidden = !customCover;
    var file = el("input"); file.type = "file"; file.accept = "image/jpeg,image/png,image/webp"; file.hidden = true;
    var coverStatus = el("p", "cover-status"); coverStatus.setAttribute("role", "status"); coverStatus.setAttribute("aria-live", "polite");
    function sayCover(text) { coverStatus.textContent = text; }
    choose.addEventListener("click", function () { file.value = ""; file.click(); });
    file.addEventListener("change", function () {
      var picked = file.files && file.files[0]; if (!picked) return;
      sayCover("사진을 표지에 맞게 준비하고 있습니다…");
      prepareCover(picked).then(function (data) {
        try { localStorage.setItem(COVER_KEY, data); }
        catch (e) { throw new Error("storage"); }
        cover.src = data; reset.hidden = false; sayCover("이 사진을 이 기기의 표지로 저장했습니다.");
      }).catch(function () { sayCover("사진을 저장하지 못했습니다. JPG, PNG 또는 WebP 사진을 다시 골라 주세요."); });
    });
    reset.addEventListener("click", function () {
      try { localStorage.removeItem(COVER_KEY); } catch (e) {}
      cover.src = AB.vurl(DEFAULT_COVER); reset.hidden = true; sayCover("기본 표지로 돌아왔습니다.");
    });
    add(tools, choose, reset, file); add(head, cover, titlebox, coverStatus, tools);

    var sbox = el("div", "lib-search");
    var lab = el("label", "lib-lab", "작품 찾기"); lab.htmlFor = "libQ";
    var inp = el("input"); inp.type = "search"; inp.id = "libQ"; inp.value = state.q; inp.autocomplete = "off"; inp.setAttribute("enterkeyhint", "search");
    inp.placeholder = "제목 · 주제 · 성경 · 화가 · 작곡가"; inp.setAttribute("aria-describedby", "libCount");
    add(sbox, lab, inp);

    var chips = el("div", "lib-chips"); chips.setAttribute("role", "group"); chips.setAttribute("aria-label", "나의 서재");
    var count = el("p", "lib-count"); count.id = "libCount"; count.setAttribute("role", "status"); count.setAttribute("aria-live", "polite");
    var list = el("ul", "lib-list");
    var msg = el("div", "lib-empty"); msg.hidden = true;
    add(wrap, head, add(el("div", "lib-tools"), sbox, chips, count), list, msg);
    root.textContent = ""; root.appendChild(wrap);

    function counts() {
      var c = { all: works.length, bm: 0, note: 0, photo: 0 };
      works.forEach(function (w) { var p = personal[w.id]; if (!p) return; if (p.bm) c.bm++; if (p.text) c.note++; if (p.photos) c.photo++; });
      return c;
    }
    function pass(w) {
      var p = personal[w.id] || {};
      return state.f === "all" || (state.f === "bm" && p.bm) || (state.f === "note" && p.text) || (state.f === "photo" && p.photos > 0);
    }
    function drawChips() {
      var c = counts(); chips.textContent = "";
      FILTERS.forEach(function (f) {
        var b = el("button", "chip", f.label + " " + c[f.k]); b.type = "button"; b.setAttribute("aria-pressed", String(state.f === f.k));
        b.addEventListener("click", function () { state.f = f.k; drawChips(); draw(); });
        chips.appendChild(b);
      });
    }
    function badge(t, cls) { return el("span", "badge" + (cls ? " " + cls : ""), t); }

    function card(r) {
      var w = r.w, m = w.meta, p = personal[w.id] || {}, li = el("li", "lib-item");
      var a = el("a", "lib-main"); a.href = "#/w/" + encodeURIComponent(w.id);
      a.setAttribute("aria-label", w.title + " 열기");
      var cov = el("span", "lib-cover");
      if (m.cover && m.cover.src) { var im = el("img"); im.src = m.cover.src; im.alt = ""; im.loading = "lazy"; im.decoding = "async"; cov.appendChild(im); }
      else { cov.classList.add("plate"); cov.appendChild(el("span", null, w.title.replace(/^\[[^\]]*\]\s*/, "").charAt(0))); }
      var body = el("span", "lib-body");
      add(body, el("span", "lib-title", w.title),
        el("span", "lib-line", [arr(m.art.artistAliases)[0] || m.art.artist, arr(m.music.composerAliases)[0] || m.music.composer, arr(m.bible.ranges)[0]].filter(Boolean).join(" · ")),
        el("span", "lib-themes", m.themes.slice(0, 3).join(" · ")));
      if (m.summary) body.appendChild(el("span", "lib-sum", m.summary));
      if (r.hits.length) {
        var seen = {}, parts = [];
        r.hits.forEach(function (h) { var s2 = h.label + " ‘" + h.text.slice(0, 18) + "’"; if (!seen[s2]) { seen[s2] = 1; parts.push(s2); } });
        body.appendChild(el("span", "lib-hit", "찾은 곳: " + parts.join(", ")));
      }
      add(a, cov, body); li.appendChild(a);
      var meta = el("div", "lib-meta");
      if (m.preview) meta.appendChild(badge("편집 후보 · 미리보기", "warn"));
      if (m.status === "sample") meta.appendChild(badge("시험용 · 승인 작품 아님", "warn"));
      if (p.bm) meta.appendChild(badge("책갈피", "bm"));
      if (p.text) meta.appendChild(badge("메모", "note"));
      if (p.photos) meta.appendChild(badge("사진 " + p.photos, "note"));
      if (p.text || p.photos) { var rec = el("a", "lib-rec", "내 기록 열기"); rec.href = "#/w/" + encodeURIComponent(w.id) + "/note"; meta.appendChild(rec); }
      if (meta.childNodes.length) li.appendChild(meta);
      return li;
    }

    function draw() {
      var res = search(works, state.q).filter(function (r) { return pass(r.w); });
      list.textContent = "";
      res.forEach(function (r) { list.appendChild(card(r)); });
      var searching = !!state.q.trim();
      count.textContent = searching || state.f !== "all" ? "작품 " + res.length + "편을 찾았습니다." : "작품 " + works.length + "편";
      msg.hidden = res.length > 0; msg.textContent = "";
      if (!res.length) {
        var t = searching ? "‘" + state.q.trim() + "’에 맞는 작품이 아직 서재에 없습니다. 제목, 주제(예: 두려움), 성경책(예: 마태복음), 화가, 작곡가로 찾아 보세요." : EMPTY[state.f] || EMPTY.all;
        msg.appendChild(el("p", null, t));
        if (searching || state.f !== "all") {
          var b = el("button", "nbtn", "모든 작품 보기"); b.type = "button";
          b.addEventListener("click", function () { state.q = ""; state.f = "all"; inp.value = ""; drawChips(); draw(); });
          msg.appendChild(b);
        }
      }
    }
    inp.addEventListener("input", function () { state.q = inp.value; draw(); });

    // 개인 기록은 비동기로 읽어 배지·필터에 반영한다(목록은 기다리지 않고 먼저 보인다)
    works.forEach(function (w) { var b = readBookmark(w.id); personal[w.id] = { bm: !!b, scene: b && b.scene, text: false, photos: 0 }; });
    drawChips(); draw();
    readNotes(works.map(function (w) { return w.id; })).then(function (n) {
      if (!alive) return;
      works.forEach(function (w) { var p = personal[w.id]; p.text = n[w.id].text; p.photos = n[w.id].photos; });
      drawChips(); draw();
    });

    return { unmount: function () { alive = false; root.textContent = ""; } };
  };
})();

/* 나의 작은 묵상 노트 — 서버·계정 없이 이 기기의 브라우저(IndexedDB)에만 저장한다.
   텍스트와 사진은 어디로도 전송되지 않는다. 문구는 content 파일의 BOOK.note에서 읽는다. */
(function () {
  "use strict";
  var AB = window.ArtBook = window.ArtBook || {};
  var dbp = null; // IndexedDB 연결은 작품이 바뀌어도 하나만 쓴다
  AB.mountNotes = function (B) {
  if (!B || !B.note) return { unmount: function () {}, reveal: function () {} };
  var offs = [];
  function on(t, ev, fn) { t.addEventListener(ev, fn); offs.push(function () { t.removeEventListener(ev, fn); }); }
  var N = B.note, MAXP = 3, MAXTXT = 3000, DB = "artbible-notes", STORE = "notes", ID = B.id;
  var LSKEY = "artbible:" + ID + ":note-text:v1";

  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function add(p) { for (var i = 1; i < arguments.length; i++) if (arguments[i]) p.appendChild(arguments[i]); return p; }
  function btn(label, cls) { var b = el("button", cls || "nbtn", label); b.type = "button"; return b; }

  /* ---------- 저장소 ---------- */
  var mode = "idb"; // idb | ls | none
  function openDB() {
    if (dbp) return dbp;
    dbp = new Promise(function (res, rej) {
      if (!window.indexedDB) return rej(new Error("no-idb"));
      var r;
      try { r = indexedDB.open(DB, 1); } catch (e) { return rej(e); }
      r.onupgradeneeded = function () { r.result.createObjectStore(STORE, { keyPath: "id" }); };
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error || new Error("idb-error")); };
      r.onblocked = function () { rej(new Error("idb-blocked")); };
    });
    return dbp;
  }
  function emptyRec() { return { id: ID, feeling: "", reflection: "", photos: [], updatedAt: null }; }
  function lsOK() { try { localStorage.setItem("__t", "1"); localStorage.removeItem("__t"); return true; } catch (e) { return false; } }

  function load() {
    return openDB().then(function (db) {
      return new Promise(function (res, rej) {
        var q = db.transaction(STORE, "readonly").objectStore(STORE).get(ID);
        q.onsuccess = function () { res(q.result || emptyRec()); };
        q.onerror = function () { rej(q.error); };
      });
    }).catch(function () {
      var rec = emptyRec();
      if (lsOK()) {
        mode = "ls";
        try { var v = JSON.parse(localStorage.getItem(LSKEY)); if (v) { rec.feeling = String(v.feeling || ""); rec.reflection = String(v.reflection || ""); } } catch (e) {}
      } else { mode = "none"; }
      return rec;
    });
  }
  function persist(rec) {
    if (mode === "none") return Promise.reject(new Error("no-storage"));
    if (mode === "ls") {
      return new Promise(function (res, rej) {
        try { localStorage.setItem(LSKEY, JSON.stringify({ feeling: rec.feeling, reflection: rec.reflection })); res(); } catch (e) { rej(e); }
      });
    }
    return openDB().then(function (db) {
      return new Promise(function (res, rej) {
        var tx = db.transaction(STORE, "readwrite");
        tx.oncomplete = function () { res(); };
        tx.onerror = function () { rej(tx.error); };
        tx.onabort = function () { rej(tx.error || new Error("aborted")); };
        try { tx.objectStore(STORE).put(rec); } catch (e) { rej(e); }
      });
    });
  }

  /* ---------- 상태 ---------- */
  var rec = emptyRec(), urls = {}, dirty = false, timer = null, chain = Promise.resolve();
  var ui = {};

  function say(text, kind) { ui.status.textContent = text; ui.status.className = "nstatus" + (kind ? " " + kind : ""); }
  function errText(e) {
    var n = e && (e.name || "");
    if (n === "QuotaExceededError" || /quota/i.test(String(e && e.message))) return N.msg.quota;
    return N.msg.failed;
  }
  function time() { var d = new Date(); return (d.getHours() < 10 ? "0" : "") + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes(); }

  function save() {
    clearTimeout(timer); dirty = false;
    rec.updatedAt = new Date().toISOString();
    var snap = { id: rec.id, feeling: rec.feeling, reflection: rec.reflection, photos: rec.photos.slice(), updatedAt: rec.updatedAt };
    chain = chain.then(function () { return persist(snap); }).then(function () {
      say(N.msg.saved + " · " + time() + (mode === "ls" ? " " + N.msg.textOnly : ""), "ok");
      return true;
    }, function (e) { dirty = true; say(errText(e), "bad"); return false; });
    return chain;
  }
  function later() { dirty = true; say(N.msg.typing, ""); clearTimeout(timer); timer = setTimeout(save, 600); }
  function flush() { if (dirty) save(); }
  on(document, "visibilitychange", function () { if (document.visibilityState === "hidden") flush(); });
  on(window, "pagehide", flush);

  /* ---------- 사진 ---------- */
  function shrink(file) {
    return new Promise(function (res, rej) {
      var u = URL.createObjectURL(file), img = new Image();
      img.onload = function () {
        var m = Math.max(img.naturalWidth, img.naturalHeight), s = Math.min(1, 1600 / m);
        var w = Math.max(1, Math.round(img.naturalWidth * s)), h = Math.max(1, Math.round(img.naturalHeight * s));
        var c = document.createElement("canvas"); c.width = w; c.height = h;
        var g = c.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, w, h); g.drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(u);
        c.toBlob(function (b) { b ? res(b) : rej(new Error("toBlob")); }, "image/jpeg", 0.82);
      };
      img.onerror = function () { URL.revokeObjectURL(u); rej(new Error("decode")); };
      img.src = u;
    });
  }
  function pid() { return "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  function addFiles(files) {
    var list = Array.prototype.slice.call(files || []), room = MAXP - rec.photos.length;
    if (!list.length) return;
    if (room <= 0) { say(N.msg.maxPhotos, "bad"); return; }
    var skipped = list.length > room; list = list.slice(0, room);
    say(N.msg.processing, "");
    var failed = 0;
    list.reduce(function (p, f) {
      return p.then(function () {
        if (!/^image\//.test(f.type) && !/\.(jpe?g|png|webp|gif|heic|heif)$/i.test(f.name)) { failed++; return; }
        return shrink(f).then(function (b) { rec.photos.push({ pid: pid(), name: (f.name || "photo").slice(0, 80), type: "image/jpeg", blob: b }); }, function () { failed++; });
      });
    }, Promise.resolve()).then(function () {
      renderPhotos();
      return save();
    }).then(function (ok) {
      if (!ok) return; // 실패 안내(용량 부족/저장 실패)는 save()가 이미 표시했다
      if (navigator.storage && navigator.storage.persist) { try { navigator.storage.persist(); } catch (e) {} }
      if (failed) say(N.msg.badImage, "bad");
      else if (skipped) say(N.msg.maxPhotos, "bad");
    });
  }

  function removePhoto(id) {
    if (!window.confirm(N.msg.confirmPhoto)) return;
    rec.photos = rec.photos.filter(function (p) { return p.pid !== id; });
    if (urls[id]) { URL.revokeObjectURL(urls[id]); delete urls[id]; }
    renderPhotos(); save();
  }

  function renderPhotos() {
    var g = ui.grid; g.textContent = "";
    rec.photos.forEach(function (p, i) {
      if (!urls[p.pid]) urls[p.pid] = URL.createObjectURL(p.blob);
      var f = el("figure", "ph");
      var im = el("img"); im.src = urls[p.pid]; im.alt = "내가 고른 사진 " + (i + 1); im.loading = "lazy";
      var open = el("button", "ph-open"); open.type = "button"; open.setAttribute("aria-label", "사진 " + (i + 1) + " 크게 보기 / 작게 보기");
      open.appendChild(im);
      open.addEventListener("click", function () { f.classList.toggle("big"); });
      var del = el("button", "ph-del", "삭제"); del.type = "button"; del.setAttribute("aria-label", "사진 " + (i + 1) + " 삭제");
      del.addEventListener("click", function () { removePhoto(p.pid); });
      add(f, open, del); g.appendChild(f);
    });
    var left = MAXP - rec.photos.length;
    ui.addPhoto.hidden = left <= 0 || mode !== "idb";
    ui.photoCount.textContent = mode === "idb" ? rec.photos.length + " / " + MAXP : "";
    ui.photoOff.hidden = mode === "idb";
  }

  /* ---------- 내보내기 · 가져오기 ---------- */
  function toDataURL(b) {
    return new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(r.result); }; r.onerror = function () { rej(r.error); }; r.readAsDataURL(b); });
  }
  function fromDataURL(u) {
    var m = /^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+\/=]+)$/.exec(u);
    if (!m) throw new Error("bad-photo");
    var bin = atob(m[2]), a = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i);
    if (a.length > 6 * 1024 * 1024) throw new Error("big-photo");
    return new Blob([a], { type: m[1] });
  }
  function hasContent() { return !!(rec.feeling.trim() || rec.reflection.trim() || rec.photos.length); }

  function dateStr(d) { return d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일"; }
  function isoDay(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }

  /* ---- B. 내 기록 백업 (이전 내보내기 파일과 같은 형식: 호환 유지) ---- */
  function saveBackup() {
    if (!hasContent()) { say(N.msg.nothingToKeep, "bad"); return; }
    say(N.msg.working, "");
    Promise.all(rec.photos.map(function (p) { return toDataURL(p.blob).then(function (d) { return { name: p.name, type: p.type, dataUrl: d }; }); })).then(function (ph) {
      var data = { readme: N.backup.readme, format: "artbible-note", version: 1, bookId: ID, bookTitle: B.title, exportedAt: new Date().toISOString(),
        feeling: rec.feeling, reflection: rec.reflection, photos: ph };
      var text = JSON.stringify(data), name = "artbible-backup-" + ID + "-" + isoDay(new Date()) + ".artbible.json";
      var coarse = window.matchMedia && window.matchMedia("(pointer:coarse)").matches;
      // 휴대전화: 공유 시트(‘파일에 저장’)가 가장 확실하다. 파일 내용을 화면에 띄우는 일을 피한다.
      if (coarse && navigator.canShare && navigator.share) {
        var f; try { f = new File([text], name, { type: "application/json" }); } catch (e) { f = null; }
        if (f && navigator.canShare({ files: [f] })) {
          return navigator.share({ files: [f], title: "내 손안의 예술성경 · 내 기록 백업" }).then(
            function () { say(N.msg.backupShared, "ok"); },
            function (e) { if (e && e.name === "AbortError") say(N.msg.backupCancelled, ""); else downloadBackup(text, name); });
        }
      }
      downloadBackup(text, name);
    }).catch(function () { say(N.msg.backupFailed, "bad"); });
  }
  function downloadBackup(text, name) {
    // 내용 형식을 숨기는 MIME(octet-stream)으로 내려받게 해 브라우저가 화면에 띄우지 않도록 한다.
    var u = URL.createObjectURL(new Blob([text], { type: "application/octet-stream" })), a = document.createElement("a");
    a.href = u; a.download = name; a.rel = "noopener"; a.hidden = true; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(u); }, 30000);
    say(N.msg.backupDownloaded, "ok");
  }

  /* ---- A. 나의 묵상책 PDF (브라우저 인쇄 → PDF로 저장. 글꼴은 기기의 한글 글꼴을 사용) ---- */
  var oldTitle = null;
  function buildPrint() {
    var P = N.pdf, now = new Date(), old = document.getElementById("printbook"); if (old) old.remove();
    var rights = (B.sources && B.sources.records) || {};
    var d = el("div"); d.id = "printbook";
    var head = el("header", "pb-head");
    add(head, el("p", "pb-series", P.series), el("h1", "pb-title", B.title),
      el("p", "pb-pass", B.passage + "  ·  " + P.savedOn + " " + dateStr(now)));
    d.appendChild(head);
    if (rights.art && rights.art.pdfInclude === true) {
      var art = el("div", "pb-art"), fig = el("figure"), im = el("img"); im.src = B.look.image.src; im.alt = B.look.image.alt;
      add(fig, im); art.appendChild(fig);
      var cap = el("div", "pb-cap");
      add(cap, el("p", "pb-artist", B.look.caption.artist.split(" (")[0]), el("p", null, B.look.caption.work), el("p", "pb-small", B.look.caption.meta));
      art.appendChild(cap); d.appendChild(art);
    }
    if (rights.bible && rights.bible.pdfInclude === true) {
      var S = B.word.scripture, bq = el("blockquote", "pb-scr");
      add(bq, el("p", "pb-small", S.range + " · " + S.version));
      S.lines.forEach(function (l) { var p = el("p"); add(p, el("sup", null, String(l.v)), document.createTextNode(" " + l.t)); bq.appendChild(p); });
      d.appendChild(bq);
    }
    function block(title, text) {
      if (!text.trim()) return;
      var b = el("section", "pb-sec"); add(b, el("h2", null, title), el("div", "pb-text", text)); d.appendChild(b);
    }
    block(N.feelingLabel, rec.feeling); block(N.reflectionLabel, rec.reflection);
    if (rec.photos.length) {
      var ps = el("section", "pb-sec"), g = el("div", "pb-photos n" + rec.photos.length);
      add(ps, el("h2", null, P.photosTitle));
      rec.photos.forEach(function (p, i) {
        if (!urls[p.pid]) urls[p.pid] = URL.createObjectURL(p.blob);
        var f = el("figure"), pi = el("img"); pi.src = urls[p.pid]; pi.alt = "사진 " + (i + 1); add(f, pi); g.appendChild(f);
      });
      add(ps, g); d.appendChild(ps);
    }
    var foot = el("footer", "pb-foot"); add(foot, el("p", null, P.credit), el("p", null, P.local));
    d.appendChild(foot);
    return d;
  }
  function doPdf() {
    if (!hasContent()) { say(N.msg.nothingToKeep, "bad"); return; }
    flush();
    var d;
    try { d = buildPrint(); document.body.appendChild(d); } catch (e) { say(N.msg.pdfFailed, "bad"); return; }
    var imgs = Array.prototype.slice.call(d.querySelectorAll("img"));
    Promise.all(imgs.map(function (i) { return i.decode ? i.decode().catch(function () {}) : Promise.resolve(); })).then(function () {
      oldTitle = document.title;
      document.title = N.pdf.title + " · " + B.title + " · " + isoDay(new Date());
      say(N.msg.pdfOpened, "ok");
      window.print();
    });
  }
  on(window, "afterprint", function () {
    if (oldTitle !== null) { document.title = oldTitle; oldTitle = null; }
    var d = document.getElementById("printbook"); if (d) d.remove();
  });

  function doImport(file) {
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) { say(N.msg.importBad, "bad"); return; }
    var r = new FileReader();
    r.onerror = function () { say(N.msg.importBad, "bad"); };
    r.onload = function () {
      var d, photos = [];
      try {
        d = JSON.parse(r.result);
        if (!d || d.format !== "artbible-note" || d.version !== 1 || d.bookId !== ID) throw new Error("format");
        if (!Array.isArray(d.photos) || d.photos.length > MAXP) throw new Error("photos");
        d.photos.forEach(function (p) { photos.push({ pid: pid(), name: String(p.name || "photo").slice(0, 80), type: "image/jpeg", blob: fromDataURL(String(p.dataUrl)) }); });
      } catch (e) { say(e && e.message === "format" ? N.msg.importWrong : N.msg.importBad, "bad"); return; }
      if (hasContent() && !window.confirm(N.msg.confirmImport)) return;
      Object.keys(urls).forEach(function (k) { URL.revokeObjectURL(urls[k]); }); urls = {};
      rec.feeling = String(d.feeling || "").slice(0, MAXTXT); rec.reflection = String(d.reflection || "").slice(0, MAXTXT); rec.photos = photos;
      ui.t1.value = rec.feeling; ui.t2.value = rec.reflection; grow(ui.t1); grow(ui.t2); renderPhotos();
      save().then(function (ok) { if (ok) say(N.msg.imported, "ok"); });
    };
    r.readAsText(file);
  }

  function clearAll() {
    if (!window.confirm(N.msg.confirmClear)) return;
    Object.keys(urls).forEach(function (k) { URL.revokeObjectURL(urls[k]); }); urls = {};
    rec = emptyRec(); ui.t1.value = ""; ui.t2.value = ""; grow(ui.t1); grow(ui.t2); renderPhotos();
    save().then(function (ok) { if (ok) say(N.msg.cleared, "ok"); });
  }

  function grow(t) { t.style.height = "auto"; t.style.height = Math.max(t.scrollHeight + 2, 150) + "px"; }

  /* ---------- 화면 ---------- */
  function field(id, label, hint, key) {
    var w = el("div", "nfield"), l = el("label", null, label); l.htmlFor = id;
    var t = el("textarea", "nta"); t.id = id; t.maxLength = MAXTXT; t.rows = 4; t.placeholder = hint; t.setAttribute("enterkeyhint", "enter");
    t.addEventListener("input", function () { rec[key] = t.value; grow(t); later(); });
    add(w, l, t); return { w: w, t: t };
  }

  var sec = el("section", "sec note-sec"); sec.id = "note"; sec.setAttribute("aria-labelledby", "note-h");
  var inn = el("div", "in");
  var head = el("h2", null, N.title); head.id = "note-h";
  var intro = el("p", "note-intro", N.intro);
  var open = btn(N.open, "nbtn nopen"); open.setAttribute("aria-expanded", "false"); open.setAttribute("aria-controls", "notePad");
  var skip = el("a", "next", N.skip); skip.href = "#sources";
  skip.addEventListener("click", function (e) { e.preventDefault(); var t = document.getElementById("sources"); if (t) t.scrollIntoView({ block: "start" }); });
  var pad = el("div", "notepad"); pad.id = "notePad"; pad.hidden = true;

  var f1 = field("nFeeling", N.feelingLabel, N.feelingHint, "feeling");
  var f2 = field("nReflect", N.reflectionLabel, N.reflectionHint, "reflection");
  ui.t1 = f1.t; ui.t2 = f2.t;

  var pwrap = el("div", "nfield");
  var plabel = el("p", "nlabel", N.photosLabel), pcount = el("span", "pcount"); plabel.appendChild(pcount);
  ui.photoCount = pcount;
  ui.grid = el("div", "pgrid");
  var inp = el("input"); inp.type = "file"; inp.accept = "image/*"; inp.multiple = true; inp.hidden = true; inp.id = "nFile";
  ui.addPhoto = btn(N.addPhoto, "nbtn");
  ui.addPhoto.addEventListener("click", function () { inp.value = ""; inp.click(); });
  inp.addEventListener("change", function () { addFiles(inp.files); });
  ui.photoOff = el("p", "nsmall", N.msg.photosOff); ui.photoOff.hidden = true;
  add(pwrap, plabel, el("p", "nsmall", N.photosHint), ui.grid, ui.addPhoto, inp, ui.photoOff);

  ui.status = el("p", "nstatus"); ui.status.setAttribute("role", "status"); ui.status.setAttribute("aria-live", "polite");

  function keepBlock(title, desc, buttons, hint) {
    var b = el("div", "nkeep");
    add(b, el("h3", null, title), el("p", "nsmall", desc));
    var r = el("div", "nrow"); buttons.forEach(function (x) { r.appendChild(x); }); b.appendChild(r);
    if (hint) b.appendChild(el("p", "nsmall nhint", hint));
    return b;
  }
  var bpdf = btn(N.pdf.button, "nbtn nprimary"); bpdf.addEventListener("click", doPdf);
  var bsave = btn(N.backup.save), bload = btn(N.backup.load);
  var imp = el("input"); imp.type = "file"; imp.hidden = true; // accept 제한을 두지 않는다(휴대전화 파일 선택에서 .json/.artbible.json이 비활성화되는 것을 피함)
  bsave.addEventListener("click", saveBackup);
  bload.addEventListener("click", function () { imp.value = ""; imp.click(); });
  imp.addEventListener("change", function () { doImport(imp.files && imp.files[0]); });
  var bc = btn(N.clearLabel, "nbtn nquiet"); bc.addEventListener("click", clearAll);
  var keep = el("div", "nkeeps");
  add(keep, el("h3", "nkeep-h", N.keepTitle), keepBlock(N.pdf.title, N.pdf.desc, [bpdf], N.pdf.hint),
    keepBlock(N.backup.title, N.backup.desc, [bsave, bload, imp]));
  var rowc = el("div", "nrow nclear"); rowc.appendChild(bc);

  var priv = el("div", "nprivacy");
  N.privacy.forEach(function (t) { add(priv, el("p", null, t)); });

  add(pad, f1.w, f2.w, pwrap, ui.status, keep, rowc, priv);
  add(inn, head, intro, open, pad, skip);
  sec.appendChild(inn);
  var anchor = document.getElementById("sources");
  anchor.parentNode.insertBefore(sec, anchor);

  function setOpen(v) {
    pad.hidden = !v; open.setAttribute("aria-expanded", String(v));
    open.textContent = v ? N.close : N.open;
    if (v) { grow(ui.t1); grow(ui.t2); }
  }
  open.addEventListener("click", function () { setOpen(pad.hidden); });

  load().then(function (r) {
    rec = r; ui.t1.value = r.feeling || ""; ui.t2.value = r.reflection || "";
    renderPhotos();
    if (mode === "ls") say(N.msg.fallbackLs, "bad");
    else if (mode === "none") say(N.msg.noStorage, "bad");
    if (hasContent()) { setOpen(true); if (mode === "idb") say(N.msg.restored, "ok"); }
  });

  return {
    unmount: function () {
      flush(); clearTimeout(timer);
      offs.forEach(function (f) { f(); });
      Object.keys(urls).forEach(function (k) { URL.revokeObjectURL(urls[k]); }); urls = {};
      var d = document.getElementById("printbook"); if (d) d.remove();
      if (oldTitle !== null) { document.title = oldTitle; oldTitle = null; }
    },
    reveal: function () { setOpen(true); sec.scrollIntoView({ block: "start", behavior: "instant" }); }
  };
  };
})();

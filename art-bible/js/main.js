/* 시작점: 작품 등록 · 불러오기 · 주소(#) 기반 화면 전환. 서버 없이 정적 파일만 쓴다.
   주소: #/ = 서재, #/w/<id> = 작품 감상, #/w/<id>/note = 작품 감상의 묵상 노트로 바로 이동.
   '#s2'처럼 #/로 시작하지 않는 해시는 화면 전환으로 보지 않는다. */
(function () {
  "use strict";
  var AB = window.ArtBook = window.ArtBook || {};
  AB.works = AB.works || {};
  var ID_RE = /^[a-z0-9][a-z0-9-]*$/;
  /* index.html의 이 스크립트 주소에 붙은 ?v=값을 읽어 작품 파일·표지에도 똑같이 붙인다(캐시 갱신용) */
  AB.ver = (function () { var m = document.currentScript && /[?&]v=([\w.-]+)/.exec(document.currentScript.src); return m ? m[1] : ""; })();
  AB.vurl = function (u) { return AB.ver ? u + (u.indexOf("?") < 0 ? "?" : "&") + "v=" + AB.ver : u; };

  AB.register = function (w) {
    if (!w || typeof w.id !== "string" || !ID_RE.test(w.id)) { console.warn("[작품 등록 거부] 잘못된 id:", w && w.id); return; }
    AB.works[w.id] = w;
  };

  var root = document.getElementById("book");
  var barHome = document.getElementById("barHome"), barScene = document.getElementById("barScene"), bar = document.getElementById("bar");
  var current = null, token = 0, status = {}; // status[id] = 'ok' | 'missing' | 'invalid'

  function loadWork(id) {
    return new Promise(function (res) {
      if (AB.works[id]) return res(AB.works[id]);
      var s = document.createElement("script");
      s.src = AB.vurl("content/works/" + encodeURIComponent(id) + ".js");
      s.onload = function () { res(AB.works[id] || null); };
      s.onerror = function () { res(null); };
      document.head.appendChild(s);
    });
  }
  function listable(w) { return w && w.meta && w.meta.status !== "hidden" && w.title && w.meta.themes && w.meta.bible && w.meta.art && w.meta.music; }

  /* 매니페스트 순서대로 불러오고, 읽을 수 없는 작품은 목록에서 조용히 뺀다(콘솔에만 남김). */
  function loadAll() {
    var ids = [], seen = {};
    ((window.ArtBookManifest && window.ArtBookManifest.works) || []).forEach(function (id) { if (!seen[id] && ID_RE.test(id)) { seen[id] = 1; ids.push(id); } });
    return Promise.all(ids.map(loadWork)).then(function (ws) {
      var out = [];
      ws.forEach(function (w, i) {
        if (!w) { status[ids[i]] = "missing"; console.warn("[서재] 작품 파일을 읽지 못했습니다:", ids[i]); }
        else if (!listable(w)) { status[ids[i]] = "invalid"; console.warn("[서재] meta가 부족해 목록에서 뺐습니다:", ids[i]); }
        else { status[ids[i]] = "ok"; out.push(w); }
      });
      return out;
    });
  }

  function parse() {
    var h = location.hash;
    if (!h || h === "#" || h === "#/") return { view: "lib" };
    var m = /^#\/w\/([^\/]+)(?:\/(note))?$/.exec(h);
    if (m) { try { return { view: "work", id: decodeURIComponent(m[1]), note: !!m[2] }; } catch (e) { return { view: "lib" }; } }
    return null;
  }

  function showMessage(text) {
    root.textContent = "";
    var d = document.createElement("div"); d.className = "lib-msg";
    var p = document.createElement("p"); p.textContent = text;
    var a = document.createElement("a"); a.href = "#/"; a.className = "nbtn nprimary lib-back"; a.textContent = "서재로 돌아가기";
    d.appendChild(p); d.appendChild(a); root.appendChild(d);
  }

  function setBar(kind) {
    bar.classList.remove("on-wall");
    bar.classList.toggle("is-lib", kind === "lib"); // 서재 화면에서는 표지 제목과 겹치므로 상단 바를 숨긴다
    if (kind === "lib") { barHome.textContent = ""; barHome.removeAttribute("href"); barHome.className = "bar-series"; barScene.textContent = ""; }
    else { barHome.textContent = "← 서재"; barHome.setAttribute("href", "#/"); barHome.className = "bar-series bar-home"; }
  }

  function render() {
    var r = parse(); if (!r) return;
    var my = ++token;
    if (current) { try { current.unmount(); } catch (e) { console.warn(e); } current = null; }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (r.view === "lib") {
      setBar("lib"); document.title = "내 손안의 예술성경 · 서재";
      loadAll().then(function (list) {
        if (my !== token) return;
        current = AB.mountLibrary(list);
      });
      return;
    }
    setBar("work");
    loadWork(r.id).then(function (B) {
      if (my !== token) return;
      if (!B || !B.scenes) { document.title = "내 손안의 예술성경"; showMessage("찾는 작품을 열 수 없습니다. 서재에서 다시 골라 주세요."); current = { unmount: function () { root.textContent = ""; } }; return; }
      document.title = "내 손안의 예술성경 · " + B.title;
      var w = AB.mountWork(B), n = AB.mountNotes(B);
      var sp = AB.mountSpread ? AB.mountSpread(B, w) : null; // 넓은 화면에서만 책장 넘김 보기(js/spread.js)
      current = { unmount: function () { if (sp) sp.unmount(); n.unmount(); w.unmount(); } };
      if (r.note) setTimeout(function () { if (my !== token) return; if (sp && sp.active()) sp.go(w.hooks.scenes.length - 1); n.reveal(); }, 60);
    });
  }

  window.addEventListener("hashchange", render);
  AB.start = render; // 모든 스크립트를 읽은 뒤 index.html에서 호출
})();

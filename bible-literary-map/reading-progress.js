/* 말씀의 숲 성경문학지도 읽기표 — 단락별 로컬 통독 진도 v1
 * 원본 reader.html(본문·연구 자산)을 변경하지 않는 보강 기능.
 * 개인정보/서버 전송 없음. 같은 도메인·같은 브라우저의 localStorage에 저장.
 */
(function () {
  "use strict";
  const KEY = "malsumforest:bible-literary-map:read:v1";
  const frame = document.getElementById("reader");
  if (!frame) return;
  let read = {};
  let storageOK = true;
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
    if (saved && typeof saved === "object" && !Array.isArray(saved)) {
      for (const [id, value] of Object.entries(saved)) {
        if (/^B\d{2}-P\d{4,}$/.test(id) && typeof value === "string") read[id] = value;
      }
    }
  } catch (e) { storageOK = false; }
  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(read)); storageOK = true; }
    catch (e) { storageOK = false; }
  }
  function bookName(doc) {
    return (doc.querySelector('[data-testid="crumb-book"]')?.textContent || "현재 성경").trim();
  }
  function addStyles(doc) {
    if (doc.getElementById("malsum-reading-progress-style")) return;
    const style = doc.createElement("style");
    style.id = "malsum-reading-progress-style";
    style.textContent = [
      ".malsum-progress-panel{margin:12px 0 18px;padding:15px 17px;border:1px solid #cbded5;border-radius:11px;background:#f0f6f1;color:#173f35;line-height:1.6}",
      ".malsum-progress-title{font-weight:750;font-size:16px;margin-bottom:5px}",
      ".malsum-progress-bar{width:100%;height:10px;accent-color:#246a50;display:block;margin:9px 0}",
      ".malsum-progress-footer{font-size:13px;color:#385d50;display:flex;flex-wrap:wrap;gap:9px;align-items:center}",
      ".malsum-progress-next{border:1px solid #8eaea1;border-radius:7px;background:white;color:#14513d;padding:7px 11px;min-height:40px;font:inherit;cursor:pointer}",
      ".malsum-read-check{display:inline-flex;gap:6px;align-items:center;cursor:pointer;font-size:13px;font-weight:700;color:#17634d;margin:0 8px 3px 0;white-space:nowrap}",
      ".malsum-read-check input{width:19px;height:19px;accent-color:#236e4d;flex:none;cursor:pointer}",
      "tr.malsum-is-read>td:first-child{background:#edf7ee}",
      ".malsum-read-check input:focus-visible,.malsum-progress-next:focus-visible{outline:3px solid #3798bb;outline-offset:3px}",
      "@media print{.malsum-progress-panel,.malsum-read-check{display:none!important}tr.malsum-is-read>td:first-child{background:transparent!important}}"
    ].join("\n");
    doc.head.append(style);
  }
  function setProgress(doc) {
    const table = doc.querySelector('table[data-testid="reading-table"]');
    const card = table?.closest(".card");
    if (!table || !card) return;
    const rows = [...table.querySelectorAll("tbody tr[data-passage-row]")];
    const name = bookName(doc);
    let panel = card.querySelector(".malsum-progress-panel");
    if (!panel) {
      panel = doc.createElement("section");
      panel.className = "malsum-progress-panel";
      panel.setAttribute("aria-label", "성경 통독 진도");
      panel.innerHTML = '<div class="malsum-progress-title"></div><progress class="malsum-progress-bar" max="100" value="0"></progress><div class="malsum-progress-footer"><span class="malsum-progress-status"></span><button type="button" class="malsum-progress-next">다음 읽을 곳 보기</button><small class="malsum-storage-note"></small></div>';
      table.before(panel);
      panel.querySelector(".malsum-progress-next").addEventListener("click", function () {
        const next = [...table.querySelectorAll("tbody tr[data-passage-row]")].find(x => !read[x.dataset.passageRow]);
        if (next) next.scrollIntoView({behavior:"smooth",block:"center"});
      });
    }
    for (const row of rows) {
      const id = row.dataset.passageRow;
      if (!/^B\d{2}-P\d{4,}$/.test(id)) continue;
      const cell = row.querySelector("td:first-child");
      if (!cell) continue;
      let checkbox = cell.querySelector("input[data-malsum-read]");
      if (!checkbox) {
        const label = doc.createElement("label");
        label.className = "malsum-read-check";
        checkbox = doc.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.malsumRead = id;
        checkbox.setAttribute("aria-label", cell.textContent.trim() + " 읽음 표시");
        const caption = doc.createElement("span");
        caption.textContent = "읽음";
        label.append(checkbox, caption);
        cell.prepend(label, doc.createElement("br"));
      }
      checkbox.checked = Boolean(read[id]);
      row.classList.toggle("malsum-is-read", checkbox.checked);
    }
    const completed = rows.filter(row => Boolean(read[row.dataset.passageRow])).length;
    const total = rows.length;
    const next = rows.find(row => !read[row.dataset.passageRow]);
    const nextPassage = next?.querySelector("td:first-child")?.textContent?.replace(/^\s*읽음\s*/, "").trim() || "";
    panel.querySelector(".malsum-progress-title").textContent = name + " 통독 진도 · " + completed + " / " + total + "단락";
    const progress = panel.querySelector("progress");
    progress.max = total || 1;
    progress.value = completed;
    panel.querySelector(".malsum-progress-status").textContent = total
      ? (next ? "다음: " + nextPassage : "이 책의 모든 통독 단락을 읽었습니다.")
      : "현재 책의 통독 단락을 불러오는 중입니다.";
    panel.querySelector(".malsum-progress-next").hidden = !next;
    panel.querySelector(".malsum-storage-note").textContent = storageOK
      ? "읽음 기록은 이 브라우저에 저장되며 다른 기기와 동기화되지 않습니다."
      : "브라우저 저장 공간을 사용할 수 없어 새로고침 후 기록이 사라질 수 있습니다.";
  }
  function connect() {
    let doc;
    try { doc = frame.contentDocument; } catch (e) { return; }
    if (!doc || !doc.body || doc.documentElement.dataset.malsumProgressReady) return;
    doc.documentElement.dataset.malsumProgressReady = "true";
    addStyles(doc);
    let scheduled = false;
    const update = () => {
      scheduled = false;
      if (doc.defaultView && !doc.defaultView.closed) setProgress(doc);
    };
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      (doc.defaultView || window).requestAnimationFrame(update);
    };
    doc.addEventListener("change", event => {
      const input = event.target.closest?.("input[data-malsum-read]");
      if (!input) return;
      const id = input.dataset.malsumRead;
      if (input.checked) read[id] = new Date().toISOString();
      else delete read[id];
      persist();
      schedule();
    });
    const observer = new MutationObserver(changes => {
      const relevant = changes.some(change => [...change.addedNodes].some(node => {
        if (node.nodeType !== 1) return false;
        return node.matches?.('tr[data-passage-row],table[data-testid="reading-table"],#view-table') ||
          Boolean(node.querySelector?.('tr[data-passage-row],table[data-testid="reading-table"]'));
      }));
      if (relevant) schedule();
    });
    observer.observe(doc.body, {childList:true,subtree:true});
    schedule();
  }
  frame.addEventListener("load", connect);
  if (frame.contentDocument?.readyState === "complete") connect();
})();

/* MALSUM FOREST — header behaviour (no framework, no dependencies)
   · mobile menu: button toggles the nav panel, Esc / outside click / link click close it, focus returns
   · in-page search: matches the copy of each section and lists jump links (there is one page) */
(function () {
  'use strict';
  var header = document.querySelector('.nav');
  var menuBtn = document.querySelector('.nav__menu');
  var menu = document.getElementById('site-menu');
  var searchBtn = document.querySelector('.nav__search');
  var search = document.getElementById('site-search');
  if (!header || !menuBtn || !menu || !searchBtn || !search) return;

  var mobile = window.matchMedia('(max-width: 767.98px)');

  /* ---------- menu ---------- */
  function menuIsOpen() { return header.classList.contains('is-open'); }
  function openMenu() {
    closeSearch();
    header.classList.add('is-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', '메뉴 닫기');
    document.body.style.overflow = 'hidden';
    var first = menu.querySelector('a');
    if (first) first.focus();
  }
  function closeMenu(returnFocus) {
    if (!menuIsOpen()) return;
    header.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', '메뉴 열기');
    document.body.style.overflow = '';
    if (returnFocus) menuBtn.focus();
  }
  menuBtn.addEventListener('click', function () { menuIsOpen() ? closeMenu(true) : openMenu(); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(false); });
  mobile.addEventListener ? mobile.addEventListener('change', function (e) { if (!e.matches) closeMenu(false); })
                          : mobile.addListener(function (e) { if (!e.matches) closeMenu(false); });

  /* ---------- search ---------- */
  var input = search.querySelector('.search__input');
  var results = search.querySelector('.search__results');
  var sections = Array.prototype.map.call(document.querySelectorAll('main section[id]'), function (sec) {
    var h = sec.querySelector('h2, h1');
    var eyebrow = sec.querySelector('.eyebrow');
    return {
      id: sec.id,
      title: h ? (h.innerText || h.textContent).replace(/\s+/g, ' ').trim() : sec.id,
      label: eyebrow ? (eyebrow.innerText || eyebrow.textContent).replace(/\s+/g, ' ').trim() : '',
      text: sec.textContent.replace(/\s+/g, ' ').toLowerCase()
    };
  });
  function searchIsOpen() { return !search.hidden; }
  function openSearch() {
    closeMenu(false);
    search.hidden = false;
    searchBtn.setAttribute('aria-expanded', 'true');
    searchBtn.setAttribute('aria-label', '검색 닫기');
    input.focus();
  }
  function closeSearch(returnFocus) {
    if (!searchIsOpen()) return;
    search.hidden = true;
    searchBtn.setAttribute('aria-expanded', 'false');
    searchBtn.setAttribute('aria-label', '검색 열기');
    if (returnFocus) searchBtn.focus();
  }
  function render(q) {
    results.innerHTML = '';
    q = q.trim().toLowerCase();
    if (!q) return;
    var hits = sections.filter(function (s) { return s.text.indexOf(q) !== -1; });
    if (!hits.length) {
      var li = document.createElement('li');
      li.className = 'search__none';
      li.textContent = '‘' + q + '’에 해당하는 내용이 이 페이지에 없습니다.';
      results.appendChild(li);
      return;
    }
    hits.forEach(function (s) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + s.id;
      a.textContent = s.title;
      if (s.label) { var small = document.createElement('small'); small.textContent = s.label; a.appendChild(small); }
      a.addEventListener('click', function () { closeSearch(false); });
      li.appendChild(a);
      results.appendChild(li);
    });
  }
  searchBtn.addEventListener('click', function () { searchIsOpen() ? closeSearch(true) : openSearch(); });
  input.addEventListener('input', function () { render(input.value); });
  search.addEventListener('submit', function (e) {
    e.preventDefault();
    render(input.value);
    var first = results.querySelector('a');
    if (first) { first.focus(); }
  });

  /* ---------- shared: Esc + outside click ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (menuIsOpen()) closeMenu(true);
    else if (searchIsOpen()) closeSearch(true);
  });
  document.addEventListener('click', function (e) {
    if (header.contains(e.target)) return;
    closeMenu(false);
    closeSearch(false);
  });

  /* ---------- keyboard: move focus to the section on in-page jumps ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var target = document.getElementById(a.getAttribute('href').slice(1));
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    window.setTimeout(function () { target.focus({ preventScroll: true }); }, 0);
  });
})();

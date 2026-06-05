/* Space Log — script.js
   1. Star field generation
   2. Sidebar toggle (mobile)
*/

/* ===== Star field ===== */
(function initStars() {
  var container = document.getElementById('starfield');
  if (!container) return;

  var count = window.innerWidth < 640 ? 55 : 110;
  var frag  = document.createDocumentFragment();

  for (var i = 0; i < count; i++) {
    var s    = document.createElement('div');
    var big  = Math.random() < 0.12; // ~12% slightly larger
    var size = big ? 2 : 1;
    var oLo  = (0.1 + Math.random() * 0.3).toFixed(2);
    var oHi  = (0.5 + Math.random() * 0.5).toFixed(2);
    var dur  = (2   + Math.random() * 5  ).toFixed(1);
    var dly  = (Math.random() * 6         ).toFixed(1);

    s.className  = 'star';
    s.style.cssText =
      'left:'    + (Math.random() * 100).toFixed(2) + '%;' +
      'top:'     + (Math.random() * 100).toFixed(2) + '%;' +
      'width:'   + size + 'px;' +
      'height:'  + size + 'px;' +
      '--o-lo:'  + oLo + ';' +
      '--o-hi:'  + oHi + ';' +
      '--dur:'   + dur + 's;' +
      '--delay:' + dly + 's;';

    frag.appendChild(s);
  }

  container.appendChild(frag);
}());

/* ===== Sidebar toggle ===== */
(function initSidebar() {
  var toggle  = document.getElementById('menuToggle');
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('sidebarOverlay');
  var closeBtn= document.getElementById('sidebarClose');

  if (!toggle || !sidebar) return;

  function open() {
    sidebar.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    sidebar.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay)  overlay.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar.classList.contains('is-open')) close();
  });

  // Safety: if the viewport grows past the mobile breakpoint while the
  // sidebar is open, close it — otherwise the body scroll-lock stays stuck.
  var desktopMQ = window.matchMedia('(min-width: 901px)');
  desktopMQ.addEventListener('change', function (e) {
    if (e.matches && sidebar.classList.contains('is-open')) close();
  });
}());

/* ===== Mascot picker (astronaut customization) ===== */
(function initMascot() {
  var emoji = document.getElementById('astronautEmoji');
  if (!emoji) return;

  var BASE = { neutral: '🧑', woman: '👩', man: '👨' };
  var TONE = {
    'default':       '',
    'light':         '\u{1F3FB}',
    'medium-light':  '\u{1F3FC}',
    'medium':        '\u{1F3FD}',
    'medium-dark':   '\u{1F3FE}',
    'dark':          '\u{1F3FF}'
  };

  var genderBtns = document.querySelectorAll('.sb-pick[data-gender]');
  var toneBtns   = document.querySelectorAll('.sb-tone[data-tone]');

  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function save(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

  var state = {
    gender: load('spacelog.gender') || 'neutral',
    tone:   load('spacelog.tone')   || 'default'
  };
  if (!BASE[state.gender]) state.gender = 'neutral';
  if (!(state.tone in TONE)) state.tone = 'default';

  function render() {
    emoji.textContent = BASE[state.gender] + TONE[state.tone] + '\u200D' + '🚀';
    genderBtns.forEach(function (b) {
      var on = b.getAttribute('data-gender') === state.gender;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    toneBtns.forEach(function (b) {
      var on = b.getAttribute('data-tone') === state.tone;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  genderBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      state.gender = b.getAttribute('data-gender');
      save('spacelog.gender', state.gender);
      render();
    });
  });
  toneBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      state.tone = b.getAttribute('data-tone');
      save('spacelog.tone', state.tone);
      render();
    });
  });

  render();
}());

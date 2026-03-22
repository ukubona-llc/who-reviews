/**
 * shared.js — Ukubona × WHO India
 *
 * Handles:
 *   - Header / footer injection
 *   - Hamburger grid menu
 *   - Theme toggle (dark / light, persisted)
 *   - Scroll progress bar
 *   - Footer chorus rotation (respects data-interval attribute)
 *   - Feather icon replacement after injection
 */

document.addEventListener('DOMContentLoaded', async () => {
  'use strict';

  /* ── PATH RESOLUTION ──────────────────────────────────────────────
     Three positions a page can be in:
       /ukhona/html/level{n}/session{n}.html  →  ../../html/
       /ukhona/html/something.html            →  ../html/
       /index.html  (repo root)               →  ukhona/html/
  ──────────────────────────────────────────────────────────────────── */
  const getPath = (filename) => {
    const path = window.location.pathname;
    if (/\/ukhona\/html\/level\d\//.test(path)) return `../../html/${filename}`;
    if (path.includes('/ukhona/html/'))          return `../html/${filename}`;
    return `ukhona/html/${filename}`;
  };

  /* ── REPO PREFIX (for GitHub Pages subdirectory deployments) ───── */
  const KNOWN_REPOS = ['/who-i', '/who-reviews', '/repos-00'];
  const BASE = KNOWN_REPOS.find(r => window.location.pathname.startsWith(r)) || '';

  const fixLinks = (container) => {
    if (!container || !BASE) return;
    container.querySelectorAll('a[href^="/"]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href.startsWith(BASE)) a.setAttribute('href', BASE + href);
    });
  };

  /* ── INJECTION ENGINE ─────────────────────────────────────────── */
  async function inject(id, filename) {
    const el = document.getElementById(id);
    if (!el) return; // placeholder not present on this page — silently skip

    try {
      const res = await fetch(getPath(filename));
      if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${filename}`);
      el.innerHTML = await res.text();
      fixLinks(el);

      // Re-execute any <script> tags in the injected fragment
      el.querySelectorAll('script').forEach(old => {
        const s = document.createElement('script');
        if (old.src)           s.src         = old.src;
        if (old.type)          s.type        = old.type;
        if (old.textContent)   s.textContent = old.textContent;
        old.replaceWith(s);
      });

    } catch (err) {
      console.warn(`[shared] could not load ${filename}:`, err.message);
      el.innerHTML = `
        <div style="padding:.75rem 1rem;font-family:monospace;font-size:.7rem;
                    color:#ef9a9a;background:rgba(239,83,80,.08);border-radius:6px;">
          ${filename} unavailable — ${err.message}
        </div>`;
    }
  }

  /* ── LOAD PARTIALS ────────────────────────────────────────────── */
  await Promise.all([
    inject('header',             'header.html'),
    inject('footer-placeholder', 'footer.html'),
  ]);

  /* ── FEATHER ICONS ────────────────────────────────────────────── */
  // Run after injection so icons in header/footer are also replaced.
  if (window.feather) {
    try { feather.replace(); } catch (_) {}
  }

  // Re-apply stored theme now that the header button exists in the DOM
  {
    const theme = localStorage.getItem('ukubona-theme')
               || localStorage.getItem('theme')
               || 'dark';
    const btn = document.getElementById('toggle-theme');
    if (btn) btn.textContent = theme === 'dark' ? '🌙' : '☀️';
    const logo = document.getElementById('logo');
    if (logo) {
      const src = logo.getAttribute(`data-${theme}-src`);
      if (src) logo.src = src;
    }
  }

  /* ── INIT ALL FEATURES ────────────────────────────────────────── */
  initGridMenu();
  initThemeToggle();
  initScrollProgress();
  initFooterChorus();

  /* ── GRID MENU ────────────────────────────────────────────────── */
  function initGridMenu() {
    const btn  = document.getElementById('menuIcon');
    const grid = document.getElementById('gridMenu');
    if (!btn || !grid) return;

    fixLinks(grid);
    let open = false;

    const toggle = (force) => {
      open = (force !== undefined) ? !!force : !open;
      grid.classList.toggle('active', open);
      btn.setAttribute('aria-expanded', String(open));
    };

    btn.addEventListener('click', e => { e.stopPropagation(); toggle(); });

    // Close on outside click
    document.addEventListener('click', e => {
      if (open && !grid.contains(e.target) && !btn.contains(e.target)) toggle(false);
    }, { capture: true, passive: true });

    // Close on Escape
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) toggle(false); });
  }

  /* ── THEME TOGGLE ─────────────────────────────────────────────── */
  function initThemeToggle() {
    const logo  = document.getElementById('logo');
    const saved = localStorage.getItem('ukubona-theme')
               || localStorage.getItem('theme')  // legacy key
               || 'dark';

    const apply = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('ukubona-theme', theme);
      // Button may not exist yet if header hasn't injected — querySelector each time
      const btn = document.getElementById('toggle-theme');
      if (btn)  btn.textContent = theme === 'dark' ? '🌙' : '☀️';
      const lg  = document.getElementById('logo');
      if (lg) {
        const src = lg.getAttribute(`data-${theme}-src`);
        if (src) lg.src = src;
      }
    };

    apply(saved);

    // Re-apply after injection so the injected button gets its emoji
    document.addEventListener('click', e => {
      const btn = e.target.closest('#toggle-theme');
      if (!btn) return;
      const current = document.documentElement.getAttribute('data-theme');
      apply(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ── SCROLL PROGRESS ──────────────────────────────────────────── */
  function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        bar.style.width = (scrollable > 0
          ? (window.scrollY / scrollable) * 100
          : 0) + '%';
        ticking = false;
      });
    }, { passive: true });
  }

  /* ── FOOTER CHORUS ────────────────────────────────────────────── */
  function initFooterChorus() {
    // Defer 50ms so footer fragment scripts finish before we own the timer
    setTimeout(() => {
      const box = document.querySelector('.rotating-chorus');
      if (!box) return;

      const chips    = [...box.querySelectorAll('.chip')];
      const interval = parseInt(box.dataset.interval, 10) || 5000;
      if (chips.length < 2) return;

      let idx = 0;
      chips.forEach((c, i) => { c.style.display = i === 0 ? 'inline' : 'none'; });

      // Take ownership — cancel whatever the footer fragment may have started
      clearInterval(window._chorusTimer);
      window._chorusTimer = setInterval(() => {
        chips[idx].style.display = 'none';
        idx = (idx + 1) % chips.length;
        chips[idx].style.display = 'inline';
      }, interval);
    }, 50);
  }

});
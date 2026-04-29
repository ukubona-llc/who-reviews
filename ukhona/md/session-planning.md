

- https://ukubona-llc.github.io/who/ (App to be shared)
- index.html at this site

```html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ukubona LLC · WHO India</title>
<meta name="description" content="Ukubona LLC — WHO India · AI Tools for Literature Review">
<meta property="og:title" content="Ukubona LLC · WHO India">
<meta property="og:description" content="Ukubona LLC — WHO India · AI Tools for Literature Review">
<meta property="og:type" content="website">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-light.ico" />
    <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-dark.ico"
          media="(prefers-color-scheme: dark)" />
    <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-light.png" as="image" />
    <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-dark.png" as="image" />

  <style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink:    #0f0e0d;
    --ink2:   #3a3630;
    --ink3:   #7a7268;
    --ink4:   #b0a898;
    --paper:  #faf8f4;
    --paper2: #f0ece4;
    --border: #d8d0c0;
    --gold:   #b8860b;
    --gold2:  #d4a017;
    --blue:   #1a3a6b;
    --bar-h:  48px;
  }

  html, body {
    height: 100%;
    overflow: hidden;
    background: var(--paper);
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
  }

  /* ── TOP BAR ── */
  #topbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: var(--bar-h);
    background: var(--ink);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    z-index: 100;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .bar-left {
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }

  .bar-brand {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 1.05rem;
    font-weight: 400;
    color: var(--gold2);
    letter-spacing: 0.01em;
    text-decoration: none;
  }

  .bar-sep {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: rgba(255,255,255,0.18);
    letter-spacing: 0.05em;
  }

  .bar-tag {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.38);
    white-space: nowrap;
  }

  .bar-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .bar-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #2ecc71;
    flex-shrink: 0;
    animation: pulse 2.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.35; }
  }

  .bar-status {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: rgba(255,255,255,0.3);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .bar-link {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    color: rgba(255,255,255,0.35);
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 4px 10px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 4px;
    transition: all 0.15s;
  }
  .bar-link:hover {
    color: #fff;
    border-color: rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.07);
  }

  /* ── LOADER ── */
  #loader {
    position: fixed;
    top: var(--bar-h); left: 0; right: 0; bottom: 0;
    background: var(--paper);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 50;
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }
  #loader.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  /*
   * FIX: wrap wordmark + subtitle in a flex-column block.
   * The old code had .loader-sub with margin-top: -1.4rem which
   * pulled it up into the wordmark text. Now they live in a
   * shared container with a positive gap — clean separation.
   */
  .loader-wordmark-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
  }

  .loader-wordmark {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 2.8rem;
    font-weight: 400;
    color: var(--ink);
    letter-spacing: -0.01em;
    line-height: 1;
  }
  .loader-wordmark em {
    font-style: italic;
    color: var(--gold2);
  }

  .loader-sub {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink4);
    line-height: 1;
    /* no negative margin — subtitle sits cleanly below wordmark */
  }

  /* animated progress track */
  .loader-track {
    width: 220px;
    height: 2px;
    background: var(--border);
    border-radius: 1px;
    overflow: hidden;
    margin-top: 0.5rem;
  }
  .loader-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--gold), var(--gold2));
    border-radius: 1px;
    animation: load 8.0s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  @keyframes load {
    0%   { width: 0%; }
    40%  { width: 65%; }
    80%  { width: 88%; }
    100% { width: 100%; }
  }

  .loader-note {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: var(--ink4);
    letter-spacing: 0.08em;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .loader-note-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--gold2);
    animation: blink 1s step-end infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  /* ── IFRAME ── */
  #frame-wrap {
    position: fixed;
    top: var(--bar-h); left: 0; right: 0; bottom: 0;
  }

  #app-frame {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    background: var(--paper);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 540px) {
    .bar-status, .bar-sep { display: none; }
    .bar-tag { font-size: 9px; letter-spacing: 0.08em; }
  }
</style>
</head>
<body>

<!-- TOP BAR -->
<div id="topbar">
  <div class="bar-left">
    <a class="bar-brand" href="https://ukubona-llc.github.io/" target="_blank" rel="noopener">Ukubona</a>
    <span class="bar-sep">·</span>
    <span class="bar-tag">WHO India · AI Tools for Literature Review</span>
  </div>
  <div class="bar-right">
    <div class="bar-dot" id="status-dot"></div>
    <span class="bar-status" id="status-text">Connecting…</span>
    <a class="bar-link" href="https://ukubona-llc.github.io/who-reviews/" target="_blank" rel="noopener">Open ↗</a>
  </div>
</div>

<!-- LOADING SCREEN -->
<div id="loader">
  <div class="loader-wordmark-block">
    <div class="loader-wordmark">Uku<em>bona</em></div>
    <div class="loader-sub">World Health Organization · India</div>
  </div>
  <div class="loader-track">
    <div class="loader-fill"></div>
  </div>
  <div class="loader-note">
    <div class="loader-note-dot"></div>
    Loading sessions and tools…
  </div>
</div>

<!-- APP IFRAME -->
<div id="frame-wrap">
  <iframe
    id="app-frame"
    src="https://ukb-ai-tools.onrender.com/"
    title="AI Tools for Literature Review"
    allow="fullscreen; storage-access"
    loading="eager"
  ></iframe>
</div>

<script>
  const frame  = document.getElementById('app-frame');
  const loader = document.getElementById('loader');
  const dot    = document.getElementById('status-dot');
  const status = document.getElementById('status-text');

  let frameReady = false;
  let minTimeDone = false;

  function tryHideLoader() {
    if (frameReady && minTimeDone) {
      loader.classList.add('hidden');
      dot.style.background = '#2ecc71';
      status.textContent = 'Live';
    }
  }

  setTimeout(() => { minTimeDone = true; tryHideLoader(); }, 8000);

  frame.addEventListener('load', () => {
    frameReady = true;
    tryHideLoader();
  });

  // Fallback — hide after 6s if iframe never fires load (cross-origin)
  setTimeout(() => {
    frameReady = true;
    tryHideLoader();
  }, 6000);

  // Turn amber while still waiting
  setTimeout(() => {
    if (!frameReady) {
      dot.style.background = '#f39c12';
      status.textContent = 'Loading…';
    }
  }, 2000);
</script>
</body>
</html>

```

- App is hosted at https://ukb-ai-tools.onrender.com/ 
- But notice that users can "open" https://ukubona-llc.github.io/who-reviews/ 
- Its is vite/react

```html

<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AI Tools for Literature Review · Ukubona × WHO India</title>
  <meta name="description" content="A five-level curriculum for WHO India health economists — from prior to posterior, structured as a ROYGBIV loss gradient across the pentadic civilizational stack.">
  <meta name="color-scheme" content="dark light">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-dark.ico" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-light.ico" media="(prefers-color-scheme: light)">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-dark.png" as="image">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-light.png" as="image">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:ital,wght@0,300;1,300&display=swap" rel="stylesheet">
  <link href="ukhona/css/variables.css?v=1.1" rel="stylesheet">
  <link href="ukhona/css/head.css?v=1.1" rel="stylesheet">
  <link href="ukhona/css/card.css?v=1.1" rel="stylesheet">
  <link href="ukhona/css/footer.css" rel="stylesheet">

  <style>
    :root {
      --r: #ff4444;
      --o: #ff8c00;
      --y: #ffd43b;
      --g: #69db7c;
      --b: #4fc3f7;
      --v: #b197fc;
    }
    html { height: 100%; }
    body { min-height: 100%; display: flex; flex-direction: column; }

    .topo-layer { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
    .topo-layer svg { width: 100%; height: 100%; opacity: .04; }
    @keyframes topoFloat { 0%,100%{transform:translate(0,0);} 50%{transform:translate(-12px,8px);} }
    .topo-layer svg g { animation: topoFloat 32s ease-in-out infinite; }

    .landing-stage {
      position: relative; z-index: 10; flex: 1;
      display: flex; flex-direction: column;
      align-items: center; justify-content: flex-start;
      padding: 2rem 1.5rem 6rem;
      margin-top: var(--header-h); text-align: center; gap: 0;
    }

    .lr-eyebrow {
      font-family: 'DM Mono', monospace; font-size: .6rem; font-style: italic;
      letter-spacing: .22em; text-transform: lowercase; color: var(--primary,#c9b99a);
      opacity: 0; margin-bottom: 1.8rem; margin-top: 2.5rem;
      animation: lrFadeUp .8s cubic-bezier(.22,1,.36,1) .1s forwards;
    }
    .lr-headline { font-family: 'Cormorant Garamond', Georgia, serif; line-height: 1; margin: 0; }
    .lr-line { display: block; opacity: 0; }
    .lr-ai {
      font-size: clamp(4rem,12vw,8.5rem); font-weight: 300; font-style: italic;
      color: var(--text,#f0ede6); letter-spacing: -.02em;
      animation: lrFadeUp .9s cubic-bezier(.22,1,.36,1) .25s forwards;
    }
    .lr-tools {
      font-size: clamp(1.4rem,4vw,2.8rem); font-weight: 400;
      letter-spacing: .32em; text-transform: uppercase; color: var(--primary,#c9b99a);
      animation: lrFadeUp .9s cubic-bezier(.22,1,.36,1) .38s forwards; margin: .12em 0 .28em;
    }
    .lr-for {
      font-size: clamp(.8rem,1.8vw,1.1rem); font-weight: 300; font-style: italic;
      letter-spacing: .08em; color: var(--text-secondary,rgba(240,237,230,.45));
      animation: lrFadeUp .9s cubic-bezier(.22,1,.36,1) .5s forwards; margin-bottom: .12em;
    }
    .lr-lit {
      font-size: clamp(2.4rem,7.5vw,5.5rem); font-weight: 300; font-style: italic;
      color: var(--text,#f0ede6);
      animation: lrFadeUp .9s cubic-bezier(.22,1,.36,1) .6s forwards;
    }
    .lr-review {
      font-size: clamp(2.4rem,7.5vw,5.5rem); font-weight: 300;
      color: var(--text-secondary,rgba(240,237,230,.7));
      animation: lrFadeUp .9s cubic-bezier(.22,1,.36,1) .72s forwards;
    }
    .lr-context {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(.85rem,1.8vw,1.05rem); font-weight: 300; font-style: italic;
      color: var(--text-secondary,rgba(240,237,230,.45));
      max-width: 520px; opacity: 0;
      animation: lrFadeUp .9s cubic-bezier(.22,1,.36,1) .78s forwards;
      margin-bottom: .5rem; line-height: 1.55;
    }
    .lr-rule {
      width: 1px; height: 40px;
      background: linear-gradient(to bottom,var(--primary,#c9b99a),transparent);
      margin: 2rem auto; opacity: 0;
      animation: lrFadeUp .9s cubic-bezier(.22,1,.36,1) .82s forwards;
    }

    /* ══ TENSOR ══ */
    .tensor-wrap {
      width: min(800px,96vw); opacity: 0;
      animation: lrFadeUp .9s cubic-bezier(.22,1,.36,1) .92s forwards;
    }
    .loss-eq {
      font-family: 'DM Mono', monospace; font-size: clamp(.55rem,1.4vw,.72rem);
      letter-spacing: .06em; color: var(--text-secondary,rgba(240,237,230,.3));
      text-align: center; margin-bottom: 1.5rem; line-height: 1.8;
    }
    .loss-eq em { color: var(--primary,#c9b99a); font-style: normal; }

    .level-row {
      display: grid; grid-template-columns: 190px 1fr;
      gap: 1px; background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.05);
      border-radius: 10px; overflow: hidden; margin-bottom: 8px;
      transition: transform .15s;
    }
    .level-row:hover { transform: translateX(4px); }

    .level-anchor {
      display: flex; flex-direction: column; justify-content: center;
      padding: 1rem 1.2rem; text-decoration: none; transition: background .15s;
      border-right: 3px solid transparent;
    }
    .level-row:nth-child(2) .level-anchor { background: color-mix(in srgb,var(--r) 13%,var(--surface)); border-right-color: var(--r); }
    .level-row:nth-child(3) .level-anchor { background: color-mix(in srgb,var(--o) 13%,var(--surface)); border-right-color: var(--o); }
    .level-row:nth-child(4) .level-anchor { background: color-mix(in srgb,var(--y) 13%,var(--surface)); border-right-color: var(--y); }
    .level-row:nth-child(5) .level-anchor { background: color-mix(in srgb,var(--g) 13%,var(--surface)); border-right-color: var(--g); }
    .level-row:nth-child(6) .level-anchor { background: color-mix(in srgb,var(--b) 13%,var(--surface)); border-right-color: var(--b); }

    .level-num {
      font-family: 'DM Mono', monospace; font-size: .48rem; font-weight: 300;
      letter-spacing: .18em; text-transform: uppercase; margin-bottom: .3rem;
    }
    .level-row:nth-child(2) .level-num { color: var(--r); }
    .level-row:nth-child(3) .level-num { color: var(--o); }
    .level-row:nth-child(4) .level-num { color: var(--y); }
    .level-row:nth-child(5) .level-num { color: var(--g); }
    .level-row:nth-child(6) .level-num { color: var(--b); }

    .level-title {
      font-family: 'Cormorant Garamond', serif; font-size: 1.1rem;
      font-style: italic; color: var(--text,#f0ede6); line-height: 1.2; margin-bottom: .15rem;
    }
    .level-math {
      font-family: 'DM Mono', monospace; font-size: .5rem;
      letter-spacing: .08em; color: rgba(240,237,230,.35);
    }

    .session-tiles {
      display: grid; grid-template-columns: repeat(5,1fr);
      gap: 1px; background: rgba(255,255,255,.05);
    }
    .s-tile {
      background: var(--surface); padding: .7rem .65rem;
      text-decoration: none; display: flex; flex-direction: column; gap: .2rem;
      transition: background .15s; position: relative; overflow: hidden;
    }
    .s-tile::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
      opacity: .6;
    }
    .level-row:nth-child(2) .s-tile::before { background: var(--r); }
    .level-row:nth-child(3) .s-tile::before { background: var(--o); }
    .level-row:nth-child(4) .s-tile::before { background: var(--y); }
    .level-row:nth-child(5) .s-tile::before { background: var(--g); }
    .level-row:nth-child(6) .s-tile::before { background: var(--b); }

    .level-row:nth-child(2) .s-tile:hover { background: color-mix(in srgb,var(--r) 9%,var(--surface)); }
    .level-row:nth-child(3) .s-tile:hover { background: color-mix(in srgb,var(--o) 9%,var(--surface)); }
    .level-row:nth-child(4) .s-tile:hover { background: color-mix(in srgb,var(--y) 9%,var(--surface)); }
    .level-row:nth-child(5) .s-tile:hover { background: color-mix(in srgb,var(--g) 9%,var(--surface)); }
    .level-row:nth-child(6) .s-tile:hover { background: color-mix(in srgb,var(--b) 9%,var(--surface)); }

    .s-num {
      font-family: 'DM Mono', monospace; font-size: .42rem;
      letter-spacing: .12em; text-transform: uppercase; color: var(--text-secondary); opacity: .5;
    }
    .s-name {
      font-family: 'Inter', sans-serif; font-size: .63rem; font-weight: 400;
      color: var(--text-secondary); line-height: 1.4;
    }

    /* ── legend ── */
    .legend {
      width: min(800px,96vw); margin-top: 2rem; opacity: 0;
      animation: lrFadeUp .9s cubic-bezier(.22,1,.36,1) 1.1s forwards;
    }
    .legend-divider {
      display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;
    }
    .legend-divider span {
      font-family: 'DM Mono', monospace; font-size: .5rem;
      letter-spacing: .25em; text-transform: uppercase;
      color: var(--text-secondary); opacity: .5; white-space: nowrap;
    }
    .legend-divider::before,.legend-divider::after {
      content: ''; flex: 1; height: 1px; background: var(--border);
    }
    .legend-row { display: flex; flex-wrap: wrap; gap: .6rem; justify-content: center; }
    .leg-item {
      display: flex; align-items: center; gap: .45rem;
      font-family: 'DM Mono', monospace; font-size: .52rem;
      letter-spacing: .07em; color: var(--text-secondary);
    }
    .leg-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }

    /* ── tool catalogue ── */
    .lr-search-wrap {
      width: min(580px,92vw); margin-top: 3.5rem; opacity: 0;
      animation: lrFadeUp .9s cubic-bezier(.22,1,.36,1) 1.2s forwards;
    }
    .lr-search {
      display: flex; align-items: center;
      background: var(--glass); border: 1px solid var(--border);
      border-radius: 3px; padding: 0 1rem; gap: .7rem;
      transition: border-color .2s, box-shadow .2s;
    }
    .lr-search:focus-within {
      border-color: var(--primary,#c9b99a);
      box-shadow: 0 0 0 3px color-mix(in srgb,var(--primary,#c9b99a) 12%,transparent);
    }
    .lr-search svg { flex-shrink: 0; color: var(--primary,#c9b99a); opacity: .5; }
    .lr-search input {
      flex: 1; border: none; outline: none; background: transparent;
      color: var(--text); font-family: 'DM Mono', monospace;
      font-size: .8rem; font-weight: 300; letter-spacing: .04em;
      padding: .9rem 0; caret-color: var(--primary,#c9b99a);
    }
    .lr-search input::placeholder { color: var(--text-secondary); opacity: .5; }
    .lr-clear {
      background: none; border: none; cursor: pointer; padding: .2rem;
      color: var(--text-secondary); display: none; line-height: 1; font-size: .9rem; transition: color .15s;
    }
    .lr-clear:hover { color: var(--primary,#c9b99a); }
    .lr-clear.show { display: block; }
    .lr-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: .4rem; margin-top: 1.1rem; }
    .lr-pill {
      font-family: 'DM Mono', monospace; font-size: .57rem;
      letter-spacing: .12em; text-transform: uppercase;
      color: var(--text-secondary); border: 1px solid var(--border);
      padding: .28rem .7rem; border-radius: 2px;
      cursor: pointer; background: transparent;
      transition: color .15s, border-color .15s, background .15s; user-select: none;
    }
    .lr-pill:hover,.lr-pill.active {
      color: var(--primary,#c9b99a); border-color: var(--primary,#c9b99a);
      background: color-mix(in srgb,var(--primary,#c9b99a) 8%,transparent);
    }
    .lr-results { width: min(740px,96vw); margin-top: 2rem; }
    .lr-count { font-family: 'DM Mono', monospace; font-size: .57rem; letter-spacing: .14em; text-transform: uppercase; color: var(--text-secondary); margin-bottom: .9rem; text-align: left; opacity: .6; }
    .lr-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(min(340px,100%),1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 3px; overflow: hidden; }
    .lr-card { background: var(--surface); padding: 1.1rem 1.2rem 1rem; display: flex; flex-direction: column; gap: .3rem; text-align: left; text-decoration: none; transition: background .15s; position: relative; }
    .lr-card::after { content: '↗'; position: absolute; top: .9rem; right: 1rem; font-size: .7rem; color: var(--primary,#c9b99a); opacity: 0; transition: opacity .15s; }
    .lr-card:hover { background: var(--glass); }
    .lr-card:hover::after { opacity: .65; }
    .lr-card-name { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 400; font-style: italic; color: var(--text); transition: color .15s; }
    .lr-card:hover .lr-card-name { color: var(--primary,#c9b99a); }
    .lr-card-focus { font-family: 'DM Mono', monospace; font-size: .55rem; letter-spacing: .12em; text-transform: uppercase; color: var(--primary,#c9b99a); opacity: .7; }
    .lr-card-desc { font-family: 'Inter', sans-serif; font-size: .74rem; font-weight: 300; line-height: 1.55; color: var(--text-secondary); margin-top: .15rem; }
    mark { background: color-mix(in srgb,var(--primary,#c9b99a) 20%,transparent); color: inherit; border-radius: 1px; padding: 0 1px; }
    .lr-empty { padding: 3rem 1rem; display: none; font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-style: italic; color: var(--text-secondary); }

    @keyframes lrFadeUp { from{opacity:0;transform:translateY(14px);} to{opacity:1;transform:translateY(0);} }

    @media (max-width:600px) {
      .level-row { grid-template-columns: 1fr; }
      .level-anchor { border-right: none !important; border-bottom: 3px solid; }
      .level-row:nth-child(2) .level-anchor { border-bottom-color: var(--r); }
      .level-row:nth-child(3) .level-anchor { border-bottom-color: var(--o); }
      .level-row:nth-child(4) .level-anchor { border-bottom-color: var(--y); }
      .level-row:nth-child(5) .level-anchor { border-bottom-color: var(--g); }
      .level-row:nth-child(6) .level-anchor { border-bottom-color: var(--b); }
      .s-name { font-size: .55rem; }
    }
    @media (prefers-reduced-motion:reduce) {
      .lr-eyebrow,.lr-line,.lr-rule,.lr-search-wrap,.tensor-wrap,.lr-context,.legend { animation:none;opacity:1; }
    }
  </style>
</head>
<body>

<div class="topo-layer" aria-hidden="true">
  <svg viewBox="0 0 1000 750" preserveAspectRatio="xMidYMid slice">
    <g fill="none" stroke="currentColor" stroke-width=".8">
      <ellipse cx="500" cy="380" rx="490" ry="340"/>
      <ellipse cx="500" cy="380" rx="430" ry="290"/>
      <ellipse cx="500" cy="380" rx="365" ry="238" stroke-width="1.4"/>
      <ellipse cx="500" cy="380" rx="298" ry="188"/>
      <ellipse cx="500" cy="380" rx="230" ry="140"/>
      <ellipse cx="500" cy="380" rx="164" ry="96" stroke-width="1.4"/>
      <ellipse cx="500" cy="380" rx="100" ry="56"/>
      <ellipse cx="500" cy="380" rx="46" ry="24"/>
      <line x1="0" y1="250" x2="1000" y2="250" stroke-dasharray="2,20"/>
      <line x1="0" y1="500" x2="1000" y2="500" stroke-dasharray="2,20"/>
      <line x1="333" y1="0" x2="333" y2="750" stroke-dasharray="2,20"/>
      <line x1="666" y1="0" x2="666" y2="750" stroke-dasharray="2,20"/>
    </g>
  </svg>
</div>

<div class="scroll-indicator" aria-hidden="true"><div class="scroll-progress"></div></div>
<div class="bg-pattern" aria-hidden="true"></div>
<header class="header" id="header"></header>

<main class="landing-stage">

  <p class="lr-eyebrow">ukubona × who india · θ → L(θ) → ∇L → −η∇L → θ′</p>

  <h1 class="lr-headline" aria-label="AI Tools for Literature Review">
    <span class="lr-line lr-ai">AI</span>
    <span class="lr-line lr-tools">Tools</span>
    <span class="lr-line lr-for">for</span>
    <span class="lr-line lr-lit">Literature</span>
    <span class="lr-line lr-review">Review</span>
  </h1>

  <p class="lr-context">Five levels. Five sessions each. A ROYGBIV loss gradient — from what we already believe to what we now know — built for WHO India health economists.</p>

  <div class="lr-rule" aria-hidden="true"></div>

  <!-- ══ 5×5 TENSOR ══ -->
  <div class="tensor-wrap">

    <div class="loss-eq">
      L<sub>tot</sub> &nbsp;=&nbsp; L<sub>0</sub>(t) &nbsp;+&nbsp; <em>Σ wᵢ · Lᵢ</em> &nbsp;+&nbsp; εᵢ &nbsp;→&nbsp; <em>L<sub>0</sub>(t+1)</em>
    </div>

    <!-- I — Red — A Priori -->
    <div class="level-row">
      <a class="level-anchor" href="ukhona/html/level1/session1.html">
        <span class="level-num">Level I · Red · L₀(t)</span>
        <span class="level-title">A Priori</span>
        <span class="level-math">What we already believe</span>
      </a>
      <div class="session-tiles">
        <a class="s-tile" href="ukhona/html/level1/session1.html"><span class="s-num">I · 1</span><span class="s-name">The Existing Process</span></a>
        <a class="s-tile" href="ukhona/html/level1/session2.html"><span class="s-num">I · 2</span><span class="s-name">The Tools Available</span></a>
        <a class="s-tile" href="ukhona/html/level1/session3.html"><span class="s-num">I · 3</span><span class="s-name">The Framework</span></a>
        <a class="s-tile" href="ukhona/html/level1/session4.html"><span class="s-num">I · 4</span><span class="s-name">The Protocol</span></a>
        <a class="s-tile" href="ukhona/html/level1/session5.html"><span class="s-num">I · 5</span><span class="s-name">The Evidence Brief</span></a>
      </div>
    </div>

    <!-- II — Orange — Weights -->
    <div class="level-row">
      <a class="level-anchor" href="ukhona/html/level2/session1.html">
        <span class="level-num">Level II · Orange · wᵢ</span>
        <span class="level-title">Weights</span>
        <span class="level-math">How we attend</span>
      </a>
      <div class="session-tiles">
        <a class="s-tile" href="ukhona/html/level2/session1.html"><span class="s-num">II · 1</span><span class="s-name">Bias in the Machine</span></a>
        <a class="s-tile" href="ukhona/html/level2/session2.html"><span class="s-num">II · 2</span><span class="s-name">Prompt Engineering</span></a>
        <a class="s-tile" href="ukhona/html/level2/session3.html"><span class="s-num">II · 3</span><span class="s-name">Critical Appraisal</span></a>
        <a class="s-tile" href="ukhona/html/level2/session4.html"><span class="s-num">II · 4</span><span class="s-name">Meta-Analysis Basics</span></a>
        <a class="s-tile" href="ukhona/html/level2/session5.html"><span class="s-num">II · 5</span><span class="s-name">Surveillance Use Cases</span></a>
      </div>
    </div>

    <!-- III — Yellow — Composite Loss -->
    <div class="level-row">
      <a class="level-anchor" href="ukhona/html/level3/session1.html">
        <span class="level-num">Level III · Yellow · ΣwᵢLᵢ</span>
        <span class="level-title">Composite Loss</span>
        <span class="level-math">The civilizational stack</span>
      </a>
      <div class="session-tiles">
        <a class="s-tile" href="ukhona/html/level3/session1.html"><span class="s-num">III · 1</span><span class="s-name">Ethics of AI Evidence</span></a>
        <a class="s-tile" href="ukhona/html/level3/session2.html"><span class="s-num">III · 2</span><span class="s-name">Institutional Integration</span></a>
        <a class="s-tile" href="ukhona/html/level3/session3.html"><span class="s-num">III · 3</span><span class="s-name">Rapid Evidence Reviews</span></a>
        <a class="s-tile" href="ukhona/html/level3/session4.html"><span class="s-num">III · 4</span><span class="s-name">Global Evidence Ecosystems</span></a>
        <a class="s-tile" href="ukhona/html/level3/session5.html"><span class="s-num">III · 5</span><span class="s-name">Future of Evidence</span></a>
      </div>
    </div>

    <!-- IV — Green — Error -->
    <div class="level-row">
      <a class="level-anchor" href="ukhona/html/level4/session1.html">
        <span class="level-num">Level IV · Green · εᵢ + σ + λ</span>
        <span class="level-title">Error</span>
        <span class="level-math">What the model cannot account for</span>
      </a>
      <div class="session-tiles">
        <a class="s-tile" href="ukhona/html/level4/session1.html"><span class="s-num">IV · 1</span><span class="s-name">Residual Bias</span></a>
        <a class="s-tile" href="ukhona/html/level4/session2.html"><span class="s-num">IV · 2</span><span class="s-name">Irreducible Stochasticity</span></a>
        <a class="s-tile" href="ukhona/html/level4/session3.html"><span class="s-num">IV · 3</span><span class="s-name">The Anchor Constraint</span></a>
        <a class="s-tile" href="ukhona/html/level4/session4.html"><span class="s-num">IV · 4</span><span class="s-name">Transferability Limits</span></a>
        <a class="s-tile" href="ukhona/html/level4/session5.html"><span class="s-num">IV · 5</span><span class="s-name">Operating Under Uncertainty</span></a>
      </div>
    </div>

    <!-- V — Blue — Posteriori -->
    <div class="level-row">
      <a class="level-anchor" href="ukhona/html/level5/session1.html">
        <span class="level-num">Level V · Blue · L₀(t+1)</span>
        <span class="level-title">Posteriori</span>
        <span class="level-math">The updated prior</span>
      </a>
      <div class="session-tiles">
        <a class="s-tile" href="ukhona/html/level5/session1.html"><span class="s-num">V · 1</span><span class="s-name">Brief as Parameter Update</span></a>
        <a class="s-tile" href="ukhona/html/level5/session2.html"><span class="s-num">V · 2</span><span class="s-name">Durable Institutional Memory</span></a>
        <a class="s-tile" href="ukhona/html/level5/session3.html"><span class="s-num">V · 3</span><span class="s-name">Continuous Surveillance</span></a>
        <a class="s-tile" href="ukhona/html/level5/session4.html"><span class="s-num">V · 4</span><span class="s-name">The Federated Evidence Twin</span></a>
        <a class="s-tile" href="ukhona/html/level5/session5.html"><span class="s-num">V · 5</span><span class="s-name">The Integrator's Horizon</span></a>
      </div>
    </div>

  </div><!-- /tensor-wrap -->

  <!-- ── ROYGBIV legend ── -->
  <div class="legend">
    <div class="legend-divider"><span>loss gradient · roygbiv · red = highest burden → violet = resolution</span></div>
    <div class="legend-row">
      <span class="leg-item"><span class="leg-dot" style="background:var(--r)"></span>Red · A Priori · L₀(t)</span>
      <span class="leg-item"><span class="leg-dot" style="background:var(--o)"></span>Orange · Weights · wᵢ</span>
      <span class="leg-item"><span class="leg-dot" style="background:var(--y)"></span>Yellow · Composite · ΣwᵢLᵢ</span>
      <span class="leg-item"><span class="leg-dot" style="background:var(--g)"></span>Green · Error · εᵢ</span>
      <span class="leg-item"><span class="leg-dot" style="background:var(--b)"></span>Blue · Posteriori · L₀(t+1)</span>
    </div>
  </div>

  <!-- ══ TOOL CATALOGUE ══ -->
  <div class="lr-search-wrap" role="search">
    <div class="lr-search">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input id="lr-input" type="search" placeholder="search AI tools, methods, topics…   [ / to focus ]" aria-label="Search AI tools" autocomplete="off" spellcheck="false">
      <button class="lr-clear" id="lr-clear" aria-label="Clear search">✕</button>
    </div>
    <div class="lr-pills" id="lr-pills" role="group" aria-label="Filter by category">
      <button class="lr-pill active" data-cat="all">All · 20</button>
      <button class="lr-pill" data-cat="systematic">Systematic Review</button>
      <button class="lr-pill" data-cat="discovery">Discovery</button>
      <button class="lr-pill" data-cat="summarisation">Summarisation</button>
      <button class="lr-pill" data-cat="citation">Citation</button>
      <button class="lr-pill" data-cat="medical">Medical</button>
    </div>
  </div>

  <div class="lr-results" id="lr-results" aria-live="polite">
    <p class="lr-count" id="lr-count"></p>
    <div class="lr-grid" id="lr-grid"></div>
    <p class="lr-empty" id="lr-empty">No tools match — try a different search or filter.</p>
  </div>

</main>

<div id="footer-placeholder"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js"></script>
<script src="ukhona/js/shared.js"></script>
<script>
(function(){
  const TOOLS=[
    {name:"Elicit",cats:["discovery","summarisation"],focus:"General academic research",url:"https://elicit.org",desc:"AI-powered research assistant that finds, summarises, and extracts data from academic papers — designed for systematic literature reviews."},
    {name:"Consensus",cats:["discovery","summarisation"],focus:"General scientific literature",url:"https://consensus.app",desc:"Answers research questions by synthesising evidence directly from peer-reviewed papers, with one-click citations."},
    {name:"Scite",cats:["citation"],focus:"Citation analysis",url:"https://scite.ai",desc:"Shows how papers are cited — supporting, contrasting, or merely mentioning — so you can judge the weight of evidence behind a claim."},
    {name:"Research Rabbit",cats:["discovery"],focus:"Literature discovery & mapping",url:"https://researchrabbit.ai",desc:"Discovers related papers through interactive visualisations and evolving recommendations."},
    {name:"Connected Papers",cats:["discovery","citation"],focus:"Visual literature exploration",url:"https://www.connectedpapers.com",desc:"Builds visual graphs of similar papers based on citation networks, making it easy to spot clusters and seminal works."},
    {name:"Iris.ai",cats:["discovery"],focus:"STEM research mapping",url:"https://iris.ai",desc:"Maps scientific literature using AI concept extraction and knowledge graphs."},
    {name:"Litmaps",cats:["discovery","citation"],focus:"Literature mapping",url:"https://www.litmaps.com",desc:"Creates interactive literature maps to visualise paper relationships over time."},
    {name:"Scholarcy",cats:["summarisation"],focus:"Article summarisation",url:"https://www.scholarcy.com",desc:"Automatically summarises articles, extracts key facts, and generates flashcards for rapid triage."},
    {name:"SciSpace",cats:["summarisation"],focus:"Academic writing & review",url:"https://scispace.com",desc:"AI copilot that explains complex papers in plain language and assists with academic writing."},
    {name:"Paper Digest",cats:["summarisation"],focus:"Paper summarisation",url:"https://www.paperdigest.org",desc:"AI-generated concise digests of recent papers across research fields."},
    {name:"Rayyan",cats:["systematic","medical"],focus:"Systematic reviews (health sciences)",url:"https://rayyan.ai",desc:"Collaborative systematic review platform with AI-assisted abstract screening."},
    {name:"Humata",cats:["summarisation"],focus:"Document querying",url:"https://www.humata.ai",desc:"Query and summarise large PDFs in natural language — essential for grey literature interrogation."},
    {name:"Semantic Scholar",cats:["discovery","summarisation"],focus:"Broad academic search",url:"https://www.semanticscholar.org",desc:"Allen Institute's AI-enhanced academic search with TL;DR summaries and citation graphs."},
    {name:"Dimensions.ai",cats:["discovery","citation"],focus:"Research intelligence",url:"https://www.dimensions.ai",desc:"Discovers publications, grants, datasets, and patents with LMIC filtering capability."},
    {name:"Inciteful",cats:["citation","discovery"],focus:"Bibliometric analysis",url:"https://inciteful.xyz",desc:"Builds citation-based bibliometric networks to identify most-connected papers rapidly."},
    {name:"OpenEvidence",cats:["medical","summarisation"],focus:"Medical literature review",url:"https://www.openevidence.com",desc:"AI medical search engine for evidence-based answers from clinical literature."},
    {name:"Bohrium",cats:["discovery"],focus:"Chemistry & materials science",url:"https://www.bohrium.com",desc:"Accelerates scientific discovery through literature analysis and hypothesis generation."},
    {name:"Evidence Hunt",cats:["medical","systematic"],focus:"Clinical evidence review",url:"https://www.evidencehunt.ai",desc:"Rapid evidence synthesis pulling from clinical guidelines and primary studies."},
    {name:"Nested Knowledge",cats:["systematic","medical"],focus:"Systematic reviews (pharma/biotech)",url:"https://nested-knowledge.com",desc:"Purpose-built for systematic reviews and meta-analyses in life sciences."},
    {name:"DistillerSR",cats:["systematic"],focus:"Systematic reviews (enterprise)",url:"https://www.distillersr.com",desc:"Enterprise systematic review software widely used in regulatory and HTA contexts."},
  ];

  let query='',activeCat='all';
  const input=document.getElementById('lr-input');
  const clearBtn=document.getElementById('lr-clear');
  const grid=document.getElementById('lr-grid');
  const countEl=document.getElementById('lr-count');
  const emptyEl=document.getElementById('lr-empty');
  const pillWrap=document.getElementById('lr-pills');

  function esc(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function hi(t,q){if(!q)return esc(t);return esc(t).replace(new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi'),'<mark>$1</mark>');}
  function matches(t){const c=activeCat==='all'||t.cats.includes(activeCat);if(!c)return false;if(!query)return true;return(t.name+' '+t.desc+' '+t.focus).toLowerCase().includes(query.toLowerCase());}

  function render(){
    const q=query.trim(),f=TOOLS.filter(matches);
    grid.innerHTML='';emptyEl.style.display='none';
    if(!f.length){emptyEl.style.display='block';countEl.textContent='';return;}
    countEl.textContent=f.length+(f.length===TOOLS.length?' tools':' of '+TOOLS.length+' tools');
    f.forEach(t=>{
      const a=document.createElement('a');
      a.className='lr-card';a.href=t.url;a.target='_blank';a.rel='noopener noreferrer';
      a.innerHTML=`<span class="lr-card-name">${hi(t.name,q)}</span><span class="lr-card-focus">${hi(t.focus,q)}</span><span class="lr-card-desc">${hi(t.desc,q)}</span>`;
      grid.appendChild(a);
    });
  }

  input.addEventListener('input',()=>{query=input.value;clearBtn.classList.toggle('show',query.length>0);render();});
  clearBtn.addEventListener('click',()=>{input.value='';query='';clearBtn.classList.remove('show');input.focus();render();});
  pillWrap.addEventListener('click',e=>{const p=e.target.closest('.lr-pill');if(!p)return;activeCat=p.dataset.cat;pillWrap.querySelectorAll('.lr-pill').forEach(x=>x.classList.remove('active'));p.classList.add('active');render();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.activeElement===input){clearBtn.click();}else if(e.key==='/'&&document.activeElement!==input){e.preventDefault();input.focus();}});
  render();
})();
</script>
</body>
</html>
```

- And also https://ukubona-llc.github.io/ 

```md
Ukubona
Ukubona LLC
Twin· Operating Ecosystem
⋮⋮
☀ Light
Ukubona
Ukubona LLC
Twin · Operating · Ecosystem
3+
Tensor
Sensation
2
Matrix
Attention
1
Vector
Intention
E
Eigenmode
Reaction
0
Scalar
Action
Anyone, at any layer of civilization, can be our client.

We build digital twins for individuals, organizations, and governments — turning complex systems into decisions.

The world describes the tensor.
·
Ukubona delivers the scalar.
·
You traverse the geodesic.
Sovereignty is the ability to compute your own scalar.

Enter Portal
The Framework
The compression chain

3+
Tensor
Sensation
The full dimensionality of a system. Everything felt, accumulated, entangled. Reality before it has been named.
2
Matrix
Attention
The relationships between dimensions. What correlates, what compresses, what the system is actually made of.
1
Vector
Intention
The data. The evidence. The specific path through possibility space — bounded by sovereignty, shaped by history.
E
Eigenmode
Reaction
The enduring frequency. The identity that survives every perturbation. What the system fundamentally is, once the noise resolves.
0
Scalar
Action
The decision. One number. The loop closes. The prior updates. Everything that came before collapses into this.
GPUs and TPUs process tensors. Ukubona resolves them.
The world optimizes computation. We optimize decisions.

The geodesic

When the system bends,
we don't resist it — we abide.We route through it.
A geodesic is not the shortest path in theory. It is the least costly path given reality: constrained movement of capital, goods, services, people, and information. When laws ≠ norms, power ≠ legitimacy, and information ≠ truth — the optimal path is not straight. The system changed the metric. We solve for the path.

Two physics. One geodesic.

The digital twin operates at the intersection of two constraint regimes. Newtonian physics governs what moves. Relativistic physics governs what is known. The geodesic is the path between them — the route that closes both loops.

Ontology
under Newtonian constraints
payload
×
velocity
/
cost
momentum per dollar
The physics of movement. Capital, goods, services, people — they have mass, inertia, and friction. Every project bears irreversible real-world cost when it fails. The twin is built here, in the computable domain.

Epistemology
under Relativistic constraints
uncertainty
×
time
/
tokens
epistemic velocity
The physics of knowing. At the limit of speed, information compresses time. The LLM token is the new unit of epistemic cost — replacing months of manual review with milliseconds of inference.

The digital twin is the bridge
Rehearse at epistemic cost. Avoid Newtonian cost.
Information goes ahead. The twin absorbs the irreversible so the system doesn't have to.
The information order

Information moves ahead of capital. Capital moves ahead of people. People ahead of goods. Goods ahead of services. Services regenerate information. The loop closes. The twin lives in the first step — cheapest, fastest, most reversible.

◈
Information
arrives first
◎
Capital
follows signal
◉
People
move with capital
◌
Goods
flow with people
◍
Services
settle last
↺
Why the twin goes first
Moving capital is expensive. Moving people is slow. Moving goods is irreversible. The digital twin operates at information cost only — a representation of the Newtonian world, rehearsed before the irreversible costs are borne. When the model is wrong, the correction costs tokens. When the real system is wrong, it costs money, time, and trust.

Where systems stall

The chain is not a framework. It is a description of what happens to every system that tries to decide. Most stop early. A few go all the way.

3+
The tensor expands.
Most systems never leave it.
2
The matrix organizes.
Some systems begin to see.
1
The vector commits.
Few systems can choose.
E
The eigenmode stabilizes.
Institutions preserve this layer.
0
The scalar decides.
Almost none arrive.
Most systems expand.
Few systems decide.

First Principles
The Compression Chain
Reality arrives as a tensor. Only a few systems compress it all the way to a scalar. The chain is not a metaphor — it is the invariant structure of any system that decides.
Geometry
The Geodesic
The optimal path is not straight. When laws ≠ norms, power ≠ legitimacy, information ≠ truth — the system bends the metric. We solve for the path that still closes the loop.
Economics
Momentum Per Dollar
Payload × velocity / cost. Every client — individual, organization, state — is solving a constrained optimization. We make it computable. The scalar is the answer that was actually needed.
The objective function

payload
×
velocity
/
dollar
momentum per dollar · the scalar that was actually needed
Every client — the household deciding on transplant tourism, the hospital modeling its CKD burden, the planning authority responding to a 24-hour summons without flying blind — is solving the same constrained optimization. We make it computable.

See the ledger →
Turn the complex
into the decisive.
The ghost glyph behind every Ukubona page is 0. Not emptiness. The decision that was actually made. The loop closes here.

3+
→
2
→
1
→
E
→
0
Enter Portal
© 2026 Ukubona LLC
T → M → V → E → S ↺ U(s)
Twin · Operating · Ecosystem
```

- Hesistant, but I must share Epistemology under Relativistic constraints:
  - uncertainty × time/ tokens
  - this is epistemic velocity
  - everybody seeks to minimize uncertainty (research) & time (automation)
  - ai tokens make that possible 
  - free tokens within daily constraints (this must be understood)

- That said, what follows is our zoom sessions, after which i'll prompt you for a plan

## Quick recap

Ukubona demonstrated an AI-powered research platform to Grace, showing how to conduct health technology assessments using various AI tools including Google Notebook, Dimensions AI, and Claude. Grace provided feedback that the presentation would be more effective if structured around traditional research processes (policy question definition, database search, title/abstract screening, data extraction, and synthesis) with a focus on mapping AI tools to these specific research steps rather than a general AI overview. They agreed to modify the approach to include a comparison table of 20 selected AI tools across key parameters like geographical reach, proprietary status, and functionality, followed by practical demonstrations of specific tools in use. The revised format would focus on practical tool comparison rather than comprehensive AI theory, with Grace's team able to conduct deeper dives into individual tools after the initial training session.
## Next steps

- Ukubona: Update the existing resource/website by adding a collapsible table that compares 20 selected AI tools across key parameters (e.g., database coverage, geographical reach, cost/proprietary status, pros/cons) mapped to the main research automation steps, and share the update with Grace by Friday.[](https://tasks.zoom.us?meetingId=DFgmPXl0Qguw4EeLtvQ7GQ%3D%3D&stepId=58479008-43cb-11f1-bf85-a66d558bdcdd)
- Ukubona: Prepare and share (by Friday) the updated materials/session outline for review by Grace, including the new table and proposed session structure.[](https://tasks.zoom.us?meetingId=DFgmPXl0Qguw4EeLtvQ7GQ%3D%3D&stepId=584795c2-43cb-11f1-91eb-a66d558bdcdd)
- Ukubona: (Optionally) Record a demo/walkthrough of the updated materials and share with Grace for feedback.[](https://tasks.zoom.us?meetingId=DFgmPXl0Qguw4EeLtvQ7GQ%3D%3D&stepId=58479805-43cb-11f1-88cb-a66d558bdcdd)
- Ukubona and Grace: Schedule and conduct a future session (proposed as 1 hour: 30 minutes on previous demo, 30 minutes on new demo) to walk through the updated materials and live demo.[](https://tasks.zoom.us?meetingId=DFgmPXl0Qguw4EeLtvQ7GQ%3D%3D&stepId=584799e6-43cb-11f1-9a97-a66d558bdcdd)

## Summary

### AI Research Application Demonstration

Ukubona demonstrated an AI research application to Grace, showing how to create a notebook for a Health Technology Assessment Evidence project. They walked through the process of setting up a Google account, creating a new notebook, and customizing it with a title and notes about using AI tools for literature review. The demonstration was part of a series of sessions, with the next step being to upload papers from Delft Imaging.
### Healthcare Research Paper Workflow Demonstration

Ukubona demonstrated a workflow for collecting and analyzing healthcare research papers, specifically focusing on TB (tuberculosis) diagnosis in primary healthcare in India. He showed how to search for PDFs online, download them, and upload them to a notebook system, explaining the process of adding sources and creating notes for accuracy analysis. The demonstration included details about token usage and time constraints in the free tier, noting that three sources had been loaded and the process was taking more than five seconds.
### Systematic Literature Review Process Demonstration

Ukubona demonstrated a systematic literature review process using Google tools and Dimensions AI, showing how to identify knowledge gaps in tuberculosis research papers. The demonstration covered stages of the review process, including creating "accuracy" and "gap question" notes to track findings. Ukubona explained the limitations of locally downloaded PDFs versus internet-based content extraction, and showed how to transition from analyzing locally available documents to searching for gaps in the broader literature using Dimensions AI.
### Dimensions AI Demonstration and Workflow

Ukubona demonstrated Dimensions AI, an AI system with advantages over others, particularly for literature from low- to medium-income countries. He showed how the system can search for and curate research papers, including 32 papers on TB detection rates in India's primary healthcare settings. Ukubona also explained the workflow process of using AI tools like Claude to assist with specific research tasks, such as documenting assumptions about TB case detection rates under standard care.
### AI Tools for Research Workflows

Ukubona demonstrated the use of several AI tools, including Google's Gemini, Dimensions AI, and Claude, to help with research workflows and grant writing. He showed how these tools can be used to synthesize information, create templates, and develop defensible language for method sections and protocols. The demonstration focused on using AI to address a specific problem: diagnosing tuberculosis through X-rays using AI-assisted methods compared to standard care in primary healthcare settings. Ukubona explained that the tools can help extract information from local files like PDFs from manufacturers and clinical trials, as well as online sources for cost utility and budgeting information.
### AI Workflow for Grant Documents

Ukubona demonstrated a workflow for feeding AI tools with templates and prompts to generate findings for grant documents, explaining the use of specific tools like Dimensions AI and Claude. Grace provided feedback on the presentation style, suggesting a more structured approach that follows traditional research sections (background, literature review, methodology) rather than the current demo format. The discussion ended with Grace attempting to share a screen to illustrate how a literature review might be conducted using PubMed's advanced search features, though technical difficulties with screen sharing prevented completion of this demonstration.
### AI Literature Review Planning

Grace and Ukubona discussed the process of conducting a literature review on AI tools for tuberculosis screening. Grace outlined her plan to search various databases like PubMed and Academic Search Premier, manually collecting data in an Excel sheet. They explored the potential use of AI tools like LEC and Dimension AI to streamline the literature search process and help analyze the results. Ukubona suggested including a live demo to address questions about tool selection and justify the use of specific AI tools. Grace emphasized the need for a balanced approach, focusing on both depth and breadth of the review without delving into detailed technical aspects of AI models.
### AI Tools in Research Applications

Grace provided an overview of AI tools for research, focusing on agentic AI and its applications in making research more efficient. She explained the process of using AI tools for tasks like literature review and mentioned specific databases like PubMed, EBSCOhost, and Google Scholar. Ukubona discussed different classifications of AI, including wild AI and perception AI, and highlighted potential confusion in terminology. Grace then explained India's national strategy for AI in health, comparing it to the regulatory process for introducing new drugs into the healthcare system.
### AI in Healthcare Research Discussion

Grace and Ukubona discussed the use of AI tools in healthcare research, focusing on how to effectively utilize AI for screening interventions while ensuring reliability and accuracy. Grace expressed concerns about relying on AI tools like ChatGPT or Copilot to generate research protocols due to potential hallucinations and the need for human verification of the generated content. Ukubona explained different types of AI, including perception, agentic, generative, and embodied AI, emphasizing the importance of understanding the underlying algorithms and their limitations. The discussion highlighted the goal of using AI to minimize research time while maintaining accuracy, with Grace seeking guidance on how to assess and trust AI-generated research outputs.
### AI Research Tools Evaluation Framework

Grace and Ukubona discussed the evaluation and implementation of AI tools for research, focusing on creating a comprehensive comparison table to assess various tools' capabilities, including database access, geographical reach, and proprietary status. Grace emphasized the importance of a human-in-the-loop approach to identify limitations and ensure accuracy, particularly when using tools like ChatGPT or Claude AI. They agreed on developing a structured table outlining the strengths and weaknesses of each tool, which researchers could reference to select appropriate tools for specific tasks such as literature searches or data synthesis. Grace also highlighted the need to consider the specific requirements of health economics research, including access to relevant databases and journals, while ensuring that broader databases like Scopus or EBSCOhost can provide comprehensive results when appropriately filtered.
### AI Research Training Planning

Grace and Ukubona discussed plans for upcoming training sessions on AI tools for research. They agreed to structure the sessions as follows: the first session would cover general information about AI tools and their applications in research processes, with a focus on three key areas identified by Grace. The second session would involve creating a comparison table of 20 selected AI tools, highlighting their capabilities and limitations. The third session would include a practical demonstration of the tools. Ukubona agreed to update the website with interactive elements and provide a recording by Friday for Grace's review.

- So what do I hand grace on Friday (clearly she didn't look at https://ukubona-llc.github.io/who-reviews/ , something i shared with her over 3 months ago!) 
- Its only now that she is discovering that she loves session 1 & 2 (here are the *.jsx files)
- To summarize:
   - Session 1: The existing process
   - Session 2: The tools available 
      - On landing page we have 20 tools I selected (no explicit justification amongst thousands out there)
      - Here I further select 5 of the 20 tools and have a best-use case (grey lit, LMIC evidence, critical limitation)
      - Grace wants (see image `session2.jpeg`) 
         - But with all 20 rows (she knows its a somewhat arbitrary list, but anyways.. its her call)
      - The columns she's selected are from Session 1 (highlights in red):    
         - Database search
         - Title/Abstract screening
         - Extraction of data
         - Pros & Cons (of the AI.. the row)
    - Session 3:
       - Part 1: Demo from app: https://ukubona-llc.github.io/who/ (took 27min)
          - Could we embed the app in session 3?
          - An expand `+` that uncovers it? 
          - User then can login?
          - Other material in  https://ukubona-llc.github.io/who-reviews/ is freely accessible
             - But some requires Claude.ai API tokens
             - Or something
             - Consider making the entire thing an app with layered access 
       - Part 2 : The framework: https://ukubona-llc.github.io/who-reviews/ukhona/html/level1/session3.html 


#### I
`Session 1`

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>🌱 The Existing Process · Level 1 Session 1</title>
  <meta name="description" content="What is the current pipeline for literature review at WHO India — and where does it break down?">
  <meta name="color-scheme" content="dark light">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-dark.ico" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-light.ico" media="(prefers-color-scheme: light)">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-dark.png" as="image">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-light.png" as="image">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,800;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&display=swap" rel="stylesheet">
  <link href="../../css/variables.css?v=1.1" rel="stylesheet">
  <link href="../../css/head.css?v=1.1" rel="stylesheet">
  <link href="../../css/card.css?v=1.1" rel="stylesheet">
  <link href="../../css/footer.css" rel="stylesheet">
  <style>
    :root {
      --session-accent: #4fc3f7;
      --ff-display: 'Playfair Display', Georgia, serif;
      --ff-body:    'Source Serif 4', Georgia, serif;
    }
    body { font-family: var(--ff-body); font-weight: 300; }
    .spine { position: fixed; left: 0; top: 0; width: 3px; height: 0%; background: var(--session-accent); z-index: 200; transition: height .1s linear; }
    .s-page { padding-top: calc(var(--header-h) + 3rem); padding-bottom: 6rem; max-width: 860px; margin: 0 auto; padding-left: 2rem; padding-right: 2rem; }
    .s-crumb { font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: var(--text-secondary); opacity: .5; margin-bottom: 2.5rem; display: flex; gap: .75rem; align-items: center; }
    .s-crumb span { color: var(--session-accent); opacity: 1; }
    .s-hero { margin-bottom: 3.5rem; }
    .s-label { font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: var(--session-accent); margin-bottom: .75rem; font-weight: 600; }
    .s-title { font-family: var(--ff-display); font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; line-height: 1.1; letter-spacing: -.02em; color: var(--text); margin-bottom: .5rem; }
    .s-subtitle { font-family: var(--ff-display); font-size: clamp(1rem, 2.5vw, 1.3rem); font-style: italic; font-weight: 400; color: var(--text-secondary); margin-bottom: 1.5rem; }
    .s-oneliner { font-size: .9rem; line-height: 1.7; color: var(--text-secondary); border-left: 3px solid var(--session-accent); padding-left: 1rem; max-width: 540px; }
    .s-badge { display: inline-flex; align-items: center; gap: .5rem; font-family: 'Inter', sans-serif; font-size: .55rem; letter-spacing: .2em; text-transform: uppercase; padding: .3rem .8rem; border-radius: 999px; border: 1px solid var(--session-accent); color: var(--session-accent); background: color-mix(in srgb, var(--session-accent) 8%, transparent); margin-bottom: 1.5rem; }
    .s-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border); gap: 1rem; }
    .s-nav-btn { font-family: 'Inter', sans-serif; font-size: .7rem; letter-spacing: .1em; font-weight: 500; padding: .6rem 1.4rem; border-radius: 8px; border: 1px solid var(--border); background: var(--glass); color: var(--text-secondary); text-decoration: none; transition: var(--transition); }
    .s-nav-btn:hover { border-color: var(--session-accent); color: var(--session-accent); }
    .s-nav-next { margin-left: auto; }
    @media (max-width: 600px) { .s-page { padding-left: 1.25rem; padding-right: 1.25rem; } }

    /* ── Session content ── */
    .session-content { margin-top: 2rem; line-height: 1.8; color: var(--text-secondary); }
    .session-content p { margin-bottom: 1.25rem; font-size: clamp(.95rem, 2vw, 1.05rem); }
    .session-content h2 {
      font-family: var(--ff-display); font-size: clamp(1.4rem, 3.5vw, 2rem);
      font-weight: 800; color: var(--text); margin: 3rem 0 1rem; letter-spacing: -.02em;
    }
    .session-content h3 {
      font-family: 'Inter', sans-serif; font-size: .65rem; letter-spacing: .3em;
      text-transform: uppercase; color: var(--session-accent); margin: 2rem 0 .75rem; font-weight: 700;
    }
    .session-content strong { color: var(--text); font-weight: 600; }
    .session-content ul { padding-left: 1.5rem; margin-bottom: 1.25rem; }
    .session-content ul li { margin-bottom: .5rem; font-size: clamp(.95rem, 2vw, 1.05rem); }

    /* Pipeline diagram */
    .pipeline {
      display: flex; flex-wrap: wrap; align-items: center;
      gap: .5rem; margin: 2rem 0; padding: 1.75rem 2rem;
      background: var(--glass); border: 1px solid var(--border); border-radius: 14px;
    }
    .p-step {
      font-family: 'Inter', sans-serif; font-size: .7rem; font-weight: 600;
      letter-spacing: .04em; padding: .5rem 1rem; border-radius: 6px;
      background: color-mix(in srgb, var(--session-accent) 10%, transparent);
      border: 1px solid color-mix(in srgb, var(--session-accent) 30%, transparent);
      color: var(--text); white-space: nowrap;
    }
    .p-arrow {
      font-size: .8rem; color: var(--session-accent); opacity: .5;
      font-family: 'Inter', sans-serif;
    }
    .p-step.bottleneck {
      background: color-mix(in srgb, #ef5350 12%, transparent);
      border-color: color-mix(in srgb, #ef5350 35%, transparent);
      color: #ef9a9a;
    }
    .pipeline-caption {
      font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .1em;
      color: var(--text-secondary); opacity: .5; margin-top: .75rem;
      width: 100%; text-align: right;
    }

    /* Bottleneck cards */
    .bottleneck-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      border-radius: 12px; overflow: hidden;
      margin: 1.75rem 0;
    }
    .b-card {
      background: var(--glass); padding: 1.25rem 1.4rem;
      display: flex; flex-direction: column; gap: .5rem;
    }
    .b-num {
      font-family: 'Inter', sans-serif; font-size: .55rem; font-weight: 700;
      letter-spacing: .2em; color: var(--session-accent); opacity: .6;
    }
    .b-title {
      font-family: var(--ff-display); font-size: 1.05rem; font-weight: 600;
      color: var(--text); line-height: 1.25;
    }
    .b-desc {
      font-family: 'Inter', sans-serif; font-size: .75rem; font-weight: 300;
      line-height: 1.55; color: var(--text-secondary);
    }

    /* Quote block */
    .q-block {
      border-left: 3px solid color-mix(in srgb, var(--session-accent) 40%, transparent);
      padding: 1rem 1.5rem; margin: 1.5rem 0;
      background: color-mix(in srgb, var(--session-accent) 5%, transparent);
      border-radius: 0 8px 8px 0; font-style: italic;
      font-size: clamp(.9rem, 1.8vw, 1rem); color: var(--text);
    }

    /* Self-audit exercise */
    .exercise-box {
      background: color-mix(in srgb, var(--session-accent) 6%, var(--glass));
      border: 1px dashed color-mix(in srgb, var(--session-accent) 50%, transparent);
      padding: 2rem 2rem 1.5rem; border-radius: 14px; margin: 2.5rem 0;
    }
    .exercise-box h3 { margin-top: 0; }
    .audit-row {
      display: flex; align-items: flex-start; gap: 1rem;
      padding: .75rem 0; border-bottom: 1px solid var(--border);
      font-size: .9rem;
    }
    .audit-row:last-child { border-bottom: none; }
    .audit-label {
      font-family: 'Inter', sans-serif; font-size: .75rem; font-weight: 500;
      color: var(--text); flex: 1; line-height: 1.5;
    }
    .audit-sub {
      font-family: 'Inter', sans-serif; font-size: .68rem; font-weight: 300;
      color: var(--text-secondary); display: block; margin-top: .15rem;
    }
    .audit-options {
      display: flex; gap: .4rem; flex-shrink: 0; flex-wrap: wrap; justify-content: flex-end;
    }
    .audit-btn {
      font-family: 'Inter', sans-serif; font-size: .58rem; letter-spacing: .08em;
      padding: .3rem .75rem; border-radius: 5px; border: 1px solid var(--border);
      background: var(--glass); color: var(--text-secondary); cursor: pointer;
      transition: all .15s; user-select: none;
    }
    .audit-btn:hover, .audit-btn.selected {
      border-color: var(--session-accent); color: var(--session-accent);
      background: color-mix(in srgb, var(--session-accent) 10%, transparent);
    }
    .audit-result {
      margin-top: 1.5rem; padding: 1rem 1.25rem; border-radius: 8px;
      background: var(--glass); border: 1px solid var(--border);
      font-family: 'Inter', sans-serif; font-size: .82rem; line-height: 1.6;
      color: var(--text-secondary); display: none;
    }
    .audit-result.visible { display: block; }
    .audit-result strong { color: var(--session-accent); }

    /* Takeaway */
    .takeaway {
      margin-top: 3rem; padding: 1.5rem 2rem; border-radius: 12px;
      border: 1px solid color-mix(in srgb, var(--session-accent) 30%, transparent);
      background: color-mix(in srgb, var(--session-accent) 5%, transparent);
    }
    .takeaway h3 { margin-top: 0; }
    .takeaway p { margin-bottom: 0; font-size: .95rem; }
  </style>
</head>
<body>
<div class="spine" id="spine"></div>
<div class="scroll-indicator" aria-hidden="true"><div class="scroll-progress"></div></div>
<div class="bg-pattern" aria-hidden="true"></div>
<header class="header" id="header"></header>

<div class="s-page">
  <div class="s-crumb">
    <a href="../../" style="color:inherit;text-decoration:none;">Home</a> · Level 1 · <span>Session 1</span>
  </div>

  <div class="s-hero">
    <div class="s-badge">🌱 Level 1 of 3 · Session 1 of 5</div>
    <p class="s-label">Level 1 · Foundations</p>
    <h1 class="s-title">The Existing Process</h1>
    <p class="s-subtitle">How Evidence Becomes Policy — and Where It Doesn't</p>
    <p class="s-oneliner">What is the current pipeline for literature review at WHO India, and which steps are consuming time that AI could return to you?</p>
  </div>

  <div class="session-content">

    <h2>The pipeline, honestly described</h2>
    <p>Every evidence-to-policy cycle at WHO India moves through a recognisable sequence of steps. The process is not broken — it has produced genuine results, from informing PM-JAY design to shaping national NCD guidelines. But it is slow, and the slowness is not random. It concentrates at specific, identifiable points that are exactly where AI tools offer the most leverage.</p>

    <p>Here is the pipeline as it typically runs for a health financing or UHC evidence brief:</p>

    <div class="pipeline">
      <div class="p-step">Policy question defined</div>
      <div class="p-arrow">→</div>
      <div class="p-step bottleneck">Database search</div>
      <div class="p-arrow">→</div>
      <div class="p-step bottleneck">Title / abstract screening</div>
      <div class="p-arrow">→</div>
      <div class="p-step">Full-text retrieval</div>
      <div class="p-arrow">→</div>
      <div class="p-step bottleneck">Data extraction</div>
      <div class="p-arrow">→</div>
      <div class="p-step">Synthesis</div>
      <div class="p-arrow">→</div>
      <div class="p-step">Brief drafted</div>
      <div class="p-arrow">→</div>
      <div class="p-step">Policy decision</div>
      <div class="pipeline-caption">Red steps = highest AI leverage · Blue steps = human judgment remains essential</div>
    </div>

    <p>The red steps — database search, abstract screening, and data extraction — account for roughly 60–70% of total review time in a standard health economics evidence review. They are also the steps most likely to be done inconsistently under time pressure, which means the quality of the final brief is often determined not by the synthesis but by what got dropped during screening.</p>

    <h2>The four bottlenecks specific to WHO India</h2>
    <p>Generic reviews of "how literature review works" are not what this session is for. The friction that WHO India financing and economics staff experience is specific. Here are the four most consequential pressure points:</p>

    <div class="bottleneck-grid">
      <div class="b-card">
        <span class="b-num">01</span>
        <div class="b-title">The grey literature gap</div>
        <div class="b-desc">A significant share of the evidence most relevant to Indian health financing — NSSO household surveys, state NHA accounts, NITI Aayog working papers, HTAIn assessments — never reaches PubMed or Cochrane. Standard database searches systematically miss it. Screening 200 journal abstracts while missing the 2023 HTAIn report on PM-JAY equity outcomes is not a search strategy; it is a selection bias.</div>
      </div>
      <div class="b-card">
        <span class="b-num">02</span>
        <div class="b-title">The WEIRD-data bias</div>
        <div class="b-desc">The indexed literature over-represents high-income country health systems. A search for evidence on community health insurance and catastrophic expenditure returns studies from the Netherlands, Canada, and South Korea before it surfaces comparable work from Kerala, Andhra Pradesh, or Rwanda. Without active filtering, AI tools inherit this bias — and can amplify it by defaulting to the most-cited results.</div>
      </div>
      <div class="b-card">
        <span class="b-num">03</span>
        <div class="b-title">The clinical-economics confusion</div>
        <div class="b-desc">Most literature review tools — and many default AI prompts — are designed around clinical questions. Searching for "impact of health insurance on health outcomes India" returns RCT literature on specific diseases rather than economic evaluations of insurance coverage, financial risk protection, or utilisation equity. The question framing determines the evidence retrieved. This is addressed directly in Session 3.</div>
      </div>
      <div class="b-card">
        <span class="b-num">04</span>
        <div class="b-title">The brief-to-decision gap</div>
        <div class="b-desc">Even well-conducted reviews regularly fail to reach decision-makers in usable form. A 45-page systematic review of health financing in LMICs does not serve a Joint Secretary at MoHFW under a two-day deadline. The translation step — from evidence synthesis to a one-page brief calibrated to budget constraints, political context, and equity commitments — is where most reviews stall. This is the subject of Session 5.</div>
      </div>
    </div>

    <h2>What AI can and cannot fix</h2>
    <p>It is worth being precise about where AI tools intervene in this pipeline — and where they do not.</p>

    <p><strong>AI accelerates:</strong> database search construction, title and abstract screening, full-text data extraction, structuring a synthesis across multiple studies, drafting a first version of a brief. A task that takes two researchers three weeks of screening can often be reduced to a focused afternoon of prompt refinement, AI-assisted screening, and human verification.</p>

    <p><strong>AI does not replace:</strong> the judgment call about which question matters, the contextual knowledge that a particular Indian state has no functional secondary care infrastructure, the equity lens that asks who benefits and who is excluded, the political reading of what a Ministry will act on. These remain yours. This curriculum is about using AI to protect your time for the parts that only you can do.</p>

    <div class="q-block">
      A 2023 analysis of India's National Health Programme guidelines found that systematic review evidence was formally cited in fewer than half of NHP guideline documents reviewed — not because the evidence did not exist, but because the pipeline from production to decision was too slow and too fragmented to be useful at the moment of decision.
    </div>

    <p>That gap is the reason this curriculum exists. The tools in the next session are not there to make literature review more academic — they are there to close the distance between evidence and the decision that needs it, before the window closes.</p>

    <h2>Audit your own process</h2>

    <div class="exercise-box">
      <h3>🧪 Self-audit — where does your review time actually go?</h3>
      <p style="font-size:.85rem;margin-bottom:1.25rem;">For a recent or ongoing evidence brief, estimate how much of your total time falls at each stage. This takes 90 seconds and generates a personalised read on where AI will give you the most back.</p>

      <div class="audit-row">
        <div class="audit-label">
          Defining and scoping the question
          <span class="audit-sub">Clarifying the policy context, agreeing on the research question, setting inclusion criteria</span>
        </div>
        <div class="audit-options">
          <button class="audit-btn" data-row="0" data-val="low">≤ 1 day</button>
          <button class="audit-btn" data-row="0" data-val="med">2–4 days</button>
          <button class="audit-btn" data-row="0" data-val="high">&gt; 1 week</button>
        </div>
      </div>

      <div class="audit-row">
        <div class="audit-label">
          Database search and grey literature hunt
          <span class="audit-sub">Building search strings, running searches, tracking down reports and government documents</span>
        </div>
        <div class="audit-options">
          <button class="audit-btn" data-row="1" data-val="low">≤ 1 day</button>
          <button class="audit-btn" data-row="1" data-val="med">2–4 days</button>
          <button class="audit-btn" data-row="1" data-val="high">&gt; 1 week</button>
        </div>
      </div>

      <div class="audit-row">
        <div class="audit-label">
          Title, abstract, and full-text screening
          <span class="audit-sub">Reading through results to find what is actually relevant</span>
        </div>
        <div class="audit-options">
          <button class="audit-btn" data-row="2" data-val="low">≤ 1 day</button>
          <button class="audit-btn" data-row="2" data-val="med">2–4 days</button>
          <button class="audit-btn" data-row="2" data-val="high">&gt; 1 week</button>
        </div>
      </div>

      <div class="audit-row">
        <div class="audit-label">
          Data extraction and quality appraisal
          <span class="audit-sub">Pulling numbers, methods, and findings from included papers</span>
        </div>
        <div class="audit-options">
          <button class="audit-btn" data-row="3" data-val="low">≤ 1 day</button>
          <button class="audit-btn" data-row="3" data-val="med">2–4 days</button>
          <button class="audit-btn" data-row="3" data-val="high">&gt; 1 week</button>
        </div>
      </div>

      <div class="audit-row">
        <div class="audit-label">
          Writing the synthesis and brief
          <span class="audit-sub">Turning evidence into a usable document for decision-makers</span>
        </div>
        <div class="audit-options">
          <button class="audit-btn" data-row="4" data-val="low">≤ 1 day</button>
          <button class="audit-btn" data-row="4" data-val="med">2–4 days</button>
          <button class="audit-btn" data-row="4" data-val="high">&gt; 1 week</button>
        </div>
      </div>

      <div class="audit-result" id="audit-result"></div>
    </div>

    <div class="takeaway">
      <h3>🎯 Key takeaway</h3>
      <p>The existing process is not the enemy — it is the baseline. The goal of this curriculum is not to replace your judgment but to compress the mechanical steps so that more of your working week is spent on the parts that require it: defining the right question, applying the equity lens, and translating findings into something a decision-maker can act on. The next session maps the tools available and what each one is actually good for.</p>
    </div>

  </div><!-- /session-content -->

  <nav class="s-nav" aria-label="Session navigation">
    <a class="s-nav-btn s-nav-next" href="session2.html">Next →</a>
  </nav>
</div>

<div id="footer-placeholder"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js"></script>
<script src="../../js/shared.js"></script>
<script>
  /* ── scroll spine ── */
  const spine = document.getElementById('spine');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    spine.style.height = Math.min(pct, 100) + '%';
  }, { passive: true });

  /* ── self-audit widget ── */
  const answers = [null, null, null, null, null];
  const labels  = [
    'question scoping',
    'database search & grey literature',
    'title / abstract screening',
    'data extraction',
    'synthesis & brief writing'
  ];
  const highAI = [1, 2, 3]; // indices where AI has most leverage

  document.querySelectorAll('.audit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = parseInt(btn.dataset.row);
      const val = btn.dataset.val;
      // deselect siblings
      document.querySelectorAll(`.audit-btn[data-row="${row}"]`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      answers[row] = val;
      maybeShowResult();
    });
  });

  function maybeShowResult() {
    if (answers.some(a => a === null)) return;
    const result = document.getElementById('audit-result');
    const highRows = answers
      .map((v, i) => v === 'high' ? labels[i] : null)
      .filter(Boolean);
    const aiRows = answers
      .map((v, i) => (v === 'med' || v === 'high') && highAI.includes(i) ? labels[i] : null)
      .filter(Boolean);

    let html = '';
    if (highRows.length === 0) {
      html = 'Your process is already lean. The tools in Session 2 will help you maintain that efficiency and handle the occasional high-volume search without adding overhead.';
    } else {
      html = `Your biggest time costs are in: <strong>${highRows.join(', ')}</strong>. `;
      if (aiRows.length > 0) {
        html += `Of these, <strong>${aiRows.join(' and ')}</strong> ${aiRows.length > 1 ? 'are' : 'is'} exactly where the tools in Session 2 — and the search protocol in Session 4 — will have the most immediate impact. `;
      }
      if (answers[4] === 'high') {
        html += 'You are also spending significant time on synthesis and brief writing — Session 5 addresses this directly with an AI-assisted brief template calibrated for WHO India policy audiences.';
      }
      if (answers[0] === 'high') {
        html += ' Question scoping is taking longer than it should — Session 3 (PECO-F) will help you get to a precise, searchable question faster.';
      }
    }

    result.innerHTML = html;
    result.classList.add('visible');
  }
</script>
</body>
</html>
```

#### II

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>🔬 The Tools Available · Level 1 Session 2</title>
  <meta name="description" content="Which AI tools exist for health economics literature work — and what can each one not see?">
  <meta name="color-scheme" content="dark light">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-dark.ico" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-light.ico" media="(prefers-color-scheme: light)">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-dark.png" as="image">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-light.png" as="image">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,800;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&display=swap" rel="stylesheet">
  <link href="../../css/variables.css?v=1.1" rel="stylesheet">
  <link href="../../css/head.css?v=1.1" rel="stylesheet">
  <link href="../../css/card.css?v=1.1" rel="stylesheet">
  <link href="../../css/footer.css" rel="stylesheet">
  <style>
    :root {
      --session-accent: #4fc3f7;
      --ff-display: 'Playfair Display', Georgia, serif;
      --ff-body:    'Source Serif 4', Georgia, serif;
    }
    body { font-family: var(--ff-body); font-weight: 300; }
    .spine { position: fixed; left: 0; top: 0; width: 3px; height: 0%; background: var(--session-accent); z-index: 200; transition: height .1s linear; }
    .s-page { padding-top: calc(var(--header-h) + 3rem); padding-bottom: 6rem; max-width: 860px; margin: 0 auto; padding-left: 2rem; padding-right: 2rem; }
    .s-crumb { font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: var(--text-secondary); opacity: .5; margin-bottom: 2.5rem; display: flex; gap: .75rem; align-items: center; }
    .s-crumb span { color: var(--session-accent); opacity: 1; }
    .s-hero { margin-bottom: 3.5rem; }
    .s-label { font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: var(--session-accent); margin-bottom: .75rem; font-weight: 600; }
    .s-title { font-family: var(--ff-display); font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; line-height: 1.1; letter-spacing: -.02em; color: var(--text); margin-bottom: .5rem; }
    .s-subtitle { font-family: var(--ff-display); font-size: clamp(1rem, 2.5vw, 1.3rem); font-style: italic; font-weight: 400; color: var(--text-secondary); margin-bottom: 1.5rem; }
    .s-oneliner { font-size: .9rem; line-height: 1.7; color: var(--text-secondary); border-left: 3px solid var(--session-accent); padding-left: 1rem; max-width: 540px; }
    .s-badge { display: inline-flex; align-items: center; gap: .5rem; font-family: 'Inter', sans-serif; font-size: .55rem; letter-spacing: .2em; text-transform: uppercase; padding: .3rem .8rem; border-radius: 999px; border: 1px solid var(--session-accent); color: var(--session-accent); background: color-mix(in srgb, var(--session-accent) 8%, transparent); margin-bottom: 1.5rem; }
    .s-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border); gap: 1rem; }
    .s-nav-btn { font-family: 'Inter', sans-serif; font-size: .7rem; letter-spacing: .1em; font-weight: 500; padding: .6rem 1.4rem; border-radius: 8px; border: 1px solid var(--border); background: var(--glass); color: var(--text-secondary); text-decoration: none; transition: var(--transition); }
    .s-nav-btn:hover { border-color: var(--session-accent); color: var(--session-accent); }
    .s-nav-next { margin-left: auto; }
    @media (max-width: 600px) { .s-page { padding-left: 1.25rem; padding-right: 1.25rem; } }

    /* ── Session content ── */
    .session-content { margin-top: 2rem; line-height: 1.8; color: var(--text-secondary); }
    .session-content p { margin-bottom: 1.25rem; font-size: clamp(.95rem, 2vw, 1.05rem); }
    .session-content h2 {
      font-family: var(--ff-display); font-size: clamp(1.4rem, 3.5vw, 2rem);
      font-weight: 800; color: var(--text); margin: 3rem 0 1rem; letter-spacing: -.02em;
    }
    .session-content h3 {
      font-family: 'Inter', sans-serif; font-size: .65rem; letter-spacing: .3em;
      text-transform: uppercase; color: var(--session-accent); margin: 2rem 0 .75rem; font-weight: 700;
    }
    .session-content strong { color: var(--text); font-weight: 600; }
    .session-content ul { padding-left: 1.5rem; margin-bottom: 1.25rem; }
    .session-content ul li { margin-bottom: .5rem; font-size: clamp(.95rem, 2vw, 1.05rem); }

    /* ── Two-by-two matrix ── */
    .matrix-wrap { margin: 2rem 0; }
    .matrix-label-row {
      display: grid; grid-template-columns: 80px 1fr 1fr;
      gap: 1px; margin-bottom: 1px;
    }
    .matrix-col-label {
      font-family: 'Inter', sans-serif; font-size: .58rem; font-weight: 700;
      letter-spacing: .15em; text-transform: uppercase; color: var(--session-accent);
      text-align: center; padding: .5rem;
    }
    .matrix-grid {
      display: grid; grid-template-columns: 80px 1fr 1fr;
      grid-template-rows: auto auto; gap: 1px;
      background: var(--border); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
    }
    .matrix-row-label {
      background: var(--glass); display: flex; align-items: center; justify-content: center;
      font-family: 'Inter', sans-serif; font-size: .55rem; font-weight: 700;
      letter-spacing: .12em; text-transform: uppercase;
      color: var(--session-accent); writing-mode: vertical-rl;
      text-orientation: mixed; transform: rotate(180deg);
      padding: 1rem .5rem; text-align: center;
    }
    .matrix-cell {
      background: var(--glass); padding: 1.1rem 1.2rem;
      display: flex; flex-direction: column; gap: .4rem;
    }
    .matrix-cell.highlight {
      background: color-mix(in srgb, var(--session-accent) 7%, var(--glass));
    }
    .cell-label {
      font-family: 'Inter', sans-serif; font-size: .6rem; font-weight: 700;
      letter-spacing: .1em; text-transform: uppercase; color: var(--session-accent);
      margin-bottom: .2rem;
    }
    .cell-tools {
      font-family: 'Inter', sans-serif; font-size: .78rem; font-weight: 500;
      color: var(--text); line-height: 1.5;
    }
    .cell-note {
      font-family: 'Inter', sans-serif; font-size: .7rem; font-weight: 300;
      color: var(--text-secondary); line-height: 1.5;
    }

    /* ── Tool comparison table ── */
    .tool-table { width: 100%; border-collapse: collapse; margin: 1.75rem 0; font-size: .82rem; }
    .tool-table th {
      background: color-mix(in srgb, var(--session-accent) 12%, transparent);
      color: var(--text); font-family: 'Inter', sans-serif; font-size: .58rem;
      letter-spacing: .15em; text-transform: uppercase; font-weight: 700;
      padding: .7rem 1rem; text-align: left;
      border-bottom: 1px solid var(--session-accent);
    }
    .tool-table td {
      padding: .85rem 1rem; border-bottom: 1px solid var(--border);
      color: var(--text-secondary); vertical-align: top; line-height: 1.5;
    }
    .tool-table tr:last-child td { border-bottom: none; }
    .tool-table td:first-child { color: var(--text); font-weight: 500; white-space: nowrap; }
    .tool-table tr:hover td { background: color-mix(in srgb, var(--session-accent) 4%, transparent); }
    .tag {
      display: inline-block; font-family: 'Inter', sans-serif;
      font-size: .5rem; letter-spacing: .1em; text-transform: uppercase; font-weight: 700;
      padding: .15rem .5rem; border-radius: 3px; margin-right: .3rem; margin-bottom: .2rem;
    }
    .tag-yes { background: color-mix(in srgb, #66bb6a 15%, transparent); color: #a5d6a7; }
    .tag-partial { background: color-mix(in srgb, #ffa726 15%, transparent); color: #ffcc80; }
    .tag-no { background: color-mix(in srgb, #ef5350 12%, transparent); color: #ef9a9a; }

    /* ── Blind spots ── */
    .blindspot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
      gap: 1px; background: var(--border);
      border: 1px solid var(--border); border-radius: 12px; overflow: hidden;
      margin: 1.75rem 0;
    }
    .bs-card { background: var(--glass); padding: 1.2rem 1.4rem; display: flex; flex-direction: column; gap: .45rem; }
    .bs-icon { font-size: 1.1rem; margin-bottom: .1rem; }
    .bs-title { font-family: var(--ff-display); font-size: 1rem; font-weight: 600; color: var(--text); line-height: 1.2; }
    .bs-desc { font-family: 'Inter', sans-serif; font-size: .73rem; font-weight: 300; line-height: 1.55; color: var(--text-secondary); }
    .bs-fix { font-family: 'Inter', sans-serif; font-size: .68rem; font-weight: 500;
      color: var(--session-accent); margin-top: .3rem; }

    /* ── Scenario chooser ── */
    .exercise-box {
      background: color-mix(in srgb, var(--session-accent) 6%, var(--glass));
      border: 1px dashed color-mix(in srgb, var(--session-accent) 50%, transparent);
      padding: 2rem 2rem 1.75rem; border-radius: 14px; margin: 2.5rem 0;
    }
    .exercise-box h3 { margin-top: 0; }
    .scenario-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
      gap: .6rem; margin: 1rem 0 1.25rem;
    }
    .scenario-btn {
      font-family: 'Inter', sans-serif; font-size: .72rem; font-weight: 400;
      line-height: 1.45; padding: .8rem 1rem; border-radius: 8px;
      border: 1px solid var(--border); background: var(--glass);
      color: var(--text-secondary); cursor: pointer; text-align: left;
      transition: all .15s;
    }
    .scenario-btn:hover, .scenario-btn.active {
      border-color: var(--session-accent); color: var(--text);
      background: color-mix(in srgb, var(--session-accent) 8%, transparent);
    }
    .scenario-result {
      padding: 1.1rem 1.4rem; border-radius: 10px;
      background: var(--glass); border: 1px solid var(--border);
      font-size: .88rem; line-height: 1.7; color: var(--text-secondary);
      display: none;
    }
    .scenario-result.visible { display: block; }
    .scenario-result .rec-label {
      font-family: 'Inter', sans-serif; font-size: .55rem; font-weight: 700;
      letter-spacing: .2em; text-transform: uppercase; color: var(--session-accent);
      display: block; margin-bottom: .6rem;
    }
    .scenario-result strong { color: var(--text); }

    /* ── Takeaway ── */
    .takeaway {
      margin-top: 3rem; padding: 1.5rem 2rem; border-radius: 12px;
      border: 1px solid color-mix(in srgb, var(--session-accent) 30%, transparent);
      background: color-mix(in srgb, var(--session-accent) 5%, transparent);
    }
    .takeaway h3 { margin-top: 0; }
    .takeaway p { margin-bottom: 0; font-size: .95rem; }
  </style>
</head>
<body>
<div class="spine" id="spine"></div>
<div class="scroll-indicator" aria-hidden="true"><div class="scroll-progress"></div></div>
<div class="bg-pattern" aria-hidden="true"></div>
<header class="header" id="header"></header>

<div class="s-page">
  <div class="s-crumb">
    <a href="../../" style="color:inherit;text-decoration:none;">Home</a> · Level 1 · <span>Session 2</span>
  </div>

  <div class="s-hero">
    <div class="s-badge">🔬 Level 1 of 3 · Session 2 of 5</div>
    <p class="s-label">Level 1 · Foundations</p>
    <h1 class="s-title">The Tools Available</h1>
    <p class="s-subtitle">What AI Can and Cannot See</p>
    <p class="s-oneliner">The landing page lists 20 tools. This session tells you which ones to reach for on a health financing brief — and what every AI tool in this space is blind to.</p>
  </div>

  <div class="session-content">

    <h2>The right question is not "which tool?" but "which job?"</h2>
    <p>The 20 tools catalogued on the home page are not interchangeable. They differ on two dimensions that matter most for health economics and financing work: what corpus they search, and what they do with what they find. Choosing the wrong tool for a job does not just slow you down — it silently shapes what evidence you see and what you miss.</p>
    <p>Think of the tools in two categories: <strong>retrievers</strong> find and surface papers; <strong>synthesisers</strong> read and summarise them. Some tools do both. Most do one well. The distinction matters because your bottleneck — as you identified in Session 1 — determines which category you need first.</p>

    <h2>A map of the tool landscape</h2>
    <p>For health economics and financing work, the most useful way to organise the tools is by two questions: does it search grey literature, and does it handle dense PDFs (government reports, HTA assessments, budget documents) rather than just journal abstracts?</p>

    <div class="matrix-wrap">
      <div class="matrix-label-row">
        <div></div>
        <div class="matrix-col-label">Journal-indexed only</div>
        <div class="matrix-col-label">Handles grey literature / PDFs</div>
      </div>
      <div class="matrix-grid">

        <div class="matrix-row-label">Retriever</div>
        <div class="matrix-cell">
          <div class="cell-label">Wide but shallow</div>
          <div class="cell-tools">Semantic Scholar · Dimensions.ai · Connected Papers · Litmaps</div>
          <div class="cell-note">Good for mapping a field or finding seminal papers. Miss NSSO reports, HTAIn briefs, state NHA accounts, MoHFW working papers entirely.</div>
        </div>
        <div class="matrix-cell highlight">
          <div class="cell-label">Best for WHO India work</div>
          <div class="cell-tools">Elicit · Research Rabbit + manual grey search · Claude / GPT with uploaded PDFs</div>
          <div class="cell-note">Elicit excels at structured data extraction from papers. For grey literature, there is no substitute for targeted manual search — but Claude or GPT can then process what you retrieve.</div>
        </div>

        <div class="matrix-row-label">Synthesiser</div>
        <div class="matrix-cell">
          <div class="cell-label">Fast summaries, limited scope</div>
          <div class="cell-tools">Consensus · Paper Digest · SciSpace</div>
          <div class="cell-note">Useful for quick orientation in a new topic. Will confidently summarise the published literature while being unaware that the most relevant evidence is in a 2023 HTAIn report sitting outside their index.</div>
        </div>
        <div class="matrix-cell highlight">
          <div class="cell-label">Workhorse for long documents</div>
          <div class="cell-tools">Humata · Claude (with PDF upload) · NotebookLM</div>
          <div class="cell-note">Upload a 200-page NSSO survey, a PM-JAY evaluation, or a stack of state health accounts and interrogate them directly. This is where the grey literature gap from Session 1 gets closed.</div>
        </div>

      </div>
    </div>

    <h2>The five tools worth knowing in detail</h2>
    <p>For a WHO India health financing context, five tools do most of the work. Here is an honest assessment of each — including what it cannot do.</p>

    <table class="tool-table">
      <thead>
        <tr>
          <th>Tool</th>
          <th>Best use case</th>
          <th>Grey lit?</th>
          <th>LMIC evidence?</th>
          <th>Critical limitation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Elicit</td>
          <td>Structured extraction across many papers — pulling cost-effectiveness ratios, sample sizes, outcome measures into a table</td>
          <td><span class="tag tag-no">No</span></td>
          <td><span class="tag tag-partial">Partial</span></td>
          <td>Only searches Semantic Scholar corpus. Misses grey literature and most government reports. Strongest for CEA and systematic review identification.</td>
        </tr>
        <tr>
          <td>Consensus</td>
          <td>Quick answer to a focused yes/no question — "does X intervention reduce catastrophic health expenditure?" — with citations</td>
          <td><span class="tag tag-no">No</span></td>
          <td><span class="tag tag-partial">Partial</span></td>
          <td>Optimised for biomedical questions. Health financing and insurance queries return mixed results — watch for clinical outcomes being surfaced instead of economic ones.</td>
        </tr>
        <tr>
          <td>Humata</td>
          <td>Interrogating a specific large document — an HTAIn assessment, NSSO survey, state PFM report — with targeted questions</td>
          <td><span class="tag tag-yes">Yes</span></td>
          <td><span class="tag tag-yes">Yes</span></td>
          <td>One document at a time in the free tier. Cannot synthesise across multiple uploaded files. Does not search; you must supply the document.</td>
        </tr>
        <tr>
          <td>Semantic Scholar</td>
          <td>Mapping a field quickly, finding citation networks, identifying the most influential papers in a financing sub-topic</td>
          <td><span class="tag tag-no">No</span></td>
          <td><span class="tag tag-partial">Partial</span></td>
          <td>LMIC health financing literature is under-represented in its index. Strong on volume; weak on the specific literature most relevant to India UHC work.</td>
        </tr>
        <tr>
          <td>Claude / GPT<br><small>(with PDF upload)</small></td>
          <td>Processing any document you supply — summarising, extracting, comparing, drafting. Also the best tool for PECO-F prompt iteration (Session 3)</td>
          <td><span class="tag tag-yes">Yes</span></td>
          <td><span class="tag tag-yes">Yes</span></td>
          <td>Does not retrieve documents independently. Cannot search databases. Everything depends on what you upload or paste. Hallucination risk for specific citations — always verify.</td>
        </tr>
      </tbody>
    </table>

    <h2>What every AI tool in this space cannot see</h2>
    <p>There are four blind spots shared by virtually all AI literature tools. Knowing them is not pessimism — it is workflow design. Each has a practical workaround.</p>

    <div class="blindspot-grid">
      <div class="bs-card">
        <div class="bs-icon">🗂️</div>
        <div class="bs-title">Grey literature and government data</div>
        <div class="bs-desc">NSSO surveys, HTAIn assessments, MoHFW circulars, state health accounts, NHA reports, district-level HMIS data. None of it is in any tool's default index.</div>
        <div class="bs-fix">→ Manual targeted search + upload to Claude/Humata for interrogation</div>
      </div>
      <div class="bs-card">
        <div class="bs-icon">🌍</div>
        <div class="bs-title">LMIC-specific financing evidence</div>
        <div class="bs-desc">Indexed literature skews toward high-income country health systems. A search for "community health insurance equity" surfaces the Netherlands before Kerala.</div>
        <div class="bs-fix">→ Explicit geographic filters in every search; use Dimensions.ai for LMIC filtering</div>
      </div>
      <div class="bs-card">
        <div class="bs-icon">📅</div>
        <div class="bs-title">Very recent publications</div>
        <div class="bs-desc">AI tools have indexing lags of weeks to months. A PM-JAY evaluation published last month may not yet be retrievable via Elicit or Consensus.</div>
        <div class="bs-fix">→ PubMed direct search and Google Scholar for anything from the last 6 months</div>
      </div>
      <div class="bs-card">
        <div class="bs-icon">⚖️</div>
        <div class="bs-title">Equity and distributional outcomes</div>
        <div class="bs-desc">Most tools are optimised to return aggregate findings. Disaggregated data on who benefits by income quintile, gender, caste, or geography is rarely surfaced automatically.</div>
        <div class="bs-fix">→ Explicit equity terms in every prompt; Session 3 builds this into the PECO-F F dimension</div>
      </div>
    </div>

    <h2>Choose your tool for the task</h2>

    <div class="exercise-box">
      <h3>🧪 Scenario matching — pick your situation</h3>
      <p style="font-size:.85rem;margin-bottom:1rem;">Select the scenario that most closely matches your current task. You will get a specific tool recommendation and a one-line rationale.</p>

      <div class="scenario-grid">
        <button class="scenario-btn" data-scenario="0">I need to quickly map what's been published on health insurance and catastrophic expenditure in South Asia</button>
        <button class="scenario-btn" data-scenario="1">I have a 180-page HTAIn assessment I need to extract specific cost-effectiveness findings from</button>
        <button class="scenario-btn" data-scenario="2">I need to find the 5–8 most influential papers in health financing equity for a senior official briefing</button>
        <button class="scenario-btn" data-scenario="3">I need to compare three state-level PM-JAY evaluation reports side by side</button>
        <button class="scenario-btn" data-scenario="4">I need to know if there's any recent evidence that a specific intervention works in an LMIC context</button>
        <button class="scenario-btn" data-scenario="5">I need to build a structured extraction table of cost-per-DALY across 20+ papers</button>
      </div>

      <div class="scenario-result" id="scenario-result">
        <span class="rec-label">Recommended approach</span>
        <span id="scenario-text"></span>
      </div>
    </div>

    <div class="takeaway">
      <h3>🎯 Key takeaway</h3>
      <p>No single AI tool covers the full pipeline for health economics and financing work. The practical stack for WHO India is: <strong>Elicit</strong> for structured extraction from indexed literature, <strong>Claude or Humata</strong> for interrogating uploaded grey literature and government reports, <strong>Dimensions.ai</strong> for LMIC-filtered discovery, and <strong>manual targeted search</strong> for anything recent or government-issued. Session 3 shows you how to frame the question that makes all of these more precise.</p>
    </div>

  </div><!-- /session-content -->

  <nav class="s-nav" aria-label="Session navigation">
    <a class="s-nav-btn" href="session1.html">← Previous</a>
    <a class="s-nav-btn s-nav-next" href="session3.html">Next →</a>
  </nav>
</div>

<div id="footer-placeholder"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js"></script>
<script src="../../js/shared.js"></script>
<script>
  /* ── scroll spine ── */
  const spine = document.getElementById('spine');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    spine.style.height = Math.min(pct, 100) + '%';
  }, { passive: true });

  /* ── scenario chooser ── */
  const scenarios = [
    {
      text: `<strong>Start with Semantic Scholar or Dimensions.ai</strong> for a citation-network map, then run the same query through <strong>Elicit</strong> to get structured paper summaries. Set geographic filters to South Asia / LMIC explicitly — neither tool does this by default. Expect to supplement with a manual Google Scholar search filtered to India, Bangladesh, Sri Lanka to catch recent grey literature.`
    },
    {
      text: `<strong>Upload directly to Claude or Humata.</strong> Paste the PDF and ask targeted questions: "What cost-effectiveness ratios are reported for inpatient versus outpatient coverage?" or "Which population subgroups show the lowest financial risk protection scores?" This is faster and more accurate than reading linearly, and you stay in control of which questions get asked.`
    },
    {
      text: `<strong>Semantic Scholar's citation count + Scite</strong> is the right combination here. Use Semantic Scholar to find highly-cited papers in the sub-topic, then run the top 10 through Scite to see which are being challenged, supported, or extended in recent literature. That gives you a defensible "most influential" shortlist rather than just "most cited."`
    },
    {
      text: `<strong>Claude (with all three PDFs uploaded)</strong> is the only tool that can do this directly. Upload each report and ask it to extract comparable variables: coverage rates, utilisation by income quintile, claims settlement ratios, and equity metrics. Then ask it to produce a comparison table. Humata handles one document at a time; Claude handles multiple in the same session.`
    },
    {
      text: `<strong>Consensus</strong> for a fast yes/no orientation, then <strong>Elicit</strong> if you need the underlying papers. For anything published in the last six months, add a direct PubMed search — both tools have indexing lags. If the LMIC signal is weak, try Dimensions.ai with an explicit filter for low- and middle-income countries before concluding the evidence is thin.`
    },
    {
      text: `<strong>Elicit</strong> is the purpose-built tool for this. Set up a structured extraction with your specific columns — intervention, population, comparator, cost per DALY, equity adjustment, study quality — and run your paper set through it. For papers not in Elicit's index, upload PDFs to Claude and ask for extraction in the same column format, then merge the tables manually.`
    }
  ];

  document.querySelectorAll('.scenario-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = parseInt(btn.dataset.scenario);
      document.getElementById('scenario-text').innerHTML = scenarios[idx].text;
      const result = document.getElementById('scenario-result');
      result.classList.add('visible');
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
</script>
</body>
</html>
```

#### III

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>🧭 The Framework · Level 1 Session 3</title>
  <meta name="description" content="How do you structure a health financing or priority-setting question so AI can help you answer it?">
  <meta name="color-scheme" content="dark light">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-dark.ico" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-light.ico" media="(prefers-color-scheme: light)">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-dark.png" as="image">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-light.png" as="image">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,800;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&display=swap" rel="stylesheet">
  <link href="../../css/variables.css?v=1.1" rel="stylesheet">
  <link href="../../css/head.css?v=1.1" rel="stylesheet">
  <link href="../../css/card.css?v=1.1" rel="stylesheet">
  <link href="../../css/footer.css" rel="stylesheet">
  <style>
    :root {
      --session-accent: #4fc3f7;
      --ff-display: 'Playfair Display', Georgia, serif;
      --ff-body:    'Source Serif 4', Georgia, serif;
    }
    body { font-family: var(--ff-body); font-weight: 300; }
    .spine { position: fixed; left: 0; top: 0; width: 3px; height: 0%; background: var(--session-accent); z-index: 200; transition: height .1s linear; }
    .s-page { padding-top: calc(var(--header-h) + 3rem); padding-bottom: 6rem; max-width: 860px; margin: 0 auto; padding-left: 2rem; padding-right: 2rem; }
    .s-crumb { font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: var(--text-secondary); opacity: .5; margin-bottom: 2.5rem; display: flex; gap: .75rem; align-items: center; }
    .s-crumb span { color: var(--session-accent); opacity: 1; }
    .s-hero { margin-bottom: 3.5rem; }
    .s-label { font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: var(--session-accent); margin-bottom: .75rem; font-weight: 600; }
    .s-title { font-family: var(--ff-display); font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; line-height: 1.1; letter-spacing: -.02em; color: var(--text); margin-bottom: .5rem; }
    .s-subtitle { font-family: var(--ff-display); font-size: clamp(1rem, 2.5vw, 1.3rem); font-style: italic; font-weight: 400; color: var(--text-secondary); margin-bottom: 1.5rem; }
    .s-oneliner { font-size: .9rem; line-height: 1.7; color: var(--text-secondary); border-left: 3px solid var(--session-accent); padding-left: 1rem; max-width: 540px; }
    .s-badge { display: inline-flex; align-items: center; gap: .5rem; font-family: 'Inter', sans-serif; font-size: .55rem; letter-spacing: .2em; text-transform: uppercase; padding: .3rem .8rem; border-radius: 999px; border: 1px solid var(--session-accent); color: var(--session-accent); background: color-mix(in srgb, var(--session-accent) 8%, transparent); margin-bottom: 1.5rem; }
    .s-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border); gap: 1rem; }
    .s-nav-btn { font-family: 'Inter', sans-serif; font-size: .7rem; letter-spacing: .1em; font-weight: 500; padding: .6rem 1.4rem; border-radius: 8px; border: 1px solid var(--border); background: var(--glass); color: var(--text-secondary); text-decoration: none; transition: var(--transition); }
    .s-nav-btn:hover { border-color: var(--session-accent); color: var(--session-accent); }
    .s-nav-next { margin-left: auto; }
    @media (max-width: 600px) { .s-page { padding-left: 1.25rem; padding-right: 1.25rem; } }

    /* ── Session content ── */
    .session-content { margin-top: 2rem; line-height: 1.8; color: var(--text-secondary); }
    .session-content p { margin-bottom: 1.25rem; font-size: clamp(.95rem, 2vw, 1.05rem); }
    .session-content h2 {
      font-family: var(--ff-display); font-size: clamp(1.4rem, 3.5vw, 2rem);
      font-weight: 800; color: var(--text); margin: 3rem 0 1rem; letter-spacing: -.02em;
    }
    .session-content h3 {
      font-family: 'Inter', sans-serif; font-size: .65rem; letter-spacing: .3em;
      text-transform: uppercase; color: var(--session-accent); margin: 2rem 0 .75rem; font-weight: 700;
    }
    .session-content ul { padding-left: 1.5rem; margin-bottom: 1.25rem; }
    .session-content ul li { margin-bottom: .5rem; font-size: clamp(.95rem, 2vw, 1.05rem); }
    .session-content strong { color: var(--text); font-weight: 600; }

    /* PECO-F table */
    .peco-table { width: 100%; border-collapse: collapse; margin: 1.75rem 0; font-size: .9rem; }
    .peco-table th {
      background: color-mix(in srgb, var(--session-accent) 12%, transparent);
      color: var(--text); font-family: 'Inter', sans-serif; font-size: .6rem;
      letter-spacing: .15em; text-transform: uppercase; font-weight: 700;
      padding: .75rem 1rem; text-align: left; border-bottom: 1px solid var(--session-accent);
    }
    .peco-table td { padding: .85rem 1rem; border-bottom: 1px solid var(--border); color: var(--text-secondary); vertical-align: top; }
    .peco-table tr:last-child td { border-bottom: none; }
    .peco-table td:first-child { color: var(--session-accent); font-weight: 600; font-family: 'Inter', sans-serif; white-space: nowrap; }
    .peco-table tr:hover td { background: color-mix(in srgb, var(--session-accent) 4%, transparent); }

    /* Quote blocks */
    .q-block {
      border-left: 3px solid color-mix(in srgb, var(--session-accent) 40%, transparent);
      padding: 1rem 1.5rem; margin: 1.25rem 0;
      background: color-mix(in srgb, var(--session-accent) 5%, transparent);
      border-radius: 0 8px 8px 0; font-style: italic;
      font-size: clamp(.9rem, 1.8vw, 1rem); color: var(--text);
    }
    .q-block.good { border-left-color: var(--session-accent); }
    .q-label {
      font-family: 'Inter', sans-serif; font-size: .55rem; letter-spacing: .25em;
      text-transform: uppercase; font-style: normal; font-weight: 700;
      margin-bottom: .5rem; display: block;
      color: color-mix(in srgb, var(--session-accent) 70%, var(--text-secondary));
    }

    /* Exercise box */
    .exercise-box {
      background: color-mix(in srgb, var(--session-accent) 6%, var(--glass));
      border: 1px dashed color-mix(in srgb, var(--session-accent) 50%, transparent);
      padding: 2rem 2rem 1.5rem; border-radius: 14px; margin: 2.5rem 0;
    }
    .exercise-box h3 { margin-top: 0; }
    .exercise-box textarea {
      width: 100%; box-sizing: border-box; background: var(--glass);
      border: 1px solid var(--border); border-radius: 8px; color: var(--text);
      font-family: var(--ff-body); font-size: .9rem; padding: .85rem 1rem;
      resize: vertical; min-height: 90px; margin: .75rem 0 1rem;
      transition: border-color .2s;
    }
    .exercise-box textarea:focus { outline: none; border-color: var(--session-accent); }
    .exercise-box textarea::placeholder { color: color-mix(in srgb, var(--text-secondary) 60%, transparent); }
    .run-btn {
      font-family: 'Inter', sans-serif; font-size: .65rem; letter-spacing: .15em;
      text-transform: uppercase; font-weight: 700; padding: .65rem 1.6rem;
      border-radius: 8px; border: 1px solid var(--session-accent);
      background: color-mix(in srgb, var(--session-accent) 12%, transparent);
      color: var(--session-accent); cursor: pointer; transition: var(--transition);
    }
    .run-btn:hover:not(:disabled) { background: color-mix(in srgb, var(--session-accent) 22%, transparent); }
    .run-btn:disabled { opacity: .45; cursor: not-allowed; }
    .ai-output {
      margin-top: 1.25rem; padding: 1.25rem 1.5rem; border-radius: 10px;
      background: var(--glass); border: 1px solid var(--border);
      font-size: .9rem; line-height: 1.7; color: var(--text-secondary);
      display: none; white-space: pre-wrap;
    }
    .ai-output.visible { display: block; }
    .ai-output .ai-label {
      font-family: 'Inter', sans-serif; font-size: .55rem; letter-spacing: .25em;
      text-transform: uppercase; font-weight: 700; color: var(--session-accent);
      display: block; margin-bottom: .75rem;
    }

    /* Takeaway */
    .takeaway {
      margin-top: 3rem; padding: 1.5rem 2rem; border-radius: 12px;
      border: 1px solid color-mix(in srgb, var(--session-accent) 30%, transparent);
      background: color-mix(in srgb, var(--session-accent) 5%, transparent);
    }
    .takeaway h3 { margin-top: 0; }
    .takeaway p { margin-bottom: 0; font-size: .95rem; }
  </style>
</head>
<body>
<div class="spine" id="spine"></div>
<div class="scroll-indicator" aria-hidden="true"><div class="scroll-progress"></div></div>
<div class="bg-pattern" aria-hidden="true"></div>
<header class="header" id="header"></header>

<div class="s-page">
  <div class="s-crumb">
    <a href="../../" style="color:inherit;text-decoration:none;">Home</a> ·
    Level 1 · <span>Session 3</span>
  </div>

  <div class="s-hero">
    <div class="s-badge">🧭 Level 1 of 3 · Session 3 of 5</div>
    <p class="s-label">Level 1 · Foundations</p>
    <h1 class="s-title">The Framework</h1>
    <p class="s-subtitle">Framing the Economic Question for AI</p>
    <p class="s-oneliner">How do you structure a health financing or priority-setting question so AI can actually help you answer it?</p>
  </div>

  <div class="session-content">

    <h2>Why this session exists</h2>
    <p>When health economists and financing specialists turn to AI tools for literature support, they often get back clinical trial summaries, drug efficacy tables, or biomedical findings — none of which is what they came for. The reason is almost always the same: the question was framed in clinical language, so the AI searched clinical space.</p>
    <p>The framework you use to pose your research question determines what the AI finds. This session introduces a question structure designed specifically for health economics and financing work, and shows you how to translate it into AI prompts that serve WHO India's mandate.</p>

    <h2>From PICO to PECO-F</h2>
    <p>The standard clinical framework is PICO: Population, Intervention, Comparator, Outcome. It works well for asking whether Drug A beats Drug B in a randomised trial. It does not work well for asking whether community health insurance schemes reduce catastrophic health expenditure among informal workers — which is closer to the kind of question this team actually works on.</p>
    <p>For health financing and priority-setting, the more useful frame is <strong>PECO-F</strong>:</p>

    <table class="peco-table">
      <thead>
        <tr><th>Element</th><th>What it means</th><th>India / LMIC example</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>P — Population</td>
          <td>Who bears the burden?</td>
          <td>Informal sector households in Uttar Pradesh</td>
        </tr>
        <tr>
          <td>E — Exposure / Intervention</td>
          <td>What financing mechanism or policy?</td>
          <td>Contributory health insurance vs. tax-funded coverage</td>
        </tr>
        <tr>
          <td>C — Comparator</td>
          <td>What is the alternative?</td>
          <td>No coverage / out-of-pocket only</td>
        </tr>
        <tr>
          <td>O — Outcome</td>
          <td>What do we measure?</td>
          <td>Catastrophic health expenditure, impoverishment, utilisation rates</td>
        </tr>
        <tr>
          <td>F — Feasibility &amp; Equity</td>
          <td>What constraints apply?</td>
          <td>Affordability, gender equity, willingness to pay, political acceptability</td>
        </tr>
      </tbody>
    </table>

    <p>The <strong>F</strong> element is not cosmetic. The <em>acceptability</em> and <em>equity</em> dimensions of an intervention can overturn a purely cost-effectiveness ranking — a mass-media health intervention may score poorly on cost-per-DALY but rank highly on acceptability with local stakeholders and on distributional grounds. AI tools will not surface that tension unless you ask for it explicitly.</p>

    <h2>Translating PECO-F into an AI prompt</h2>

    <h3>Poorly framed</h3>
    <div class="q-block">
      <span class="q-label">❌ Too broad — will return generic overviews and decade-old WHO summaries</span>
      "What is the best way to reduce out-of-pocket health spending in India?"
    </div>

    <h3>Well framed using PECO-F</h3>
    <div class="q-block good">
      <span class="q-label">✓ Scoped — signals population, mechanism, comparator, outcome, and equity dimension</span>
      "I am looking for evidence on whether community-based health insurance schemes (E) reduce catastrophic health expenditure (O) among informal sector workers (P) in low- and middle-income countries, compared to out-of-pocket financing with no insurance (C), with attention to equity outcomes and willingness-to-pay thresholds (F). Please prioritise systematic reviews and economic evaluations published after 2015."
    </div>

    <p>The second prompt also signals the methodological register — systematic reviews, economic evaluations — so the tool does not return qualitative ethnographies or clinical guidelines.</p>

    <h2>The priority-setting variant</h2>
    <p>When the question is about allocating scarce resources across competing interventions, the frame shifts slightly. The question is no longer just "does this work?" but "should this be funded, given competing claims on the same budget?" For these questions, add two further dimensions:</p>
    <ul>
      <li><strong>Budget envelope</strong> — What resource constraint are we working within?</li>
      <li><strong>Decision rule</strong> — Are we optimising for cost per DALY averted, for equity-weighted coverage, or for political acceptability?</li>
    </ul>
    <div class="q-block good">
      <span class="q-label">✓ Priority-setting prompt example</span>
      "What frameworks have been used to compare the cost-effectiveness and equity impact of expanding community health insurance versus increasing public facility capacity for primary care in LMICs? I need approaches that go beyond cost-per-DALY to include equity weighting and stakeholder acceptability — relevant to a national UHC reform context in a federal system."
    </div>
    <p>That prompt navigates the ACE (Assessing Cost-Effectiveness) and A4R (Accountability for Reasonableness) literatures simultaneously, which is exactly where India UHC reform work sits.</p>

    <h2>Try it now</h2>

    <div class="exercise-box">
      <h3>🧪 Live exercise — reframe your question</h3>
      <p>Type a research question your team is currently working on. The tool below will reframe it using PECO-F and flag the equity and feasibility dimensions you should add to your AI prompt.</p>
      <label for="raw-q" style="font-family:'Inter',sans-serif;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-secondary);display:block;margin-bottom:.35rem;">Your question (plain language)</label>
      <textarea id="raw-q" placeholder="e.g. Does PM-JAY improve health outcomes for poor households in rural India?"></textarea>
      <button class="run-btn" id="run-btn" onclick="reframeQuestion()">Reframe with PECO-F →</button>
      <div class="ai-output" id="ai-output">
        <span class="ai-label">PECO-F reframe</span>
        <span id="ai-text"></span>
      </div>
    </div>

    <div class="takeaway">
      <h3>🎯 Key takeaway</h3>
      <p>The framework is not bureaucracy — it is precision. A structured question reduces the chance that AI returns the wrong kind of evidence. For WHO staff working on UHC, financing, and priority-setting, that means explicitly naming populations, mechanisms, comparators, outcomes, and equity constraints every time. The tools are only as good as the question you bring.</p>
    </div>

  </div><!-- /session-content -->

  <nav class="s-nav" aria-label="Session navigation">
    <a class="s-nav-btn" href="session2.html">← Previous</a>
    <a class="s-nav-btn s-nav-next" href="session4.html">Next →</a>
  </nav>
</div>

<div id="footer-placeholder"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js"></script>
<script src="../../js/shared.js"></script>
<script>
  /* ── scroll spine ── */
  const spine = document.getElementById('spine');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    spine.style.height = Math.min(pct, 100) + '%';
  }, { passive: true });

  /* ── PECO-F reframe via Anthropic API ── */
  async function reframeQuestion() {
    const raw = document.getElementById('raw-q').value.trim();
    if (!raw) return;

    const btn = document.getElementById('run-btn');
    const output = document.getElementById('ai-output');
    const aiText = document.getElementById('ai-text');

    btn.disabled = true;
    btn.textContent = 'Thinking…';
    output.classList.remove('visible');

    const systemPrompt = `You are a health economics methodology coach supporting WHO India staff.
Your job is to reframe research questions using the PECO-F framework:
  P — Population (who bears the burden?)
  E — Exposure / Intervention (what financing mechanism or policy?)
  C — Comparator (what is the alternative?)
  O — Outcome (what do we measure? focus on financing outcomes: catastrophic expenditure, impoverishment, utilisation, financial risk protection)
  F — Feasibility & Equity (affordability, equity, willingness to pay, political acceptability, budget envelope)

Respond in this exact format — no preamble, no markdown headers, just the five labeled elements followed by a single "Improved prompt:" line:

P: [one sentence]
E: [one sentence]
C: [one sentence]
O: [one or two sentences, health economics outcomes only]
F: [one or two sentences on equity and feasibility constraints]

Improved prompt: [a single, well-framed AI search prompt incorporating all five elements, ready to paste into a literature review tool]

Keep the language plain and practical. Do not reference PECO-F by name in the improved prompt.`;

    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{ role: 'user', content: raw }]
        })
      });

      const data = await resp.json();
      const text = data?.content?.[0]?.text || 'No response received.';
      aiText.textContent = text;
      output.classList.add('visible');
    } catch (err) {
      aiText.textContent = 'Could not reach the AI service. Please check your connection and try again.';
      output.classList.add('visible');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Reframe with PECO-F →';
    }
  }

  /* allow Enter in textarea with Shift */
  document.getElementById('raw-q').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); reframeQuestion(); }
  });
</script>
</body>
</html>

```


`App.jsx`


```jsx
import { useState, useEffect, useRef, useCallback } from "react"
import { useAuth } from "./hooks/useAuth"

// ── LOGO URLs ─────────────────────────────────────────────────────────────────
const LOGO_DARK  = "https://abikesa.github.io/logos/assets/ukubona-dark.png"
const LOGO_LIGHT = "https://abikesa.github.io/logos/assets/ukubona-light.png"

// ── THEME HOOK ────────────────────────────────────────────────────────────────
function useTheme() {
  const [theme, setThemeState] = useState(() => {
    try { return localStorage.getItem("ukb-theme") || "dark" } catch { return "dark" }
  })

  const setTheme = useCallback((t) => {
    const next = typeof t === "function" ? t(theme) : t
    setThemeState(next)
    document.documentElement.setAttribute("data-theme", next)
    try { localStorage.setItem("ukb-theme", next) } catch {}
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, []) // eslint-disable-line

  const toggle = useCallback(() => setTheme(t => t === "dark" ? "light" : "dark"), [setTheme])
  return [theme, toggle]
}

// ── PALETTE ───────────────────────────────────────────────────────────────────
const ACCENT = {
  s2: "#4fc3f7",
  s3: "#f4a261",
  mono: "'DM Mono', 'Fira Mono', monospace",
  serif: "'Playfair Display', Georgia, serif",
  sans: "'Outfit', system-ui, sans-serif",
}

const t = { mono: ACCENT.mono, serif: ACCENT.serif, sans: ACCENT.sans }

// ── PENTAD ────────────────────────────────────────────────────────────────────
const PENTAD = [
  {
    node: "3+", label: "Tensor", role: "The Problem", color: "#94a3b8",
    detail: "All five HTA arms — hypothesis,diagnostic accuracy, effectiveness, cost-utility, budget impact — across 18 PHC sites simultaneously. Overwhelming before it's been named. This is where you live before Session 02 (the existing process).",
  },
  {
    node: "2", label: "Matrix", role: "The Tools", color: ACCENT.s2,
    detail: "Session 02. The tool ecosystem as an attention layer — which tool compresses which arm. NotebookLM for accuracy + effectiveness. Dimensions.ai for cost-utility + BIA. HTAIn for India grounding.",
  },
  {
    node: "1", label: "Vector", role: "The Workflow", color: ACCENT.s3,
    detail: "Session 03. Feed → Find → Frame. The committed five-step path from evidence gap to model input. You can't run this session without Session 02 having oriented you first.",
  },
  {
    node: "E", label: "Eigenmode", role: "The Template", color: "#c084fc",
    detail: "The extraction template. Paper → Value → Quality Flag → Model Input. The structure that survives after the sessions end, after the tools change, after the specific papers are forgotten.",
  },
  {
    node: "0", label: "Scalar", role: "The Decision", color: "#4ade80",
    detail: "One defensible model input. Base case 35%, sensitivity range 25–45%. The Markov model runs. The grant holds up to a reviewer. The loop closes.",
  },
]

// ── LIVE DEMO STEPS ───────────────────────────────────────────────────────────
const LIVE_STEPS = [
  {
    session: "02", sessionTitle: "The Landscape", sessionColor: ACCENT.s2,
    n: "01", title: "Open NotebookLM", tool: "NotebookLM",
    toolUrl: "https://notebooklm.google.com", time: "2 min", prompt: null,
    detail: "Go to notebooklm.google.com. Sign in with Google. Create a new notebook: 'CAD4TB HTA Evidence'. This notebook will be your evidence workspace for the entire project.",
  },
  {
    session: "02", sessionTitle: "The Landscape", sessionColor: ACCENT.s2,
    n: "02", title: "Upload CAD4TB papers", tool: "NotebookLM + Delft Imaging",
    toolUrl: "https://www.delft-imaging.com/publications", time: "3 min", prompt: null,
    detail: "Go to delft-imaging.com/publications. Download 3–5 papers that mention India, PHC, or primary care. Upload as PDFs to your notebook. If you can't access the site now, use any 3 TB screening papers you already have.",
  },
  {
    session: "02", sessionTitle: "The Landscape", sessionColor: ACCENT.s2,
    n: "03", title: "Ask the accuracy question", tool: "NotebookLM",
    toolUrl: "https://notebooklm.google.com", time: "2 min",
    prompt: "What sensitivity and specificity values are reported for TB detection across these papers? Which studies were conducted in Indian primary health care settings? List each value with the paper it comes from.",
    detail: "NotebookLM answers across all uploaded papers simultaneously and cites specific pages. Watch it pull structured data from unstructured PDFs in seconds.",
  },
  {
    session: "02", sessionTitle: "The Landscape", sessionColor: ACCENT.s2,
    n: "04", title: "Ask the gap question", tool: "NotebookLM",
    toolUrl: "https://notebooklm.google.com", time: "3 min",
    prompt: "Which of these papers report cost data, utility weights, or cost-effectiveness estimates? What evidence is missing for a full cost-utility analysis of CAD4TB in Indian PHC?",
    detail: "This is the most important question in Session 02. The gaps it identifies are your search targets for Session 03. Write them down.",
  },
  {
    session: "02", sessionTitle: "The Landscape", sessionColor: ACCENT.s2,
    n: "05", title: "Record your gaps", tool: "Manual note",
    toolUrl: null, time: "2 min", prompt: null,
    detail: "Write down exactly what's missing: utility weights by TB disease stage, transition probabilities, standard care detection rates in Indian PHC, PHC staff time costs. These four things are what Session 03 is about.",
  },
  {
    session: "03", sessionTitle: "The Workflow", sessionColor: ACCENT.s3,
    n: "01", title: "Name your four gaps", tool: "Manual note",
    toolUrl: null, time: "2 min", prompt: null,
    detail: "From Session 02: (1) utility weights by TB disease stage — India, (2) TB progression transition probabilities — India or LMIC, (3) standard care TB detection rates in Indian PHC, (4) PHC staff time costs for screening workflow. These four gaps = four search runs.",
  },
  {
    session: "03", sessionTitle: "The Workflow", sessionColor: ACCENT.s3,
    n: "02", title: "Search Gap 3 on Dimensions.ai", tool: "Dimensions.ai",
    toolUrl: "https://app.dimensions.ai", time: "5 min",
    prompt: "tuberculosis case detection rate primary health care India standard care sputum smear",
    detail: "Add filter: Publication Year 2015–2026. Add filter: Country = India. Download top 5 papers as PDFs. You are looking for what proportion of true TB cases are currently detected under standard care in Indian PHC — this is your comparator arm baseline.",
  },
  {
    session: "03", sessionTitle: "The Workflow", sessionColor: ACCENT.s3,
    n: "03", title: "Upload and extract", tool: "NotebookLM",
    toolUrl: "https://notebooklm.google.com", time: "4 min",
    prompt: "What TB case detection rates under standard care are reported in Indian primary health care settings? List: the rate, the population, the study site, the year, and the method used to measure detection.",
    detail: "NotebookLM returns a structured answer with citations. You now have your standard care comparator arm baseline evidence — the number your whole effectiveness calculation rests on.",
  },
  {
    session: "03", sessionTitle: "The Workflow", sessionColor: ACCENT.s3,
    n: "04", title: "Draft assumption with Claude", tool: "Claude.ai",
    toolUrl: "https://claude.ai", time: "4 min",
    prompt: "The grant assumes 35% TB case detection under standard care in Indian PHC. I found three studies reporting 28%, 38%, and 41% from Rajasthan, MP, and UP respectively. How should I present this assumption? What sensitivity analysis range is defensible?",
    detail: "Claude returns: base case 35%, sensitivity range 25–45%. Drafts the assumption statement for your methods section. Copy that sentence directly — it goes into your protocol.",
  },
  {
    session: "03", sessionTitle: "The Workflow", sessionColor: ACCENT.s3,
    n: "05", title: "Fill the extraction template", tool: "Extraction Template",
    toolUrl: null, time: "3 min", prompt: null,
    detail: "Open the Template tab in Session 03. Enter the value, the source, the quality flag (AMBER — no state match but strong India evidence), and the model input target. One paper, one row, five minutes. Repeat this workflow for each remaining gap.",
  },
]

// ── SESSION DATA ──────────────────────────────────────────────────────────────
const SESSIONS = [
  {
    id: "s2", number: "02", label: "Session 02", title: "The Landscape",
    subtitle: "What AI tools exist — and which ones actually matter for your HTA",
    color: ACCENT.s2, duration: "30 min", icon: "◎",
    context: `You are assessing CAD4TB — an AI-powered chest X-ray reader by Delft Imaging — across 18 PHC sites in Madhya Pradesh and Rajasthan. Your HTA has four evidence arms: diagnostic accuracy, clinical effectiveness, cost-utility, and budget impact. This session maps the AI tools for literature work and shows you which ones serve each arm — all free, no API key required.`,
    tools: [
      {
        name: "Delft Imaging / CAD4TB Publications", tag: "PRIMARY SOURCE",
        url: "https://www.delft-imaging.com/publications",
        best: "The device manufacturer's own published evidence",
        howto: "Go to delft-imaging.com/publications. CAD4TB has 80+ peer-reviewed studies. Download PDFs directly. Note which report Indian PHC settings vs hospital settings — that distinction matters for your HTA.",
        warning: "Company-curated. Strong on accuracy; thin on cost-effectiveness. That gap is your search target.",
        stars: 5, verdict: "Start here. Every time. Before any other search.", arm: "All arms",
      },
      {
        name: "NotebookLM", tag: "GOOGLE · FREE", url: "https://notebooklm.google.com",
        best: "Interrogating PDFs you already have — simultaneously",
        howto: "Upload 5–10 CAD4TB papers. Ask: 'What sensitivity and specificity values are reported for TB detection in Indian settings?' It reads across all uploaded documents at once and cites page numbers.",
        warning: "Only knows what you upload. Cannot search the web. Feed it; it synthesises.",
        stars: 5, verdict: "Your most powerful tool for this project.", arm: "Diagnostic accuracy · Effectiveness",
      },
      {
        name: "Dimensions.ai", tag: "DIGITAL SCIENCE · FREE", url: "https://app.dimensions.ai",
        best: "LMIC-filtered search including grey literature",
        howto: "Search: 'tuberculosis screening India cost-effectiveness'. Filter: Field of Research → Health Economics; Country → India. Export results to CSV. This surfaces papers PubMed misses.",
        warning: "Interface takes 10 minutes to learn. Worth every minute.",
        stars: 5, verdict: "Best for finding India-specific cost evidence.", arm: "Cost-utility · BIA",
      },
      {
        name: "Elicit", tag: "OUGHT · FREE TIER", url: "https://elicit.org",
        best: "Structured search with PICO extraction built in",
        howto: "Type your question in plain English: 'What is the sensitivity of AI chest X-ray for TB detection in primary care?' Returns papers with automatic Population, Intervention, Outcome extraction.",
        warning: "Thin on LMIC economic evidence. Strong on clinical RCTs.",
        stars: 4, verdict: "Strong for finding effectiveness trials.", arm: "Diagnostic accuracy · Effectiveness",
      },
      {
        name: "Claude.ai", tag: "ANTHROPIC · FREE TIER", url: "https://claude.ai",
        best: "Extraction, synthesis, and assumptions drafting",
        howto: "Paste an abstract or paper section. Ask: 'Extract the utility weights by TB disease stage from this text. Flag any transferability concerns for an Indian PHC population.' It extracts and critiques simultaneously.",
        warning: "Cannot search the internet. Feed it papers; it synthesises.",
        stars: 5, verdict: "Best for turning papers into model inputs.", arm: "Cost-utility",
      },
      {
        name: "HTAIn", tag: "ICMR · FREE", url: "https://htain.dhr.gov.in/",
        best: "Indian HTA assessments and PHC cost benchmarks",
        howto: "Search: tuberculosis, NCD screening, PHC costs. Download full assessment PDFs. Upload to NotebookLM. This is your India-specific cost anchor.",
        warning: "Coverage still growing. Always check publication dates.",
        stars: 4, verdict: "Non-negotiable for India cost data.", arm: "Cost-utility · BIA",
      },
    ],
    demo: {
      title: "Live Demo: Triage CAD4TB Evidence in 12 Minutes",
      steps: [
        { n: "01", action: "Open NotebookLM", prompt: null, time: "2 min", detail: "Go to notebooklm.google.com. Sign in with Google. Create a new notebook: 'CAD4TB HTA Evidence'. This notebook will be your evidence workspace for the entire project." },
        { n: "02", action: "Upload 3–5 CAD4TB papers", prompt: null, time: "3 min", detail: "Go to delft-imaging.com/publications. Download papers that mention India, PHC, or primary care. Upload as PDFs to your notebook. If you can't access the site now, use any 3 TB screening papers you already have." },
        { n: "03", action: "Ask the accuracy question", prompt: "What sensitivity and specificity values are reported for TB detection across these papers? Which studies were conducted in Indian primary health care settings? List each value with the paper it comes from.", time: "2 min", detail: "NotebookLM answers across all uploaded papers simultaneously and cites specific pages. Watch it pull structured data from unstructured PDFs in seconds." },
        { n: "04", action: "Ask the gap question", prompt: "Which of these papers report cost data, utility weights, or cost-effectiveness estimates? What evidence is missing for a full cost-utility analysis of CAD4TB in Indian PHC?", time: "3 min", detail: "This is the most important question in this session. The gaps it identifies are your search targets for Session 3. Write them down." },
        { n: "05", action: "Record your gaps", prompt: null, time: "2 min", detail: "Write down exactly what's missing: utility weights by TB disease stage, transition probabilities, standard care detection rates in Indian PHC, PHC staff time costs. These four things are what Session 3 is about." },
      ],
    },
    workedExample: {
      title: "Worked Example: Finding TB Utility Weights for India",
      context: "Your Markov model needs utility weights for TB disease stages in an Indian population. The literature gives you numbers — but are they the right numbers for your setting? Here is the complete three-tool workflow.",
      steps: [
        { tool: "Dimensions.ai", query: "tuberculosis utility weights quality of life India LMIC", result: "Returns 14 papers. Top result: Marra et al. 2004 (classic TB utility weights, widely cited in LMICs). Also surfaces 2 India-specific studies from 2018 and 2021 not in your existing reference list. The 2021 paper is from a Maharashtra community setting — close to your PHC context.", verdict: "GREEN" },
        { tool: "Claude.ai", query: "Extract utility weights by TB disease stage from this abstract. Flag any transferability concerns for a rural Indian PHC population.", result: "Extracts: active TB (untreated) 0.58 (95% CI 0.51–0.65), on treatment 0.72 (0.66–0.78), successfully treated 0.89 (0.84–0.93). Flags: 'Maharashtra urban clinic sample. Rural PHC populations may have lower baseline utility due to comorbidity burden. State this assumption explicitly and test in sensitivity analysis with ±0.10 range.'", verdict: "AMBER" },
        { tool: "NotebookLM", query: "Do any of the uploaded CAD4TB papers report patient-reported outcomes, quality of life, or utility data?", result: "No utility weight data found in uploaded papers. CAD4TB publications focus on diagnostic accuracy outcomes (sensitivity, specificity, AUC). Utility weight evidence must come from external TB literature — confirming your external search is necessary and justified.", verdict: "GAP CONFIRMED" },
      ],
      takeaway: "Three tools, 20 minutes: you know what utility weights to use (0.72 on-treatment), their confidence intervals, their limitations for your population, and why your external search is justified. That is a complete evidence note for one model input.",
    },
  },
  {
    id: "s3", number: "03", label: "Session 03", title: "The Workflow",
    subtitle: "From evidence gap to model input — end-to-end, live",
    color: ACCENT.s3, duration: "30 min", icon: "⬡",
    context: `Session 02 mapped your tools and identified what CAD4TB's own evidence base covers. This session completes the loop: you have gaps, you have tools, now we build the workflow that fills those gaps and turns papers into model inputs. By the end, you have a reusable extraction template your whole team can use tomorrow.`,
    tools: [
      {
        name: "HTAIn", tag: "ICMR · FREE", url: "https://htain.dhr.gov.in/",
        best: "Indian HTA assessments — your cost anchor",
        howto: "Search: 'tuberculosis', 'NCD screening', 'primary health centre'. Download full PDF assessments. Upload to NotebookLM. Ask: 'What unit costs are reported for PHC-based TB screening? What staff time assumptions are used?'",
        warning: "Limited coverage outside major disease areas. TB is well-covered.",
        stars: 4, verdict: "Essential for India-specific cost benchmarks.", arm: "Cost-utility · BIA",
      },
      {
        name: "NHSRC / NHA", tag: "GOVT OF INDIA · FREE", url: "https://nhsrcindia.org",
        best: "National Health Accounts and PHC operational costs",
        howto: "Download the National Health Accounts reports. Search for NCD screening, diagnostic services, PHC costs. This is your standard care cost comparator — what does a sputum smear test cost the system vs a CAD4TB read?",
        warning: "Data lags 2–3 years. State-level variation is very high.",
        stars: 4, verdict: "Non-negotiable for budget impact analysis.", arm: "BIA",
      },
      {
        name: "Tufts CEVR CEA Registry", tag: "TUFTS · FREE",
        url: "https://cevr.tuftsmedicalcenter.org/databases/cea-registry",
        best: "Published cost-effectiveness ratios for benchmarking",
        howto: "Search 'tuberculosis screening' or 'chest X-ray AI'. Filter by LMIC. Returns published ICERs and the utility weight sources used in those studies — a shortcut to finding what values others have used.",
        warning: "Dominated by high-income country studies. Use for benchmarking and utility weight cross-check only.",
        stars: 3, verdict: "Good for ICER comparators. Not your primary cost source.", arm: "Cost-utility",
      },
      {
        name: "WHO Global TB Programme", tag: "WHO · FREE",
        url: "https://www.who.int/teams/global-tuberculosis-programme/data",
        best: "Epidemiological data and India-specific TB burden estimates",
        howto: "Download India country profiles. Get prevalence, incidence, treatment success rates, and case detection rates. These are your model's epidemiological inputs — non-negotiable for the Markov model structure.",
        warning: "Estimates not primary data. Uncertainty ranges are wide for India states.",
        stars: 4, verdict: "Your source for TB natural history inputs.", arm: "Cost-utility",
      },
    ],
    demo: {
      title: "Live Demo: End-to-End Evidence Extraction",
      steps: [
        { n: "01", action: "Name your four gaps", prompt: null, time: "2 min", detail: "From Session 02: (1) utility weights by TB disease stage — India, (2) TB progression transition probabilities — India or LMIC, (3) standard care TB detection rates in Indian PHC, (4) PHC staff time costs for screening workflow. These four gaps = four search runs." },
        { n: "02", action: "Search Gap 3 on Dimensions.ai", prompt: "tuberculosis case detection rate primary health care India standard care sputum smear", time: "5 min", detail: "Add filter: Publication Year 2015–2026. Add filter: Country = India. Download top 5 papers as PDFs. You are looking for what proportion of true TB cases are currently detected under standard care in Indian PHC — this is your comparator arm baseline." },
        { n: "03", action: "Upload to NotebookLM and extract", prompt: "What TB case detection rates under standard care are reported in Indian primary health care settings? List: the rate, the population, the study site, the year, and the method used to measure detection.", time: "4 min", detail: "NotebookLM returns a structured answer with citations. You now have your standard care comparator arm baseline evidence — the number your whole effectiveness calculation rests on." },
        { n: "04", action: "Verify and contextualise with Claude", prompt: "The grant assumes 35% TB case detection under standard care in Indian PHC. I found three studies reporting 28%, 38%, and 41% from Rajasthan, MP, and UP respectively. How should I present this assumption? What sensitivity analysis range is defensible?", time: "4 min", detail: "Claude returns: base case 35%, sensitivity range 25–45%. Drafts the assumption statement: 'We assumed 35% based on published Indian evidence from comparable NCD programmes; state-level variation is high and this assumption was tested across the full reported range.' Copy that sentence. It goes directly into your methods section." },
        { n: "05", action: "Fill the extraction template", prompt: null, time: "3 min", detail: "Open the Template tab. Enter the value, the source, the quality flag, and the model input target. One paper, one row, five minutes. You have now completed one of four gaps. Repeat this workflow for each remaining gap." },
      ],
    },
    template: {
      columns: ["Paper (Author, Year)", "Evidence Type", "Value Extracted", "Population", "Setting", "India-specific?", "Quality Flag", "Model Input", "Verified by"],
      rows: [
        ["Marra et al. 2004", "Utility weight — active TB", "0.58 (0.51–0.65)", "Canada/multi-site", "Hospital", "✗ No", "AMBER", "Markov: untreated state", ""],
        ["[India 2021 study]", "Utility weight — on treatment", "0.72 (0.66–0.78)", "Maharashtra urban", "PHC-adjacent", "✓ Yes", "AMBER — urban not rural", "Markov: treatment state", ""],
        ["[Your paper]", "[Type]", "[Value ± CI]", "[Population]", "[Setting]", "[Y/N]", "[GREEN/AMBER/RED]", "[Which input]", ""],
      ],
      guide: [
        { flag: "GREEN", color: "#4ade80", meaning: "India PHC setting, published 2018+, peer-reviewed" },
        { flag: "AMBER", color: "#fb923c", meaning: "India but tertiary / LMIC but not India / older but nothing better available" },
        { flag: "RED", color: "#f87171", meaning: "High-income country only — use only if no LMIC alternative, state explicitly in limitations" },
      ],
    },
    workedExample: {
      title: "Worked Example: Standard Care Detection Rates in Indian PHC",
      context: "Your SW-CRT compares CAD4TB vs standard care. The model assumes standard care detects 35% of true TB cases in Indian PHC (case detection rate). You need to justify this with evidence — not guess.",
      steps: [
        { tool: "Dimensions.ai", query: "tuberculosis case detection rate primary care India rural community", result: "Returns 9 papers. Three report TB case detection rates from Indian PHC settings: 28% (Rajasthan, 2019), 38% (MP, 2021), 41% (UP, 2022). None from Chhattisgarh or Delhi specifically. Variation is driven by ASHA worker density and sputum transport infrastructure.", verdict: "AMBER — no state match but strong India evidence" },
        { tool: "Claude.ai", query: "The model assumes 35% TB case detection under standard care in Indian PHC. Three studies report 28%, 38%, and 41% from other Indian states. How should I present this assumption and what sensitivity range is appropriate?", result: "Base case: 35%. Sensitivity range: 25–45%. Assumption statement: 'We assumed 35% based on published evidence from three Indian states with comparable PHC infrastructure; state-level variation driven by ASHA density and sputum transport was explored across the full reported range in one-way sensitivity analysis.'", verdict: "GREEN — defensible base case with documented range" },
        { tool: "NotebookLM", query: "Do any of the uploaded CAD4TB papers report what proportion of screen-positive cases completed the full diagnostic pathway at referral centres?", result: "Two papers report referral completion data. One study from sub-Saharan Africa reports 71% referral completion among CAD4TB-flagged patients vs 34% under standard care — directionally supporting your intervention effect assumption, though not India-specific.", verdict: "AMBER — not India but directionally consistent" },
      ],
      takeaway: "You started with one number (35%) and ended with a justified base case, a documented sensitivity range, a copy-paste methods sentence, and supporting evidence from published literature. That is 30 minutes of work that makes your model defensible to a reviewer.",
    },
  },
]

// ── HEADER ────────────────────────────────────────────────────────────────────
function Header({ theme, onToggle, view, onBack, onLive, onLogout }) {
  const logoSrc = theme === "dark" ? LOGO_DARK : LOGO_LIGHT
  const showBack = view === "session" || view === "live"

  return (
    <header className="ukb-header">
      <a
        href="https://ukubona-llc.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="ukb-header-left"
        onClick={showBack ? (e) => { e.preventDefault(); onBack() } : undefined}
        style={showBack ? { cursor: "pointer" } : {}}
      >
        <img src={logoSrc} alt="Ukubona LLC" className="ukb-logo" />
        <span className="ukb-wordmark">Ukubona × WHO India</span>
      </a>
      <div className="ukb-header-right">
        {showBack && (
          <button onClick={onBack} className="ukb-back-btn">← SESSIONS</button>
        )}
        {view === "home" && (
          <button onClick={onLive} className="ukb-live-btn">▶ LIVE DEMO</button>
        )}
        <button
          className="ukb-theme-btn"
          onClick={onLogout}
          title="Log out"
          aria-label="Log out"
        >⏻</button>
        <button
          className="ukb-theme-btn"
          onClick={onToggle}
          title={theme === "dark" ? "Switch to light" : "Switch to dark"}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀" : "◑"}
        </button>
      </div>
    </header>
  )
}

// ── SHARED SMALL COMPONENTS ───────────────────────────────────────────────────
const Stars = ({ n, color }) => (
  <span style={{ color, letterSpacing: 1, fontSize: "0.85rem" }}>
    {"★".repeat(n)}{"☆".repeat(5 - n)}
  </span>
)

const VerdictBadge = ({ v }) => {
  const col = v === "GREEN" ? "#4ade80" : v === "AMBER" ? "#fb923c" : v === "GAP CONFIRMED" ? "#94a3b8" : "#f87171"
  return (
    <span style={{
      fontFamily: t.mono, fontSize: "0.62rem", letterSpacing: "0.12em",
      color: col, border: `1px solid ${col}33`, padding: "0.18rem 0.55rem",
      borderRadius: 2, display: "inline-block"
    }}>{v}</span>
  )
}

function CopyBtn({ text, label = "Copy", size = "sm" }) {
  const [copied, setCopied] = useState(false)
  const handle = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  const fs = size === "xs" ? "0.52rem" : "0.62rem"
  const pad = size === "xs" ? "0.15rem 0.5rem" : "0.25rem 0.7rem"
  return (
    <button onClick={handle} style={{
      background: copied ? "rgba(74,222,128,0.15)" : "var(--surface)",
      border: `1px solid ${copied ? "#4ade8055" : "var(--border)"}`,
      borderRadius: 3, padding: pad,
      fontFamily: t.mono, fontSize: fs, letterSpacing: "0.1em",
      color: copied ? "#4ade80" : "var(--muted)",
      cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap"
    }}>
      {copied ? "✓ Copied" : label}
    </button>
  )
}

// ── PENTAD STRIP ──────────────────────────────────────────────────────────────
function PentadStrip() {
  const [open, setOpen] = useState(null)
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <div style={{ fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.22em", color: "var(--muted)", marginBottom: "0.75rem", opacity: 0.6 }}>
        THE COMPRESSION CHAIN · CLICK ANY NODE
      </div>
      <div style={{ display: "flex", alignItems: "stretch", borderRadius: 8, overflow: "hidden", border: "1px solid var(--border)" }}>
        {PENTAD.map((p, i) => (
          <div
            key={p.node}
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              flex: 1, padding: "1rem 0.6rem", cursor: "pointer",
              borderRight: i < PENTAD.length - 1 ? "1px solid var(--border)" : "none",
              background: open === i ? `${p.color}12` : "var(--card)",
              transition: "background 0.2s", textAlign: "center",
            }}
          >
            <div style={{ fontFamily: t.mono, fontSize: "1.3rem", color: p.color, opacity: open === i ? 1 : 0.45, transition: "opacity 0.2s", lineHeight: 1 }}>{p.node}</div>
            <div style={{ fontFamily: t.mono, fontSize: "0.5rem", letterSpacing: "0.14em", color: p.color, margin: "0.3rem 0 0.2rem", opacity: open === i ? 1 : 0.7 }}>{p.label}</div>
            <div style={{ fontFamily: t.sans, fontSize: "0.62rem", color: "var(--muted)", lineHeight: 1.3 }}>{p.role}</div>
          </div>
        ))}
      </div>
      {open !== null && (
        <div style={{
          background: `${PENTAD[open].color}0d`,
          border: `1px solid ${PENTAD[open].color}33`,
          borderTop: "none", borderRadius: "0 0 8px 8px",
          padding: "1rem 1.4rem",
          fontFamily: t.sans, fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7,
        }}>
          <span style={{ color: PENTAD[open].color, fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.14em", marginRight: 10 }}>
            {PENTAD[open].label.toUpperCase()} —
          </span>
          {PENTAD[open].detail}
        </div>
      )}
    </div>
  )
}

// ── TOOL CARD ─────────────────────────────────────────────────────────────────
function ToolCard({ tool, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(o => !o)} style={{
      background: "var(--card)",
      border: `1px solid ${open ? color + "44" : "var(--border)"}`,
      borderLeft: `3px solid ${color}`,
      borderRadius: 6, padding: "1.1rem 1.3rem",
      cursor: "pointer", transition: "all 0.2s", marginBottom: 8,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <span style={{ fontFamily: t.serif, fontSize: "1.15rem", color: "var(--text)" }}>{tool.name}</span>
            <span style={{
              fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.18em",
              color, border: `1px solid ${color}55`, padding: "0.15rem 0.45rem", borderRadius: 2
            }}>{tool.tag}</span>
          </div>
          <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--muted)" }}>
            {tool.arm} · <Stars n={tool.stars} color={color} />
          </div>
        </div>
        <span style={{ color: "var(--muted)", fontSize: "0.75rem", transform: open ? "rotate(45deg)" : "none", transition: "0.2s" }}>+</span>
      </div>
      {open && (
        <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
          <div style={{ marginBottom: "0.8rem" }}>
            <div style={{ fontFamily: t.mono, fontSize: "0.58rem", color, letterSpacing: "0.14em", marginBottom: 4 }}>BEST FOR</div>
            <div style={{ fontFamily: t.sans, fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.5 }}>{tool.best}</div>
          </div>
          <div style={{ marginBottom: "0.8rem" }}>
            <div style={{ fontFamily: t.mono, fontSize: "0.58rem", color, letterSpacing: "0.14em", marginBottom: 4 }}>HOW TO USE IT</div>
            <div style={{ fontFamily: t.sans, fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{tool.howto}</div>
          </div>
          <div style={{ marginBottom: "0.8rem" }}>
            <div style={{ fontFamily: t.mono, fontSize: "0.58rem", color: "#f87171", letterSpacing: "0.14em", marginBottom: 4 }}>⚠ LIMITATION</div>
            <div style={{ fontFamily: t.sans, fontSize: "0.82rem", color: "rgba(248,113,113,0.75)", lineHeight: 1.5 }}>{tool.warning}</div>
          </div>
          <div style={{
            background: `${color}0d`, border: `1px solid ${color}22`,
            borderRadius: 4, padding: "0.6rem 0.9rem",
            fontFamily: t.sans, fontSize: "0.83rem", color, lineHeight: 1.5
          }}>
            {tool.verdict}
          </div>
          <div style={{ marginTop: "0.8rem" }}>
            <a href={tool.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{
              fontFamily: t.mono, fontSize: "0.6rem", letterSpacing: "0.12em",
              color, textDecoration: "none", borderBottom: `1px solid ${color}55`, paddingBottom: 1
            }}>OPEN TOOL ↗</a>
          </div>
        </div>
      )}
    </div>
  )
}

function DemoStep({ step, color, active, onClick }) {
  return (
    <div onClick={onClick} style={{
      display: "flex", gap: "1.2rem", cursor: "pointer",
      background: active ? `${color}0a` : "transparent",
      border: `1px solid ${active ? color + "33" : "transparent"}`,
      borderRadius: 6, padding: "1rem 1.1rem", marginBottom: 6, transition: "all 0.2s"
    }}>
      <div style={{
        fontFamily: t.mono, fontSize: "1.4rem", color: active ? color : "var(--muted)",
        fontWeight: 300, minWidth: 36, transition: "color 0.2s"
      }}>{step.n}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: active ? 10 : 0 }}>
          <div style={{ fontFamily: t.sans, fontSize: "0.92rem", fontWeight: 600, color: active ? "var(--text)" : "var(--muted)", transition: "color 0.2s" }}>
            {step.action}
          </div>
          <span style={{ fontFamily: t.mono, fontSize: "0.55rem", color: "var(--muted)", letterSpacing: "0.1em" }}>{step.time}</span>
        </div>
        {active && (
          <div>
            {step.prompt && (
              <div style={{
                background: "var(--surface)", border: `1px solid ${color}33`,
                borderLeft: `3px solid ${color}`, borderRadius: 4,
                padding: "0.75rem 1rem", marginBottom: "0.75rem"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <div style={{ fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.16em", color }}>PASTE THIS PROMPT</div>
                  <CopyBtn text={step.prompt} size="xs" />
                </div>
                <div style={{ fontFamily: t.mono, fontSize: "0.78rem", color: "var(--text)", lineHeight: 1.65, fontStyle: "italic" }}>
                  "{step.prompt}"
                </div>
              </div>
            )}
            <div style={{ fontFamily: t.sans, fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65 }}>{step.detail}</div>
          </div>
        )}
      </div>
    </div>
  )
}

function WorkedStep({ step, color }) {
  return (
    <div style={{
      background: "var(--card)", border: "1px solid var(--border)",
      borderRadius: 6, padding: "1.2rem 1.4rem", marginBottom: 10
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{
          fontFamily: t.mono, fontSize: "0.6rem", letterSpacing: "0.18em",
          color, border: `1px solid ${color}44`, padding: "0.2rem 0.6rem", borderRadius: 2
        }}>{step.tool.toUpperCase()}</span>
        <VerdictBadge v={step.verdict} />
      </div>
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
          <div style={{ fontFamily: t.mono, fontSize: "0.55rem", letterSpacing: "0.14em", color: "var(--muted)" }}>QUERY</div>
          <CopyBtn text={step.query} size="xs" label="Copy query" />
        </div>
        <div style={{ fontFamily: t.mono, fontSize: "0.78rem", color: "var(--text)", fontStyle: "italic", lineHeight: 1.6 }}>"{step.query}"</div>
      </div>
      <div>
        <div style={{ fontFamily: t.mono, fontSize: "0.55rem", letterSpacing: "0.14em", color: "var(--muted)", marginBottom: 5 }}>RESULT</div>
        <div style={{ fontFamily: t.sans, fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65 }}>{step.result}</div>
      </div>
    </div>
  )
}

function TemplateSection({ session }) {
  const tpl = session.template
  const color = session.color
  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontFamily: t.serif, fontSize: "1.5rem", color: "var(--text)", marginBottom: 6 }}>Evidence Extraction Template</div>
        <div style={{ fontFamily: t.sans, fontSize: "0.85rem", color: "var(--muted)" }}>Copy this into a shared Google Sheet. One row per paper. One row = one model input.</div>
      </div>
      <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: t.sans, fontSize: "0.78rem" }}>
          <thead>
            <tr>
              {tpl.columns.map(col => (
                <th key={col} style={{
                  background: `${color}15`, color, fontFamily: t.mono, fontSize: "0.52rem",
                  letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.65rem 0.8rem",
                  border: `1px solid ${color}22`, textAlign: "left", whiteSpace: "nowrap"
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tpl.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{
                    padding: "0.65rem 0.8rem",
                    border: "1px solid var(--border)",
                    color: cell.includes("AMBER") ? "#fb923c" : cell.includes("GREEN") ? "#4ade80" : cell.includes("RED") ? "#f87171" : "var(--muted)",
                    background: i % 2 === 0 ? "var(--card)" : "var(--surface)",
                    whiteSpace: cell.startsWith("[") ? "nowrap" : "normal",
                  }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginBottom: "0.8rem", fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.18em", color: "var(--muted)" }}>QUALITY FLAG GUIDE</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {tpl.guide.map(g => (
          <div key={g.flag} style={{
            display: "flex", alignItems: "flex-start", gap: 14,
            background: "var(--card)", border: `1px solid ${g.color}22`,
            borderLeft: `3px solid ${g.color}`, borderRadius: 4, padding: "0.7rem 1rem"
          }}>
            <span style={{ fontFamily: t.mono, fontSize: "0.65rem", letterSpacing: "0.12em", color: g.color, minWidth: 40 }}>{g.flag}</span>
            <span style={{ fontFamily: t.sans, fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.5 }}>{g.meaning}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── SESSION VIEW ──────────────────────────────────────────────────────────────
function SessionView({ session, onBack }) {
  const [tab, setTab] = useState("tools")
  const [activeStep, setActiveStep] = useState(0)
  const color = session.color
  const tabs = ["tools", "demo", "example", ...(session.template ? ["template"] : [])]
  const tabLabels = { tools: "🔧 Tools", demo: "🎬 Live Demo", example: "📋 Worked Example", template: "📊 Template" }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1.2rem 6rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
        <button onClick={onBack} className="ukb-nav-back" style={{ "--accent": color }}>← ALL SESSIONS</button>
        <div style={{ fontFamily: t.mono, fontSize: "0.6rem", letterSpacing: "0.2em", color }}>
          {session.icon} {session.label} · {session.duration}
        </div>
      </div>
      <div style={{ borderLeft: `4px solid ${color}`, paddingLeft: "1.8rem", marginBottom: "2.5rem" }}>
        <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.22em", color, marginBottom: 10, opacity: 0.8 }}>
          AI TOOLS FOR HTA LITERATURE REVIEW
        </div>
        <h1 style={{ fontFamily: t.serif, fontSize: "clamp(2rem,5vw,3.2rem)", color: "var(--text)", margin: "0 0 0.4rem", fontWeight: 400, lineHeight: 1.1 }}>
          {session.title}
        </h1>
        <p style={{ fontFamily: t.sans, fontSize: "1rem", color: "var(--muted)", margin: "0 0 1.2rem", lineHeight: 1.5 }}>{session.subtitle}</p>
        <p style={{ fontFamily: t.sans, fontSize: "0.87rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: 680, opacity: 0.85 }}>{session.context}</p>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: 0 }}>
        {tabs.map(tb => (
          <button key={tb} onClick={() => setTab(tb)} style={{
            background: "none", border: "none", borderBottom: `2px solid ${tab === tb ? color : "transparent"}`,
            color: tab === tb ? color : "var(--muted)", fontFamily: t.mono, fontSize: "0.65rem",
            letterSpacing: "0.1em", padding: "0.65rem 1rem 0.75rem",
            cursor: "pointer", transition: "all 0.2s", marginBottom: -1
          }}>{tabLabels[tb]}</button>
        ))}
      </div>
      {tab === "tools" && (
        <div>
          <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.18em", color: "var(--muted)", marginBottom: "1rem", opacity: 0.7 }}>
            {session.tools.length} TOOLS · CLICK TO EXPAND
          </div>
          {session.tools.map(tool => <ToolCard key={tool.name} tool={tool} color={color} />)}
        </div>
      )}
      {tab === "demo" && (
        <div>
          <div style={{ fontFamily: t.serif, fontSize: "1.5rem", color: "var(--text)", marginBottom: "0.4rem" }}>{session.demo.title}</div>
          <div style={{ fontFamily: t.sans, fontSize: "0.82rem", color: "var(--muted)", marginBottom: "1.8rem", lineHeight: 1.5 }}>
            Click each step to expand the prompt and detail. Run these live during the session.
          </div>
          {session.demo.steps.map((step, i) => (
            <DemoStep key={step.n} step={step} color={color} active={activeStep === i} onClick={() => setActiveStep(i)} />
          ))}
          <div style={{
            background: `${color}08`, border: `1px solid ${color}22`,
            borderRadius: 6, padding: "1rem 1.3rem", marginTop: "1.5rem",
            fontFamily: t.sans, fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65
          }}>
            <span style={{ color, fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.12em" }}>FACILITATION NOTE — </span>
            If any step stalls, move on. The goal is the workflow, not every output. They can replay this app independently after the session.
          </div>
        </div>
      )}
      {tab === "example" && (
        <div>
          <div style={{ fontFamily: t.serif, fontSize: "1.5rem", color: "var(--text)", marginBottom: "0.4rem" }}>{session.workedExample.title}</div>
          <div style={{ fontFamily: t.sans, fontSize: "0.87rem", color: "var(--muted)", marginBottom: "1.8rem", lineHeight: 1.65, maxWidth: 680 }}>
            {session.workedExample.context}
          </div>
          {session.workedExample.steps.map((step, i) => <WorkedStep key={i} step={step} color={color} />)}
          <div style={{
            background: `${color}08`, border: `1px solid ${color}22`, borderLeft: `4px solid ${color}`,
            borderRadius: 6, padding: "1.1rem 1.4rem", marginTop: "1.5rem"
          }}>
            <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.14em", color, marginBottom: 8 }}>TAKEAWAY</div>
            <div style={{ fontFamily: t.sans, fontSize: "0.87rem", color: "var(--text)", lineHeight: 1.7 }}>{session.workedExample.takeaway}</div>
          </div>
        </div>
      )}
      {tab === "template" && session.template && <TemplateSection session={session} />}
    </div>
  )
}

// ── LIVE DEMO VIEW ────────────────────────────────────────────────────────────
function LiveDemoView({ onExit }) {
  const [current, setCurrent] = useState(0)
  const stepRefs = useRef([])
  const step = LIVE_STEPS[current]
  const isFirst = current === 0
  const isLast = current === LIVE_STEPS.length - 1
  const s02Steps = LIVE_STEPS.filter(s => s.session === "02")
  const s03Steps = LIVE_STEPS.filter(s => s.session === "03")

  const go = (dir) => {
    const next = current + dir
    if (next < 0 || next >= LIVE_STEPS.length) return
    setCurrent(next)
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1)
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1)
      if (e.key === "Escape") onExit()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [current]) // eslint-disable-line

  useEffect(() => {
    if (stepRefs.current[current]) {
      stepRefs.current[current].scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }, [current])

  const color = step.sessionColor
  const allPrompts = LIVE_STEPS.filter(s => s.prompt).map(s =>
    `STEP ${s.session}.${s.n} — ${s.title.toUpperCase()} (${s.tool})\n\n${s.prompt}`
  ).join("\n\n" + "─".repeat(50) + "\n\n")

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "1.5rem 1rem 4rem", display: "grid", gridTemplateColumns: "260px 1fr", gap: "2rem", alignItems: "start" }}>
      <div style={{ position: "sticky", top: "72px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
        <div style={{ padding: "0.8rem 1rem 0.4rem", borderBottom: "1px solid var(--border)" }}>
          <div style={{ fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.18em", color: ACCENT.s2, marginBottom: 6 }}>SESSION 02 · THE LANDSCAPE</div>
          {s02Steps.map((s) => {
            const globalIdx = LIVE_STEPS.indexOf(s)
            const isActive = globalIdx === current
            return (
              <div key={globalIdx} ref={el => stepRefs.current[globalIdx] = el} onClick={() => setCurrent(globalIdx)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "0.45rem 0.6rem", borderRadius: 4, marginBottom: 2, cursor: "pointer", transition: "all 0.15s", background: isActive ? `${ACCENT.s2}15` : "transparent", border: `1px solid ${isActive ? ACCENT.s2 + "33" : "transparent"}` }}>
                <span style={{ fontFamily: t.mono, fontSize: "0.7rem", color: isActive ? ACCENT.s2 : "var(--muted)", minWidth: 20, transition: "color 0.15s" }}>{s.n}</span>
                <span style={{ fontFamily: t.sans, fontSize: "0.75rem", lineHeight: 1.3, color: isActive ? "var(--text)" : "var(--muted)", transition: "color 0.15s" }}>{s.title}</span>
              </div>
            )
          })}
        </div>
        <div style={{ padding: "0.8rem 1rem 0.8rem", borderBottom: "1px solid var(--border)" }}>
          <div style={{ fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.18em", color: ACCENT.s3, marginBottom: 6 }}>SESSION 03 · THE WORKFLOW</div>
          {s03Steps.map((s) => {
            const globalIdx = LIVE_STEPS.indexOf(s)
            const isActive = globalIdx === current
            return (
              <div key={globalIdx} ref={el => stepRefs.current[globalIdx] = el} onClick={() => setCurrent(globalIdx)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "0.45rem 0.6rem", borderRadius: 4, marginBottom: 2, cursor: "pointer", transition: "all 0.15s", background: isActive ? `${ACCENT.s3}15` : "transparent", border: `1px solid ${isActive ? ACCENT.s3 + "33" : "transparent"}` }}>
                <span style={{ fontFamily: t.mono, fontSize: "0.7rem", color: isActive ? ACCENT.s3 : "var(--muted)", minWidth: 20, transition: "color 0.15s" }}>{s.n}</span>
                <span style={{ fontFamily: t.sans, fontSize: "0.75rem", lineHeight: 1.3, color: isActive ? "var(--text)" : "var(--muted)", transition: "color 0.15s" }}>{s.title}</span>
              </div>
            )
          })}
        </div>
        <div style={{ padding: "0.8rem 1rem" }}>
          <CopyBtn text={allPrompts} label="Copy all prompts" />
          <div style={{ fontFamily: t.mono, fontSize: "0.5rem", letterSpacing: "0.1em", color: "var(--muted)", marginTop: 6, lineHeight: 1.5 }}>Only steps with prompts included</div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
          <span style={{ fontFamily: t.mono, fontSize: "0.55rem", letterSpacing: "0.2em", color, border: `1px solid ${color}44`, padding: "0.2rem 0.65rem", borderRadius: 2 }}>SESSION {step.session} · {step.sessionTitle.toUpperCase()}</span>
          <span style={{ fontFamily: t.mono, fontSize: "0.55rem", color: "var(--muted)", letterSpacing: "0.1em" }}>STEP {current + 1} / {LIVE_STEPS.length}</span>
        </div>
        <div style={{ background: "var(--card)", border: `1px solid ${color}33`, borderLeft: `4px solid ${color}`, borderRadius: 8, padding: "2rem 2rem 1.8rem", marginBottom: "1.5rem", minHeight: 320 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem", gap: 16 }}>
            <div>
              <div style={{ fontFamily: t.mono, fontSize: "3rem", color, lineHeight: 1, opacity: 0.25, marginBottom: 6 }}>{step.n}</div>
              <h2 style={{ fontFamily: t.serif, fontSize: "1.8rem", color: "var(--text)", margin: 0, fontWeight: 400, lineHeight: 1.15 }}>{step.title}</h2>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              {step.toolUrl ? (
                <a href={step.toolUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", fontFamily: t.mono, fontSize: "0.6rem", letterSpacing: "0.14em", color, border: `1px solid ${color}44`, padding: "0.25rem 0.65rem", borderRadius: 3, textDecoration: "none", marginBottom: 6 }}>{step.tool} ↗</a>
              ) : (
                <span style={{ display: "inline-block", fontFamily: t.mono, fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--muted)", border: "1px solid var(--border)", padding: "0.25rem 0.65rem", borderRadius: 3, marginBottom: 6 }}>{step.tool}</span>
              )}
              <div style={{ fontFamily: t.mono, fontSize: "0.55rem", color: "var(--muted)", letterSpacing: "0.1em" }}>{step.time}</div>
            </div>
          </div>
          {step.prompt && (
            <div style={{ background: "var(--surface)", border: `1px solid ${color}33`, borderLeft: `3px solid ${color}`, borderRadius: 4, padding: "1rem 1.2rem", marginBottom: "1.2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ fontFamily: t.mono, fontSize: "0.55rem", letterSpacing: "0.18em", color }}>PASTE THIS PROMPT</div>
                <CopyBtn text={step.prompt} label="Copy prompt" />
              </div>
              <div style={{ fontFamily: t.mono, fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.7, fontStyle: "italic" }}>"{step.prompt}"</div>
            </div>
          )}
          <div style={{ fontFamily: t.sans, fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.75 }}>{step.detail}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => go(-1)} disabled={isFirst} style={{ background: "none", border: "1px solid var(--border)", borderRadius: 4, padding: "0.55rem 1.2rem", fontFamily: t.mono, fontSize: "0.65rem", letterSpacing: "0.12em", color: isFirst ? "var(--muted)" : "var(--text)", cursor: isFirst ? "not-allowed" : "pointer", opacity: isFirst ? 0.35 : 1, transition: "all 0.2s" }}>← BACK</button>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {LIVE_STEPS.map((s, i) => {
              const dotColor = s.session === "02" ? ACCENT.s2 : ACCENT.s3
              return <div key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 20 : 6, height: 6, borderRadius: 3, background: i === current ? dotColor : i < current ? dotColor + "55" : "var(--border)", cursor: "pointer", transition: "all 0.2s" }} />
            })}
          </div>
          {isLast ? (
            <button onClick={onExit} style={{ background: color, border: "none", borderRadius: 4, padding: "0.55rem 1.2rem", fontFamily: t.mono, fontSize: "0.65rem", letterSpacing: "0.12em", color: "#0b0f14", cursor: "pointer", fontWeight: 600 }}>DONE ✓</button>
          ) : (
            <button onClick={() => go(1)} style={{ background: color, border: "none", borderRadius: 4, padding: "0.55rem 1.2rem", fontFamily: t.mono, fontSize: "0.65rem", letterSpacing: "0.12em", color: "#0b0f14", cursor: "pointer", fontWeight: 600 }}>NEXT →</button>
          )}
        </div>
        <div style={{ textAlign: "center", marginTop: "1.2rem", fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.1em", color: "var(--muted)", opacity: 0.5 }}>
          ← → arrow keys to navigate · ESC to exit
        </div>
      </div>
    </div>
  )
}

// ── PASSWORD GATE ─────────────────────────────────────────────────────────────
function PasswordGate({ onUnlock }) {
  const [val, setVal] = useState("")
  const [err, setErr] = useState("")
  const [shake, setShake] = useState(false)
  const [loading, setLoad] = useState(false)
  const { login } = useAuth()
  const inputRef = useRef()

  useEffect(() => { inputRef.current?.focus() }, [])

  async function attempt() {
    if (!val.trim() || loading) return
    setLoad(true)
    const result = await login(val)
    setLoad(false)
    if (result.ok) { return }
    setErr(result.error || "incorrect password")
    setShake(true)
    setVal("")
    setTimeout(() => setShake(false), 500)
    setTimeout(() => setErr(""), 2500)
  }

  return (
    <div style={{ minHeight: "calc(100vh - 56px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <div style={{ width: "min(420px, 100%)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "2.5rem 2rem", textAlign: "center", animation: shake ? "shk 0.4s ease" : "none" }}>
        <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.24em", color: "var(--muted)", marginBottom: "1.2rem" }}>UKUBONA × WHO INDIA</div>
        <h1 style={{ fontFamily: t.serif, fontSize: "1.9rem", color: "var(--text)", margin: "0 0 0.4rem", fontWeight: 400, lineHeight: 1.2 }}>
          AI Tools for<br />Literature Review
        </h1>
        <p style={{ fontFamily: t.sans, fontSize: "0.82rem", color: "var(--muted)", margin: "0 0 2rem", lineHeight: 1.5 }}>Sessions 02 & 03 · HTA Evidence Workflow</p>
        <div style={{ display: "flex", gap: 8, marginBottom: err ? 8 : 16 }}>
          <input
            ref={inputRef}
            type="password"
            value={val}
            onChange={e => setVal(e.target.value)}
            onKeyDown={e => e.key === "Enter" && attempt()}
            placeholder="access password"
            disabled={loading}
            style={{ flex: 1, background: "var(--card)", border: `1px solid ${err ? "#f87171" : "var(--border)"}`, borderRadius: 4, padding: "0.7rem 0.9rem", color: "var(--text)", fontFamily: t.mono, fontSize: "0.8rem", outline: "none", transition: "border-color 0.2s", opacity: loading ? 0.6 : 1 }}
          />
          <button onClick={attempt} disabled={loading} className="ukb-enter-btn" style={{ opacity: loading ? 0.6 : 1 }}>
            {loading ? "…" : "ENTER"}
          </button>
        </div>
        {err && <div style={{ fontFamily: t.mono, fontSize: "0.62rem", color: "#f87171", letterSpacing: "0.1em", marginBottom: 12 }}>{err}</div>}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: "1.5rem" }}>
          {[ACCENT.s2, ACCENT.s3].map(c => (
            <span key={c} style={{ width: 28, height: 3, borderRadius: 2, background: c, opacity: 0.6 }} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function Home({ onSelect, onLive }) {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "3rem 1.2rem 6rem" }}>
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.26em", color: "var(--muted)", marginBottom: "2rem", opacity: 0.7 }}>UKUBONA × WHO INDIA · 2026</div>
        <h1 style={{ fontFamily: t.serif, fontSize: "clamp(2.8rem,7vw,5rem)", color: "var(--text)", margin: "0 0 0.5rem", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.01em" }}>
          AI Tools for<br /><em style={{ color: ACCENT.s2 }}>Literature</em> Review
        </h1>
        <div style={{ width: 60, height: 2, background: `linear-gradient(to right, ${ACCENT.s2}, ${ACCENT.s3})`, margin: "1.5rem 0" }} />
        <p style={{ fontFamily: t.sans, fontSize: "1rem", color: "var(--muted)", maxWidth: 520, lineHeight: 1.7, margin: "0 0 2rem" }}>
          Two sessions. Thirty minutes each. Every tool is free.<br />Built around a real HTA workflow — TB screening in Indian PHC.
        </p>
        <button onClick={onLive} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: `linear-gradient(135deg, ${ACCENT.s2}22, ${ACCENT.s3}22)`, border: `1px solid ${ACCENT.s2}55`, borderRadius: 6, padding: "0.75rem 1.4rem", fontFamily: t.mono, fontSize: "0.7rem", letterSpacing: "0.14em", color: ACCENT.s2, cursor: "pointer", transition: "all 0.2s" }}>
          <span style={{ fontSize: "0.9rem" }}>▶</span>
          RUN LIVE DEMO — 10 STEPS ACROSS BOTH SESSIONS
        </button>
      </div>

      <PentadStrip />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px,100%),1fr))", gap: 16 }}>
        {SESSIONS.map((s, i) => (
          <div key={s.id} onClick={() => onSelect(i)} className="ukb-session-card" style={{ "--card-accent": s.color }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
              <span style={{ fontFamily: t.mono, fontSize: "3rem", color: s.color, lineHeight: 1, opacity: 0.5 }}>{s.icon}</span>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: t.mono, fontSize: "0.55rem", letterSpacing: "0.2em", color: s.color, marginBottom: 3 }}>{s.label}</div>
                <div style={{ fontFamily: t.mono, fontSize: "0.52rem", color: "var(--muted)", letterSpacing: "0.1em" }}>{s.duration}</div>
              </div>
            </div>
            <h2 style={{ fontFamily: t.serif, fontSize: "1.7rem", color: "var(--text)", margin: "0 0 0.4rem", fontWeight: 400, lineHeight: 1.15 }}>{s.title}</h2>
            <p style={{ fontFamily: t.sans, fontSize: "0.85rem", color: "var(--muted)", margin: "0 0 1.5rem", lineHeight: 1.55 }}>{s.subtitle}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.3rem" }}>
              {[`${s.tools.length} tools`, "live demo", "worked example", ...(s.template ? ["template"] : [])].map(tag => (
                <span key={tag} style={{ fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.1em", color: "var(--muted)", border: "1px solid var(--border)", padding: "0.2rem 0.55rem", borderRadius: 2 }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", fontFamily: t.mono, fontSize: "0.65rem", letterSpacing: "0.12em", color: s.color }}>ENTER →</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "3.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.12em", color: "var(--muted)", lineHeight: 2, opacity: 0.7 }}>
          All tools listed are free to use. No API keys required. NotebookLM requires a Google account. Claude.ai requires a free Anthropic account.
        </div>
      </div>
    </div>
  )
}

// ── ROOT APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const { status, logout } = useAuth()
  const [view, setView] = useState("home")
  const [activeSession, setActiveSession] = useState(null)
  const [theme, toggleTheme] = useTheme()

  useEffect(() => { document.body.style.margin = "0" }, [])

  const goHome    = () => { setView("home"); setActiveSession(null) }
  const goSession = (i) => { setActiveSession(i); setView("session") }
  const goLive    = () => setView("live")

  if (status === null) return null

  return (
    <>
      <Header
        theme={theme}
        onToggle={toggleTheme}
        view={status ? view : "gate"}
        onBack={goHome}
        onLive={goLive}
        onLogout={logout}
      />
      <div className="ukb-page">
        {!status
          ? <PasswordGate onUnlock={() => {}} />
          : view === "live"
            ? <LiveDemoView onExit={goHome} />
            : view === "session" && activeSession !== null
              ? <SessionView session={SESSIONS[activeSession]} onBack={goHome} />
              : <Home onSelect={goSession} onLive={goLive} />
        }
      </div>
    </>
  )
}
```

#### IV

Let me analyze the image carefully and understand what Grace wants.The image shows Grace's hand-drawn table with:
- Columns: AI tool | Database Search | Abstract Screening | Extraction | Pros/Cons | Geographical | Proprietary
- Rows: Elicit (✓✓✓), Scite (✓ — ✓ new), Dimensions AI (✓ — — propriete)

She wants all 20 tools with these columns. Now let me build the updated session2.html with Grace's exact table, plus update the session for the full picture.Now I'll create the updated session2.html with Grace's 20-tool comparison table integrated as a collapsible section, plus the full existing content preserved:


```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>🔬 The Tools Available · Level 1 Session 2</title>
  <meta name="description" content="Which AI tools exist for health economics literature work — and what can each one not see?">
  <meta name="color-scheme" content="dark light">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-dark.ico" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-light.ico" media="(prefers-color-scheme: light)">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-dark.png" as="image">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-light.png" as="image">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,800;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&display=swap" rel="stylesheet">

  <style>
    /* ── RESET & TOKENS ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --session-accent: #4fc3f7;
      --ink:    #0f0e0d;
      --ink2:   #3a3630;
      --ink3:   #7a7268;
      --ink4:   #b0a898;
      --paper:  #faf8f4;
      --paper2: #f0ece4;
      --border-light: #d8d0c0;
      --gold:   #b8860b;
      --gold2:  #d4a017;
      --bar-h: 48px;
      --ff-display: 'Playfair Display', Georgia, serif;
      --ff-body:    'Source Serif 4', Georgia, serif;
      --ff-mono:    'DM Mono', 'Fira Mono', monospace;
      --ff-sans:    'Inter', system-ui, sans-serif;
    }

    [data-theme="dark"] {
      --bg:       #0b0f14;
      --surface:  #111620;
      --card:     #161d28;
      --border:   rgba(255,255,255,0.07);
      --text:     #f0ede6;
      --muted:    rgba(240,237,230,0.55);
      --glass:    rgba(255,255,255,0.03);
    }
    [data-theme="light"] {
      --bg:       var(--paper);
      --surface:  var(--paper2);
      --card:     #fff;
      --border:   var(--border-light);
      --text:     var(--ink);
      --muted:    var(--ink3);
      --glass:    rgba(0,0,0,0.02);
    }

    html, body { min-height: 100%; background: var(--bg); color: var(--text); font-family: var(--ff-body); font-weight: 300; transition: background 0.3s, color 0.3s; }

    /* ── FAKE HEADER (matches shared.js header) ── */
    .ukb-header {
      position: fixed; top: 0; left: 0; right: 0; height: var(--bar-h);
      background: var(--surface); border-bottom: 1px solid var(--border);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 1.5rem; z-index: 100;
    }
    .ukb-header-left { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
    .ukb-logo { height: 22px; width: auto; }
    .ukb-wordmark { font-family: var(--ff-mono); font-size: 0.62rem; letter-spacing: 0.14em; color: var(--muted); }
    .ukb-header-right { display: flex; gap: 0.6rem; }
    .ukb-theme-btn {
      background: none; border: 1px solid var(--border); border-radius: 4px;
      padding: 0.3rem 0.65rem; font-size: 0.75rem; cursor: pointer;
      color: var(--muted); transition: all 0.2s;
    }
    .ukb-theme-btn:hover { border-color: var(--session-accent); color: var(--session-accent); }

    /* ── SPINE ── */
    .spine {
      position: fixed; left: 0; top: 0; width: 3px; height: 0%;
      background: var(--session-accent); z-index: 200; transition: height .1s linear;
    }

    /* ── PAGE ── */
    .s-page {
      padding-top: calc(var(--bar-h) + 3rem);
      padding-bottom: 6rem; max-width: 960px;
      margin: 0 auto; padding-left: 2rem; padding-right: 2rem;
    }
    .s-crumb {
      font-family: var(--ff-sans); font-size: .6rem; letter-spacing: .3em;
      text-transform: uppercase; color: var(--muted); opacity: .5;
      margin-bottom: 2.5rem; display: flex; gap: .75rem; align-items: center;
    }
    .s-crumb span { color: var(--session-accent); opacity: 1; }
    .s-hero { margin-bottom: 3.5rem; }
    .s-label { font-family: var(--ff-sans); font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: var(--session-accent); margin-bottom: .75rem; font-weight: 600; }
    .s-title { font-family: var(--ff-display); font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; line-height: 1.1; letter-spacing: -.02em; color: var(--text); margin-bottom: .5rem; }
    .s-subtitle { font-family: var(--ff-display); font-size: clamp(1rem, 2.5vw, 1.3rem); font-style: italic; font-weight: 400; color: var(--muted); margin-bottom: 1.5rem; }
    .s-oneliner { font-size: .9rem; line-height: 1.7; color: var(--muted); border-left: 3px solid var(--session-accent); padding-left: 1rem; max-width: 580px; }
    .s-badge { display: inline-flex; align-items: center; gap: .5rem; font-family: var(--ff-sans); font-size: .55rem; letter-spacing: .2em; text-transform: uppercase; padding: .3rem .8rem; border-radius: 999px; border: 1px solid var(--session-accent); color: var(--session-accent); background: color-mix(in srgb, var(--session-accent) 8%, transparent); margin-bottom: 1.5rem; }

    /* ── CONTENT ── */
    .session-content { margin-top: 2rem; line-height: 1.8; color: var(--muted); }
    .session-content p { margin-bottom: 1.25rem; font-size: clamp(.95rem, 2vw, 1.05rem); }
    .session-content h2 { font-family: var(--ff-display); font-size: clamp(1.4rem, 3.5vw, 2rem); font-weight: 800; color: var(--text); margin: 3rem 0 1rem; letter-spacing: -.02em; }
    .session-content h3 { font-family: var(--ff-sans); font-size: .65rem; letter-spacing: .3em; text-transform: uppercase; color: var(--session-accent); margin: 2rem 0 .75rem; font-weight: 700; }
    .session-content strong { color: var(--text); font-weight: 600; }
    .session-content ul { padding-left: 1.5rem; margin-bottom: 1.25rem; }
    .session-content ul li { margin-bottom: .5rem; font-size: clamp(.95rem, 2vw, 1.05rem); }

    /* ── COLLAPSIBLE CONTAINER ── */
    .collapsible-wrap {
      border: 1px solid var(--border); border-radius: 10px;
      overflow: hidden; margin: 2rem 0;
    }
    .collapsible-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 1.1rem 1.5rem; cursor: pointer;
      background: color-mix(in srgb, var(--session-accent) 6%, var(--surface));
      border-bottom: 1px solid transparent;
      transition: background 0.2s;
      user-select: none;
    }
    .collapsible-header:hover { background: color-mix(in srgb, var(--session-accent) 10%, var(--surface)); }
    .collapsible-header.open { border-bottom-color: var(--border); }
    .collapsible-title {
      font-family: var(--ff-sans); font-size: .72rem; font-weight: 700;
      letter-spacing: .18em; text-transform: uppercase; color: var(--session-accent);
    }
    .collapsible-meta {
      font-family: var(--ff-mono); font-size: .55rem; letter-spacing: .1em;
      color: var(--muted); margin-top: .2rem;
    }
    .collapsible-chevron {
      font-size: 1rem; color: var(--session-accent);
      transition: transform 0.3s;
    }
    .collapsible-chevron.open { transform: rotate(180deg); }
    .collapsible-body {
      max-height: 0; overflow: hidden;
      transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1);
    }
    .collapsible-body.open { max-height: 4000px; }
    .collapsible-inner { padding: 1.5rem; }

    /* ── COMPARISON TABLE ── */
    .cmp-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .cmp-table {
      width: 100%; border-collapse: collapse;
      font-family: var(--ff-sans); font-size: 0.78rem; min-width: 820px;
    }
    .cmp-table thead tr th {
      background: color-mix(in srgb, var(--session-accent) 12%, transparent);
      color: var(--session-accent); font-family: var(--ff-mono);
      font-size: .52rem; letter-spacing: .18em; text-transform: uppercase;
      font-weight: 700; padding: .7rem .85rem; text-align: left;
      border-bottom: 2px solid var(--session-accent);
      border-right: 1px solid var(--border); white-space: nowrap;
    }
    .cmp-table thead tr th:last-child { border-right: none; }
    .cmp-table tbody tr td {
      padding: .7rem .85rem; border-bottom: 1px solid var(--border);
      border-right: 1px solid var(--border); vertical-align: top;
      line-height: 1.45; color: var(--muted);
    }
    .cmp-table tbody tr td:last-child { border-right: none; }
    .cmp-table tbody tr:last-child td { border-bottom: none; }
    .cmp-table tbody tr td:first-child {
      color: var(--text); font-weight: 500; white-space: nowrap;
      font-size: 0.82rem;
    }
    .cmp-table tbody tr:hover td { background: color-mix(in srgb, var(--session-accent) 3%, transparent); }

    /* step indicators */
    .step-dot {
      display: inline-block; width: 8px; height: 8px; border-radius: 50%;
      margin-right: 4px; vertical-align: middle; flex-shrink: 0;
    }
    .dot-yes  { background: #4ade80; }
    .dot-part { background: #fb923c; }
    .dot-no   { background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); }

    .tic {
      display: inline-flex; align-items: center; gap: 4px;
      font-family: var(--ff-mono); font-size: .62rem; letter-spacing: .04em;
      padding: .15rem .45rem; border-radius: 3px; white-space: nowrap;
    }
    .tic-y { color: #4ade80; background: rgba(74,222,128,.1); }
    .tic-p { color: #fb923c; background: rgba(251,146,60,.1); }
    .tic-n { color: rgba(255,255,255,.3); background: rgba(255,255,255,.04); }

    [data-theme="light"] .tic-n { color: var(--muted); background: rgba(0,0,0,.04); }
    [data-theme="light"] .dot-no { background: rgba(0,0,0,0.1); border-color: rgba(0,0,0,0.15); }

    .prop-badge {
      display: inline-block; font-family: var(--ff-mono); font-size: .5rem;
      letter-spacing: .1em; text-transform: uppercase;
      padding: .12rem .42rem; border-radius: 2px; white-space: nowrap;
    }
    .prop-free { color: #4ade80; border: 1px solid rgba(74,222,128,.3); }
    .prop-freemium { color: #fb923c; border: 1px solid rgba(251,146,60,.3); }
    .prop-paid { color: #f87171; border: 1px solid rgba(248,113,113,.3); }

    /* ── TWO-BY-TWO MATRIX ── */
    .matrix-wrap { margin: 2rem 0; }
    .matrix-label-row { display: grid; grid-template-columns: 80px 1fr 1fr; gap: 1px; margin-bottom: 1px; }
    .matrix-col-label { font-family: var(--ff-sans); font-size: .58rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; color: var(--session-accent); text-align: center; padding: .5rem; }
    .matrix-grid { display: grid; grid-template-columns: 80px 1fr 1fr; grid-template-rows: auto auto; gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
    .matrix-row-label { background: var(--glass); display: flex; align-items: center; justify-content: center; font-family: var(--ff-sans); font-size: .55rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--session-accent); writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg); padding: 1rem .5rem; text-align: center; }
    .matrix-cell { background: var(--glass); padding: 1.1rem 1.2rem; display: flex; flex-direction: column; gap: .4rem; }
    .matrix-cell.highlight { background: color-mix(in srgb, var(--session-accent) 7%, var(--glass)); }
    .cell-label { font-family: var(--ff-sans); font-size: .6rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--session-accent); margin-bottom: .2rem; }
    .cell-tools { font-family: var(--ff-sans); font-size: .78rem; font-weight: 500; color: var(--text); line-height: 1.5; }
    .cell-note { font-family: var(--ff-sans); font-size: .7rem; font-weight: 300; color: var(--muted); line-height: 1.5; }

    /* ── TOOL DEPTH CARDS ── */
    .tool-depth-card {
      background: var(--card); border: 1px solid var(--border);
      border-left: 3px solid var(--session-accent);
      border-radius: 6px; padding: 1.1rem 1.3rem;
      cursor: pointer; transition: all 0.2s; margin-bottom: 8px;
    }
    .tool-depth-card:hover { border-color: color-mix(in srgb, var(--session-accent) 44%, transparent); }
    .tool-depth-card.open { border-color: color-mix(in srgb, var(--session-accent) 44%, transparent); }
    .tdc-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
    .tdc-name { font-family: var(--ff-display); font-size: 1.15rem; color: var(--text); }
    .tdc-tag { font-family: var(--ff-mono); font-size: .52rem; letter-spacing: .18em; color: var(--session-accent); border: 1px solid color-mix(in srgb,var(--session-accent) 55%,transparent); padding: .15rem .45rem; border-radius: 2px; }
    .tdc-arm { font-family: var(--ff-mono); font-size: .58rem; letter-spacing: .1em; color: var(--muted); margin-top: .3rem; }
    .tdc-chevron { color: var(--muted); font-size: .75rem; transition: transform 0.2s; flex-shrink: 0; }
    .tdc-chevron.open { transform: rotate(45deg); }
    .tdc-body { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border); display: none; }
    .tdc-body.visible { display: block; }
    .tdc-row { margin-bottom: .8rem; }
    .tdc-label { font-family: var(--ff-mono); font-size: .58rem; color: var(--session-accent); letter-spacing: .14em; margin-bottom: 4px; }
    .tdc-content { font-family: var(--ff-sans); font-size: .82rem; color: var(--muted); line-height: 1.6; }
    .tdc-warning { color: rgba(248,113,113,0.75); }
    .tdc-verdict { background: color-mix(in srgb,var(--session-accent) 0d,transparent); border: 1px solid color-mix(in srgb,var(--session-accent) 22%,transparent); border-radius: 4px; padding: .6rem .9rem; font-family: var(--ff-sans); font-size: .83rem; color: var(--session-accent); line-height: 1.5; margin-bottom: .8rem; }
    .tdc-open-link { font-family: var(--ff-mono); font-size: .6rem; letter-spacing: .12em; color: var(--session-accent); text-decoration: none; border-bottom: 1px solid color-mix(in srgb,var(--session-accent) 55%,transparent); padding-bottom: 1px; }

    /* ── BLIND SPOTS ── */
    .blindspot-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin: 1.75rem 0; }
    .bs-card { background: var(--glass); padding: 1.2rem 1.4rem; display: flex; flex-direction: column; gap: .45rem; }
    .bs-icon { font-size: 1.1rem; margin-bottom: .1rem; }
    .bs-title { font-family: var(--ff-display); font-size: 1rem; font-weight: 600; color: var(--text); line-height: 1.2; }
    .bs-desc { font-family: var(--ff-sans); font-size: .73rem; font-weight: 300; line-height: 1.55; color: var(--muted); }
    .bs-fix { font-family: var(--ff-sans); font-size: .68rem; font-weight: 500; color: var(--session-accent); margin-top: .3rem; }

    /* ── SCENARIO CHOOSER ── */
    .exercise-box { background: color-mix(in srgb, var(--session-accent) 6%, var(--glass)); border: 1px dashed color-mix(in srgb, var(--session-accent) 50%, transparent); padding: 2rem 2rem 1.75rem; border-radius: 14px; margin: 2.5rem 0; }
    .exercise-box h3 { margin-top: 0; }
    .scenario-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); gap: .6rem; margin: 1rem 0 1.25rem; }
    .scenario-btn { font-family: var(--ff-sans); font-size: .72rem; font-weight: 400; line-height: 1.45; padding: .8rem 1rem; border-radius: 8px; border: 1px solid var(--border); background: var(--glass); color: var(--muted); cursor: pointer; text-align: left; transition: all .15s; }
    .scenario-btn:hover, .scenario-btn.active { border-color: var(--session-accent); color: var(--text); background: color-mix(in srgb, var(--session-accent) 8%, transparent); }
    .scenario-result { padding: 1.1rem 1.4rem; border-radius: 10px; background: var(--glass); border: 1px solid var(--border); font-size: .88rem; line-height: 1.7; color: var(--muted); display: none; }
    .scenario-result.visible { display: block; }
    .rec-label { font-family: var(--ff-sans); font-size: .55rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: var(--session-accent); display: block; margin-bottom: .6rem; }

    /* ── TAKEAWAY ── */
    .takeaway { margin-top: 3rem; padding: 1.5rem 2rem; border-radius: 12px; border: 1px solid color-mix(in srgb, var(--session-accent) 30%, transparent); background: color-mix(in srgb, var(--session-accent) 5%, transparent); }
    .takeaway h3 { font-family: var(--ff-sans); font-size: .65rem; letter-spacing: .3em; text-transform: uppercase; color: var(--session-accent); margin: 0 0 .75rem; font-weight: 700; }
    .takeaway p { margin-bottom: 0; font-size: .95rem; }

    /* ── NAV ── */
    .s-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border); gap: 1rem; }
    .s-nav-btn { font-family: var(--ff-sans); font-size: .7rem; letter-spacing: .1em; font-weight: 500; padding: .6rem 1.4rem; border-radius: 8px; border: 1px solid var(--border); background: var(--glass); color: var(--muted); text-decoration: none; transition: all .2s; cursor: pointer; }
    .s-nav-btn:hover { border-color: var(--session-accent); color: var(--session-accent); }
    .s-nav-next { margin-left: auto; }

    /* legend strip */
    .legend-strip { display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0 1.5rem; padding: .75rem 1rem; background: var(--glass); border: 1px solid var(--border); border-radius: 6px; }
    .leg-item { display: flex; align-items: center; gap: .45rem; font-family: var(--ff-mono); font-size: .55rem; letter-spacing: .07em; color: var(--muted); }
    .leg-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

    @keyframes shk { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
    @media (max-width: 600px) { .s-page { padding-left: 1.25rem; padding-right: 1.25rem; } }
  </style>
</head>
<body>
<div class="spine" id="spine"></div>

<!-- MINIMAL HEADER -->
<header class="ukb-header">
  <a href="../../" class="ukb-header-left">
    <img src="https://abikesa.github.io/logos/assets/ukubona-dark.png" alt="Ukubona" class="ukb-logo" id="logo-img">
    <span class="ukb-wordmark">Ukubona × WHO India</span>
  </a>
  <div class="ukb-header-right">
    <button class="ukb-theme-btn" id="theme-toggle" title="Toggle theme">☀</button>
  </div>
</header>

<div class="s-page">
  <div class="s-crumb">
    <a href="../../" style="color:inherit;text-decoration:none;">Home</a> · Level 1 · <span>Session 2</span>
  </div>

  <div class="s-hero">
    <div class="s-badge">🔬 Level 1 of 5 · Session 2 of 5</div>
    <p class="s-label">Level 1 · Foundations</p>
    <h1 class="s-title">The Tools Available</h1>
    <p class="s-subtitle">What AI Can and Cannot See</p>
    <p class="s-oneliner">The landscape lists 20 tools. This session maps all of them across the research pipeline steps that matter — database search, screening, extraction — and tells you which ones to reach for on a health financing brief.</p>
  </div>

  <div class="session-content">

    <h2>The right question is not "which tool?" but "which job?"</h2>
    <p>The 20 tools in the catalogue are not interchangeable. They differ on two dimensions that matter most for health economics and financing work: what corpus they search, and what they do with what they find. Choosing the wrong tool for a job does not just slow you down — it silently shapes what evidence you see and what you miss.</p>
    <p>Think of the tools in two categories: <strong>retrievers</strong> find and surface papers; <strong>synthesisers</strong> read and summarise them. Some tools do both. Most do one well. The distinction matters because your bottleneck — as you identified in Session 1 — determines which category you need first.</p>

    <!-- ══ COLLAPSIBLE 20-TOOL COMPARISON TABLE ══ -->
    <div class="collapsible-wrap" id="compare-wrap">
      <div class="collapsible-header" id="compare-toggle" onclick="toggleCollapsible('compare')">
        <div>
          <div class="collapsible-title">20-Tool Comparison Matrix</div>
          <div class="collapsible-meta">Database Search · Title/Abstract Screening · Data Extraction · Pros &amp; Cons · Geographic Reach · Proprietary Status</div>
        </div>
        <span class="collapsible-chevron" id="compare-chevron">▼</span>
      </div>
      <div class="collapsible-body" id="compare-body">
        <div class="collapsible-inner">

          <div class="legend-strip">
            <div class="leg-item"><span class="leg-dot" style="background:#4ade80"></span> Strong / Yes</div>
            <div class="leg-item"><span class="leg-dot" style="background:#fb923c"></span> Partial / Limited</div>
            <div class="leg-item"><span class="leg-dot" style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.2)"></span> Not available</div>
            <div class="leg-item" style="margin-left:auto">
              <span class="prop-badge prop-free" style="margin-right:6px">Free</span>
              <span class="prop-badge prop-freemium" style="margin-right:6px">Freemium</span>
              <span class="prop-badge prop-paid">Paid/Proprietary</span>
            </div>
          </div>

          <div class="cmp-table-wrap">
            <table class="cmp-table" id="cmp-table">
              <thead>
                <tr>
                  <th style="min-width:130px">AI Tool</th>
                  <th>Database Search</th>
                  <th>Title / Abstract Screening</th>
                  <th>Data Extraction</th>
                  <th style="min-width:220px">Pros &amp; Cons</th>
                  <th>Geographic Reach<br><small style="opacity:.7;font-size:.45rem">LMIC coverage</small></th>
                  <th>Proprietary Status</th>
                </tr>
              </thead>
              <tbody id="cmp-tbody">
                <!-- rows injected by JS -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <h2>A map of the tool landscape</h2>
    <p>For health economics and financing work, the most useful way to organise the tools is by two questions: does it search grey literature, and does it handle dense PDFs (government reports, HTA assessments, budget documents) rather than just journal abstracts?</p>

    <div class="matrix-wrap">
      <div class="matrix-label-row">
        <div></div>
        <div class="matrix-col-label">Journal-indexed only</div>
        <div class="matrix-col-label">Handles grey literature / PDFs</div>
      </div>
      <div class="matrix-grid">
        <div class="matrix-row-label">Retriever</div>
        <div class="matrix-cell">
          <div class="cell-label">Wide but shallow</div>
          <div class="cell-tools">Semantic Scholar · Dimensions.ai · Connected Papers · Litmaps</div>
          <div class="cell-note">Good for mapping a field or finding seminal papers. Miss NSSO reports, HTAIn briefs, state NHA accounts, MoHFW working papers entirely.</div>
        </div>
        <div class="matrix-cell highlight">
          <div class="cell-label">Best for WHO India work</div>
          <div class="cell-tools">Elicit · Research Rabbit + manual grey search · Claude / GPT with uploaded PDFs</div>
          <div class="cell-note">Elicit excels at structured data extraction from papers. For grey literature, there is no substitute for targeted manual search — but Claude or GPT can then process what you retrieve.</div>
        </div>
        <div class="matrix-row-label">Synthesiser</div>
        <div class="matrix-cell">
          <div class="cell-label">Fast summaries, limited scope</div>
          <div class="cell-tools">Consensus · Paper Digest · SciSpace</div>
          <div class="cell-note">Useful for quick orientation in a new topic. Will confidently summarise the published literature while being unaware that the most relevant evidence is in a 2023 HTAIn report sitting outside their index.</div>
        </div>
        <div class="matrix-cell highlight">
          <div class="cell-label">Workhorse for long documents</div>
          <div class="cell-tools">Humata · Claude (with PDF upload) · NotebookLM</div>
          <div class="cell-note">Upload a 200-page NSSO survey, a PM-JAY evaluation, or a stack of state health accounts and interrogate them directly. This is where the grey literature gap from Session 1 gets closed.</div>
        </div>
      </div>
    </div>

    <h2>The five tools worth knowing in depth</h2>
    <p>For a WHO India health financing context, five tools do most of the work. Click each card for an honest assessment — including what it cannot do.</p>

    <div id="depth-cards"></div>

    <h2>What every AI tool in this space cannot see</h2>
    <p>There are four blind spots shared by virtually all AI literature tools. Knowing them is not pessimism — it is workflow design. Each has a practical workaround.</p>

    <div class="blindspot-grid">
      <div class="bs-card">
        <div class="bs-icon">🗂️</div>
        <div class="bs-title">Grey literature and government data</div>
        <div class="bs-desc">NSSO surveys, HTAIn assessments, MoHFW circulars, state health accounts, NHA reports, district-level HMIS data. None of it is in any tool's default index.</div>
        <div class="bs-fix">→ Manual targeted search + upload to Claude/Humata for interrogation</div>
      </div>
      <div class="bs-card">
        <div class="bs-icon">🌍</div>
        <div class="bs-title">LMIC-specific financing evidence</div>
        <div class="bs-desc">Indexed literature skews toward high-income country health systems. A search for "community health insurance equity" surfaces the Netherlands before Kerala.</div>
        <div class="bs-fix">→ Explicit geographic filters in every search; use Dimensions.ai for LMIC filtering</div>
      </div>
      <div class="bs-card">
        <div class="bs-icon">📅</div>
        <div class="bs-title">Very recent publications</div>
        <div class="bs-desc">AI tools have indexing lags of weeks to months. A PM-JAY evaluation published last month may not yet be retrievable via Elicit or Consensus.</div>
        <div class="bs-fix">→ PubMed direct search and Google Scholar for anything from the last 6 months</div>
      </div>
      <div class="bs-card">
        <div class="bs-icon">⚖️</div>
        <div class="bs-title">Equity and distributional outcomes</div>
        <div class="bs-desc">Most tools are optimised to return aggregate findings. Disaggregated data on who benefits by income quintile, gender, caste, or geography is rarely surfaced automatically.</div>
        <div class="bs-fix">→ Explicit equity terms in every prompt; Session 3 builds this into the PECO-F F dimension</div>
      </div>
    </div>

    <h2>Choose your tool for the task</h2>

    <div class="exercise-box">
      <h3 style="font-family:var(--ff-sans);font-size:.65rem;letter-spacing:.3em;text-transform:uppercase;color:var(--session-accent);font-weight:700;">🧪 Scenario matching — pick your situation</h3>
      <p style="font-size:.85rem;margin-bottom:1rem;">Select the scenario that most closely matches your current task. You will get a specific tool recommendation and a one-line rationale.</p>
      <div class="scenario-grid">
        <button class="scenario-btn" data-scenario="0">I need to quickly map what's been published on health insurance and catastrophic expenditure in South Asia</button>
        <button class="scenario-btn" data-scenario="1">I have a 180-page HTAIn assessment I need to extract specific cost-effectiveness findings from</button>
        <button class="scenario-btn" data-scenario="2">I need to find the 5–8 most influential papers in health financing equity for a senior official briefing</button>
        <button class="scenario-btn" data-scenario="3">I need to compare three state-level PM-JAY evaluation reports side by side</button>
        <button class="scenario-btn" data-scenario="4">I need to know if there's any recent evidence that a specific intervention works in an LMIC context</button>
        <button class="scenario-btn" data-scenario="5">I need to build a structured extraction table of cost-per-DALY across 20+ papers</button>
      </div>
      <div class="scenario-result" id="scenario-result">
        <span class="rec-label">Recommended approach</span>
        <span id="scenario-text"></span>
      </div>
    </div>

    <div class="takeaway">
      <h3>🎯 Key takeaway</h3>
      <p>No single AI tool covers the full pipeline for health economics and financing work. The practical stack for WHO India is: <strong>Elicit</strong> for structured extraction from indexed literature, <strong>Claude or Humata</strong> for interrogating uploaded grey literature and government reports, <strong>Dimensions.ai</strong> for LMIC-filtered discovery, and <strong>manual targeted search</strong> for anything recent or government-issued. Session 3 shows you how to frame the question that makes all of these more precise.</p>
    </div>

  </div><!-- /session-content -->

  <nav class="s-nav">
    <a class="s-nav-btn" href="session1.html">← Previous</a>
    <a class="s-nav-btn s-nav-next" href="session3.html">Next →</a>
  </nav>
</div>

<script>
/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */
const TOOLS_20 = [
  {
    name: "Elicit",
    url: "https://elicit.org",
    tag: "Ought · Freemium",
    prop: "freemium",
    dbSearch: "y",
    screening: "y",
    extraction: "y",
    geoLMIC: "p",
    pros: "Purpose-built PICO extraction; structured tables across multiple papers; strong on RCTs and systematic reviews",
    cons: "Only searches Semantic Scholar corpus; misses grey literature entirely; free tier limited to ~12 papers/query",
    arm: "Discovery · Extraction"
  },
  {
    name: "Consensus",
    url: "https://consensus.app",
    tag: "Consensus · Freemium",
    prop: "freemium",
    dbSearch: "y",
    screening: "p",
    extraction: "n",
    geoLMIC: "p",
    pros: "Fast yes/no synthesis with citations; useful for policy briefs; auto-clusters by finding type",
    cons: "Optimised for biomedical questions; health financing queries return mixed results; no data extraction",
    arm: "Discovery · Synthesis"
  },
  {
    name: "Scite",
    url: "https://scite.ai",
    tag: "Scite · Freemium",
    prop: "freemium",
    dbSearch: "y",
    screening: "p",
    extraction: "p",
    geoLMIC: "p",
    pros: "Shows whether papers are supported, contradicted or merely mentioned; strong citation context; useful for quality appraisal",
    cons: "Primarily citation analysis, not discovery; limited free tier; does not extract data fields",
    arm: "Citation · Quality appraisal"
  },
  {
    name: "Research Rabbit",
    url: "https://researchrabbit.ai",
    tag: "Free",
    prop: "free",
    dbSearch: "y",
    screening: "p",
    extraction: "n",
    geoLMIC: "p",
    pros: "Visual citation network mapping; evolving recommendations; very good for serendipitous discovery",
    cons: "No data extraction; journal-indexed only; search string less precise than PubMed",
    arm: "Discovery · Mapping"
  },
  {
    name: "Connected Papers",
    url: "https://connectedpapers.com",
    tag: "Freemium",
    prop: "freemium",
    dbSearch: "p",
    screening: "p",
    extraction: "n",
    geoLMIC: "p",
    pros: "Visually identifies clusters and seminal works; good entry point for new topics",
    cons: "Requires a seed paper; limited to one graph at a time on free tier; no extraction capability",
    arm: "Discovery · Mapping"
  },
  {
    name: "Iris.ai",
    url: "https://iris.ai",
    tag: "Paid",
    prop: "paid",
    dbSearch: "y",
    screening: "y",
    extraction: "p",
    geoLMIC: "p",
    pros: "AI concept extraction and knowledge graphs; strong for STEM research landscape mapping",
    cons: "Primarily paid; LMIC health financing coverage thin; steep learning curve",
    arm: "Discovery · STEM focus"
  },
  {
    name: "Litmaps",
    url: "https://litmaps.com",
    tag: "Freemium",
    prop: "freemium",
    dbSearch: "y",
    screening: "p",
    extraction: "n",
    geoLMIC: "p",
    pros: "Timeline-based literature maps; tracks new publications automatically; good for ongoing reviews",
    cons: "No data extraction; limited LMIC-specific filtering; free tier restricts map size",
    arm: "Discovery · Mapping"
  },
  {
    name: "Scholarcy",
    url: "https://scholarcy.com",
    tag: "Freemium",
    prop: "freemium",
    dbSearch: "n",
    screening: "y",
    extraction: "y",
    geoLMIC: "y",
    pros: "Rapid article summarisation and flashcards; extracts key claims and figures; processes any PDF you upload",
    cons: "Does not search databases; depends entirely on documents you supply; occasional hallucination on dense tables",
    arm: "Screening · Extraction"
  },
  {
    name: "SciSpace",
    url: "https://scispace.com",
    tag: "Freemium",
    prop: "freemium",
    dbSearch: "y",
    screening: "y",
    extraction: "p",
    geoLMIC: "p",
    pros: "Plain-language explanations of complex papers; AI copilot for reading and writing; broad index",
    cons: "Health economics depth limited; extraction less structured than Elicit; LMIC evidence sparse",
    arm: "Screening · Synthesis"
  },
  {
    name: "Paper Digest",
    url: "https://paperdigest.org",
    tag: "Free",
    prop: "free",
    dbSearch: "y",
    screening: "y",
    extraction: "n",
    geoLMIC: "p",
    pros: "Free; concise structured summaries; daily digest feature for field monitoring",
    cons: "No data extraction; limited customisation; not optimised for health economics queries",
    arm: "Screening · Monitoring"
  },
  {
    name: "Rayyan",
    url: "https://rayyan.ai",
    tag: "Freemium",
    prop: "freemium",
    dbSearch: "n",
    screening: "y",
    extraction: "p",
    geoLMIC: "y",
    pros: "Purpose-built for systematic review screening; strong collaboration features; used in Cochrane reviews; health sciences focus",
    cons: "Does not search databases — you import results; extraction template limited; best for clinical rather than economic outcomes",
    arm: "Screening · Systematic review"
  },
  {
    name: "Humata",
    url: "https://humata.ai",
    tag: "Freemium",
    prop: "freemium",
    dbSearch: "n",
    screening: "y",
    extraction: "y",
    geoLMIC: "y",
    pros: "Excellent for interrogating a single large PDF (government reports, HTAIn assessments); targeted Q&A with page citations",
    cons: "One document at a time on free tier; cannot cross-reference multiple uploads; does not search",
    arm: "Extraction · Grey literature"
  },
  {
    name: "Semantic Scholar",
    url: "https://semanticscholar.org",
    tag: "Free",
    prop: "free",
    dbSearch: "y",
    screening: "y",
    extraction: "n",
    geoLMIC: "p",
    pros: "Free; TL;DR summaries; citation graphs; broad index (200M+ papers); open API",
    cons: "LMIC health financing under-represented; no extraction; grey literature absent",
    arm: "Discovery · Screening"
  },
  {
    name: "Dimensions.ai",
    url: "https://app.dimensions.ai",
    tag: "Free (research)",
    prop: "freemium",
    dbSearch: "y",
    screening: "y",
    extraction: "p",
    geoLMIC: "y",
    pros: "Best LMIC filtering of any tool; includes grants, datasets and grey literature; country-level filtering; CSV export",
    cons: "Interface less intuitive than PubMed; extraction requires export to CSV then manual work; learning curve",
    arm: "Discovery · LMIC focus"
  },
  {
    name: "Inciteful",
    url: "https://inciteful.xyz",
    tag: "Free",
    prop: "free",
    dbSearch: "y",
    screening: "p",
    extraction: "n",
    geoLMIC: "p",
    pros: "Rapid citation network analysis; identifies most-connected papers; free; good for finding seminal work quickly",
    cons: "No data extraction; primarily bibliometric; not suited for systematic search strings",
    arm: "Citation · Discovery"
  },
  {
    name: "OpenEvidence",
    url: "https://openevidence.com",
    tag: "Free (beta)",
    prop: "free",
    dbSearch: "y",
    screening: "y",
    extraction: "n",
    geoLMIC: "p",
    pros: "AI answers with clinical literature citations; fast; increasingly covers health economics literature",
    cons: "Primarily clinical focus; health financing queries return mixed results; no extraction",
    arm: "Discovery · Medical"
  },
  {
    name: "Evidence Hunt",
    url: "https://evidencehunt.ai",
    tag: "Free",
    prop: "free",
    dbSearch: "y",
    screening: "y",
    extraction: "n",
    geoLMIC: "p",
    pros: "Rapid synthesis from clinical guidelines and primary studies; clean interface; good for clinical questions embedded in HTA",
    cons: "Narrow scope — clinical guidelines only; minimal LMIC health financing coverage; no extraction",
    arm: "Discovery · Clinical"
  },
  {
    name: "Nested Knowledge",
    url: "https://nested-knowledge.com",
    tag: "Paid",
    prop: "paid",
    dbSearch: "y",
    screening: "y",
    extraction: "y",
    geoLMIC: "p",
    pros: "Purpose-built for systematic reviews and meta-analyses; strong extraction templates; collaborative; life sciences strength",
    cons: "Paid; primarily life sciences / pharma use case; LMIC health economics coverage limited",
    arm: "Systematic review · Extraction"
  },
  {
    name: "DistillerSR",
    url: "https://distillersr.com",
    tag: "Paid",
    prop: "paid",
    dbSearch: "n",
    screening: "y",
    extraction: "y",
    geoLMIC: "y",
    pros: "Enterprise systematic review software; widely used in HTA and regulatory contexts; audit trail; team features",
    cons: "Expensive; does not search databases — you import results; overkill for rapid reviews",
    arm: "Systematic review · Enterprise"
  },
  {
    name: "Bohrium",
    url: "https://bohrium.com",
    tag: "Paid",
    prop: "paid",
    dbSearch: "y",
    screening: "p",
    extraction: "p",
    geoLMIC: "n",
    pros: "AI-driven scientific discovery; hypothesis generation; strong in materials science and chemistry",
    cons: "Not suited for health financing or epidemiology; primarily STEM research; minimal LMIC coverage",
    arm: "Discovery · STEM"
  }
]

const DEPTH_TOOLS = [
  {
    name: "Elicit", tag: "OUGHT · FREEMIUM", url: "https://elicit.org",
    best: "Structured extraction across many papers — pulling cost-effectiveness ratios, sample sizes, outcome measures into a table",
    howto: "Type your research question in plain English. Click 'Add columns' to specify what to extract: population, intervention, outcome, ICER, sample size. Elicit reads across 100+ papers and returns a structured table. Export to CSV for further analysis.",
    warning: "Only searches Semantic Scholar corpus. Misses grey literature and most government reports. Strongest for CEA and systematic review identification. Free tier: ~12 papers per query.",
    verdict: "Start here for any structured extraction task. It does in minutes what takes researchers days.",
    arm: "Database Search · Screening · Extraction"
  },
  {
    name: "Dimensions.ai", tag: "DIGITAL SCIENCE · FREE (RESEARCH)", url: "https://app.dimensions.ai",
    best: "LMIC-filtered search including grey literature — the best tool for finding India-specific evidence",
    howto: "Search: 'tuberculosis screening India cost-effectiveness'. Filter: Field of Research → Health Economics; Country → India; Publication Year → 2015–2026. Export results to CSV. This surfaces papers PubMed misses, including policy reports and working papers.",
    warning: "Interface takes 10 minutes to learn. Worth every minute for the LMIC coverage alone.",
    verdict: "Non-negotiable for WHO India work. Surfaces LMIC evidence that indexed search misses.",
    arm: "Database Search · Discovery · LMIC"
  },
  {
    name: "Humata", tag: "HUMATA · FREEMIUM", url: "https://humata.ai",
    best: "Interrogating a specific large document — an HTAIn assessment, NSSO survey, state PFM report",
    howto: "Upload your PDF (up to 60 pages free, 1000+ on paid). Ask targeted questions: 'What cost-effectiveness ratios are reported for inpatient versus outpatient coverage?' or 'Which population subgroups show the lowest financial risk protection scores?'",
    warning: "One document at a time on the free tier. Cannot synthesise across multiple uploaded files. Does not search — you must supply the document.",
    verdict: "Best for closing the grey literature gap. What Claude does with PDF uploads, Humata does as a dedicated interface.",
    arm: "Extraction · Grey Literature"
  },
  {
    name: "Semantic Scholar", tag: "ALLEN INSTITUTE · FREE", url: "https://semanticscholar.org",
    best: "Mapping a field quickly, finding citation networks, identifying the most influential papers",
    howto: "Search for your topic. Use the 'Fields of Study' filter to narrow to Health Policy or Economics. Open 'Paper Detail' view for AI-generated TL;DR summaries and citation counts. Use the 'Citations' and 'References' tabs to build your reading list.",
    warning: "LMIC health financing literature is under-represented. Strong on volume; weak on the specific literature most relevant to India UHC work.",
    verdict: "Good entry point for an unfamiliar sub-topic. Switch to Dimensions.ai once you need LMIC evidence.",
    arm: "Discovery · Screening"
  },
  {
    name: "Claude / GPT (PDF upload)", tag: "ANTHROPIC / OPENAI · FREEMIUM", url: "https://claude.ai",
    best: "Processing any document you supply — summarising, extracting, comparing, drafting assumption statements",
    howto: "Upload PDFs directly. Ask structured questions: 'Extract utility weights by TB disease stage from this paper. Flag any transferability concerns for a rural Indian PHC population.' Then: 'Synthesise the findings across all three papers I have uploaded and draft a methods assumption with a sensitivity range.'",
    warning: "Does not retrieve documents independently. Cannot search databases. Everything depends on what you upload or paste. Hallucination risk for specific citations — always verify numbers against the source.",
    verdict: "The most versatile tool in the stack. Use it to process what you find everywhere else.",
    arm: "Extraction · Synthesis · Drafting"
  }
]

/* ══════════════════════════════════════════════════════
   COLLAPSIBLE
══════════════════════════════════════════════════════ */
function toggleCollapsible(id) {
  const body = document.getElementById(id + '-body')
  const chevron = document.getElementById(id + '-chevron')
  const header = document.getElementById(id + '-toggle')
  const isOpen = body.classList.contains('open')
  body.classList.toggle('open', !isOpen)
  chevron.classList.toggle('open', !isOpen)
  header.classList.toggle('open', !isOpen)
}

/* ══════════════════════════════════════════════════════
   RENDER 20-TOOL TABLE
══════════════════════════════════════════════════════ */
function tic(val) {
  if (val === 'y') return '<span class="tic tic-y"><span class="step-dot dot-yes"></span> Strong</span>'
  if (val === 'p') return '<span class="tic tic-p"><span class="step-dot dot-part"></span> Partial</span>'
  return '<span class="tic tic-n"><span class="step-dot dot-no"></span> No</span>'
}

function propBadge(p) {
  if (p === 'free') return '<span class="prop-badge prop-free">Free</span>'
  if (p === 'freemium') return '<span class="prop-badge prop-freemium">Freemium</span>'
  return '<span class="prop-badge prop-paid">Paid</span>'
}

function renderTable() {
  const tbody = document.getElementById('cmp-tbody')
  tbody.innerHTML = TOOLS_20.map(t => `
    <tr>
      <td><a href="${t.url}" target="_blank" rel="noopener" style="color:var(--session-accent);text-decoration:none;font-weight:500;">${t.name}</a><br><small style="font-family:var(--ff-mono);font-size:.5rem;color:var(--muted);letter-spacing:.07em;opacity:.7">${t.arm}</small></td>
      <td>${tic(t.dbSearch)}</td>
      <td>${tic(t.screening)}</td>
      <td>${tic(t.extraction)}</td>
      <td>
        <div style="margin-bottom:.4rem;font-size:.75rem;color:var(--text)">✚ ${t.pros}</div>
        <div style="font-size:.73rem;color:rgba(248,113,113,.8)">✗ ${t.cons}</div>
      </td>
      <td>${tic(t.geoLMIC)}</td>
      <td>${propBadge(t.prop)}</td>
    </tr>
  `).join('')
}

/* ══════════════════════════════════════════════════════
   RENDER DEPTH CARDS
══════════════════════════════════════════════════════ */
function renderDepthCards() {
  const wrap = document.getElementById('depth-cards')
  wrap.innerHTML = DEPTH_TOOLS.map((tool, i) => `
    <div class="tool-depth-card" id="tdc-${i}" onclick="toggleTDC(${i})">
      <div class="tdc-header">
        <div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
            <span class="tdc-name">${tool.name}</span>
            <span class="tdc-tag">${tool.tag}</span>
          </div>
          <div class="tdc-arm">${tool.arm}</div>
        </div>
        <span class="tdc-chevron" id="tdc-chev-${i}">+</span>
      </div>
      <div class="tdc-body" id="tdc-body-${i}">
        <div class="tdc-row">
          <div class="tdc-label">BEST FOR</div>
          <div class="tdc-content">${tool.best}</div>
        </div>
        <div class="tdc-row">
          <div class="tdc-label">HOW TO USE IT</div>
          <div class="tdc-content">${tool.howto}</div>
        </div>
        <div class="tdc-row">
          <div class="tdc-label" style="color:#f87171">⚠ LIMITATION</div>
          <div class="tdc-content tdc-warning">${tool.warning}</div>
        </div>
        <div class="tdc-verdict">${tool.verdict}</div>
        <a href="${tool.url}" target="_blank" rel="noopener" class="tdc-open-link" onclick="event.stopPropagation()">OPEN TOOL ↗</a>
      </div>
    </div>
  `).join('')
}

function toggleTDC(i) {
  const body = document.getElementById('tdc-body-' + i)
  const chev = document.getElementById('tdc-chev-' + i)
  const card = document.getElementById('tdc-' + i)
  const isOpen = body.classList.contains('visible')
  body.classList.toggle('visible', !isOpen)
  chev.classList.toggle('open', !isOpen)
  card.classList.toggle('open', !isOpen)
}

/* ══════════════════════════════════════════════════════
   SCENARIO CHOOSER
══════════════════════════════════════════════════════ */
const SCENARIOS = [
  { text: `<strong>Start with Semantic Scholar or Dimensions.ai</strong> for a citation-network map, then run the same query through <strong>Elicit</strong> to get structured paper summaries. Set geographic filters to South Asia / LMIC explicitly — neither tool does this by default. Supplement with a manual Google Scholar search filtered to India, Bangladesh, Sri Lanka to catch recent grey literature.` },
  { text: `<strong>Upload directly to Claude or Humata.</strong> Paste the PDF and ask targeted questions: "What cost-effectiveness ratios are reported for inpatient versus outpatient coverage?" This is faster and more accurate than reading linearly, and you stay in control of which questions get asked.` },
  { text: `<strong>Semantic Scholar's citation count + Scite</strong> is the right combination. Use Semantic Scholar to find highly-cited papers in the sub-topic, then run the top 10 through Scite to see which are being challenged, supported, or extended. That gives you a defensible "most influential" shortlist.` },
  { text: `<strong>Claude (with all three PDFs uploaded)</strong> is the only tool that can do this directly. Upload each report and ask it to extract comparable variables: coverage rates, utilisation by income quintile, claims settlement ratios. Then ask it to produce a comparison table. Humata handles one document at a time; Claude handles multiple in the same session.` },
  { text: `<strong>Consensus</strong> for a fast yes/no orientation, then <strong>Elicit</strong> if you need the underlying papers. For anything published in the last six months, add a direct PubMed search. If the LMIC signal is weak, try <strong>Dimensions.ai</strong> with an explicit filter for low- and middle-income countries before concluding the evidence is thin.` },
  { text: `<strong>Elicit</strong> is the purpose-built tool for this. Set up a structured extraction with your specific columns — intervention, population, comparator, cost per DALY, equity adjustment — and run your paper set through it. For papers not in Elicit's index, upload PDFs to Claude and ask for extraction in the same column format, then merge the tables manually.` }
]

document.querySelectorAll('.scenario-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    const idx = parseInt(btn.dataset.scenario)
    document.getElementById('scenario-text').innerHTML = SCENARIOS[idx].text
    const r = document.getElementById('scenario-result')
    r.classList.add('visible')
    r.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  })
})

/* ══════════════════════════════════════════════════════
   SCROLL SPINE
══════════════════════════════════════════════════════ */
const spine = document.getElementById('spine')
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100
  spine.style.height = Math.min(pct, 100) + '%'
}, { passive: true })

/* ══════════════════════════════════════════════════════
   THEME TOGGLE
══════════════════════════════════════════════════════ */
const themeBtn = document.getElementById('theme-toggle')
const logoImg = document.getElementById('logo-img')
let currentTheme = 'dark'
themeBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', currentTheme)
  themeBtn.textContent = currentTheme === 'dark' ? '☀' : '◑'
  logoImg.src = currentTheme === 'dark'
    ? 'https://abikesa.github.io/logos/assets/ukubona-dark.png'
    : 'https://abikesa.github.io/logos/assets/ukubona-light.png'
})

/* ══════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════ */
renderTable()
renderDepthCards()
</script>
</body>
</html>
```
#### V
- Ok, thanks Claude for the precise Session 2 update
- Anything worth updating in Session 1 or 3?
- What about in App.jsx? 
- No opportunity for more coherence?

---

Great question. Let me think across all three surfaces systematically.

## Session 1 — worth updating?

Yes, one meaningful addition. Grace's feedback explicitly named **the five research pipeline steps** as her mental model: policy question → database search → title/abstract screening → data extraction → synthesis. Session 1's pipeline diagram already shows these, but it doesn't label them with the exact language she used in her hand-drawn table. The column headers she chose — *Database Search, Title/Abstract Screening, Extraction of Data* — are precisely the pipeline stages from Session 1. So there's an opportunity to make that connection explicit:

- In the pipeline diagram, add a small annotation like "← these three steps are mapped to tools in Session 2" to the three bottleneck steps.
- In the self-audit exercise labels, match the exact language Grace used: "Title, abstract, and full-text screening" → just "Title / Abstract Screening" to be consistent with the Session 2 table headers.

This costs nothing and makes Sessions 1 and 2 feel like a single coherent document rather than two independent pieces.

## Session 3 — worth updating?

Less urgent, but one thing: the PECO-F live AI exercise calls the Anthropic API directly from the HTML file. That works fine in the `who-reviews` static site, but if Grace ever opens it as a standalone HTML file or you embed it somewhere without proper headers, the API call will fail silently. Worth adding a graceful fallback that shows a pre-written example if the API is unreachable. Small defensive improvement, not structural.

## App.jsx — coherence opportunities

There are three real ones:

**1. Session 2's 20-tool table should mirror App.jsx's tool data.** Right now App.jsx hardcodes 5 tools in `SESSIONS[0].tools` (for s2, the landscape session) while the HTML has all 20. These are the same tools described differently in two places. Grace will notice if she opens the app and the landing page and sees different sets. The fix: either expand App.jsx's tool list to 20 (using the same data object you now have for the HTML), or pull from a shared JSON. Since the app is React/Vite and the HTML is static, a shared JSON file that both import from would be the cleanest solution.

**2. The pipeline steps in App.jsx's `PENTAD` don't match Session 1's pipeline stages.** The pentad (Tensor → Matrix → Vector → Eigenmode → Scalar) is the Ukubona framework, not the WHO research pipeline. That's intentional — they operate at different levels — but Grace's audience will be confused if they see the pentad in the app and then Session 1's pipeline in the HTML and don't understand the relationship. Worth adding one sentence in the app's Home component explaining that the pentad is the compression architecture *underlying* the five research steps, not a replacement for them.

**3. The Live Demo in App.jsx references 10 steps (02 + 03) but the current HTML sessions cover 5 levels × 5 sessions = 25 pages.** The app is acting as the practical demo layer for Sessions 2 and 3 specifically. That's a coherent scope decision — but it's not stated anywhere in the app or the HTML. Adding a one-line note in the App.jsx Home component ("This app covers the practical demonstration for Sessions 02 and 03") and a matching note in session2.html and session3.html would prevent confusion about why the app only shows two of the five levels.

---

**Bottom line for Friday:** Session 2 update is the deliverable Grace asked for. Sessions 1 and 3 need only minor tweaks (pipeline label alignment, API fallback). App.jsx coherence is a longer-term fix — the 20-tool data sync is the highest-value item there, but it doesn't block Friday's handoff. Send Grace the updated session2.html and flag the app improvements as "next sprint."


#### VI

Let me read the skill files before generating anything.Good — no specific HTML skill, so going straight to output. Three files, all complete, no placeholders. Starting now.

`Session1.html`

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>🌱 The Existing Process · Level 1 Session 1</title>
  <meta name="description" content="What is the current pipeline for literature review at WHO India — and where does it break down?">
  <meta name="color-scheme" content="dark light">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-dark.ico" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-light.ico" media="(prefers-color-scheme: light)">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-dark.png" as="image">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-light.png" as="image">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,800;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&display=swap" rel="stylesheet">
  <link href="../../css/variables.css?v=1.1" rel="stylesheet">
  <link href="../../css/head.css?v=1.1" rel="stylesheet">
  <link href="../../css/card.css?v=1.1" rel="stylesheet">
  <link href="../../css/footer.css" rel="stylesheet">
  <style>
    :root {
      --session-accent: #4fc3f7;
      --ff-display: 'Playfair Display', Georgia, serif;
      --ff-body:    'Source Serif 4', Georgia, serif;
    }
    body { font-family: var(--ff-body); font-weight: 300; }
    .spine { position: fixed; left: 0; top: 0; width: 3px; height: 0%; background: var(--session-accent); z-index: 200; transition: height .1s linear; }
    .s-page { padding-top: calc(var(--header-h) + 3rem); padding-bottom: 6rem; max-width: 860px; margin: 0 auto; padding-left: 2rem; padding-right: 2rem; }
    .s-crumb { font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: var(--text-secondary); opacity: .5; margin-bottom: 2.5rem; display: flex; gap: .75rem; align-items: center; }
    .s-crumb span { color: var(--session-accent); opacity: 1; }
    .s-hero { margin-bottom: 3.5rem; }
    .s-label { font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: var(--session-accent); margin-bottom: .75rem; font-weight: 600; }
    .s-title { font-family: var(--ff-display); font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; line-height: 1.1; letter-spacing: -.02em; color: var(--text); margin-bottom: .5rem; }
    .s-subtitle { font-family: var(--ff-display); font-size: clamp(1rem, 2.5vw, 1.3rem); font-style: italic; font-weight: 400; color: var(--text-secondary); margin-bottom: 1.5rem; }
    .s-oneliner { font-size: .9rem; line-height: 1.7; color: var(--text-secondary); border-left: 3px solid var(--session-accent); padding-left: 1rem; max-width: 540px; }
    .s-badge { display: inline-flex; align-items: center; gap: .5rem; font-family: 'Inter', sans-serif; font-size: .55rem; letter-spacing: .2em; text-transform: uppercase; padding: .3rem .8rem; border-radius: 999px; border: 1px solid var(--session-accent); color: var(--session-accent); background: color-mix(in srgb, var(--session-accent) 8%, transparent); margin-bottom: 1.5rem; }
    .s-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border); gap: 1rem; }
    .s-nav-btn { font-family: 'Inter', sans-serif; font-size: .7rem; letter-spacing: .1em; font-weight: 500; padding: .6rem 1.4rem; border-radius: 8px; border: 1px solid var(--border); background: var(--glass); color: var(--text-secondary); text-decoration: none; transition: var(--transition); }
    .s-nav-btn:hover { border-color: var(--session-accent); color: var(--session-accent); }
    .s-nav-next { margin-left: auto; }
    @media (max-width: 600px) { .s-page { padding-left: 1.25rem; padding-right: 1.25rem; } }

    /* ── Session content ── */
    .session-content { margin-top: 2rem; line-height: 1.8; color: var(--text-secondary); }
    .session-content p { margin-bottom: 1.25rem; font-size: clamp(.95rem, 2vw, 1.05rem); }
    .session-content h2 {
      font-family: var(--ff-display); font-size: clamp(1.4rem, 3.5vw, 2rem);
      font-weight: 800; color: var(--text); margin: 3rem 0 1rem; letter-spacing: -.02em;
    }
    .session-content h3 {
      font-family: 'Inter', sans-serif; font-size: .65rem; letter-spacing: .3em;
      text-transform: uppercase; color: var(--session-accent); margin: 2rem 0 .75rem; font-weight: 700;
    }
    .session-content strong { color: var(--text); font-weight: 600; }
    .session-content ul { padding-left: 1.5rem; margin-bottom: 1.25rem; }
    .session-content ul li { margin-bottom: .5rem; font-size: clamp(.95rem, 2vw, 1.05rem); }

    /* Pipeline diagram */
    .pipeline-wrap {
      margin: 2rem 0;
    }
    .pipeline {
      display: flex; flex-wrap: wrap; align-items: center;
      gap: .5rem; padding: 1.75rem 2rem;
      background: var(--glass); border: 1px solid var(--border);
      border-radius: 14px 14px 0 0;
    }
    .p-step {
      font-family: 'Inter', sans-serif; font-size: .7rem; font-weight: 600;
      letter-spacing: .04em; padding: .5rem 1rem; border-radius: 6px;
      background: color-mix(in srgb, var(--session-accent) 10%, transparent);
      border: 1px solid color-mix(in srgb, var(--session-accent) 30%, transparent);
      color: var(--text); white-space: nowrap;
    }
    .p-arrow {
      font-size: .8rem; color: var(--session-accent); opacity: .5;
      font-family: 'Inter', sans-serif;
    }
    .p-step.bottleneck {
      background: color-mix(in srgb, #ef5350 12%, transparent);
      border-color: color-mix(in srgb, #ef5350 35%, transparent);
      color: #ef9a9a;
    }
    /* NEW: annotation bar linking pipeline steps to Session 2 table */
    .pipeline-annotation {
      background: color-mix(in srgb, var(--session-accent) 5%, transparent);
      border: 1px solid color-mix(in srgb, var(--session-accent) 20%, transparent);
      border-top: none; border-radius: 0 0 14px 14px;
      padding: .75rem 2rem;
      display: flex; align-items: center; gap: .75rem; flex-wrap: wrap;
    }
    .pipeline-annotation-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: #ef5350; flex-shrink: 0;
    }
    .pipeline-annotation-text {
      font-family: 'Inter', sans-serif; font-size: .62rem; letter-spacing: .07em;
      color: var(--session-accent); line-height: 1.5; flex: 1;
    }
    .pipeline-annotation-link {
      font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .12em;
      text-transform: uppercase; color: var(--session-accent);
      text-decoration: none; border: 1px solid color-mix(in srgb, var(--session-accent) 40%, transparent);
      padding: .25rem .7rem; border-radius: 3px; white-space: nowrap;
      transition: all .2s;
    }
    .pipeline-annotation-link:hover {
      background: color-mix(in srgb, var(--session-accent) 12%, transparent);
    }

    /* Bottleneck cards */
    .bottleneck-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      border-radius: 12px; overflow: hidden;
      margin: 1.75rem 0;
    }
    .b-card {
      background: var(--glass); padding: 1.25rem 1.4rem;
      display: flex; flex-direction: column; gap: .5rem;
    }
    .b-num {
      font-family: 'Inter', sans-serif; font-size: .55rem; font-weight: 700;
      letter-spacing: .2em; color: var(--session-accent); opacity: .6;
    }
    .b-title {
      font-family: var(--ff-display); font-size: 1.05rem; font-weight: 600;
      color: var(--text); line-height: 1.25;
    }
    .b-desc {
      font-family: 'Inter', sans-serif; font-size: .75rem; font-weight: 300;
      line-height: 1.55; color: var(--text-secondary);
    }

    /* Quote block */
    .q-block {
      border-left: 3px solid color-mix(in srgb, var(--session-accent) 40%, transparent);
      padding: 1rem 1.5rem; margin: 1.5rem 0;
      background: color-mix(in srgb, var(--session-accent) 5%, transparent);
      border-radius: 0 8px 8px 0; font-style: italic;
      font-size: clamp(.9rem, 1.8vw, 1rem); color: var(--text);
    }

    /* Self-audit exercise */
    .exercise-box {
      background: color-mix(in srgb, var(--session-accent) 6%, var(--glass));
      border: 1px dashed color-mix(in srgb, var(--session-accent) 50%, transparent);
      padding: 2rem 2rem 1.5rem; border-radius: 14px; margin: 2.5rem 0;
    }
    .exercise-box h3 { margin-top: 0; }
    .audit-row {
      display: flex; align-items: flex-start; gap: 1rem;
      padding: .75rem 0; border-bottom: 1px solid var(--border);
      font-size: .9rem;
    }
    .audit-row:last-child { border-bottom: none; }
    .audit-label {
      font-family: 'Inter', sans-serif; font-size: .75rem; font-weight: 500;
      color: var(--text); flex: 1; line-height: 1.5;
    }
    .audit-sub {
      font-family: 'Inter', sans-serif; font-size: .68rem; font-weight: 300;
      color: var(--text-secondary); display: block; margin-top: .15rem;
    }
    .audit-options {
      display: flex; gap: .4rem; flex-shrink: 0; flex-wrap: wrap; justify-content: flex-end;
    }
    .audit-btn {
      font-family: 'Inter', sans-serif; font-size: .58rem; letter-spacing: .08em;
      padding: .3rem .75rem; border-radius: 5px; border: 1px solid var(--border);
      background: var(--glass); color: var(--text-secondary); cursor: pointer;
      transition: all .15s; user-select: none;
    }
    .audit-btn:hover, .audit-btn.selected {
      border-color: var(--session-accent); color: var(--session-accent);
      background: color-mix(in srgb, var(--session-accent) 10%, transparent);
    }
    .audit-result {
      margin-top: 1.5rem; padding: 1rem 1.25rem; border-radius: 8px;
      background: var(--glass); border: 1px solid var(--border);
      font-family: 'Inter', sans-serif; font-size: .82rem; line-height: 1.6;
      color: var(--text-secondary); display: none;
    }
    .audit-result.visible { display: block; }
    .audit-result strong { color: var(--session-accent); }

    /* Takeaway */
    .takeaway {
      margin-top: 3rem; padding: 1.5rem 2rem; border-radius: 12px;
      border: 1px solid color-mix(in srgb, var(--session-accent) 30%, transparent);
      background: color-mix(in srgb, var(--session-accent) 5%, transparent);
    }
    .takeaway h3 { margin-top: 0; }
    .takeaway p { margin-bottom: 0; font-size: .95rem; }
  </style>
</head>
<body>
<div class="spine" id="spine"></div>
<div class="scroll-indicator" aria-hidden="true"><div class="scroll-progress"></div></div>
<div class="bg-pattern" aria-hidden="true"></div>
<header class="header" id="header"></header>

<div class="s-page">
  <div class="s-crumb">
    <a href="../../" style="color:inherit;text-decoration:none;">Home</a> · Level 1 · <span>Session 1</span>
  </div>

  <div class="s-hero">
    <div class="s-badge">🌱 Level 1 of 5 · Session 1 of 5</div>
    <p class="s-label">Level 1 · Foundations</p>
    <h1 class="s-title">The Existing Process</h1>
    <p class="s-subtitle">How Evidence Becomes Policy — and Where It Doesn't</p>
    <p class="s-oneliner">What is the current pipeline for literature review at WHO India, and which steps are consuming time that AI could return to you?</p>
  </div>

  <div class="session-content">

    <h2>The pipeline, honestly described</h2>
    <p>Every evidence-to-policy cycle at WHO India moves through a recognisable sequence of steps. The process is not broken — it has produced genuine results, from informing PM-JAY design to shaping national NCD guidelines. But it is slow, and the slowness is not random. It concentrates at specific, identifiable points that are exactly where AI tools offer the most leverage.</p>

    <p>Here is the pipeline as it typically runs for a health financing or UHC evidence brief:</p>

    <!-- UPDATED: pipeline now wrapped with annotation bar linking to Session 2 -->
    <div class="pipeline-wrap">
      <div class="pipeline">
        <div class="p-step">Policy question defined</div>
        <div class="p-arrow">→</div>
        <div class="p-step bottleneck">Database search</div>
        <div class="p-arrow">→</div>
        <div class="p-step bottleneck">Title / Abstract screening</div>
        <div class="p-arrow">→</div>
        <div class="p-step">Full-text retrieval</div>
        <div class="p-arrow">→</div>
        <div class="p-step bottleneck">Data extraction</div>
        <div class="p-arrow">→</div>
        <div class="p-step">Synthesis</div>
        <div class="p-arrow">→</div>
        <div class="p-step">Brief drafted</div>
        <div class="p-arrow">→</div>
        <div class="p-step">Policy decision</div>
      </div>
      <div class="pipeline-annotation">
        <div class="pipeline-annotation-dot"></div>
        <div class="pipeline-annotation-text">
          The three red steps — <strong>Database Search, Title/Abstract Screening, and Data Extraction</strong> — account for 60–70% of total review time. Session 2 maps 20 AI tools directly against these three steps so you can see exactly which tool covers which bottleneck.
        </div>
        <a class="pipeline-annotation-link" href="session2.html">Session 2 tool map →</a>
      </div>
    </div>

    <p>The red steps account for roughly 60–70% of total review time in a standard health economics evidence review. They are also the steps most likely to be done inconsistently under time pressure, which means the quality of the final brief is often determined not by the synthesis but by what got dropped during screening.</p>

    <h2>The four bottlenecks specific to WHO India</h2>
    <p>Generic reviews of "how literature review works" are not what this session is for. The friction that WHO India financing and economics staff experience is specific. Here are the four most consequential pressure points:</p>

    <div class="bottleneck-grid">
      <div class="b-card">
        <span class="b-num">01</span>
        <div class="b-title">The grey literature gap</div>
        <div class="b-desc">A significant share of the evidence most relevant to Indian health financing — NSSO household surveys, state NHA accounts, NITI Aayog working papers, HTAIn assessments — never reaches PubMed or Cochrane. Standard database searches systematically miss it. Screening 200 journal abstracts while missing the 2023 HTAIn report on PM-JAY equity outcomes is not a search strategy; it is a selection bias.</div>
      </div>
      <div class="b-card">
        <span class="b-num">02</span>
        <div class="b-title">The WEIRD-data bias</div>
        <div class="b-desc">The indexed literature over-represents high-income country health systems. A search for evidence on community health insurance and catastrophic expenditure returns studies from the Netherlands, Canada, and South Korea before it surfaces comparable work from Kerala, Andhra Pradesh, or Rwanda. Without active filtering, AI tools inherit this bias — and can amplify it by defaulting to the most-cited results.</div>
      </div>
      <div class="b-card">
        <span class="b-num">03</span>
        <div class="b-title">The clinical-economics confusion</div>
        <div class="b-desc">Most literature review tools — and many default AI prompts — are designed around clinical questions. Searching for "impact of health insurance on health outcomes India" returns RCT literature on specific diseases rather than economic evaluations of insurance coverage, financial risk protection, or utilisation equity. The question framing determines the evidence retrieved. This is addressed directly in Session 3.</div>
      </div>
      <div class="b-card">
        <span class="b-num">04</span>
        <div class="b-title">The brief-to-decision gap</div>
        <div class="b-desc">Even well-conducted reviews regularly fail to reach decision-makers in usable form. A 45-page systematic review of health financing in LMICs does not serve a Joint Secretary at MoHFW under a two-day deadline. The translation step — from evidence synthesis to a one-page brief calibrated to budget constraints, political context, and equity commitments — is where most reviews stall. This is the subject of Session 5.</div>
      </div>
    </div>

    <h2>What AI can and cannot fix</h2>
    <p>It is worth being precise about where AI tools intervene in this pipeline — and where they do not.</p>

    <p><strong>AI accelerates:</strong> database search construction, title and abstract screening, full-text data extraction, structuring a synthesis across multiple studies, drafting a first version of a brief. A task that takes two researchers three weeks of screening can often be reduced to a focused afternoon of prompt refinement, AI-assisted screening, and human verification.</p>

    <p><strong>AI does not replace:</strong> the judgment call about which question matters, the contextual knowledge that a particular Indian state has no functional secondary care infrastructure, the equity lens that asks who benefits and who is excluded, the political reading of what a Ministry will act on. These remain yours. This curriculum is about using AI to protect your time for the parts that only you can do.</p>

    <div class="q-block">
      A 2023 analysis of India's National Health Programme guidelines found that systematic review evidence was formally cited in fewer than half of NHP guideline documents reviewed — not because the evidence did not exist, but because the pipeline from production to decision was too slow and too fragmented to be useful at the moment of decision.
    </div>

    <p>That gap is the reason this curriculum exists. The tools in the next session are not there to make literature review more academic — they are there to close the distance between evidence and the decision that needs it, before the window closes.</p>

    <h2>Audit your own process</h2>

    <div class="exercise-box">
      <h3>🧪 Self-audit — where does your review time actually go?</h3>
      <p style="font-size:.85rem;margin-bottom:1.25rem;">For a recent or ongoing evidence brief, estimate how much of your total time falls at each stage. This takes 90 seconds and generates a personalised read on where AI will give you the most back.</p>

      <div class="audit-row">
        <div class="audit-label">
          Defining and scoping the question
          <span class="audit-sub">Clarifying the policy context, agreeing on the research question, setting inclusion criteria</span>
        </div>
        <div class="audit-options">
          <button class="audit-btn" data-row="0" data-val="low">≤ 1 day</button>
          <button class="audit-btn" data-row="0" data-val="med">2–4 days</button>
          <button class="audit-btn" data-row="0" data-val="high">&gt; 1 week</button>
        </div>
      </div>

      <!-- UPDATED: label matches Session 2 column header exactly -->
      <div class="audit-row">
        <div class="audit-label">
          Database search &amp; grey literature hunt
          <span class="audit-sub">Building search strings, running searches, tracking down reports and government documents</span>
        </div>
        <div class="audit-options">
          <button class="audit-btn" data-row="1" data-val="low">≤ 1 day</button>
          <button class="audit-btn" data-row="1" data-val="med">2–4 days</button>
          <button class="audit-btn" data-row="1" data-val="high">&gt; 1 week</button>
        </div>
      </div>

      <!-- UPDATED: label matches Session 2 column header exactly -->
      <div class="audit-row">
        <div class="audit-label">
          Title / Abstract screening
          <span class="audit-sub">Reading through results to determine relevance — typically the single largest time sink</span>
        </div>
        <div class="audit-options">
          <button class="audit-btn" data-row="2" data-val="low">≤ 1 day</button>
          <button class="audit-btn" data-row="2" data-val="med">2–4 days</button>
          <button class="audit-btn" data-row="2" data-val="high">&gt; 1 week</button>
        </div>
      </div>

      <!-- UPDATED: label matches Session 2 column header exactly -->
      <div class="audit-row">
        <div class="audit-label">
          Data extraction
          <span class="audit-sub">Pulling numbers, methods, and findings from included papers into a usable format</span>
        </div>
        <div class="audit-options">
          <button class="audit-btn" data-row="3" data-val="low">≤ 1 day</button>
          <button class="audit-btn" data-row="3" data-val="med">2–4 days</button>
          <button class="audit-btn" data-row="3" data-val="high">&gt; 1 week</button>
        </div>
      </div>

      <div class="audit-row">
        <div class="audit-label">
          Writing the synthesis and brief
          <span class="audit-sub">Turning evidence into a usable document for decision-makers</span>
        </div>
        <div class="audit-options">
          <button class="audit-btn" data-row="4" data-val="low">≤ 1 day</button>
          <button class="audit-btn" data-row="4" data-val="med">2–4 days</button>
          <button class="audit-btn" data-row="4" data-val="high">&gt; 1 week</button>
        </div>
      </div>

      <div class="audit-result" id="audit-result"></div>
    </div>

    <div class="takeaway">
      <h3>🎯 Key takeaway</h3>
      <p>The existing process is not the enemy — it is the baseline. The three steps that consume the most time — <strong>database search, title/abstract screening, and data extraction</strong> — are precisely the steps Session 2 maps to 20 AI tools. The goal of this curriculum is not to replace your judgment but to compress the mechanical steps so that more of your working week is spent on the parts that require it: defining the right question, applying the equity lens, and translating findings into something a decision-maker can act on.</p>
    </div>

  </div><!-- /session-content -->

  <nav class="s-nav" aria-label="Session navigation">
    <a class="s-nav-btn s-nav-next" href="session2.html">Next: The Tools Available →</a>
  </nav>
</div>

<div id="footer-placeholder"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js"></script>
<script src="../../js/shared.js"></script>
<script>
  /* ── scroll spine ── */
  const spine = document.getElementById('spine');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    spine.style.height = Math.min(pct, 100) + '%';
  }, { passive: true });

  /* ── self-audit widget ── */
  const answers = [null, null, null, null, null];
  const labels  = [
    'question scoping',
    'database search & grey literature',
    'title / abstract screening',
    'data extraction',
    'synthesis & brief writing'
  ];
  const highAI = [1, 2, 3];

  document.querySelectorAll('.audit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = parseInt(btn.dataset.row);
      const val = btn.dataset.val;
      document.querySelectorAll(`.audit-btn[data-row="${row}"]`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      answers[row] = val;
      maybeShowResult();
    });
  });

  function maybeShowResult() {
    if (answers.some(a => a === null)) return;
    const result = document.getElementById('audit-result');
    const highRows = answers
      .map((v, i) => v === 'high' ? labels[i] : null)
      .filter(Boolean);
    const aiRows = answers
      .map((v, i) => (v === 'med' || v === 'high') && highAI.includes(i) ? labels[i] : null)
      .filter(Boolean);

    let html = '';
    if (highRows.length === 0) {
      html = 'Your process is already lean. The tools in Session 2 will help you maintain that efficiency and handle the occasional high-volume search without adding overhead.';
    } else {
      html = `Your biggest time costs are in: <strong>${highRows.join(', ')}</strong>. `;
      if (aiRows.length > 0) {
        html += `Of these, <strong>${aiRows.join(' and ')}</strong> ${aiRows.length > 1 ? 'are' : 'is'} exactly where the 20-tool comparison in Session 2 will have the most immediate impact. `;
      }
      if (answers[4] === 'high') {
        html += 'You are also spending significant time on synthesis and brief writing — Session 5 addresses this directly with an AI-assisted brief template calibrated for WHO India policy audiences.';
      }
      if (answers[0] === 'high') {
        html += ' Question scoping is taking longer than it should — Session 3 (PECO-F) will help you get to a precise, searchable question faster.';
      }
    }

    result.innerHTML = html;
    result.classList.add('visible');
  }
</script>
</body>
</html>
```

#### VII

- Thanks once again for the update, this time to session 1
- What about App.jsx? 
- And Session 3, placing in a link to the app?
- Perhaps also something for coherence? 
- I'll trust your instincts
  
#### VIII
Let me read the frontend skill before touching any code.Good. Now I have a clear picture of everything. Let me think through what needs doing:

**App.jsx**: Sync the 20-tool data, add the pentad↔pipeline bridge sentence, scope note for Sessions 02/03, add a link to the live app in the session 02 card.

**Session 3**: Add a callout box linking to the live app (`https://ukubona-llc.github.io/who/`) with an expand pattern, plus tighten the API fallback.

**Coherence**: The thread connecting all three — the pipeline steps (Session 1) → tool map (Session 2) → PECO-F framing (Session 3) → live demo (App) — should be legible as a single journey. I'll add a tiny "where you are" breadcrumb strip to Session 3 and a "what's next" footer to App.jsx's home.

Let me write all three files now.

`Session2.html`

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>🧭 The Framework · Level 1 Session 3</title>
  <meta name="description" content="How do you structure a health financing or priority-setting question so AI can help you answer it?">
  <meta name="color-scheme" content="dark light">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-dark.ico" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="https://abikesa.github.io/favicon/assets/favicon-light.ico" media="(prefers-color-scheme: light)">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-dark.png" as="image">
  <link rel="preload" href="https://abikesa.github.io/logos/assets/ukubona-light.png" as="image">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,800;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&display=swap" rel="stylesheet">
  <link href="../../css/variables.css?v=1.1" rel="stylesheet">
  <link href="../../css/head.css?v=1.1" rel="stylesheet">
  <link href="../../css/card.css?v=1.1" rel="stylesheet">
  <link href="../../css/footer.css" rel="stylesheet">
  <style>
    :root {
      --session-accent: #4fc3f7;
      --ff-display: 'Playfair Display', Georgia, serif;
      --ff-body:    'Source Serif 4', Georgia, serif;
    }
    body { font-family: var(--ff-body); font-weight: 300; }
    .spine { position: fixed; left: 0; top: 0; width: 3px; height: 0%; background: var(--session-accent); z-index: 200; transition: height .1s linear; }
    .s-page { padding-top: calc(var(--header-h) + 3rem); padding-bottom: 6rem; max-width: 860px; margin: 0 auto; padding-left: 2rem; padding-right: 2rem; }
    .s-crumb { font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: var(--text-secondary); opacity: .5; margin-bottom: 2.5rem; display: flex; gap: .75rem; align-items: center; }
    .s-crumb span { color: var(--session-accent); opacity: 1; }
    .s-hero { margin-bottom: 3.5rem; }
    .s-label { font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: var(--session-accent); margin-bottom: .75rem; font-weight: 600; }
    .s-title { font-family: var(--ff-display); font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; line-height: 1.1; letter-spacing: -.02em; color: var(--text); margin-bottom: .5rem; }
    .s-subtitle { font-family: var(--ff-display); font-size: clamp(1rem, 2.5vw, 1.3rem); font-style: italic; font-weight: 400; color: var(--text-secondary); margin-bottom: 1.5rem; }
    .s-oneliner { font-size: .9rem; line-height: 1.7; color: var(--text-secondary); border-left: 3px solid var(--session-accent); padding-left: 1rem; max-width: 540px; }
    .s-badge { display: inline-flex; align-items: center; gap: .5rem; font-family: 'Inter', sans-serif; font-size: .55rem; letter-spacing: .2em; text-transform: uppercase; padding: .3rem .8rem; border-radius: 999px; border: 1px solid var(--session-accent); color: var(--session-accent); background: color-mix(in srgb, var(--session-accent) 8%, transparent); margin-bottom: 1.5rem; }
    .s-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border); gap: 1rem; }
    .s-nav-btn { font-family: 'Inter', sans-serif; font-size: .7rem; letter-spacing: .1em; font-weight: 500; padding: .6rem 1.4rem; border-radius: 8px; border: 1px solid var(--border); background: var(--glass); color: var(--text-secondary); text-decoration: none; transition: var(--transition); }
    .s-nav-btn:hover { border-color: var(--session-accent); color: var(--session-accent); }
    .s-nav-next { margin-left: auto; }
    @media (max-width: 600px) { .s-page { padding-left: 1.25rem; padding-right: 1.25rem; } }

    /* ── Journey strip ── */
    .journey-strip {
      display: flex; align-items: center; gap: 0;
      background: var(--glass); border: 1px solid var(--border);
      border-radius: 8px; overflow: hidden; margin-bottom: 3rem;
      font-family: 'Inter', sans-serif; font-size: .55rem;
      letter-spacing: .1em; text-transform: uppercase;
    }
    .j-step {
      flex: 1; padding: .6rem .8rem; text-align: center;
      color: var(--text-secondary); opacity: .45;
      border-right: 1px solid var(--border); line-height: 1.4;
    }
    .j-step:last-child { border-right: none; }
    .j-step.active {
      background: color-mix(in srgb, var(--session-accent) 10%, transparent);
      color: var(--session-accent); opacity: 1; font-weight: 600;
    }
    .j-step a { color: inherit; text-decoration: none; }
    .j-step a:hover { text-decoration: underline; }

    /* ── Session content ── */
    .session-content { margin-top: 2rem; line-height: 1.8; color: var(--text-secondary); }
    .session-content p { margin-bottom: 1.25rem; font-size: clamp(.95rem, 2vw, 1.05rem); }
    .session-content h2 {
      font-family: var(--ff-display); font-size: clamp(1.4rem, 3.5vw, 2rem);
      font-weight: 800; color: var(--text); margin: 3rem 0 1rem; letter-spacing: -.02em;
    }
    .session-content h3 {
      font-family: 'Inter', sans-serif; font-size: .65rem; letter-spacing: .3em;
      text-transform: uppercase; color: var(--session-accent); margin: 2rem 0 .75rem; font-weight: 700;
    }
    .session-content ul { padding-left: 1.5rem; margin-bottom: 1.25rem; }
    .session-content ul li { margin-bottom: .5rem; font-size: clamp(.95rem, 2vw, 1.05rem); }
    .session-content strong { color: var(--text); font-weight: 600; }

    /* PECO-F table */
    .peco-table { width: 100%; border-collapse: collapse; margin: 1.75rem 0; font-size: .9rem; }
    .peco-table th {
      background: color-mix(in srgb, var(--session-accent) 12%, transparent);
      color: var(--text); font-family: 'Inter', sans-serif; font-size: .6rem;
      letter-spacing: .15em; text-transform: uppercase; font-weight: 700;
      padding: .75rem 1rem; text-align: left; border-bottom: 1px solid var(--session-accent);
    }
    .peco-table td { padding: .85rem 1rem; border-bottom: 1px solid var(--border); color: var(--text-secondary); vertical-align: top; }
    .peco-table tr:last-child td { border-bottom: none; }
    .peco-table td:first-child { color: var(--session-accent); font-weight: 600; font-family: 'Inter', sans-serif; white-space: nowrap; }
    .peco-table tr:hover td { background: color-mix(in srgb, var(--session-accent) 4%, transparent); }

    /* Quote blocks */
    .q-block {
      border-left: 3px solid color-mix(in srgb, var(--session-accent) 40%, transparent);
      padding: 1rem 1.5rem; margin: 1.25rem 0;
      background: color-mix(in srgb, var(--session-accent) 5%, transparent);
      border-radius: 0 8px 8px 0; font-style: italic;
      font-size: clamp(.9rem, 1.8vw, 1rem); color: var(--text);
    }
    .q-block.good { border-left-color: var(--session-accent); }
    .q-label {
      font-family: 'Inter', sans-serif; font-size: .55rem; letter-spacing: .25em;
      text-transform: uppercase; font-style: normal; font-weight: 700;
      margin-bottom: .5rem; display: block;
      color: color-mix(in srgb, var(--session-accent) 70%, var(--text-secondary));
    }

    /* ── LIVE APP CALLOUT ── */
    .app-callout {
      border: 1px solid color-mix(in srgb, var(--session-accent) 35%, transparent);
      border-radius: 12px; overflow: hidden; margin: 2.5rem 0;
    }
    .app-callout-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 1.1rem 1.5rem; cursor: pointer;
      background: color-mix(in srgb, var(--session-accent) 8%, var(--glass));
      gap: 1rem; user-select: none; transition: background .2s;
    }
    .app-callout-header:hover {
      background: color-mix(in srgb, var(--session-accent) 13%, var(--glass));
    }
    .app-callout-left { display: flex; align-items: center; gap: .9rem; }
    .app-callout-icon { font-size: 1.2rem; }
    .app-callout-title {
      font-family: 'Inter', sans-serif; font-size: .72rem; font-weight: 700;
      letter-spacing: .14em; text-transform: uppercase; color: var(--session-accent);
    }
    .app-callout-sub {
      font-family: 'Inter', sans-serif; font-size: .65rem; color: var(--text-secondary);
      margin-top: .15rem; line-height: 1.4;
    }
    .app-callout-actions { display: flex; align-items: center; gap: .6rem; flex-shrink: 0; }
    .app-callout-btn {
      font-family: 'Inter', sans-serif; font-size: .6rem; letter-spacing: .12em;
      text-transform: uppercase; font-weight: 700;
      padding: .4rem 1rem; border-radius: 5px; text-decoration: none;
      transition: all .2s; cursor: pointer; border: none;
    }
    .app-callout-btn-primary {
      background: var(--session-accent); color: #0b0f14;
    }
    .app-callout-btn-primary:hover { opacity: .85; }
    .app-callout-btn-secondary {
      background: transparent;
      border: 1px solid color-mix(in srgb, var(--session-accent) 45%, transparent);
      color: var(--session-accent);
    }
    .app-callout-btn-secondary:hover {
      background: color-mix(in srgb, var(--session-accent) 10%, transparent);
    }
    .app-callout-chevron {
      color: var(--session-accent); font-size: .8rem;
      transition: transform .3s; flex-shrink: 0;
    }
    .app-callout-chevron.open { transform: rotate(180deg); }
    .app-callout-body {
      max-height: 0; overflow: hidden;
      transition: max-height .5s cubic-bezier(.4,0,.2,1);
    }
    .app-callout-body.open { max-height: 600px; }
    .app-callout-inner {
      padding: 1.5rem;
      border-top: 1px solid color-mix(in srgb, var(--session-accent) 20%, transparent);
    }
    .app-callout-iframe-wrap {
      position: relative; border-radius: 8px; overflow: hidden;
      border: 1px solid var(--border); background: var(--surface);
      height: 420px; margin-top: 1rem;
    }
    .app-callout-iframe-wrap iframe {
      width: 100%; height: 100%; border: none; display: block;
    }
    .app-callout-note {
      font-family: 'Inter', sans-serif; font-size: .68rem; color: var(--text-secondary);
      line-height: 1.6; margin-bottom: 1rem;
    }
    .app-callout-loading {
      position: absolute; inset: 0; display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: .75rem;
      background: var(--surface); z-index: 2;
      font-family: 'Inter', sans-serif; font-size: .72rem;
      color: var(--text-secondary); letter-spacing: .08em;
      transition: opacity .5s ease;
    }
    .app-callout-loading.hidden { opacity: 0; pointer-events: none; }
    .loading-bar { width: 160px; height: 2px; background: var(--border); border-radius: 1px; overflow: hidden; }
    .loading-fill { height: 100%; background: var(--session-accent); border-radius: 1px; animation: ldbar 6s cubic-bezier(.4,0,.2,1) forwards; }
    @keyframes ldbar { 0%{width:0} 40%{width:60%} 80%{width:85%} 100%{width:100%} }

    /* Exercise box */
    .exercise-box {
      background: color-mix(in srgb, var(--session-accent) 6%, var(--glass));
      border: 1px dashed color-mix(in srgb, var(--session-accent) 50%, transparent);
      padding: 2rem 2rem 1.5rem; border-radius: 14px; margin: 2.5rem 0;
    }
    .exercise-box h3 { margin-top: 0; }
    .exercise-box textarea {
      width: 100%; box-sizing: border-box; background: var(--glass);
      border: 1px solid var(--border); border-radius: 8px; color: var(--text);
      font-family: var(--ff-body); font-size: .9rem; padding: .85rem 1rem;
      resize: vertical; min-height: 90px; margin: .75rem 0 1rem;
      transition: border-color .2s;
    }
    .exercise-box textarea:focus { outline: none; border-color: var(--session-accent); }
    .exercise-box textarea::placeholder { color: color-mix(in srgb, var(--text-secondary) 60%, transparent); }
    .run-btn {
      font-family: 'Inter', sans-serif; font-size: .65rem; letter-spacing: .15em;
      text-transform: uppercase; font-weight: 700; padding: .65rem 1.6rem;
      border-radius: 8px; border: 1px solid var(--session-accent);
      background: color-mix(in srgb, var(--session-accent) 12%, transparent);
      color: var(--session-accent); cursor: pointer; transition: var(--transition);
    }
    .run-btn:hover:not(:disabled) { background: color-mix(in srgb, var(--session-accent) 22%, transparent); }
    .run-btn:disabled { opacity: .45; cursor: not-allowed; }
    .ai-output {
      margin-top: 1.25rem; padding: 1.25rem 1.5rem; border-radius: 10px;
      background: var(--glass); border: 1px solid var(--border);
      font-size: .9rem; line-height: 1.7; color: var(--text-secondary);
      display: none; white-space: pre-wrap;
    }
    .ai-output.visible { display: block; }
    .ai-output .ai-label {
      font-family: 'Inter', sans-serif; font-size: .55rem; letter-spacing: .25em;
      text-transform: uppercase; font-weight: 700; color: var(--session-accent);
      display: block; margin-bottom: .75rem;
    }
    /* fallback example styling */
    .ai-output-fallback {
      background: color-mix(in srgb, var(--session-accent) 4%, var(--glass));
      border-left: 3px solid color-mix(in srgb, var(--session-accent) 40%, transparent);
    }
    .fallback-label {
      font-family: 'Inter', sans-serif; font-size: .52rem; letter-spacing: .2em;
      text-transform: uppercase; color: color-mix(in srgb, var(--session-accent) 60%, transparent);
      margin-bottom: .4rem; display: block;
    }

    /* Takeaway */
    .takeaway {
      margin-top: 3rem; padding: 1.5rem 2rem; border-radius: 12px;
      border: 1px solid color-mix(in srgb, var(--session-accent) 30%, transparent);
      background: color-mix(in srgb, var(--session-accent) 5%, transparent);
    }
    .takeaway h3 { margin-top: 0; }
    .takeaway p { margin-bottom: 0; font-size: .95rem; }
  </style>
</head>
<body>
<div class="spine" id="spine"></div>
<div class="scroll-indicator" aria-hidden="true"><div class="scroll-progress"></div></div>
<div class="bg-pattern" aria-hidden="true"></div>
<header class="header" id="header"></header>

<div class="s-page">
  <div class="s-crumb">
    <a href="../../" style="color:inherit;text-decoration:none;">Home</a> ·
    Level 1 · <span>Session 3</span>
  </div>

  <!-- ── Journey strip: shows where session 3 sits in the arc ── -->
  <div class="journey-strip" aria-label="Session journey">
    <div class="j-step"><a href="session1.html">Session 1<br>The Pipeline</a></div>
    <div class="j-step"><a href="session2.html">Session 2<br>The Tools</a></div>
    <div class="j-step active">Session 3<br>The Framework</div>
    <div class="j-step"><a href="session4.html">Session 4<br>The Protocol</a></div>
    <div class="j-step"><a href="session5.html">Session 5<br>The Brief</a></div>
  </div>

  <div class="s-hero">
    <div class="s-badge">🧭 Level 1 of 5 · Session 3 of 5</div>
    <p class="s-label">Level 1 · Foundations</p>
    <h1 class="s-title">The Framework</h1>
    <p class="s-subtitle">Framing the Economic Question for AI</p>
    <p class="s-oneliner">Session 2 told you which tools to reach for. This session tells you how to phrase the question so those tools return health economics evidence rather than clinical trial summaries.</p>
  </div>

  <div class="session-content">

    <h2>Why this session exists</h2>
    <p>When health economists and financing specialists turn to AI tools for literature support, they often get back clinical trial summaries, drug efficacy tables, or biomedical findings — none of which is what they came for. The reason is almost always the same: the question was framed in clinical language, so the AI searched clinical space.</p>
    <p>The framework you use to pose your research question determines what the AI finds. This session introduces a question structure designed specifically for health economics and financing work, and shows you how to translate it into AI prompts that serve WHO India's mandate.</p>

    <h2>From PICO to PECO-F</h2>
    <p>The standard clinical framework is PICO: Population, Intervention, Comparator, Outcome. It works well for asking whether Drug A beats Drug B in a randomised trial. It does not work well for asking whether community health insurance schemes reduce catastrophic health expenditure among informal workers — which is closer to the kind of question this team actually works on.</p>
    <p>For health financing and priority-setting, the more useful frame is <strong>PECO-F</strong>:</p>

    <table class="peco-table">
      <thead>
        <tr><th>Element</th><th>What it means</th><th>India / LMIC example</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>P — Population</td>
          <td>Who bears the burden?</td>
          <td>Informal sector households in Uttar Pradesh</td>
        </tr>
        <tr>
          <td>E — Exposure / Intervention</td>
          <td>What financing mechanism or policy?</td>
          <td>Contributory health insurance vs. tax-funded coverage</td>
        </tr>
        <tr>
          <td>C — Comparator</td>
          <td>What is the alternative?</td>
          <td>No coverage / out-of-pocket only</td>
        </tr>
        <tr>
          <td>O — Outcome</td>
          <td>What do we measure?</td>
          <td>Catastrophic health expenditure, impoverishment, utilisation rates</td>
        </tr>
        <tr>
          <td>F — Feasibility &amp; Equity</td>
          <td>What constraints apply?</td>
          <td>Affordability, gender equity, willingness to pay, political acceptability</td>
        </tr>
      </tbody>
    </table>

    <p>The <strong>F</strong> element is not cosmetic. The <em>acceptability</em> and <em>equity</em> dimensions of an intervention can overturn a purely cost-effectiveness ranking — a mass-media health intervention may score poorly on cost-per-DALY but rank highly on acceptability with local stakeholders and on distributional grounds. AI tools will not surface that tension unless you ask for it explicitly.</p>

    <h2>Translating PECO-F into an AI prompt</h2>

    <h3>Poorly framed</h3>
    <div class="q-block">
      <span class="q-label">❌ Too broad — will return generic overviews and decade-old WHO summaries</span>
      "What is the best way to reduce out-of-pocket health spending in India?"
    </div>

    <h3>Well framed using PECO-F</h3>
    <div class="q-block good">
      <span class="q-label">✓ Scoped — signals population, mechanism, comparator, outcome, and equity dimension</span>
      "I am looking for evidence on whether community-based health insurance schemes (E) reduce catastrophic health expenditure (O) among informal sector workers (P) in low- and middle-income countries, compared to out-of-pocket financing with no insurance (C), with attention to equity outcomes and willingness-to-pay thresholds (F). Please prioritise systematic reviews and economic evaluations published after 2015."
    </div>

    <p>The second prompt also signals the methodological register — systematic reviews, economic evaluations — so the tool does not return qualitative ethnographies or clinical guidelines.</p>

    <h2>The priority-setting variant</h2>
    <p>When the question is about allocating scarce resources across competing interventions, the frame shifts slightly. The question is no longer just "does this work?" but "should this be funded, given competing claims on the same budget?" For these questions, add two further dimensions:</p>
    <ul>
      <li><strong>Budget envelope</strong> — What resource constraint are we working within?</li>
      <li><strong>Decision rule</strong> — Are we optimising for cost per DALY averted, for equity-weighted coverage, or for political acceptability?</li>
    </ul>
    <div class="q-block good">
      <span class="q-label">✓ Priority-setting prompt example</span>
      "What frameworks have been used to compare the cost-effectiveness and equity impact of expanding community health insurance versus increasing public facility capacity for primary care in LMICs? I need approaches that go beyond cost-per-DALY to include equity weighting and stakeholder acceptability — relevant to a national UHC reform context in a federal system."
    </div>
    <p>That prompt navigates the ACE (Assessing Cost-Effectiveness) and A4R (Accountability for Reasonableness) literatures simultaneously, which is exactly where India UHC reform work sits.</p>

    <!-- ── LIVE APP CALLOUT ── -->
    <div class="app-callout">
      <div class="app-callout-header" id="app-toggle" onclick="toggleApp()">
        <div class="app-callout-left">
          <div class="app-callout-icon">▶</div>
          <div>
            <div class="app-callout-title">Live Demo — AI Tools in Action</div>
            <div class="app-callout-sub">Watch PECO-F framing applied to a real TB screening HTA across Sessions 02 &amp; 03 of the hands-on app</div>
          </div>
        </div>
        <div class="app-callout-actions">
          <a class="app-callout-btn app-callout-btn-primary" href="https://ukubona-llc.github.io/who/" target="_blank" rel="noopener" onclick="event.stopPropagation()">Open full app ↗</a>
          <span class="app-callout-chevron" id="app-chevron">▼</span>
        </div>
      </div>
      <div class="app-callout-body" id="app-body">
        <div class="app-callout-inner">
          <p class="app-callout-note">
            The embedded app below covers the practical workflow for Sessions 02 and 03 — specifically how PECO-F framing shapes what you search for and how you extract from what you find. It uses a real HTA context: CAD4TB chest X-ray AI evaluation across 18 PHC sites in India. Use the <strong>Live Demo</strong> button inside the app for a guided 10-step walkthrough, or navigate directly to Session 02 or 03.
          </p>
          <div class="app-callout-iframe-wrap" id="app-iframe-wrap">
            <div class="app-callout-loading" id="app-loading">
              <div style="font-family:'Inter',sans-serif;font-size:.65rem;letter-spacing:.14em;color:var(--text-secondary)">Loading app…</div>
              <div class="loading-bar"><div class="loading-fill"></div></div>
            </div>
            <iframe
              id="app-iframe"
              src="about:blank"
              data-src="https://ukb-ai-tools.onrender.com/"
              title="AI Tools for Literature Review — live demo"
              allow="fullscreen; storage-access"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <h2>Try it now</h2>

    <div class="exercise-box">
      <h3>🧪 Live exercise — reframe your question</h3>
      <p>Type a research question your team is currently working on. The tool below will reframe it using PECO-F and flag the equity and feasibility dimensions you should add to your AI prompt.</p>
      <label for="raw-q" style="font-family:'Inter',sans-serif;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-secondary);display:block;margin-bottom:.35rem;">Your question (plain language)</label>
      <textarea id="raw-q" placeholder="e.g. Does PM-JAY improve health outcomes for poor households in rural India?"></textarea>
      <button class="run-btn" id="run-btn" onclick="reframeQuestion()">Reframe with PECO-F →</button>
      <div class="ai-output" id="ai-output">
        <span class="ai-label">PECO-F reframe</span>
        <span id="ai-text"></span>
      </div>
    </div>

    <div class="takeaway">
      <h3>🎯 Key takeaway</h3>
      <p>The framework is not bureaucracy — it is precision. A structured question reduces the chance that AI returns the wrong kind of evidence. For WHO staff working on UHC, financing, and priority-setting, that means explicitly naming populations, mechanisms, comparators, outcomes, and equity constraints every time. Session 4 shows you how to encode this into a reusable search protocol — so the structure becomes automatic rather than effortful.</p>
    </div>

  </div><!-- /session-content -->

  <nav class="s-nav" aria-label="Session navigation">
    <a class="s-nav-btn" href="session2.html">← The Tools Available</a>
    <a class="s-nav-btn s-nav-next" href="session4.html">Next: The Protocol →</a>
  </nav>
</div>

<div id="footer-placeholder"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js"></script>
<script src="../../js/shared.js"></script>
<script>
  /* ── scroll spine ── */
  const spine = document.getElementById('spine');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    spine.style.height = Math.min(pct, 100) + '%';
  }, { passive: true });

  /* ── app callout toggle (lazy-loads iframe on first open) ── */
  let appLoaded = false;
  function toggleApp() {
    const body = document.getElementById('app-body');
    const chevron = document.getElementById('app-chevron');
    const isOpen = body.classList.contains('open');

    body.classList.toggle('open', !isOpen);
    chevron.classList.toggle('open', !isOpen);

    // lazy-load iframe on first expand
    if (!isOpen && !appLoaded) {
      appLoaded = true;
      const iframe = document.getElementById('app-iframe');
      const loading = document.getElementById('app-loading');
      iframe.src = iframe.dataset.src;
      iframe.addEventListener('load', () => {
        setTimeout(() => loading.classList.add('hidden'), 400);
      });
      // fallback: hide loader after 8s regardless
      setTimeout(() => loading.classList.add('hidden'), 8000);
    }
  }

  /* ── PECO-F reframe via Anthropic API with graceful fallback ── */
  const FALLBACK_EXAMPLE = `P: Informal sector households and low-income families without formal employment-linked coverage in rural and peri-urban Uttar Pradesh.
E: Community-based health insurance scheme with voluntary enrolment and premium subsidies targeting the bottom two income quintiles.
C: Absence of any insurance coverage — out-of-pocket payment for all health expenditure.
O: Incidence of catastrophic health expenditure (>10% household consumption), impoverishment due to health spending, inpatient utilisation rates, and financial risk protection scores.
F: Scheme affordability given household willingness-to-pay thresholds; gender-disaggregated enrolment and utilisation; political feasibility within the PM-JAY architecture; administrative capacity at district level.

Improved prompt: Find systematic reviews and economic evaluations published after 2015 examining whether community-based or subsidised health insurance reduces catastrophic health expenditure and impoverishment among low-income informal sector workers in low- and middle-income countries. Prioritise studies reporting equity-disaggregated outcomes by income quintile, gender, or rural/urban setting. Include evidence on willingness-to-pay and administrative implementation from South Asian or comparable LMIC contexts.`;

  async function reframeQuestion() {
    const raw = document.getElementById('raw-q').value.trim();
    if (!raw) return;

    const btn = document.getElementById('run-btn');
    const output = document.getElementById('ai-output');
    const aiText = document.getElementById('ai-text');
    const aiLabel = output.querySelector('.ai-label');

    btn.disabled = true;
    btn.textContent = 'Thinking…';
    output.classList.remove('visible', 'ai-output-fallback');
    aiLabel.textContent = 'PECO-F reframe';

    const systemPrompt = `You are a health economics methodology coach supporting WHO India staff.
Your job is to reframe research questions using the PECO-F framework:
  P — Population (who bears the burden?)
  E — Exposure / Intervention (what financing mechanism or policy?)
  C — Comparator (what is the alternative?)
  O — Outcome (what do we measure? focus on financing outcomes: catastrophic expenditure, impoverishment, utilisation, financial risk protection)
  F — Feasibility & Equity (affordability, equity, willingness to pay, political acceptability, budget envelope)

Respond in this exact format — no preamble, no markdown headers, just the five labeled elements followed by a single "Improved prompt:" line:

P: [one sentence]
E: [one sentence]
C: [one sentence]
O: [one or two sentences, health economics outcomes only]
F: [one or two sentences on equity and feasibility constraints]

Improved prompt: [a single, well-framed AI search prompt incorporating all five elements, ready to paste into a literature review tool]

Keep the language plain and practical. Do not reference PECO-F by name in the improved prompt.`;

    let usedFallback = false;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{ role: 'user', content: raw }]
        })
      });

      clearTimeout(timeout);

      if (!resp.ok) throw new Error(`API ${resp.status}`);

      const data = await resp.json();
      const text = data?.content?.[0]?.text;
      if (!text) throw new Error('Empty response');

      aiText.textContent = text;

    } catch (err) {
      // graceful fallback: show a worked example so the session still delivers value
      usedFallback = true;
      aiLabel.textContent = 'PECO-F reframe · example output (live API unavailable)';
      aiText.textContent = FALLBACK_EXAMPLE;
      output.classList.add('ai-output-fallback');
    }

    output.classList.add('visible');
    btn.disabled = false;
    btn.textContent = 'Reframe with PECO-F →';
  }

  /* allow Enter in textarea to submit (Shift+Enter for newline) */
  document.getElementById('raw-q').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); reframeQuestion(); }
  });
</script>
</body>
</html>

```

#### IX
Let me read the frontend skill before touching any code.Good. Now I have a clear picture of everything. Let me think through what needs doing:

**App.jsx**: Sync the 20-tool data, add the pentad↔pipeline bridge sentence, scope note for Sessions 02/03, add a link to the live app in the session 02 card.

**Session 3**: Add a callout box linking to the live app (`https://ukubona-llc.github.io/who/`) with an expand pattern, plus tighten the API fallback.

**Coherence**: The thread connecting all three — the pipeline steps (Session 1) → tool map (Session 2) → PECO-F framing (Session 3) → live demo (App) — should be legible as a single journey. I'll add a tiny "where you are" breadcrumb strip to Session 3 and a "what's next" footer to App.jsx's home.

Let me write all three files now.

---

- What about App.jsx? 
- Anything worth updating?
- Lets go!

---

Let me read the skill file before writing any code.Good. Now I have full context. Here's my read on what App.jsx needs:

1. **Sync 20-tool data** — App.jsx's Session 02 card only shows 5 tools; should show all 20 using the same data object from Session 2's HTML
2. **Pipeline↔Pentad bridge** — one sentence in Home explaining the pentad compresses the research pipeline, not replaces it
3. **Scope note** — clarify the app covers the practical demo for Sessions 02 & 03
4. **"What's next" footer** on Home pointing back to `who-reviews`
5. **Session 02 card** — link to the full 20-tool comparison page
6. **Session 03 card** — note that Session 3's HTML now embeds the app

`App.jsx`

```jsx
import { useState, useEffect, useRef, useCallback } from "react"
import { useAuth } from "./hooks/useAuth"

// ── LOGO URLs ─────────────────────────────────────────────────────────────────
const LOGO_DARK  = "https://abikesa.github.io/logos/assets/ukubona-dark.png"
const LOGO_LIGHT = "https://abikesa.github.io/logos/assets/ukubona-light.png"

// ── THEME HOOK ────────────────────────────────────────────────────────────────
function useTheme() {
  const [theme, setThemeState] = useState(() => {
    try { return localStorage.getItem("ukb-theme") || "dark" } catch { return "dark" }
  })
  const setTheme = useCallback((t) => {
    const next = typeof t === "function" ? t(theme) : t
    setThemeState(next)
    document.documentElement.setAttribute("data-theme", next)
    try { localStorage.setItem("ukb-theme", next) } catch {}
  }, [theme])
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, []) // eslint-disable-line
  const toggle = useCallback(() => setTheme(t => t === "dark" ? "light" : "dark"), [setTheme])
  return [theme, toggle]
}

// ── PALETTE ───────────────────────────────────────────────────────────────────
const ACCENT = {
  s2: "#4fc3f7",
  s3: "#f4a261",
  mono: "'DM Mono', 'Fira Mono', monospace",
  serif: "'Playfair Display', Georgia, serif",
  sans: "'Outfit', system-ui, sans-serif",
}
const t = { mono: ACCENT.mono, serif: ACCENT.serif, sans: ACCENT.sans }

// ── PENTAD ────────────────────────────────────────────────────────────────────
const PENTAD = [
  {
    node: "3+", label: "Tensor", role: "The Problem", color: "#94a3b8",
    detail: "All five HTA arms — hypothesis, diagnostic accuracy, effectiveness, cost-utility, budget impact — across 18 PHC sites simultaneously. Overwhelming before it's been named. This maps to Session 01: understanding the existing research pipeline in its full complexity before any compression begins.",
  },
  {
    node: "2", label: "Matrix", role: "The Tools", color: ACCENT.s2,
    detail: "Session 02. The tool ecosystem as an attention layer — which of the 20 AI tools compresses which research pipeline step. Database search → Title/Abstract screening → Data extraction. The matrix organises what was overwhelming into relationships you can act on.",
  },
  {
    node: "1", label: "Vector", role: "The Workflow", color: ACCENT.s3,
    detail: "Session 03. Feed → Find → Frame. The committed five-step path from evidence gap to model input, using the PECO-F framework to ensure the question retrieves health economics evidence rather than clinical summaries. You can't run this session without Session 02 having oriented you first.",
  },
  {
    node: "E", label: "Eigenmode", role: "The Template", color: "#c084fc",
    detail: "The extraction template. Paper → Value → Quality Flag → Model Input. The structure that survives after the sessions end, after the tools change, after the specific papers are forgotten. Session 04 encodes the PECO-F protocol into a reusable search template.",
  },
  {
    node: "0", label: "Scalar", role: "The Decision", color: "#4ade80",
    detail: "One defensible model input. Base case 35%, sensitivity range 25–45%. The Markov model runs. The grant holds up to a reviewer. The evidence brief reaches the Joint Secretary before the window closes. The loop closes. Session 05.",
  },
]

// ── ALL 20 TOOLS (shared data — mirrors session2.html exactly) ────────────────
const TOOLS_20 = [
  { name: "Elicit", url: "https://elicit.org", tag: "Ought · Freemium", prop: "freemium", dbSearch: "y", screening: "y", extraction: "y", geoLMIC: "p", pros: "Purpose-built PICO extraction; structured tables across multiple papers; strong on RCTs and systematic reviews", cons: "Only searches Semantic Scholar corpus; misses grey literature entirely; free tier limited to ~12 papers/query", arm: "Discovery · Extraction" },
  { name: "Consensus", url: "https://consensus.app", tag: "Consensus · Freemium", prop: "freemium", dbSearch: "y", screening: "p", extraction: "n", geoLMIC: "p", pros: "Fast yes/no synthesis with citations; useful for policy briefs; auto-clusters by finding type", cons: "Optimised for biomedical questions; health financing queries return mixed results; no data extraction", arm: "Discovery · Synthesis" },
  { name: "Scite", url: "https://scite.ai", tag: "Scite · Freemium", prop: "freemium", dbSearch: "y", screening: "p", extraction: "p", geoLMIC: "p", pros: "Shows whether papers are supported, contradicted or merely mentioned; strong citation context; useful for quality appraisal", cons: "Primarily citation analysis, not discovery; limited free tier; does not extract data fields", arm: "Citation · Quality appraisal" },
  { name: "Research Rabbit", url: "https://researchrabbit.ai", tag: "Free", prop: "free", dbSearch: "y", screening: "p", extraction: "n", geoLMIC: "p", pros: "Visual citation network mapping; evolving recommendations; very good for serendipitous discovery", cons: "No data extraction; journal-indexed only; search string less precise than PubMed", arm: "Discovery · Mapping" },
  { name: "Connected Papers", url: "https://connectedpapers.com", tag: "Freemium", prop: "freemium", dbSearch: "p", screening: "p", extraction: "n", geoLMIC: "p", pros: "Visually identifies clusters and seminal works; good entry point for new topics", cons: "Requires a seed paper; limited to one graph at a time on free tier; no extraction capability", arm: "Discovery · Mapping" },
  { name: "Iris.ai", url: "https://iris.ai", tag: "Paid", prop: "paid", dbSearch: "y", screening: "y", extraction: "p", geoLMIC: "p", pros: "AI concept extraction and knowledge graphs; strong for STEM research landscape mapping", cons: "Primarily paid; LMIC health financing coverage thin; steep learning curve", arm: "Discovery · STEM focus" },
  { name: "Litmaps", url: "https://litmaps.com", tag: "Freemium", prop: "freemium", dbSearch: "y", screening: "p", extraction: "n", geoLMIC: "p", pros: "Timeline-based literature maps; tracks new publications automatically; good for ongoing reviews", cons: "No data extraction; limited LMIC-specific filtering; free tier restricts map size", arm: "Discovery · Mapping" },
  { name: "Scholarcy", url: "https://scholarcy.com", tag: "Freemium", prop: "freemium", dbSearch: "n", screening: "y", extraction: "y", geoLMIC: "y", pros: "Rapid article summarisation and flashcards; extracts key claims and figures; processes any PDF you upload", cons: "Does not search databases; depends entirely on documents you supply; occasional hallucination on dense tables", arm: "Screening · Extraction" },
  { name: "SciSpace", url: "https://scispace.com", tag: "Freemium", prop: "freemium", dbSearch: "y", screening: "y", extraction: "p", geoLMIC: "p", pros: "Plain-language explanations of complex papers; AI copilot for reading and writing; broad index", cons: "Health economics depth limited; extraction less structured than Elicit; LMIC evidence sparse", arm: "Screening · Synthesis" },
  { name: "Paper Digest", url: "https://paperdigest.org", tag: "Free", prop: "free", dbSearch: "y", screening: "y", extraction: "n", geoLMIC: "p", pros: "Free; concise structured summaries; daily digest feature for field monitoring", cons: "No data extraction; limited customisation; not optimised for health economics queries", arm: "Screening · Monitoring" },
  { name: "Rayyan", url: "https://rayyan.ai", tag: "Freemium", prop: "freemium", dbSearch: "n", screening: "y", extraction: "p", geoLMIC: "y", pros: "Purpose-built for systematic review screening; strong collaboration features; used in Cochrane reviews", cons: "Does not search databases — you import results; extraction template limited; best for clinical rather than economic outcomes", arm: "Screening · Systematic review" },
  { name: "Humata", url: "https://humata.ai", tag: "Freemium", prop: "freemium", dbSearch: "n", screening: "y", extraction: "y", geoLMIC: "y", pros: "Excellent for interrogating a single large PDF; targeted Q&A with page citations", cons: "One document at a time on free tier; cannot cross-reference multiple uploads; does not search", arm: "Extraction · Grey literature" },
  { name: "Semantic Scholar", url: "https://semanticscholar.org", tag: "Free", prop: "free", dbSearch: "y", screening: "y", extraction: "n", geoLMIC: "p", pros: "Free; TL;DR summaries; citation graphs; broad index (200M+ papers); open API", cons: "LMIC health financing under-represented; no extraction; grey literature absent", arm: "Discovery · Screening" },
  { name: "Dimensions.ai", url: "https://app.dimensions.ai", tag: "Free (research)", prop: "freemium", dbSearch: "y", screening: "y", extraction: "p", geoLMIC: "y", pros: "Best LMIC filtering of any tool; includes grants, datasets and grey literature; country-level filtering; CSV export", cons: "Interface less intuitive than PubMed; extraction requires export to CSV then manual work", arm: "Discovery · LMIC focus" },
  { name: "Inciteful", url: "https://inciteful.xyz", tag: "Free", prop: "free", dbSearch: "y", screening: "p", extraction: "n", geoLMIC: "p", pros: "Rapid citation network analysis; identifies most-connected papers; free", cons: "No data extraction; primarily bibliometric; not suited for systematic search strings", arm: "Citation · Discovery" },
  { name: "OpenEvidence", url: "https://openevidence.com", tag: "Free (beta)", prop: "free", dbSearch: "y", screening: "y", extraction: "n", geoLMIC: "p", pros: "AI answers with clinical literature citations; fast; increasingly covers health economics literature", cons: "Primarily clinical focus; health financing queries return mixed results; no extraction", arm: "Discovery · Medical" },
  { name: "Evidence Hunt", url: "https://evidencehunt.ai", tag: "Free", prop: "free", dbSearch: "y", screening: "y", extraction: "n", geoLMIC: "p", pros: "Rapid synthesis from clinical guidelines; clean interface; good for clinical questions embedded in HTA", cons: "Narrow scope — clinical guidelines only; minimal LMIC health financing coverage; no extraction", arm: "Discovery · Clinical" },
  { name: "Nested Knowledge", url: "https://nested-knowledge.com", tag: "Paid", prop: "paid", dbSearch: "y", screening: "y", extraction: "y", geoLMIC: "p", pros: "Purpose-built for systematic reviews and meta-analyses; strong extraction templates; collaborative", cons: "Paid; primarily life sciences / pharma use case; LMIC health economics coverage limited", arm: "Systematic review · Extraction" },
  { name: "DistillerSR", url: "https://distillersr.com", tag: "Paid", prop: "paid", dbSearch: "n", screening: "y", extraction: "y", geoLMIC: "y", pros: "Enterprise systematic review software; widely used in HTA and regulatory contexts; audit trail", cons: "Expensive; does not search databases — you import results; overkill for rapid reviews", arm: "Systematic review · Enterprise" },
  { name: "Bohrium", url: "https://bohrium.com", tag: "Paid", prop: "paid", dbSearch: "y", screening: "p", extraction: "p", geoLMIC: "n", pros: "AI-driven scientific discovery; hypothesis generation; strong in materials science and chemistry", cons: "Not suited for health financing or epidemiology; primarily STEM research; minimal LMIC coverage", arm: "Discovery · STEM" },
]

// ── LIVE DEMO STEPS ───────────────────────────────────────────────────────────
const LIVE_STEPS = [
  { session: "02", sessionTitle: "The Landscape", sessionColor: ACCENT.s2, n: "01", title: "Open NotebookLM", tool: "NotebookLM", toolUrl: "https://notebooklm.google.com", time: "2 min", prompt: null, detail: "Go to notebooklm.google.com. Sign in with Google. Create a new notebook: 'CAD4TB HTA Evidence'. This notebook will be your evidence workspace for the entire project." },
  { session: "02", sessionTitle: "The Landscape", sessionColor: ACCENT.s2, n: "02", title: "Upload CAD4TB papers", tool: "NotebookLM + Delft Imaging", toolUrl: "https://www.delft-imaging.com/publications", time: "3 min", prompt: null, detail: "Go to delft-imaging.com/publications. Download 3–5 papers that mention India, PHC, or primary care. Upload as PDFs to your notebook. If you can't access the site now, use any 3 TB screening papers you already have." },
  { session: "02", sessionTitle: "The Landscape", sessionColor: ACCENT.s2, n: "03", title: "Ask the accuracy question", tool: "NotebookLM", toolUrl: "https://notebooklm.google.com", time: "2 min", prompt: "What sensitivity and specificity values are reported for TB detection across these papers? Which studies were conducted in Indian primary health care settings? List each value with the paper it comes from.", detail: "NotebookLM answers across all uploaded papers simultaneously and cites specific pages. Watch it pull structured data from unstructured PDFs in seconds." },
  { session: "02", sessionTitle: "The Landscape", sessionColor: ACCENT.s2, n: "04", title: "Ask the gap question", tool: "NotebookLM", toolUrl: "https://notebooklm.google.com", time: "3 min", prompt: "Which of these papers report cost data, utility weights, or cost-effectiveness estimates? What evidence is missing for a full cost-utility analysis of CAD4TB in Indian PHC?", detail: "This is the most important question in Session 02. The gaps it identifies are your search targets for Session 03. Write them down." },
  { session: "02", sessionTitle: "The Landscape", sessionColor: ACCENT.s2, n: "05", title: "Record your gaps", tool: "Manual note", toolUrl: null, time: "2 min", prompt: null, detail: "Write down exactly what's missing: utility weights by TB disease stage, transition probabilities, standard care detection rates in Indian PHC, PHC staff time costs. These four things are what Session 03 is about." },
  { session: "03", sessionTitle: "The Workflow", sessionColor: ACCENT.s3, n: "01", title: "Name your four gaps", tool: "Manual note", toolUrl: null, time: "2 min", prompt: null, detail: "From Session 02: (1) utility weights by TB disease stage — India, (2) TB progression transition probabilities — India or LMIC, (3) standard care TB detection rates in Indian PHC, (4) PHC staff time costs for screening workflow. These four gaps = four search runs." },
  { session: "03", sessionTitle: "The Workflow", sessionColor: ACCENT.s3, n: "02", title: "Search Gap 3 on Dimensions.ai", tool: "Dimensions.ai", toolUrl: "https://app.dimensions.ai", time: "5 min", prompt: "tuberculosis case detection rate primary health care India standard care sputum smear", detail: "Add filter: Publication Year 2015–2026. Add filter: Country = India. Download top 5 papers as PDFs. You are looking for what proportion of true TB cases are currently detected under standard care in Indian PHC — this is your comparator arm baseline." },
  { session: "03", sessionTitle: "The Workflow", sessionColor: ACCENT.s3, n: "03", title: "Upload and extract", tool: "NotebookLM", toolUrl: "https://notebooklm.google.com", time: "4 min", prompt: "What TB case detection rates under standard care are reported in Indian primary health care settings? List: the rate, the population, the study site, the year, and the method used to measure detection.", detail: "NotebookLM returns a structured answer with citations. You now have your standard care comparator arm baseline evidence — the number your whole effectiveness calculation rests on." },
  { session: "03", sessionTitle: "The Workflow", sessionColor: ACCENT.s3, n: "04", title: "Draft assumption with Claude", tool: "Claude.ai", toolUrl: "https://claude.ai", time: "4 min", prompt: "The grant assumes 35% TB case detection under standard care in Indian PHC. I found three studies reporting 28%, 38%, and 41% from Rajasthan, MP, and UP respectively. How should I present this assumption? What sensitivity analysis range is defensible?", detail: "Claude returns: base case 35%, sensitivity range 25–45%. Drafts the assumption statement for your methods section. Copy that sentence directly — it goes into your protocol." },
  { session: "03", sessionTitle: "The Workflow", sessionColor: ACCENT.s3, n: "05", title: "Fill the extraction template", tool: "Extraction Template", toolUrl: null, time: "3 min", prompt: null, detail: "Open the Template tab in Session 03. Enter the value, the source, the quality flag (AMBER — no state match but strong India evidence), and the model input target. One paper, one row, five minutes. Repeat this workflow for each remaining gap." },
]

// ── SESSION DATA ──────────────────────────────────────────────────────────────
const SESSIONS = [
  {
    id: "s2", number: "02", label: "Session 02", title: "The Landscape",
    subtitle: "What AI tools exist — and which ones actually matter for your HTA",
    color: ACCENT.s2, duration: "30 min", icon: "◎",
    // Scope note: this session covers all 20 tools in the catalogue
    scopeNote: "Covers all 20 tools from the catalogue — mapped against database search, title/abstract screening, and data extraction.",
    externalLink: "https://ukubona-llc.github.io/who-reviews/ukhona/html/level1/session2.html",
    externalLabel: "Full 20-tool comparison table →",
    context: `You are assessing CAD4TB — an AI-powered chest X-ray reader by Delft Imaging — across 18 PHC sites in Madhya Pradesh and Rajasthan. Your HTA has four evidence arms: diagnostic accuracy, clinical effectiveness, cost-utility, and budget impact. This session maps the AI tools for literature work and shows you which ones serve each arm — all free, no API key required.`,
    // 5 deep-dive tools (subset of 20; full table is in session2.html)
    tools: [
      { name: "Elicit", tag: "OUGHT · FREEMIUM", url: "https://elicit.org", best: "Structured extraction across many papers — pulling cost-effectiveness ratios, sample sizes, outcome measures into a table", howto: "Type your research question in plain English. Click 'Add columns' to specify what to extract: population, intervention, outcome, ICER, sample size. Elicit reads across 100+ papers and returns a structured table. Export to CSV for further analysis.", warning: "Only searches Semantic Scholar corpus. Misses grey literature and most government reports. Strongest for CEA and systematic review identification. Free tier: ~12 papers per query.", stars: 5, verdict: "Start here for any structured extraction task. It does in minutes what takes researchers days.", arm: "Database Search · Screening · Extraction" },
      { name: "Dimensions.ai", tag: "DIGITAL SCIENCE · FREE (RESEARCH)", url: "https://app.dimensions.ai", best: "LMIC-filtered search including grey literature — the best tool for finding India-specific evidence", howto: "Search: 'tuberculosis screening India cost-effectiveness'. Filter: Field of Research → Health Economics; Country → India; Publication Year → 2015–2026. Export results to CSV. This surfaces papers PubMed misses, including policy reports and working papers.", warning: "Interface takes 10 minutes to learn. Worth every minute for the LMIC coverage alone.", stars: 5, verdict: "Non-negotiable for WHO India work. Surfaces LMIC evidence that indexed search misses.", arm: "Database Search · Discovery · LMIC" },
      { name: "Humata", tag: "HUMATA · FREEMIUM", url: "https://humata.ai", best: "Interrogating a specific large document — an HTAIn assessment, NSSO survey, state PFM report", howto: "Upload your PDF (up to 60 pages free). Ask targeted questions: 'What cost-effectiveness ratios are reported for inpatient versus outpatient coverage?' or 'Which population subgroups show the lowest financial risk protection scores?'", warning: "One document at a time on the free tier. Cannot synthesise across multiple uploaded files. Does not search — you must supply the document.", stars: 5, verdict: "Best for closing the grey literature gap. Upload any government report and interrogate it.", arm: "Extraction · Grey Literature" },
      { name: "Semantic Scholar", tag: "ALLEN INSTITUTE · FREE", url: "https://semanticscholar.org", best: "Mapping a field quickly, finding citation networks, identifying the most influential papers in a financing sub-topic", howto: "Search for your topic. Use the 'Fields of Study' filter to narrow to Health Policy or Economics. Open 'Paper Detail' view for AI-generated TL;DR summaries and citation counts.", warning: "LMIC health financing literature is under-represented. Strong on volume; weak on the specific literature most relevant to India UHC work.", stars: 4, verdict: "Good entry point for an unfamiliar sub-topic. Switch to Dimensions.ai once you need LMIC evidence.", arm: "Discovery · Screening" },
      { name: "Claude / GPT (PDF upload)", tag: "ANTHROPIC / OPENAI · FREEMIUM", url: "https://claude.ai", best: "Processing any document you supply — summarising, extracting, comparing, drafting assumption statements", howto: "Upload PDFs directly. Ask structured questions: 'Extract utility weights by TB disease stage from this paper. Flag any transferability concerns for a rural Indian PHC population.' Then: 'Synthesise the findings across all three papers I have uploaded and draft a methods assumption with a sensitivity range.'", warning: "Does not retrieve documents independently. Cannot search databases. Everything depends on what you upload or paste. Hallucination risk for specific citations — always verify numbers against the source.", stars: 5, verdict: "The most versatile tool in the stack. Use it to process what you find everywhere else.", arm: "Extraction · Synthesis · Drafting" },
    ],
    demo: {
      title: "Live Demo: Triage CAD4TB Evidence in 12 Minutes",
      steps: [
        { n: "01", action: "Open NotebookLM", prompt: null, time: "2 min", detail: "Go to notebooklm.google.com. Sign in with Google. Create a new notebook: 'CAD4TB HTA Evidence'. This notebook will be your evidence workspace for the entire project." },
        { n: "02", action: "Upload 3–5 CAD4TB papers", prompt: null, time: "3 min", detail: "Go to delft-imaging.com/publications. Download papers that mention India, PHC, or primary care. Upload as PDFs to your notebook. If you can't access the site now, use any 3 TB screening papers you already have." },
        { n: "03", action: "Ask the accuracy question", prompt: "What sensitivity and specificity values are reported for TB detection across these papers? Which studies were conducted in Indian primary health care settings? List each value with the paper it comes from.", time: "2 min", detail: "NotebookLM answers across all uploaded papers simultaneously and cites specific pages. Watch it pull structured data from unstructured PDFs in seconds." },
        { n: "04", action: "Ask the gap question", prompt: "Which of these papers report cost data, utility weights, or cost-effectiveness estimates? What evidence is missing for a full cost-utility analysis of CAD4TB in Indian PHC?", time: "3 min", detail: "This is the most important question in this session. The gaps it identifies are your search targets for Session 3. Write them down." },
        { n: "05", action: "Record your gaps", prompt: null, time: "2 min", detail: "Write down exactly what's missing: utility weights by TB disease stage, transition probabilities, standard care detection rates in Indian PHC, PHC staff time costs. These four things are what Session 3 is about." },
      ],
    },
    workedExample: {
      title: "Worked Example: Finding TB Utility Weights for India",
      context: "Your Markov model needs utility weights for TB disease stages in an Indian population. The literature gives you numbers — but are they the right numbers for your setting? Here is the complete three-tool workflow.",
      steps: [
        { tool: "Dimensions.ai", query: "tuberculosis utility weights quality of life India LMIC", result: "Returns 14 papers. Top result: Marra et al. 2004 (classic TB utility weights, widely cited in LMICs). Also surfaces 2 India-specific studies from 2018 and 2021 not in your existing reference list. The 2021 paper is from a Maharashtra community setting — close to your PHC context.", verdict: "GREEN" },
        { tool: "Claude.ai", query: "Extract utility weights by TB disease stage from this abstract. Flag any transferability concerns for a rural Indian PHC population.", result: "Extracts: active TB (untreated) 0.58 (95% CI 0.51–0.65), on treatment 0.72 (0.66–0.78), successfully treated 0.89 (0.84–0.93). Flags: 'Maharashtra urban clinic sample. Rural PHC populations may have lower baseline utility due to comorbidity burden. State this assumption explicitly and test in sensitivity analysis with ±0.10 range.'", verdict: "AMBER" },
        { tool: "NotebookLM", query: "Do any of the uploaded CAD4TB papers report patient-reported outcomes, quality of life, or utility data?", result: "No utility weight data found in uploaded papers. CAD4TB publications focus on diagnostic accuracy outcomes. Utility weight evidence must come from external TB literature — confirming your external search is necessary and justified.", verdict: "GAP CONFIRMED" },
      ],
      takeaway: "Three tools, 20 minutes: you know what utility weights to use (0.72 on-treatment), their confidence intervals, their limitations for your population, and why your external search is justified. That is a complete evidence note for one model input.",
    },
  },
  {
    id: "s3", number: "03", label: "Session 03", title: "The Workflow",
    subtitle: "From evidence gap to model input — end-to-end, live",
    color: ACCENT.s3, duration: "30 min", icon: "⬡",
    scopeNote: "PECO-F framing applied live. Session 3 in the curriculum site now embeds this app for in-context access.",
    externalLink: "https://ukubona-llc.github.io/who-reviews/ukhona/html/level1/session3.html",
    externalLabel: "Open Session 3 with embedded app →",
    context: `Session 02 mapped your tools and identified what CAD4TB's own evidence base covers. This session completes the loop: you have gaps, you have tools, now we build the workflow that fills those gaps and turns papers into model inputs. By the end, you have a reusable extraction template your whole team can use tomorrow.`,
    tools: [
      { name: "HTAIn", tag: "ICMR · FREE", url: "https://htain.dhr.gov.in/", best: "Indian HTA assessments — your cost anchor", howto: "Search: 'tuberculosis', 'NCD screening', 'primary health centre'. Download full PDF assessments. Upload to NotebookLM. Ask: 'What unit costs are reported for PHC-based TB screening? What staff time assumptions are used?'", warning: "Limited coverage outside major disease areas. TB is well-covered.", stars: 4, verdict: "Essential for India-specific cost benchmarks.", arm: "Cost-utility · BIA" },
      { name: "NHSRC / NHA", tag: "GOVT OF INDIA · FREE", url: "https://nhsrcindia.org", best: "National Health Accounts and PHC operational costs", howto: "Download the National Health Accounts reports. Search for NCD screening, diagnostic services, PHC costs. This is your standard care cost comparator — what does a sputum smear test cost the system vs a CAD4TB read?", warning: "Data lags 2–3 years. State-level variation is very high.", stars: 4, verdict: "Non-negotiable for budget impact analysis.", arm: "BIA" },
      { name: "Tufts CEVR CEA Registry", tag: "TUFTS · FREE", url: "https://cevr.tuftsmedicalcenter.org/databases/cea-registry", best: "Published cost-effectiveness ratios for benchmarking", howto: "Search 'tuberculosis screening' or 'chest X-ray AI'. Filter by LMIC. Returns published ICERs and the utility weight sources used in those studies — a shortcut to finding what values others have used.", warning: "Dominated by high-income country studies. Use for benchmarking and utility weight cross-check only.", stars: 3, verdict: "Good for ICER comparators. Not your primary cost source.", arm: "Cost-utility" },
      { name: "WHO Global TB Programme", tag: "WHO · FREE", url: "https://www.who.int/teams/global-tuberculosis-programme/data", best: "Epidemiological data and India-specific TB burden estimates", howto: "Download India country profiles. Get prevalence, incidence, treatment success rates, and case detection rates. These are your model's epidemiological inputs — non-negotiable for the Markov model structure.", warning: "Estimates not primary data. Uncertainty ranges are wide for India states.", stars: 4, verdict: "Your source for TB natural history inputs.", arm: "Cost-utility" },
    ],
    demo: {
      title: "Live Demo: End-to-End Evidence Extraction",
      steps: [
        { n: "01", action: "Name your four gaps", prompt: null, time: "2 min", detail: "From Session 02: (1) utility weights by TB disease stage — India, (2) TB progression transition probabilities — India or LMIC, (3) standard care TB detection rates in Indian PHC, (4) PHC staff time costs for screening workflow. These four gaps = four search runs." },
        { n: "02", action: "Search Gap 3 on Dimensions.ai", prompt: "tuberculosis case detection rate primary health care India standard care sputum smear", time: "5 min", detail: "Add filter: Publication Year 2015–2026. Add filter: Country = India. Download top 5 papers as PDFs." },
        { n: "03", action: "Upload to NotebookLM and extract", prompt: "What TB case detection rates under standard care are reported in Indian primary health care settings? List: the rate, the population, the study site, the year, and the method used to measure detection.", time: "4 min", detail: "NotebookLM returns a structured answer with citations. You now have your standard care comparator arm baseline evidence." },
        { n: "04", action: "Verify and contextualise with Claude", prompt: "The grant assumes 35% TB case detection under standard care in Indian PHC. I found three studies reporting 28%, 38%, and 41% from Rajasthan, MP, and UP respectively. How should I present this assumption? What sensitivity analysis range is defensible?", time: "4 min", detail: "Claude returns: base case 35%, sensitivity range 25–45%. Drafts the assumption statement. Copy that sentence. It goes directly into your methods section." },
        { n: "05", action: "Fill the extraction template", prompt: null, time: "3 min", detail: "Open the Template tab. Enter the value, the source, the quality flag, and the model input target. One paper, one row, five minutes. Repeat for each remaining gap." },
      ],
    },
    template: {
      columns: ["Paper (Author, Year)", "Evidence Type", "Value Extracted", "Population", "Setting", "India-specific?", "Quality Flag", "Model Input", "Verified by"],
      rows: [
        ["Marra et al. 2004", "Utility weight — active TB", "0.58 (0.51–0.65)", "Canada/multi-site", "Hospital", "✗ No", "AMBER", "Markov: untreated state", ""],
        ["[India 2021 study]", "Utility weight — on treatment", "0.72 (0.66–0.78)", "Maharashtra urban", "PHC-adjacent", "✓ Yes", "AMBER — urban not rural", "Markov: treatment state", ""],
        ["[Your paper]", "[Type]", "[Value ± CI]", "[Population]", "[Setting]", "[Y/N]", "[GREEN/AMBER/RED]", "[Which input]", ""],
      ],
      guide: [
        { flag: "GREEN", color: "#4ade80", meaning: "India PHC setting, published 2018+, peer-reviewed" },
        { flag: "AMBER", color: "#fb923c", meaning: "India but tertiary / LMIC but not India / older but nothing better available" },
        { flag: "RED", color: "#f87171", meaning: "High-income country only — use only if no LMIC alternative, state explicitly in limitations" },
      ],
    },
    workedExample: {
      title: "Worked Example: Standard Care Detection Rates in Indian PHC",
      context: "Your SW-CRT compares CAD4TB vs standard care. The model assumes standard care detects 35% of true TB cases in Indian PHC. You need to justify this with evidence — not guess.",
      steps: [
        { tool: "Dimensions.ai", query: "tuberculosis case detection rate primary care India rural community", result: "Returns 9 papers. Three report TB case detection rates from Indian PHC settings: 28% (Rajasthan, 2019), 38% (MP, 2021), 41% (UP, 2022). None from Chhattisgarh or Delhi specifically. Variation is driven by ASHA worker density and sputum transport infrastructure.", verdict: "AMBER — no state match but strong India evidence" },
        { tool: "Claude.ai", query: "The model assumes 35% TB case detection under standard care in Indian PHC. Three studies report 28%, 38%, and 41% from other Indian states. How should I present this assumption and what sensitivity range is appropriate?", result: "Base case: 35%. Sensitivity range: 25–45%. Assumption statement: 'We assumed 35% based on published evidence from three Indian states with comparable PHC infrastructure; state-level variation was explored across the full reported range in one-way sensitivity analysis.'", verdict: "GREEN — defensible base case with documented range" },
        { tool: "NotebookLM", query: "Do any of the uploaded CAD4TB papers report what proportion of screen-positive cases completed the full diagnostic pathway at referral centres?", result: "Two papers report referral completion data. One study from sub-Saharan Africa reports 71% referral completion among CAD4TB-flagged patients vs 34% under standard care — directionally supporting your intervention effect assumption, though not India-specific.", verdict: "AMBER — not India but directionally consistent" },
      ],
      takeaway: "You started with one number (35%) and ended with a justified base case, a documented sensitivity range, a copy-paste methods sentence, and supporting evidence from published literature. That is 30 minutes of work that makes your model defensible to a reviewer.",
    },
  },
]

// ── HEADER ────────────────────────────────────────────────────────────────────
function Header({ theme, onToggle, view, onBack, onLive, onLogout }) {
  const logoSrc = theme === "dark" ? LOGO_DARK : LOGO_LIGHT
  const showBack = view === "session" || view === "live"
  return (
    <header className="ukb-header">
      <a
        href="https://ukubona-llc.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="ukb-header-left"
        onClick={showBack ? (e) => { e.preventDefault(); onBack() } : undefined}
        style={showBack ? { cursor: "pointer" } : {}}
      >
        <img src={logoSrc} alt="Ukubona LLC" className="ukb-logo" />
        <span className="ukb-wordmark">Ukubona × WHO India</span>
      </a>
      <div className="ukb-header-right">
        {showBack && (
          <button onClick={onBack} className="ukb-back-btn">← SESSIONS</button>
        )}
        {view === "home" && (
          <button onClick={onLive} className="ukb-live-btn">▶ LIVE DEMO</button>
        )}
        <button className="ukb-theme-btn" onClick={onLogout} title="Log out" aria-label="Log out">⏻</button>
        <button className="ukb-theme-btn" onClick={onToggle} title={theme === "dark" ? "Switch to light" : "Switch to dark"} aria-label="Toggle theme">
          {theme === "dark" ? "☀" : "◑"}
        </button>
      </div>
    </header>
  )
}

// ── SHARED SMALL COMPONENTS ───────────────────────────────────────────────────
const Stars = ({ n, color }) => (
  <span style={{ color, letterSpacing: 1, fontSize: "0.85rem" }}>
    {"★".repeat(n)}{"☆".repeat(5 - n)}
  </span>
)

const VerdictBadge = ({ v }) => {
  const col = v === "GREEN" ? "#4ade80" : v === "AMBER" ? "#fb923c" : v === "GAP CONFIRMED" ? "#94a3b8" : "#f87171"
  return (
    <span style={{ fontFamily: t.mono, fontSize: "0.62rem", letterSpacing: "0.12em", color: col, border: `1px solid ${col}33`, padding: "0.18rem 0.55rem", borderRadius: 2, display: "inline-block" }}>{v}</span>
  )
}

function CopyBtn({ text, label = "Copy", size = "sm" }) {
  const [copied, setCopied] = useState(false)
  const handle = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  const fs = size === "xs" ? "0.52rem" : "0.62rem"
  const pad = size === "xs" ? "0.15rem 0.5rem" : "0.25rem 0.7rem"
  return (
    <button onClick={handle} style={{ background: copied ? "rgba(74,222,128,0.15)" : "var(--surface)", border: `1px solid ${copied ? "#4ade8055" : "var(--border)"}`, borderRadius: 3, padding: pad, fontFamily: t.mono, fontSize: fs, letterSpacing: "0.1em", color: copied ? "#4ade80" : "var(--muted)", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}>
      {copied ? "✓ Copied" : label}
    </button>
  )
}

// ── PENTAD STRIP ──────────────────────────────────────────────────────────────
function PentadStrip() {
  const [open, setOpen] = useState(null)
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      {/* Bridge sentence: explains pentad vs pipeline */}
      <div style={{ fontFamily: t.sans, fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "1rem", maxWidth: 640, opacity: 0.85 }}>
        The compression chain below is the architecture underlying the five research pipeline steps from Session 01 — not a replacement for them. Each node corresponds to a session: Tensor → the problem in full complexity, Matrix → the 20-tool landscape, Vector → the PECO-F workflow, Eigenmode → the reusable template, Scalar → the defensible decision.
      </div>
      <div style={{ fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.22em", color: "var(--muted)", marginBottom: "0.75rem", opacity: 0.6 }}>
        THE COMPRESSION CHAIN · CLICK ANY NODE
      </div>
      <div style={{ display: "flex", alignItems: "stretch", borderRadius: 8, overflow: "hidden", border: "1px solid var(--border)" }}>
        {PENTAD.map((p, i) => (
          <div key={p.node} onClick={() => setOpen(open === i ? null : i)} style={{ flex: 1, padding: "1rem 0.6rem", cursor: "pointer", borderRight: i < PENTAD.length - 1 ? "1px solid var(--border)" : "none", background: open === i ? `${p.color}12` : "var(--card)", transition: "background 0.2s", textAlign: "center" }}>
            <div style={{ fontFamily: t.mono, fontSize: "1.3rem", color: p.color, opacity: open === i ? 1 : 0.45, transition: "opacity 0.2s", lineHeight: 1 }}>{p.node}</div>
            <div style={{ fontFamily: t.mono, fontSize: "0.5rem", letterSpacing: "0.14em", color: p.color, margin: "0.3rem 0 0.2rem", opacity: open === i ? 1 : 0.7 }}>{p.label}</div>
            <div style={{ fontFamily: t.sans, fontSize: "0.62rem", color: "var(--muted)", lineHeight: 1.3 }}>{p.role}</div>
          </div>
        ))}
      </div>
      {open !== null && (
        <div style={{ background: `${PENTAD[open].color}0d`, border: `1px solid ${PENTAD[open].color}33`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "1rem 1.4rem", fontFamily: t.sans, fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7 }}>
          <span style={{ color: PENTAD[open].color, fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.14em", marginRight: 10 }}>{PENTAD[open].label.toUpperCase()} —</span>
          {PENTAD[open].detail}
        </div>
      )}
    </div>
  )
}

// ── TOOL CARD ─────────────────────────────────────────────────────────────────
function ToolCard({ tool, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(o => !o)} style={{ background: "var(--card)", border: `1px solid ${open ? color + "44" : "var(--border)"}`, borderLeft: `3px solid ${color}`, borderRadius: 6, padding: "1.1rem 1.3rem", cursor: "pointer", transition: "all 0.2s", marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <span style={{ fontFamily: t.serif, fontSize: "1.15rem", color: "var(--text)" }}>{tool.name}</span>
            <span style={{ fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.18em", color, border: `1px solid ${color}55`, padding: "0.15rem 0.45rem", borderRadius: 2 }}>{tool.tag}</span>
          </div>
          <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--muted)" }}>
            {tool.arm} · <Stars n={tool.stars} color={color} />
          </div>
        </div>
        <span style={{ color: "var(--muted)", fontSize: "0.75rem", transform: open ? "rotate(45deg)" : "none", transition: "0.2s" }}>+</span>
      </div>
      {open && (
        <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
          <div style={{ marginBottom: "0.8rem" }}><div style={{ fontFamily: t.mono, fontSize: "0.58rem", color, letterSpacing: "0.14em", marginBottom: 4 }}>BEST FOR</div><div style={{ fontFamily: t.sans, fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.5 }}>{tool.best}</div></div>
          <div style={{ marginBottom: "0.8rem" }}><div style={{ fontFamily: t.mono, fontSize: "0.58rem", color, letterSpacing: "0.14em", marginBottom: 4 }}>HOW TO USE IT</div><div style={{ fontFamily: t.sans, fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{tool.howto}</div></div>
          <div style={{ marginBottom: "0.8rem" }}><div style={{ fontFamily: t.mono, fontSize: "0.58rem", color: "#f87171", letterSpacing: "0.14em", marginBottom: 4 }}>⚠ LIMITATION</div><div style={{ fontFamily: t.sans, fontSize: "0.82rem", color: "rgba(248,113,113,0.75)", lineHeight: 1.5 }}>{tool.warning}</div></div>
          <div style={{ background: `${color}0d`, border: `1px solid ${color}22`, borderRadius: 4, padding: "0.6rem 0.9rem", fontFamily: t.sans, fontSize: "0.83rem", color, lineHeight: 1.5, marginBottom: "0.8rem" }}>{tool.verdict}</div>
          <a href={tool.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ fontFamily: t.mono, fontSize: "0.6rem", letterSpacing: "0.12em", color, textDecoration: "none", borderBottom: `1px solid ${color}55`, paddingBottom: 1 }}>OPEN TOOL ↗</a>
        </div>
      )}
    </div>
  )
}

function DemoStep({ step, color, active, onClick }) {
  return (
    <div onClick={onClick} style={{ display: "flex", gap: "1.2rem", cursor: "pointer", background: active ? `${color}0a` : "transparent", border: `1px solid ${active ? color + "33" : "transparent"}`, borderRadius: 6, padding: "1rem 1.1rem", marginBottom: 6, transition: "all 0.2s" }}>
      <div style={{ fontFamily: t.mono, fontSize: "1.4rem", color: active ? color : "var(--muted)", fontWeight: 300, minWidth: 36, transition: "color 0.2s" }}>{step.n}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: active ? 10 : 0 }}>
          <div style={{ fontFamily: t.sans, fontSize: "0.92rem", fontWeight: 600, color: active ? "var(--text)" : "var(--muted)", transition: "color 0.2s" }}>{step.action}</div>
          <span style={{ fontFamily: t.mono, fontSize: "0.55rem", color: "var(--muted)", letterSpacing: "0.1em" }}>{step.time}</span>
        </div>
        {active && (
          <div>
            {step.prompt && (
              <div style={{ background: "var(--surface)", border: `1px solid ${color}33`, borderLeft: `3px solid ${color}`, borderRadius: 4, padding: "0.75rem 1rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <div style={{ fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.16em", color }}>PASTE THIS PROMPT</div>
                  <CopyBtn text={step.prompt} size="xs" />
                </div>
                <div style={{ fontFamily: t.mono, fontSize: "0.78rem", color: "var(--text)", lineHeight: 1.65, fontStyle: "italic" }}>"{step.prompt}"</div>
              </div>
            )}
            <div style={{ fontFamily: t.sans, fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65 }}>{step.detail}</div>
          </div>
        )}
      </div>
    </div>
  )
}

function WorkedStep({ step, color }) {
  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 6, padding: "1.2rem 1.4rem", marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ fontFamily: t.mono, fontSize: "0.6rem", letterSpacing: "0.18em", color, border: `1px solid ${color}44`, padding: "0.2rem 0.6rem", borderRadius: 2 }}>{step.tool.toUpperCase()}</span>
        <VerdictBadge v={step.verdict} />
      </div>
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
          <div style={{ fontFamily: t.mono, fontSize: "0.55rem", letterSpacing: "0.14em", color: "var(--muted)" }}>QUERY</div>
          <CopyBtn text={step.query} size="xs" label="Copy query" />
        </div>
        <div style={{ fontFamily: t.mono, fontSize: "0.78rem", color: "var(--text)", fontStyle: "italic", lineHeight: 1.6 }}>"{step.query}"</div>
      </div>
      <div>
        <div style={{ fontFamily: t.mono, fontSize: "0.55rem", letterSpacing: "0.14em", color: "var(--muted)", marginBottom: 5 }}>RESULT</div>
        <div style={{ fontFamily: t.sans, fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65 }}>{step.result}</div>
      </div>
    </div>
  )
}

function TemplateSection({ session }) {
  const tpl = session.template
  const color = session.color
  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontFamily: t.serif, fontSize: "1.5rem", color: "var(--text)", marginBottom: 6 }}>Evidence Extraction Template</div>
        <div style={{ fontFamily: t.sans, fontSize: "0.85rem", color: "var(--muted)" }}>Copy this into a shared Google Sheet. One row per paper. One row = one model input.</div>
      </div>
      <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: t.sans, fontSize: "0.78rem" }}>
          <thead>
            <tr>
              {tpl.columns.map(col => (
                <th key={col} style={{ background: `${color}15`, color, fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.65rem 0.8rem", border: `1px solid ${color}22`, textAlign: "left", whiteSpace: "nowrap" }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tpl.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "0.65rem 0.8rem", border: "1px solid var(--border)", color: cell.includes("AMBER") ? "#fb923c" : cell.includes("GREEN") ? "#4ade80" : cell.includes("RED") ? "#f87171" : "var(--muted)", background: i % 2 === 0 ? "var(--card)" : "var(--surface)", whiteSpace: cell.startsWith("[") ? "nowrap" : "normal" }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginBottom: "0.8rem", fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.18em", color: "var(--muted)" }}>QUALITY FLAG GUIDE</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {tpl.guide.map(g => (
          <div key={g.flag} style={{ display: "flex", alignItems: "flex-start", gap: 14, background: "var(--card)", border: `1px solid ${g.color}22`, borderLeft: `3px solid ${g.color}`, borderRadius: 4, padding: "0.7rem 1rem" }}>
            <span style={{ fontFamily: t.mono, fontSize: "0.65rem", letterSpacing: "0.12em", color: g.color, minWidth: 40 }}>{g.flag}</span>
            <span style={{ fontFamily: t.sans, fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.5 }}>{g.meaning}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── SESSION VIEW ──────────────────────────────────────────────────────────────
function SessionView({ session, onBack }) {
  const [tab, setTab] = useState("tools")
  const [activeStep, setActiveStep] = useState(0)
  const color = session.color
  const tabs = ["tools", "demo", "example", ...(session.template ? ["template"] : [])]
  const tabLabels = { tools: "🔧 Tools", demo: "🎬 Live Demo", example: "📋 Worked Example", template: "📊 Template" }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1.2rem 6rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
        <button onClick={onBack} className="ukb-nav-back" style={{ "--accent": color }}>← ALL SESSIONS</button>
        <div style={{ fontFamily: t.mono, fontSize: "0.6rem", letterSpacing: "0.2em", color }}>
          {session.icon} {session.label} · {session.duration}
        </div>
      </div>

      <div style={{ borderLeft: `4px solid ${color}`, paddingLeft: "1.8rem", marginBottom: "2.5rem" }}>
        <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.22em", color, marginBottom: 10, opacity: 0.8 }}>AI TOOLS FOR HTA LITERATURE REVIEW</div>
        <h1 style={{ fontFamily: t.serif, fontSize: "clamp(2rem,5vw,3.2rem)", color: "var(--text)", margin: "0 0 0.4rem", fontWeight: 400, lineHeight: 1.1 }}>{session.title}</h1>
        <p style={{ fontFamily: t.sans, fontSize: "1rem", color: "var(--muted)", margin: "0 0 1.2rem", lineHeight: 1.5 }}>{session.subtitle}</p>
        <p style={{ fontFamily: t.sans, fontSize: "0.87rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: 680, opacity: 0.85 }}>{session.context}</p>

        {/* Scope note + external link */}
        {session.scopeNote && (
          <div style={{ marginTop: "1rem", display: "flex", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ fontFamily: t.mono, fontSize: "0.56rem", letterSpacing: "0.1em", color: "var(--muted)", opacity: 0.65, lineHeight: 1.6, flex: 1, minWidth: 200 }}>
              ℹ {session.scopeNote}
            </div>
            {session.externalLink && (
              <a href={session.externalLink} target="_blank" rel="noopener noreferrer" style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.12em", color, border: `1px solid ${color}44`, padding: "0.3rem 0.8rem", borderRadius: 3, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0, transition: "all 0.2s" }}>
                {session.externalLabel}
              </a>
            )}
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 4, marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: 0 }}>
        {tabs.map(tb => (
          <button key={tb} onClick={() => setTab(tb)} style={{ background: "none", border: "none", borderBottom: `2px solid ${tab === tb ? color : "transparent"}`, color: tab === tb ? color : "var(--muted)", fontFamily: t.mono, fontSize: "0.65rem", letterSpacing: "0.1em", padding: "0.65rem 1rem 0.75rem", cursor: "pointer", transition: "all 0.2s", marginBottom: -1 }}>{tabLabels[tb]}</button>
        ))}
      </div>

      {tab === "tools" && (
        <div>
          <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.18em", color: "var(--muted)", marginBottom: "1rem", opacity: 0.7 }}>
            {session.id === "s2" ? `5 deep-dive tools · ${TOOLS_20.length} total in catalogue · see full comparison table at link above` : `${session.tools.length} tools · click to expand`}
          </div>
          {session.tools.map(tool => <ToolCard key={tool.name} tool={tool} color={color} />)}
        </div>
      )}
      {tab === "demo" && (
        <div>
          <div style={{ fontFamily: t.serif, fontSize: "1.5rem", color: "var(--text)", marginBottom: "0.4rem" }}>{session.demo.title}</div>
          <div style={{ fontFamily: t.sans, fontSize: "0.82rem", color: "var(--muted)", marginBottom: "1.8rem", lineHeight: 1.5 }}>Click each step to expand the prompt and detail. Run these live during the session.</div>
          {session.demo.steps.map((step, i) => (
            <DemoStep key={step.n} step={step} color={color} active={activeStep === i} onClick={() => setActiveStep(i)} />
          ))}
          <div style={{ background: `${color}08`, border: `1px solid ${color}22`, borderRadius: 6, padding: "1rem 1.3rem", marginTop: "1.5rem", fontFamily: t.sans, fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65 }}>
            <span style={{ color, fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.12em" }}>FACILITATION NOTE — </span>
            If any step stalls, move on. The goal is the workflow, not every output. They can replay this app independently after the session.
          </div>
        </div>
      )}
      {tab === "example" && (
        <div>
          <div style={{ fontFamily: t.serif, fontSize: "1.5rem", color: "var(--text)", marginBottom: "0.4rem" }}>{session.workedExample.title}</div>
          <div style={{ fontFamily: t.sans, fontSize: "0.87rem", color: "var(--muted)", marginBottom: "1.8rem", lineHeight: 1.65, maxWidth: 680 }}>{session.workedExample.context}</div>
          {session.workedExample.steps.map((step, i) => <WorkedStep key={i} step={step} color={color} />)}
          <div style={{ background: `${color}08`, border: `1px solid ${color}22`, borderLeft: `4px solid ${color}`, borderRadius: 6, padding: "1.1rem 1.4rem", marginTop: "1.5rem" }}>
            <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.14em", color, marginBottom: 8 }}>TAKEAWAY</div>
            <div style={{ fontFamily: t.sans, fontSize: "0.87rem", color: "var(--text)", lineHeight: 1.7 }}>{session.workedExample.takeaway}</div>
          </div>
        </div>
      )}
      {tab === "template" && session.template && <TemplateSection session={session} />}
    </div>
  )
}

// ── LIVE DEMO VIEW ────────────────────────────────────────────────────────────
function LiveDemoView({ onExit }) {
  const [current, setCurrent] = useState(0)
  const stepRefs = useRef([])
  const step = LIVE_STEPS[current]
  const isFirst = current === 0
  const isLast = current === LIVE_STEPS.length - 1
  const s02Steps = LIVE_STEPS.filter(s => s.session === "02")
  const s03Steps = LIVE_STEPS.filter(s => s.session === "03")

  const go = (dir) => {
    const next = current + dir
    if (next < 0 || next >= LIVE_STEPS.length) return
    setCurrent(next)
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1)
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1)
      if (e.key === "Escape") onExit()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [current]) // eslint-disable-line

  useEffect(() => {
    if (stepRefs.current[current]) {
      stepRefs.current[current].scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }, [current])

  const color = step.sessionColor
  const allPrompts = LIVE_STEPS.filter(s => s.prompt).map(s =>
    `STEP ${s.session}.${s.n} — ${s.title.toUpperCase()} (${s.tool})\n\n${s.prompt}`
  ).join("\n\n" + "─".repeat(50) + "\n\n")

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "1.5rem 1rem 4rem", display: "grid", gridTemplateColumns: "260px 1fr", gap: "2rem", alignItems: "start" }}>
      <div style={{ position: "sticky", top: "72px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
        <div style={{ padding: "0.8rem 1rem 0.4rem", borderBottom: "1px solid var(--border)" }}>
          <div style={{ fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.18em", color: ACCENT.s2, marginBottom: 6 }}>SESSION 02 · THE LANDSCAPE</div>
          {s02Steps.map((s) => {
            const globalIdx = LIVE_STEPS.indexOf(s)
            const isActive = globalIdx === current
            return (
              <div key={globalIdx} ref={el => stepRefs.current[globalIdx] = el} onClick={() => setCurrent(globalIdx)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "0.45rem 0.6rem", borderRadius: 4, marginBottom: 2, cursor: "pointer", transition: "all 0.15s", background: isActive ? `${ACCENT.s2}15` : "transparent", border: `1px solid ${isActive ? ACCENT.s2 + "33" : "transparent"}` }}>
                <span style={{ fontFamily: t.mono, fontSize: "0.7rem", color: isActive ? ACCENT.s2 : "var(--muted)", minWidth: 20, transition: "color 0.15s" }}>{s.n}</span>
                <span style={{ fontFamily: t.sans, fontSize: "0.75rem", lineHeight: 1.3, color: isActive ? "var(--text)" : "var(--muted)", transition: "color 0.15s" }}>{s.title}</span>
              </div>
            )
          })}
        </div>
        <div style={{ padding: "0.8rem 1rem 0.8rem", borderBottom: "1px solid var(--border)" }}>
          <div style={{ fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.18em", color: ACCENT.s3, marginBottom: 6 }}>SESSION 03 · THE WORKFLOW</div>
          {s03Steps.map((s) => {
            const globalIdx = LIVE_STEPS.indexOf(s)
            const isActive = globalIdx === current
            return (
              <div key={globalIdx} ref={el => stepRefs.current[globalIdx] = el} onClick={() => setCurrent(globalIdx)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "0.45rem 0.6rem", borderRadius: 4, marginBottom: 2, cursor: "pointer", transition: "all 0.15s", background: isActive ? `${ACCENT.s3}15` : "transparent", border: `1px solid ${isActive ? ACCENT.s3 + "33" : "transparent"}` }}>
                <span style={{ fontFamily: t.mono, fontSize: "0.7rem", color: isActive ? ACCENT.s3 : "var(--muted)", minWidth: 20, transition: "color 0.15s" }}>{s.n}</span>
                <span style={{ fontFamily: t.sans, fontSize: "0.75rem", lineHeight: 1.3, color: isActive ? "var(--text)" : "var(--muted)", transition: "color 0.15s" }}>{s.title}</span>
              </div>
            )
          })}
        </div>
        <div style={{ padding: "0.8rem 1rem" }}>
          <CopyBtn text={allPrompts} label="Copy all prompts" />
          <div style={{ fontFamily: t.mono, fontSize: "0.5rem", letterSpacing: "0.1em", color: "var(--muted)", marginTop: 6, lineHeight: 1.5 }}>Only steps with prompts included</div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
          <span style={{ fontFamily: t.mono, fontSize: "0.55rem", letterSpacing: "0.2em", color, border: `1px solid ${color}44`, padding: "0.2rem 0.65rem", borderRadius: 2 }}>SESSION {step.session} · {step.sessionTitle.toUpperCase()}</span>
          <span style={{ fontFamily: t.mono, fontSize: "0.55rem", color: "var(--muted)", letterSpacing: "0.1em" }}>STEP {current + 1} / {LIVE_STEPS.length}</span>
        </div>
        <div style={{ background: "var(--card)", border: `1px solid ${color}33`, borderLeft: `4px solid ${color}`, borderRadius: 8, padding: "2rem 2rem 1.8rem", marginBottom: "1.5rem", minHeight: 320 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem", gap: 16 }}>
            <div>
              <div style={{ fontFamily: t.mono, fontSize: "3rem", color, lineHeight: 1, opacity: 0.25, marginBottom: 6 }}>{step.n}</div>
              <h2 style={{ fontFamily: t.serif, fontSize: "1.8rem", color: "var(--text)", margin: 0, fontWeight: 400, lineHeight: 1.15 }}>{step.title}</h2>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              {step.toolUrl ? (
                <a href={step.toolUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", fontFamily: t.mono, fontSize: "0.6rem", letterSpacing: "0.14em", color, border: `1px solid ${color}44`, padding: "0.25rem 0.65rem", borderRadius: 3, textDecoration: "none", marginBottom: 6 }}>{step.tool} ↗</a>
              ) : (
                <span style={{ display: "inline-block", fontFamily: t.mono, fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--muted)", border: "1px solid var(--border)", padding: "0.25rem 0.65rem", borderRadius: 3, marginBottom: 6 }}>{step.tool}</span>
              )}
              <div style={{ fontFamily: t.mono, fontSize: "0.55rem", color: "var(--muted)", letterSpacing: "0.1em" }}>{step.time}</div>
            </div>
          </div>
          {step.prompt && (
            <div style={{ background: "var(--surface)", border: `1px solid ${color}33`, borderLeft: `3px solid ${color}`, borderRadius: 4, padding: "1rem 1.2rem", marginBottom: "1.2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ fontFamily: t.mono, fontSize: "0.55rem", letterSpacing: "0.18em", color }}>PASTE THIS PROMPT</div>
                <CopyBtn text={step.prompt} label="Copy prompt" />
              </div>
              <div style={{ fontFamily: t.mono, fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.7, fontStyle: "italic" }}>"{step.prompt}"</div>
            </div>
          )}
          <div style={{ fontFamily: t.sans, fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.75 }}>{step.detail}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => go(-1)} disabled={isFirst} style={{ background: "none", border: "1px solid var(--border)", borderRadius: 4, padding: "0.55rem 1.2rem", fontFamily: t.mono, fontSize: "0.65rem", letterSpacing: "0.12em", color: isFirst ? "var(--muted)" : "var(--text)", cursor: isFirst ? "not-allowed" : "pointer", opacity: isFirst ? 0.35 : 1, transition: "all 0.2s" }}>← BACK</button>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {LIVE_STEPS.map((s, i) => {
              const dotColor = s.session === "02" ? ACCENT.s2 : ACCENT.s3
              return <div key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 20 : 6, height: 6, borderRadius: 3, background: i === current ? dotColor : i < current ? dotColor + "55" : "var(--border)", cursor: "pointer", transition: "all 0.2s" }} />
            })}
          </div>
          {isLast ? (
            <button onClick={onExit} style={{ background: color, border: "none", borderRadius: 4, padding: "0.55rem 1.2rem", fontFamily: t.mono, fontSize: "0.65rem", letterSpacing: "0.12em", color: "#0b0f14", cursor: "pointer", fontWeight: 600 }}>DONE ✓</button>
          ) : (
            <button onClick={() => go(1)} style={{ background: color, border: "none", borderRadius: 4, padding: "0.55rem 1.2rem", fontFamily: t.mono, fontSize: "0.65rem", letterSpacing: "0.12em", color: "#0b0f14", cursor: "pointer", fontWeight: 600 }}>NEXT →</button>
          )}
        </div>
        <div style={{ textAlign: "center", marginTop: "1.2rem", fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.1em", color: "var(--muted)", opacity: 0.5 }}>
          ← → arrow keys to navigate · ESC to exit
        </div>
      </div>
    </div>
  )
}

// ── PASSWORD GATE ─────────────────────────────────────────────────────────────
function PasswordGate({ onUnlock }) {
  const [val, setVal] = useState("")
  const [err, setErr] = useState("")
  const [shake, setShake] = useState(false)
  const [loading, setLoad] = useState(false)
  const { login } = useAuth()
  const inputRef = useRef()
  useEffect(() => { inputRef.current?.focus() }, [])

  async function attempt() {
    if (!val.trim() || loading) return
    setLoad(true)
    const result = await login(val)
    setLoad(false)
    if (result.ok) return
    setErr(result.error || "incorrect password")
    setShake(true)
    setVal("")
    setTimeout(() => setShake(false), 500)
    setTimeout(() => setErr(""), 2500)
  }

  return (
    <div style={{ minHeight: "calc(100vh - 56px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <div style={{ width: "min(420px, 100%)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "2.5rem 2rem", textAlign: "center", animation: shake ? "shk 0.4s ease" : "none" }}>
        <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.24em", color: "var(--muted)", marginBottom: "1.2rem" }}>UKUBONA × WHO INDIA</div>
        <h1 style={{ fontFamily: t.serif, fontSize: "1.9rem", color: "var(--text)", margin: "0 0 0.4rem", fontWeight: 400, lineHeight: 1.2 }}>AI Tools for<br />Literature Review</h1>
        <p style={{ fontFamily: t.sans, fontSize: "0.82rem", color: "var(--muted)", margin: "0 0 2rem", lineHeight: 1.5 }}>Sessions 02 & 03 · HTA Evidence Workflow</p>
        <div style={{ display: "flex", gap: 8, marginBottom: err ? 8 : 16 }}>
          <input ref={inputRef} type="password" value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key === "Enter" && attempt()} placeholder="access password" disabled={loading} style={{ flex: 1, background: "var(--card)", border: `1px solid ${err ? "#f87171" : "var(--border)"}`, borderRadius: 4, padding: "0.7rem 0.9rem", color: "var(--text)", fontFamily: t.mono, fontSize: "0.8rem", outline: "none", transition: "border-color 0.2s", opacity: loading ? 0.6 : 1 }} />
          <button onClick={attempt} disabled={loading} className="ukb-enter-btn" style={{ opacity: loading ? 0.6 : 1 }}>{loading ? "…" : "ENTER"}</button>
        </div>
        {err && <div style={{ fontFamily: t.mono, fontSize: "0.62rem", color: "#f87171", letterSpacing: "0.1em", marginBottom: 12 }}>{err}</div>}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: "1.5rem" }}>
          {[ACCENT.s2, ACCENT.s3].map(c => (
            <span key={c} style={{ width: 28, height: 3, borderRadius: 2, background: c, opacity: 0.6 }} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function Home({ onSelect, onLive }) {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "3rem 1.2rem 6rem" }}>
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.26em", color: "var(--muted)", marginBottom: "2rem", opacity: 0.7 }}>UKUBONA × WHO INDIA · 2026</div>
        <h1 style={{ fontFamily: t.serif, fontSize: "clamp(2.8rem,7vw,5rem)", color: "var(--text)", margin: "0 0 0.5rem", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.01em" }}>
          AI Tools for<br /><em style={{ color: ACCENT.s2 }}>Literature</em> Review
        </h1>

        {/* Scope note: app covers Sessions 02 and 03 only */}
        <div style={{ fontFamily: t.mono, fontSize: "0.56rem", letterSpacing: "0.14em", color: "var(--muted)", margin: "0.6rem 0 0", opacity: 0.6, lineHeight: 1.7 }}>
          This app covers the practical demonstration for <span style={{ color: ACCENT.s2 }}>Session 02</span> (the tool landscape) and <span style={{ color: ACCENT.s3 }}>Session 03</span> (the PECO-F workflow). The full 5-session curriculum lives at{" "}
          <a href="https://ukubona-llc.github.io/who-reviews/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)", textDecoration: "underline" }}>who-reviews ↗</a>
        </div>

        <div style={{ width: 60, height: 2, background: `linear-gradient(to right, ${ACCENT.s2}, ${ACCENT.s3})`, margin: "1.5rem 0" }} />
        <p style={{ fontFamily: t.sans, fontSize: "1rem", color: "var(--muted)", maxWidth: 520, lineHeight: 1.7, margin: "0 0 2rem" }}>
          Two sessions. Thirty minutes each. Every tool is free.<br />Built around a real HTA workflow — TB screening in Indian PHC.
        </p>
        <button onClick={onLive} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: `linear-gradient(135deg, ${ACCENT.s2}22, ${ACCENT.s3}22)`, border: `1px solid ${ACCENT.s2}55`, borderRadius: 6, padding: "0.75rem 1.4rem", fontFamily: t.mono, fontSize: "0.7rem", letterSpacing: "0.14em", color: ACCENT.s2, cursor: "pointer", transition: "all 0.2s" }}>
          <span style={{ fontSize: "0.9rem" }}>▶</span>
          RUN LIVE DEMO — 10 STEPS ACROSS BOTH SESSIONS
        </button>
      </div>

      <PentadStrip />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px,100%),1fr))", gap: 16 }}>
        {SESSIONS.map((s, i) => (
          <div key={s.id} onClick={() => onSelect(i)} className="ukb-session-card" style={{ "--card-accent": s.color }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
              <span style={{ fontFamily: t.mono, fontSize: "3rem", color: s.color, lineHeight: 1, opacity: 0.5 }}>{s.icon}</span>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: t.mono, fontSize: "0.55rem", letterSpacing: "0.2em", color: s.color, marginBottom: 3 }}>{s.label}</div>
                <div style={{ fontFamily: t.mono, fontSize: "0.52rem", color: "var(--muted)", letterSpacing: "0.1em" }}>{s.duration}</div>
              </div>
            </div>
            <h2 style={{ fontFamily: t.serif, fontSize: "1.7rem", color: "var(--text)", margin: "0 0 0.4rem", fontWeight: 400, lineHeight: 1.15 }}>{s.title}</h2>
            <p style={{ fontFamily: t.sans, fontSize: "0.85rem", color: "var(--muted)", margin: "0 0 0.6rem", lineHeight: 1.55 }}>{s.subtitle}</p>
            {/* Scope note on card */}
            {s.scopeNote && (
              <p style={{ fontFamily: t.mono, fontSize: "0.52rem", color: "var(--muted)", opacity: 0.55, letterSpacing: "0.07em", lineHeight: 1.55, margin: "0 0 1rem" }}>{s.scopeNote}</p>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.3rem" }}>
              {[
                s.id === "s2" ? `${TOOLS_20.length} tools in catalogue` : `${s.tools.length} tools`,
                "live demo", "worked example",
                ...(s.template ? ["template"] : [])
              ].map(tag => (
                <span key={tag} style={{ fontFamily: t.mono, fontSize: "0.52rem", letterSpacing: "0.1em", color: "var(--muted)", border: "1px solid var(--border)", padding: "0.2rem 0.55rem", borderRadius: 2 }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", fontFamily: t.mono, fontSize: "0.65rem", letterSpacing: "0.12em", color: s.color }}>ENTER →</div>
          </div>
        ))}
      </div>

      {/* What's next footer — links back to full curriculum */}
      <div style={{ marginTop: "4rem", padding: "1.5rem 1.8rem", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 10 }}>
        <div style={{ fontFamily: t.mono, fontSize: "0.55rem", letterSpacing: "0.22em", color: "var(--muted)", marginBottom: "0.9rem", opacity: 0.6 }}>WHAT'S NEXT</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {[
            { label: "Session 01 — The Pipeline", href: "https://ukubona-llc.github.io/who-reviews/ukhona/html/level1/session1.html", note: "Audit where your review time goes" },
            { label: "Session 04 — The Protocol", href: "https://ukubona-llc.github.io/who-reviews/ukhona/html/level1/session4.html", note: "Encode PECO-F into a reusable search template" },
            { label: "Session 05 — The Brief", href: "https://ukubona-llc.github.io/who-reviews/ukhona/html/level1/session5.html", note: "Turn extraction into a policy-ready evidence brief" },
            { label: "Full curriculum", href: "https://ukubona-llc.github.io/who-reviews/", note: "5 levels · 25 sessions · all freely accessible" },
          ].map(link => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "0.8rem 1rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 6, textDecoration: "none", transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = ACCENT.s2}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
            >
              <div style={{ fontFamily: t.mono, fontSize: "0.6rem", letterSpacing: "0.1em", color: ACCENT.s2, marginBottom: 4 }}>{link.label} ↗</div>
              <div style={{ fontFamily: t.sans, fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.5 }}>{link.note}</div>
            </a>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ fontFamily: t.mono, fontSize: "0.58rem", letterSpacing: "0.12em", color: "var(--muted)", lineHeight: 2, opacity: 0.7 }}>
          All tools listed are free to use. No API keys required. NotebookLM requires a Google account. Claude.ai requires a free Anthropic account.
        </div>
      </div>
    </div>
  )
}

// ── ROOT APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const { status, logout } = useAuth()
  const [view, setView] = useState("home")
  const [activeSession, setActiveSession] = useState(null)
  const [theme, toggleTheme] = useTheme()

  useEffect(() => { document.body.style.margin = "0" }, [])

  const goHome    = () => { setView("home"); setActiveSession(null) }
  const goSession = (i) => { setActiveSession(i); setView("session") }
  const goLive    = () => setView("live")

  if (status === null) return null

  return (
    <>
      <Header theme={theme} onToggle={toggleTheme} view={status ? view : "gate"} onBack={goHome} onLive={goLive} onLogout={logout} />
      <div className="ukb-page">
        {!status
          ? <PasswordGate onUnlock={() => {}} />
          : view === "live"
            ? <LiveDemoView onExit={goHome} />
            : view === "session" && activeSession !== null
              ? <SessionView session={SESSIONS[activeSession]} onBack={goHome} />
              : <Home onSelect={goSession} onLive={goLive} />
        }
      </div>
    </>
  )
}
```

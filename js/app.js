/* Prépa Ingénieur — moteur de la plateforme.
   Le contenu vit dans data/*.js (window.CHAPITRES). Ce fichier n'a pas besoin d'être modifié pour ajouter un chapitre. */
(function () {
  'use strict';

  var MAT = {
    maths:   { nom: 'Mathématiques', color: 'var(--maths)', desc: 'Programme complet de la Seconde aux maths expertes, puis supérieur et avancé.' },
    physique:{ nom: 'Physique', color: 'var(--meca)', desc: 'Mécanique, électricité, ondes, optique, thermodynamique et physique nucléaire.' },
    chimie:  { nom: 'Chimie', color: 'var(--elec)', desc: 'Matière, solutions, réactions, oxydoréduction, acide-base, cinétique, chimie organique.' },
    crypto:  { nom: 'Cryptographie', color: 'var(--crypto)', desc: 'Des chiffrements historiques à RSA, Diffie-Hellman et au hachage.' }
  };
  var ORDER = ['maths', 'physique', 'chimie', 'crypto'];
  var NIV = ['Seconde', 'Première', 'Terminale', 'Maths expertes', 'Initiation', 'Intermédiaire', 'Supérieur', 'Avancé'];
  var CLASSES = [
    { id: 'Seconde', label: 'Seconde', niv: ['Seconde'] },
    { id: 'Première', label: 'Première', niv: ['Première'] },
    { id: 'Terminale', label: 'Terminale', niv: ['Terminale'] },
    { id: 'Maths expertes', label: 'Maths expertes', niv: ['Maths expertes'] },
    { id: 'Sup', label: 'Supérieur et avancé', niv: ['Supérieur', 'Avancé'] },
    { id: 'Crypto', label: 'Cryptographie', mat: 'crypto' }
  ];
  var DIFF = { 1: 'Facile', 2: 'Moyen', 3: 'Difficile' };

  var CH = (window.CHAPITRES || []).map(function (c, i) { c._i = i; return c; }).sort(function (a, b) {
    return (ORDER.indexOf(a.matiere) - ORDER.indexOf(b.matiere)) || (NIV.indexOf(a.niveau) - NIV.indexOf(b.niveau)) || (a._i - b._i);
  });
  /* Ajustements d'ordre entre fichiers : [chapitre à déplacer, chapitre de référence, 'avant' | 'apres'] */
  [['calcul-base', 'nombres-intervalles', 'avant'], ['integrales', 'primitives-equadiff-tle', 'apres']].forEach(function (r) {
    var a = -1, b = -1;
    CH.forEach(function (c, i) { if (c.id === r[0]) a = i; });
    if (a < 0) return;
    var item = CH.splice(a, 1)[0];
    CH.forEach(function (c, i) { if (c.id === r[1]) b = i; });
    if (b < 0) { CH.splice(a, 0, item); return; }
    CH.splice(r[2] === 'avant' ? b : b + 1, 0, item);
  });
  var homeClass = 'Seconde';

  var KEY = 'prepa-ingenieur-progress-v1';
  var done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { done = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) { /* stockage indisponible */ } }

  var $main = document.getElementById('main');
  var $nav = document.getElementById('nav');
  var $search = document.getElementById('search');
  var $side = document.getElementById('sidebar');
  var $menu = document.getElementById('menuBtn');
  var $gp = document.getElementById('globalProgress');

  function byId(id) { for (var i = 0; i < CH.length; i++) if (CH[i].id === id) return CH[i]; return null; }
  function exId(c, i) { return c.id + '-' + i; }
  function chapDone(c) { var n = 0; (c.exos || []).forEach(function (_, i) { if (done[exId(c, i)]) n++; }); return n; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]; }); }

  function typeset(el) {
    var MJ = window.MathJax;
    if (MJ && MJ.startup && MJ.startup.promise && MJ.typesetPromise) {
      MJ.startup.promise.then(function () { return MJ.typesetPromise([el]); }).catch(function () {});
    } else {
      setTimeout(function () { typeset(el); }, 250);
    }
  }

  /* ---------- Navigation latérale ---------- */
  var openGroups = {};
  function renderNav(filter) {
    var q = (filter || '').trim().toLowerCase();
    var current = byId(location.hash.slice(1));
    var html = '';
    ORDER.forEach(function (m) {
      var list = CH.filter(function (c) {
        if (c.matiere !== m) return false;
        if (!q) return true;
        var hay = (c.titre + ' ' + c.resume + ' ' + (c.motscles || '') + ' ' + c.niveau).toLowerCase();
        return hay.indexOf(q) !== -1;
      });
      if (!list.length) return;
      var t = 0, n = 0; list.forEach(function (c) { t += c.exos.length; n += chapDone(c); });
      var open = q || openGroups[m] || (current && current.matiere === m);
      html += '<details class="nav-group" data-m="' + m + '" style="--mc:' + MAT[m].color + '"' + (open ? ' open' : '') + '><summary><h3>' + MAT[m].nom + '</h3><small>' + n + '/' + t + '</small></summary>';
      NIV.forEach(function (niv) {
        var sub = list.filter(function (c) { return c.niveau === niv; });
        if (!sub.length) return;
        html += '<div class="nav-level">' + niv + '</div>';
        sub.forEach(function (c) {
          var k = chapDone(c), tt = c.exos.length;
          html += '<a class="nav-link' + (current && c.id === current.id ? ' active' : '') + (k === tt && tt ? ' done' : '') + '" href="#' + c.id + '"><span>' + esc(c.titre) + '</span><small>' + k + '/' + tt + '</small></a>';
        });
      });
      html += '</details>';
    });
    $nav.innerHTML = html || '<p class="ex-count">Aucun chapitre ne correspond.</p>';
    $nav.querySelectorAll('details').forEach(function (d) {
      d.addEventListener('toggle', function () { openGroups[d.getAttribute('data-m')] = d.open; });
    });

    var tot = 0, ok = 0;
    CH.forEach(function (c) { tot += c.exos.length; ok += chapDone(c); });
    var pct = tot ? Math.round(ok / tot * 100) : 0;
    $gp.innerHTML = '<span>' + ok + ' exercices réussis sur ' + tot + ' (' + pct + ' %)</span><div class="bar"><i style="width:' + pct + '%"></i></div>';
  }

  /* ---------- Accueil ---------- */
  function classChapters(cl, m) {
    return CH.filter(function (c) {
      if (cl.mat) return c.matiere === cl.mat && (!m || m === cl.mat);
      return c.matiere === m && cl.niv.indexOf(c.niveau) !== -1;
    });
  }

  function renderClassGrid() {
    var cl = CLASSES.filter(function (x) { return x.id === homeClass; })[0];
    var h = '';
    var mats = cl.mat ? [cl.mat] : ORDER.filter(function (m) { return m !== 'crypto'; });
    mats.forEach(function (m) {
      var list = classChapters(cl, m);
      if (!list.length) return;
      var t = 0, n = 0; list.forEach(function (c) { t += c.exos.length; n += chapDone(c); });
      h += '<div class="subject" style="--mc:' + MAT[m].color + '"><h3>' + MAT[m].nom + '</h3><p class="meta">' + list.length + ' chapitres · ' + n + '/' + t + ' exercices réussis</p><ol>';
      list.forEach(function (c) {
        h += '<li><a href="#' + c.id + '">' + esc(c.titre) + '</a>' + (cl.niv && cl.niv.length > 1 ? ' <span class="meta">' + c.niveau + '</span>' : '') + (c.domaine ? ' <span class="meta">' + c.domaine + '</span>' : '') + '</li>';
      });
      h += '</ol></div>';
    });
    return h;
  }

  function renderHome() {
    var nCh = CH.length, nEx = 0; CH.forEach(function (c) { nEx += c.exos.length; });
    var h = '<div class="page">';
    h += '<section class="hero"><h1>Remise à niveau scientifique</h1>' +
      '<p>Maths (jusqu’aux maths expertes), physique, chimie et cryptographie, de la Seconde au niveau école d’ingénieur : ' + nCh + ' chapitres et ' + nEx + ' exercices. Chaque chapitre explique la notion, donne les formules avec <b>quand</b> les utiliser et <b>pourquoi pas une autre</b>, puis propose des exercices du facile au difficile, corrigés étape par étape.</p></section>';

    h += '<section class="panel"><h2>Programme par classe</h2><div class="filters class-tabs" role="tablist" aria-label="Choisir une classe">';
    CLASSES.forEach(function (cl) {
      h += '<button class="chip" type="button" role="tab" data-class="' + cl.id + '" aria-pressed="' + (cl.id === homeClass) + '">' + cl.label + '</button>';
    });
    h += '</div><div class="subjects class-grid" id="classGrid">' + renderClassGrid() + '</div></section>';

    h += '<section class="panel"><h2>La méthode à appliquer sur chaque exercice</h2><ol class="steps">' +
      '<li><div><b>Lire et traduire</b>Réécris l’énoncé avec des symboles : ce qui est donné (avec unités) et ce qui est demandé.</div></li>' +
      '<li><div><b>Faire un schéma</b>Courbe, forces, circuit, tableau d’avancement… La plupart des blocages viennent d’un problème qu’on n’a pas « vu ».</div></li>' +
      '<li><div><b>Choisir l’outil</b>Demande-toi : « quelle formule relie ce que j’ai à ce que je cherche ? » Chaque fiche formule te dit dans quelle situation l’utiliser.</div></li>' +
      '<li><div><b>Calculer en lettres d’abord</b>Garde les symboles jusqu’au bout, remplace par les nombres à la fin. Moins d’erreurs, et tu peux vérifier les unités.</div></li>' +
      '<li><div><b>Vérifier</b>Unité correcte ? Ordre de grandeur réaliste ? Signe logique ? Cas limite cohérent ?</div></li>' +
      '</ol></section>';

    h += '<section class="panel"><h2>Comment progresser</h2><div class="prose">' +
      '<ol><li>Commence par la classe où tu te sens à l’aise, même si c’est la Seconde : les bases rendent tout le reste plus facile.</li>' +
      '<li>Dans chaque chapitre : lis « À quoi ça sert » et le cours, puis les fiches formules, puis l’exemple résolu.</li>' +
      '<li>Fais les exercices dans l’ordre. Ne passe au chapitre suivant que lorsque tu réussis les exercices « Moyen » sans regarder la solution.</li>' +
      '<li>Maths et physique avancent ensemble : dérivées avant la cinématique, exponentielle avant le circuit RC, équations différentielles avant les oscillateurs.</li></ol>' +
      '<p><b>Règle d’or :</b> essaie chaque exercice au moins 10 minutes avant d’ouvrir l’indice, et refais-le seul le lendemain.</p></div></section>';
    h += '</div>';
    $main.innerHTML = h;
    $main.querySelectorAll('[data-class]').forEach(function (b) {
      b.addEventListener('click', function () {
        homeClass = b.getAttribute('data-class');
        $main.querySelectorAll('[data-class]').forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        var g = document.getElementById('classGrid');
        g.innerHTML = renderClassGrid();
        typeset(g);
      });
    });
    typeset($main);
  }

  /* ---------- Chapitre ---------- */
  function stepsList(steps) {
    return '<ol class="solution-steps">' + steps.map(function (s, i) {
      return '<li><span class="lbl">Étape ' + (i + 1) + '</span>' + s + '</li>';
    }).join('') + '</ol>';
  }

  function renderChapter(c) {
    var idx = CH.indexOf(c);
    var mc = MAT[c.matiere].color;
    var h = '<div class="page" style="--mc:' + mc + '">';
    h += '<header class="chap-head"><div class="crumbs"><span>' + MAT[c.matiere].nom + '</span><span>·</span><span>' + c.niveau + '</span>' + (c.domaine ? '<span>·</span><span>' + c.domaine + '</span>' : '') + '</div>' +
      '<h1>' + esc(c.titre) + '</h1><p>' + c.resume + '</p>' +
      '<nav class="toc" aria-label="Sections du chapitre"><a href="#" data-go="s-pourquoi">Pourquoi</a><a href="#" data-go="s-cours">Cours</a><a href="#" data-go="s-formules">Formules</a><a href="#" data-go="s-methode">Méthode</a><a href="#" data-go="s-exemple">Exemple</a><a href="#" data-go="s-pieges">Pièges</a><a href="#" data-go="s-exos">Exercices (' + c.exos.length + ')</a></nav></header>';

    h += '<section class="section" id="s-pourquoi"><h2><span class="num">01</span>À quoi ça sert</h2><div class="why prose">' + c.pourquoi + '</div></section>';
    h += '<section class="section" id="s-cours"><h2><span class="num">02</span>Le cours</h2><div class="prose">' + c.cours + '</div></section>';

    h += '<section class="section" id="s-formules"><h2><span class="num">03</span>Formules clés et quand les utiliser</h2><div class="formulas">';
    c.formules.forEach(function (f) {
      h += '<article class="formula"><div class="formula-top"><h3>' + f.nom + '</h3><div class="formula-eq">' + f.f + '</div></div>' +
        '<div class="formula-meta"><div><span class="tag when">Quand l’utiliser</span>' + f.quand + '</div>' +
        '<div><span class="tag not">Pourquoi pas une autre / piège</span>' + f.pas + '</div></div></article>';
    });
    h += '</div></section>';

    h += '<section class="section" id="s-methode"><h2><span class="num">04</span>Méthode type</h2><ol class="method">' +
      c.methode.map(function (m) { return '<li>' + m + '</li>'; }).join('') + '</ol></section>';

    h += '<section class="section" id="s-exemple"><h2><span class="num">05</span>Exemple résolu et commenté</h2><div class="example"><div class="statement">' + c.exemple.e + '</div>' +
      stepsList(c.exemple.s) + '<div class="answer"><b>Résultat :</b> ' + c.exemple.r + '</div></div></section>';

    h += '<section class="section" id="s-pieges"><h2><span class="num">06</span>Les pièges classiques</h2><ul class="traps">' +
      c.pieges.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></section>';

    h += '<section class="section" id="s-exos"><h2><span class="num">07</span>Exercices</h2>' +
      '<div class="ex-tools"><div class="filters" role="group" aria-label="Filtrer par difficulté">' +
      '<button class="chip" type="button" data-f="0" aria-pressed="true">Tous</button>' +
      '<button class="chip" type="button" data-f="1" aria-pressed="false">Facile</button>' +
      '<button class="chip" type="button" data-f="2" aria-pressed="false">Moyen</button>' +
      '<button class="chip" type="button" data-f="3" aria-pressed="false">Difficile</button></div>' +
      '<span class="ex-count" id="exCount"></span></div><div class="exercises">';
    c.exos.forEach(function (x, i) {
      var id = exId(c, i);
      h += '<article class="ex' + (done[id] ? ' solved' : '') + '" data-d="' + x.d + '" data-i="' + i + '">' +
        '<div class="ex-head"><span class="badge">' + DIFF[x.d] + '</span><h3>' + (i + 1) + '. ' + x.t + '</h3>' + (done[id] ? '<span class="ok-badge">Réussi</span>' : '') + '</div>' +
        '<div class="prose">' + x.e + '</div>';
      if (typeof x.n === 'number') {
        h += '<div class="check"><label class="sr" for="in-' + id + '">Ta réponse</label><input id="in-' + id + '" inputmode="decimal" placeholder="Ta réponse" autocomplete="off">' +
          (x.u ? '<span class="unit">' + x.u + '</span>' : '') + '<button class="btn" type="button" data-act="check">Vérifier</button><span class="feedback" aria-live="polite"></span></div>';
      }
      h += '<div class="ex-actions"><button class="btn hint-btn" type="button" data-act="hint">Indice</button>' +
        '<button class="btn" type="button" data-act="step">Solution pas à pas</button>' +
        '<button class="btn" type="button" data-act="all">Tout afficher</button>' +
        '<button class="btn primary" type="button" data-act="done">' + (done[id] ? 'Marquer non réussi' : 'J’ai réussi') + '</button></div>' +
        '<div class="slot-hint"></div><div class="slot-sol"></div></article>';
    });
    h += '</div></section>';

    var prev = CH[idx - 1], next = CH[idx + 1];
    h += '<nav class="pager">' + (prev ? '<a href="#' + prev.id + '"><small>Précédent</small>' + esc(prev.titre) + '</a>' : '<span></span>') +
      (next ? '<a href="#' + next.id + '" style="text-align:right"><small>Suivant</small>' + esc(next.titre) + '</a>' : '') + '</nav>';
    h += '</div>';

    $main.innerHTML = h;
    updateCount();
    typeset($main);
    bindChapter(c);
  }

  function updateCount() {
    var all = $main.querySelectorAll('.ex'), vis = 0;
    all.forEach(function (e) { if (e.style.display !== 'none') vis++; });
    var el = document.getElementById('exCount');
    if (el) el.textContent = vis + ' exercice' + (vis > 1 ? 's' : '');
  }

  function parseAnswer(s) {
    s = String(s).replace(/\s/g, '').replace(/,/g, '.').replace(/×10\^?/g, 'e');
    if (!s) return NaN;
    var m = s.match(/^(-?[\d.]+(?:e[+-]?\d+)?)\/(-?[\d.]+(?:e[+-]?\d+)?)$/i);
    if (m) return parseFloat(m[1]) / parseFloat(m[2]);
    return /^-?[\d.]+(e[+-]?\d+)?$/i.test(s) ? parseFloat(s) : NaN;
  }

  function bindChapter(c) {
    $main.querySelectorAll('.toc a').forEach(function (a) {
      a.addEventListener('click', function (ev) {
        ev.preventDefault();
        var t = document.getElementById(a.getAttribute('data-go'));
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    $main.querySelectorAll('.chip').forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.getAttribute('data-f');
        $main.querySelectorAll('.chip').forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        $main.querySelectorAll('.ex').forEach(function (e) { e.style.display = (f === '0' || e.getAttribute('data-d') === f) ? '' : 'none'; });
        updateCount();
      });
    });

    $main.querySelectorAll('.ex').forEach(function (card) {
      var i = +card.getAttribute('data-i');
      var x = c.exos[i];
      var id = exId(c, i);
      var shown = 0;
      var slotH = card.querySelector('.slot-hint');
      var slotS = card.querySelector('.slot-sol');

      function drawSol(all) {
        if (all) shown = x.s.length; else shown = Math.min(shown + 1, x.s.length);
        var html = '<div class="sol reveal">' + stepsList(x.s.slice(0, shown));
        if (shown >= x.s.length) html += '<div class="answer"><b>Réponse :</b> ' + x.r + '</div>';
        else html += '<div class="sol-nav"><button class="btn" type="button" data-act="step">Étape suivante (' + shown + '/' + x.s.length + ')</button></div>';
        html += '</div>';
        slotS.innerHTML = html;
        var nb = slotS.querySelector('[data-act="step"]');
        if (nb) nb.addEventListener('click', function () { drawSol(false); });
        typeset(slotS);
      }

      card.querySelector('[data-act="hint"]').addEventListener('click', function () {
        if (slotH.innerHTML) { slotH.innerHTML = ''; return; }
        slotH.innerHTML = '<div class="hint-box reveal"><span class="tag">Indice</span>' + x.h + '</div>';
        typeset(slotH);
      });
      card.querySelector('.ex-actions [data-act="step"]').addEventListener('click', function () { drawSol(false); });
      card.querySelector('[data-act="all"]').addEventListener('click', function () { drawSol(true); });
      card.querySelector('[data-act="done"]').addEventListener('click', function () {
        if (done[id]) delete done[id]; else done[id] = 1;
        save();
        var y = window.scrollY;
        renderChapter(c);
        renderNav($search.value);
        window.scrollTo(0, y);
      });

      var chk = card.querySelector('[data-act="check"]');
      if (chk) {
        var input = card.querySelector('input');
        var fb = card.querySelector('.feedback');
        var run = function () {
          var v = parseAnswer(input.value);
          if (isNaN(v)) { fb.className = 'feedback ko'; fb.textContent = 'Écris un nombre (ex. 3.5, 1,5, 3/2 ou 2e-3).'; return; }
          var tol = typeof x.tol === 'number' ? x.tol : 0.02;
          var ok = Math.abs(v - x.n) <= Math.max(Math.abs(x.n) * tol, 1e-9);
          fb.className = 'feedback ' + (ok ? 'ok' : 'ko');
          fb.textContent = ok ? 'Correct ! Lis quand même la correction pour vérifier ton raisonnement.' : 'Pas encore. Revois ton calcul ou ouvre l’indice.';
          if (ok && !done[id]) { done[id] = 1; save(); card.classList.add('solved'); renderNav($search.value); var b = card.querySelector('[data-act="done"]'); if (b) b.textContent = 'Marquer non réussi'; }
        };
        chk.addEventListener('click', run);
        input.addEventListener('keydown', function (e) { if (e.key === 'Enter') run(); });
      }
    });
  }

  /* ---------- Routage ---------- */
  function route() {
    var id = location.hash.slice(1);
    var c = byId(id);
    if (c) renderChapter(c); else renderHome();
    renderNav($search.value);
    $side.classList.remove('open');
    $menu.setAttribute('aria-expanded', 'false');
    window.scrollTo(0, 0);
  }

  $search.addEventListener('input', function () { renderNav($search.value); });
  $menu.addEventListener('click', function () {
    var o = $side.classList.toggle('open');
    $menu.setAttribute('aria-expanded', o ? 'true' : 'false');
  });
  window.addEventListener('hashchange', route);
  route();
})();

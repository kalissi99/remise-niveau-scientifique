/* Prépa Ingénieur — moteur de la plateforme.
   Le contenu vit dans data/*.js (window.CHAPITRES). Ce fichier n'a pas besoin d'être modifié pour ajouter un chapitre. */
(function () {
  'use strict';

  var CH = window.CHAPITRES || [];
  var MAT = {
    maths: { nom: 'Mathématiques', color: 'var(--maths)', desc: 'Le langage de toutes les sciences de l’ingénieur : calcul, fonctions, intégrales, complexes, équations différentielles.' },
    meca:  { nom: 'Mécanique', color: 'var(--meca)', desc: 'Mouvement, forces, énergie et oscillations : comprendre pourquoi les objets bougent comme ils bougent.' },
    elec:  { nom: 'Électricité', color: 'var(--elec)', desc: 'Circuits, condensateurs, bobines et régime sinusoïdal : la base de l’électronique et de l’électrotechnique.' },
    crypto: { nom: 'Cryptographie', color: 'var(--crypto)', desc: 'Des chiffrements historiques à RSA, Diffie-Hellman et au hachage : les maths qui protègent les données et les paiements.' }
  };
  var ORDER = ['maths', 'meca', 'elec', 'crypto'];
  var NIV = ['Lycée', 'Supérieur', 'Avancé'];
  var DIFF = { 1: 'Facile', 2: 'Moyen', 3: 'Difficile' };

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
  function renderNav(filter) {
    var q = (filter || '').trim().toLowerCase();
    var current = location.hash.slice(1);
    var html = '';
    ORDER.forEach(function (m) {
      var list = CH.filter(function (c) {
        if (c.matiere !== m) return false;
        if (!q) return true;
        var hay = (c.titre + ' ' + c.resume + ' ' + (c.motscles || '')).toLowerCase();
        return hay.indexOf(q) !== -1;
      });
      if (!list.length) return;
      html += '<div class="nav-group" style="--mc:' + MAT[m].color + '"><h3>' + MAT[m].nom + '</h3>';
      NIV.forEach(function (niv) {
        var sub = list.filter(function (c) { return c.niveau === niv; });
        if (!sub.length) return;
        html += '<div class="nav-level">' + niv + '</div>';
        sub.forEach(function (c) {
          var n = chapDone(c), t = (c.exos || []).length;
          html += '<a class="nav-link' + (c.id === current ? ' active' : '') + (n === t && t ? ' done' : '') + '" href="#' + c.id + '"><span>' + esc(c.titre) + '</span><small>' + n + '/' + t + '</small></a>';
        });
      });
      html += '</div>';
    });
    $nav.innerHTML = html || '<p class="ex-count">Aucun chapitre ne correspond.</p>';

    var tot = 0, ok = 0;
    CH.forEach(function (c) { tot += (c.exos || []).length; ok += chapDone(c); });
    var pct = tot ? Math.round(ok / tot * 100) : 0;
    $gp.innerHTML = '<span>' + ok + ' exercices réussis sur ' + tot + ' (' + pct + ' %)</span><div class="bar"><i style="width:' + pct + '%"></i></div>';
  }

  /* ---------- Accueil ---------- */
  function renderHome() {
    var h = '<div class="page">';
    h += '<section class="hero"><h1>Devenir fort en maths, physique et cryptographie</h1>' +
      '<p>Maths, mécanique, électricité et cryptographie, du lycée jusqu\u2019au niveau école d\u2019ingénieur. Chaque chapitre explique la notion, donne les formules avec <b>quand</b> les utiliser et <b>pourquoi pas une autre</b>, puis propose des exercices du facile au difficile, corrigés étape par étape.</p></section>';

    h += '<section class="panel"><h2>La méthode à appliquer sur chaque exercice</h2><ol class="steps">' +
      '<li><div><b>Lire et traduire</b>Réécris l’énoncé avec des symboles : ce qui est donné (avec unités) et ce qui est demandé.</div></li>' +
      '<li><div><b>Faire un schéma</b>Courbe, forces, circuit… 80 % des blocages viennent d’un problème qu’on n’a pas « vu ».</div></li>' +
      '<li><div><b>Choisir l’outil</b>Demande-toi : « quelle formule relie ce que j’ai à ce que je cherche ? » Chaque fiche formule de la plateforme te dit dans quelle situation l’utiliser.</div></li>' +
      '<li><div><b>Calculer en lettres d’abord</b>Garde les symboles jusqu’au bout, remplace par les nombres à la fin. Moins d’erreurs, et tu peux vérifier les unités.</div></li>' +
      '<li><div><b>Vérifier</b>Unité correcte ? Ordre de grandeur réaliste ? Signe logique ? Cas limite cohérent ?</div></li>' +
      '</ol></section>';

    h += '<section class="subjects">';
    ORDER.forEach(function (m) {
      var list = CH.filter(function (c) { return c.matiere === m; });
      var t = 0, n = 0; list.forEach(function (c) { t += (c.exos || []).length; n += chapDone(c); });
      h += '<div class="subject" style="--mc:' + MAT[m].color + '"><h3>' + MAT[m].nom + '</h3><p class="meta">' + list.length + ' chapitres · ' + n + '/' + t + ' exercices</p>' +
        '<p style="margin:0;font-size:14.5px;color:var(--muted)">' + MAT[m].desc + '</p><ol>';
      list.forEach(function (c) { h += '<li><a href="#' + c.id + '">' + esc(c.titre) + '</a> <span class="meta">' + c.niveau + '</span></li>'; });
      h += '</ol></div>';
    });
    h += '</section>';

    h += '<section class="panel"><h2>Parcours conseillé si tu pars de loin</h2><div class="prose">' +
      '<p>Les trois matières sont liées : la mécanique et l’électricité <i>utilisent</i> les maths. Suis cet ordre et ne passe au chapitre suivant que quand tu réussis les exercices « Moyen » sans regarder la solution.</p>' +
      '<ol><li>Maths : Calcul de base → Second degré → Trigonométrie → Dérivées → Exponentielle et logarithme</li>' +
      '<li>Mécanique : Cinématique → Lois de Newton → Énergie</li>' +
      '<li>Électricité : Lois de base → Associations et diviseurs → Condensateur et circuit RC</li>' +
      '<li>Niveau supérieur : Intégrales → Complexes → Équations différentielles → Oscillateurs → RLC → Régime sinusoïdal</li>' +
      '<li>Cryptographie : Chiffrements classiques → Arithmétique modulaire → XOR et symétrique → RSA → Diffie-Hellman → Hachage</li>' +
      '<li>Niveau avancé : Probabilités → Diagonalisation → Fourier → Laplace</li></ol>' +
      '<p><b>Règle d’or :</b> essaie chaque exercice au moins 10 minutes avant d’ouvrir l’indice, et refais-le seul le lendemain.</p></div></section>';
    h += '</div>';
    $main.innerHTML = h;
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
    h += '<header class="chap-head"><div class="crumbs"><span>' + MAT[c.matiere].nom + '</span><span>·</span><span>' + c.niveau + '</span></div>' +
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

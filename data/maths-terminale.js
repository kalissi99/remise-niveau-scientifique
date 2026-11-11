/* MATHÉMATIQUES — TERMINALE SPÉCIALITÉ (analyse) */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  {
    id: 'recurrence-limites-suites', matiere: 'maths', niveau: 'Terminale',
    titre: 'Récurrence et limites de suites',
    resume: 'Raisonnement par récurrence, convergence, théorèmes de comparaison et des gendarmes, suites monotones bornées.',
    motscles: 'récurrence limite suite convergence gendarmes monotone bornée',
    pourquoi: T`<p>La récurrence est la méthode pour prouver qu'une propriété est vraie « pour tout $n$ » : correction d'un algorithme, formule de somme. Les limites de suites disent vers quoi tend un processus itératif (algorithme numérique, modèle de population, calcul approché).</p>`,
    cours: T`<h4>Récurrence</h4><p>Pour prouver $P(n)$ pour tout $n\ge n_0$ : <b>initialisation</b> ($P(n_0)$ vraie) puis <b>hérédité</b> (si $P(n)$ vraie alors $P(n+1)$ vraie). Image : les dominos.</p>
<h4>Limites</h4><p>$u_n\to\ell$ (convergente) si $u_n$ finit par rester aussi près qu'on veut de $\ell$. Sinon divergente (vers $\pm\infty$ ou sans limite).</p>
<h4>Théorèmes</h4><ul><li>Comparaison : si $u_n\ge v_n$ et $v_n\to+\infty$ alors $u_n\to+\infty$.</li><li>Gendarmes : si $v_n\le u_n\le w_n$ et $v_n,w_n\to\ell$, alors $u_n\to\ell$.</li><li>Toute suite croissante majorée converge (décroissante minorée aussi).</li><li>$q^n\to0$ si $|q|<1$, $\to+\infty$ si $q>1$.</li></ul>
<p>Si $u_{n+1}=f(u_n)$ converge vers $\ell$ et $f$ est continue, alors $\ell=f(\ell)$.</p>`,
    formules: [
      { nom: 'Principe de récurrence', f: T`$$P(n_0)\ \text{vraie}\ \ \text{et}\ \ \big(P(n)\Rightarrow P(n+1)\big)\ \Rightarrow\ \forall n\ge n_0,\ P(n)$$`,
        quand: T`Formules explicites, inégalités, propriétés de suites définies par récurrence.`,
        pas: T`Tester quelques valeurs ne prouve rien. Et dans l'hérédité, il faut <b>utiliser</b> $P(n)$.` },
      { nom: 'Théorème des gendarmes', f: T`$$v_n\le u_n\le w_n,\ v_n\to\ell,\ w_n\to\ell\ \Rightarrow\ u_n\to\ell$$`,
        quand: T`Suites avec $\cos n$, $\sin n$, $(-1)^n$ : on les encadre par $-1$ et $1$.`,
        pas: T`Les deux gendarmes doivent avoir la <b>même</b> limite.` },
      { nom: 'Limite d’une suite récurrente', f: T`$$u_{n+1}=f(u_n),\ u_n\to\ell,\ f\text{ continue}\ \Rightarrow\ f(\ell)=\ell$$`,
        quand: T`Trouver la limite <b>après</b> avoir prouvé la convergence (monotone et bornée).`,
        pas: T`Résoudre $f(\ell)=\ell$ ne prouve pas que la suite converge : il faut d'abord le théorème de convergence monotone.` }
    ],
    methode: [
      T`Récurrence : écris clairement $P(n)$, initialise, puis hérédité en partant de $P(n)$.`,
      T`Limite : facteur dominant, opérations, ou encadrement.`,
      T`Suite récurrente : monotonie + borne (souvent par récurrence), puis point fixe.`,
      T`Vérifie avec quelques termes calculés.`
    ],
    exemple: {
      e: T`Montrer que pour tout $n\ge1$, $1+2+\dots+n=\frac{n(n+1)}2$.`,
      s: [T`Initialisation : $n=1$ : $1=\frac{1\times2}2$ ✔.`, T`Hérédité : on suppose $1+\dots+n=\frac{n(n+1)}2$.`, T`$1+\dots+n+(n+1)=\frac{n(n+1)}2+(n+1)=\frac{(n+1)(n+2)}2$ : c'est $P(n+1)$.`, T`Conclusion : vraie pour tout $n\ge1$.`],
      r: T`Formule démontrée par récurrence`
    },
    pieges: [
      T`Hérédité qui n'utilise pas l'hypothèse.`,
      T`« $u_n$ croissante donc $u_n\to+\infty$ » : faux si elle est majorée.`,
      T`Oublier la conclusion de la récurrence.`
    ],
    exos: [
      { d: 1, t: 'Facteur dominant', e: T`Calculer $\lim\frac{3n^2+1}{n^2+5}$.`,
        h: T`Garde les termes en $n^2$.`,
        s: [T`$\frac{3n^2(1+\frac1{3n^2})}{n^2(1+\frac5{n^2})}\to3$.`],
        r: T`$3$`, n: 3 },
      { d: 2, t: 'Gendarmes', e: T`Calculer $\lim\frac{\cos n}{n}$.`,
        h: T`$-1\le\cos n\le1$.`,
        s: [T`$-\frac1n\le\frac{\cos n}n\le\frac1n$.`, T`Les deux bornes tendent vers 0 : limite 0.`],
        r: T`$0$`, n: 0, tol: 0 },
      { d: 2, t: 'Formule par récurrence', e: T`$u_0=1$, $u_{n+1}=2u_n+1$. Montrer que $u_n=2^{n+1}-1$ et calculer $u_{10}$.`,
        h: T`Hérédité : $2(2^{n+1}-1)+1$.`,
        s: [T`Initialisation : $2^1-1=1=u_0$ ✔.`, T`Hérédité : $u_{n+1}=2(2^{n+1}-1)+1=2^{n+2}-1$ ✔.`, T`$u_{10}=2^{11}-1=2047$.`],
        r: T`$u_{10}=2047$`, n: 2047 },
      { d: 3, t: 'Suite récurrente convergente', e: T`$u_0=0$, $u_{n+1}=\sqrt{u_n+2}$. Montrer que $0\le u_n\le u_{n+1}\le2$, en déduire que $(u_n)$ converge et trouver sa limite.`,
        h: T`Récurrence en utilisant que $x\mapsto\sqrt{x+2}$ est croissante. Puis $\ell=\sqrt{\ell+2}$.`,
        s: [T`Initialisation : $u_0=0$, $u_1=\sqrt2$, donc $0\le u_0\le u_1\le2$ ✔.`, T`Hérédité : si $0\le u_n\le u_{n+1}\le2$, la fonction $f(x)=\sqrt{x+2}$ croissante donne $f(0)\le f(u_n)\le f(u_{n+1})\le f(2)$, soit $\sqrt2\le u_{n+1}\le u_{n+2}\le2$ ✔.`, T`Croissante et majorée par 2 : elle converge vers $\ell$.`, T`$\ell=\sqrt{\ell+2}\Rightarrow\ell^2-\ell-2=0\Rightarrow\ell=2$ (car $\ell\ge0$).`],
        r: T`$\ell=2$`, n: 2 }
    ]
  },

  {
    id: 'limites-continuite', matiere: 'maths', niveau: 'Terminale',
    titre: 'Limites de fonctions et continuité',
    resume: 'Asymptotes, formes indéterminées, croissances comparées, continuité et théorème des valeurs intermédiaires.',
    motscles: 'limite asymptote continuité valeurs intermédiaires tvi dichotomie',
    pourquoi: T`<p>Les limites décrivent le comportement d'un système « au bout d'un long moment » ou près d'une valeur critique. Le <b>théorème des valeurs intermédiaires</b> garantit qu'une équation a une solution, même quand on ne sait pas la calculer exactement : on l'approche alors par dichotomie, comme le fait un ordinateur.</p>`,
    cours: T`<h4>Asymptotes</h4><p>$\lim_{x\to\pm\infty}f(x)=\ell$ : asymptote horizontale $y=\ell$. $\lim_{x\to a}f(x)=\pm\infty$ : asymptote verticale $x=a$.</p>
<h4>Formes indéterminées</h4><p>$\infty-\infty$, $0\times\infty$, $\frac\infty\infty$, $\frac00$ : on factorise, on utilise la quantité conjuguée ou les croissances comparées ($\frac{e^x}{x^n}\to+\infty$, $\frac{\ln x}{x}\to0$).</p>
<h4>Continuité</h4><p>$f$ continue : courbe tracée « sans lever le crayon ». Les fonctions usuelles sont continues sur leur domaine.</p>
<h4>TVI</h4><p>Si $f$ est continue sur $[a;b]$, elle prend toutes les valeurs entre $f(a)$ et $f(b)$. Si de plus $f$ est <b>strictement monotone</b>, chaque valeur est prise une seule fois.</p>`,
    formules: [
      { nom: 'Corollaire du TVI', f: T`$$f\text{ continue, strictement monotone sur }[a;b],\ k\text{ entre }f(a)\text{ et }f(b)\ \Rightarrow\ \exists!\,c,\ f(c)=k$$`,
        quand: T`Prouver l'existence et l'unicité d'une solution d'équation qu'on ne sait pas résoudre exactement.`,
        pas: T`Sans stricte monotonie, il peut y avoir plusieurs solutions. Sans continuité, aucune garantie.` },
      { nom: 'Quantité conjuguée', f: T`$$\sqrt A-\sqrt B=\frac{A-B}{\sqrt A+\sqrt B}$$`,
        quand: T`Forme $\infty-\infty$ avec des racines.`,
        pas: T`Factoriser par $x$ ne suffit pas toujours avec des racines.` },
      { nom: 'Croissances comparées', f: T`$$\lim_{x\to+\infty}\frac{e^x}{x^n}=+\infty\qquad\lim_{x\to+\infty}\frac{\ln x}{x^n}=0\qquad\lim_{x\to0^+}x\ln x=0$$`,
        quand: T`Mélange d'exponentielle, puissance et logarithme.`,
        pas: T`Ne pas « simplifier » $\frac{e^x}{x}$ : aucune règle algébrique ne le fait.` }
    ],
    methode: [
      T`Remplace directement ; si forme indéterminée, transforme.`,
      T`Interprète graphiquement (asymptotes).`,
      T`TVI : continuité, monotonie stricte, valeurs aux bornes.`,
      T`Encadre la solution par dichotomie ou balayage.`
    ],
    exemple: {
      e: T`Montrer que $x^3+x-1=0$ a une unique solution $\alpha$ dans $[0;1]$.`,
      s: [T`$f(x)=x^3+x-1$ est continue (polynôme).`, T`$f'(x)=3x^2+1>0$ : strictement croissante.`, T`$f(0)=-1<0$ et $f(1)=1>0$ : 0 est entre les deux.`, T`Corollaire du TVI : solution unique. Par balayage : $f(0{,}68)<0<f(0{,}69)$, donc $\alpha\approx0{,}68$.`],
      r: T`$\alpha\approx0{,}682$`
    },
    pieges: [
      T`Oublier de justifier la continuité.`,
      T`Conclure à l'unicité sans stricte monotonie.`,
      T`Mal gérer le signe d'une limite en $a^+$ ou $a^-$.`
    ],
    exos: [
      { d: 1, t: 'Asymptote horizontale', e: T`$\lim_{x\to+\infty}\frac{2x+1}{x-3}$ ?`,
        h: T`Facteur dominant.`,
        s: [T`$\frac{2x}{x}=2$ : asymptote $y=2$.`],
        r: T`$2$`, n: 2 },
      { d: 2, t: 'Conjuguée', e: T`$\lim_{x\to+\infty}\left(\sqrt{x+1}-\sqrt x\right)$ ?`,
        h: T`Multiplie par $\sqrt{x+1}+\sqrt x$.`,
        s: [T`$=\frac{(x+1)-x}{\sqrt{x+1}+\sqrt x}=\frac1{\sqrt{x+1}+\sqrt x}$.`, T`Le dénominateur tend vers $+\infty$ : limite 0.`],
        r: T`$0$`, n: 0, tol: 0 },
      { d: 2, t: 'Continuité par morceaux', e: T`$f(x)=x^2+a$ si $x\le1$ et $f(x)=2x+3$ si $x>1$. Pour quel $a$ $f$ est-elle continue ?`,
        h: T`Les deux formules doivent donner la même valeur en 1.`,
        s: [T`À gauche : $1+a$. À droite : $5$.`, T`$1+a=5\Rightarrow a=4$.`],
        r: T`$a=4$`, n: 4 },
      { d: 3, t: 'Approcher une solution', e: T`Donner une valeur approchée à $0{,}01$ près de l'unique solution de $x^3+x-1=0$ sur $[0;1]$.`,
        h: T`Dichotomie : $f(0{,}5)<0$, $f(0{,}75)>0$…`,
        s: [T`$f(0{,}5)=-0{,}375$, $f(0{,}75)=0{,}17$ → $[0{,}5;0{,}75]$.`, T`$f(0{,}625)=-0{,}13$ → $[0{,}625;0{,}75]$ ; $f(0{,}6875)=0{,}012$ → $[0{,}625;0{,}6875]$.`, T`$f(0{,}68)=-0{,}0056$ et $f(0{,}69)=0{,}0185$ : $\alpha\in[0{,}68;0{,}69]$.`],
        r: T`$\alpha\approx0{,}68$`, n: 0.682, tol: 0.01 }
    ]
  },

  {
    id: 'convexite', matiere: 'maths', niveau: 'Terminale',
    titre: 'Dérivée seconde et convexité',
    resume: 'Fonctions convexes et concaves, points d’inflexion, inégalités obtenues grâce aux tangentes.',
    motscles: 'convexe concave dérivée seconde point d’inflexion tangente inégalité',
    pourquoi: T`<p>La convexité indique si une courbe « tourne vers le haut ou vers le bas ». En ingénierie, l'optimisation convexe garantit que le minimum trouvé est le vrai minimum. Les points d'inflexion repèrent l'instant où une croissance commence à ralentir (épidémie, ventes, charge).</p>`,
    cours: T`<h4>Définitions</h4><p>$f$ est <b>convexe</b> sur $I$ si sa courbe est au-dessus de toutes ses tangentes (et en dessous de ses cordes). <b>Concave</b> : l'inverse.</p>
<h4>Caractérisation</h4><p>$f$ convexe $\iff f'$ croissante $\iff f''\ge0$. Concave $\iff f''\le0$.</p>
<h4>Point d'inflexion</h4><p>Point où la courbe traverse sa tangente : $f''$ s'annule <b>en changeant de signe</b>.</p>
<h4>Inégalités</h4><p>Convexité + tangente donne une inégalité : $e^x\ge1+x$ (tangente en 0), $\ln x\le x-1$ (concavité, tangente en 1).</p>`,
    formules: [
      { nom: 'Critère de convexité', f: T`$$f''\ge0\text{ sur }I\iff f\text{ convexe sur }I$$`,
        quand: T`Étudier la forme d'une courbe : calcule $f''$ et son signe.`,
        pas: T`Ne pas confondre avec les variations (signe de $f'$).` },
      { nom: 'Point d’inflexion', f: T`$$f''(a)=0\ \text{et}\ f''\text{ change de signe en }a$$`,
        quand: T`Trouver où la concavité change.`,
        pas: T`$f''(a)=0$ ne suffit pas : $x^4$ a $f''(0)=0$ mais pas d'inflexion.` },
      { nom: 'Position par rapport à une tangente', f: T`$$f\text{ convexe}\Rightarrow f(x)\ge f(a)+f'(a)(x-a)$$`,
        quand: T`Démontrer une inégalité sans étudier de fonction auxiliaire.`,
        pas: T`Pour une fonction concave, l'inégalité est dans l'autre sens.` }
    ],
    methode: [
      T`Calcule $f'$ puis $f''$, factorise $f''$.`,
      T`Étudie le signe de $f''$.`,
      T`Conclus : convexe, concave, inflexion.`,
      T`Pour une inégalité : écris la tangente et utilise la position de la courbe.`
    ],
    exemple: {
      e: T`Étudier la convexité de $f(x)=x^3-3x^2$.`,
      s: [T`$f'(x)=3x^2-6x$, $f''(x)=6x-6$.`, T`$f''<0$ si $x<1$ (concave), $f''>0$ si $x>1$ (convexe).`, T`Inflexion en $x=1$, point $(1\,;-2)$.`],
      r: T`Inflexion en $(1;-2)$`
    },
    pieges: [
      T`Confondre $f'$ et $f''$.`,
      T`Oublier de vérifier le changement de signe.`,
      T`Erreur dans la dérivée d'un produit pour $f''$.`
    ],
    exos: [
      { d: 1, t: 'Dérivée seconde', e: T`$f(x)=x^4$. Calculer $f''(1)$. $f$ est-elle convexe ?`,
        h: T`$f'=4x^3$.`,
        s: [T`$f''(x)=12x^2\ge0$ : convexe sur $\mathbb R$.`, T`$f''(1)=12$.`],
        r: T`$12$ ; convexe`, n: 12 },
      { d: 2, t: 'Inflexion', e: T`Abscisse du point d'inflexion de $f(x)=x^3-6x^2+1$ ?`,
        h: T`$f''(x)=6x-12$.`,
        s: [T`$f''(x)=6x-12$ s'annule en 2 en changeant de signe.`],
        r: T`$x=2$`, n: 2 },
      { d: 2, t: 'Avec exponentielle', e: T`$f(x)=xe^x$. Abscisse du point d'inflexion ?`,
        h: T`$f'=(x+1)e^x$, puis dérive encore.`,
        s: [T`$f''(x)=e^x+(x+1)e^x=(x+2)e^x$.`, T`$e^x>0$ : signe de $x+2$, change en $-2$.`],
        r: T`$x=-2$`, n: -2 },
      { d: 3, t: 'Inégalité par convexité', e: T`Montrer que pour tout réel $x$, $e^x\ge1+x$.`,
        h: T`$\exp$ est convexe ; tangente en 0.`,
        s: [T`$(e^x)''=e^x>0$ : convexe sur $\mathbb R$.`, T`Tangente en 0 : $y=e^0+e^0(x-0)=1+x$.`, T`Une fonction convexe est au-dessus de ses tangentes : $e^x\ge1+x$.`],
        r: T`$e^x\ge1+x$ pour tout $x$` }
    ]
  },

  {
    id: 'fonctions-trigo', matiere: 'maths', niveau: 'Terminale',
    titre: 'Fonctions sinus et cosinus',
    resume: 'Périodicité, parité, dérivées, variations, équations trigonométriques et signaux sinusoïdaux.',
    motscles: 'sinus cosinus fonction période parité dérivée signal amplitude',
    pourquoi: T`<p>Tout ce qui oscille se décrit avec $\sin$ et $\cos$ : courant alternatif, son, vibrations, ondes radio. Savoir dériver $A\cos(\omega t+\varphi)$ et lire sa période est indispensable en physique dès la Terminale.</p>`,
    cours: T`<h4>Propriétés</h4><p>$\sin$ et $\cos$ sont $2\pi$-périodiques. $\cos$ est paire ($\cos(-x)=\cos x$), $\sin$ est impaire.</p>
<h4>Dérivées</h4><p>$\sin'=\cos$, $\cos'=-\sin$. $(\cos(ax+b))'=-a\sin(ax+b)$, $(\sin(ax+b))'=a\cos(ax+b)$.</p>
<h4>Variations sur $[0;\pi]$</h4><p>$\cos$ décroît de 1 à $-1$ ; $\sin$ croît de 0 à 1 sur $[0;\frac\pi2]$ puis décroît.</p>
<h4>Signal sinusoïdal</h4><p>$f(t)=A\cos(\omega t+\varphi)$ : amplitude $A$, pulsation $\omega$, période $T=\frac{2\pi}\omega$, phase $\varphi$.</p>
<p>Limite à connaître : $\lim_{x\to0}\frac{\sin x}x=1$.</p>`,
    formules: [
      { nom: 'Dérivées', f: T`$$(\sin(ax+b))'=a\cos(ax+b)\qquad(\cos(ax+b))'=-a\sin(ax+b)$$`,
        quand: T`Vitesse d'un oscillateur, variations d'une fonction trigonométrique.`,
        pas: T`N'oublie pas le facteur $a$ ni le signe moins pour le cosinus.` },
      { nom: 'Période d’un signal', f: T`$$T=\frac{2\pi}{\omega}\qquad f=\frac1T=\frac\omega{2\pi}$$`,
        quand: T`Lire la période de $A\cos(\omega t+\varphi)$.`,
        pas: T`$\varphi$ et $A$ ne changent pas la période.` },
      { nom: 'Équations', f: T`$$\cos x=\cos a\iff x=\pm a+2k\pi\qquad\sin x=\sin a\iff x=a+2k\pi\ \text{ou}\ x=\pi-a+2k\pi$$`,
        quand: T`Résoudre $\cos x=k$ ou $\sin x=k$.`,
        pas: T`La calculatrice ne donne qu'une solution : utilise le cercle pour trouver l'autre.` }
    ],
    methode: [
      T`Identifie amplitude, pulsation, phase.`,
      T`Pour dériver, applique la composée.`,
      T`Pour une équation, place les solutions sur le cercle.`,
      T`Restreins à l'intervalle demandé.`
    ],
    exemple: {
      e: T`$f(t)=3\sin(2t+\frac\pi4)$ : amplitude, période, dérivée.`,
      s: [T`Amplitude 3, $\omega=2$, $T=\frac{2\pi}2=\pi$.`, T`$f'(t)=3\times2\cos(2t+\frac\pi4)=6\cos(2t+\frac\pi4)$.`],
      r: T`$A=3$, $T=\pi$, $f'(t)=6\cos(2t+\frac\pi4)$`
    },
    pieges: [
      T`Calculatrice en degrés.`,
      T`Oublier la deuxième solution d'une équation.`,
      T`Oublier le facteur $\omega$ dans la dérivée.`
    ],
    exos: [
      { d: 1, t: 'Période', e: T`Période de $f(t)=\cos(4t)$ ?`,
        h: T`$\frac{2\pi}\omega$.`,
        s: [T`$T=\frac{2\pi}4=\frac\pi2\approx1{,}571$.`],
        r: T`$\frac\pi2$`, n: 1.571 },
      { d: 1, t: 'Dérivée', e: T`Dériver $\sin(3x)$ et calculer la valeur en 0.`,
        h: T`$(\sin(ax))'=a\cos(ax)$.`,
        s: [T`$3\cos(3x)$, valeur en 0 : 3.`],
        r: T`$3$`, n: 3 },
      { d: 2, t: 'Équation', e: T`Résoudre $\sin x=\frac{\sqrt2}2$ sur $[0;2\pi[$. Donne la plus grande solution.`,
        h: T`$\sin\frac\pi4=\frac{\sqrt2}2$.`,
        s: [T`$x=\frac\pi4$ ou $x=\pi-\frac\pi4=\frac{3\pi}4$.`],
        r: T`$\frac\pi4$ et $\frac{3\pi}4\approx2{,}356$`, n: 2.356 },
      { d: 3, t: 'Inégalité classique', e: T`Montrer que $\sin x\le x$ pour $x\ge0$.`,
        h: T`Étudie $g(x)=x-\sin x$.`,
        s: [T`$g'(x)=1-\cos x\ge0$ : $g$ croissante.`, T`$g(0)=0$, donc $g(x)\ge0$ pour $x\ge0$.`],
        r: T`$\sin x\le x$ pour $x\ge0$` },
      { d: 3, t: 'Somme de signaux', e: T`Maximum de $f(x)=\cos x+\sin x$ ?`,
        h: T`$\cos x+\sin x=\sqrt2\cos(x-\frac\pi4)$ (formule d'addition).`,
        s: [T`$\sqrt2\cos(x-\frac\pi4)=\sqrt2(\cos x\cos\frac\pi4+\sin x\sin\frac\pi4)=\cos x+\sin x$ ✔.`, T`Maximum $\sqrt2\approx1{,}414$, atteint en $x=\frac\pi4$.`],
        r: T`$\sqrt2$`, n: 1.414 }
    ]
  },

  {
    id: 'primitives-equadiff-tle', matiere: 'maths', niveau: 'Terminale',
    titre: 'Primitives et équations différentielles',
    resume: 'Calcul de primitives, équations $y′=ay$, $y′=ay+b$ et $y′=ay+f$ : le programme de Terminale.',
    motscles: 'primitive équation différentielle y′=ay+b solution particulière refroidissement',
    pourquoi: T`<p>Les équations différentielles modélisent la décharge d'un condensateur, le refroidissement d'un objet, la chute avec frottements, la croissance d'une population. Ce chapitre donne les outils exigés au bac et utilisés en physique de Terminale.</p>`,
    cours: T`<h4>Primitives</h4><p>$F'=f$. Deux primitives diffèrent d'une constante. Formes à reconnaître : $u'u^n\to\frac{u^{n+1}}{n+1}$, $\frac{u'}{u}\to\ln|u|$, $u'e^u\to e^u$, $\frac{u'}{\sqrt u}\to2\sqrt u$.</p>
<h4>Équation $y'=ay$</h4><p>Solutions $y=Ce^{ax}$.</p>
<h4>Équation $y'=ay+b$</h4><p>Solution constante $-\frac ba$, puis $y=Ce^{ax}-\frac ba$.</p>
<h4>Équation $y'=ay+f$</h4><p>Solutions = une solution particulière (donnée ou cherchée sous une forme proposée) + solutions de $y'=ay$.</p>`,
    formules: [
      { nom: 'y′ = ay + b', f: T`$$y(x)=Ce^{ax}-\frac ba$$`,
        quand: T`Coefficients constants (refroidissement, RC, chute avec frottement linéaire).`,
        pas: T`La constante $C$ se trouve avec la condition initiale <b>après</b> avoir ajouté $-\frac ba$.` },
      { nom: 'y′ = ay + f', f: T`$$y=y_p+Ce^{ax}$$`,
        quand: T`Second membre non constant ($f$ affine, exponentielle…). On cherche $y_p$ de la même forme que $f$.`,
        pas: T`Ne pas oublier la partie homogène $Ce^{ax}$.` },
      { nom: 'Primitives composées', f: T`$$\int u'u^n=\frac{u^{n+1}}{n+1}\qquad\int\frac{u'}u=\ln|u|\qquad\int u'e^u=e^u$$`,
        quand: T`Reconnaître une dérivée de composée.`,
        pas: T`Ajuste les constantes : $\int xe^{x^2}=\frac12e^{x^2}$ (il manque un facteur 2).` }
    ],
    methode: [
      T`Identifie la forme ($y'=ay$, $ay+b$, $ay+f$).`,
      T`Écris la solution générale.`,
      T`Applique la condition initiale.`,
      T`Vérifie en remplaçant dans l'équation.`
    ],
    exemple: {
      e: T`Résoudre $y'=-2y+4$ avec $y(0)=0$.`,
      s: [T`$a=-2$, $b=4$ : constante $-\frac ba=2$.`, T`$y=Ce^{-2x}+2$.`, T`$y(0)=C+2=0\Rightarrow C=-2$.`],
      r: T`$y=2-2e^{-2x}$`
    },
    pieges: [
      T`Signe de $-\frac ba$.`,
      T`Oublier la constante d'intégration.`,
      T`Mauvais coefficient dans une primitive composée.`
    ],
    exos: [
      { d: 1, t: 'Primitive', e: T`Primitive $F$ de $3x^2-4x+1$ telle que $F(0)=0$. Calculer $F(2)$.`,
        h: T`$x^3-2x^2+x$.`,
        s: [T`$F(x)=x^3-2x^2+x$.`, T`$F(2)=8-8+2=2$.`],
        r: T`$2$`, n: 2 },
      { d: 2, t: 'Croissance', e: T`Résoudre $y'=0{,}5y$, $y(0)=4$. Calculer $y(2)$.`,
        h: T`$y=4e^{0{,}5x}$.`,
        s: [T`$y(2)=4e\approx10{,}87$.`],
        r: T`$\approx10{,}87$`, n: 10.87 },
      { d: 2, t: 'Refroidissement du café', e: T`$T'=-0{,}1(T-20)$, $T(0)=80$ (°C, min). Température après 10 min ?`,
        h: T`Forme $y'=ay+b$ avec $a=-0{,}1$, $b=2$.`,
        s: [T`$T=20+Ce^{-0{,}1t}$, $C=60$.`, T`$T(10)=20+60e^{-1}\approx42{,}1$ °C.`],
        r: T`$\approx42{,}1$ °C`, n: 42.07, u: '°C' },
      { d: 3, t: 'Second membre affine', e: T`Résoudre $y'+y=2x+1$ avec $y(0)=0$ (cherche $y_p=ax+b$). Calculer $y(1)$.`,
        h: T`$a+ax+b=2x+1$.`,
        s: [T`$y_p=2x-1$ (car $a=2$, $a+b=1$).`, T`$y=Ce^{-x}+2x-1$ ; $y(0)=C-1=0\Rightarrow C=1$.`, T`$y(1)=e^{-1}+1\approx1{,}368$.`],
        r: T`$y=e^{-x}+2x-1$, $y(1)\approx1{,}368$`, n: 1.368 },
      { d: 3, t: 'Intégrale avec u′/u', e: T`Calculer $\int_0^1\frac{x}{x^2+1}dx$.`,
        h: T`$\frac{x}{x^2+1}=\frac12\cdot\frac{2x}{x^2+1}$.`,
        s: [T`Primitive : $\frac12\ln(x^2+1)$.`, T`$\frac12\ln2\approx0{,}347$.`],
        r: T`$\frac{\ln2}2\approx0{,}347$`, n: 0.3466 }
    ]
  }

  ]);
})();

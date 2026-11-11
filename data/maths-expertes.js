/* MATHÉMATIQUES EXPERTES (option de Terminale) */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  {
    id: 'complexes-geometrie', matiere: 'maths', niveau: 'Maths expertes',
    titre: 'Complexes : géométrie et racines n-ièmes',
    resume: 'Distances et angles avec les affixes, rotations, racines n-ièmes de l\u2019unité, équations z^n = a.',
    motscles: 'complexe affixe géométrie rotation racine n-ième unité module argument',
    pourquoi: T`<p>Les complexes transforment la géométrie en calcul : une rotation devient une multiplication par $e^{i\theta}$. Les racines $n$-ièmes de l'unité sont au cœur de la transformée de Fourier rapide (FFT), utilisée dans tous les téléphones, la compression audio et le traitement d'image.</p>`,
    cours: T`<h4>Géométrie</h4><p>Si $A$ et $B$ ont pour affixes $z_A$ et $z_B$ : $AB=|z_B-z_A|$ et $(\vec{AB},\vec{AC})=\arg\frac{z_C-z_A}{z_B-z_A}$.</p>
<ul><li>$\frac{z_C-z_A}{z_B-z_A}$ réel : $A,B,C$ alignés.</li><li>Imaginaire pur : $(AB)\perp(AC)$.</li><li>$=e^{\pm i\pi/3}$ : triangle équilatéral.</li></ul>
<h4>Rotation</h4><p>Rotation de centre $\Omega(\omega)$ et d'angle $\theta$ : $z'-\omega=e^{i\theta}(z-\omega)$.</p>
<h4>Racines n-ièmes</h4><p>Les solutions de $z^n=1$ sont $e^{2ik\pi/n}$, $k=0,\dots,n-1$ : sommets d'un polygone régulier. Leur somme vaut 0 ($n\ge2$).</p>`,
    formules: [
      { nom: 'Distance et angle', f: T`$$AB=|z_B-z_A|\qquad(\vec{AB},\vec{AC})=\arg\frac{z_C-z_A}{z_B-z_A}$$`,
        quand: T`Nature d'un triangle, alignement, perpendicularité.`,
        pas: T`L'ordre compte : $z_B-z_A$ correspond à $\vec{AB}$ (arrivée moins départ).` },
      { nom: 'Rotation', f: T`$$z'=\omega+e^{i\theta}(z-\omega)$$`,
        quand: T`Image d'un point par une rotation.`,
        pas: T`Rotation de centre O : simplement $z'=e^{i\theta}z$. Autre centre : ne pas oublier de translater.` },
      { nom: 'Racines n-ièmes', f: T`$$z^n=re^{i\alpha}\iff z=r^{1/n}e^{i(\alpha+2k\pi)/n},\ k=0,\dots,n-1$$`,
        quand: T`Équations $z^n=a$.`,
        pas: T`Il y a exactement $n$ solutions distinctes : ne t'arrête pas à une seule.` }
    ],
    methode: [
      T`Traduis la question géométrique en calcul d'affixes.`,
      T`Calcule le quotient $\frac{z_C-z_A}{z_B-z_A}$ et mets-le sous forme exponentielle.`,
      T`Interprète module (rapport de longueurs) et argument (angle).`,
      T`Pour $z^n=a$, écris $a$ en forme exponentielle.`
    ],
    exemple: {
      e: T`Résoudre $z^3=1$.`,
      s: [T`$1=e^{0}$, donc $z=e^{2ik\pi/3}$, $k\in\{0,1,2\}$.`, T`$1$, $j=e^{2i\pi/3}=-\frac12+i\frac{\sqrt3}2$, $j^2=\bar j$.`, T`Ce sont les sommets d'un triangle équilatéral, et $1+j+j^2=0$.`],
      r: T`$\{1,\,j,\,j^2\}$`
    },
    pieges: [
      T`Oublier des racines (il en faut $n$).`,
      T`Inverser l'ordre dans le quotient.`,
      T`Rotation autour d'un centre différent de O mal écrite.`
    ],
    exos: [
      { d: 1, t: 'Distance', e: T`$A(1+i)$, $B(4+5i)$. Calculer $AB$.`,
        h: T`$|3+4i|$.`,
        s: [T`$AB=|3+4i|=5$.`],
        r: T`$5$`, n: 5 },
      { d: 2, t: 'Triangle équilatéral', e: T`$A(0)$, $B(2)$, $C(1+i\sqrt3)$. Nature du triangle ?`,
        h: T`Calcule $\frac{z_C-z_A}{z_B-z_A}$.`,
        s: [T`$\frac{1+i\sqrt3}{2}=e^{i\pi/3}$.`, T`Module 1 : $AC=AB$ ; angle $60°$ : triangle équilatéral.`],
        r: T`Équilatéral` },
      { d: 2, t: 'Rotation', e: T`Image de $3+i$ par la rotation de centre O d'angle $\frac\pi2$. Donne la partie réelle.`,
        h: T`Multiplie par $i$.`,
        s: [T`$i(3+i)=3i-1$.`],
        r: T`$-1+3i$`, n: -1 },
      { d: 3, t: 'Racines quatrièmes', e: T`Résoudre $z^4=16$.`,
        h: T`$16=16e^{0}$, racines $2e^{ik\pi/2}$.`,
        s: [T`$z=2e^{ik\pi/2}$, $k=0,1,2,3$.`, T`$2$, $2i$, $-2$, $-2i$.`],
        r: T`$\{2,\,2i,\,-2,\,-2i\}$` },
      { d: 3, t: 'Racines d\u2019un imaginaire', e: T`Résoudre $z^3=8i$. Donne la partie réelle de la solution d'argument $\frac\pi6$.`,
        h: T`$8i=8e^{i\pi/2}$.`,
        s: [T`$z=2e^{i(\pi/6+2k\pi/3)}$.`, T`$k=0$ : $2e^{i\pi/6}=\sqrt3+i$.`, T`Les autres : $2e^{5i\pi/6}=-\sqrt3+i$ et $2e^{3i\pi/2}=-2i$.`],
        r: T`$\sqrt3+i$, $-\sqrt3+i$, $-2i$`, n: 1.732 }
    ]
  },

  {
    id: 'arithmetique-divisibilite', matiere: 'maths', niveau: 'Maths expertes',
    titre: 'Arithmétique : divisibilité et congruences',
    resume: 'Division euclidienne, congruences, restes de puissances et critères de divisibilité.',
    motscles: 'divisibilité division euclidienne congruence modulo reste puissance',
    pourquoi: T`<p>Les congruences sont le calcul « sur une horloge ». Elles servent aux codes de contrôle (IBAN, numéro de carte bancaire avec la clé de Luhn, ISBN), aux calendriers et à toute la cryptographie moderne.</p>`,
    cours: T`<h4>Divisibilité</h4><p>$b$ divise $a$ s'il existe $k$ entier avec $a=kb$. Si $d$ divise $a$ et $b$, il divise toute combinaison $au+bv$.</p>
<h4>Division euclidienne</h4><p>$a=bq+r$ avec $0\le r<b$ (reste toujours positif et strictement plus petit que $b$).</p>
<h4>Congruences</h4><p>$a\equiv b\pmod n$ si $n$ divise $a-b$. On peut additionner, multiplier, élever à une puissance des congruences de même modulo.</p>
<h4>Puissances</h4><p>Les restes de $a^k$ modulo $n$ finissent par former un <b>cycle</b> : on cherche la première puissance congrue à 1.</p>`,
    formules: [
      { nom: 'Division euclidienne', f: T`$$a=bq+r,\quad0\le r<b$$`,
        quand: T`Calculer un reste, un quotient.`,
        pas: T`Pour $a$ négatif : $-17=5\times(-4)+3$, le reste est 3 (pas $-2$).` },
      { nom: 'Compatibilité', f: T`$$a\equiv b,\ c\equiv d\pmod n\Rightarrow a+c\equiv b+d,\ ac\equiv bd,\ a^k\equiv b^k$$`,
        quand: T`Réduire les nombres avant de calculer.`,
        pas: T`On ne peut pas diviser une congruence : $2\times3\equiv2\times8\pmod{10}$ mais $3\not\equiv8$.` },
      { nom: 'Cycle des restes', f: T`$$a^p\equiv1\pmod n\Rightarrow a^{pq+r}\equiv a^r\pmod n$$`,
        quand: T`Reste d'une très grande puissance.`,
        pas: T`Il faut trouver un exposant donnant 1 (ou un cycle) avant de diviser.` }
    ],
    methode: [
      T`Réduis la base modulo $n$.`,
      T`Calcule les premières puissances jusqu'à trouver 1.`,
      T`Fais la division euclidienne de l'exposant par la longueur du cycle.`,
      T`Conclus avec le reste.`
    ],
    exemple: {
      e: T`Reste de $2^{2026}$ dans la division par 7.`,
      s: [T`$2^3=8\equiv1\pmod7$.`, T`$2026=3\times675+1$.`, T`$2^{2026}=(2^3)^{675}\times2\equiv2$.`],
      r: T`$2$`
    },
    pieges: [
      T`Reste négatif.`,
      T`Diviser une congruence.`,
      T`Mauvaise division de l'exposant.`
    ],
    exos: [
      { d: 1, t: 'Division euclidienne', e: T`Reste de 2026 divisé par 17 ?`,
        h: T`$17\times119=2023$.`,
        s: [T`$2026=17\times119+3$.`],
        r: T`$3$`, n: 3 },
      { d: 2, t: 'Grande puissance', e: T`Reste de $3^{100}$ modulo 5.`,
        h: T`$3^4=81$.`,
        s: [T`$3^4\equiv1\pmod5$.`, T`$100=4\times25$ : $3^{100}\equiv1$.`],
        r: T`$1$`, n: 1 },
      { d: 3, t: 'Dernier chiffre', e: T`Dernier chiffre de $7^{2026}$ ?`,
        h: T`Modulo 10 : 7, 9, 3, 1…`,
        s: [T`$7^1\equiv7$, $7^2\equiv9$, $7^3\equiv3$, $7^4\equiv1\pmod{10}$.`, T`$2026=4\times506+2$ : $7^{2026}\equiv7^2\equiv9$.`],
        r: T`$9$`, n: 9 },
      { d: 3, t: 'Divisibilité par 6', e: T`Montrer que $n^3-n$ est divisible par 6 pour tout entier $n$.`,
        h: T`Factorise : trois entiers consécutifs.`,
        s: [T`$n^3-n=(n-1)n(n+1)$.`, T`Parmi trois entiers consécutifs, l'un est pair et l'un est multiple de 3.`, T`Donc le produit est divisible par 2 et par 3, premiers entre eux, donc par 6.`],
        r: T`$6\mid n^3-n$` }
    ]
  },

  {
    id: 'arithmetique-pgcd', matiere: 'maths', niveau: 'Maths expertes',
    titre: 'PGCD, Bézout, Gauss et nombres premiers',
    resume: 'Algorithme d\u2019Euclide, théorèmes de Bézout et de Gauss, équations diophantiennes, nombres premiers, Fermat.',
    motscles: 'pgcd euclide bézout gauss premier diophantienne fermat décomposition',
    pourquoi: T`<p>Ces théorèmes sont exactement ceux qui font fonctionner RSA : Bézout donne la clé privée, Fermat garantit le déchiffrement, et la difficulté de décomposer en facteurs premiers assure la sécurité.</p>`,
    cours: T`<h4>PGCD</h4><p>Algorithme d'Euclide : $\text{pgcd}(a,b)=\text{pgcd}(b,r)$ où $r$ est le reste de $a$ par $b$. $a$ et $b$ premiers entre eux si $\text{pgcd}=1$.</p>
<h4>Bézout</h4><p>$a$ et $b$ premiers entre eux $\iff$ il existe $u,v$ entiers avec $au+bv=1$.</p>
<h4>Gauss</h4><p>Si $a\mid bc$ et $\text{pgcd}(a,b)=1$, alors $a\mid c$.</p>
<h4>Nombres premiers</h4><p>Infinité de premiers. Tout entier $\ge2$ se décompose de façon unique en produit de premiers. Pour tester $n$, il suffit d'essayer les premiers $\le\sqrt n$. Fermat : $p$ premier, $p\nmid a$ ⇒ $a^{p-1}\equiv1\pmod p$.</p>`,
    formules: [
      { nom: 'Théorème de Bézout', f: T`$$\text{pgcd}(a,b)=1\iff\exists u,v\in\mathbb Z,\ au+bv=1$$`,
        quand: T`Trouver un inverse modulaire, résoudre $ax+by=c$.`,
        pas: T`$(u,v)$ n'est pas unique. Pour le trouver, remonte l'algorithme d'Euclide.` },
      { nom: 'Équation diophantienne', f: T`$$ax+by=c:\ \ x=x_0+\frac bdk,\ \ y=y_0-\frac adk\quad(d=\text{pgcd}(a,b))$$`,
        quand: T`Solutions entières d'une équation linéaire.`,
        pas: T`Pas de solution si $d$ ne divise pas $c$. La forme générale se justifie avec Gauss.` },
      { nom: 'Nombre de diviseurs', f: T`$$n=p_1^{a_1}\cdots p_k^{a_k}\Rightarrow(a_1+1)\cdots(a_k+1)\text{ diviseurs}$$`,
        quand: T`Compter les diviseurs à partir de la décomposition.`,
        pas: T`N'oublie pas le $+1$ (exposant 0 possible).` }
    ],
    methode: [
      T`Euclide pour le PGCD.`,
      T`Remonte les égalités pour obtenir Bézout.`,
      T`Diophantienne : solution particulière, puis Gauss pour la solution générale.`,
      T`Vérifie en remplaçant.`
    ],
    exemple: {
      e: T`Résoudre $5x+3y=1$ dans $\mathbb Z^2$.`,
      s: [T`Solution particulière : $x_0=2$, $y_0=-3$ ($10-9=1$).`, T`$5(x-2)=-3(y+3)$ ; 5 et 3 premiers entre eux, Gauss : $3\mid x-2$.`, T`$x=2+3k$, puis $y=-3-5k$.`],
      r: T`$(2+3k\,;-3-5k)$, $k\in\mathbb Z$`
    },
    pieges: [
      T`Oublier de vérifier que $d$ divise $c$.`,
      T`Tester la primalité au-delà de $\sqrt n$ (inutile) ou en deçà (insuffisant).`,
      T`Appliquer Gauss sans vérifier que les nombres sont premiers entre eux.`
    ],
    exos: [
      { d: 1, t: 'PGCD', e: T`$\text{pgcd}(84,36)$ ?`,
        h: T`$84=2\times36+12$.`,
        s: [T`$84=2\times36+12$, $36=3\times12+0$.`],
        r: T`$12$`, n: 12 },
      { d: 1, t: 'Diviseurs', e: T`Combien de diviseurs positifs a 360 ?`,
        h: T`$360=2^3\times3^2\times5$.`,
        s: [T`$(3+1)(2+1)(1+1)=24$.`],
        r: T`$24$`, n: 24 },
      { d: 2, t: 'Coefficients de Bézout', e: T`Trouver $u,v$ avec $17u+5v=1$. Donne $v$.`,
        h: T`$17=3\times5+2$, $5=2\times2+1$.`,
        s: [T`$1=5-2\times2=5-2(17-3\times5)=7\times5-2\times17$.`, T`$u=-2$, $v=7$.`],
        r: T`$u=-2$, $v=7$`, n: 7 },
      { d: 2, t: 'Test de primalité', e: T`Pour savoir si 2027 est premier, combien de nombres premiers faut-il tester comme diviseurs ?`,
        h: T`$\sqrt{2027}\approx45$ : premiers jusqu'à 43.`,
        s: [T`Premiers $\le45$ : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, soit 14.`, T`Aucun ne divise 2027 : il est premier.`],
        r: T`$14$ ; 2027 est premier`, n: 14 },
      { d: 3, t: 'Fermat', e: T`Reste de $2^{100}$ modulo 13.`,
        h: T`$2^{12}\equiv1\pmod{13}$.`,
        s: [T`13 premier, Fermat : $2^{12}\equiv1$.`, T`$100=12\times8+4$ : $2^{100}\equiv2^4=16\equiv3$.`],
        r: T`$3$`, n: 3 },
      { d: 3, t: 'Diophantienne', e: T`Résoudre $7x-4y=3$ dans $\mathbb Z^2$.`,
        h: T`$x=1$, $y=1$ est une solution.`,
        s: [T`$7(x-1)=4(y-1)$ ; 7 et 4 premiers entre eux : $4\mid x-1$.`, T`$x=1+4k$, $y=1+7k$.`],
        r: T`$(1+4k\,;1+7k)$` }
    ]
  },

  {
    id: 'graphes-markov', matiere: 'maths', niveau: 'Maths expertes',
    titre: 'Graphes et chaînes de Markov',
    resume: 'Graphes, matrice d\u2019adjacence, nombre de chemins, graphes probabilistes et état stable.',
    motscles: 'graphe sommet arête degré matrice adjacence chemin markov transition état stable',
    pourquoi: T`<p>Réseaux informatiques, réseaux sociaux, flux de paiements entre comptes, PageRank de Google : tout est graphe. Les chaînes de Markov modélisent l'évolution d'un système aléatoire (clients qui changent d'opérateur, météo) et servent en IA et en détection de comportements anormaux.</p>`,
    cours: T`<h4>Graphes</h4><p>Sommets reliés par des arêtes (ou arcs s'ils sont orientés). Degré d'un sommet = nombre d'arêtes qui en partent. Somme des degrés $=2\times$ nombre d'arêtes.</p>
<h4>Matrice d'adjacence</h4><p>$a_{ij}=1$ si une arête relie $i$ à $j$. Le coefficient $(i,j)$ de $A^k$ est le nombre de chemins de longueur $k$ de $i$ à $j$.</p>
<h4>Chaîne de Markov</h4><p>Matrice de transition $P$ (chaque ligne a pour somme 1). Si $\pi_n$ est la loi à l'étape $n$ (vecteur ligne) : $\pi_{n+1}=\pi_nP$, donc $\pi_n=\pi_0P^n$.</p>
<h4>État stable</h4><p>$\pi=\pi P$ avec somme des coefficients égale à 1 : répartition à long terme.</p>`,
    formules: [
      { nom: 'Lemme des poignées de main', f: T`$$\sum\deg(s)=2\times\text{nombre d'arêtes}$$`,
        quand: T`Compter les arêtes, vérifier l'existence d'un graphe.`,
        pas: T`Une somme de degrés impaire est impossible.` },
      { nom: 'Évolution d\u2019une chaîne', f: T`$$\pi_{n+1}=\pi_nP\qquad\pi_n=\pi_0P^n$$`,
        quand: T`Probabilités à l'étape $n$.`,
        pas: T`$\pi$ est un vecteur <b>ligne</b> multiplié à gauche : $\pi P$, pas $P\pi$.` },
      { nom: 'État stable', f: T`$$\pi=\pi P,\qquad\sum\pi_i=1$$`,
        quand: T`Comportement à long terme.`,
        pas: T`Sans la condition $\sum\pi_i=1$, le système a une infinité de solutions.` }
    ],
    methode: [
      T`Dessine le graphe et écris la matrice (ordre des sommets fixé).`,
      T`Vérifie que chaque ligne de $P$ a pour somme 1.`,
      T`Calcule $\pi_1=\pi_0P$, $\pi_2$…`,
      T`État stable : résous $\pi=\pi P$ avec $\sum\pi_i=1$.`
    ],
    exemple: {
      e: T`Météo : soleil → soleil 0,8 ; soleil → pluie 0,2 ; pluie → soleil 0,4 ; pluie → pluie 0,6. État stable ?`,
      s: [T`$\pi_S=0{,}8\pi_S+0{,}4\pi_P$, donc $0{,}2\pi_S=0{,}4\pi_P$, soit $\pi_S=2\pi_P$.`, T`$\pi_S+\pi_P=1\Rightarrow\pi_P=\frac13$, $\pi_S=\frac23$.`],
      r: T`$\left(\frac23\,;\frac13\right)$`
    },
    pieges: [
      T`Multiplier dans le mauvais ordre.`,
      T`Lignes de $P$ dont la somme ne fait pas 1.`,
      T`Oublier la condition de normalisation.`
    ],
    exos: [
      { d: 1, t: 'Nombre d\u2019arêtes', e: T`Un graphe a 5 sommets de degrés 2, 3, 3, 2, 2. Combien d'arêtes ?`,
        h: T`Somme / 2.`,
        s: [T`$12/2=6$.`],
        r: T`$6$`, n: 6 },
      { d: 2, t: 'Chemins de longueur 2', e: T`Triangle : $A=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}$. Nombre de chemins de longueur 2 du sommet 1 à lui-même ?`,
        h: T`Coefficient $(1,1)$ de $A^2$.`,
        s: [T`$(A^2)_{11}=0+1+1=2$ (via 2 ou via 3).`],
        r: T`$2$`, n: 2 },
      { d: 2, t: 'Deux étapes', e: T`Avec la météo de l'exemple, il fait soleil aujourd'hui. Probabilité de soleil dans 2 jours ?`,
        h: T`$\pi_1=(0{,}8;0{,}2)$ puis $\pi_2$.`,
        s: [T`$\pi_2(S)=0{,}8\times0{,}8+0{,}2\times0{,}4=0{,}72$.`],
        r: T`$0{,}72$`, n: 0.72 },
      { d: 3, t: 'Opérateurs', e: T`Chaque mois, 90 % des clients de A restent chez A (10 % partent chez B) ; 70 % des clients de B restent (30 % vont chez A). Part de marché de A à long terme ?`,
        h: T`État stable : $0{,}1\pi_A=0{,}3\pi_B$.`,
        s: [T`$\pi_A=0{,}9\pi_A+0{,}3\pi_B\Rightarrow\pi_A=3\pi_B$.`, T`$\pi_A+\pi_B=1\Rightarrow\pi_A=0{,}75$.`],
        r: T`$75\,\%$`, n: 0.75 }
    ]
  }

  ]);
})();

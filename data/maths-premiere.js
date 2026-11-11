/* MATHÉMATIQUES — PREMIÈRE SPÉCIALITÉ (compléments) */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  {
    id: 'produit-scalaire', matiere: 'maths', niveau: 'Première',
    titre: 'Produit scalaire et géométrie repérée',
    resume: 'Les quatre expressions du produit scalaire, orthogonalité, Al-Kashi, vecteur normal et équation de cercle.',
    motscles: 'produit scalaire orthogonal angle projection cercle vecteur normal al-kashi',
    pourquoi: T`<p>Le produit scalaire mesure « à quel point deux vecteurs vont dans le même sens ». En physique, le <b>travail d'une force</b> est un produit scalaire : $W=\vec F\cdot\vec{AB}$. Il sert aussi à calculer des angles, prouver des perpendicularités et écrire des équations de cercles.</p>`,
    cours: T`<h4>Quatre expressions</h4><ul><li>Avec l'angle : $\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta$</li><li>En coordonnées (repère orthonormé) : $xx'+yy'$</li><li>Avec les normes : $\frac12\left(\|\vec u+\vec v\|^2-\|\vec u\|^2-\|\vec v\|^2\right)$</li><li>Par projection : $\vec{AB}\cdot\vec{AC}=\vec{AB}\cdot\vec{AH}$ où $H$ est le projeté de $C$ sur $(AB)$.</li></ul>
<h4>Orthogonalité</h4><p>$\vec u\perp\vec v\iff\vec u\cdot\vec v=0$.</p>
<h4>Géométrie repérée</h4><p>$\vec n(a;b)$ normal à une droite $\iff$ elle a pour équation $ax+by+c=0$. Cercle de centre $\Omega(a;b)$ et rayon $r$ : $(x-a)^2+(y-b)^2=r^2$.</p>`,
    formules: [
      { nom: 'Expression analytique', f: T`$$\vec u\cdot\vec v=xx'+yy'$$`,
        quand: T`Les coordonnées sont connues (le plus fréquent).`,
        pas: T`Sans coordonnées (figure géométrique pure), utilise la projection ou l'angle.` },
      { nom: 'Avec le cosinus', f: T`$$\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta\qquad\cos\theta=\frac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}$$`,
        quand: T`Normes et angle connus, ou pour <b>calculer un angle</b> à partir des coordonnées.`,
        pas: T`Le produit scalaire est un <b>nombre</b> (pas un vecteur). Il peut être négatif (angle obtus).` },
      { nom: 'Équation de cercle', f: T`$$(x-a)^2+(y-b)^2=r^2$$`,
        quand: T`Cercle connu par son centre et son rayon, ou pour reconnaître un cercle dans $x^2+y^2+\alpha x+\beta y+\gamma=0$ (forme canonique).`,
        pas: T`Si on obtient $(x-a)^2+(y-b)^2=k$ avec $k<0$, ce n'est pas un cercle (ensemble vide).` },
      { nom: 'Vecteur normal', f: T`$$\vec n(a;b)\ \text{normal}\ \Rightarrow\ ax+by+c=0$$`,
        quand: T`Droite perpendiculaire à un vecteur donné (hauteur, tangente à un cercle).`,
        pas: T`À ne pas confondre avec le vecteur directeur $(-b;a)$.` }
    ],
    methode: [
      T`Choisis l'expression adaptée aux données (coordonnées, angle, projection).`,
      T`Pour un angle : calcule produit scalaire et normes, puis $\cos\theta$.`,
      T`Pour un cercle : complète les carrés pour obtenir la forme canonique.`,
      T`Vérifie avec une figure.`
    ],
    exemple: {
      e: T`Angle entre $\vec u(1;2)$ et $\vec v(3;1)$.`,
      s: [T`$\vec u\cdot\vec v=3+2=5$.`, T`$\|\vec u\|=\sqrt5$, $\|\vec v\|=\sqrt{10}$.`, T`$\cos\theta=\frac5{\sqrt{50}}=\frac{1}{\sqrt2}$, donc $\theta=45°$.`],
      r: T`$\theta=45°$`
    },
    pieges: [
      T`Écrire le résultat comme un vecteur.`,
      T`Oublier que l'expression $xx'+yy'$ exige un repère orthonormé.`,
      T`Erreur de signe en complétant les carrés : $x^2-6x=(x-3)^2-9$.`
    ],
    exos: [
      { d: 1, t: 'Coordonnées', e: T`Calculer $\vec u(3;-1)\cdot\vec v(2;4)$.`,
        h: T`$xx'+yy'$.`,
        s: [T`$3\times2+(-1)\times4=6-4=2$.`],
        r: T`$2$`, n: 2 },
      { d: 1, t: 'Avec un angle', e: T`$\|\vec u\|=4$, $\|\vec v\|=5$, angle $60°$. Calculer $\vec u\cdot\vec v$.`,
        h: T`$\cos60°=0{,}5$.`,
        s: [T`$4\times5\times0{,}5=10$.`],
        r: T`$10$`, n: 10 },
      { d: 2, t: 'Orthogonalité', e: T`Pour quelle valeur de $m$ les vecteurs $\vec u(2;m)$ et $\vec v(3;-6)$ sont-ils orthogonaux ?`,
        h: T`Produit scalaire nul.`,
        s: [T`$6-6m=0\Rightarrow m=1$.`],
        r: T`$m=1$`, n: 1 },
      { d: 3, t: 'Reconnaître un cercle', e: T`Déterminer le centre et le rayon de l'ensemble $x^2+y^2-6x+4y-3=0$. Donne le rayon.`,
        h: T`$x^2-6x=(x-3)^2-9$ et $y^2+4y=(y+2)^2-4$.`,
        s: [T`$(x-3)^2-9+(y+2)^2-4-3=0$.`, T`$(x-3)^2+(y+2)^2=16$.`, T`Centre $(3;-2)$, rayon 4.`],
        r: T`Centre $(3;-2)$, $r=4$`, n: 4 },
      { d: 3, t: 'Travail d’une force', e: T`Une force $\vec F(30;40)$ (N) déplace un objet de $A(0;0)$ à $B(5;2)$ (m). Travail ?`,
        h: T`$W=\vec F\cdot\vec{AB}$.`,
        s: [T`$\vec{AB}(5;2)$.`, T`$W=30\times5+40\times2=230$ J.`],
        r: T`$230$ J`, n: 230, u: 'J' }
    ]
  },

  {
    id: 'proba-conditionnelles', matiere: 'maths', niveau: 'Première',
    titre: 'Probabilités conditionnelles et indépendance',
    resume: 'Probabilité « sachant », arbres pondérés, formule des probabilités totales, indépendance.',
    motscles: 'probabilité conditionnelle arbre pondéré probabilités totales indépendance',
    pourquoi: T`<p>« Sachant que l'alerte a sonné, quelle est la probabilité de fraude ? » C'est une probabilité conditionnelle. Les arbres pondérés permettent de modéliser des contrôles qualité, des tests médicaux et des détecteurs. Ce chapitre prépare directement le théorème de Bayes.</p>`,
    cours: T`<h4>Définition</h4><p>$P_A(B)=\frac{P(A\cap B)}{P(A)}$ : probabilité de $B$ quand on sait que $A$ est réalisé.</p>
<h4>Arbre pondéré</h4><p>La somme des branches issues d'un même nœud vaut 1. La probabilité d'un chemin est le <b>produit</b> des probabilités le long du chemin.</p>
<h4>Probabilités totales</h4><p>Si $A$ et $\bar A$ partitionnent l'univers : $P(B)=P(A\cap B)+P(\bar A\cap B)$ (somme des chemins menant à $B$).</p>
<h4>Indépendance</h4><p>$A$ et $B$ indépendants $\iff P(A\cap B)=P(A)\,P(B)\iff P_A(B)=P(B)$.</p>`,
    formules: [
      { nom: 'Probabilité d’un chemin', f: T`$$P(A\cap B)=P(A)\times P_A(B)$$`,
        quand: T`Lire une intersection sur un arbre.`,
        pas: T`$P(A\cap B)\neq P(A)\times P(B)$ sauf si les événements sont indépendants.` },
      { nom: 'Probabilités totales', f: T`$$P(B)=P(A)P_A(B)+P(\bar A)P_{\bar A}(B)$$`,
        quand: T`Probabilité d'un événement qui peut arriver « par plusieurs chemins ».`,
        pas: T`Il faut une partition (les cas couvrent tout et ne se chevauchent pas).` },
      { nom: 'Inverser le conditionnement', f: T`$$P_B(A)=\frac{P(A\cap B)}{P(B)}$$`,
        quand: T`On a l'arbre dans un sens et on demande le conditionnement inverse.`,
        pas: T`$P_A(B)$ et $P_B(A)$ sont en général très différents.` }
    ],
    methode: [
      T`Nomme les événements et traduis chaque donnée ($P(A)$ ou $P_A(B)$ ?).`,
      T`Construis l'arbre et complète les branches (somme = 1).`,
      T`Multiplie le long des chemins, additionne les chemins utiles.`,
      T`Pour un conditionnement inverse, divise.`
    ],
    exemple: {
      e: T`Une usine A fabrique 60 % des pièces (2 % défectueuses), une usine B 40 % (5 % défectueuses). Probabilité qu'une pièce soit défectueuse ?`,
      s: [T`$P(A\cap D)=0{,}6\times0{,}02=0{,}012$.`, T`$P(B\cap D)=0{,}4\times0{,}05=0{,}02$.`, T`Probabilités totales : $P(D)=0{,}032$.`],
      r: T`$P(D)=0{,}032$`
    },
    pieges: [
      T`Confondre « 2 % des pièces de A sont défectueuses » ($P_A(D)$) et « 2 % des pièces sont défectueuses et viennent de A » ($P(A\cap D)$).`,
      T`Oublier une branche dans les probabilités totales.`,
      T`Confondre indépendants et incompatibles.`
    ],
    exos: [
      { d: 1, t: 'Chemin', e: T`$P(A)=0{,}4$ et $P_A(B)=0{,}5$. Calculer $P(A\cap B)$.`,
        h: T`Produit.`,
        s: [T`$0{,}4\times0{,}5=0{,}2$.`],
        r: T`$0{,}2$`, n: 0.2 },
      { d: 2, t: 'D’où vient la pièce ?', e: T`Avec l'exemple des usines, une pièce est défectueuse. Probabilité qu'elle vienne de A ?`,
        h: T`$P_D(A)=\frac{P(A\cap D)}{P(D)}$.`,
        s: [T`$P_D(A)=\frac{0{,}012}{0{,}032}=0{,}375$.`, T`Bien que A produise plus, la plupart des défauts viennent de B.`],
        r: T`$0{,}375$`, n: 0.375 },
      { d: 2, t: 'Indépendance', e: T`$P(A)=0{,}3$, $P(B)=0{,}5$, $P(A\cap B)=0{,}15$. Indépendants ?`,
        h: T`Compare $P(A\cap B)$ et $P(A)P(B)$.`,
        s: [T`$P(A)P(B)=0{,}15=P(A\cap B)$ : indépendants.`],
        r: T`Oui` },
      { d: 3, t: 'Test de dépistage', e: T`Une maladie touche 2 % de la population. Le test est positif chez 90 % des malades et chez 5 % des non-malades. Un test est positif : probabilité d'être malade ?`,
        h: T`$P(T)=0{,}02\times0{,}9+0{,}98\times0{,}05$.`,
        s: [T`$P(M\cap T)=0{,}018$ ; $P(\bar M\cap T)=0{,}049$.`, T`$P(T)=0{,}067$.`, T`$P_T(M)=\frac{0{,}018}{0{,}067}\approx0{,}269$.`, T`Moins de 27 % : un test positif doit être confirmé quand la maladie est rare.`],
        r: T`$\approx0{,}269$`, n: 0.269 },
      { d: 3, t: 'Épreuves indépendantes', e: T`Un joueur réussit un tir avec probabilité 0,7. Il tire 3 fois (tirs indépendants). Probabilité de réussir exactement 2 tirs ?`,
        h: T`3 chemins possibles (le tir raté peut être le 1er, 2e ou 3e).`,
        s: [T`Un chemin avec 2 succès et 1 échec : $0{,}7^2\times0{,}3=0{,}147$.`, T`3 chemins : $3\times0{,}147=0{,}441$.`],
        r: T`$0{,}441$`, n: 0.441 }
    ]
  },

  {
    id: 'variables-aleatoires', matiere: 'maths', niveau: 'Première',
    titre: 'Variables aléatoires réelles',
    resume: 'Loi de probabilité, espérance, variance, écart-type, transformation affine, jeu équitable.',
    motscles: 'variable aléatoire loi espérance variance écart-type gain jeu équitable',
    pourquoi: T`<p>Une variable aléatoire associe un nombre (un gain, une durée, un coût) au hasard. L'<b>espérance</b> donne la valeur moyenne à long terme : c'est ce que calculent les assureurs, les casinos et les ingénieurs en fiabilité. La <b>variance</b> mesure le risque.</p>`,
    cours: T`<h4>Loi</h4><p>Liste des valeurs $x_i$ et de leurs probabilités $p_i$ (somme 1).</p>
<h4>Espérance, variance</h4><p>$E(X)=\sum p_ix_i$. $V(X)=\sum p_i(x_i-E(X))^2=E(X^2)-E(X)^2$. $\sigma(X)=\sqrt{V(X)}$.</p>
<h4>Transformation affine</h4><p>$E(aX+b)=aE(X)+b$ et $V(aX+b)=a^2V(X)$ (ajouter une constante ne change pas la dispersion).</p>
<h4>Jeu équitable</h4><p>Un jeu est équitable si l'espérance du gain net est nulle.</p>`,
    formules: [
      { nom: 'Espérance', f: T`$$E(X)=\sum_i p_ix_i$$`,
        quand: T`Valeur moyenne à long terme, décision (jeu favorable ou non).`,
        pas: T`L'espérance n'est pas forcément une valeur que $X$ peut prendre (un dé a pour espérance 3,5).` },
      { nom: 'Variance (formule de König)', f: T`$$V(X)=E(X^2)-\big(E(X)\big)^2$$`,
        quand: T`Calcul plus rapide que la définition.`,
        pas: T`$E(X^2)\neq E(X)^2$ : calcule $\sum p_ix_i^2$.` },
      { nom: 'Transformation affine', f: T`$$E(aX+b)=aE(X)+b\qquad V(aX+b)=a^2V(X)$$`,
        quand: T`Changement d'unité, gain = prix × quantité − coût fixe.`,
        pas: T`La variance est multipliée par $a^2$, pas par $a$ ; et $b$ disparaît.` }
    ],
    methode: [
      T`Liste les valeurs possibles de $X$.`,
      T`Calcule les probabilités (arbre si besoin) et vérifie que leur somme vaut 1.`,
      T`Calcule $E$, puis $E(X^2)$ et $V$.`,
      T`Interprète (gain moyen, risque).`
    ],
    exemple: {
      e: T`On mise 100 F et on lance un dé : un 6 rapporte 500 F (gain net +400), sinon on perd la mise. Espérance du gain ?`,
      s: [T`$X$ vaut $400$ avec probabilité $\frac16$ et $-100$ avec probabilité $\frac56$.`, T`$E(X)=\frac{400}6-\frac{500}6=-\frac{100}6\approx-16{,}7$ F.`, T`Jeu défavorable : on perd en moyenne 16,7 F par partie.`],
      r: T`$E(X)\approx-16{,}7$ F`
    },
    pieges: [
      T`Oublier de retirer la mise dans le gain net.`,
      T`Probabilités dont la somme ne vaut pas 1.`,
      T`$V(aX)=aV(X)$ (faux).`
    ],
    exos: [
      { d: 1, t: 'Espérance', e: T`$X$ prend les valeurs 0, 1, 2 avec probabilités 0,2 ; 0,5 ; 0,3. Calculer $E(X)$.`,
        h: T`$\sum p_ix_i$.`,
        s: [T`$0+0{,}5+0{,}6=1{,}1$.`],
        r: T`$1{,}1$`, n: 1.1 },
      { d: 2, t: 'Variance', e: T`Même loi. Calculer $V(X)$.`,
        h: T`$E(X^2)=0{,}5+4\times0{,}3$.`,
        s: [T`$E(X^2)=0\times0{,}2+1\times0{,}5+4\times0{,}3=1{,}7$.`, T`$V=1{,}7-1{,}21=0{,}49$ ($\sigma=0{,}7$).`],
        r: T`$0{,}49$`, n: 0.49 },
      { d: 2, t: 'Transformation affine', e: T`Calculer $E(3X+2)$ et $V(3X+2)$ avec la même loi. Donne l'espérance.`,
        h: T`$E=3\times1{,}1+2$.`,
        s: [T`$E(3X+2)=5{,}3$.`, T`$V(3X+2)=9\times0{,}49=4{,}41$.`],
        r: T`$E=5{,}3$, $V=4{,}41$`, n: 5.3 },
      { d: 3, t: 'Jeu équitable', e: T`On paie 200 F pour tourner une roue. Avec probabilité 0,1 on reçoit $G$ F, sinon rien. Quelle valeur de $G$ rend le jeu équitable ?`,
        h: T`Gain net : $G-200$ ou $-200$. Espérance nulle.`,
        s: [T`$E=0{,}1(G-200)+0{,}9(-200)=0{,}1G-200$.`, T`$E=0\Rightarrow G=2000$ F.`],
        r: T`$G=2000$ F`, n: 2000, u: 'F' }
    ]
  }

  ]);
})();

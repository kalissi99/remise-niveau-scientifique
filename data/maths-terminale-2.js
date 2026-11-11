/* MATHÉMATIQUES — TERMINALE SPÉCIALITÉ (combinatoire, géométrie, probabilités) */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  {
    id: 'denombrement', matiere: 'maths', niveau: 'Terminale',
    titre: 'Dénombrement et combinatoire',
    resume: 'Principe multiplicatif, k-uplets, arrangements, permutations, combinaisons, triangle de Pascal.',
    motscles: 'dénombrement combinaison arrangement permutation factorielle pascal binôme',
    pourquoi: T`<p>Combien de mots de passe possibles ? Combien de clés ? Combien de façons de choisir une équipe ? Le dénombrement mesure la taille d'un espace de recherche : c'est exactement ce qui détermine la résistance d'un système cryptographique à la force brute.</p>`,
    cours: T`<h4>Principe multiplicatif</h4><p>Si un choix se fait en étapes indépendantes de $n_1$, $n_2$, … possibilités, le total est $n_1\times n_2\times\dots$</p>
<h4>Les trois situations</h4><ul><li><b>k-uplets</b> (ordre compte, répétitions permises) : $n^k$.</li><li><b>Arrangements</b> (ordre compte, sans répétition) : $\frac{n!}{(n-k)!}$. Cas $k=n$ : permutations $n!$.</li><li><b>Combinaisons</b> (ordre ne compte pas, sans répétition) : $\binom nk=\frac{n!}{k!(n-k)!}$.</li></ul>
<h4>Propriétés</h4><p>$\binom nk=\binom n{n-k}$, Pascal : $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$. Un ensemble à $n$ éléments a $2^n$ parties.</p>`,
    formules: [
      { nom: 'k-uplets', f: T`$$n^k$$`,
        quand: T`Codes, mots de passe, tirages <b>avec remise</b> où l'ordre compte.`,
        pas: T`Si un élément ne peut pas être réutilisé (podium), ce sont des arrangements.` },
      { nom: 'Arrangements et permutations', f: T`$$A_n^k=\frac{n!}{(n-k)!}=n(n-1)\cdots(n-k+1)\qquad n!$$`,
        quand: T`Classements, podiums, attribution de rôles différents : ordre important, sans répétition.`,
        pas: T`Si l'ordre ne compte pas (un groupe), divise par $k!$ : ce sont des combinaisons.` },
      { nom: 'Combinaisons', f: T`$$\binom nk=\frac{n!}{k!\,(n-k)!}$$`,
        quand: T`Choisir un groupe, une main de cartes, un sous-ensemble.`,
        pas: T`Pour « au moins un », passe souvent par le complémentaire : total − aucun.` }
    ],
    methode: [
      T`L'ordre compte-t-il ? Les répétitions sont-elles possibles ?`,
      T`Choisis la formule : $n^k$, arrangement ou combinaison.`,
      T`Pour les contraintes (« au moins »), utilise le complémentaire ou découpe en cas.`,
      T`Vérifie sur un petit exemple en listant.`
    ],
    exemple: {
      e: T`Combien de codes PIN à 4 chiffres ? Et sans chiffre répété ?`,
      s: [T`Ordre important, répétitions permises : $10^4=10\,000$.`, T`Sans répétition : $10\times9\times8\times7=5040$.`],
      r: T`$10\,000$ et $5040$`
    },
    pieges: [
      T`Confondre arrangements et combinaisons.`,
      T`Compter deux fois certains cas en découpant.`,
      T`Oublier que $0!=1$.`
    ],
    exos: [
      { d: 1, t: 'Anagrammes', e: T`Combien d'anagrammes du mot MATHS (lettres toutes différentes) ?`,
        h: T`Permutations de 5 lettres.`,
        s: [T`$5!=120$.`],
        r: T`$120$`, n: 120 },
      { d: 1, t: 'Combinaison', e: T`Calculer $\binom52$.`,
        h: T`$\frac{5\times4}{2}$.`,
        s: [T`$\frac{5!}{2!\,3!}=10$.`],
        r: T`$10$`, n: 10 },
      { d: 2, t: 'Podium', e: T`10 coureurs : combien de podiums (or, argent, bronze) possibles ?`,
        h: T`Ordre important, sans répétition.`,
        s: [T`$10\times9\times8=720$.`],
        r: T`$720$`, n: 720 },
      { d: 2, t: 'Mots de passe', e: T`Combien de mots de passe de 6 lettres minuscules (répétitions permises) ?`,
        h: T`$26^6$.`,
        s: [T`$26^6=308\,915\,776\approx3{,}1\times10^8$.`, T`Un ordinateur les teste tous en moins d'une seconde : trop court.`],
        r: T`$308\,915\,776$`, n: 308915776 },
      { d: 3, t: 'Au moins une fille', e: T`Comité de 3 personnes parmi 6 filles et 4 garçons, avec au moins une fille. Combien de possibilités ?`,
        h: T`Total moins les comités sans fille.`,
        s: [T`Total : $\binom{10}3=120$.`, T`Sans fille : $\binom43=4$.`, T`$120-4=116$.`],
        r: T`$116$`, n: 116 },
      { d: 3, t: 'Binôme de Newton', e: T`Coefficient de $x^3$ dans $(1+x)^7$ ?`,
        h: T`$(1+x)^n=\sum\binom nkx^k$.`,
        s: [T`Coefficient $\binom73=35$.`],
        r: T`$35$`, n: 35 }
    ]
  },

  {
    id: 'geometrie-espace', matiere: 'maths', niveau: 'Terminale',
    titre: 'Géométrie dans l’espace : vecteurs, droites et plans',
    resume: 'Vecteurs de l’espace, coplanarité, représentations paramétriques, positions relatives de droites et de plans.',
    motscles: 'espace vecteur droite plan représentation paramétrique coplanaire',
    pourquoi: T`<p>Le monde réel est en 3D : robotique, modélisation 3D, trajectoires de drones, structures. La représentation paramétrique d'une droite, c'est exactement la trajectoire d'un objet en mouvement rectiligne uniforme : position = point de départ + temps × vitesse.</p>`,
    cours: T`<h4>Vecteurs</h4><p>Mêmes règles que dans le plan, avec trois coordonnées : $\vec{AB}(x_B-x_A;y_B-y_A;z_B-z_A)$. Colinéaires si coordonnées proportionnelles.</p>
<h4>Coplanarité</h4><p>$\vec u$, $\vec v$, $\vec w$ coplanaires s'il existe $a,b$ avec $\vec w=a\vec u+b\vec v$ ($\vec u,\vec v$ non colinéaires).</p>
<h4>Droite</h4><p>Passant par $A$ dirigée par $\vec u$ : $M\in d\iff\vec{AM}=t\vec u$, soit $\begin{cases}x=x_A+at\\y=y_A+bt\\z=z_A+ct\end{cases}$</p>
<h4>Positions relatives de deux droites</h4><p>Parallèles (vecteurs directeurs colinéaires), sécantes (un point commun), ou <b>non coplanaires</b> (ni l'un ni l'autre : spécificité de l'espace).</p>`,
    formules: [
      { nom: 'Représentation paramétrique', f: T`$$\begin{cases}x=x_A+at\\y=y_A+bt\\z=z_A+ct\end{cases}\quad t\in\mathbb R$$`,
        quand: T`Décrire une droite, tester l'appartenance d'un point, chercher une intersection.`,
        pas: T`Pour l'intersection de deux droites, utilise <b>deux paramètres différents</b> ($t$ et $s$).` },
      { nom: 'Coplanarité', f: T`$$\vec w=a\vec u+b\vec v$$`,
        quand: T`Prouver que 4 points sont dans un même plan.`,
        pas: T`Il faut trouver $a,b$ qui vérifient les <b>trois</b> équations, pas seulement deux.` },
      { nom: 'Norme dans l’espace', f: T`$$\|\vec u\|=\sqrt{x^2+y^2+z^2}$$`,
        quand: T`Longueurs en repère orthonormé.`,
        pas: T`N'oublie pas la troisième coordonnée.` }
    ],
    methode: [
      T`Calcule les vecteurs directeurs.`,
      T`Colinéaires ? → parallèles (ou confondues).`,
      T`Sinon résous le système avec deux paramètres : solution → sécantes ; aucune → non coplanaires.`,
      T`Vérifie le point trouvé dans les deux représentations.`
    ],
    exemple: {
      e: T`Droite passant par $A(1;0;2)$ dirigée par $\vec u(2;-1;3)$ : représentation paramétrique et point pour $t=1$.`,
      s: [T`$x=1+2t$, $y=-t$, $z=2+3t$.`, T`$t=1$ : $(3\,;-1\,;5)$.`],
      r: T`$(3;-1;5)$`
    },
    pieges: [
      T`Utiliser le même paramètre pour deux droites différentes.`,
      T`Oublier le cas « non coplanaires ».`,
      T`Vérifier seulement deux équations sur trois.`
    ],
    exos: [
      { d: 1, t: 'Longueur', e: T`$A(1;2;3)$, $B(4;0;5)$. Calculer $AB$.`,
        h: T`$\vec{AB}(3;-2;2)$.`,
        s: [T`$AB=\sqrt{9+4+4}=\sqrt{17}\approx4{,}12$.`],
        r: T`$\sqrt{17}$`, n: 4.123 },
      { d: 2, t: 'Appartenance', e: T`Le point $C(7;-2;7)$ appartient-il à la droite $(AB)$ de l'exercice précédent ? Donne la valeur de $t$.`,
        h: T`Résous $C=A+t\vec{AB}$.`,
        s: [T`$1+3t=7\Rightarrow t=2$ ; $2-2t=-2$ ✔ ; $3+2t=7$ ✔.`, T`Les trois équations donnent $t=2$ : $C\in(AB)$.`],
        r: T`Oui, $t=2$`, n: 2 },
      { d: 2, t: 'Intersection', e: T`$d:(1+t;\,2t;\,3-t)$ et $d':(s;\,s;\,2)$. Sont-elles sécantes ? Donne la valeur de $s$.`,
        h: T`Égalise les coordonnées avec deux paramètres.`,
        s: [T`$3-t=2\Rightarrow t=1$.`, T`$1+t=s\Rightarrow s=2$ ; vérif $2t=s$ : $2=2$ ✔.`, T`Point commun $(2;2;2)$.`],
        r: T`Sécantes en $(2;2;2)$`, n: 2 },
      { d: 3, t: 'Coplanarité', e: T`$\vec u(1;0;1)$, $\vec v(0;1;1)$, $\vec w(2;3;5)$ sont-ils coplanaires ?`,
        h: T`Cherche $a,b$ avec $\vec w=a\vec u+b\vec v$.`,
        s: [T`$x$ : $a=2$ ; $y$ : $b=3$.`, T`$z$ : $a+b=5$ ✔.`, T`Coplanaires.`],
        r: T`Oui ($\vec w=2\vec u+3\vec v$)` }
    ]
  },

  {
    id: 'orthogonalite-espace', matiere: 'maths', niveau: 'Terminale',
    titre: 'Produit scalaire dans l’espace, plans et projections',
    resume: 'Orthogonalité, vecteur normal, équation cartésienne d’un plan, projeté orthogonal et distance.',
    motscles: 'produit scalaire espace plan équation cartésienne vecteur normal projeté distance',
    pourquoi: T`<p>Un plan, c'est un mur, un sol, une surface de pièce mécanique. Calculer la distance d'un point à un plan ou un angle entre deux directions est quotidien en conception assistée par ordinateur, en robotique et en infographie (calcul d'éclairage).</p>`,
    cours: T`<h4>Produit scalaire</h4><p>$\vec u\cdot\vec v=xx'+yy'+zz'$ (repère orthonormé). Orthogonaux $\iff$ produit nul.</p>
<h4>Plan</h4><p>Un plan de vecteur normal $\vec n(a;b;c)$ a une équation $ax+by+cz+d=0$. Une droite est orthogonale à un plan si son vecteur directeur est colinéaire à $\vec n$.</p>
<h4>Projeté orthogonal</h4><p>Le projeté $H$ de $M$ sur le plan est le point du plan le plus proche de $M$ ; $MH$ est la distance de $M$ au plan. On l'obtient par la droite passant par $M$ dirigée par $\vec n$.</p>`,
    formules: [
      { nom: 'Équation d’un plan', f: T`$$\vec n(a;b;c)\ \text{normal}\Rightarrow ax+by+cz+d=0$$`,
        quand: T`Plan défini par un point et un vecteur normal (on trouve $d$ avec le point).`,
        pas: T`Si le plan est donné par trois points, cherche d'abord un $\vec n$ orthogonal à deux vecteurs du plan.` },
      { nom: 'Distance point-plan', f: T`$$d(M,\mathcal P)=\frac{|ax_M+by_M+cz_M+d|}{\sqrt{a^2+b^2+c^2}}$$`,
        quand: T`Distance directe (vérification rapide).`,
        pas: T`Au bac on demande souvent de passer par le projeté $H$ : sache faire les deux.` },
      { nom: 'Angle', f: T`$$\cos\theta=\frac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}$$`,
        quand: T`Angle entre deux directions.`,
        pas: T`Le résultat est en radians ou degrés selon la calculatrice.` }
    ],
    methode: [
      T`Trouve un vecteur normal.`,
      T`Écris l'équation et calcule $d$ avec un point.`,
      T`Projeté : droite $(M,\vec n)$ en paramétrique, puis intersection avec le plan.`,
      T`Distance = $MH$.`
    ],
    exemple: {
      e: T`Plan passant par $A(1;2;3)$ de vecteur normal $\vec n(2;-1;1)$.`,
      s: [T`$2x-y+z+d=0$.`, T`$A$ : $2-2+3+d=0\Rightarrow d=-3$.`],
      r: T`$2x-y+z-3=0$`
    },
    pieges: [
      T`Confondre vecteur normal et vecteur directeur du plan.`,
      T`Oublier la valeur absolue dans la distance.`,
      T`Erreur de signe sur $d$.`
    ],
    exos: [
      { d: 1, t: 'Produit scalaire', e: T`$\vec u(1;2;-1)\cdot\vec v(3;0;2)$ ?`,
        h: T`$xx'+yy'+zz'$.`,
        s: [T`$3+0-2=1$.`],
        r: T`$1$`, n: 1 },
      { d: 2, t: 'Distance au plan', e: T`Distance de l'origine au plan $x+2y+2z-9=0$ ?`,
        h: T`Formule de la distance.`,
        s: [T`$\frac{|-9|}{\sqrt{1+4+4}}=\frac93=3$.`],
        r: T`$3$`, n: 3 },
      { d: 3, t: 'Projeté orthogonal', e: T`Projeté orthogonal de $M(3;3;3)$ sur le plan $x+y+z-3=0$, puis distance $MH$.`,
        h: T`$H=M+t\vec n$ avec $\vec n(1;1;1)$.`,
        s: [T`$H(3+t;3+t;3+t)$.`, T`Dans le plan : $3(3+t)-3=0\Rightarrow t=-2$ : $H(1;1;1)$.`, T`$MH=\sqrt{4+4+4}=2\sqrt3\approx3{,}46$.`],
        r: T`$H(1;1;1)$, $MH=2\sqrt3$`, n: 3.464 },
      { d: 3, t: 'Angle', e: T`Angle (en degrés) entre $\vec u(1;0;0)$ et $\vec v(1;1;0)$.`,
        h: T`$\cos\theta=\frac1{\sqrt2}$.`,
        s: [T`$\vec u\cdot\vec v=1$, $\|\vec u\|=1$, $\|\vec v\|=\sqrt2$.`, T`$\theta=45°$.`],
        r: T`$45°$`, n: 45, u: '°' }
    ]
  },

  {
    id: 'binomiale-lgn', matiere: 'maths', niveau: 'Terminale',
    titre: 'Loi binomiale, sommes de variables et loi des grands nombres',
    resume: 'Schéma de Bernoulli, loi binomiale, espérance et variance d’une somme, Bienaymé-Tchebychev.',
    motscles: 'bernoulli binomiale somme variance bienaymé tchebychev grands nombres échantillon',
    pourquoi: T`<p>Combien de transactions frauduleuses sur 1000 ? Combien de pièces défectueuses dans un lot ? La loi binomiale répond. La <b>loi des grands nombres</b> explique pourquoi la moyenne d'un grand échantillon est fiable : c'est le fondement des sondages, des simulations et de l'apprentissage automatique.</p>`,
    cours: T`<h4>Loi binomiale</h4><p>$n$ répétitions indépendantes d'une épreuve à deux issues (succès de probabilité $p$). $X$ = nombre de succès suit $\mathcal B(n,p)$ : $P(X=k)=\binom nkp^k(1-p)^{n-k}$, $E=np$, $V=np(1-p)$.</p>
<h4>Sommes</h4><p>$E(X+Y)=E(X)+E(Y)$ toujours. $V(X+Y)=V(X)+V(Y)$ si $X$ et $Y$ indépendantes.</p>
<h4>Moyenne d'échantillon</h4><p>$M_n=\frac{X_1+\dots+X_n}n$ : $E(M_n)=\mu$, $V(M_n)=\frac{\sigma^2}n$. La dispersion diminue quand $n$ augmente.</p>
<h4>Inégalités</h4><p>Bienaymé-Tchebychev : $P(|X-\mu|\ge\delta)\le\frac{V(X)}{\delta^2}$. Appliquée à $M_n$ : $P(|M_n-\mu|\ge\delta)\le\frac{\sigma^2}{n\delta^2}\to0$ (loi faible des grands nombres).</p>`,
    formules: [
      { nom: 'Loi binomiale', f: T`$$P(X=k)=\binom nkp^k(1-p)^{n-k}\qquad E=np\qquad V=np(1-p)$$`,
        quand: T`Nombre de succès dans $n$ épreuves identiques et indépendantes.`,
        pas: T`Si les épreuves ne sont pas indépendantes (tirage sans remise dans une petite urne), ce n'est pas binomial.` },
      { nom: 'Bienaymé-Tchebychev', f: T`$$P\big(|X-E(X)|\ge\delta\big)\le\frac{V(X)}{\delta^2}$$`,
        quand: T`Majorer la probabilité d'un grand écart sans connaître la loi exacte.`,
        pas: T`C'est une majoration souvent grossière, pas une valeur exacte.` },
      { nom: 'Concentration de la moyenne', f: T`$$P\big(|M_n-\mu|\ge\delta\big)\le\frac{\sigma^2}{n\delta^2}$$`,
        quand: T`Taille d'échantillon nécessaire pour une précision donnée.`,
        pas: T`La variance de $M_n$ est $\frac{\sigma^2}n$, pas $\frac{\sigma^2}{n^2}$.` }
    ],
    methode: [
      T`Justifie le schéma de Bernoulli (deux issues, indépendance, même $p$).`,
      T`Identifie $n$ et $p$.`,
      T`Calcule avec la formule ou la calculatrice ; « au moins un » → complémentaire.`,
      T`Pour une précision : inégalité de concentration.`
    ],
    exemple: {
      e: T`10 transactions indépendantes, chacune frauduleuse avec probabilité 0,1. Probabilité qu'aucune ne le soit ?`,
      s: [T`$X\sim\mathcal B(10;0{,}1)$.`, T`$P(X=0)=0{,}9^{10}\approx0{,}349$.`],
      r: T`$\approx0{,}349$`
    },
    pieges: [
      T`Oublier le coefficient $\binom nk$.`,
      T`Additionner des variances de variables non indépendantes.`,
      T`Confondre $\le$ et $<$ dans $P(X\le k)$.`
    ],
    exos: [
      { d: 1, t: 'Espérance', e: T`$X\sim\mathcal B(20;0{,}3)$. $E(X)$ ?`,
        h: T`$np$.`,
        s: [T`$20\times0{,}3=6$.`],
        r: T`$6$`, n: 6 },
      { d: 2, t: 'Au moins un', e: T`$X\sim\mathcal B(10;0{,}1)$. $P(X\ge1)$ ?`,
        h: T`$1-P(X=0)$.`,
        s: [T`$1-0{,}9^{10}\approx0{,}651$.`],
        r: T`$\approx0{,}651$`, n: 0.6513 },
      { d: 2, t: 'Somme', e: T`$X$ et $Y$ indépendantes, $V(X)=2$, $V(Y)=3$. Calculer $V(X+Y)$.`,
        h: T`Indépendance.`,
        s: [T`$V(X+Y)=5$.`],
        r: T`$5$`, n: 5 },
      { d: 3, t: 'Bienaymé-Tchebychev', e: T`$E(X)=50$, $V(X)=25$. Majorer $P(|X-50|\ge10)$.`,
        h: T`$\frac{V}{\delta^2}$.`,
        s: [T`$\frac{25}{100}=0{,}25$.`],
        r: T`$\le0{,}25$`, n: 0.25 },
      { d: 3, t: 'Taille d’échantillon', e: T`On lance une pièce équilibrée $n$ fois ($\sigma^2=0{,}25$ pour une épreuve). Quel $n$ garantit $P(|M_n-0{,}5|\ge0{,}05)\le0{,}01$ ?`,
        h: T`$\frac{0{,}25}{n\times0{,}05^2}\le0{,}01$.`,
        s: [T`$\frac{0{,}25}{0{,}0025\,n}=\frac{100}n$.`, T`$\frac{100}n\le0{,}01\Rightarrow n\ge10\,000$.`],
        r: T`$n\ge10\,000$`, n: 10000 }
    ]
  }

  ]);
})();

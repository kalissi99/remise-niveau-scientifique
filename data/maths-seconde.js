/* MATHÉMATIQUES — SECONDE (programme français) */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  {
    id: 'nombres-intervalles', matiere: 'maths', niveau: 'Seconde',
    titre: 'Nombres, intervalles et valeur absolue',
    resume: 'Les ensembles de nombres, la notation des intervalles, la valeur absolue comme distance, la notation scientifique.',
    motscles: 'entier rationnel réel intervalle valeur absolue notation scientifique encadrement',
    pourquoi: T`<p>Toutes les solutions d'inéquations, tous les domaines de définition s'écrivent avec des <b>intervalles</b>. La <b>valeur absolue</b> traduit une distance ou une tolérance : une pièce mécanique « de 50 mm à ±0,2 mm » s'écrit $|L-50|\le0{,}2$. Et la <b>notation scientifique</b> est la langue de la physique.</p>`,
    cours: T`<h4>Ensembles de nombres</h4><p>$\mathbb N\subset\mathbb Z\subset\mathbb D\subset\mathbb Q\subset\mathbb R$ : entiers naturels, relatifs, décimaux, rationnels (fractions), réels. $\sqrt2$ et $\pi$ sont réels mais pas rationnels. Un nombre dont l'écriture décimale est périodique ($0{,}333\dots$) est rationnel.</p>
<h4>Intervalles</h4><p>$[a;b]$ : $a\le x\le b$. $]a;b[$ : $a<x<b$. $[a;+\infty[$ : $x\ge a$. Le crochet est toujours <b>ouvert</b> du côté de $\pm\infty$. $\cup$ (réunion) = « ou », $\cap$ (intersection) = « et ».</p>
<h4>Valeur absolue</h4><p>$|x|$ = distance de $x$ à 0. $|x-a|$ = distance entre $x$ et $a$ sur la droite graduée.</p>
<h4>Notation scientifique</h4><p>$a\times10^n$ avec $1\le|a|<10$ et $n$ entier.</p>`,
    formules: [
      { nom: 'Valeur absolue et intervalle', f: T`$$|x-a|\le r\iff a-r\le x\le a+r\iff x\in[a-r\,;a+r]$$`,
        quand: T`Encadrement, tolérance, « $x$ est à moins de $r$ de $a$ ».`,
        pas: T`$|x-a|\ge r$ ne donne pas un intervalle mais une <b>réunion</b> : $x\le a-r$ ou $x\ge a+r$.` },
      { nom: 'Notation scientifique', f: T`$$x=a\times10^n,\quad 1\le|a|<10$$`,
        quand: T`Grands et petits nombres (masses d'atomes, distances astronomiques), comparer des ordres de grandeur.`,
        pas: T`$25\times10^3$ n'est pas en notation scientifique : on écrit $2{,}5\times10^4$.` },
      { nom: 'Distance entre deux réels', f: T`$$d(a,b)=|b-a|$$`,
        quand: T`Traduire « écart », « erreur », « distance » entre deux valeurs.`,
        pas: T`$|a+b|\neq|a|+|b|$ en général (essaie $a=3$, $b=-3$).` }
    ],
    methode: [
      T`Traduis l'énoncé en inégalités.`,
      T`Place les valeurs sur une droite graduée.`,
      T`Écris l'intervalle en faisant attention aux crochets (inclus ou exclus).`,
      T`Vérifie avec une valeur à l'intérieur et une à l'extérieur.`
    ],
    exemple: {
      e: T`Résoudre $|x-3|\le2$.`,
      s: [T`$|x-3|$ est la distance entre $x$ et 3.`, T`On cherche les $x$ à distance au plus 2 de 3 : de $3-2=1$ à $3+2=5$.`, T`Vérif : $x=4$ donne $|1|=1\le2$ ✔ ; $x=6$ donne $3>2$ ✘.`],
      r: T`$S=[1\,;5]$`
    },
    pieges: [
      T`Crochet fermé vers $+\infty$ : interdit.`,
      T`Croire que $0{,}333\dots$ n'est pas rationnel : c'est $\frac13$.`,
      T`Confondre $\cup$ et $\cap$.`
    ],
    exos: [
      { d: 1, t: 'Notation scientifique', e: T`Écrire $0{,}000\,45$ en notation scientifique.`,
        h: T`Déplace la virgule jusqu'à avoir un nombre entre 1 et 10.`,
        s: [T`$0{,}000\,45=4{,}5\times10^{-4}$ (virgule déplacée de 4 rangs vers la droite → exposant $-4$).`],
        r: T`$4{,}5\times10^{-4}$`, n: 0.00045 },
      { d: 2, t: 'Inéquation avec valeur absolue', e: T`Résoudre $|x+1|<4$. Donne la borne supérieure de l'intervalle.`,
        h: T`$|x+1|=|x-(-1)|$ : distance de $x$ à $-1$.`,
        s: [T`Distance de $x$ à $-1$ strictement inférieure à 4.`, T`$-1-4<x<-1+4$, soit $]-5\,;3[$.`],
        r: T`$]-5\,;3[$`, n: 3 },
      { d: 2, t: 'Intersection', e: T`Déterminer $[-3\,;5]\cap\,]1\,;8]$.`,
        h: T`Les $x$ qui sont dans les deux à la fois.`,
        s: [T`Il faut $x>1$ (second) et $x\le5$ (premier).`, T`$]1\,;5]$.`],
        r: T`$]1\,;5]$` },
      { d: 3, t: 'Écriture décimale périodique', e: T`Écrire $x=0{,}1212\dots$ sous forme de fraction irréductible.`,
        h: T`Calcule $100x-x$.`,
        s: [T`$100x=12{,}1212\dots$`, T`$100x-x=12$ donc $99x=12$, $x=\frac{12}{99}=\frac4{33}$.`, T`Pourquoi $\times100$ : la période fait 2 chiffres, on décale de 2 rangs pour que les parties décimales se superposent.`],
        r: T`$\frac4{33}$`, n: 0.121212, tol: 0.001 },
      { d: 3, t: 'Tolérance de fabrication', e: T`Une pièce doit mesurer 50 mm à 0,2 mm près. Traduire avec une valeur absolue, puis donner la longueur minimale acceptée.`,
        h: T`Écart à 50 inférieur ou égal à 0,2.`,
        s: [T`$|L-50|\le0{,}2$.`, T`$L\in[49{,}8\,;50{,}2]$.`],
        r: T`$|L-50|\le0{,}2$, minimum $49{,}8$ mm`, n: 49.8, u: 'mm' }
    ]
  },

  {
    id: 'equations-inequations', matiere: 'maths', niveau: 'Seconde',
    titre: 'Équations, inéquations et tableaux de signes',
    resume: 'Résoudre le premier degré, étudier le signe d’un produit ou d’un quotient, mettre un problème en équation.',
    motscles: 'équation inéquation premier degré tableau de signes quotient produit',
    pourquoi: T`<p>Mettre un problème en équation, c'est traduire une situation réelle en mathématiques : à partir de combien de minutes un forfait est-il plus avantageux ? Le <b>tableau de signes</b> est l'outil qui servira ensuite pour les variations de fonctions (dérivées) pendant tout le lycée.</p>`,
    cours: T`<h4>Règles</h4><p>On peut ajouter/soustraire un même nombre aux deux membres, et multiplier/diviser par un même nombre <b>non nul</b>. Dans une inéquation, multiplier ou diviser par un nombre <b>négatif</b> change le sens de l'inégalité.</p>
<h4>Signe de $ax+b$</h4><p>Il s'annule en $x=-\frac ba$ et il est du <b>signe de $a$ à droite</b> de cette valeur, du signe contraire à gauche.</p>
<h4>Produits et quotients</h4><p>On fait un tableau : une ligne par facteur, puis la règle des signes. Pour un quotient, les valeurs qui annulent le dénominateur sont <b>interdites</b> (double barre).</p>`,
    formules: [
      { nom: 'Équation du premier degré', f: T`$$ax+b=0\iff x=-\frac ba\quad(a\neq0)$$`,
        quand: T`Toute équation où $x$ n'apparaît qu'à la puissance 1 (après développement).`,
        pas: T`S'il y a du $x^2$ qui ne disparaît pas, ce n'est plus du premier degré : factorise ou utilise le second degré.` },
      { nom: 'Signe de ax + b', f: T`$$\text{signe de }a\text{ pour }x>-\tfrac ba,\quad\text{signe de }-a\text{ pour }x<-\tfrac ba$$`,
        quand: T`Chaque ligne d'un tableau de signes.`,
        pas: T`Ne pas dire « positif à droite » sans regarder $a$ : $-2x+6$ est <b>négatif</b> à droite de 3.` },
      { nom: 'Quotient nul', f: T`$$\frac AB=0\iff A=0\ \text{et}\ B\neq0$$`,
        quand: T`Équations avec $x$ au dénominateur.`,
        pas: T`Oublier la valeur interdite peut donner une « solution » qui n'existe pas.` }
    ],
    methode: [
      T`Ramène tout à « $\ldots$ comparé à 0 ».`,
      T`Factorise au maximum.`,
      T`Fais le tableau de signes (une ligne par facteur, valeurs interdites).`,
      T`Lis la réponse en respectant le sens (strict ou large) et les valeurs interdites.`
    ],
    exemple: {
      e: T`Résoudre $(2x-4)(3-x)\ge0$.`,
      s: [T`$2x-4=0$ pour $x=2$ ($a=2>0$ : négatif puis positif).`, T`$3-x=0$ pour $x=3$ ($a=-1<0$ : positif puis négatif).`, T`Produit : $-$ avant 2, $+$ entre 2 et 3, $-$ après 3.`, T`On veut $\ge0$ : bornes incluses.`],
      r: T`$S=[2\,;3]$`
    },
    pieges: [
      T`Ne pas inverser le sens en divisant par un négatif.`,
      T`Diviser par $x$ (on ne connaît pas son signe, et on perd la solution 0).`,
      T`Inclure une valeur interdite dans la solution.`
    ],
    exos: [
      { d: 1, t: 'Premier degré', e: T`Résoudre $5x-3=2x+9$.`,
        h: T`Regroupe les $x$ d'un côté.`,
        s: [T`$5x-2x=9+3$, donc $3x=12$.`, T`$x=4$.`],
        r: T`$x=4$`, n: 4 },
      { d: 1, t: 'Inéquation et signe négatif', e: T`Résoudre $-2x+6>0$.`,
        h: T`En divisant par $-2$, le sens change.`,
        s: [T`$-2x>-6$.`, T`Division par $-2<0$ : $x<3$.`],
        r: T`$]-\infty\,;3[$` },
      { d: 2, t: 'Quotient nul', e: T`Résoudre $\dfrac{x+1}{x-2}=0$.`,
        h: T`Numérateur nul, dénominateur non nul.`,
        s: [T`Valeur interdite : $x=2$.`, T`$x+1=0\iff x=-1$, différent de 2 : accepté.`],
        r: T`$x=-1$`, n: -1 },
      { d: 3, t: 'Inéquation quotient', e: T`Résoudre $\dfrac{2x+1}{x-3}\le0$.`,
        h: T`Tableau de signes à deux lignes ; 3 est interdite.`,
        s: [T`$2x+1$ s'annule en $-\frac12$ ; $x-3$ en 3 (valeur interdite).`, T`Quotient : $+$ avant $-\frac12$, $-$ entre $-\frac12$ et 3, $+$ après 3.`, T`$\le0$ : $-\frac12$ incluse (numérateur nul), 3 exclue (interdite).`],
        r: T`$\left[-\frac12\,;3\right[$` },
      { d: 3, t: 'Mettre en équation', e: T`Forfait A : 5000 F + 100 F/min. Forfait B : 200 F/min. À partir de combien de minutes A est-il moins cher ?`,
        h: T`Coût A : $5000+100x$. Coût B : $200x$.`,
        s: [T`On veut $5000+100x<200x$.`, T`$5000<100x\Rightarrow x>50$.`, T`Au-delà de 50 minutes, A est plus avantageux.`],
        r: T`Plus de 50 minutes`, n: 50, u: 'min' }
    ]
  },

  {
    id: 'fonctions-reference', matiere: 'maths', niveau: 'Seconde',
    titre: 'Fonctions : généralités et fonctions de référence',
    resume: 'Image, antécédent, courbe, variations, fonctions affines, carré, inverse, racine carrée et cube.',
    motscles: 'fonction image antécédent courbe affine carré inverse racine variations',
    pourquoi: T`<p>Une fonction décrit comment une grandeur dépend d'une autre : la position en fonction du temps, la tension en fonction du courant. Les fonctions de référence sont les briques de base : il faut connaître leur forme par cœur pour « voir » un problème.</p>`,
    cours: T`<h4>Vocabulaire</h4><p>$f(x)$ est l'<b>image</b> de $x$ ; si $f(a)=b$, $a$ est un <b>antécédent</b> de $b$. La courbe $\mathcal C_f$ est l'ensemble des points $(x\,;f(x))$.</p>
<h4>Variations</h4><p>$f$ croissante : si $a<b$ alors $f(a)\le f(b)$ (l'ordre est conservé). Décroissante : l'ordre est inversé. Maximum/minimum : plus grande/petite valeur atteinte.</p>
<h4>Fonctions de référence</h4><ul><li>Affine $ax+b$ : droite, croissante si $a>0$.</li><li>Carré $x^2$ : parabole, décroissante sur $]-\infty;0]$, croissante sur $[0;+\infty[$.</li><li>Inverse $\frac1x$ : hyperbole, décroissante sur $]-\infty;0[$ et sur $]0;+\infty[$.</li><li>Racine $\sqrt x$ : croissante sur $[0;+\infty[$.</li><li>Cube $x^3$ : croissante sur $\mathbb R$.</li></ul>`,
    formules: [
      { nom: 'Coefficient directeur', f: T`$$a=\frac{f(x_2)-f(x_1)}{x_2-x_1}\qquad b=f(x_1)-ax_1$$`,
        quand: T`Trouver la fonction affine passant par deux points.`,
        pas: T`Si $x_1=x_2$, la droite est verticale : ce n'est pas une fonction.` },
      { nom: 'Comparer grâce aux variations', f: T`$$0\le a<b\Rightarrow a^2<b^2\qquad 0<a<b\Rightarrow\frac1a>\frac1b$$`,
        quand: T`Comparer deux nombres sans calculatrice.`,
        pas: T`Sur les négatifs, le carré est décroissant : $-3<-2$ mais $9>4$.` },
      { nom: 'Équation x² = k', f: T`$$x^2=k\iff x=\sqrt k\ \text{ou}\ x=-\sqrt k\quad(k>0)$$`,
        quand: T`Antécédents par la fonction carré.`,
        pas: T`N'oublie pas la solution négative. Si $k<0$ : aucune solution.` }
    ],
    methode: [
      T`Image : remplace $x$ par la valeur (avec parenthèses pour les négatifs).`,
      T`Antécédent : résous $f(x)=b$.`,
      T`Variations : utilise les fonctions de référence ou un tableau de valeurs.`,
      T`Vérifie graphiquement si possible.`
    ],
    exemple: {
      e: T`$f$ est affine avec $f(1)=3$ et $f(4)=9$. Trouver $f(x)$.`,
      s: [T`$a=\frac{9-3}{4-1}=2$.`, T`$b=f(1)-a\times1=3-2=1$.`, T`Vérif : $f(4)=8+1=9$ ✔.`],
      r: T`$f(x)=2x+1$`
    },
    pieges: [
      T`$(-2)^2=4$ mais $-2^2=-4$ : mets des parenthèses.`,
      T`L'inverse n'est pas « décroissante sur $\mathbb R^*$ » : elle l'est sur chaque intervalle séparément.`,
      T`Un antécédent peut ne pas exister ou ne pas être unique.`
    ],
    exos: [
      { d: 1, t: 'Calcul d’image', e: T`$f(x)=x^2-3x$. Calculer $f(-2)$.`,
        h: T`$(-2)^2=4$.`,
        s: [T`$f(-2)=(-2)^2-3\times(-2)=4+6=10$.`],
        r: T`$10$`, n: 10 },
      { d: 1, t: 'Fonction affine', e: T`La droite passe par $A(0;-1)$ et $B(2;5)$. Coefficient directeur ?`,
        h: T`$\frac{\Delta y}{\Delta x}$.`,
        s: [T`$a=\frac{5-(-1)}{2-0}=3$, $b=-1$ (ordonnée en 0).`],
        r: T`$a=3$, $f(x)=3x-1$`, n: 3 },
      { d: 2, t: 'Comparer sans calculer', e: T`Comparer $\frac1{0{,}7}$ et $\frac1{0{,}8}$.`,
        h: T`Sens de variation de l'inverse sur $]0;+\infty[$.`,
        s: [T`$0<0{,}7<0{,}8$ et la fonction inverse est décroissante sur $]0;+\infty[$.`, T`Donc l'ordre s'inverse : $\frac1{0{,}7}>\frac1{0{,}8}$.`],
        r: T`$\frac1{0{,}7}>\frac1{0{,}8}$` },
      { d: 2, t: 'Inéquation avec carré', e: T`Résoudre $x^2\le9$.`,
        h: T`Regarde la parabole et la droite $y=9$.`,
        s: [T`$x^2=9$ pour $x=\pm3$.`, T`La parabole est sous la droite $y=9$ entre les deux.`],
        r: T`$[-3\,;3]$` },
      { d: 3, t: 'Modéliser un tarif', e: T`Un taxi facture 1000 F de prise en charge plus 300 F par km. Quelle distance pour une course à 7300 F ?`,
        h: T`$f(x)=300x+1000$, résous $f(x)=7300$.`,
        s: [T`$300x+1000=7300\Rightarrow300x=6300$.`, T`$x=21$ km.`],
        r: T`$21$ km`, n: 21, u: 'km' }
    ]
  },

  {
    id: 'vecteurs', matiere: 'maths', niveau: 'Seconde',
    titre: 'Vecteurs du plan',
    resume: 'Translation, relation de Chasles, coordonnées, norme et colinéarité. L’outil pour représenter forces et vitesses.',
    motscles: 'vecteur chasles coordonnées norme colinéarité déterminant milieu',
    pourquoi: T`<p>En physique, une force ou une vitesse a une direction, un sens et une intensité : c'est un <b>vecteur</b>. La somme des forces, la résultante, la décomposition sur des axes : tout passe par le calcul vectoriel.</p>`,
    cours: T`<h4>Définition</h4><p>$\vec{AB}$ est caractérisé par sa direction (la droite $(AB)$), son sens (de A vers B) et sa norme $AB$.</p>
<h4>Opérations</h4><p>Chasles : $\vec{AB}+\vec{BC}=\vec{AC}$. Produit par un réel $k$ : même direction, sens conservé si $k>0$.</p>
<h4>Coordonnées</h4><p>$\vec{AB}\begin{pmatrix}x_B-x_A\\y_B-y_A\end{pmatrix}$, norme $\|\vec u\|=\sqrt{x^2+y^2}$ (repère orthonormé). Milieu de $[AB]$ : $\left(\frac{x_A+x_B}2\,;\frac{y_A+y_B}2\right)$.</p>
<h4>Colinéarité</h4><p>$\vec u$ et $\vec v$ colinéaires (même direction) $\iff\det(\vec u,\vec v)=xy'-x'y=0$. Sert à prouver un parallélisme ou un alignement.</p>`,
    formules: [
      { nom: 'Coordonnées et norme', f: T`$$\vec{AB}(x_B-x_A\,;y_B-y_A)\qquad AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$$`,
        quand: T`Toute question de longueur ou de vecteur dans un repère.`,
        pas: T`C'est « arrivée moins départ ». La norme n'est valable qu'en repère <b>orthonormé</b>.` },
      { nom: 'Critère de colinéarité', f: T`$$\det(\vec u,\vec v)=xy'-x'y=0$$`,
        quand: T`Prouver que deux droites sont parallèles ou que trois points sont alignés.`,
        pas: T`Comparer des rapports $\frac{x}{x'}=\frac y{y'}$ marche mais échoue si une coordonnée est nulle ; le déterminant marche toujours.` },
      { nom: 'Relation de Chasles', f: T`$$\vec{AB}+\vec{BC}=\vec{AC}$$`,
        quand: T`Simplifier des sommes de vecteurs, décomposer un vecteur.`,
        pas: T`Il faut que l'extrémité du premier soit l'origine du second.` }
    ],
    methode: [
      T`Calcule les coordonnées des vecteurs utiles.`,
      T`Égalité de vecteurs → parallélogramme ; colinéarité → parallélisme/alignement.`,
      T`Norme → longueur.`,
      T`Fais une figure pour contrôler.`
    ],
    exemple: {
      e: T`$A(1;2)$, $B(4;6)$. Calculer $\vec{AB}$ et $AB$.`,
      s: [T`$\vec{AB}(4-1\,;6-2)=(3\,;4)$.`, T`$AB=\sqrt{9+16}=5$.`],
      r: T`$\vec{AB}(3;4)$, $AB=5$`
    },
    pieges: [
      T`Inverser « arrivée − départ ».`,
      T`Oublier que $\vec{AB}=-\vec{BA}$.`,
      T`Calculer une norme dans un repère non orthonormé.`
    ],
    exos: [
      { d: 1, t: 'Coordonnées et norme', e: T`$A(-1;3)$, $B(2;-1)$. Calculer $AB$.`,
        h: T`$\vec{AB}(3;-4)$.`,
        s: [T`$\vec{AB}(2-(-1)\,;-1-3)=(3\,;-4)$.`, T`$AB=\sqrt{9+16}=5$.`],
        r: T`$AB=5$`, n: 5 },
      { d: 2, t: 'Colinéarité', e: T`$\vec u(2;3)$ et $\vec w(3;5)$ sont-ils colinéaires ? Donne $\det(\vec u,\vec w)$.`,
        h: T`$xy'-x'y$.`,
        s: [T`$\det=2\times5-3\times3=1\neq0$.`, T`Non colinéaires.`],
        r: T`$\det=1$ : non colinéaires`, n: 1 },
      { d: 2, t: 'Résultante de forces', e: T`Deux forces $\vec F_1(3;0)$ et $\vec F_2(0;4)$ (en N) s'appliquent sur un objet. Intensité de la résultante ?`,
        h: T`Additionne les coordonnées puis calcule la norme.`,
        s: [T`$\vec F=\vec F_1+\vec F_2=(3;4)$.`, T`$\|\vec F\|=5$ N.`],
        r: T`$5$ N`, n: 5, u: 'N' },
      { d: 3, t: 'Quatrième sommet', e: T`$A(0;0)$, $B(3;1)$, $C(4;4)$. Trouver $D$ tel que $ABCD$ soit un parallélogramme. Donne $y_D$.`,
        h: T`$ABCD$ parallélogramme $\iff\vec{AB}=\vec{DC}$.`,
        s: [T`$\vec{AB}(3;1)$, $\vec{DC}(4-x_D\,;4-y_D)$.`, T`$4-x_D=3$ et $4-y_D=1$ ⇒ $D(1;3)$.`],
        r: T`$D(1\,;3)$`, n: 3 },
      { d: 3, t: 'Alignement', e: T`$A(1;1)$, $B(3;2)$, $C(7;4)$ sont-ils alignés ?`,
        h: T`Teste la colinéarité de $\vec{AB}$ et $\vec{AC}$.`,
        s: [T`$\vec{AB}(2;1)$, $\vec{AC}(6;3)$.`, T`$\det=2\times3-1\times6=0$ : colinéaires, donc A, B, C alignés.`],
        r: T`Oui, alignés` }
    ]
  },

  {
    id: 'droites-systemes', matiere: 'maths', niveau: 'Seconde',
    titre: 'Droites et systèmes linéaires',
    resume: 'Équations cartésiennes et réduites, parallélisme, intersection de deux droites et systèmes 2×2.',
    motscles: 'droite équation cartésienne réduite vecteur directeur système parallèle intersection',
    pourquoi: T`<p>Deux équations, deux inconnues : c'est le problème le plus courant de la vie réelle (prix de deux articles, deux courants dans un circuit). Géométriquement, c'est l'intersection de deux droites.</p>`,
    cours: T`<h4>Équation cartésienne</h4><p>Toute droite a une équation $ax+by+c=0$ ; un vecteur directeur est $\vec u(-b\,;a)$.</p>
<h4>Équation réduite</h4><p>Si la droite n'est pas verticale : $y=mx+p$, $m$ coefficient directeur, $p$ ordonnée à l'origine. Verticale : $x=k$.</p>
<h4>Positions relatives</h4><p>Parallèles $\iff$ même coefficient directeur (ou vecteurs directeurs colinéaires). Sinon sécantes en un point unique, solution du système.</p>
<h4>Résolution</h4><p>Par <b>substitution</b> (isoler une inconnue) ou par <b>combinaison</b> (multiplier les lignes pour éliminer une inconnue).</p>`,
    formules: [
      { nom: 'Vecteur directeur', f: T`$$ax+by+c=0\ \Rightarrow\ \vec u(-b\,;a)$$`,
        quand: T`Passer de l'équation au vecteur directeur, et inversement.`,
        pas: T`L'ordre et le signe : c'est $(-b;a)$, pas $(a;b)$ (qui est un vecteur <b>normal</b>).` },
      { nom: 'Équation réduite', f: T`$$y=mx+p,\qquad m=\frac{y_B-y_A}{x_B-x_A}$$`,
        quand: T`Droite définie par deux points (non verticale).`,
        pas: T`Si $x_A=x_B$, la droite est verticale : équation $x=x_A$.` },
      { nom: 'Résolution par combinaison', f: T`$$\begin{cases}ax+by=c\\a'x+b'y=c'\end{cases}\ \to\ a'L_1-aL_2\text{ élimine }x$$`,
        quand: T`Aucune inconnue n'est facile à isoler (coefficients différents de 1).`,
        pas: T`Si une inconnue a un coefficient 1, la substitution est plus rapide.` }
    ],
    methode: [
      T`Nomme les inconnues et écris le système.`,
      T`Choisis substitution ou combinaison.`,
      T`Calcule la première inconnue, puis la seconde.`,
      T`Vérifie dans les <b>deux</b> équations.`
    ],
    exemple: {
      e: T`Équation de la droite passant par $A(1;2)$ dirigée par $\vec u(3;1)$.`,
      s: [T`$\vec u(-b;a)=(3;1)$ donc $a=1$, $b=-3$ : $x-3y+c=0$.`, T`$A$ appartient à la droite : $1-6+c=0\Rightarrow c=5$.`],
      r: T`$x-3y+5=0$`
    },
    pieges: [
      T`Oublier de vérifier la solution dans la seconde équation.`,
      T`Confondre vecteur directeur et vecteur normal.`,
      T`Erreur de signe en multipliant une ligne.`
    ],
    exos: [
      { d: 1, t: 'Équation réduite', e: T`Équation réduite de la droite passant par $A(1;3)$ et $B(3;7)$. Donne $m$.`,
        h: T`$m=\frac{7-3}{3-1}$.`,
        s: [T`$m=2$, puis $3=2\times1+p\Rightarrow p=1$.`],
        r: T`$y=2x+1$`, n: 2 },
      { d: 2, t: 'Intersection', e: T`Point d'intersection des droites $y=2x+1$ et $y=-x+7$. Donne l'ordonnée.`,
        h: T`Égalise les deux expressions de $y$.`,
        s: [T`$2x+1=-x+7\Rightarrow x=2$.`, T`$y=5$.`],
        r: T`$(2\,;5)$`, n: 5 },
      { d: 2, t: 'Système', e: T`Résoudre $3x+2y=12$ et $x-y=-1$. Donne $x$.`,
        h: T`Isole $x$ dans la seconde : $x=y-1$.`,
        s: [T`Substitution : $3(y-1)+2y=12\Rightarrow5y=15\Rightarrow y=3$.`, T`$x=2$. Vérif : $6+6=12$ ✔.`],
        r: T`$(2\,;3)$`, n: 2 },
      { d: 3, t: 'Problème concret', e: T`3 cahiers et 2 stylos coûtent 1900 F ; 2 cahiers et 5 stylos coûtent 2000 F. Prix d'un cahier ?`,
        h: T`Combinaison : multiplie la 1re par 2 et la 2e par 3.`,
        s: [T`$3c+2s=1900$ et $2c+5s=2000$.`, T`$6c+4s=3800$ et $6c+15s=6000$ ; soustraction : $11s=2200$, $s=200$.`, T`$3c=1900-400=1500$, $c=500$.`],
        r: T`Cahier 500 F, stylo 200 F`, n: 500, u: 'F' },
      { d: 3, t: 'Parallélisme', e: T`Les droites $2x-3y+1=0$ et $-4x+6y+5=0$ sont-elles parallèles ?`,
        h: T`Compare les vecteurs directeurs $(-b;a)$.`,
        s: [T`$\vec u(3;2)$ et $\vec v(-6;-4)=-2\vec u$ : colinéaires.`, T`Parallèles. Distinctes ? $(0;\frac13)$ est sur la 1re mais $6\times\frac13+5=7\neq0$ : oui, strictement parallèles.`],
        r: T`Strictement parallèles` }
    ]
  },

  {
    id: 'statistiques', matiere: 'maths', niveau: 'Seconde',
    titre: 'Statistiques et évolutions en pourcentage',
    resume: 'Moyenne, médiane, quartiles, écart-type, coefficient multiplicateur et évolutions successives.',
    motscles: 'moyenne médiane quartile écart-type pourcentage évolution coefficient multiplicateur',
    pourquoi: T`<p>Résumer des données (salaires, mesures, transactions), repérer une valeur anormale, comparer des évolutions : c'est la base de l'analyse de données et de la détection d'anomalies, très utilisée en ingénierie, en finance et en lutte contre la fraude.</p>`,
    cours: T`<h4>Indicateurs de position</h4><p><b>Moyenne</b> $\bar x=\frac{\sum n_ix_i}{N}$ (sensible aux valeurs extrêmes). <b>Médiane</b> : partage la série ordonnée en deux moitiés (robuste).</p>
<p><b>Quartiles</b> (convention lycée) : $Q_1$ = plus petite valeur telle qu'au moins 25 % des données lui soient inférieures ou égales ; $Q_3$ idem avec 75 %.</p>
<h4>Indicateurs de dispersion</h4><p>Étendue, écart interquartile $Q_3-Q_1$, écart-type $\sigma=\sqrt{\frac1N\sum n_i(x_i-\bar x)^2}$.</p>
<h4>Évolutions</h4><p>Une hausse de $t\,\%$ correspond au coefficient multiplicateur $CM=1+\frac t{100}$. Évolutions successives : on <b>multiplie</b> les CM. Évolution réciproque : $\frac1{CM}$.</p>`,
    formules: [
      { nom: 'Moyenne pondérée', f: T`$$\bar x=\frac{n_1x_1+\dots+n_px_p}{n_1+\dots+n_p}$$`,
        quand: T`Données avec effectifs ou coefficients.`,
        pas: T`La moyenne de moyennes de groupes de tailles différentes n'est pas la moyenne globale.` },
      { nom: 'Écart-type', f: T`$$\sigma=\sqrt{\frac1N\sum n_i(x_i-\bar x)^2}$$`,
        quand: T`Mesurer la dispersion autour de la moyenne (même unité que les données).`,
        pas: T`Pour une série avec des valeurs extrêmes, l'écart interquartile (avec la médiane) est plus robuste.` },
      { nom: 'Coefficient multiplicateur', f: T`$$CM=1+\frac t{100}\qquad CM_{\text{global}}=CM_1\times CM_2\qquad CM_{\text{réciproque}}=\frac1{CM}$$`,
        quand: T`Pourcentages d'évolution, successifs ou réciproques.`,
        pas: T`On n'additionne pas des pourcentages successifs : $+20\,\%$ puis $-20\,\%$ ne fait pas 0 %.` }
    ],
    methode: [
      T`Range les données dans l'ordre croissant.`,
      T`Calcule l'effectif total $N$.`,
      T`Position : moyenne, médiane, quartiles. Dispersion : étendue, $Q_3-Q_1$, $\sigma$.`,
      T`Pour les pourcentages, passe toujours par les CM.`
    ],
    exemple: {
      e: T`Notes : 8, 12, 15, 10, 15. Moyenne et médiane ?`,
      s: [T`Série ordonnée : 8, 10, 12, 15, 15.`, T`Moyenne $=\frac{60}5=12$.`, T`Médiane : 3e valeur sur 5 = 12.`],
      r: T`Moyenne 12, médiane 12`
    },
    pieges: [
      T`Calculer la médiane sans ordonner la série.`,
      T`Additionner des pourcentages successifs.`,
      T`Oublier les effectifs dans une moyenne pondérée.`
    ],
    exos: [
      { d: 1, t: 'Moyenne', e: T`Moyenne de 12, 9, 15 et 14 ?`,
        h: T`Somme / 4.`,
        s: [T`$\frac{50}4=12{,}5$.`],
        r: T`$12{,}5$`, n: 12.5 },
      { d: 2, t: 'Quartiles', e: T`Série : 2, 4, 4, 5, 7, 9, 10. Calculer l'écart interquartile.`,
        h: T`$N=7$ : $Q_1$ est la 2e valeur ($7/4=1{,}75$), $Q_3$ la 6e ($3\times7/4=5{,}25$).`,
        s: [T`$Q_1=4$, $Q_3=9$ (médiane 5).`, T`Écart interquartile $=9-4=5$.`],
        r: T`$5$`, n: 5 },
      { d: 2, t: 'Évolutions successives', e: T`Un prix augmente de 20 % puis baisse de 20 %. Évolution globale en % ?`,
        h: T`$1{,}2\times0{,}8$.`,
        s: [T`$CM=1{,}2\times0{,}8=0{,}96$.`, T`Soit une baisse de 4 %.`],
        r: T`$-4\,\%$`, n: -4, u: '%' },
      { d: 3, t: 'Écart-type', e: T`Calculer l'écart-type de la série 2, 4, 4, 4, 5, 5, 7, 9.`,
        h: T`Moyenne 5. Somme des carrés des écarts : 32.`,
        s: [T`$\bar x=\frac{40}8=5$.`, T`Écarts au carré : 9, 1, 1, 1, 0, 0, 4, 16 → somme 32.`, T`$\sigma=\sqrt{32/8}=\sqrt4=2$.`],
        r: T`$\sigma=2$`, n: 2 },
      { d: 3, t: 'Évolution réciproque', e: T`Après une hausse de 25 %, quelle baisse (en %) ramène au prix initial ?`,
        h: T`$\frac1{1{,}25}$.`,
        s: [T`$CM_r=\frac1{1{,}25}=0{,}8$.`, T`Baisse de 20 % (et non 25 %).`],
        r: T`$-20\,\%$`, n: -20, u: '%' }
    ]
  },

  {
    id: 'probabilites-seconde', matiere: 'maths', niveau: 'Seconde',
    titre: 'Probabilités : premiers modèles',
    resume: 'Univers, événements, équiprobabilité, réunion, intersection, contraire, arbres et tableaux.',
    motscles: 'probabilité univers événement équiprobable contraire réunion intersection tableau',
    pourquoi: T`<p>Les probabilités mesurent l'incertitude : risque de panne, chance qu'une transaction soit frauduleuse, fiabilité d'un test. Ce chapitre pose le vocabulaire qui sera utilisé jusqu'en école d'ingénieur.</p>`,
    cours: T`<h4>Vocabulaire</h4><p>L'<b>univers</b> $\Omega$ est l'ensemble des issues. Un <b>événement</b> est une partie de $\Omega$. $\bar A$ (contraire), $A\cap B$ (« A et B »), $A\cup B$ (« A ou B »).</p>
<h4>Loi de probabilité</h4><p>Chaque issue a une probabilité entre 0 et 1, la somme vaut 1. Équiprobabilité : toutes les issues ont la même probabilité.</p>
<h4>Outils</h4><p>Arbre (expériences successives), tableau à double entrée (deux critères), diagramme.</p>`,
    formules: [
      { nom: 'Équiprobabilité', f: T`$$P(A)=\frac{\text{nombre d'issues favorables}}{\text{nombre total d'issues}}$$`,
        quand: T`Dé équilibré, tirage au hasard, pièce non truquée.`,
        pas: T`Si les issues ne sont pas équiprobables (somme de deux dés : 7 est plus probable que 2), compte les issues élémentaires.` },
      { nom: 'Contraire', f: T`$$P(\bar A)=1-P(A)$$`,
        quand: T`« Au moins un », « pas de », quand le contraire est plus simple à compter.`,
        pas: T`« Au moins un pile » n'est pas le contraire de « tous piles », mais de « aucun pile ».` },
      { nom: 'Réunion', f: T`$$P(A\cup B)=P(A)+P(B)-P(A\cap B)$$`,
        quand: T`Probabilité de « A ou B ».`,
        pas: T`Sans soustraire $P(A\cap B)$, on compte deux fois les issues communes.` }
    ],
    methode: [
      T`Décris l'univers (liste, arbre ou tableau).`,
      T`Vérifie s'il y a équiprobabilité.`,
      T`Traduis l'événement (et, ou, contraire).`,
      T`Calcule et vérifie que le résultat est entre 0 et 1.`
    ],
    exemple: {
      e: T`On tire une carte dans un jeu de 32. Probabilité d'obtenir un cœur ou un roi ?`,
      s: [T`$P(\text{cœur})=\frac8{32}$, $P(\text{roi})=\frac4{32}$, $P(\text{roi de cœur})=\frac1{32}$.`, T`$P=\frac{8+4-1}{32}=\frac{11}{32}$.`],
      r: T`$\frac{11}{32}\approx0{,}344$`
    },
    pieges: [
      T`Compter deux fois l'intersection.`,
      T`Supposer l'équiprobabilité à tort.`,
      T`Mal identifier le contraire de « au moins un ».`
    ],
    exos: [
      { d: 1, t: 'Urne', e: T`Une urne contient 3 boules rouges et 5 bleues. Probabilité de tirer une bleue ?`,
        h: T`5 sur 8.`,
        s: [T`$P=\frac58=0{,}625$.`],
        r: T`$\frac58$`, n: 0.625 },
      { d: 2, t: 'Au moins un pile', e: T`On lance deux pièces. Probabilité d'au moins un pile ?`,
        h: T`Contraire : aucun pile (FF).`,
        s: [T`$\Omega=\{PP,PF,FP,FF\}$, équiprobable.`, T`$P=1-P(FF)=1-\frac14=\frac34$.`],
        r: T`$\frac34$`, n: 0.75 },
      { d: 2, t: 'Tableau à double entrée', e: T`Sur 200 élèves, 60 filles et 30 garçons font du sport. Probabilité qu'un élève choisi au hasard fasse du sport ?`,
        h: T`Total des sportifs / 200.`,
        s: [T`$60+30=90$ sportifs.`, T`$P=\frac{90}{200}=0{,}45$.`],
        r: T`$0{,}45$`, n: 0.45 },
      { d: 3, t: 'Intersection', e: T`$P(A)=0{,}5$, $P(B)=0{,}4$ et $P(A\cup B)=0{,}7$. Calculer $P(A\cap B)$.`,
        h: T`Formule de la réunion.`,
        s: [T`$0{,}7=0{,}5+0{,}4-P(A\cap B)$.`, T`$P(A\cap B)=0{,}2$.`],
        r: T`$0{,}2$`, n: 0.2 },
      { d: 3, t: 'Double avec deux dés', e: T`On lance deux dés. Probabilité d'obtenir un double ?`,
        h: T`36 issues équiprobables.`,
        s: [T`Doubles : (1,1) … (6,6), soit 6.`, T`$P=\frac6{36}=\frac16$.`],
        r: T`$\frac16$`, n: 0.1667 }
    ]
  }

  ]);
})();

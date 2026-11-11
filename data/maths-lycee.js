/* MATHÉMATIQUES — NIVEAU LYCÉE
   Les textes utilisent String.raw (T`...`) pour pouvoir écrire du LaTeX avec des \ simples.
   $...$ = formule dans le texte, $$...$$ = formule centrée. Ne jamais écrire le signe dollar suivi d'une accolade ouvrante. */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  /* ================================================================ */
  {
    id: 'calcul-base', matiere: 'maths', niveau: 'Lycée',
    titre: 'Calcul de base : fractions, puissances, identités',
    resume: 'Les règles de calcul qui reviennent dans 100 % des exercices. Si tu te sens « nulle en maths », c’est ici qu’on commence.',
    motscles: 'fraction puissance factoriser développer identité remarquable',
    pourquoi: T`<p>En école d'ingénieur, on ne te demandera presque jamais de calculer $\frac23 + \frac56$ seul. Mais ce calcul sera <b>caché</b> dans un exercice de circuit, de mécanique ou d'intégrale. La plupart des étudiants qui « bloquent » en physique bloquent en réalité sur une fraction ou une puissance mal manipulée.</p><p>Maîtriser ce chapitre, c'est supprimer la source n°1 d'erreurs.</p>`,
    cours: T`<h4>Fractions</h4>
<p>Une fraction $\frac ab$ est une division : $a$ divisé par $b$ ($b\neq0$). Pour additionner, il faut le <b>même dénominateur</b> (on additionne des « morceaux de même taille »). Pour multiplier, on multiplie en haut et en bas. Diviser par une fraction, c'est multiplier par son inverse.</p>
$$\frac ab\times\frac cd=\frac{ac}{bd}\qquad \frac{a/b}{c/d}=\frac ab\times\frac dc$$
<h4>Puissances</h4>
<p>$a^n$ veut dire $a\times a\times\dots\times a$ ($n$ fois). Toutes les règles viennent de cette définition : $a^3\times a^2 = (a a a)(a a) = a^5$. Par convention $a^0=1$ et $a^{-n}=\frac1{a^n}$.</p>
<h4>Développer et factoriser</h4>
<p><b>Développer</b> = transformer un produit en somme (utile pour simplifier). <b>Factoriser</b> = transformer une somme en produit (utile pour résoudre une équation, étudier un signe). Ce sont deux directions du même outil : la distributivité $k(a+b)=ka+kb$.</p>`,
    formules: [
      { nom: 'Addition de fractions', f: T`$$\frac ab+\frac cd=\frac{ad+bc}{bd}$$`,
        quand: T`Pour additionner ou soustraire deux fractions. Si les dénominateurs ont un facteur commun (6 et 4), prends le plus petit multiple commun (12) pour des nombres plus petits.`,
        pas: T`On n'additionne <b>jamais</b> numérateurs et dénominateurs séparément : $\frac12+\frac13\neq\frac25$. Vérifie : $0{,}5+0{,}33=0{,}83$, alors que $\frac25=0{,}4$.` },
      { nom: 'Règles des puissances', f: T`$$a^m a^n=a^{m+n}\qquad \frac{a^m}{a^n}=a^{m-n}\qquad (a^m)^n=a^{mn}\qquad (ab)^n=a^nb^n$$`,
        quand: T`Dès qu'il y a des puissances d'un <b>même nombre</b> (ou qu'on peut s'y ramener : $4=2^2$, $8=2^3$, $27=3^3$). Indispensable en physique avec les puissances de 10 ($\text{k}=10^3$, $\text{m}=10^{-3}$, $\mu=10^{-6}$).`,
        pas: T`Ces règles ne marchent pas pour une somme : $a^2+a^3\neq a^5$ et $(a+b)^2\neq a^2+b^2$. Et $a^m b^n$ ne se simplifie pas si $a\neq b$.` },
      { nom: 'Identités remarquables', f: T`$$(a+b)^2=a^2+2ab+b^2\qquad (a-b)^2=a^2-2ab+b^2\qquad (a-b)(a+b)=a^2-b^2$$`,
        quand: T`De gauche à droite pour <b>développer</b> vite. De droite à gauche pour <b>factoriser</b> : dès que tu vois « carré moins carré » ($9x^2-25$), pense à $a^2-b^2$.`,
        pas: T`Le double produit $2ab$ est l'oubli le plus fréquent. Si tu doutes, développe à la main $(a+b)(a+b)$ : quatre termes, dont deux identiques.` }
    ],
    methode: [
      T`Repère la forme : fractions ? puissances du même nombre ? carrés ?`,
      T`Pour les puissances, écris tout avec la <b>même base</b> (souvent un nombre premier : 2, 3, 5).`,
      T`Applique les règles une à une, en écrivant chaque ligne. Ne saute pas d'étapes au début.`,
      T`Vérifie avec une valeur numérique (calculatrice ou $x=1$) que le résultat est le même avant/après.`
    ],
    exemple: {
      e: T`Simplifier $A=\dfrac{2^5\times 4^{-1}}{8^2}$.`,
      s: [
        T`<b>Même base.</b> $4=2^2$ et $8=2^3$. Pourquoi : les règles des puissances exigent la même base.`,
        T`$4^{-1}=(2^2)^{-1}=2^{-2}$ et $8^2=(2^3)^2=2^6$ (règle $(a^m)^n=a^{mn}$).`,
        T`Numérateur : $2^5\times2^{-2}=2^{5-2}=2^3$ (règle du produit : on additionne les exposants).`,
        T`Quotient : $\frac{2^3}{2^6}=2^{3-6}=2^{-3}=\frac1{2^3}=\frac18$.`
      ],
      r: T`$A=\frac18=0{,}125$`
    },
    pieges: [
      T`$\frac{a+b}{a}\neq b$ : on ne simplifie que des <b>facteurs</b>, jamais des termes d'une somme. $\frac{a+b}{a}=1+\frac ba$.`,
      T`$-3^2=-9$ mais $(-3)^2=9$ : la puissance s'applique avant le signe moins sauf s'il y a des parenthèses.`,
      T`$\sqrt{a+b}\neq\sqrt a+\sqrt b$ (essaie avec $9+16$).`
    ],
    exos: [
      { d: 1, t: 'Somme de fractions', e: T`Calculer $\frac23+\frac56$ et donner le résultat sous forme décimale.`,
        h: T`Le plus petit dénominateur commun de 3 et 6 est 6.`,
        s: [T`Pourquoi un dénominateur commun : on ne peut additionner que des parts de même taille.`, T`$\frac23=\frac{4}{6}$ (on multiplie en haut et en bas par 2).`, T`$\frac46+\frac56=\frac96=\frac32$.`],
        r: T`$\frac32=1{,}5$`, n: 1.5 },
      { d: 1, t: 'Factoriser une différence de carrés', e: T`Factoriser $9x^2-25$.`,
        h: T`$9x^2=(3x)^2$ et $25=5^2$. Quelle identité a la forme « carré moins carré » ?`,
        s: [T`On reconnaît $a^2-b^2$ avec $a=3x$ et $b=5$.`, T`Pourquoi cette identité : c'est la seule qui transforme une <b>différence</b> de carrés en produit.`, T`$a^2-b^2=(a-b)(a+b)$ donc $9x^2-25=(3x-5)(3x+5)$.`, T`Vérification : $(3x-5)(3x+5)=9x^2+15x-15x-25=9x^2-25$. ✔`],
        r: T`$(3x-5)(3x+5)$` },
      { d: 2, t: 'Puissances de 3', e: T`Simplifier $B=\dfrac{3^4\times 9^{-2}}{27^{-1}}$ (donne un entier).`,
        h: T`Écris $9$ et $27$ comme des puissances de 3.`,
        s: [T`$9=3^2$ donc $9^{-2}=3^{-4}$ ; $27=3^3$ donc $27^{-1}=3^{-3}$.`, T`Numérateur : $3^4\times3^{-4}=3^0=1$.`, T`$B=\frac{1}{3^{-3}}=3^{3}=27$ (diviser par $3^{-3}$ revient à multiplier par $3^3$).`],
        r: T`$B=27$`, n: 27 },
      { d: 2, t: 'Unités et puissances de 10', e: T`Un condensateur a une capacité $C=470\ \mu\text{F}$ et une résistance $R=2{,}2\ \text{k}\Omega$. Calculer $RC$ en secondes.`,
        h: T`$\mu=10^{-6}$ et $\text{k}=10^{3}$. Multiplie les nombres entre eux et les puissances de 10 entre elles.`,
        s: [T`$R=2{,}2\times10^3\ \Omega$, $C=470\times10^{-6}\ \text{F}$.`, T`$RC=2{,}2\times470\times10^{3-6}=1034\times10^{-3}$.`, T`$RC\approx1{,}03\ \text{s}$.`],
        r: T`$RC\approx1{,}03\ \text{s}$`, n: 1.034, u: 's' },
      { d: 3, t: 'Calcul astucieux', e: T`Montrer que pour tout réel $x$, $(x+1)^2-(x-1)^2=4x$. En déduire, sans calculatrice, $1001^2-999^2$.`,
        h: T`Développe les deux carrés. Puis cherche quelle valeur de $x$ donne $x+1=1001$.`,
        s: [T`$(x+1)^2=x^2+2x+1$ et $(x-1)^2=x^2-2x+1$.`, T`Différence : $x^2+2x+1-x^2+2x-1=4x$. (Attention au signe moins devant la parenthèse.)`, T`Avec $x=1000$ : $x+1=1001$ et $x-1=999$.`, T`Donc $1001^2-999^2=4\times1000=4000$. Pourquoi c'est malin : on remplace deux grands carrés par une multiplication simple.`],
        r: T`$4000$`, n: 4000 }
    ]
  },

  /* ================================================================ */
  {
    id: 'second-degre', matiere: 'maths', niveau: 'Lycée',
    titre: 'Équations et second degré',
    resume: 'Résoudre une équation, choisir entre factoriser et discriminant, étudier le signe d’un trinôme.',
    motscles: 'discriminant delta trinôme équation inéquation racine',
    pourquoi: T`<p>Résoudre une équation, c'est trouver la valeur qui rend une situation vraie : <i>à quel instant</i> la balle touche le sol, <i>quelle résistance</i> donne la bonne tension. Le second degré apparaît partout : chute libre ($\frac12gt^2$), énergie ($\frac12mv^2$), équations caractéristiques en électricité.</p>`,
    cours: T`<h4>Le trinôme</h4>
<p>Une équation du second degré s'écrit $ax^2+bx+c=0$ avec $a\neq0$. Le <b>discriminant</b> $\Delta=b^2-4ac$ dit combien il y a de solutions :</p>
<ul><li>$\Delta>0$ : deux solutions $x_{1,2}=\dfrac{-b\pm\sqrt\Delta}{2a}$</li><li>$\Delta=0$ : une solution double $x_0=-\dfrac{b}{2a}$</li><li>$\Delta<0$ : aucune solution réelle (mais deux complexes, voir chapitre Complexes)</li></ul>
<h4>D'où vient la formule ?</h4>
<p>On complète le carré : $ax^2+bx+c=a\left[\left(x+\frac b{2a}\right)^2-\frac{\Delta}{4a^2}\right]$. Le crochet est une différence de carrés si $\Delta\ge0$. Comprendre ça t'évite d'apprendre par cœur sans savoir.</p>
<h4>Signe du trinôme</h4>
<p>$ax^2+bx+c$ est du <b>signe de $a$</b> partout, sauf <b>entre</b> les racines (où il est du signe contraire).</p>`,
    formules: [
      { nom: 'Discriminant et racines', f: T`$$\Delta=b^2-4ac\qquad x_{1,2}=\frac{-b\pm\sqrt\Delta}{2a}$$`,
        quand: T`Équation $ax^2+bx+c=0$ <b>complète</b> (les trois coefficients non nuls) et pas de racine évidente.`,
        pas: T`Si $c=0$ : factorise par $x$ ($x(ax+b)=0$), c'est immédiat. Si $b=0$ : isole $x^2$ ($x^2=-c/a$). Le discriminant marche aussi, mais c'est plus long et plus risqué.` },
      { nom: 'Équation produit nul', f: T`$$A\times B=0\iff A=0\ \text{ou}\ B=0$$`,
        quand: T`L'équation est déjà sous forme de <b>produit égal à zéro</b>, ou tu peux factoriser.`,
        pas: T`Ne développe jamais une expression déjà factorisée pour ensuite recalculer $\Delta$ ! Et la règle ne marche qu'avec <b>zéro</b> : $AB=6$ n'implique pas $A=6$ ou $B=6$.` },
      { nom: 'Somme et produit des racines', f: T`$$x_1+x_2=-\frac ba\qquad x_1x_2=\frac ca$$`,
        quand: T`Pour trouver la 2ᵉ racine quand tu en connais une (racine évidente comme $1$, $-1$, $2$), ou pour vérifier tes solutions.`,
        pas: T`Ne sert pas à trouver les racines « de nulle part » sauf si elles sont entières et faciles à deviner.` }
    ],
    methode: [
      T`Mets tout d'un côté : $\ldots=0$.`,
      T`Regarde la forme : déjà factorisé ? $b=0$ ? $c=0$ ? racine évidente ?`,
      T`Sinon : calcule $\Delta$, puis les racines.`,
      T`Vérifie en remplaçant une solution dans l'équation de départ.`
    ],
    exemple: {
      e: T`Résoudre $2x^2-3x-2=0$.`,
      s: [T`Pas de forme particulière ($a,b,c$ tous non nuls, pas de racine évidente immédiate) → discriminant.`, T`$a=2,\ b=-3,\ c=-2$. $\Delta=(-3)^2-4\times2\times(-2)=9+16=25$.`, T`$\Delta>0$ donc deux racines : $x=\frac{3\pm5}{4}$, soit $x_1=2$ et $x_2=-\frac12$.`, T`Vérification avec le produit : $x_1x_2=-1=\frac ca=\frac{-2}{2}$ ✔`],
      r: T`$S=\left\{-\frac12\,;\,2\right\}$`
    },
    pieges: [
      T`$-b$ quand $b$ est négatif : si $b=-3$, alors $-b=+3$. Écris toujours $a$, $b$, $c$ avec leur signe avant de calculer.`,
      T`$(-3)^2=9$, pas $-9$ : mets des parenthèses dans $b^2$.`,
      T`Diviser par $x$ des deux côtés fait <b>perdre</b> la solution $x=0$. Factorise plutôt.`
    ],
    exos: [
      { d: 1, t: 'Racines évidentes', e: T`Résoudre $x^2-5x+6=0$. Donne la plus grande solution.`,
        h: T`Cherche deux nombres de somme 5 et de produit 6.`,
        s: [T`Somme $=-b/a=5$, produit $=c/a=6$.`, T`$2+3=5$ et $2\times3=6$ : les racines sont $2$ et $3$.`, T`Méthode alternative : $\Delta=25-24=1$, $x=\frac{5\pm1}{2}$. Même résultat.`],
        r: T`$S=\{2\,;\,3\}$, la plus grande est $3$.`, n: 3 },
      { d: 1, t: 'Sans discriminant', e: T`Résoudre $3x^2=12x$. Donne la solution non nulle.`,
        h: T`Tout d'un côté, puis factorise par ce qui est commun.`,
        s: [T`$3x^2-12x=0$.`, T`Pourquoi pas $\Delta$ : $c=0$, donc on peut factoriser par $3x$, plus rapide.`, T`$3x(x-4)=0 \iff x=0$ ou $x=4$.`, T`Piège évité : diviser par $x$ aurait fait perdre $x=0$.`],
        r: T`$S=\{0\,;\,4\}$`, n: 4 },
      { d: 2, t: 'Discriminant négatif', e: T`Résoudre dans $\mathbb R$ : $x^2+x+1=0$. Que vaut $\Delta$ ?`,
        h: T`Calcule $\Delta=b^2-4ac$ avec $a=b=c=1$.`,
        s: [T`$\Delta=1-4=-3<0$.`, T`Un carré réel n'est jamais négatif, donc $\sqrt\Delta$ n'existe pas dans $\mathbb R$.`, T`Aucune solution réelle. (En complexes : $x=\frac{-1\pm i\sqrt3}{2}$.)`],
        r: T`$\Delta=-3$, $S=\varnothing$`, n: -3 },
      { d: 3, t: 'Inéquation', e: T`Résoudre $-x^2+4x-3>0$.`,
        h: T`Trouve les racines, puis utilise la règle « signe de $a$ à l'extérieur des racines ».`,
        s: [T`Racines : $\Delta=16-12=4$, $x=\frac{-4\pm2}{-2}$ → $x_1=1$, $x_2=3$.`, T`$a=-1<0$ : le trinôme est <b>négatif</b> à l'extérieur des racines, <b>positif entre</b> elles.`, T`On veut $>0$ (strict) : $x\in\,]1\,;3[$.`, T`Vérification : $x=2$ donne $-4+8-3=1>0$ ✔`],
        r: T`$S=\,]1\,;3[$` },
      { d: 3, t: 'Problème de physique', e: T`Une balle est lancée vers le haut : sa hauteur est $h(t)=-5t^2+20t$ (en m, $t$ en s). À quel instant retombe-t-elle au sol ?`,
        h: T`« Au sol » veut dire $h(t)=0$. Quelle méthode est la plus rapide quand $c=0$ ?`,
        s: [T`On résout $-5t^2+20t=0$.`, T`Factorisation (car $c=0$) : $-5t(t-4)=0$.`, T`$t=0$ (le lancer) ou $t=4$ s (le retour au sol).`, T`Bonus : le sommet est au milieu des racines, $t=2$ s, et $h(2)=-20+40=20$ m.`],
        r: T`$t=4\ \text{s}$`, n: 4, u: 's' }
    ]
  },

  /* ================================================================ */
  {
    id: 'trigonometrie', matiere: 'maths', niveau: 'Lycée',
    titre: 'Trigonométrie',
    resume: 'Sinus, cosinus, radians et triangles : l’outil pour décomposer les forces et décrire tout ce qui tourne ou oscille.',
    motscles: 'sinus cosinus tangente radian cercle al-kashi angle',
    pourquoi: T`<p>En mécanique, on <b>projette</b> les forces sur des axes avec $\cos$ et $\sin$. En électricité, le courant du secteur est une sinusoïde $i(t)=I_m\cos(\omega t)$. Sans trigonométrie, impossible d'aborder les plans inclinés, les oscillations ou le courant alternatif.</p>`,
    cours: T`<h4>Triangle rectangle</h4>
<p>Pour un angle $\theta$ : $\cos\theta=\frac{\text{adjacent}}{\text{hypoténuse}}$, $\sin\theta=\frac{\text{opposé}}{\text{hypoténuse}}$, $\tan\theta=\frac{\text{opposé}}{\text{adjacent}}$. Moyen mnémotechnique : <b>SOH CAH TOA</b>.</p>
<h4>Radians</h4>
<p>Un angle en radians = longueur de l'arc sur un cercle de rayon 1. Un tour complet $=2\pi$ rad $=360°$, donc $\pi\ \text{rad}=180°$. En physique on travaille <b>toujours</b> en radians (les dérivées de $\sin$ et $\cos$ ne sont simples qu'en radians).</p>
<h4>Cercle trigonométrique</h4>
<p>Le point de l'angle $\theta$ sur le cercle de rayon 1 a pour coordonnées $(\cos\theta,\sin\theta)$. Par Pythagore : $\cos^2\theta+\sin^2\theta=1$.</p>
<p>Valeurs à connaître : $\cos 0=1$, $\cos\frac\pi6=\frac{\sqrt3}2$, $\cos\frac\pi4=\frac{\sqrt2}2$, $\cos\frac\pi3=\frac12$, $\cos\frac\pi2=0$ (et le sinus dans l'ordre inverse).</p>`,
    formules: [
      { nom: 'SOH CAH TOA', f: T`$$\sin\theta=\frac{\text{opp}}{\text{hyp}}\quad \cos\theta=\frac{\text{adj}}{\text{hyp}}\quad \tan\theta=\frac{\text{opp}}{\text{adj}}$$`,
        quand: T`Triangle <b>rectangle</b>, un angle et un côté connus. Choisis la fonction qui relie <b>le côté connu et le côté cherché</b>.`,
        pas: T`Dans un triangle <b>quelconque</b> (pas d'angle droit), ces formules sont fausses : utilise Al-Kashi.` },
      { nom: 'Al-Kashi (Pythagore généralisé)', f: T`$$a^2=b^2+c^2-2bc\cos\hat A$$`,
        quand: T`Triangle quelconque : deux côtés et l'angle entre eux connus → troisième côté. Ou trois côtés → un angle.`,
        pas: T`Si l'angle vaut $90°$, $\cos=0$ et on retrouve Pythagore. Pour un triangle rectangle, SOH CAH TOA est plus rapide.` },
      { nom: 'Relation fondamentale', f: T`$$\cos^2\theta+\sin^2\theta=1$$`,
        quand: T`Tu connais $\cos\theta$ et veux $\sin\theta$ (ou l'inverse) sans calculer l'angle.`,
        pas: T`Elle donne $\sin^2$, donc deux signes possibles : regarde dans quel quart du cercle est $\theta$ pour choisir.` },
      { nom: 'Formules d’addition', f: T`$$\cos(a+b)=\cos a\cos b-\sin a\sin b\qquad \sin(a+b)=\sin a\cos b+\cos a\sin b$$`,
        quand: T`Développer $\cos(\omega t+\varphi)$ en électricité et en mécanique, ou calculer des valeurs exactes ($\cos\frac{\pi}{12}$).`,
        pas: T`$\cos(a+b)\neq\cos a+\cos b$. La fonction cosinus n'est pas linéaire.` }
    ],
    methode: [
      T`Fais un schéma et repère l'angle droit (s'il existe).`,
      T`Nomme les côtés par rapport à l'angle utilisé : opposé, adjacent, hypoténuse.`,
      T`Choisis la formule qui contient le côté connu et l'inconnue.`,
      T`Vérifie le mode de la calculatrice (degrés ou radians) !`
    ],
    exemple: {
      e: T`Une caisse de poids $P=100\ \text{N}$ est posée sur un plan incliné de $30°$. Calculer la composante du poids parallèle à la pente.`,
      s: [T`Schéma : on décompose $\vec P$ selon la pente et la perpendiculaire. L'angle entre $\vec P$ et la perpendiculaire à la pente vaut aussi $30°$.`, T`La composante le long de la pente est le côté <b>opposé</b> à cet angle, $\vec P$ est l'hypoténuse.`, T`Pourquoi sinus : opposé/hypoténuse → $\sin$. Donc $P_\parallel=P\sin30°=100\times0{,}5$.`, T`Vérification par cas limite : pente nulle ($0°$) → $\sin0=0$, pas de glissement. Logique.`],
      r: T`$P_\parallel=50\ \text{N}$ (et $P_\perp=P\cos30°\approx86{,}6\ \text{N}$)`
    },
    pieges: [
      T`Calculatrice en degrés alors que l'énoncé est en radians (ou l'inverse) : c'est l'erreur la plus fréquente aux examens.`,
      T`$\cos^2 x$ veut dire $(\cos x)^2$, pas $\cos(x^2)$.`,
      T`L'équation $\cos x=a$ a en général <b>deux</b> solutions par tour : $x=\pm\arccos a+2k\pi$.`
    ],
    exos: [
      { d: 1, t: 'Conversion', e: T`Convertir $135°$ en radians (valeur décimale).`,
        h: T`$180°=\pi$ rad : fais une règle de trois.`,
        s: [T`$x=135\times\frac{\pi}{180}=\frac{3\pi}{4}$.`, T`$\frac{3\pi}4\approx2{,}356$ rad.`],
        r: T`$\frac{3\pi}{4}\approx2{,}356\ \text{rad}$`, n: 2.356, u: 'rad' },
      { d: 1, t: 'L’échelle', e: T`Une échelle de 5 m s'appuie contre un mur et fait un angle de $60°$ avec le sol. À quelle hauteur touche-t-elle le mur ?`,
        h: T`Hauteur = côté opposé à l'angle de 60°, échelle = hypoténuse.`,
        s: [T`Triangle rectangle (mur ⟂ sol). On connaît l'hypoténuse (5 m) et on cherche l'opposé.`, T`Opposé/hypoténuse → sinus : $h=5\sin60°=5\times\frac{\sqrt3}{2}$.`, T`$h\approx4{,}33\ \text{m}$.`],
        r: T`$h\approx4{,}33\ \text{m}$`, n: 4.33, u: 'm' },
      { d: 2, t: 'Sinus à partir du cosinus', e: T`On sait que $\cos x=0{,}6$ avec $x\in\left[0\,;\frac\pi2\right]$. Calculer $\sin x$.`,
        h: T`Utilise $\cos^2+\sin^2=1$, puis choisis le signe.`,
        s: [T`$\sin^2x=1-0{,}36=0{,}64$.`, T`$\sin x=\pm0{,}8$.`, T`Sur $\left[0\,;\frac\pi2\right]$ le sinus est positif, donc $\sin x=0{,}8$.`],
        r: T`$\sin x=0{,}8$`, n: 0.8 },
      { d: 3, t: 'Triangle quelconque', e: T`Dans un triangle, $b=7$, $c=5$ et l'angle entre eux $\hat A=60°$. Calculer le côté $a$.`,
        h: T`Pas d'angle droit, deux côtés et l'angle entre eux : quelle formule ?`,
        s: [T`Pas de triangle rectangle → Al-Kashi.`, T`$a^2=49+25-2\times7\times5\times\cos60°=74-35=39$.`, T`$a=\sqrt{39}\approx6{,}245$.`],
        r: T`$a=\sqrt{39}\approx6{,}24$`, n: 6.245 },
      { d: 3, t: 'Équation trigonométrique', e: T`Résoudre $\cos x=\frac12$ sur $[0\,;2\pi[$. Donne la plus grande solution.`,
        h: T`Une valeur remarquable, et la symétrie du cercle par rapport à l'axe horizontal.`,
        s: [T`$\cos\frac\pi3=\frac12$, donc $x=\frac\pi3$ est solution.`, T`Le cosinus est pair : $\cos(-\frac\pi3)=\frac12$, et $-\frac\pi3+2\pi=\frac{5\pi}3$.`, T`Sur $[0;2\pi[$ : $S=\left\{\frac\pi3\,;\frac{5\pi}3\right\}$.`],
        r: T`$\frac{5\pi}{3}\approx5{,}236$`, n: 5.236 }
    ]
  },

  /* ================================================================ */
  {
    id: 'derivees', matiere: 'maths', niveau: 'Lycée',
    titre: 'Dérivées et variations',
    resume: 'La dérivée mesure une vitesse de variation. C’est l’outil n°1 de la physique : vitesse, accélération, courant dans un condensateur…',
    motscles: 'dérivée tangente variation extremum optimisation',
    pourquoi: T`<p>La vitesse est la dérivée de la position : $v=\frac{dx}{dt}$. Le courant est la dérivée de la charge : $i=\frac{dq}{dt}$. Un ingénieur dérive tous les jours. On s'en sert aussi pour <b>optimiser</b> : trouver le volume maximal, le coût minimal, la puissance maximale.</p>`,
    cours: T`<h4>Définition</h4>
<p>$f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$ : c'est la <b>pente de la tangente</b> à la courbe au point $a$, donc la vitesse à laquelle $f$ change.</p>
<h4>Dérivées usuelles</h4>
<p>$(k)'=0$ · $(x^n)'=nx^{n-1}$ · $(\sqrt x)'=\frac1{2\sqrt x}$ · $(\frac1x)'=-\frac1{x^2}$ · $(e^x)'=e^x$ · $(\ln x)'=\frac1x$ · $(\sin x)'=\cos x$ · $(\cos x)'=-\sin x$</p>
<h4>Lien avec les variations</h4>
<p>Si $f'>0$ sur un intervalle, $f$ y est <b>croissante</b> ; si $f'<0$, décroissante. Si $f'$ s'annule en <b>changeant de signe</b>, il y a un maximum ou un minimum.</p>`,
    formules: [
      { nom: 'Dérivée d’un produit', f: T`$$(uv)'=u'v+uv'$$`,
        quand: T`Produit de deux fonctions qui dépendent <b>toutes deux</b> de $x$ : $x e^x$, $x^2\sin x$.`,
        pas: T`$(uv)'\neq u'v'$. Et si un facteur est constant ($5x^3$), pas besoin : $(ku)'=ku'$.` },
      { nom: 'Dérivée d’un quotient', f: T`$$\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}$$`,
        quand: T`Le $x$ apparaît <b>au dénominateur</b> : $\frac{x+1}{x-2}$.`,
        pas: T`Si le dénominateur est une constante ($\frac{x^2}{4}$), écris $\frac14x^2$ et dérive directement. Attention à l'ordre $u'v-uv'$ (le signe moins !).` },
      { nom: 'Dérivée d’une composée', f: T`$$\big(f(u)\big)'=u'\times f'(u)\qquad (e^u)'=u'e^u\quad (u^n)'=nu'u^{n-1}\quad (\ln u)'=\frac{u'}{u}$$`,
        quand: T`Une fonction « à l'intérieur » d'une autre : $e^{-2t}$, $(3x+1)^5$, $\sin(\omega t)$, $\ln(x^2+1)$.`,
        pas: T`L'oubli de $u'$ est l'erreur n°1. $(\sin(\omega t))'=\omega\cos(\omega t)$, pas $\cos(\omega t)$. Développer $(3x+1)^5$ serait juste mais très long.` },
      { nom: 'Équation de la tangente', f: T`$$y=f'(a)(x-a)+f(a)$$`,
        quand: T`On demande la tangente en un point, ou une approximation de $f$ près de $a$.`,
        pas: T`$f'(a)$ est un <b>nombre</b> (la pente), pas une fonction : calcule $f'$ puis remplace $x$ par $a$.` }
    ],
    methode: [
      T`Identifie la structure : somme, produit, quotient, composée ?`,
      T`Pose $u$ et $v$ (et calcule $u'$, $v'$) <b>avant</b> d'appliquer la formule.`,
      T`Simplifie et <b>factorise</b> $f'$ : c'est le signe qui t'intéresse.`,
      T`Tableau de signes de $f'$ → tableau de variations de $f$.`
    ],
    exemple: {
      e: T`Étudier les variations de $f(x)=x^3-3x+1$ sur $\mathbb R$.`,
      s: [T`Somme de puissances → dérivées usuelles : $f'(x)=3x^2-3$.`, T`Factoriser pour avoir le signe : $f'(x)=3(x^2-1)=3(x-1)(x+1)$.`, T`Signe (trinôme, $a=3>0$) : $f'>0$ si $x<-1$ ou $x>1$, $f'<0$ entre $-1$ et $1$.`, T`Donc $f$ croît sur $]-\infty;-1]$, décroît sur $[-1;1]$, croît sur $[1;+\infty[$. Max local $f(-1)=3$, min local $f(1)=-1$.`],
      r: T`Maximum local $3$ en $x=-1$, minimum local $-1$ en $x=1$.`
    },
    pieges: [
      T`Oublier la dérivée intérieure $u'$ dans une composée.`,
      T`$f'(a)=0$ ne suffit pas pour un extremum : il faut un <b>changement de signe</b> ($x^3$ en 0 n'a pas d'extremum).`,
      T`Ne pas simplifier $f'$ avant d'étudier son signe : un signe se lit sur un <b>produit</b>, pas sur une somme.`
    ],
    exos: [
      { d: 1, t: 'Polynôme', e: T`Dériver $f(x)=4x^3-2x^2+7x-1$. Calculer $f'(1)$.`,
        h: T`$(x^n)'=nx^{n-1}$ terme par terme.`,
        s: [T`$f'(x)=12x^2-4x+7$.`, T`$f'(1)=12-4+7=15$.`],
        r: T`$f'(x)=12x^2-4x+7$, $f'(1)=15$`, n: 15 },
      { d: 1, t: 'Composée simple', e: T`Dériver $g(x)=(2x+1)^5$. Calculer $g'(0)$.`,
        h: T`Formule $(u^n)'=nu'u^{n-1}$ avec $u=2x+1$.`,
        s: [T`Pourquoi la composée : c'est une puissance d'une fonction, pas de $x$ seul.`, T`$u=2x+1$, $u'=2$ : $g'(x)=5\times2\times(2x+1)^4=10(2x+1)^4$.`, T`$g'(0)=10\times1=10$.`],
        r: T`$g'(x)=10(2x+1)^4$, $g'(0)=10$`, n: 10 },
      { d: 2, t: 'Produit avec exponentielle', e: T`Soit $h(x)=xe^x$. Calculer $h'(x)$ et la valeur du minimum de $h$.`,
        h: T`Produit $u=x$, $v=e^x$. Puis signe de $h'$ (sachant que $e^x>0$).`,
        s: [T`$u=x$, $u'=1$ ; $v=e^x$, $v'=e^x$.`, T`$h'(x)=e^x+xe^x=(1+x)e^x$ (on factorise par $e^x$).`, T`$e^x>0$ toujours, donc $h'$ a le signe de $1+x$ : négatif avant $-1$, positif après.`, T`Minimum en $x=-1$ : $h(-1)=-e^{-1}\approx-0{,}368$.`],
        r: T`$h'(x)=(1+x)e^x$, minimum $-\frac1e\approx-0{,}368$`, n: -0.368 },
      { d: 2, t: 'Quotient', e: T`Dériver $k(x)=\dfrac{x+1}{x-2}$ et calculer $k'(3)$.`,
        h: T`$u=x+1$, $v=x-2$, formule $\frac{u'v-uv'}{v^2}$.`,
        s: [T`$u'=1$, $v'=1$.`, T`$k'(x)=\frac{(x-2)-(x+1)}{(x-2)^2}=\frac{-3}{(x-2)^2}$.`, T`$k'(3)=\frac{-3}{1}=-3$. ($k$ est décroissante sur chaque intervalle de définition.)`],
        r: T`$k'(x)=\frac{-3}{(x-2)^2}$, $k'(3)=-3$`, n: -3 },
      { d: 3, t: 'Optimisation : la boîte', e: T`Avec une plaque carrée de 30 cm de côté, on découpe un carré de côté $x$ à chaque coin et on replie pour faire une boîte sans couvercle. Quel volume maximal (en cm³) ?`,
        h: T`Le fond est un carré de côté $30-2x$, la hauteur est $x$. Écris $V(x)$ puis dérive.`,
        s: [T`$V(x)=x(30-2x)^2$ pour $0<x<15$.`, T`Produit : $V'(x)=(30-2x)^2+x\times2(30-2x)(-2)=(30-2x)\big[(30-2x)-4x\big]=(30-2x)(30-6x)$.`, T`Pourquoi factoriser : pour lire directement les zéros. $V'=0$ pour $x=15$ (exclu) ou $x=5$.`, T`$V'>0$ avant 5, $V'<0$ après : maximum en $x=5$. $V(5)=5\times20^2=2000$.`],
        r: T`$V_{max}=2000\ \text{cm}^3$ pour $x=5\ \text{cm}$`, n: 2000, u: 'cm³' }
    ]
  },

  /* ================================================================ */
  {
    id: 'exp-ln', matiere: 'maths', niveau: 'Lycée',
    titre: 'Exponentielle et logarithme',
    resume: 'Les fonctions de la croissance et de la décroissance : décharge d’un condensateur, radioactivité, intérêts, décibels.',
    motscles: 'exponentielle logarithme ln exp demi-vie croissance',
    pourquoi: T`<p>Chaque fois qu'une quantité varie <b>proportionnellement à elle-même</b>, l'exponentielle apparaît : décharge d'un condensateur $u=Ee^{-t/RC}$, refroidissement, radioactivité. Le logarithme sert à <b>récupérer l'exposant</b> : « au bout de combien de temps ? ».</p>`,
    cours: T`<h4>Exponentielle</h4>
<p>$\exp$ est l'unique fonction égale à sa dérivée avec $\exp(0)=1$. On note $e^x$, $e\approx2{,}718$. Elle est toujours <b>strictement positive</b> et transforme les sommes en produits : $e^{a+b}=e^ae^b$.</p>
<h4>Logarithme népérien</h4>
<p>$\ln$ est la fonction réciproque : pour $x>0$, $y=\ln x\iff x=e^y$. Donc $\ln(e^x)=x$ et $e^{\ln x}=x$. Elle transforme les produits en sommes : $\ln(ab)=\ln a+\ln b$.</p>
<p>Valeurs : $\ln1=0$, $\ln e=1$, $\ln$ n'existe que pour $x>0$.</p>
<h4>Croissances comparées</h4>
<p>À l'infini, $e^x$ l'emporte sur toute puissance de $x$, et toute puissance de $x$ l'emporte sur $\ln x$.</p>`,
    formules: [
      { nom: 'Propriétés algébriques de l’exponentielle', f: T`$$e^{a+b}=e^ae^b\qquad e^{-a}=\frac1{e^a}\qquad (e^a)^n=e^{na}$$`,
        quand: T`Simplifier des expressions avec exponentielles, séparer une constante : $e^{-(t-t_0)/\tau}=e^{t_0/\tau}e^{-t/\tau}$.`,
        pas: T`$e^{a}+e^{b}\neq e^{a+b}$ : la règle ne marche que pour le produit.` },
      { nom: 'Propriétés du logarithme', f: T`$$\ln(ab)=\ln a+\ln b\qquad \ln\frac ab=\ln a-\ln b\qquad \ln(a^n)=n\ln a$$`,
        quand: T`Surtout pour <b>faire descendre un exposant inconnu</b> : $2^n=1000\Rightarrow n\ln2=\ln1000$.`,
        pas: T`$\ln(a+b)\neq\ln a+\ln b$. Et ne prends le $\ln$ que de quantités <b>strictement positives</b>.` },
      { nom: 'Résoudre avec l’inconnue en exposant', f: T`$$e^{X}=k\iff X=\ln k\quad(k>0)\qquad\qquad \ln X=k\iff X=e^k$$`,
        quand: T`Toute équation où l'inconnue est dans un exposant (temps de décharge, nombre d'années…).`,
        pas: T`Si $k\le0$, $e^X=k$ n'a <b>aucune</b> solution (une exponentielle est toujours positive). Vérifie avant de calculer.` }
    ],
    methode: [
      T`Isole l'exponentielle (ou le logarithme) d'un côté.`,
      T`Applique $\ln$ (ou $\exp$) des deux côtés.`,
      T`Résous l'équation simple obtenue.`,
      T`Si c'est une inéquation : $\ln$ et $\exp$ sont croissantes, donc le sens ne change pas… sauf si tu divises ensuite par un nombre négatif.`
    ],
    exemple: {
      e: T`Un condensateur se décharge selon $u(t)=E\,e^{-t/\tau}$. Au bout de combien de temps la tension est-elle divisée par 2 ?`,
      s: [T`On veut $u(t)=\frac E2$, soit $e^{-t/\tau}=\frac12$ (on divise par $E$).`, T`Inconnue en exposant → on applique $\ln$ : $-\frac t\tau=\ln\frac12=-\ln2$.`, T`$t=\tau\ln2\approx0{,}69\,\tau$.`, T`Remarque : ce temps ne dépend pas de $E$. C'est la même idée que la « demi-vie » en radioactivité.`],
      r: T`$t_{1/2}=\tau\ln2\approx0{,}69\,\tau$`
    },
    pieges: [
      T`$\ln(x)$ n'existe pas pour $x\le0$ : cherche toujours le domaine de définition d'abord.`,
      T`Confondre $\ln(x^2)=2\ln|x|$ et $(\ln x)^2$.`,
      T`$e^{-t/\tau}$ décroît vers 0 mais n'atteint jamais 0 : en pratique on dit que c'est « fini » après $5\tau$ (moins de 1 % restant).`
    ],
    exos: [
      { d: 1, t: 'Équation exponentielle', e: T`Résoudre $e^{2x-1}=1$.`,
        h: T`$1=e^0$.`,
        s: [T`$e^{2x-1}=e^0$, et $\exp$ est injective donc $2x-1=0$.`, T`$x=\frac12$.`],
        r: T`$x=0{,}5$`, n: 0.5 },
      { d: 1, t: 'Simplifier un logarithme', e: T`Écrire $\ln8-\ln2$ sous la forme $k\ln2$, puis donner sa valeur approchée.`,
        h: T`$\ln a-\ln b=\ln\frac ab$.`,
        s: [T`$\ln8-\ln2=\ln\frac82=\ln4$.`, T`$\ln4=\ln(2^2)=2\ln2$.`, T`$2\times0{,}693\approx1{,}386$.`],
        r: T`$2\ln2\approx1{,}386$`, n: 1.386 },
      { d: 2, t: 'Seuil', e: T`Trouver le plus petit entier $n$ tel que $3\times2^n>1000$.`,
        h: T`Isole $2^n$, puis applique $\ln$ pour faire descendre $n$.`,
        s: [T`$2^n>\frac{1000}{3}\approx333{,}3$.`, T`$\ln$ est croissante : $n\ln2>\ln333{,}3$.`, T`$\ln2>0$ donc le sens ne change pas : $n>\frac{\ln333{,}3}{\ln2}\approx8{,}38$.`, T`Plus petit entier : $n=9$ (vérif : $3\times512=1536>1000$ et $3\times256=768<1000$).`],
        r: T`$n=9$`, n: 9 },
      { d: 2, t: 'Dérivée d’un logarithme', e: T`Dériver $f(x)=\ln(x^2+1)$ et calculer $f'(1)$.`,
        h: T`$(\ln u)'=\frac{u'}{u}$.`,
        s: [T`$u=x^2+1>0$, $u'=2x$.`, T`$f'(x)=\frac{2x}{x^2+1}$.`, T`$f'(1)=\frac22=1$.`],
        r: T`$f'(x)=\frac{2x}{x^2+1}$, $f'(1)=1$`, n: 1 },
      { d: 3, t: 'Radioactivité', e: T`L'iode 131 a une demi-vie de 8 jours : $N(t)=N_0e^{-\lambda t}$. Au bout de combien de jours reste-t-il 10 % des noyaux ?`,
        h: T`D'abord $\lambda$ avec la demi-vie : $e^{-8\lambda}=\frac12$. Puis $e^{-\lambda t}=0{,}1$.`,
        s: [T`Demi-vie : $e^{-8\lambda}=\frac12\Rightarrow\lambda=\frac{\ln2}{8}$.`, T`On veut $e^{-\lambda t}=0{,}1\Rightarrow-\lambda t=\ln0{,}1=-\ln10$.`, T`$t=\frac{\ln10}{\lambda}=\frac{8\ln10}{\ln2}\approx26{,}6$ jours.`, T`Contrôle : 3 demi-vies (24 j) donnent $\frac18=12{,}5\,\%$, donc un peu plus de 24 j pour 10 %. Cohérent.`],
        r: T`$t\approx26{,}6$ jours`, n: 26.6, u: 'jours' }
    ]
  },

  /* ================================================================ */
  {
    id: 'suites', matiere: 'maths', niveau: 'Lycée',
    titre: 'Suites numériques',
    resume: 'Arithmétiques, géométriques et récurrentes : modéliser une évolution étape par étape.',
    motscles: 'suite arithmétique géométrique raison somme récurrence limite',
    pourquoi: T`<p>Une suite décrit une quantité qui évolue par <b>étapes</b> : un capital chaque année, un signal échantillonné, un algorithme qui itère. En informatique et en traitement du signal, presque tout est discret. Les suites préparent aussi aux équations différentielles (leur version continue).</p>`,
    cours: T`<h4>Suite arithmétique</h4><p>On <b>ajoute</b> la même raison $r$ : $u_{n+1}=u_n+r$, donc $u_n=u_0+nr$. Croissance linéaire.</p>
<h4>Suite géométrique</h4><p>On <b>multiplie</b> par la même raison $q$ : $u_{n+1}=q\,u_n$, donc $u_n=u_0q^n$. Une hausse de $t\,\%$ correspond à $q=1+\frac{t}{100}$, une baisse à $q=1-\frac t{100}$.</p>
<h4>Limite de $q^n$</h4><p>Si $|q|<1$, $q^n\to0$ ; si $q>1$, $q^n\to+\infty$ ; si $q=1$, $q^n=1$.</p>
<h4>Suites « arithmético-géométriques »</h4><p>$u_{n+1}=au_n+b$ : on cherche le point fixe $\ell=a\ell+b$, puis on montre que $v_n=u_n-\ell$ est géométrique.</p>`,
    formules: [
      { nom: 'Terme général arithmétique', f: T`$$u_n=u_0+nr\qquad u_n=u_p+(n-p)r$$`,
        quand: T`On ajoute une quantité <b>fixe</b> à chaque étape (+5 par jour, +200 F par mois).`,
        pas: T`Si l'augmentation est un <b>pourcentage</b>, ce n'est pas arithmétique : la quantité ajoutée change à chaque fois → géométrique.` },
      { nom: 'Terme général géométrique', f: T`$$u_n=u_0\,q^n$$`,
        quand: T`On multiplie par un même coefficient : pourcentages, intérêts composés, atténuation d'un signal.`,
        pas: T`Ne pas confondre $u_0q^n$ et $(u_0q)^n$. Et si on commence à $u_1$ : $u_n=u_1q^{n-1}$.` },
      { nom: 'Sommes', f: T`$$\sum_{k=0}^{n}q^k=\frac{1-q^{n+1}}{1-q}\ (q\neq1)\qquad u_0+\dots+u_n=(n+1)\frac{u_0+u_n}{2}\ \text{(arith.)}$$`,
        quand: T`Total accumulé : épargne totale, distance totale parcourue en rebonds.`,
        pas: T`Compte bien le <b>nombre de termes</b> : de $u_0$ à $u_n$, il y en a $n+1$, pas $n$.` }
    ],
    methode: [
      T`Calcule $u_1-u_0$ et $u_2-u_1$ : constants → arithmétique.`,
      T`Sinon calcule $\frac{u_1}{u_0}$ et $\frac{u_2}{u_1}$ : constants → géométrique.`,
      T`Écris le terme général, puis réponds à la question (valeur, somme, limite, seuil).`,
      T`Pour un seuil avec une géométrique, utilise le logarithme.`
    ],
    exemple: {
      e: T`On place $100\,000$ F à $5\,\%$ par an (intérêts composés). Combien a-t-on au bout de 10 ans ?`,
      s: [T`Chaque année on multiplie par $1+\frac5{100}=1{,}05$ → suite géométrique de raison $q=1{,}05$.`, T`Pourquoi pas arithmétique : les intérêts portent aussi sur les intérêts déjà gagnés, l'ajout n'est pas fixe.`, T`$u_{10}=100\,000\times1{,}05^{10}\approx100\,000\times1{,}6289$.`],
      r: T`$u_{10}\approx162\,889$ F`
    },
    pieges: [
      T`Le nombre de termes d'une somme : de $u_3$ à $u_{10}$, il y a $10-3+1=8$ termes.`,
      T`« Augmente de 20 % puis baisse de 20 % » ne ramène pas au départ : $1{,}2\times0{,}8=0{,}96$.`,
      T`Une suite croissante n'a pas forcément $+\infty$ pour limite (elle peut être majorée).`
    ],
    exos: [
      { d: 1, t: 'Terme d’une suite arithmétique', e: T`$(u_n)$ est arithmétique avec $u_0=3$ et $r=4$. Calculer $u_{20}$.`,
        h: T`$u_n=u_0+nr$.`,
        s: [T`$u_{20}=3+20\times4=83$.`],
        r: T`$u_{20}=83$`, n: 83 },
      { d: 1, t: 'La somme de Gauss', e: T`Calculer $1+2+3+\dots+100$.`,
        h: T`Suite arithmétique : nombre de termes × (premier + dernier) / 2.`,
        s: [T`100 termes, premier 1, dernier 100.`, T`Pourquoi la formule : en associant $1+100$, $2+99$, … on obtient 50 paires valant 101.`, T`$S=100\times\frac{101}{2}=5050$.`],
        r: T`$5050$`, n: 5050 },
      { d: 2, t: 'Somme géométrique', e: T`$(u_n)$ géométrique, $u_0=2$, $q=3$. Calculer $u_0+u_1+\dots+u_5$.`,
        h: T`$S=u_0\frac{1-q^{n+1}}{1-q}$ avec 6 termes.`,
        s: [T`6 termes (de 0 à 5), donc $q^{6}$.`, T`$S=2\times\frac{1-3^6}{1-3}=2\times\frac{1-729}{-2}=728$.`, T`Vérification : $2+6+18+54+162+486=728$ ✔`],
        r: T`$728$`, n: 728 },
      { d: 3, t: 'Suite arithmético-géométrique', e: T`$u_0=0$ et $u_{n+1}=0{,}5\,u_n+4$. Montrer que $v_n=u_n-8$ est géométrique, exprimer $u_n$ et donner sa limite.`,
        h: T`Pourquoi 8 ? C'est la solution de $\ell=0{,}5\ell+4$. Calcule $v_{n+1}$ en fonction de $v_n$.`,
        s: [T`Point fixe : $\ell=0{,}5\ell+4\Rightarrow\ell=8$. C'est pour ça qu'on soustrait 8.`, T`$v_{n+1}=u_{n+1}-8=0{,}5u_n+4-8=0{,}5(u_n-8)=0{,}5\,v_n$.`, T`$(v_n)$ géométrique de raison $0{,}5$ et $v_0=-8$ : $v_n=-8\times0{,}5^n$.`, T`$u_n=8-8\times0{,}5^n$. Comme $|0{,}5|<1$, $0{,}5^n\to0$ donc $u_n\to8$.`],
        r: T`$u_n=8-8\times0{,}5^n$, limite $8$`, n: 8 }
    ]
  }

  ]);
})();

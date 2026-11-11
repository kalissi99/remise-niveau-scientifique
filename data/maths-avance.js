/* MATHÉMATIQUES — NIVEAU AVANCÉ (L2-L3 / cycle ingénieur) */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  /* ================================================================ */
  {
    id: 'diagonalisation', matiere: 'maths', niveau: 'Avancé',
    titre: 'Valeurs propres et diagonalisation',
    resume: 'Trouver les « directions naturelles » d’une matrice pour calculer ses puissances et découpler des systèmes.',
    motscles: 'valeur propre vecteur propre diagonalisation polynôme caractéristique matrice puissance',
    pourquoi: T`<p>Une matrice mélange les variables. Dans la bonne base (celle des <b>vecteurs propres</b>), elle ne fait plus que multiplier chaque direction par un nombre (la <b>valeur propre</b>). On s'en sert pour calculer $A^{100}$, découpler des systèmes d'équations différentielles (vibrations, circuits couplés), en analyse de données (ACP), dans PageRank de Google et en mécanique quantique.</p>`,
    cours: T`<h4>Définition</h4><p>$\lambda$ est valeur propre de $A$ s'il existe $X\neq0$ tel que $AX=\lambda X$. $X$ est un vecteur propre : $A$ ne change pas sa direction.</p>
<h4>Comment les trouver</h4><p>$AX=\lambda X\iff(A-\lambda I)X=0$. Pour avoir $X\neq0$, il faut que $A-\lambda I$ ne soit pas inversible : $\det(A-\lambda I)=0$. C'est le <b>polynôme caractéristique</b>.</p>
<h4>Diagonaliser</h4><p>Si on a $n$ vecteurs propres indépendants, on les met en colonnes dans $P$ : $A=PDP^{-1}$ avec $D$ diagonale (les valeurs propres). Alors $A^k=PD^kP^{-1}$, et $D^k$ se calcule terme à terme.</p>
<p>Astuce 2×2 : $\lambda_1+\lambda_2=\text{tr}(A)$ et $\lambda_1\lambda_2=\det A$.</p>`,
    formules: [
      { nom: 'Polynôme caractéristique', f: T`$$\det(A-\lambda I)=0\qquad\text{(2×2) : }\lambda^2-\text{tr}(A)\,\lambda+\det A=0$$`,
        quand: T`Pour trouver les valeurs propres. En 2×2, la forme avec trace et déterminant est la plus rapide.`,
        pas: T`Ne cherche pas les valeurs propres par pivot de Gauss : les opérations sur les lignes changent les valeurs propres. Seule une matrice <b>triangulaire</b> donne ses valeurs propres directement (sur la diagonale).` },
      { nom: 'Vecteurs propres', f: T`$$(A-\lambda I)X=0$$`,
        quand: T`Pour chaque valeur propre trouvée, on résout ce système (il a forcément une infinité de solutions).`,
        pas: T`Si tu trouves seulement $X=0$, ta valeur propre est fausse. Un vecteur propre est défini à un facteur près.` },
      { nom: 'Puissances d’une matrice', f: T`$$A=PDP^{-1}\ \Rightarrow\ A^k=PD^kP^{-1}$$`,
        quand: T`Calculer $A^k$ pour $k$ grand, étudier une suite $X_{n+1}=AX_n$ (chaîne de Markov, population).`,
        pas: T`Multiplier $A$ par elle-même $k$ fois est faisable pour $k=3$, pas pour $k=100$. Si $A$ n'est pas diagonalisable (valeur propre double avec un seul vecteur propre), cette méthode ne s'applique pas.` }
    ],
    methode: [
      T`Calcule $\det(A-\lambda I)$ et résous $=0$.`,
      T`Pour chaque $\lambda$, résous $(A-\lambda I)X=0$.`,
      T`Vérifie : $AX=\lambda X$ sur chaque vecteur trouvé.`,
      T`Forme $P$ (vecteurs propres en colonnes) et $D$ (valeurs propres dans le même ordre).`
    ],
    exemple: {
      e: T`Diagonaliser $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$.`,
      s: [T`$\text{tr}A=4$, $\det A=3$ : $\lambda^2-4\lambda+3=0\Rightarrow\lambda=1$ ou $3$.`, T`$\lambda=3$ : $(A-3I)X=0$ donne $-x+y=0$, donc $X_1=(1,1)$.`, T`$\lambda=1$ : $x+y=0$, donc $X_2=(1,-1)$.`, T`Vérification : $A(1,1)=(3,3)=3(1,1)$ ✔.`],
      r: T`$P=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $D=\begin{pmatrix}3&0\\0&1\end{pmatrix}$`
    },
    pieges: [
      T`Ranger $P$ et $D$ dans des ordres différents.`,
      T`Oublier qu'une valeur propre peut être nulle (alors $A$ n'est pas inversible).`,
      T`Croire que toute matrice est diagonalisable : $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ ne l'est pas.`
    ],
    exos: [
      { d: 1, t: 'Matrice diagonale', e: T`Valeurs propres de $\begin{pmatrix}3&0\\0&5\end{pmatrix}$ ? Donne la plus grande.`,
        h: T`Matrice triangulaire (ici diagonale) : lis la diagonale.`,
        s: [T`$\det(A-\lambda I)=(3-\lambda)(5-\lambda)$.`, T`Valeurs propres : 3 et 5.`],
        r: T`$3$ et $5$`, n: 5 },
      { d: 1, t: 'Trace et déterminant', e: T`Valeurs propres de $\begin{pmatrix}4&1\\2&3\end{pmatrix}$ ? Donne la plus grande.`,
        h: T`$\lambda^2-7\lambda+10=0$.`,
        s: [T`$\text{tr}=7$, $\det=12-2=10$.`, T`$\lambda^2-7\lambda+10=(\lambda-2)(\lambda-5)$.`],
        r: T`$2$ et $5$`, n: 5 },
      { d: 2, t: 'Valeur propre négative', e: T`Valeurs propres de $\begin{pmatrix}1&2\\2&1\end{pmatrix}$ ? Donne la plus petite.`,
        h: T`$\text{tr}=2$, $\det=-3$.`,
        s: [T`$\lambda^2-2\lambda-3=0$, racines $3$ et $-1$.`, T`Vérif : $3\times(-1)=-3=\det$ ✔.`],
        r: T`$3$ et $-1$`, n: -1 },
      { d: 2, t: 'Vecteur propre', e: T`Pour $A=\begin{pmatrix}4&1\\2&3\end{pmatrix}$ et $\lambda=2$, trouver un vecteur propre $(1,y)$. Donne $y$.`,
        h: T`Résous $(A-2I)X=0$.`,
        s: [T`$A-2I=\begin{pmatrix}2&1\\2&1\end{pmatrix}$ : équation $2x+y=0$.`, T`Avec $x=1$ : $y=-2$.`, T`Vérif : $A(1,-2)=(4-2,\,2-6)=(2,-4)=2(1,-2)$ ✔.`],
        r: T`$(1,-2)$`, n: -2 },
      { d: 3, t: 'Grande puissance', e: T`Avec $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, calculer le coefficient en haut à gauche de $A^5$.`,
        h: T`$A^n=PD^nP^{-1}$ avec $D=\text{diag}(3,1)$. Tu peux montrer que $(A^n)_{11}=\frac{3^n+1}{2}$.`,
        s: [T`$P=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $P^{-1}=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.`, T`$A^n=\frac12\begin{pmatrix}3^n+1&3^n-1\\3^n-1&3^n+1\end{pmatrix}$.`, T`$n=5$ : $\frac{243+1}{2}=122$.`, T`Vérif $n=1$ : $\frac{3+1}2=2$ ✔.`],
        r: T`$122$`, n: 122 },
      { d: 3, t: 'Découpler un système différentiel', e: T`Résoudre $x'=2x+y$, $y'=x+2y$ avec $x(0)=1$, $y(0)=0$. Calculer $x(1)$.`,
        h: T`Pose $u=x+y$ et $v=x-y$ (les directions propres).`,
        s: [T`Pourquoi ces variables : ce sont les coordonnées dans la base des vecteurs propres $(1,1)$ et $(1,-1)$.`, T`$u'=3u$, $v'=v$ : deux équations indépendantes. $u=e^{3t}$, $v=e^t$ (car $u(0)=v(0)=1$).`, T`$x=\frac{u+v}2=\frac{e^{3t}+e^t}{2}$.`, T`$x(1)=\frac{20{,}09+2{,}72}{2}\approx11{,}40$.`],
        r: T`$x(t)=\frac{e^{3t}+e^{t}}{2}$, $x(1)\approx11{,}40$`, n: 11.40 }
    ]
  },

  /* ================================================================ */
  {
    id: 'fourier', matiere: 'maths', niveau: 'Avancé',
    titre: 'Séries et séries de Fourier',
    resume: 'Décomposer n’importe quel signal périodique en somme de sinusoïdes : la base du traitement du signal.',
    motscles: 'série fourier harmonique coefficient parseval signal carré convergence',
    pourquoi: T`<p>Le son, les signaux radio, la 4G, la compression MP3 et JPEG : tout repose sur l'idée de Fourier. Un signal périodique compliqué est une <b>somme de sinusoïdes</b> (harmoniques). Comme on sait déjà traiter une sinusoïde dans un circuit (impédances), on peut traiter n'importe quel signal.</p>`,
    cours: T`<h4>Séries numériques</h4><p>$\sum u_n$ converge si la somme partielle a une limite finie. Repères : $\sum q^n$ converge ssi $|q|<1$ (somme $\frac1{1-q}$) ; $\sum\frac1{n^p}$ converge ssi $p>1$. La série harmonique $\sum\frac1n$ diverge.</p>
<h4>Série de Fourier</h4><p>Pour $f$ de période $T$, $\omega=\frac{2\pi}T$ :</p>
$$f(t)=a_0+\sum_{n\ge1}\big(a_n\cos(n\omega t)+b_n\sin(n\omega t)\big)$$
<p>$a_0$ est la valeur moyenne. Le terme $n=1$ est le <b>fondamental</b>, les autres sont les <b>harmoniques</b>.</p>
<h4>Parité</h4><p>$f$ paire → que des cosinus ($b_n=0$). $f$ impaire → que des sinus ($a_n=0$). Cela divise le travail par deux.</p>`,
    formules: [
      { nom: 'Coefficients de Fourier', f: T`$$a_0=\frac1T\int_0^Tf\qquad a_n=\frac2T\int_0^Tf(t)\cos(n\omega t)\,dt\qquad b_n=\frac2T\int_0^Tf(t)\sin(n\omega t)\,dt$$`,
        quand: T`Pour décomposer un signal périodique donné par morceaux (carré, triangle, dent de scie).`,
        pas: T`$a_0$ a un facteur $\frac1T$, les autres $\frac2T$ : erreur fréquente. Regarde d'abord la parité pour éviter des calculs inutiles.` },
      { nom: 'Signal carré impair (±1)', f: T`$$f(t)=\frac4\pi\left(\sin\omega t+\frac13\sin3\omega t+\frac15\sin5\omega t+\dots\right)$$`,
        quand: T`À connaître : signal d'horloge numérique, onduleur. Seules les harmoniques impaires existent, d'amplitude $\frac{4}{n\pi}$.`,
        pas: T`Ses harmoniques décroissent lentement ($\frac1n$), c'est pourquoi un signal carré « rayonne » beaucoup en haute fréquence.` },
      { nom: 'Égalité de Parseval', f: T`$$\frac1T\int_0^Tf^2=a_0^2+\frac12\sum_{n\ge1}\left(a_n^2+b_n^2\right)$$`,
        quand: T`Puissance d'un signal répartie entre harmoniques ; calcul de sommes de séries numériques.`,
        pas: T`À gauche c'est la moyenne de $f^2$ (valeur efficace au carré), pas la moyenne de $f$.` }
    ],
    methode: [
      T`Repère la période $T$ et calcule $\omega=\frac{2\pi}{T}$.`,
      T`Regarde la parité pour savoir quels coefficients sont nuls.`,
      T`Calcule $a_0$ (moyenne), puis $a_n$ ou $b_n$ en découpant l'intégrale selon les morceaux.`,
      T`Simplifie avec $\cos(n\pi)=(-1)^n$.`
    ],
    exemple: {
      e: T`Signal carré impair de période $2\pi$ : $f=1$ sur $]0;\pi[$, $f=-1$ sur $]-\pi;0[$. Calculer $b_n$.`,
      s: [T`$f$ impaire → $a_n=0$, et $b_n=\frac2\pi\int_0^\pi\sin(nt)\,dt$ (on double la moitié positive).`, T`$\int_0^\pi\sin(nt)\,dt=\left[-\frac{\cos nt}{n}\right]_0^\pi=\frac{1-(-1)^n}{n}$.`, T`$n$ pair : $0$ ; $n$ impair : $\frac2n$.`],
      r: T`$b_n=\frac4{n\pi}$ si $n$ impair, $0$ sinon`
    },
    pieges: [
      T`Oublier que $\cos(n\pi)=(-1)^n$ et non $-1$.`,
      T`Confondre la fréquence de l'harmonique $n$ ($nf$) avec son amplitude.`,
      T`Croire qu'une série converge parce que son terme général tend vers 0 ($\sum\frac1n$ diverge).`
    ],
    exos: [
      { d: 1, t: 'Valeur moyenne', e: T`Un signal vaut 5 V pendant la moitié de la période et 0 V l'autre moitié. Calculer $a_0$.`,
        h: T`$a_0$ est la valeur moyenne.`,
        s: [T`$a_0=\frac1T\left(5\times\frac T2+0\right)=2{,}5$ V.`],
        r: T`$a_0=2{,}5\ \text{V}$`, n: 2.5, u: 'V' },
      { d: 1, t: 'Lire une décomposition', e: T`$f(t)=3+2\cos(\omega t)+\sin(3\omega t)$. Quel est le rang de l'harmonique la plus élevée ?`,
        h: T`Le rang est le coefficient devant $\omega t$.`,
        s: [T`$a_0=3$, $a_1=2$, $b_3=1$, tous les autres sont nuls.`, T`Harmonique la plus élevée : rang 3 (fréquence $3f$).`],
        r: T`Rang $3$`, n: 3 },
      { d: 2, t: 'Fondamental du carré', e: T`Amplitude du fondamental d'un signal carré ±1 ?`,
        h: T`$b_1=\frac4\pi$.`,
        s: [T`$b_n=\frac{4}{n\pi}$ pour $n$ impair, donc $b_1=\frac4\pi\approx1{,}273$.`, T`Remarque : le fondamental dépasse l'amplitude du carré lui-même.`],
        r: T`$\frac4\pi\approx1{,}273$`, n: 1.273 },
      { d: 2, t: 'Série géométrique', e: T`Calculer $\displaystyle\sum_{n=0}^{+\infty}\left(\frac23\right)^n$.`,
        h: T`$|q|<1$ : somme $\frac1{1-q}$.`,
        s: [T`$q=\frac23$, $|q|<1$ : la série converge.`, T`Somme $=\frac1{1-2/3}=3$.`],
        r: T`$3$`, n: 3 },
      { d: 3, t: 'Rapport d’harmoniques', e: T`Pour le carré ±1, quel est le rapport amplitude de l'harmonique 3 / amplitude du fondamental ?`,
        h: T`$b_3/b_1$.`,
        s: [T`$b_3=\frac4{3\pi}$, $b_1=\frac4\pi$.`, T`Rapport $\frac13\approx0{,}333$.`],
        r: T`$\frac13$`, n: 0.3333 },
      { d: 3, t: 'Parseval et somme célèbre', e: T`Appliquer Parseval au carré ±1 pour calculer $\displaystyle\sum_{n\ \text{impair}}\frac1{n^2}$.`,
        h: T`$\frac1T\int f^2=1$ car $f^2=1$. Côté droit : $\frac12\sum b_n^2$.`,
        s: [T`Gauche : $f^2=1$ partout, donc moyenne $=1$.`, T`Droite : $\frac12\sum_{n\,\text{impair}}\frac{16}{n^2\pi^2}$.`, T`$1=\frac{8}{\pi^2}\sum\frac1{n^2}$ ⇒ $\sum_{n\,\text{impair}}\frac1{n^2}=\frac{\pi^2}8\approx1{,}2337$.`],
        r: T`$\frac{\pi^2}{8}\approx1{,}2337$`, n: 1.2337 }
    ]
  },

  /* ================================================================ */
  {
    id: 'probabilites', matiere: 'maths', niveau: 'Avancé',
    titre: 'Probabilités et variables aléatoires',
    resume: 'Conditionnement, Bayes, lois usuelles, espérance. Indispensable en fiabilité, data, détection de fraude et cryptographie.',
    motscles: 'probabilité bayes conditionnelle binomiale espérance variance anniversaire',
    pourquoi: T`<p>Un détecteur de fraude, un antispam, un test de dépistage : tous reposent sur le <b>théorème de Bayes</b>. En cryptographie, la sécurité d'une fonction de hachage se mesure avec le <b>paradoxe des anniversaires</b>. En ingénierie, on calcule des probabilités de panne. C'est le chapitre le plus utile en cybersécurité et en data.</p>`,
    cours: T`<h4>Bases</h4><p>$P(\bar A)=1-P(A)$ ; $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.</p>
<h4>Conditionnement</h4><p>$P(A|B)=\frac{P(A\cap B)}{P(B)}$ : probabilité de $A$ <b>sachant</b> $B$. $A$ et $B$ indépendants ssi $P(A\cap B)=P(A)P(B)$.</p>
<h4>Probabilités totales</h4><p>Si $B$ et $\bar B$ partitionnent l'univers : $P(A)=P(A|B)P(B)+P(A|\bar B)P(\bar B)$. Un arbre de probabilités rend cela visuel.</p>
<h4>Variables aléatoires</h4><p>Espérance $E(X)=\sum x_iP(X=x_i)$ (moyenne à long terme). Variance $V(X)=E(X^2)-E(X)^2$. Loi binomiale $\mathcal B(n,p)$ : nombre de succès sur $n$ essais indépendants.</p>`,
    formules: [
      { nom: 'Théorème de Bayes', f: T`$$P(B|A)=\frac{P(A|B)\,P(B)}{P(A)}$$`,
        quand: T`On connaît $P(\text{alerte}|\text{fraude})$ et on veut $P(\text{fraude}|\text{alerte})$ : on <b>inverse</b> le conditionnement.`,
        pas: T`$P(A|B)\neq P(B|A)$. Un test fiable à 95 % ne signifie pas « 95 % de chances d'être positif quand il sonne » si l'événement est rare.` },
      { nom: 'Au moins un', f: T`$$P(\text{au moins un})=1-P(\text{aucun})$$`,
        quand: T`Questions « au moins une fois », « au moins une collision ».`,
        pas: T`Additionner les probabilités de chaque essai est faux (on peut dépasser 1) : on compterait plusieurs fois les cas communs.` },
      { nom: 'Loi binomiale', f: T`$$P(X=k)=\binom nk p^k(1-p)^{n-k}\qquad E(X)=np\qquad V(X)=np(1-p)$$`,
        quand: T`$n$ répétitions <b>indépendantes</b> d'une même expérience à deux issues.`,
        pas: T`Si les tirages sont sans remise dans une petite population, ils ne sont plus indépendants : ce n'est plus binomial.` },
      { nom: 'Paradoxe des anniversaires', f: T`$$P(\text{collision parmi }k\text{ éléments sur }N)\approx1-e^{-k^2/(2N)}$$`,
        quand: T`Probabilité que deux éléments tombent dans la même case : anniversaires, collisions de hachage, identifiants aléatoires.`,
        pas: T`L'intuition dit $k\approx N/2$ ; la réalité est $k\approx\sqrt N$. C'est pour ça qu'un hachage de $n$ bits n'offre que $n/2$ bits de sécurité contre les collisions.` }
    ],
    methode: [
      T`Nomme les événements et traduis l'énoncé en probabilités ($P(A)$, $P(A|B)$…).`,
      T`Dessine un arbre si plusieurs étapes.`,
      T`« Au moins » → complémentaire. « Sachant » → conditionnelle, éventuellement Bayes.`,
      T`Vérifie que le résultat est entre 0 et 1 et qu'il est plausible.`
    ],
    exemple: {
      e: T`On lance deux dés équilibrés. Probabilité que la somme fasse 7 ?`,
      s: [T`36 issues équiprobables (6 × 6).`, T`Cas favorables : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), soit 6.`, T`$P=\frac6{36}=\frac16$. C'est la somme la plus probable.`],
      r: T`$\frac16\approx0{,}167$`
    },
    pieges: [
      T`Confondre $P(A|B)$ et $P(B|A)$ (l'erreur du « procureur »).`,
      T`Supposer l'indépendance sans justification.`,
      T`Oublier le taux de base (la rareté de l'événement) dans Bayes.`
    ],
    exos: [
      { d: 1, t: 'Espérance d’un dé', e: T`Espérance du résultat d'un dé équilibré à 6 faces ?`,
        h: T`$\sum x_iP(x_i)$ avec $P=\frac16$.`,
        s: [T`$E=\frac{1+2+3+4+5+6}{6}=\frac{21}6=3{,}5$.`],
        r: T`$3{,}5$`, n: 3.5 },
      { d: 1, t: 'Somme de deux dés', e: T`Probabilité d'obtenir une somme de 7 avec deux dés ?`,
        h: T`6 cas favorables sur 36.`,
        s: [T`$\frac6{36}=\frac16$.`],
        r: T`$\frac16\approx0{,}167$`, n: 0.1667 },
      { d: 2, t: 'Au moins un 6', e: T`On lance un dé 4 fois. Probabilité d'obtenir au moins un 6 ?`,
        h: T`Complémentaire : aucun 6 en 4 lancers.`,
        s: [T`Pourquoi le complémentaire : « au moins un » couvre beaucoup de cas, « aucun » un seul.`, T`$P(\text{aucun }6)=\left(\frac56\right)^4\approx0{,}482$ (lancers indépendants).`, T`$P=1-0{,}482\approx0{,}518$.`],
        r: T`$\approx0{,}518$`, n: 0.5177 },
      { d: 2, t: 'Binomiale', e: T`On lance 10 fois une pièce équilibrée. Probabilité d'avoir exactement 5 piles ?`,
        h: T`$\binom{10}{5}=252$.`,
        s: [T`$X\sim\mathcal B(10;0{,}5)$.`, T`$P(X=5)=252\times0{,}5^{10}=\frac{252}{1024}\approx0{,}246$.`],
        r: T`$\approx0{,}246$`, n: 0.2461 },
      { d: 3, t: 'Bayes : détecteur de fraude', e: T`1 % des transactions sont frauduleuses. Le détecteur signale 95 % des fraudes, mais aussi 2 % des transactions légitimes. Une alerte sonne : probabilité que ce soit vraiment une fraude ?`,
        h: T`$P(F|A)=\frac{P(A|F)P(F)}{P(A)}$ et $P(A)$ par les probabilités totales.`,
        s: [T`$P(F)=0{,}01$, $P(A|F)=0{,}95$, $P(A|\bar F)=0{,}02$.`, T`Probabilités totales : $P(A)=0{,}95\times0{,}01+0{,}02\times0{,}99=0{,}0095+0{,}0198=0{,}0293$.`, T`Bayes : $P(F|A)=\frac{0{,}0095}{0{,}0293}\approx0{,}324$.`, T`Seulement 32 % ! Les fraudes sont rares, donc les faux positifs sont plus nombreux que les vraies alertes. C'est un enjeu majeur en KYC et en lutte anti-fraude.`],
        r: T`$\approx0{,}324$ (32 %)`, n: 0.324 },
      { d: 3, t: 'Paradoxe des anniversaires', e: T`Dans un groupe de 23 personnes (365 jours, équiprobables), probabilité qu'au moins deux aient le même anniversaire ?`,
        h: T`Complémentaire : tous différents, $\frac{365}{365}\times\frac{364}{365}\times\dots\times\frac{343}{365}$.`,
        s: [T`$P(\text{tous différents})=\prod_{k=0}^{22}\frac{365-k}{365}\approx0{,}493$.`, T`$P=1-0{,}493\approx0{,}507$.`, T`Approximation : $1-e^{-23^2/730}\approx1-e^{-0{,}725}\approx0{,}516$. Proche.`, T`Plus d'une chance sur deux avec seulement 23 personnes : c'est l'attaque par collision sur les fonctions de hachage.`],
        r: T`$\approx0{,}507$`, n: 0.507 }
    ]
  },

  /* ================================================================ */
  {
    id: 'laplace', matiere: 'maths', niveau: 'Avancé',
    titre: 'Transformée de Laplace',
    resume: 'Transformer une équation différentielle en équation algébrique. L’outil de l’automatique et de l’analyse des circuits.',
    motscles: 'laplace transformée fonction de transfert valeur finale éléments simples automatique',
    pourquoi: T`<p>En automatique (régulation, robots, drones) et en électronique, on ne résout presque jamais les équations différentielles « à la main » : on passe en <b>Laplace</b>. Les dérivées deviennent des multiplications par $p$, et les conditions initiales sont prises en compte automatiquement. Les fonctions de transfert $H(p)$ viennent de là.</p>`,
    cours: T`<h4>Définition</h4><p>$F(p)=\mathcal L[f](p)=\int_0^{+\infty}f(t)e^{-pt}\,dt$. On travaille avec des fonctions nulles pour $t<0$.</p>
<h4>Table de base</h4><p>$1\to\frac1p$ · $t\to\frac1{p^2}$ · $e^{-at}\to\frac1{p+a}$ · $\sin\omega t\to\frac{\omega}{p^2+\omega^2}$ · $\cos\omega t\to\frac{p}{p^2+\omega^2}$</p>
<h4>Propriété clé</h4><p>$\mathcal L[f']=pF(p)-f(0)$ et $\mathcal L[f'']=p^2F(p)-pf(0)-f'(0)$. Une équation différentielle devient une équation en $F(p)$ qu'on résout par algèbre, puis on revient en temporel avec la table (souvent après une décomposition en éléments simples).</p>`,
    formules: [
      { nom: 'Transformée d’une dérivée', f: T`$$\mathcal L[f']=pF(p)-f(0)$$`,
        quand: T`Transformer une équation différentielle avec conditions initiales.`,
        pas: T`Ne pas oublier $-f(0)$ : c'est là que la condition initiale entre en jeu.` },
      { nom: 'Décomposition en éléments simples', f: T`$$\frac{1}{(p+a)(p+b)}=\frac{1}{b-a}\left(\frac{1}{p+a}-\frac{1}{p+b}\right)$$`,
        quand: T`Pour revenir en temporel : on découpe $F(p)$ en fractions qui sont dans la table.`,
        pas: T`Sans décomposition, la fraction n'est pas dans la table. Vérifie en remettant au même dénominateur.` },
      { nom: 'Théorème de la valeur finale', f: T`$$\lim_{t\to+\infty}f(t)=\lim_{p\to0}pF(p)$$`,
        quand: T`Trouver la valeur atteinte en régime permanent sans calculer $f(t)$ (erreur statique en automatique).`,
        pas: T`Valable seulement si $f$ a une limite (système stable). Pour un oscillateur non amorti, il ne s'applique pas.` }
    ],
    methode: [
      T`Applique $\mathcal L$ à chaque terme de l'équation (dérivées avec conditions initiales).`,
      T`Isole $F(p)$.`,
      T`Décompose en éléments simples.`,
      T`Reviens en temporel avec la table. Vérifie $f(0)$ et la valeur finale.`
    ],
    exemple: {
      e: T`Résoudre $\tau y'+y=E$ pour $t\ge0$, avec $y(0)=0$ (charge d'un condensateur).`,
      s: [T`$\mathcal L$ : $\tau(pY-0)+Y=\frac Ep$.`, T`$Y(p)=\frac{E}{p(1+\tau p)}$.`, T`Éléments simples : $\frac{1}{p(1+\tau p)}=\frac1p-\frac{\tau}{1+\tau p}=\frac1p-\frac{1}{p+1/\tau}$.`, T`Table : $y(t)=E\left(1-e^{-t/\tau}\right)$. On retrouve le résultat du chapitre RC.`],
      r: T`$y(t)=E\left(1-e^{-t/\tau}\right)$`
    },
    pieges: [
      T`Oublier la condition initiale dans $\mathcal L[f']$.`,
      T`Mal identifier $a$ dans $\frac1{p+a}$ : $\frac{1}{p-2}$ donne $e^{+2t}$ (instable).`,
      T`Appliquer la valeur finale à un système instable.`
    ],
    exos: [
      { d: 1, t: 'Transformée d’une exponentielle', e: T`Calculer $F(2)$ pour $f(t)=e^{-3t}$.`,
        h: T`$\mathcal L[e^{-at}]=\frac1{p+a}$.`,
        s: [T`$F(p)=\frac1{p+3}$.`, T`$F(2)=\frac15=0{,}2$.`],
        r: T`$0{,}2$`, n: 0.2 },
      { d: 1, t: 'Transformée inverse', e: T`Trouver $f(t)$ telle que $F(p)=\frac4{p+2}$. Que vaut $f(0)$ ?`,
        h: T`Lis la table à l'envers.`,
        s: [T`$\frac{4}{p+2}=4\times\frac1{p+2}\to4e^{-2t}$.`, T`$f(0)=4$.`],
        r: T`$f(t)=4e^{-2t}$, $f(0)=4$`, n: 4 },
      { d: 2, t: 'Valeur finale', e: T`$F(p)=\frac{10}{p(p+5)}$. Vers quelle valeur tend $f(t)$ ?`,
        h: T`$\lim_{p\to0}pF(p)$.`,
        s: [T`$pF(p)=\frac{10}{p+5}\to\frac{10}5=2$.`, T`Le système est stable (pôle $-5<0$), donc le théorème s'applique.`],
        r: T`$2$`, n: 2 },
      { d: 2, t: 'Premier ordre', e: T`Résoudre $y'+y=0$, $y(0)=3$ par Laplace. Calculer $y(1)$.`,
        h: T`$pY-3+Y=0$.`,
        s: [T`$Y(p)=\frac3{p+1}$.`, T`$y(t)=3e^{-t}$, $y(1)=3e^{-1}\approx1{,}104$.`],
        r: T`$y(1)\approx1{,}104$`, n: 1.104 },
      { d: 3, t: 'Éléments simples', e: T`Trouver $f(t)$ pour $F(p)=\frac1{(p+1)(p+2)}$ et calculer $f(1)$.`,
        h: T`$\frac1{(p+1)(p+2)}=\frac A{p+1}+\frac B{p+2}$.`,
        s: [T`Multiplier par $(p+1)$ et poser $p=-1$ : $A=1$. Multiplier par $(p+2)$ et poser $p=-2$ : $B=-1$.`, T`$f(t)=e^{-t}-e^{-2t}$.`, T`$f(1)=0{,}368-0{,}135\approx0{,}233$.`],
        r: T`$f(t)=e^{-t}-e^{-2t}$, $f(1)\approx0{,}233$`, n: 0.2325 },
      { d: 3, t: 'Second ordre', e: T`Résoudre $y''+4y=0$, $y(0)=0$, $y'(0)=2$ par Laplace. Calculer $y(\pi/4)$.`,
        h: T`$\mathcal L[y'']=p^2Y-py(0)-y'(0)$.`,
        s: [T`$p^2Y-0-2+4Y=0\Rightarrow Y=\frac2{p^2+4}$.`, T`Table : $\frac{\omega}{p^2+\omega^2}$ avec $\omega=2$ → $\sin2t$.`, T`$y=\sin2t$, $y(\pi/4)=\sin\frac\pi2=1$.`],
        r: T`$y=\sin(2t)$, $y(\pi/4)=1$`, n: 1 }
    ]
  }

  ]);
})();

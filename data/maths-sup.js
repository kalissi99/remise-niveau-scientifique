/* MATHÉMATIQUES — NIVEAU SUPÉRIEUR (Terminale+ / prépa / L1-L2) */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  /* ================================================================ */
  {
    id: 'integrales', matiere: 'maths', niveau: 'Supérieur',
    titre: 'Primitives et intégrales',
    resume: 'L’opération inverse de la dérivée : calculer une aire, une charge, un travail, une valeur moyenne ou efficace.',
    motscles: 'intégrale primitive IPP intégration par parties aire valeur moyenne efficace',
    pourquoi: T`<p>Si la dérivée donne une vitesse à partir d'une position, l'intégrale fait l'inverse : elle <b>accumule</b>. Distance = intégrale de la vitesse, charge = intégrale du courant $q=\int i\,dt$, travail = intégrale de la force, valeur efficace d'un courant alternatif… En école d'ingénieur, c'est quotidien.</p>`,
    cours: T`<h4>Primitive</h4><p>$F$ est une primitive de $f$ si $F'=f$. Elle est définie à une constante près ($x^2$ et $x^2+5$ sont deux primitives de $2x$).</p>
<h4>Intégrale</h4><p>$\int_a^bf(x)\,dx=F(b)-F(a)$. Si $f\ge0$, c'est l'aire sous la courbe entre $a$ et $b$. Si $f<0$, l'aire compte négativement.</p>
<h4>Primitives usuelles</h4>
<p>$x^n\to\frac{x^{n+1}}{n+1}$ ($n\neq-1$) · $\frac1x\to\ln|x|$ · $e^{kx}\to\frac{e^{kx}}k$ · $\cos(\omega x)\to\frac{\sin(\omega x)}\omega$ · $\sin(\omega x)\to-\frac{\cos(\omega x)}\omega$</p>
<h4>Linéarité</h4><p>$\int(af+bg)=a\int f+b\int g$ : on peut couper une somme et sortir les constantes. Mais on ne peut <b>pas</b> couper un produit.</p>`,
    formules: [
      { nom: 'Théorème fondamental', f: T`$$\int_a^b f(x)\,dx=\Big[F(x)\Big]_a^b=F(b)-F(a)$$`,
        quand: T`Pour toute intégrale dont tu sais trouver une primitive.`,
        pas: T`C'est $F(b)-F(a)$ (borne du <b>haut</b> moins borne du bas), pas l'inverse.` },
      { nom: 'Reconnaître une dérivée composée', f: T`$$\int u'\,f'(u)=f(u)\qquad \int\frac{u'}{u}=\ln|u|\qquad \int u'e^u=e^u\qquad \int u'u^n=\frac{u^{n+1}}{n+1}$$`,
        quand: T`Tu vois une fonction <b>et sa dérivée</b> (à une constante près) : $\frac{2x}{x^2+1}$, $xe^{x^2}$, $\cos x\sin^3x$.`,
        pas: T`Si la dérivée intérieure manque vraiment (pas juste un facteur constant), cette méthode ne marche pas : passe à l'IPP ou à un changement de variable.` },
      { nom: 'Intégration par parties (IPP)', f: T`$$\int_a^b u\,v'=\Big[uv\Big]_a^b-\int_a^b u'v$$`,
        quand: T`<b>Produit</b> de deux fonctions de familles différentes : $x e^x$, $x\cos x$, $\ln x$ seul (écrit $1\times\ln x$). Choisis $u$ = celle qui devient plus simple en la dérivant (polynôme, $\ln$).`,
        pas: T`Si un facteur est la dérivée de l'intérieur de l'autre ($xe^{x^2}$), la méthode « $u'f(u)$ » est bien plus rapide. Un mauvais choix de $u$ rend l'intégrale plus compliquée : change de choix.` },
      { nom: 'Valeur moyenne et valeur efficace', f: T`$$\langle f\rangle=\frac1{b-a}\int_a^bf\qquad F_{\text{eff}}=\sqrt{\frac1T\int_0^Tf^2(t)\,dt}$$`,
        quand: T`Moyenne d'un signal sur une durée ; valeur efficace (celle qu'affiche un multimètre en alternatif) d'un courant ou d'une tension.`,
        pas: T`La valeur moyenne d'un sinus sur une période vaut 0. C'est pour cela qu'on utilise la valeur <b>efficace</b> pour mesurer l'énergie.` }
    ],
    methode: [
      T`Simplifie et coupe en somme (linéarité).`,
      T`Cherche une primitive usuelle directe.`,
      T`Sinon : y a-t-il une forme $u'f(u)$ ? Sinon : un produit → IPP.`,
      T`Applique $F(b)-F(a)$ et vérifie le signe (aire positive si $f\ge0$).`
    ],
    exemple: {
      e: T`Calculer $I=\int_0^1 x\,e^x\,dx$.`,
      s: [T`Produit d'un polynôme et d'une exponentielle, et $x$ n'est pas la dérivée de l'exposant → IPP.`, T`Choix : $u=x$ (devient $1$ en dérivant, plus simple), $v'=e^x$ donc $v=e^x$.`, T`$I=\big[xe^x\big]_0^1-\int_0^1e^x\,dx=e-\big[e^x\big]_0^1=e-(e-1)$.`],
      r: T`$I=1$`
    },
    pieges: [
      T`$\int fg\neq\int f\times\int g$ : c'est justement pour ça que l'IPP existe.`,
      T`Oublier de diviser par $k$ : une primitive de $e^{3x}$ est $\frac{e^{3x}}3$, pas $e^{3x}$.`,
      T`Dans l'IPP, le crochet $[uv]$ s'évalue aux bornes : ne l'oublie pas.`
    ],
    exos: [
      { d: 1, t: 'Polynôme', e: T`Calculer $\int_0^2(3x^2+1)\,dx$.`,
        h: T`Primitive : $x^3+x$.`,
        s: [T`$F(x)=x^3+x$.`, T`$F(2)-F(0)=(8+2)-0=10$.`],
        r: T`$10$`, n: 10 },
      { d: 1, t: 'Inverse', e: T`Calculer $\int_1^e\frac1x\,dx$.`,
        h: T`Une primitive de $\frac1x$ sur $]0;+\infty[$ est $\ln x$.`,
        s: [T`$\big[\ln x\big]_1^e=\ln e-\ln1=1-0$.`],
        r: T`$1$`, n: 1 },
      { d: 2, t: 'Reconnaître u′/u', e: T`Calculer $\int_0^1\frac{2x}{x^2+1}\,dx$.`,
        h: T`Le numérateur est la dérivée du dénominateur.`,
        s: [T`$u=x^2+1$, $u'=2x$ : on a exactement $\frac{u'}u$.`, T`Pourquoi pas l'IPP : la forme $\frac{u'}{u}$ donne la primitive directement, $\ln|u|$.`, T`$\big[\ln(x^2+1)\big]_0^1=\ln2-\ln1=\ln2$.`],
        r: T`$\ln2\approx0{,}693$`, n: 0.693 },
      { d: 2, t: 'Charge électrique', e: T`Un courant $i(t)=2e^{-t}$ (en A) charge un condensateur. Quelle charge (en C) a traversé le circuit entre $t=0$ et $t=3$ s ?`,
        h: T`$q=\int_0^3 i(t)\,dt$. Primitive de $e^{-t}$ : $-e^{-t}$.`,
        s: [T`$i=\frac{dq}{dt}$ donc $q=\int i\,dt$.`, T`$q=\big[-2e^{-t}\big]_0^3=-2e^{-3}+2=2(1-e^{-3})$.`, T`$q\approx2\times0{,}950=1{,}90$ C.`],
        r: T`$q\approx1{,}90\ \text{C}$`, n: 1.90, u: 'C' },
      { d: 3, t: 'IPP avec logarithme', e: T`Calculer $\int_1^e\ln x\,dx$.`,
        h: T`Écris $\ln x=1\times\ln x$ et prends $u=\ln x$, $v'=1$.`,
        s: [T`On ne connaît pas de primitive « directe » de $\ln$ : on fait apparaître un produit $1\times\ln x$.`, T`$u=\ln x$, $u'=\frac1x$ ; $v'=1$, $v=x$.`, T`$\int_1^e\ln x\,dx=\big[x\ln x\big]_1^e-\int_1^e\frac1x\times x\,dx=e-\big[x\big]_1^e=e-(e-1)=1$.`],
        r: T`$1$`, n: 1 },
      { d: 3, t: 'Valeur efficace d’une sinusoïde', e: T`Montrer que la valeur efficace de $i(t)=I_m\sin(\omega t)$ est $\frac{I_m}{\sqrt2}$, puis calculer $I_{\text{eff}}$ pour $I_m=2$ A.`,
        h: T`Linéarise : $\sin^2x=\frac{1-\cos(2x)}{2}$. Sur une période, la moyenne de $\cos(2\omega t)$ est nulle.`,
        s: [T`$I_{\text{eff}}^2=\frac1T\int_0^TI_m^2\sin^2(\omega t)\,dt$.`, T`Pourquoi linéariser : on ne sait pas intégrer $\sin^2$ directement, mais on sait intégrer $\cos(2\omega t)$.`, T`$\frac1T\int_0^T\frac{1-\cos(2\omega t)}{2}dt=\frac12-0=\frac12$.`, T`$I_{\text{eff}}^2=\frac{I_m^2}2\Rightarrow I_{\text{eff}}=\frac{I_m}{\sqrt2}=\frac2{\sqrt2}\approx1{,}414$ A.`],
        r: T`$I_{\text{eff}}=\sqrt2\approx1{,}41\ \text{A}$`, n: 1.414, u: 'A' }
    ]
  },

  /* ================================================================ */
  {
    id: 'complexes', matiere: 'maths', niveau: 'Supérieur',
    titre: 'Nombres complexes',
    resume: 'Forme algébrique, module, argument, forme exponentielle. L’outil indispensable pour le courant alternatif.',
    motscles: 'complexe module argument conjugué euler exponentielle i j',
    pourquoi: T`<p>En électricité, une tension sinusoïdale a une <b>amplitude</b> et une <b>phase</b>. Un nombre complexe encode exactement ces deux informations (module et argument). Grâce aux complexes, les équations différentielles des circuits deviennent de simples calculs algébriques. (Les électriciens notent $j$ au lieu de $i$, pour ne pas confondre avec le courant.)</p>`,
    cours: T`<h4>Forme algébrique</h4><p>$z=a+ib$ avec $i^2=-1$. $a=\text{Re}(z)$, $b=\text{Im}(z)$. Conjugué : $\bar z=a-ib$, et $z\bar z=a^2+b^2$ (réel positif).</p>
<h4>Module et argument</h4><p>Dans le plan, $z$ est le point $(a,b)$. Le <b>module</b> $|z|=\sqrt{a^2+b^2}$ est sa distance à l'origine. L'<b>argument</b> $\theta$ est l'angle avec l'axe horizontal.</p>
<h4>Forme exponentielle</h4><p>Formule d'Euler : $e^{i\theta}=\cos\theta+i\sin\theta$. Donc $z=r\,e^{i\theta}$ avec $r=|z|$. Avantage : $r_1e^{i\theta_1}\times r_2e^{i\theta_2}=r_1r_2\,e^{i(\theta_1+\theta_2)}$.</p>`,
    formules: [
      { nom: 'Module et argument', f: T`$$|z|=\sqrt{a^2+b^2}\qquad \cos\theta=\frac a{|z|},\ \ \sin\theta=\frac b{|z|}$$`,
        quand: T`Passer de la forme algébrique à la forme exponentielle (amplitude et phase d'un signal).`,
        pas: T`$\theta=\arctan\frac ba$ n'est vrai que si $a>0$. Si $a<0$, il faut ajouter $\pi$. Utilise plutôt $\cos\theta$ et $\sin\theta$ et regarde le quadrant.` },
      { nom: 'Opérations en forme exponentielle', f: T`$$z_1z_2=r_1r_2e^{i(\theta_1+\theta_2)}\qquad \frac{z_1}{z_2}=\frac{r_1}{r_2}e^{i(\theta_1-\theta_2)}\qquad z^n=r^ne^{in\theta}$$`,
        quand: T`Produits, quotients, puissances : la forme exponentielle est imbattable.`,
        pas: T`Pour une <b>somme</b>, la forme exponentielle ne simplifie rien : repasse en forme algébrique.` },
      { nom: 'Division : multiplier par le conjugué', f: T`$$\frac{a+ib}{c+id}=\frac{(a+ib)(c-id)}{c^2+d^2}$$`,
        quand: T`Écrire un quotient sous forme $x+iy$ (impédances en électricité).`,
        pas: T`On ne divise pas partie réelle par partie réelle ! Le conjugué rend le dénominateur réel.` }
    ],
    methode: [
      T`Additions/soustractions → forme algébrique.`,
      T`Produits/quotients/puissances → forme exponentielle.`,
      T`Pour l'argument : calcule $\cos\theta$ et $\sin\theta$, et place le point pour vérifier le quadrant.`,
      T`Vérifie les modules : $|z_1z_2|=|z_1||z_2|$.`
    ],
    exemple: {
      e: T`Calculer $(1+i)^8$.`,
      s: [T`Puissance → forme exponentielle (développer 8 fois serait très long).`, T`$|1+i|=\sqrt2$ ; $\cos\theta=\sin\theta=\frac{1}{\sqrt2}$ donc $\theta=\frac\pi4$.`, T`$(1+i)^8=(\sqrt2)^8e^{i\cdot8\pi/4}=16\,e^{2i\pi}=16$.`],
      r: T`$(1+i)^8=16$`
    },
    pieges: [
      T`$i^2=-1$ : n'oublie pas le signe en développant.`,
      T`$|a+ib|\neq a+b$ : c'est une racine de somme de carrés.`,
      T`L'argument est défini à $2\pi$ près.`
    ],
    exos: [
      { d: 1, t: 'Produit', e: T`Calculer $(2+3i)(1-i)$. Donne la partie réelle.`,
        h: T`Développe, puis remplace $i^2$ par $-1$.`,
        s: [T`$2-2i+3i-3i^2$.`, T`$=2+i+3=5+i$.`],
        r: T`$5+i$ ; partie réelle $5$`, n: 5 },
      { d: 1, t: 'Module', e: T`Calculer $|3-4i|$.`,
        h: T`$\sqrt{a^2+b^2}$.`,
        s: [T`$\sqrt{9+16}=\sqrt{25}=5$.`],
        r: T`$5$`, n: 5 },
      { d: 2, t: 'Quotient', e: T`Écrire $\dfrac{1+2i}{3-i}$ sous forme algébrique. Donne la partie imaginaire.`,
        h: T`Multiplie en haut et en bas par $3+i$.`,
        s: [T`Pourquoi le conjugué : $(3-i)(3+i)=9+1=10$ est réel.`, T`Numérateur : $(1+2i)(3+i)=3+i+6i+2i^2=1+7i$.`, T`Résultat : $\frac{1+7i}{10}=0{,}1+0{,}7i$.`],
        r: T`$0{,}1+0{,}7i$ ; partie imaginaire $0{,}7$`, n: 0.7 },
      { d: 2, t: 'Argument (piège du quadrant)', e: T`Donner la forme exponentielle de $z=-1+i\sqrt3$. Donne l'argument en radians.`,
        h: T`Module 2. Calcule $\cos\theta$ et $\sin\theta$ : quel quadrant ?`,
        s: [T`$|z|=\sqrt{1+3}=2$.`, T`$\cos\theta=-\frac12$, $\sin\theta=\frac{\sqrt3}{2}$ : $\cos<0$, $\sin>0$ → 2ᵉ quadrant.`, T`$\theta=\frac{2\pi}3$. Piège : $\arctan\frac{\sqrt3}{-1}=-\frac\pi3$ est <b>faux</b> car $a<0$.`],
        r: T`$z=2e^{2i\pi/3}$, $\theta=\frac{2\pi}3\approx2{,}094$`, n: 2.094 },
      { d: 3, t: 'Équation à Δ négatif', e: T`Résoudre dans $\mathbb C$ : $z^2+2z+5=0$. Donne la partie imaginaire positive.`,
        h: T`$\Delta<0$ : les racines sont $\frac{-b\pm i\sqrt{-\Delta}}{2a}$.`,
        s: [T`$\Delta=4-20=-16=(4i)^2$.`, T`$z=\frac{-2\pm4i}{2}=-1\pm2i$.`, T`Ces racines reviendront dans les équations différentielles (oscillations amorties).`],
        r: T`$z=-1\pm2i$`, n: 2 },
      { d: 3, t: 'Grande puissance', e: T`Calculer $(1+i)^{10}$. Donne sa partie imaginaire.`,
        h: T`$1+i=\sqrt2e^{i\pi/4}$.`,
        s: [T`$(1+i)^{10}=(\sqrt2)^{10}e^{i\cdot10\pi/4}=32\,e^{i5\pi/2}$.`, T`$\frac{5\pi}2=2\pi+\frac\pi2$, donc $e^{i5\pi/2}=e^{i\pi/2}=i$.`, T`$(1+i)^{10}=32i$.`],
        r: T`$32i$`, n: 32 }
    ]
  },

  /* ================================================================ */
  {
    id: 'limites-dl', matiere: 'maths', niveau: 'Supérieur',
    titre: 'Limites et développements limités',
    resume: 'Lever les formes indéterminées et approcher une fonction par un polynôme : la base des approximations en physique.',
    motscles: 'limite forme indéterminée équivalent développement limité taylor approximation',
    pourquoi: T`<p>Le physicien approxime sans arrêt : « pour de petits angles, $\sin\theta\approx\theta$ », « si $x\ll1$, $(1+x)^n\approx1+nx$ ». Ce sont des développements limités. Ils transforment un problème impossible en problème simple, et c'est ainsi qu'on obtient l'équation du pendule.</p>`,
    cours: T`<h4>Formes indéterminées</h4><p>$\frac00$, $\frac\infty\infty$, $\infty-\infty$, $0\times\infty$ : le résultat dépend de la « vitesse » de chaque morceau. Il faut transformer l'expression.</p>
<h4>Techniques</h4><ul><li><b>Facteur dominant</b> à l'infini : $3x^2+x\sim3x^2$.</li><li><b>Croissances comparées</b> : $\frac{e^x}{x^n}\to+\infty$, $\frac{\ln x}{x}\to0$.</li><li><b>Développements limités</b> en 0.</li></ul>
<h4>DL usuels en 0</h4>
$$e^x=1+x+\frac{x^2}2+o(x^2)\quad \sin x=x-\frac{x^3}6+o(x^3)\quad \cos x=1-\frac{x^2}2+o(x^2)$$
$$\ln(1+x)=x-\frac{x^2}2+o(x^2)\qquad (1+x)^\alpha=1+\alpha x+o(x)$$`,
    formules: [
      { nom: 'Facteur dominant (fractions rationnelles)', f: T`$$\lim_{x\to\pm\infty}\frac{a_nx^n+\dots}{b_mx^m+\dots}=\lim\frac{a_nx^n}{b_mx^m}$$`,
        quand: T`Quotient de polynômes quand $x\to\pm\infty$.`,
        pas: T`En $x\to0$ c'est l'inverse : ce sont les termes de <b>plus bas</b> degré qui dominent.` },
      { nom: 'DL et équivalents usuels en 0', f: T`$$\sin x\sim x\qquad 1-\cos x\sim\frac{x^2}2\qquad e^x-1\sim x\qquad \ln(1+x)\sim x$$`,
        quand: T`Forme $\frac00$ en 0 avec des fonctions usuelles. Remplacer chaque morceau par son équivalent dans un <b>produit/quotient</b>.`,
        pas: T`Ne jamais remplacer par des équivalents dans une <b>somme</b> : $e^x-1-x$ n'est pas « équivalent à $x-x=0$ ». Dans ce cas, utilise le DL à un ordre plus élevé.` },
      { nom: 'Approximation au premier ordre', f: T`$$(1+x)^\alpha\approx1+\alpha x\quad(|x|\ll1)$$`,
        quand: T`Calcul rapide ($\sqrt{1{,}02}$), petites variations en physique (dilatation, relativité, erreurs de mesure).`,
        pas: T`Valable seulement si $x$ est petit. Pour $x=0{,}5$ l'erreur devient importante.` }
    ],
    methode: [
      T`Remplace directement : si ce n'est pas une forme indéterminée, c'est fini.`,
      T`À l'infini : factorise par le terme dominant.`,
      T`En 0 : équivalents (si produit/quotient) ou DL (si somme qui se compense).`,
      T`Vérifie numériquement avec une valeur proche (calculatrice).`
    ],
    exemple: {
      e: T`Calculer $\displaystyle\lim_{x\to0}\frac{e^x-1-x}{x^2}$.`,
      s: [T`Remplacement direct : $\frac00$, forme indéterminée.`, T`Pourquoi pas les équivalents : le numérateur est une <b>somme</b> où $e^x-1$ et $x$ se compensent. Il faut le DL à l'ordre 2.`, T`$e^x=1+x+\frac{x^2}2+o(x^2)$ donc $e^x-1-x=\frac{x^2}2+o(x^2)$.`, T`$\frac{e^x-1-x}{x^2}=\frac12+o(1)\to\frac12$.`],
      r: T`$\frac12$`
    },
    pieges: [
      T`$\frac\infty\infty$ ne vaut pas 1 et $\infty-\infty$ ne vaut pas 0.`,
      T`Équivalents dans une somme : interdit.`,
      T`$\sin x\approx x$ n'est vrai qu'en <b>radians</b>.`
    ],
    exos: [
      { d: 1, t: 'Fraction rationnelle', e: T`Calculer $\displaystyle\lim_{x\to+\infty}\frac{3x^2+x}{5x^2-2}$.`,
        h: T`Garde les termes de plus haut degré.`,
        s: [T`$\frac{3x^2+x}{5x^2-2}\sim\frac{3x^2}{5x^2}=\frac35$.`],
        r: T`$\frac35=0{,}6$`, n: 0.6 },
      { d: 1, t: 'Limite avec sinus', e: T`Calculer $\displaystyle\lim_{x\to0}\frac{\sin(3x)}{x}$.`,
        h: T`$\sin u\sim u$ quand $u\to0$, avec $u=3x$.`,
        s: [T`$\sin(3x)\sim3x$ (quotient → équivalents autorisés).`, T`$\frac{3x}{x}=3$.`],
        r: T`$3$`, n: 3 },
      { d: 2, t: 'Croissances comparées', e: T`Calculer $\displaystyle\lim_{x\to+\infty}x^2e^{-x}$.`,
        h: T`$x^2e^{-x}=\frac{x^2}{e^x}$.`,
        s: [T`Forme $\infty\times0$. On réécrit : $\frac{x^2}{e^x}$.`, T`Croissances comparées : l'exponentielle l'emporte sur toute puissance.`, T`Limite $0$.`],
        r: T`$0$`, n: 0, tol: 0 },
      { d: 2, t: '1 − cos', e: T`Calculer $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$.`,
        h: T`$\cos x=1-\frac{x^2}2+o(x^2)$.`,
        s: [T`$1-\cos x=\frac{x^2}2+o(x^2)$.`, T`Quotient : $\frac12+o(1)$.`],
        r: T`$\frac12$`, n: 0.5 },
      { d: 3, t: 'Approximation et limite', e: T`(a) Donner une valeur approchée de $\sqrt{1{,}02}$ sans calculatrice. (b) Calculer $\displaystyle\lim_{x\to+\infty}x\big(\ln(x+1)-\ln x\big)$. Entre la réponse (b).`,
        h: T`(a) $(1+x)^{1/2}\approx1+\frac x2$. (b) $\ln(x+1)-\ln x=\ln(1+\frac1x)$ et $\frac1x\to0$.`,
        s: [T`(a) $\sqrt{1+0{,}02}\approx1+\frac{0{,}02}2=1{,}01$ (vraie valeur : $1{,}00995$).`, T`(b) Forme $\infty\times0$. $\ln(x+1)-\ln x=\ln\left(1+\frac1x\right)$.`, T`Avec $u=\frac1x\to0$ : $\ln(1+u)\sim u$, donc $x\ln(1+\frac1x)\sim x\times\frac1x=1$.`],
        r: T`(a) $\approx1{,}01$ ; (b) $1$`, n: 1 }
    ]
  },

  /* ================================================================ */
  {
    id: 'equa-diff', matiere: 'maths', niveau: 'Supérieur',
    titre: 'Équations différentielles',
    resume: 'Le chapitre qui relie tout : circuits RC, RL, RLC, ressorts, pendules et chute avec frottements obéissent à ces équations.',
    motscles: 'équation différentielle premier ordre second ordre caractéristique homogène particulière',
    pourquoi: T`<p>Les lois de la physique relient une grandeur à ses <b>dérivées</b> : $m\ddot x=-kx$ (ressort), $RC\dot u+u=E$ (condensateur). Résoudre ces équations, c'est prédire l'évolution du système. Si tu maîtrises ce chapitre, la moitié de la mécanique et de l'électricité de prépa devient de la routine.</p>`,
    cours: T`<h4>Principe général</h4><p>Solution = <b>solution homogène</b> (second membre remplacé par 0) + <b>une solution particulière</b>. Ensuite seulement, on applique les conditions initiales.</p>
<h4>Premier ordre à coefficients constants</h4><p>$y'+ay=b$. Homogène : $y_h=Ce^{-at}$. Particulière constante : $y_p=\frac ba$. Donc $y=\frac ba+Ce^{-at}$.</p>
<h4>Second ordre homogène</h4><p>$ay''+by'+cy=0$. On cherche $y=e^{rt}$ : cela donne l'<b>équation caractéristique</b> $ar^2+br+c=0$.</p>
<ul><li>$\Delta>0$ : $y=C_1e^{r_1t}+C_2e^{r_2t}$ (régime apériodique)</li><li>$\Delta=0$ : $y=(C_1+C_2t)e^{rt}$ (régime critique)</li><li>$\Delta<0$, $r=\alpha\pm i\beta$ : $y=e^{\alpha t}(A\cos\beta t+B\sin\beta t)$ (pseudo-périodique)</li></ul>`,
    formules: [
      { nom: 'Premier ordre (forme physicienne)', f: T`$$\tau y'+y=K\ \Rightarrow\ y(t)=K+\big(y(0)-K\big)e^{-t/\tau}$$`,
        quand: T`Charge/décharge d'un condensateur, établissement du courant dans une bobine, refroidissement : toute grandeur qui tend vers une valeur finale $K$.`,
        pas: T`Si le second membre n'est pas constant (sinusoïdal par exemple), la solution particulière n'est plus $K$ : il faut en chercher une de la même forme.` },
      { nom: 'Oscillateur harmonique', f: T`$$y''+\omega_0^2y=0\ \Rightarrow\ y=A\cos(\omega_0t)+B\sin(\omega_0t)$$`,
        quand: T`Pas de terme en $y'$ (pas de frottement) : ressort, pendule aux petits angles, circuit LC.`,
        pas: T`Le coefficient devant $y$ est $\omega_0^{\,2}$, pas $\omega_0$ : pour $y''+9y=0$, $\omega_0=3$.` },
      { nom: 'Second ordre : équation caractéristique', f: T`$$ay''+by'+cy=0\ \longrightarrow\ ar^2+br+c=0$$`,
        quand: T`Second ordre avec frottement ($b\neq0$) : RLC série, ressort amorti.`,
        pas: T`On applique les conditions initiales sur la solution <b>complète</b> (homogène + particulière), jamais sur l'homogène seule.` }
    ],
    methode: [
      T`Mets l'équation sous forme normalisée (coefficient 1 devant la dérivée la plus haute, ou forme $\tau y'+y=K$).`,
      T`Résous l'homogène (exponentielle ou équation caractéristique).`,
      T`Trouve une solution particulière (constante si le second membre est constant).`,
      T`Additionne, puis utilise les conditions initiales pour les constantes.`,
      T`Vérifie : $t=0$ redonne la condition initiale, $t\to\infty$ donne une valeur physique logique.`
    ],
    exemple: {
      e: T`Charge d'un condensateur : $\tau u'+u=E$ avec $u(0)=0$. Trouver $u(t)$.`,
      s: [T`Forme $\tau y'+y=K$ avec $K=E$.`, T`Homogène : $\tau u'+u=0\Rightarrow u_h=Ce^{-t/\tau}$.`, T`Particulière constante : $u_p=E$ (car $u'=0$ donne $u=E$).`, T`$u=E+Ce^{-t/\tau}$ ; $u(0)=0\Rightarrow C=-E$.`, T`Vérification : $u(0)=0$ ✔, $u(\infty)=E$ ✔ (le condensateur finit chargé sous $E$).`],
      r: T`$u(t)=E\left(1-e^{-t/\tau}\right)$`
    },
    pieges: [
      T`Appliquer les conditions initiales avant d'ajouter la solution particulière.`,
      T`Confondre $\omega_0$ et $\omega_0^2$.`,
      T`Oublier qu'il faut <b>deux</b> conditions initiales pour un second ordre ($y(0)$ et $y'(0)$).`
    ],
    exos: [
      { d: 1, t: 'Croissance exponentielle', e: T`Résoudre $y'=3y$ avec $y(0)=2$. Calculer $y(1)$.`,
        h: T`$y'=ay\Rightarrow y=Ce^{at}$.`,
        s: [T`$y=Ce^{3t}$ ; $y(0)=C=2$.`, T`$y(t)=2e^{3t}$, $y(1)=2e^3\approx40{,}2$.`],
        r: T`$y=2e^{3t}$, $y(1)\approx40{,}2$`, n: 40.17 },
      { d: 2, t: 'Premier ordre avec second membre', e: T`Résoudre $y'+2y=6$ avec $y(0)=0$. Calculer $y(1)$.`,
        h: T`Solution particulière constante : $2y_p=6$.`,
        s: [T`Homogène : $y_h=Ce^{-2t}$.`, T`Particulière : $y_p=3$.`, T`$y=3+Ce^{-2t}$, $y(0)=0\Rightarrow C=-3$.`, T`$y(t)=3(1-e^{-2t})$ ; $y(1)=3(1-e^{-2})\approx2{,}594$.`],
        r: T`$y(1)\approx2{,}59$`, n: 2.594 },
      { d: 2, t: 'Oscillateur', e: T`Résoudre $y''+9y=0$ avec $y(0)=1$, $y'(0)=0$. Quelle est la période ?`,
        h: T`$\omega_0^2=9$. La période est $T=\frac{2\pi}{\omega_0}$.`,
        s: [T`$\omega_0=3$ : $y=A\cos3t+B\sin3t$.`, T`$y(0)=A=1$ ; $y'(0)=3B=0\Rightarrow B=0$.`, T`$y=\cos3t$, $T=\frac{2\pi}3\approx2{,}094$.`],
        r: T`$y=\cos(3t)$, $T\approx2{,}09$`, n: 2.094 },
      { d: 3, t: 'Oscillations amorties', e: T`Résoudre $y''+2y'+5y=0$ avec $y(0)=0$, $y'(0)=2$. Calculer $y(\pi/4)$.`,
        h: T`Équation caractéristique $r^2+2r+5=0$ : $\Delta<0$.`,
        s: [T`$r^2+2r+5=0$, $\Delta=-16$, $r=-1\pm2i$ ($\alpha=-1$, $\beta=2$).`, T`$y=e^{-t}(A\cos2t+B\sin2t)$.`, T`$y(0)=A=0$. Puis $y'=e^{-t}(-B\sin2t+2B\cos2t)$, $y'(0)=2B=2\Rightarrow B=1$.`, T`$y=e^{-t}\sin2t$ : oscillation dont l'amplitude décroît. $y(\pi/4)=e^{-\pi/4}\approx0{,}456$.`],
        r: T`$y=e^{-t}\sin(2t)$, $y(\pi/4)\approx0{,}456$`, n: 0.456 },
      { d: 3, t: 'Racines réelles', e: T`Résoudre $y''-3y'+2y=0$ avec $y(0)=0$ et $y'(0)=1$. Calculer $y(1)$.`,
        h: T`$r^2-3r+2=0$ a deux racines évidentes.`,
        s: [T`$r=1$ et $r=2$ : $y=C_1e^t+C_2e^{2t}$.`, T`$C_1+C_2=0$ et $C_1+2C_2=1$ ⇒ $C_2=1$, $C_1=-1$.`, T`$y=e^{2t}-e^t$, $y(1)=e^2-e\approx4{,}67$.`],
        r: T`$y=e^{2t}-e^{t}$, $y(1)\approx4{,}67$`, n: 4.671 }
    ]
  },

  /* ================================================================ */
  {
    id: 'matrices', matiere: 'maths', niveau: 'Supérieur',
    titre: 'Systèmes linéaires et matrices',
    resume: 'Résoudre plusieurs équations à la fois : circuits à plusieurs mailles, structures, réseaux.',
    motscles: 'matrice système linéaire pivot gauss déterminant inverse',
    pourquoi: T`<p>Un circuit à trois mailles donne trois équations à trois inconnues. Une structure métallique en donne des centaines. Les matrices organisent ces calculs, et les ordinateurs (simulation, IA, graphisme) ne font quasiment que du calcul matriciel.</p>`,
    cours: T`<h4>Système linéaire</h4><p>Plusieurs équations du premier degré. Trois cas : une solution unique, aucune, ou une infinité.</p>
<h4>Pivot de Gauss</h4><p>On élimine une inconnue après l'autre par des combinaisons de lignes $L_i\leftarrow L_i-kL_j$, pour obtenir un système triangulaire, puis on remonte.</p>
<h4>Matrices</h4><p>Le système s'écrit $AX=B$. Produit matriciel : coefficient $(i,j)$ = ligne $i$ de $A$ × colonne $j$ de $B$. Attention, en général $AB\neq BA$.</p>`,
    formules: [
      { nom: 'Pivot de Gauss', f: T`$$L_i\leftarrow L_i-\frac{a_{i1}}{a_{11}}L_1$$`,
        quand: T`Méthode universelle, surtout pour 3 inconnues ou plus.`,
        pas: T`La substitution marche pour 2 inconnues, mais devient vite illisible au-delà. Ne multiplie jamais une ligne par 0.` },
      { nom: 'Déterminant et inverse 2×2', f: T`$$A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\quad \det A=ad-bc\quad A^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$$`,
        quand: T`Système 2×2, ou quand on a besoin de l'inverse explicitement. Si $\det A\neq0$, solution unique $X=A^{-1}B$.`,
        pas: T`Si $\det A=0$, pas d'inverse : le système a 0 ou une infinité de solutions. Pour 3×3 et plus, Gauss est plus rapide que les formules.` },
      { nom: 'Produit matriciel', f: T`$$(AB)_{ij}=\sum_k a_{ik}b_{kj}$$`,
        quand: T`Composer des transformations, écrire un système.`,
        pas: T`On ne multiplie pas « case par case ». Et $AB$ n'existe que si le nombre de colonnes de $A$ = nombre de lignes de $B$.` }
    ],
    methode: [
      T`Écris le système proprement aligné ($x$, $y$, $z$ en colonnes).`,
      T`Choisis un pivot simple (coefficient 1 si possible).`,
      T`Élimine $x$ des lignes suivantes, puis $y$, etc.`,
      T`Remonte. Vérifie la solution dans <b>toutes</b> les équations de départ.`
    ],
    exemple: {
      e: T`Résoudre $\begin{cases}2x+y=5\\x-y=1\end{cases}$`,
      s: [T`En additionnant les deux lignes, $y$ disparaît : $3x=6$.`, T`Pourquoi additionner : les coefficients de $y$ sont opposés ($+1$ et $-1$).`, T`$x=2$, puis $y=x-1=1$.`, T`Vérification : $2\times2+1=5$ ✔, $2-1=1$ ✔.`],
      r: T`$(x,y)=(2,1)$`
    },
    pieges: [
      T`$AB\neq BA$ en général.`,
      T`Oublier de modifier le second membre lors d'une opération sur les lignes.`,
      T`Diviser par un pivot nul.`
    ],
    exos: [
      { d: 1, t: 'Système 2×2', e: T`Résoudre $x+y=10$, $x-y=4$. Donne $x$.`,
        h: T`Additionne les deux équations.`,
        s: [T`$2x=14\Rightarrow x=7$.`, T`$y=10-7=3$.`],
        r: T`$x=7$, $y=3$`, n: 7 },
      { d: 1, t: 'Déterminant', e: T`Calculer $\det\begin{pmatrix}3&2\\1&4\end{pmatrix}$.`,
        h: T`$ad-bc$.`,
        s: [T`$3\times4-2\times1=12-2=10$.`],
        r: T`$10$`, n: 10 },
      { d: 2, t: 'Produit de matrices', e: T`Calculer $\begin{pmatrix}1&2\\0&1\end{pmatrix}\begin{pmatrix}3&0\\1&2\end{pmatrix}$. Donne le coefficient en haut à gauche.`,
        h: T`Ligne 1 de la première × colonne 1 de la seconde.`,
        s: [T`$(1,1)$ : $1\times3+2\times1=5$ ; $(1,2)$ : $1\times0+2\times2=4$.`, T`$(2,1)$ : $0\times3+1\times1=1$ ; $(2,2)$ : $0+2=2$.`],
        r: T`$\begin{pmatrix}5&4\\1&2\end{pmatrix}$`, n: 5 },
      { d: 2, t: 'Inverse', e: T`Calculer l'inverse de $A=\begin{pmatrix}2&1\\5&3\end{pmatrix}$. Donne le coefficient en bas à gauche.`,
        h: T`$\det A=1$, puis formule de l'inverse 2×2.`,
        s: [T`$\det A=6-5=1\neq0$ : inversible.`, T`$A^{-1}=\begin{pmatrix}3&-1\\-5&2\end{pmatrix}$.`, T`Vérif : $AA^{-1}=\begin{pmatrix}6-5&-2+2\\15-15&-5+6\end{pmatrix}=I$ ✔`],
        r: T`$A^{-1}=\begin{pmatrix}3&-1\\-5&2\end{pmatrix}$`, n: -5 },
      { d: 3, t: 'Pivot de Gauss 3×3', e: T`Résoudre $\begin{cases}x+y+z=6\\2x-y+z=3\\x+2y-z=2\end{cases}$. Donne $z$.`,
        h: T`$L_2\leftarrow L_2-2L_1$ et $L_3\leftarrow L_3-L_1$ pour éliminer $x$.`,
        s: [T`$L_2-2L_1$ : $-3y-z=-9$. $L_3-L_1$ : $y-2z=-4$.`, T`De la 2ᵉ : $y=2z-4$. On remplace : $-3(2z-4)-z=-9\Rightarrow-7z=-21\Rightarrow z=3$.`, T`$y=2$, puis $x=6-2-3=1$.`, T`Vérif : $2-2+3=3$ ✔, $1+4-3=2$ ✔.`],
        r: T`$(x,y,z)=(1,2,3)$`, n: 3 }
    ]
  }

  ]);
})();

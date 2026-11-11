/* PHYSIQUE — MÉCANIQUE */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  /* ================================================================ */
  {
    id: 'cinematique', matiere: 'meca', niveau: 'Lycée',
    titre: 'Cinématique : décrire un mouvement',
    resume: 'Position, vitesse, accélération. Mouvements uniformes et uniformément accélérés.',
    motscles: 'vitesse accélération mru mrua équation horaire freinage',
    pourquoi: T`<p>Avant de comprendre <i>pourquoi</i> un objet bouge (forces), il faut savoir <i>décrire</i> comment il bouge. Distance de freinage d'une voiture, temps de chute, rattrapage entre deux véhicules : c'est de la cinématique, et ce sont des dérivées et des primitives appliquées.</p>`,
    cours: T`<h4>Les trois grandeurs</h4><p>Position $x(t)$ en m ; vitesse $v=\frac{dx}{dt}$ en m/s ; accélération $a=\frac{dv}{dt}$ en m/s². Dans l'autre sens, on intègre : de $a$ on retrouve $v$, puis $x$.</p>
<h4>Mouvement rectiligne uniforme (MRU)</h4><p>$v$ constante, $a=0$ : $x=x_0+vt$.</p>
<h4>Mouvement uniformément accéléré (MRUA)</h4><p>$a$ constante. En intégrant deux fois : $v=v_0+at$ et $x=x_0+v_0t+\frac12at^2$.</p>
<h4>Unités</h4><p>Convertis tout en unités SI. $1\ \text{km/h}=\frac{1000}{3600}\ \text{m/s}$, donc on <b>divise par 3,6</b>.</p>`,
    formules: [
      { nom: 'Équations horaires du MRUA', f: T`$$v(t)=v_0+at\qquad x(t)=x_0+v_0t+\tfrac12at^2$$`,
        quand: T`Accélération <b>constante</b> : chute libre, voiture qui accélère ou freine régulièrement. Utile quand le temps est connu ou demandé.`,
        pas: T`Si l'accélération varie avec le temps, ces formules sont fausses : il faut intégrer $a(t)$.` },
      { nom: 'Relation indépendante du temps', f: T`$$v^2-v_0^2=2a\,(x-x_0)$$`,
        quand: T`Le temps n'est <b>ni donné ni demandé</b> : distance de freinage, vitesse après une certaine distance.`,
        pas: T`On pourrait utiliser les deux équations horaires et éliminer $t$, mais c'est un système à résoudre. Cette formule fait l'élimination pour toi (elle vient de là).` },
      { nom: 'Vitesse moyenne', f: T`$$v_{moy}=\frac{\Delta x}{\Delta t}$$`,
        quand: T`Trajet global, sans détail du mouvement.`,
        pas: T`La vitesse moyenne n'est pas la moyenne des vitesses : 60 km/h à l'aller et 40 km/h au retour donnent 48 km/h en moyenne, pas 50.` }
    ],
    methode: [
      T`Choisis un axe et une origine (des temps et des positions).`,
      T`Liste les données en unités SI avec leur signe (une décélération est $a<0$).`,
      T`Le temps intervient-il ? Oui → équations horaires. Non → $v^2-v_0^2=2a\Delta x$.`,
      T`Calcule en lettres, puis en chiffres. Vérifie l'ordre de grandeur.`
    ],
    exemple: {
      e: T`Une voiture passe de 0 à 100 km/h en 10 s avec une accélération constante. Quelle distance parcourt-elle ?`,
      s: [T`Conversion : $v=\frac{100}{3{,}6}\approx27{,}8\ \text{m/s}$.`, T`$a=\frac{\Delta v}{\Delta t}=\frac{27{,}8}{10}=2{,}78\ \text{m/s}^2$.`, T`Le temps est connu → équation horaire : $x=\frac12at^2=\frac12\times2{,}78\times100$.`, T`Autre méthode (vérification) : $x=\frac{v^2}{2a}=\frac{27{,}8^2}{5{,}56}\approx139$ m. Même résultat.`],
      r: T`$x\approx139\ \text{m}$`
    },
    pieges: [
      T`Oublier de convertir les km/h en m/s.`,
      T`Oublier le signe : en freinage, $a$ est négative si l'axe est dans le sens du mouvement.`,
      T`Utiliser les formules du MRUA alors que l'accélération n'est pas constante.`
    ],
    exos: [
      { d: 1, t: 'Conversion', e: T`Convertir 72 km/h en m/s.`,
        h: T`Diviser par 3,6.`,
        s: [T`$72\ \text{km/h}=\frac{72\,000\ \text{m}}{3600\ \text{s}}=\frac{72}{3{,}6}$.`, T`$=20\ \text{m/s}$.`],
        r: T`$20\ \text{m/s}$`, n: 20, u: 'm/s' },
      { d: 1, t: 'Vitesse moyenne', e: T`Un bus parcourt 150 km entre Dakar et Kaolack en 2 h 30. Vitesse moyenne en km/h ?`,
        h: T`2 h 30 = 2,5 h.`,
        s: [T`$v=\frac{150}{2{,}5}=60\ \text{km/h}$.`],
        r: T`$60\ \text{km/h}$`, n: 60, u: 'km/h' },
      { d: 2, t: 'Distance de freinage', e: T`Une voiture roule à 30 m/s et freine avec une décélération constante de 6 m/s². Quelle distance pour s'arrêter ?`,
        h: T`Le temps n'est ni donné ni demandé.`,
        s: [T`Pourquoi $v^2-v_0^2=2a\Delta x$ : on ne connaît pas $t$ et on ne le veut pas.`, T`$0-30^2=2\times(-6)\times d$.`, T`$d=\frac{900}{12}=75\ \text{m}$.`, T`Remarque : la distance varie avec $v^2$. Rouler 2 fois plus vite = freiner sur 4 fois plus de distance.`],
        r: T`$75\ \text{m}$`, n: 75, u: 'm' },
      { d: 2, t: 'Dériver une position', e: T`Un mobile a pour position $x(t)=2t^3-3t^2$ (m). Calculer son accélération à $t=2$ s.`,
        h: T`Dérive deux fois.`,
        s: [T`Pourquoi dériver : $a$ n'est pas constante ici, donc pas de formule MRUA.`, T`$v(t)=6t^2-6t$ ; $a(t)=12t-6$.`, T`$a(2)=18\ \text{m/s}^2$.`],
        r: T`$18\ \text{m/s}^2$`, n: 18, u: 'm/s²' },
      { d: 3, t: 'Rattrapage', e: T`À $t=0$, une moto roulant à 20 m/s passe devant une voiture à l'arrêt. La voiture démarre aussitôt avec $a=2$ m/s². Au bout de combien de temps la rattrape-t-elle ?`,
        h: T`Écris $x_{moto}(t)$ et $x_{voiture}(t)$ avec la même origine, puis égalise.`,
        s: [T`Moto (MRU) : $x_M=20t$. Voiture (MRUA, départ arrêté) : $x_V=\frac12\times2t^2=t^2$.`, T`Rattrapage : $t^2=20t\iff t(t-20)=0$ (factorisation, pas besoin de $\Delta$).`, T`$t=0$ (départ) ou $t=20$ s.`, T`À ce moment : distance $400$ m, vitesse de la voiture $2\times20=40$ m/s.`],
        r: T`$t=20\ \text{s}$`, n: 20, u: 's' }
    ]
  },

  /* ================================================================ */
  {
    id: 'newton', matiere: 'meca', niveau: 'Lycée',
    titre: 'Forces et lois de Newton',
    resume: 'Bilan des forces, principe fondamental de la dynamique, plan incliné, frottements, poulies.',
    motscles: 'force newton pfd poids réaction frottement tension plan incliné projectile',
    pourquoi: T`<p>Les lois de Newton expliquent <b>pourquoi</b> les objets bougent. Elles servent à dimensionner un pont, un ascenseur, un frein, un câble. C'est la base de toute la mécanique de l'ingénieur.</p>`,
    cours: T`<h4>Les trois lois</h4><ol><li><b>Inertie</b> : si $\sum\vec F=\vec0$, le mouvement est rectiligne uniforme (ou repos).</li><li><b>PFD</b> : $\sum\vec F=m\vec a$.</li><li><b>Actions réciproques</b> : si A exerce $\vec F$ sur B, B exerce $-\vec F$ sur A.</li></ol>
<h4>Forces courantes</h4><ul><li>Poids $\vec P=m\vec g$, vertical vers le bas, $g\approx9{,}81\ \text{m/s}^2$.</li><li>Réaction normale $\vec N$ : perpendiculaire au support.</li><li>Frottement solide : $f=\mu N$, opposé au glissement.</li><li>Tension d'un fil : le long du fil.</li></ul>
<h4>Projection</h4><p>$\sum\vec F=m\vec a$ est une équation <b>vectorielle</b> : on la projette sur deux axes bien choisis (souvent : le long du mouvement et perpendiculairement).</p>`,
    formules: [
      { nom: 'Principe fondamental de la dynamique', f: T`$$\sum\vec F_{ext}=m\,\vec a$$`,
        quand: T`Dès qu'on cherche une accélération ou une force, dans un référentiel galiléen (sol).`,
        pas: T`Ce n'est pas $\sum F=mv$. Et seules les forces <b>extérieures</b> au système comptent.` },
      { nom: 'Poids et frottement solide', f: T`$$P=mg\qquad f=\mu N$$`,
        quand: T`$P$ toujours ; $f=\mu N$ quand l'objet <b>glisse</b> sur une surface.`,
        pas: T`$N$ n'est pas toujours égal à $mg$ ! Sur un plan incliné $N=mg\cos\alpha$ ; dans un ascenseur qui accélère, $N\neq mg$.` },
      { nom: 'Portée d’un projectile (sol horizontal)', f: T`$$L=\frac{v_0^2\sin(2\alpha)}{g}$$`,
        quand: T`Tir depuis le sol, retombée à la même hauteur, sans frottement de l'air.`,
        pas: T`Si le point de départ est en hauteur, cette formule est fausse : reviens aux équations horaires $x(t)$, $y(t)$.` }
    ],
    methode: [
      T`Définis le <b>système</b> et le <b>référentiel</b>.`,
      T`Fais le bilan des forces et un schéma avec tous les vecteurs.`,
      T`Choisis des axes adaptés (un axe le long du mouvement).`,
      T`Projette $\sum\vec F=m\vec a$ sur chaque axe et résous.`
    ],
    exemple: {
      e: T`Un bloc de 2 kg glisse sans frottement sur un plan incliné de 30°. Quelle est son accélération ?`,
      s: [T`Système : le bloc. Forces : poids $\vec P$ et réaction $\vec N$.`, T`Axes : $Ox$ le long de la pente (vers le bas), $Oy$ perpendiculaire.`, T`Sur $Ox$ : $\vec N$ n'a pas de composante (elle est perpendiculaire). $P_x=mg\sin30°$.`, T`PFD : $mg\sin30°=ma\Rightarrow a=g\sin30°=4{,}9\ \text{m/s}^2$. La masse s'élimine !`],
      r: T`$a\approx4{,}9\ \text{m/s}^2$`
    },
    pieges: [
      T`Oublier une force (souvent la réaction ou la tension).`,
      T`Prendre $N=mg$ automatiquement.`,
      T`Projeter avec le mauvais angle : vérifie avec le cas limite $\alpha=0$.`
    ],
    exos: [
      { d: 1, t: 'Force pour accélérer', e: T`Quelle force faut-il pour donner à une voiture de 1200 kg une accélération de 3 m/s² ?`,
        h: T`$F=ma$.`,
        s: [T`$F=1200\times3=3600\ \text{N}$.`],
        r: T`$3600\ \text{N}$`, n: 3600, u: 'N' },
      { d: 2, t: 'Plan incliné avec frottement', e: T`Un bloc de 5 kg glisse sur un plan incliné à 30° avec $\mu=0{,}2$. Calculer son accélération ($g=9{,}81$).`,
        h: T`Sur l'axe perpendiculaire, $a_y=0$ donne $N$. Puis $f=\mu N$.`,
        s: [T`Axe $Oy$ : pas de mouvement, $N-mg\cos30°=0\Rightarrow N=mg\cos30°$.`, T`Frottement : $f=\mu mg\cos30°$, vers le haut de la pente.`, T`Axe $Ox$ : $mg\sin30°-\mu mg\cos30°=ma$.`, T`$a=g(\sin30°-\mu\cos30°)=9{,}81(0{,}5-0{,}173)\approx3{,}21\ \text{m/s}^2$.`],
        r: T`$a\approx3{,}21\ \text{m/s}^2$`, n: 3.21, u: 'm/s²' },
      { d: 2, t: 'Dans l’ascenseur', e: T`Une personne de 70 kg est sur une balance dans un ascenseur qui monte avec $a=2$ m/s². Quelle force la balance mesure-t-elle ?`,
        h: T`La balance mesure $N$. PFD vertical avec $a$ vers le haut.`,
        s: [T`Forces : $\vec P$ (bas), $\vec N$ (haut).`, T`PFD vertical (axe vers le haut) : $N-mg=ma$.`, T`$N=m(g+a)=70\times11{,}81\approx827\ \text{N}$ (plus que $mg=687$ N : on se sent plus lourd).`],
        r: T`$N\approx827\ \text{N}$`, n: 827, u: 'N' },
      { d: 3, t: 'Machine d’Atwood', e: T`Deux masses $m_1=3$ kg et $m_2=5$ kg sont reliées par un fil sur une poulie idéale. Calculer l'accélération.`,
        h: T`Applique le PFD à chaque masse séparément. La tension $T$ est la même des deux côtés.`,
        s: [T`$m_2$ descend, $m_1$ monte, même accélération $a$.`, T`Masse 1 (axe vers le haut) : $T-m_1g=m_1a$. Masse 2 (axe vers le bas) : $m_2g-T=m_2a$.`, T`On additionne pour éliminer $T$ : $(m_2-m_1)g=(m_1+m_2)a$.`, T`$a=\frac{2\times9{,}81}{8}\approx2{,}45\ \text{m/s}^2$ ; puis $T=m_1(g+a)\approx36{,}8$ N.`],
        r: T`$a\approx2{,}45\ \text{m/s}^2$, $T\approx36{,}8\ \text{N}$`, n: 2.45, u: 'm/s²' },
      { d: 3, t: 'Projectile', e: T`Un ballon est frappé depuis le sol à 20 m/s avec un angle de 45°. À quelle distance retombe-t-il ? (sans frottement, $g=9{,}81$)`,
        h: T`Départ et arrivée au sol : la formule de la portée s'applique.`,
        s: [T`Pourquoi on peut utiliser la formule : départ et retombée à la même hauteur, pas de frottement.`, T`$L=\frac{v_0^2\sin(2\alpha)}{g}=\frac{400\times\sin90°}{9{,}81}$.`, T`$L\approx40{,}8$ m. (45° donne la portée maximale car $\sin90°=1$.)`],
        r: T`$L\approx40{,}8\ \text{m}$`, n: 40.8, u: 'm' }
    ]
  },

  /* ================================================================ */
  {
    id: 'energie', matiere: 'meca', niveau: 'Lycée',
    titre: 'Travail, énergie et puissance',
    resume: 'Une autre façon de résoudre les problèmes de mécanique, souvent bien plus rapide que Newton.',
    motscles: 'énergie cinétique potentielle mécanique travail puissance conservation',
    pourquoi: T`<p>L'énergie est le langage commun de toute la physique : mécanique, électricité, thermique. Pour trouver une <b>vitesse</b> après un déplacement, la méthode énergétique évite les vecteurs et le temps. C'est souvent 3 lignes au lieu d'une page.</p>`,
    cours: T`<h4>Travail d'une force</h4><p>$W=\vec F\cdot\vec{AB}=F\,d\cos\theta$ (J). Positif si la force aide le mouvement, négatif si elle s'y oppose (frottements).</p>
<h4>Énergies</h4><ul><li>Cinétique : $E_c=\frac12mv^2$</li><li>Potentielle de pesanteur : $E_{pp}=mgz$</li><li>Potentielle élastique : $E_{pe}=\frac12kx^2$</li><li>Mécanique : $E_m=E_c+E_p$</li></ul>
<h4>Théorèmes</h4><p><b>Énergie cinétique</b> : $\Delta E_c=\sum W$. <b>Conservation</b> : si seules des forces conservatives (poids, ressort) travaillent, $E_m$ est constante. Sinon, $\Delta E_m=W_{\text{non cons.}}$ (frottements).</p>
<h4>Puissance</h4><p>$P=\frac{W}{\Delta t}=Fv$ (W). 1 kWh $=3{,}6\times10^6$ J.</p>`,
    formules: [
      { nom: 'Travail d’une force constante', f: T`$$W=F\,d\cos\theta$$`,
        quand: T`Force constante, déplacement rectiligne. $\theta$ = angle entre la force et le déplacement.`,
        pas: T`Une force perpendiculaire au mouvement (réaction normale) ne travaille pas : $\cos90°=0$.` },
      { nom: 'Théorème de l’énergie cinétique', f: T`$$\tfrac12mv_B^2-\tfrac12mv_A^2=\sum W_{A\to B}$$`,
        quand: T`On cherche une vitesse (ou une distance) entre deux points, avec des forces connues, y compris des frottements.`,
        pas: T`Pourquoi pas Newton : Newton donne l'accélération, il faut ensuite intégrer et gérer le temps. Mais ce théorème ne donne pas la <b>durée</b> du mouvement.` },
      { nom: 'Conservation de l’énergie mécanique', f: T`$$\tfrac12mv_A^2+mgz_A=\tfrac12mv_B^2+mgz_B$$`,
        quand: T`Pas de frottement (ou négligeable) : chute, toboggan, pendule, ressort. Le chemin suivi n'a aucune importance.`,
        pas: T`Avec frottements, l'énergie mécanique diminue : utilise $\Delta E_m=W_{\text{frott}}$.` },
      { nom: 'Puissance', f: T`$$P=\frac{W}{\Delta t}=F\,v$$`,
        quand: T`Moteur, montée à vitesse constante, consommation électrique.`,
        pas: T`Ne pas confondre puissance (W) et énergie (J ou kWh) : énergie = puissance × durée.` }
    ],
    methode: [
      T`Choisis le système et deux états A (départ) et B (arrivée).`,
      T`Y a-t-il des frottements ? Non → conservation de $E_m$. Oui → théorème de l'énergie cinétique.`,
      T`Écris les énergies en A et en B (choisis $z=0$ au point le plus bas).`,
      T`Résous pour l'inconnue.`
    ],
    exemple: {
      e: T`Un objet tombe sans vitesse initiale d'une hauteur de 20 m. Vitesse au sol ?`,
      s: [T`Pas de frottement → conservation de $E_m$.`, T`En haut : $E_m=mgh$. En bas : $E_m=\frac12mv^2$.`, T`$mgh=\frac12mv^2\Rightarrow v=\sqrt{2gh}=\sqrt{2\times9{,}81\times20}$.`, T`La masse disparaît : tous les objets tombent pareil sans air.`],
      r: T`$v\approx19{,}8\ \text{m/s}$ (≈ 71 km/h)`
    },
    pieges: [
      T`Oublier le carré dans $\frac12mv^2$.`,
      T`Le travail du poids est $mg(z_A-z_B)$ : positif quand on descend.`,
      T`Utiliser la conservation alors qu'il y a des frottements.`
    ],
    exos: [
      { d: 1, t: 'Énergie cinétique', e: T`Énergie cinétique (en J) d'une voiture de 1000 kg roulant à 20 m/s ?`,
        h: T`$\frac12mv^2$.`,
        s: [T`$E_c=\frac12\times1000\times400=200\,000\ \text{J}$.`],
        r: T`$2\times10^5\ \text{J}$ = 200 kJ`, n: 200000, u: 'J' },
      { d: 1, t: 'Travail', e: T`On tire une valise avec une force de 50 N inclinée de 60° par rapport au sol, sur 10 m. Travail de la force ?`,
        h: T`$W=Fd\cos\theta$.`,
        s: [T`$W=50\times10\times\cos60°=500\times0{,}5$.`, T`Seule la composante horizontale fait avancer la valise.`],
        r: T`$250\ \text{J}$`, n: 250, u: 'J' },
      { d: 2, t: 'Toboggan', e: T`Un enfant part sans vitesse du haut d'un toboggan de 5 m de haut. Vitesse en bas sans frottement ?`,
        h: T`La forme du toboggan n'a aucune importance.`,
        s: [T`Pourquoi l'énergie et pas Newton : la pente varie, Newton serait très compliqué. L'énergie ne dépend que des hauteurs.`, T`$v=\sqrt{2gh}=\sqrt{98{,}1}\approx9{,}9\ \text{m/s}$.`],
        r: T`$v\approx9{,}9\ \text{m/s}$`, n: 9.9, u: 'm/s' },
      { d: 2, t: 'Lanceur à ressort', e: T`Un ressort ($k=200$ N/m) comprimé de 10 cm lance une bille de 50 g horizontalement. Vitesse de la bille ?`,
        h: T`$\frac12kx^2=\frac12mv^2$. Attention aux unités.`,
        s: [T`Conversion : $x=0{,}1$ m, $m=0{,}05$ kg.`, T`$\frac12\times200\times0{,}01=1$ J.`, T`$\frac12\times0{,}05\,v^2=1\Rightarrow v^2=40\Rightarrow v\approx6{,}32\ \text{m/s}$.`],
        r: T`$v\approx6{,}32\ \text{m/s}$`, n: 6.32, u: 'm/s' },
      { d: 3, t: 'Freinage par énergie', e: T`Une voiture de 1000 kg roule à 25 m/s. Les freins exercent une force constante de 5000 N. Distance de freinage ?`,
        h: T`Théorème de l'énergie cinétique : $0-\frac12mv^2=-Fd$.`,
        s: [T`Frottements → pas de conservation, on utilise le théorème de l'énergie cinétique.`, T`$E_c=\frac12\times1000\times625=312\,500$ J.`, T`$d=\frac{E_c}{F}=\frac{312\,500}{5000}=62{,}5$ m.`],
        r: T`$62{,}5\ \text{m}$`, n: 62.5, u: 'm' },
      { d: 3, t: 'Puissance d’un moteur', e: T`Une voiture de 1000 kg monte une pente de 10 % (10 m de montée pour 100 m horizontaux) à 2 m/s constante. Puissance nécessaire (sans frottement) ?`,
        h: T`$\tan\alpha=0{,}1$. Force à fournir $=mg\sin\alpha$, puis $P=Fv$.`,
        s: [T`À vitesse constante, la force motrice compense la composante du poids : $F=mg\sin\alpha$.`, T`$\alpha=\arctan0{,}1\approx5{,}71°$, $\sin\alpha\approx0{,}0995$.`, T`$P=mgv\sin\alpha=1000\times9{,}81\times2\times0{,}0995\approx1952\ \text{W}$.`],
        r: T`$P\approx1{,}95\ \text{kW}$`, n: 1952, u: 'W' }
    ]
  },

  /* ================================================================ */
  {
    id: 'oscillateurs', matiere: 'meca', niveau: 'Supérieur',
    titre: 'Oscillateurs mécaniques',
    resume: 'Ressort, pendule, oscillations amorties : là où les équations différentielles prennent vie.',
    motscles: 'oscillateur harmonique ressort pendule période pulsation amortissement',
    pourquoi: T`<p>Tout ce qui vibre est un oscillateur : suspension de voiture, bâtiment pendant un séisme, quartz d'une montre, molécules. Et c'est <b>exactement</b> la même équation que le circuit LC en électricité. Comprendre l'un, c'est comprendre l'autre.</p>`,
    cours: T`<h4>Masse-ressort horizontal</h4><p>Force de rappel $F=-kx$. PFD : $m\ddot x=-kx$, soit $\ddot x+\omega_0^2x=0$ avec $\omega_0=\sqrt{k/m}$.</p><p>Solution : $x(t)=X_m\cos(\omega_0t+\varphi)$. Période $T_0=\frac{2\pi}{\omega_0}=2\pi\sqrt{\frac mk}$.</p>
<h4>Pendule simple</h4><p>$\ddot\theta+\frac gL\sin\theta=0$. Pour de petits angles, $\sin\theta\approx\theta$ : $T_0=2\pi\sqrt{\frac Lg}$.</p>
<h4>Amortissement</h4><p>Avec un frottement fluide $-h\dot x$ : $m\ddot x+h\dot x+kx=0$. Selon le discriminant : pseudo-périodique (oscille en diminuant), critique, ou apériodique (revient sans osciller).</p>`,
    formules: [
      { nom: 'Pulsation propre et période', f: T`$$\omega_0=\sqrt{\frac km}\qquad T_0=\frac{2\pi}{\omega_0}=2\pi\sqrt{\frac mk}\qquad f_0=\frac1{T_0}$$`,
        quand: T`Masse-ressort sans frottement. On met l'équation sous la forme $\ddot x+\omega_0^2x=0$ et on <b>lit</b> $\omega_0^2$.`,
        pas: T`Ne pas confondre $\omega_0$ (rad/s) et $f_0$ (Hz) : $\omega_0=2\pi f_0$.` },
      { nom: 'Pendule simple', f: T`$$T_0=2\pi\sqrt{\frac Lg}$$`,
        quand: T`Petites oscillations (angle inférieur à 15-20° environ).`,
        pas: T`Pour de grands angles, $\sin\theta\approx\theta$ n'est plus valable et la période augmente. Elle ne dépend pas de la masse.` },
      { nom: 'Vitesse maximale', f: T`$$v_{max}=\omega_0X_m$$`,
        quand: T`Vitesse au passage par l'équilibre, connaissant l'amplitude.`,
        pas: T`Se retrouve aussi par l'énergie : $\frac12kX_m^2=\frac12mv_{max}^2$. Les deux méthodes doivent donner le même résultat.` },
      { nom: 'Oscillateur amorti', f: T`$$m\ddot x+h\dot x+kx=0\ \to\ mr^2+hr+k=0$$`,
        quand: T`Présence de frottement fluide (amortisseur, air, liquide).`,
        pas: T`La pseudo-période $\frac{2\pi}{\beta}$ (avec $r=\alpha\pm i\beta$) est un peu plus grande que $T_0$.` }
    ],
    methode: [
      T`Bilan des forces, PFD projeté (ou conservation de l'énergie dérivée).`,
      T`Mets sous forme canonique $\ddot x+\omega_0^2x=0$.`,
      T`Lis $\omega_0$, écris la solution générale.`,
      T`Applique les conditions initiales (position et vitesse à $t=0$).`
    ],
    exemple: {
      e: T`Une masse de 0,5 kg est accrochée à un ressort de raideur 50 N/m. Calculer $\omega_0$ et $T_0$.`,
      s: [T`$\omega_0=\sqrt{\frac{50}{0{,}5}}=\sqrt{100}=10\ \text{rad/s}$.`, T`$T_0=\frac{2\pi}{10}\approx0{,}628$ s.`, T`Contrôle d'unités : $\sqrt{\frac{\text{N/m}}{\text{kg}}}=\sqrt{\frac{\text{kg}\cdot\text{s}^{-2}}{\text{kg}}}=\text{s}^{-1}$ ✔`],
      r: T`$\omega_0=10\ \text{rad/s}$, $T_0\approx0{,}63\ \text{s}$`
    },
    pieges: [
      T`Masse en grammes au lieu de kg.`,
      T`Calculatrice en degrés pour $\cos(\omega_0t)$.`,
      T`Croire que la période dépend de l'amplitude (faux pour l'oscillateur harmonique).`
    ],
    exos: [
      { d: 1, t: 'Période d’un ressort', e: T`Ressort $k=80$ N/m, masse 200 g. Période en secondes ?`,
        h: T`$m=0{,}2$ kg.`,
        s: [T`$\omega_0=\sqrt{80/0{,}2}=\sqrt{400}=20$ rad/s.`, T`$T_0=\frac{2\pi}{20}\approx0{,}314$ s.`],
        r: T`$T_0\approx0{,}314\ \text{s}$`, n: 0.314, u: 's' },
      { d: 1, t: 'Pendule de 1 m', e: T`Période d'un pendule simple de longueur 1 m ($g=9{,}81$) ?`,
        h: T`$2\pi\sqrt{L/g}$.`,
        s: [T`$T_0=2\pi\sqrt{1/9{,}81}\approx2\pi\times0{,}319\approx2{,}006$ s.`],
        r: T`$T_0\approx2{,}01\ \text{s}$`, n: 2.006, u: 's' },
      { d: 2, t: 'Vitesse maximale', e: T`Masse 1 kg, $k=100$ N/m, écartée de 5 cm puis lâchée sans vitesse. Vitesse maximale ?`,
        h: T`$X_m=0{,}05$ m et $v_{max}=\omega_0X_m$.`,
        s: [T`$\omega_0=10$ rad/s.`, T`$v_{max}=10\times0{,}05=0{,}5$ m/s.`, T`Vérif par l'énergie : $\frac12\times100\times0{,}0025=0{,}125$ J $=\frac12\times1\times0{,}25$ ✔`],
        r: T`$0{,}5\ \text{m/s}$`, n: 0.5, u: 'm/s' },
      { d: 2, t: 'Doubler la période', e: T`Par combien faut-il multiplier la longueur d'un pendule pour doubler sa période ?`,
        h: T`$T\propto\sqrt L$.`,
        s: [T`$T=2\pi\sqrt{L/g}$ : $T$ est proportionnelle à $\sqrt L$.`, T`Pour $T\times2$, il faut $\sqrt L\times2$, donc $L\times4$.`],
        r: T`$\times4$`, n: 4 },
      { d: 3, t: 'Équation par l’énergie', e: T`Retrouver l'équation du mouvement du ressort à partir de la conservation de $E_m=\frac12m\dot x^2+\frac12kx^2$.`,
        h: T`$E_m$ est constante, donc sa dérivée par rapport au temps est nulle. Dérivée de $\dot x^2$ : $2\dot x\ddot x$.`,
        s: [T`$\frac{dE_m}{dt}=0$.`, T`$\frac{d}{dt}\left(\frac12m\dot x^2\right)=m\dot x\ddot x$ (composée $u^2$) et $\frac{d}{dt}\left(\frac12kx^2\right)=kx\dot x$.`, T`$\dot x(m\ddot x+kx)=0$. Pendant le mouvement $\dot x\neq0$, donc $m\ddot x+kx=0$.`, T`Intérêt : méthode rapide quand le bilan des forces est compliqué.`],
        r: T`$m\ddot x+kx=0$, soit $\ddot x+\frac km x=0$` },
      { d: 3, t: 'Oscillateur amorti', e: T`Un oscillateur amorti obéit à $\ddot x+2\dot x+10x=0$. Quel régime ? Calculer la pseudo-période.`,
        h: T`Équation caractéristique $r^2+2r+10=0$.`,
        s: [T`$\Delta=4-40=-36<0$ : régime <b>pseudo-périodique</b>.`, T`$r=-1\pm3i$, donc $x=e^{-t}(A\cos3t+B\sin3t)$.`, T`Pseudo-pulsation $3$ rad/s → pseudo-période $\frac{2\pi}3\approx2{,}09$ s (contre $T_0=\frac{2\pi}{\sqrt{10}}\approx1{,}99$ s sans frottement).`],
        r: T`Pseudo-périodique, $T\approx2{,}09\ \text{s}$`, n: 2.094, u: 's' }
    ]
  }

  ]);
})();

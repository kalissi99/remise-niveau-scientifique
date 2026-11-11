/* PHYSIQUE — TERMINALE SPÉCIALITÉ (compléments) */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  {
    id: 'champ-uniforme', matiere: 'physique', niveau: 'Terminale', domaine: 'Mécanique',
    titre: 'Mouvement dans un champ uniforme',
    resume: 'Projectile dans le champ de pesanteur, particule chargée dans un champ électrique, accélérateur de particules.',
    motscles: 'projectile parabole équations horaires champ électrique particule chargée accélérateur',
    pourquoi: T`<p>Un ballon, un jet d'eau, un obus : trajectoire parabolique. Un électron dans un tube cathodique, un ion dans un spectromètre de masse ou un accélérateur médical : même méthode, avec la force électrique. C'est l'application directe de la deuxième loi de Newton en Terminale.</p>`,
    cours: T`<h4>Champ de pesanteur</h4><p>Seul le poids agit : $\vec a=\vec g$. Avec un lancer de vitesse $v_0$ selon un angle $\alpha$ depuis la hauteur $h$ :</p>
$$x(t)=v_0\cos\alpha\,t\qquad y(t)=-\tfrac12gt^2+v_0\sin\alpha\,t+h$$
<p>En éliminant $t$ : trajectoire parabolique $y(x)=-\frac{g}{2v_0^2\cos^2\alpha}x^2+\tan\alpha\,x+h$.</p>
<h4>Champ électrique uniforme</h4><p>$\vec a=\frac{q\vec E}{m}$ (le poids est négligeable devant la force électrique pour une particule). Même structure d'équations que pour le projectile.</p>
<h4>Accélération sous une tension</h4><p>Théorème de l'énergie cinétique : $\frac12mv^2=|q|U$ (départ au repos).</p>`,
    formules: [
      { nom: 'Équations horaires du projectile', f: T`$$x=v_0\cos\alpha\,t\qquad y=-\tfrac12gt^2+v_0\sin\alpha\,t+h$$`,
        quand: T`Position à un instant, durée de vol, portée, hauteur maximale.`,
        pas: T`Ne pas utiliser la formule de portée $\frac{v_0^2\sin2\alpha}{g}$ si on ne part pas du sol.` },
      { nom: 'Flèche (hauteur maximale)', f: T`$$h_{max}-h=\frac{(v_0\sin\alpha)^2}{2g}$$`,
        quand: T`Hauteur maximale (au sommet, $v_y=0$).`,
        pas: T`Au sommet, la vitesse n'est pas nulle : seule sa composante verticale l'est.` },
      { nom: 'Accélération par une tension', f: T`$$\tfrac12mv^2=|q|\,U\Rightarrow v=\sqrt{\frac{2|q|U}{m}}$$`,
        quand: T`Particule chargée partant du repos et accélérée par une tension.`,
        pas: T`Plus rapide que les équations horaires : inutile de connaître la durée.` },
      { nom: 'Particule dans un champ', f: T`$$\vec a=\frac{q\vec E}{m}$$`,
        quand: T`Déviation d'un faisceau d'électrons ou d'ions.`,
        pas: T`Électron : $q=-e$, l'accélération est opposée au champ.` }
    ],
    methode: [
      T`Système, référentiel, bilan des forces.`,
      T`Deuxième loi de Newton : $\vec a$.`,
      T`Intègre deux fois avec les conditions initiales (projette sur les axes).`,
      T`Utilise la condition demandée ($y=0$ au sol, $v_y=0$ au sommet).`
    ],
    exemple: {
      e: T`Un électron part du repos et est accéléré sous 1000 V. Vitesse finale ?`,
      s: [T`$\frac12m_ev^2=eU$.`, T`$v=\sqrt{\frac{2\times1{,}6\times10^{-19}\times1000}{9{,}11\times10^{-31}}}$.`],
      r: T`$v\approx1{,}87\times10^7$ m/s`
    },
    pieges: [
      T`Oublier la hauteur initiale $h$.`,
      T`Mélanger $\cos$ et $\sin$ dans les composantes.`,
      T`Sens de la force électrique sur un électron.`
    ],
    exos: [
      { d: 1, t: 'Durée de chute', e: T`Une bille quitte une table de 1,25 m de haut avec une vitesse horizontale. Durée de chute ?`,
        h: T`$\frac12gt^2=1{,}25$.`,
        s: [T`La vitesse horizontale n'influe pas sur la chute verticale.`, T`$t=\sqrt{\frac{2\times1{,}25}{9{,}81}}\approx0{,}505$ s.`],
        r: T`$\approx0{,}505$ s`, n: 0.505, u: 's' },
      { d: 2, t: 'Distance horizontale', e: T`Même table, $v_0=10$ m/s horizontale. Distance au pied de la table ?`,
        h: T`$x=v_0t$.`,
        s: [T`$x=10\times0{,}505\approx5{,}05$ m.`],
        r: T`$\approx5{,}05$ m`, n: 5.05, u: 'm' },
      { d: 2, t: 'Flèche', e: T`Un ballon est lancé depuis le sol à 20 m/s sous 30°. Hauteur maximale ?`,
        h: T`$\frac{(v_0\sin\alpha)^2}{2g}$.`,
        s: [T`$v_0\sin30°=10$ m/s.`, T`$h=\frac{100}{19{,}62}\approx5{,}10$ m.`],
        r: T`$\approx5{,}10$ m`, n: 5.10, u: 'm' },
      { d: 3, t: 'Proton accéléré', e: T`Un proton ($1{,}67\times10^{-27}$ kg) part du repos et est accéléré sous 2000 V. Vitesse ?`,
        h: T`$v=\sqrt{2eU/m}$.`,
        s: [T`$v=\sqrt{\frac{2\times1{,}6\times10^{-19}\times2000}{1{,}67\times10^{-27}}}\approx6{,}19\times10^5$ m/s.`],
        r: T`$\approx6{,}19\times10^5$ m/s`, n: 6.19e5, u: 'm/s' },
      { d: 3, t: 'Accélération d’un électron', e: T`Accélération d'un électron dans un champ de $10^4$ V/m ?`,
        h: T`$a=\frac{eE}{m}$.`,
        s: [T`$a=\frac{1{,}6\times10^{-19}\times10^4}{9{,}11\times10^{-31}}\approx1{,}76\times10^{15}$ m/s².`, T`Énorme devant $g$ : le poids est bien négligeable.`],
        r: T`$\approx1{,}76\times10^{15}$ m/s²`, n: 1.76e15, u: 'm/s²' }
    ]
  },

  {
    id: 'kepler-satellites', matiere: 'physique', niveau: 'Terminale', domaine: 'Mécanique',
    titre: 'Mouvement des satellites et des planètes',
    resume: 'Mouvement circulaire uniforme, vitesse orbitale, période, lois de Kepler, satellite géostationnaire.',
    motscles: 'satellite orbite kepler période géostationnaire circulaire centripète gravitation',
    pourquoi: T`<p>GPS, satellites de télécommunication, météo, Starlink : leur altitude et leur vitesse se calculent avec ce chapitre. On y découvre aussi qu'on peut « peser » le Soleil à partir de la durée d'une année.</p>`,
    cours: T`<h4>Mouvement circulaire uniforme</h4><p>Vitesse constante en valeur mais pas en direction : il y a une accélération <b>centripète</b> $a=\frac{v^2}{r}$, dirigée vers le centre.</p>
<h4>Satellite</h4><p>Seule la force gravitationnelle agit : $G\frac{Mm}{r^2}=m\frac{v^2}r$, donc $v=\sqrt{\frac{GM}{r}}$ (indépendant de la masse du satellite). Période $T=\frac{2\pi r}v$.</p>
<h4>Lois de Kepler</h4><ol><li>Orbites elliptiques, l'astre attracteur à un foyer.</li><li>Loi des aires : plus rapide près de l'astre.</li><li>$\frac{T^2}{r^3}=\frac{4\pi^2}{GM}$, identique pour tous les satellites d'un même astre.</li></ol>
<h4>Géostationnaire</h4><p>Orbite équatoriale de période égale à la rotation de la Terre (86 164 s) : le satellite paraît immobile.</p>`,
    formules: [
      { nom: 'Vitesse orbitale', f: T`$$v=\sqrt{\frac{GM}{r}}$$`,
        quand: T`Orbite circulaire, $r$ = distance au <b>centre</b> de l'astre.`,
        pas: T`$r=R+h$ : ne pas utiliser l'altitude seule.` },
      { nom: 'Troisième loi de Kepler', f: T`$$\frac{T^2}{r^3}=\frac{4\pi^2}{GM}$$`,
        quand: T`Lien période-rayon ; trouver la masse de l'astre central.`,
        pas: T`Ne compare que des satellites du <b>même</b> astre.` },
      { nom: 'Accélération centripète', f: T`$$a=\frac{v^2}{r}$$`,
        quand: T`Tout mouvement circulaire uniforme (virage, manège, orbite).`,
        pas: T`Le mouvement est accéléré même si la vitesse est constante en valeur.` }
    ],
    methode: [
      T`Référentiel géocentrique (ou héliocentrique).`,
      T`Deuxième loi de Newton avec la force gravitationnelle, repère de Frenet.`,
      T`Déduis $v$, puis $T$.`,
      T`Vérifie l'ordre de grandeur (ISS : 7,7 km/s, environ 90 min).`
    ],
    exemple: {
      e: T`ISS à 400 km d'altitude ($r=6{,}77\times10^6$ m, $GM_T=3{,}986\times10^{14}$ SI). Vitesse et période.`,
      s: [T`$v=\sqrt{\frac{3{,}986\times10^{14}}{6{,}77\times10^6}}\approx7{,}67\times10^3$ m/s.`, T`$T=\frac{2\pi\times6{,}77\times10^6}{7673}\approx5544$ s $\approx92$ min.`],
      r: T`$v\approx7{,}7$ km/s, $T\approx92$ min`
    },
    pieges: [
      T`Utiliser l'altitude au lieu du rayon de l'orbite.`,
      T`Croire que la vitesse dépend de la masse du satellite.`,
      T`Période en secondes contre heures.`
    ],
    exos: [
      { d: 1, t: 'Virage', e: T`Voiture à 20 m/s dans un virage de rayon 50 m. Accélération centripète ?`,
        h: T`$v^2/r$.`,
        s: [T`$a=\frac{400}{50}=8$ m/s².`],
        r: T`$8$ m/s²`, n: 8, u: 'm/s²' },
      { d: 2, t: 'Vitesse orbitale', e: T`Vitesse d'un satellite à $r=7{,}0\times10^6$ m ($GM_T=3{,}986\times10^{14}$).`,
        h: T`$\sqrt{GM/r}$.`,
        s: [T`$v=\sqrt{5{,}69\times10^7}\approx7546$ m/s.`],
        r: T`$\approx7{,}55$ km/s`, n: 7546, u: 'm/s' },
      { d: 3, t: 'Altitude géostationnaire', e: T`Altitude (en km) d'un satellite géostationnaire ($T=86\,164$ s, $R_T=6370$ km).`,
        h: T`$r^3=\frac{GMT^2}{4\pi^2}$.`,
        s: [T`$r^3=\frac{3{,}986\times10^{14}\times(86\,164)^2}{4\pi^2}\approx7{,}50\times10^{22}$ m³.`, T`$r\approx4{,}22\times10^7$ m.`, T`Altitude $\approx42\,164-6370\approx35\,800$ km.`],
        r: T`$\approx35\,800$ km`, n: 35794, tol: 0.02, u: 'km' },
      { d: 3, t: 'Peser le Soleil', e: T`Avec $T=3{,}156\times10^7$ s et $r=1{,}496\times10^{11}$ m pour la Terre, calculer la masse du Soleil.`,
        h: T`$M=\frac{4\pi^2r^3}{GT^2}$.`,
        s: [T`$4\pi^2r^3\approx1{,}32\times10^{35}$ ; $GT^2\approx6{,}64\times10^4$.`, T`$M\approx1{,}99\times10^{30}$ kg.`],
        r: T`$\approx2{,}0\times10^{30}$ kg`, n: 1.99e30, u: 'kg' }
    ]
  },

  {
    id: 'fluides', matiere: 'physique', niveau: 'Terminale', domaine: 'Mécanique',
    titre: 'Mécanique des fluides',
    resume: 'Pression, loi fondamentale de la statique, poussée d’Archimède, débit, équation de Bernoulli.',
    motscles: 'pression archimède débit bernoulli venturi statique des fluides',
    pourquoi: T`<p>Barrages, circuits hydrauliques, freins de voiture, avions, pompes, réseau d'eau d'une ville : la mécanique des fluides est au cœur du génie civil, mécanique et des procédés.</p>`,
    cours: T`<h4>Pression</h4><p>$P=\frac FS$ en pascals (Pa). 1 bar $=10^5$ Pa, pression atmosphérique $\approx1{,}013\times10^5$ Pa.</p>
<h4>Statique</h4><p>Dans un liquide au repos : $P_B-P_A=\rho g(z_A-z_B)$. La pression augmente d'environ 1 bar tous les 10 m sous l'eau.</p>
<h4>Archimède</h4><p>Un corps immergé subit une force verticale vers le haut égale au poids du fluide déplacé : $\Pi=\rho_{fluide}V_{immergé}g$.</p>
<h4>Écoulement</h4><p>Débit volumique $D_v=Sv$, conservé pour un fluide incompressible : $S_1v_1=S_2v_2$. Bernoulli (fluide parfait) : $P+\frac12\rho v^2+\rho gz=$ constante le long d'une ligne de courant.</p>`,
    formules: [
      { nom: 'Loi fondamentale de la statique', f: T`$$P_B-P_A=\rho\,g\,(z_A-z_B)$$`,
        quand: T`Pression à une profondeur, manomètres, barrages.`,
        pas: T`Pression totale = pression atmosphérique + $\rho gh$ si la surface est à l'air libre.` },
      { nom: 'Poussée d’Archimède', f: T`$$\Pi=\rho_{fluide}\,V_{immergé}\,g$$`,
        quand: T`Flottaison, montgolfière, densimètre.`,
        pas: T`C'est la masse volumique du <b>fluide</b>, pas de l'objet, et seulement le volume immergé.` },
      { nom: 'Conservation du débit', f: T`$$S_1v_1=S_2v_2$$`,
        quand: T`Changement de section d'un tuyau (fluide incompressible).`,
        pas: T`$S$ dépend du carré du diamètre : diamètre divisé par 2 → vitesse × 4.` },
      { nom: 'Relation de Bernoulli', f: T`$$P+\tfrac12\rho v^2+\rho gz=\text{cte}$$`,
        quand: T`Écoulement permanent d'un fluide parfait incompressible (Venturi, Torricelli).`,
        pas: T`Ne s'applique pas avec des pertes importantes (frottements visqueux, pompe).` }
    ],
    methode: [
      T`Fluide au repos (statique) ou en mouvement ?`,
      T`Statique : loi fondamentale, Archimède.`,
      T`Mouvement : débit, puis Bernoulli entre deux points.`,
      T`Unités SI (Pa, m³, kg/m³).`
    ],
    exemple: {
      e: T`Pression ressentie par un plongeur à 10 m de profondeur.`,
      s: [T`$P=P_{atm}+\rho gh=1{,}013\times10^5+1000\times9{,}81\times10$.`, T`$P\approx1{,}99\times10^5$ Pa, environ 2 bar.`],
      r: T`$\approx2$ bar`
    },
    pieges: [
      T`Oublier la pression atmosphérique.`,
      T`Diamètre au lieu de section dans le débit.`,
      T`Archimède avec la masse volumique de l'objet.`
    ],
    exos: [
      { d: 1, t: 'Pression sous les pieds', e: T`Une personne de 50 kg se tient sur 0,02 m². Pression exercée ?`,
        h: T`$P=\frac{mg}S$.`,
        s: [T`$P=\frac{490{,}5}{0{,}02}\approx24\,525$ Pa.`],
        r: T`$\approx2{,}45\times10^4$ Pa`, n: 24525, u: 'Pa' },
      { d: 2, t: 'Pression à 20 m', e: T`Pression totale à 20 m sous l'eau ?`,
        h: T`$P_{atm}+\rho gh$.`,
        s: [T`$1{,}013\times10^5+1{,}962\times10^5\approx2{,}98\times10^5$ Pa.`],
        r: T`$\approx2{,}98\times10^5$ Pa`, n: 2.975e5, u: 'Pa' },
      { d: 2, t: 'Rétrécissement', e: T`De l'eau circule à 1 m/s dans un tuyau de 2 cm de diamètre qui se rétrécit à 1 cm. Nouvelle vitesse ?`,
        h: T`Section divisée par 4.`,
        s: [T`$S_2=\frac{S_1}4$ donc $v_2=4v_1=4$ m/s.`],
        r: T`$4$ m/s`, n: 4, u: 'm/s' },
      { d: 3, t: 'Iceberg', e: T`Quelle fraction du volume d'un iceberg ($\rho=917$ kg/m³) est immergée dans l'eau de mer ($\rho=1025$) ?`,
        h: T`Équilibre : poids = poussée.`,
        s: [T`$\rho_gVg=\rho_{mer}V_{imm}g$.`, T`$\frac{V_{imm}}V=\frac{917}{1025}\approx0{,}895$.`],
        r: T`$\approx89{,}5\,\%$`, n: 0.895 },
      { d: 3, t: 'Torricelli', e: T`Vitesse de sortie de l'eau par un trou situé 5 m sous la surface d'un réservoir ouvert ?`,
        h: T`Bernoulli entre la surface (vitesse ≈ 0) et le trou, même pression.`,
        s: [T`$\rho gh=\frac12\rho v^2\Rightarrow v=\sqrt{2gh}$.`, T`$v=\sqrt{98{,}1}\approx9{,}9$ m/s.`],
        r: T`$\approx9{,}9$ m/s`, n: 9.9, u: 'm/s' }
    ]
  },

  {
    id: 'thermodynamique', matiere: 'physique', niveau: 'Terminale', domaine: 'Thermodynamique',
    titre: 'Thermodynamique : énergie et transferts thermiques',
    resume: 'Premier principe, capacité thermique, conduction et résistance thermique, loi de Newton, gaz parfait.',
    motscles: 'énergie interne premier principe capacité thermique flux résistance thermique gaz parfait refroidissement',
    pourquoi: T`<p>Isolation des bâtiments, refroidissement des processeurs et des batteries, moteurs, climatisation : la thermodynamique est l'une des bases de l'ingénieur. Elle explique aussi pourquoi un serveur informatique consomme autant pour se refroidir que pour calculer.</p>`,
    cours: T`<h4>Premier principe</h4><p>Pour un système fermé au repos : $\Delta U=W+Q$ (travail et chaleur reçus). Pour un solide ou un liquide : $\Delta U=mc\Delta T$ ($c_{eau}=4180$ J·kg⁻¹·K⁻¹).</p>
<h4>Transferts thermiques</h4><p>Conduction, convection, rayonnement. Flux $\Phi=\frac Q{\Delta t}$ (W). À travers une paroi : $\Phi=\frac{\Delta T}{R_{th}}$, $R_{th}=\frac e{\lambda S}$.</p>
<h4>Loi de Newton</h4><p>Un objet échangeant avec un milieu à $T_{ext}$ : $\frac{dT}{dt}=-k(T-T_{ext})$, d'où $T=T_{ext}+(T_0-T_{ext})e^{-kt}$.</p>
<h4>Gaz parfait</h4><p>$PV=nRT$, $R=8{,}314$ J·mol⁻¹·K⁻¹, $T$ en kelvins ($T=\theta+273{,}15$).</p>`,
    formules: [
      { nom: 'Énergie et température', f: T`$$Q=m\,c\,\Delta T$$`,
        quand: T`Chauffer ou refroidir un corps sans changement d'état.`,
        pas: T`Avec un changement d'état, ajoute $mL$ ; et $\Delta T$ en K ou °C (même écart).` },
      { nom: 'Résistance thermique', f: T`$$\Phi=\frac{\Delta T}{R_{th}}\qquad R_{th}=\frac{e}{\lambda S}$$`,
        quand: T`Pertes à travers un mur, une vitre, un isolant.`,
        pas: T`Parois en série : les résistances s'ajoutent (comme en électricité).` },
      { nom: 'Gaz parfait', f: T`$$PV=nRT$$`,
        quand: T`Gaz à basse pression (air, pneus, ballons).`,
        pas: T`$T$ en kelvins et $V$ en m³, sinon le résultat est faux.` },
      { nom: 'Loi de Newton', f: T`$$T(t)=T_{ext}+(T_0-T_{ext})e^{-kt}$$`,
        quand: T`Refroidissement ou réchauffement d'un objet dans l'air.`,
        pas: T`C'est l'écart à la température extérieure qui décroît exponentiellement, pas $T$ elle-même.` }
    ],
    methode: [
      T`Définis le système et les échanges (W, Q).`,
      T`Écris le bilan d'énergie.`,
      T`Convertis les températures si besoin (K pour les gaz).`,
      T`Vérifie le signe : énergie reçue positive.`
    ],
    exemple: {
      e: T`Énergie pour chauffer 1 L d'eau de 20 à 100 °C ; durée avec une bouilloire de 2000 W.`,
      s: [T`$Q=1\times4180\times80=334\,400$ J.`, T`$\Delta t=\frac Q P=\frac{334\,400}{2000}\approx167$ s (sans pertes).`],
      r: T`$Q\approx334$ kJ, environ 2 min 47 s`
    },
    pieges: [
      T`Températures en °C dans $PV=nRT$.`,
      T`Oublier les pertes dans un rendement.`,
      T`Confondre flux (W) et énergie (J).`
    ],
    exos: [
      { d: 1, t: 'Chauffer de l’eau', e: T`Énergie pour élever 2 kg d'eau de 10 °C ?`,
        h: T`$mc\Delta T$.`,
        s: [T`$Q=2\times4180\times10=83\,600$ J.`],
        r: T`$83\,600$ J`, n: 83600, u: 'J' },
      { d: 2, t: 'Pertes par un mur', e: T`Mur de 20 cm, $\lambda=0{,}8$ W·m⁻¹·K⁻¹, 10 m², écart de 15 °C. Flux thermique ?`,
        h: T`$R_{th}=\frac{0{,}2}{0{,}8\times10}$.`,
        s: [T`$R_{th}=0{,}025$ K/W.`, T`$\Phi=\frac{15}{0{,}025}=600$ W.`],
        r: T`$600$ W`, n: 600, u: 'W' },
      { d: 2, t: 'Gaz parfait', e: T`1 mol de gaz à 300 K dans 24,8 L. Pression ?`,
        h: T`$V=0{,}0248$ m³.`,
        s: [T`$P=\frac{8{,}314\times300}{0{,}0248}\approx1{,}01\times10^5$ Pa.`],
        r: T`$\approx1{,}0\times10^5$ Pa`, n: 1.006e5, u: 'Pa' },
      { d: 3, t: 'Refroidissement', e: T`Un plat passe de 80 °C à 50 °C en 10 min dans une pièce à 20 °C. Au bout de combien de temps atteint-il 30 °C ?`,
        h: T`Écart 60 → 30 en 10 min : demi-vie de l'écart = 10 min.`,
        s: [T`$T=20+60e^{-kt}$ ; $60e^{-10k}=30\Rightarrow k=\frac{\ln2}{10}$.`, T`$60e^{-kt}=10\Rightarrow t=\frac{\ln6}{k}=\frac{10\ln6}{\ln2}\approx25{,}8$ min.`],
        r: T`$\approx25{,}8$ min`, n: 25.85, u: 'min' },
      { d: 3, t: 'Mélange', e: T`200 g d'eau à 80 °C sont mélangés avec 300 g à 20 °C (sans pertes). Température finale ?`,
        h: T`Énergie cédée = énergie reçue.`,
        s: [T`$200(80-T)=300(T-20)$.`, T`$16\,000+6000=500T\Rightarrow T=44$ °C.`],
        r: T`$44$ °C`, n: 44, u: '°C' }
    ]
  },

  {
    id: 'ondes-tle', matiere: 'physique', niveau: 'Terminale', domaine: 'Ondes et signaux',
    titre: 'Diffraction, interférences et effet Doppler',
    resume: 'Diffraction par une fente, interférences et fentes d’Young, effet Doppler et ses applications.',
    motscles: 'diffraction interférences young interfrange doppler écart angulaire',
    pourquoi: T`<p>La diffraction limite la finesse des gravures des processeurs et la résolution des télescopes. Les interférences servent à mesurer des distances au nanomètre et sont à la base de la fibre optique et des antennes 5G. L'effet Doppler, c'est le radar routier, l'échographie cardiaque et la mesure de vitesse des étoiles.</p>`,
    cours: T`<h4>Diffraction</h4><p>Une onde qui traverse une ouverture de taille $a$ comparable à $\lambda$ s'étale. Écart angulaire $\theta=\frac\lambda a$. Sur un écran à distance $D$ : largeur de la tache centrale $L=\frac{2\lambda D}a$.</p>
<h4>Interférences</h4><p>Deux ondes cohérentes se superposent. Différence de chemin $\delta$ : constructives si $\delta=k\lambda$, destructives si $\delta=(k+\frac12)\lambda$. Fentes d'Young : interfrange $i=\frac{\lambda D}b$.</p>
<h4>Effet Doppler</h4><p>Source qui s'approche : fréquence perçue plus grande. $f_R=f_E\frac{v}{v-v_S}$ (source approchant à $v_S$, récepteur fixe). Pour $v_S\ll v$ : $\frac{\Delta f}f\approx\frac{v_S}v$.</p>`,
    formules: [
      { nom: 'Diffraction', f: T`$$\theta=\frac\lambda a\qquad L=\frac{2\lambda D}a$$`,
        quand: T`Fente ou fil, écran lointain (petits angles).`,
        pas: T`Plus la fente est fine, plus la tache est <b>large</b>.` },
      { nom: 'Interfrange', f: T`$$i=\frac{\lambda D}{b}$$`,
        quand: T`Fentes d'Young séparées de $b$.`,
        pas: T`$b$ = distance entre les fentes, pas leur largeur.` },
      { nom: 'Effet Doppler', f: T`$$f_R=f_E\,\frac{v}{v-v_S}\ \text{(approche)}\qquad f_R=f_E\,\frac{v}{v+v_S}\ \text{(éloignement)}$$`,
        quand: T`Source mobile, récepteur immobile.`,
        pas: T`Vérifie le sens : à l'approche, le son est plus aigu ($f_R>f_E$).` }
    ],
    methode: [
      T`Identifie le phénomène (une fente : diffraction ; deux : interférences ; mouvement : Doppler).`,
      T`Convertis nm, µm, mm en m.`,
      T`Applique la formule, puis vérifie l'ordre de grandeur.`,
      T`Pour Doppler, vérifie le sens de variation de la fréquence.`
    ],
    exemple: {
      e: T`Laser de 633 nm, fente de 0,1 mm, écran à 2 m. Largeur de la tache centrale ?`,
      s: [T`$L=\frac{2\times633\times10^{-9}\times2}{10^{-4}}\approx2{,}53\times10^{-2}$ m.`],
      r: T`$L\approx2{,}5$ cm`
    },
    pieges: [
      T`Conversions d'unités (µm, nm).`,
      T`Confondre largeur des fentes et écart entre fentes.`,
      T`Mauvais signe dans la formule de Doppler.`
    ],
    exos: [
      { d: 1, t: 'Écart angulaire', e: T`$\lambda=500$ nm, $a=50$ µm. Écart angulaire ?`,
        h: T`$\theta=\lambda/a$.`,
        s: [T`$\theta=\frac{5\times10^{-7}}{5\times10^{-5}}=0{,}01$ rad.`],
        r: T`$0{,}01$ rad`, n: 0.01, u: 'rad' },
      { d: 2, t: 'Interfrange', e: T`$\lambda=650$ nm, $D=1{,}5$ m, $b=0{,}5$ mm. Interfrange en m ?`,
        h: T`$i=\lambda D/b$.`,
        s: [T`$i=\frac{6{,}5\times10^{-7}\times1{,}5}{5\times10^{-4}}=1{,}95\times10^{-3}$ m.`],
        r: T`$1{,}95$ mm`, n: 0.00195, u: 'm' },
      { d: 2, t: 'Mesurer une longueur d’onde', e: T`Tache centrale de 3 cm, fente de 80 µm, écran à 2 m. Longueur d'onde en nm ?`,
        h: T`$\lambda=\frac{La}{2D}$.`,
        s: [T`$\lambda=\frac{0{,}03\times8\times10^{-5}}{4}=6\times10^{-7}$ m.`],
        r: T`$600$ nm`, n: 600, u: 'nm' },
      { d: 3, t: 'Sirène d’ambulance', e: T`Une ambulance émet à 1000 Hz et s'approche à 30 m/s ($v_{son}=340$ m/s). Fréquence perçue ?`,
        h: T`Approche : $\frac{v}{v-v_S}$.`,
        s: [T`$f_R=1000\times\frac{340}{310}\approx1097$ Hz.`, T`Après le passage : $1000\times\frac{340}{370}\approx919$ Hz.`],
        r: T`$\approx1097$ Hz`, n: 1097, u: 'Hz' }
    ]
  },

  {
    id: 'radioactivite', matiere: 'physique', niveau: 'Terminale', domaine: 'Physique nucléaire',
    titre: 'Radioactivité et décroissance',
    resume: 'Désintégrations α, β⁻, β⁺, γ ; loi de décroissance, demi-vie, activité, datation au carbone 14.',
    motscles: 'radioactivité désintégration demi-vie activité becquerel carbone 14 datation',
    pourquoi: T`<p>Médecine nucléaire (scintigraphie, radiothérapie), centrales nucléaires, datation archéologique, sûreté industrielle : la loi de décroissance est une application directe des équations différentielles et de l'exponentielle.</p>`,
    cours: T`<h4>Désintégrations</h4><p>α : émission d'un noyau d'hélium $^4_2\mathrm{He}$. β⁻ : un neutron devient proton, émission d'un électron. β⁺ : un proton devient neutron, émission d'un positon. γ : désexcitation (photon). Conservation du nombre de masse $A$ et du numéro atomique $Z$.</p>
<h4>Loi de décroissance</h4><p>$\frac{dN}{dt}=-\lambda N$, donc $N(t)=N_0e^{-\lambda t}$. Demi-vie $t_{1/2}=\frac{\ln2}{\lambda}$.</p>
<h4>Activité</h4><p>$A=\lambda N$ en becquerels (désintégrations par seconde). Elle suit la même loi : $A(t)=A_0e^{-\lambda t}$.</p>`,
    formules: [
      { nom: 'Loi de décroissance', f: T`$$N(t)=N_0\,e^{-\lambda t}$$`,
        quand: T`Nombre de noyaux restants, datation.`,
        pas: T`$\lambda$ et $t$ doivent être dans la même unité de temps.` },
      { nom: 'Demi-vie', f: T`$$t_{1/2}=\frac{\ln2}{\lambda}$$`,
        quand: T`Passer de la constante radioactive à la demi-vie et inversement.`,
        pas: T`Après $n$ demi-vies il reste $\frac1{2^n}$, pas $\frac1{2n}$.` },
      { nom: 'Activité', f: T`$$A=\lambda N$$`,
        quand: T`Mesure d'un compteur, dose, échantillon.`,
        pas: T`$\lambda$ en s⁻¹ pour obtenir des becquerels.` }
    ],
    methode: [
      T`Écris l'équation de désintégration en conservant $A$ et $Z$.`,
      T`Calcule $\lambda$ à partir de la demi-vie.`,
      T`Pour une datation : isole $e^{-\lambda t}$, puis $\ln$.`,
      T`Contrôle avec le nombre de demi-vies écoulées.`
    ],
    exemple: {
      e: T`Un échantillon ancien n'a plus que 25 % de son carbone 14 ($t_{1/2}=5730$ ans). Âge ?`,
      s: [T`$25\,\%=\frac14=\frac1{2^2}$ : deux demi-vies.`, T`Âge $=2\times5730=11\,460$ ans.`],
      r: T`$11\,460$ ans`
    },
    pieges: [
      T`Unités de temps incohérentes.`,
      T`Mauvaise conservation de $Z$ (l'électron compte $-1$).`,
      T`Diviser par $2n$ au lieu de $2^n$.`
    ],
    exos: [
      { d: 1, t: 'Trois demi-vies', e: T`Pourcentage restant après 3 demi-vies ?`,
        h: T`$\frac1{2^3}$.`,
        s: [T`$\frac18=12{,}5\,\%$.`],
        r: T`$12{,}5\,\%$`, n: 12.5, u: '%' },
      { d: 2, t: 'Constante radioactive', e: T`Constante radioactive du carbone 14 en an⁻¹ ?`,
        h: T`$\lambda=\ln2/t_{1/2}$.`,
        s: [T`$\lambda=\frac{0{,}693}{5730}\approx1{,}21\times10^{-4}$ an⁻¹.`],
        r: T`$\approx1{,}21\times10^{-4}$ an⁻¹`, n: 1.21e-4 },
      { d: 2, t: 'Équation β⁻', e: T`Écrire la désintégration β⁻ du carbone 14 ($Z=6$).`,
        h: T`$Z$ augmente de 1, $A$ inchangé.`,
        s: [T`$^{14}_6\mathrm C\longrightarrow{}^{14}_7\mathrm N+{}^{\ 0}_{-1}e$ (+ antineutrino).`, T`Conservation : $14=14+0$ et $6=7-1$ ✔.`],
        r: T`Il se forme de l'azote 14` },
      { d: 3, t: 'Datation', e: T`Un bois a une activité égale à 60 % de celle d'un bois récent. Âge ?`,
        h: T`$e^{-\lambda t}=0{,}6$.`,
        s: [T`$t=\frac{\ln(1/0{,}6)}{\lambda}=\frac{0{,}511}{1{,}21\times10^{-4}}\approx4220$ ans.`],
        r: T`$\approx4220$ ans`, n: 4223, u: 'ans' },
      { d: 3, t: 'Activité du radium', e: T`Activité de 1 g de radium 226 ($t_{1/2}=1600$ ans, $1$ an $=3{,}156\times10^7$ s) ?`,
        h: T`$N=\frac{6{,}02\times10^{23}}{226}$ et $\lambda$ en s⁻¹.`,
        s: [T`$N\approx2{,}66\times10^{21}$.`, T`$\lambda=\frac{0{,}693}{1600\times3{,}156\times10^7}\approx1{,}37\times10^{-11}$ s⁻¹.`, T`$A=\lambda N\approx3{,}66\times10^{10}$ Bq (c'est la définition historique du curie).`],
        r: T`$\approx3{,}7\times10^{10}$ Bq`, n: 3.66e10, tol: 0.03, u: 'Bq' }
    ]
  }

  ]);
})();

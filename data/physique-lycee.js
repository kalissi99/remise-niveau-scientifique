/* PHYSIQUE — SECONDE ET PREMIÈRE (programme français) */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  /* ============================ SECONDE ============================ */
  {
    id: 'mouvement-seconde', matiere: 'physique', niveau: 'Seconde', domaine: 'Mécanique',
    titre: 'Mouvement et interactions',
    resume: 'Référentiel, trajectoire, vitesse, forces, interaction gravitationnelle, poids et principe d’inertie.',
    motscles: 'référentiel trajectoire vitesse force gravitation poids inertie interaction',
    pourquoi: T`<p>C'est la porte d'entrée de la mécanique : décrire un mouvement (par rapport à quoi ?), modéliser les actions par des forces, et comprendre pourquoi un objet sans force qui le pousse continue tout droit. La loi de gravitation explique à la fois la chute d'une pomme et l'orbite des satellites.</p>`,
    cours: T`<h4>Décrire un mouvement</h4><p>On étudie un <b>système</b> dans un <b>référentiel</b> (terrestre, géocentrique, héliocentrique). Le mouvement est relatif : un passager est immobile dans le bus, mais en mouvement par rapport à la route.</p>
<p>Trajectoire : rectiligne, circulaire, curviligne. Vitesse : uniforme, accélérée, ralentie. Vitesse moyenne $v=\frac{d}{\Delta t}$ ; vecteur vitesse $\vec v\approx\frac{\vec{M_iM_{i+1}}}{\Delta t}$, tangent à la trajectoire.</p>
<h4>Forces</h4><p>Une action mécanique est modélisée par une force (vecteur) : point d'application, direction, sens, valeur en newtons. Principe des actions réciproques : $\vec F_{A/B}=-\vec F_{B/A}$.</p>
<h4>Gravitation et poids</h4><p>$F=G\frac{m_Am_B}{d^2}$ avec $G=6{,}67\times10^{-11}$ N·m²·kg⁻². Le poids est la force gravitationnelle exercée par la Terre : $P=mg$, $g=9{,}81$ N/kg.</p>
<h4>Principe d'inertie</h4><p>Si les forces qui s'exercent sur un système se compensent, il est immobile ou en mouvement rectiligne uniforme (et réciproquement).</p>`,
    formules: [
      { nom: 'Loi de la gravitation universelle', f: T`$$F=G\,\frac{m_A\,m_B}{d^2}$$`,
        quand: T`Attraction entre deux corps (planètes, satellites). $d$ = distance entre les <b>centres</b>.`,
        pas: T`Au voisinage de la Terre, $P=mg$ est plus simple et donne le même résultat.` },
      { nom: 'Poids', f: T`$$P=m\,g$$`,
        quand: T`Force exercée par un astre sur un objet à sa surface.`,
        pas: T`Masse (kg, ne change pas) et poids (N, dépend de l'astre) sont différents.` },
      { nom: 'Vitesse moyenne', f: T`$$v=\frac{d}{\Delta t}$$`,
        quand: T`Distance et durée connues.`,
        pas: T`Unités cohérentes : m et s donnent des m/s ; km et h des km/h.` }
    ],
    methode: [
      T`Précise le système et le référentiel.`,
      T`Décris la trajectoire et l'évolution de la vitesse.`,
      T`Fais l'inventaire des forces et un schéma.`,
      T`Applique le principe d'inertie ou calcule les forces.`
    ],
    exemple: {
      e: T`Force exercée par la Terre sur la Lune ($M_T=5{,}97\times10^{24}$ kg, $M_L=7{,}35\times10^{22}$ kg, $d=3{,}84\times10^8$ m).`,
      s: [T`$F=6{,}67\times10^{-11}\times\frac{5{,}97\times10^{24}\times7{,}35\times10^{22}}{(3{,}84\times10^8)^2}$.`, T`Numérateur : $\approx2{,}93\times10^{37}$ ; dénominateur : $1{,}47\times10^{17}$.`],
      r: T`$F\approx1{,}99\times10^{20}$ N`
    },
    pieges: [
      T`Oublier de mettre $d$ au carré.`,
      T`Distance entre surfaces au lieu de distance entre centres.`,
      T`Croire qu'il faut une force pour maintenir un mouvement rectiligne uniforme.`
    ],
    exos: [
      { d: 1, t: 'Poids sur la Lune', e: T`Poids d'un astronaute de 60 kg sur la Lune ($g_L=1{,}62$ N/kg) ?`,
        h: T`$P=mg_L$.`,
        s: [T`$P=60\times1{,}62=97{,}2$ N (contre 589 N sur Terre).`],
        r: T`$97{,}2$ N`, n: 97.2, u: 'N' },
      { d: 1, t: 'Vitesse moyenne', e: T`Un sprinteur court 100 m en 12,5 s. Vitesse moyenne en m/s ?`,
        h: T`$d/\Delta t$.`,
        s: [T`$v=\frac{100}{12{,}5}=8$ m/s.`],
        r: T`$8$ m/s`, n: 8, u: 'm/s' },
      { d: 2, t: 'Distance doublée', e: T`Si la distance entre deux corps double, par combien la force gravitationnelle est-elle divisée ?`,
        h: T`$F\propto\frac1{d^2}$.`,
        s: [T`$(2d)^2=4d^2$ : la force est divisée par 4.`],
        r: T`Par $4$`, n: 4 },
      { d: 3, t: 'Retrouver g', e: T`Calculer $g$ à la surface de la Terre ($M_T=5{,}97\times10^{24}$ kg, $R_T=6{,}37\times10^6$ m).`,
        h: T`$mg=G\frac{mM_T}{R_T^2}$.`,
        s: [T`Le poids est la force gravitationnelle : $g=\frac{GM_T}{R_T^2}$.`, T`$g=\frac{6{,}67\times10^{-11}\times5{,}97\times10^{24}}{(6{,}37\times10^6)^2}\approx9{,}81$ N/kg.`],
        r: T`$g\approx9{,}81$ N/kg`, n: 9.81, u: 'N/kg' }
    ]
  },

  {
    id: 'son', matiere: 'physique', niveau: 'Seconde', domaine: 'Ondes et signaux',
    titre: 'Ondes sonores',
    resume: 'Émission, propagation, période, fréquence, hauteur, timbre et niveau d’intensité sonore.',
    motscles: 'son onde fréquence période décibel intensité célérité écho',
    pourquoi: T`<p>Le son est le premier exemple d'onde : on y apprend période, fréquence et célérité, notions qui reviennent ensuite pour la lumière, les ondes radio, le Wi-Fi et la 4G. Les décibels servent aussi en électronique et en télécommunications.</p>`,
    cours: T`<h4>Émission et propagation</h4><p>Un son est produit par une vibration et se propage dans un milieu matériel (pas dans le vide). Célérité : environ 340 m/s dans l'air, 1500 m/s dans l'eau, plus dans les solides.</p>
<h4>Signal périodique</h4><p>Période $T$ (s), fréquence $f=\frac1T$ (Hz). La <b>hauteur</b> d'un son dépend de sa fréquence, le <b>timbre</b> de la forme du signal. Domaine audible : 20 Hz à 20 kHz.</p>
<h4>Intensité et niveau sonore</h4><p>$L=10\log\frac{I}{I_0}$ en décibels, $I_0=10^{-12}$ W/m². Doubler l'intensité ajoute environ 3 dB ; multiplier par 10 ajoute 10 dB.</p>`,
    formules: [
      { nom: 'Période et fréquence', f: T`$$f=\frac1T$$`,
        quand: T`Passer de la période lue sur un oscillogramme à la fréquence.`,
        pas: T`Convertis la période en secondes (ms → s) avant de calculer.` },
      { nom: 'Célérité', f: T`$$v=\frac{d}{\Delta t}$$`,
        quand: T`Écho, sonar, orage : distance et durée de propagation.`,
        pas: T`Pour un écho, le son fait un aller-retour : distance = $\frac{v\,\Delta t}{2}$.` },
      { nom: 'Niveau d’intensité sonore', f: T`$$L=10\log\frac{I}{I_0}\qquad I_0=10^{-12}\ \text{W/m}^2$$`,
        quand: T`Passer de l'intensité (W/m²) au niveau (dB) et inversement : $I=I_0\,10^{L/10}$.`,
        pas: T`Les décibels ne s'additionnent pas : deux sources de 60 dB donnent 63 dB, pas 120 dB.` }
    ],
    methode: [
      T`Lis la période sur le signal (plusieurs périodes pour plus de précision).`,
      T`Calcule la fréquence.`,
      T`Pour une propagation : attention à l'aller-retour.`,
      T`Pour les niveaux sonores : reviens aux intensités pour additionner.`
    ],
    exemple: {
      e: T`Un écho revient 1 s après le cri. Distance de la falaise ($v=340$ m/s) ?`,
      s: [T`Le son parcourt $340\times1=340$ m (aller + retour).`, T`Distance de la falaise : $\frac{340}2=170$ m.`],
      r: T`$170$ m`
    },
    pieges: [
      T`Oublier l'aller-retour.`,
      T`Additionner des décibels.`,
      T`Oublier de convertir les ms en s.`
    ],
    exos: [
      { d: 1, t: 'Fréquence', e: T`Un signal a une période de 2 ms. Fréquence ?`,
        h: T`$T=2\times10^{-3}$ s.`,
        s: [T`$f=\frac1{0{,}002}=500$ Hz.`],
        r: T`$500$ Hz`, n: 500, u: 'Hz' },
      { d: 1, t: 'Orage', e: T`Le tonnerre est entendu 3 s après l'éclair. Distance de l'orage ?`,
        h: T`La lumière arrive quasi instantanément.`,
        s: [T`$d=340\times3=1020$ m.`],
        r: T`$1020$ m`, n: 1020, u: 'm' },
      { d: 2, t: 'Niveau sonore', e: T`Intensité $I=10^{-5}$ W/m². Niveau sonore ?`,
        h: T`$10\log(10^{7})$.`,
        s: [T`$\frac{I}{I_0}=10^7$.`, T`$L=10\times7=70$ dB.`],
        r: T`$70$ dB`, n: 70, u: 'dB' },
      { d: 2, t: 'Deux sources', e: T`Deux machines identiques produisent chacune 60 dB. Niveau total ?`,
        h: T`L'intensité double.`,
        s: [T`$L=10\log\frac{2I}{I_0}=60+10\log2\approx63$ dB.`],
        r: T`$\approx63$ dB`, n: 63, u: 'dB' },
      { d: 3, t: 'Sonar', e: T`Un sonar reçoit l'écho 0,4 s après l'émission ($v=1500$ m/s dans l'eau). Profondeur ?`,
        h: T`Aller-retour.`,
        s: [T`$d=\frac{1500\times0{,}4}2=300$ m.`],
        r: T`$300$ m`, n: 300, u: 'm' }
    ]
  },

  {
    id: 'lumiere-seconde', matiere: 'physique', niveau: 'Seconde', domaine: 'Optique',
    titre: 'Lumière : propagation, spectres et réfraction',
    resume: 'Vitesse de la lumière, spectres, loi de Snell-Descartes, dispersion, lentille convergente et œil.',
    motscles: 'lumière réfraction snell-descartes indice spectre dispersion lentille réflexion totale',
    pourquoi: T`<p>La réfraction explique les lentilles, les lunettes, les appareils photo et surtout les <b>fibres optiques</b>, qui transportent Internet grâce à la réflexion totale. Les spectres permettent d'identifier les éléments chimiques à distance (étoiles, analyses).</p>`,
    cours: T`<h4>Propagation</h4><p>Dans un milieu homogène, la lumière se propage en ligne droite à $c=3{,}00\times10^8$ m/s dans le vide. Dans un milieu d'indice $n$ : $v=\frac cn$.</p>
<h4>Spectres</h4><p>Spectre continu (corps chaud), spectre de raies d'émission ou d'absorption (signature d'un élément chimique).</p>
<h4>Réfraction</h4><p>Changement de direction au passage d'un milieu à un autre : $n_1\sin i_1=n_2\sin i_2$ (angles mesurés par rapport à la normale). L'indice dépend de la couleur : c'est la <b>dispersion</b> (prisme, arc-en-ciel).</p>
<h4>Réflexion totale</h4><p>Si $n_1>n_2$, au-delà d'un angle limite $\sin i_\ell=\frac{n_2}{n_1}$, toute la lumière est réfléchie.</p>
<h4>Lentille convergente</h4><p>Les rayons parallèles à l'axe convergent au foyer image $F'$. Image d'un objet : construction avec trois rayons particuliers. Grandissement $\gamma=\frac{A'B'}{AB}$ (négatif si l'image est renversée).</p>`,
    formules: [
      { nom: 'Snell-Descartes', f: T`$$n_1\sin i_1=n_2\sin i_2$$`,
        quand: T`Passage d'un milieu transparent à un autre.`,
        pas: T`Les angles se mesurent par rapport à la <b>normale</b>, pas à la surface.` },
      { nom: 'Indice de réfraction', f: T`$$n=\frac cv\ge1$$`,
        quand: T`Vitesse de la lumière dans un milieu.`,
        pas: T`Un indice inférieur à 1 signale une erreur.` },
      { nom: 'Angle limite', f: T`$$\sin i_\ell=\frac{n_2}{n_1}\quad(n_1>n_2)$$`,
        quand: T`Fibres optiques, prismes à réflexion totale.`,
        pas: T`Impossible si la lumière va vers un milieu plus réfringent ($n_2>n_1$).` }
    ],
    methode: [
      T`Fais un schéma avec la normale.`,
      T`Repère milieu 1 (incident) et milieu 2.`,
      T`Applique Snell-Descartes et isole le sinus.`,
      T`Calculatrice en degrés, puis $\arcsin$.`
    ],
    exemple: {
      e: T`Un rayon passe de l'air à l'eau ($n=1{,}33$) avec $i_1=45°$. Angle de réfraction ?`,
      s: [T`$\sin i_2=\frac{1\times\sin45°}{1{,}33}=\frac{0{,}707}{1{,}33}=0{,}532$.`, T`$i_2=\arcsin(0{,}532)\approx32°$.`, T`Le rayon se rapproche de la normale (milieu plus réfringent) : cohérent.`],
      r: T`$i_2\approx32{,}1°$`
    },
    pieges: [
      T`Mesurer l'angle par rapport à la surface.`,
      T`Calculatrice en radians.`,
      T`Chercher une réfraction alors qu'il y a réflexion totale ($\sin i_2>1$).`
    ],
    exos: [
      { d: 1, t: 'Vitesse dans le verre', e: T`Vitesse de la lumière dans un verre d'indice 1,5 ?`,
        h: T`$v=c/n$.`,
        s: [T`$v=\frac{3\times10^8}{1{,}5}=2\times10^8$ m/s.`],
        r: T`$2\times10^8$ m/s`, n: 2e8, u: 'm/s' },
      { d: 2, t: 'Réfraction', e: T`Air → verre ($n=1{,}5$), $i_1=30°$. Calculer $i_2$.`,
        h: T`$\sin i_2=\frac{0{,}5}{1{,}5}$.`,
        s: [T`$\sin i_2=0{,}333$, $i_2\approx19{,}5°$.`],
        r: T`$\approx19{,}5°$`, n: 19.47, u: '°' },
      { d: 2, t: 'Soleil-Terre', e: T`Durée du trajet de la lumière du Soleil à la Terre ($1{,}5\times10^{11}$ m) ?`,
        h: T`$\Delta t=d/c$.`,
        s: [T`$\frac{1{,}5\times10^{11}}{3\times10^8}=500$ s, environ 8 min 20 s.`],
        r: T`$500$ s`, n: 500, u: 's' },
      { d: 3, t: 'Fibre optique', e: T`Angle limite de réflexion totale verre ($n=1{,}5$) → air ?`,
        h: T`$\sin i_\ell=\frac1{1{,}5}$.`,
        s: [T`$\sin i_\ell=0{,}667$, $i_\ell\approx41{,}8°$.`, T`Au-delà, la lumière reste piégée dans la fibre.`],
        r: T`$\approx41{,}8°$`, n: 41.8, u: '°' },
      { d: 3, t: 'Grandissement', e: T`Un objet de 2 cm donne une image renversée de 6 cm. Grandissement ?`,
        h: T`Renversée : signe négatif.`,
        s: [T`$\gamma=\frac{-6}{2}=-3$.`],
        r: T`$\gamma=-3$`, n: -3 }
    ]
  },

  /* ============================ PREMIÈRE ============================ */
  {
    id: 'champs', matiere: 'physique', niveau: 'Première', domaine: 'Champs et interactions',
    titre: 'Interactions fondamentales et champs',
    resume: 'Loi de Coulomb, champ électrique, champ de gravitation, condensateur plan et lignes de champ.',
    motscles: 'coulomb champ électrique gravitation charge condensateur plan interaction',
    pourquoi: T`<p>Le champ électrique explique le fonctionnement des condensateurs, des écrans tactiles, des imprimantes laser et des accélérateurs de particules. Comparer gravitation et force électrique montre pourquoi la chimie et l'électronique sont gouvernées par l'électricité, et l'astronomie par la gravitation.</p>`,
    cours: T`<h4>Loi de Coulomb</h4><p>Deux charges $q_A$, $q_B$ à distance $d$ : $F=k\frac{|q_Aq_B|}{d^2}$, $k=9{,}0\times10^9$ N·m²·C⁻². Charges de même signe : répulsion.</p>
<h4>Champs</h4><p>Champ électrique : $\vec E=\frac{\vec F}{q}$ (V/m). Champ de gravitation : $\vec g=\frac{\vec F}{m}$, de valeur $\frac{GM}{d^2}$.</p>
<h4>Condensateur plan</h4><p>Entre deux plaques parallèles soumises à $U$, séparées de $d$ : champ uniforme $E=\frac Ud$, dirigé de la plaque + vers la plaque −.</p>
<h4>Charge élémentaire</h4><p>$e=1{,}6\times10^{-19}$ C ; électron $-e$, proton $+e$.</p>`,
    formules: [
      { nom: 'Loi de Coulomb', f: T`$$F=k\,\frac{|q_A\,q_B|}{d^2}$$`,
        quand: T`Force entre deux charges ponctuelles.`,
        pas: T`Convertis µC ($10^{-6}$) et nC ($10^{-9}$), et les cm en m.` },
      { nom: 'Force et champ électrique', f: T`$$\vec F=q\,\vec E$$`,
        quand: T`Force sur une charge placée dans un champ connu.`,
        pas: T`Pour une charge négative (électron), la force est <b>opposée</b> au champ.` },
      { nom: 'Condensateur plan', f: T`$$E=\frac Ud$$`,
        quand: T`Champ uniforme entre deux plaques.`,
        pas: T`Valable seulement entre les plaques, loin des bords.` },
      { nom: 'Champ de gravitation', f: T`$$g=\frac{GM}{d^2}$$`,
        quand: T`Gravité à une altitude $h$ : $d=R+h$.`,
        pas: T`$g$ diminue avec l'altitude : $9{,}81$ n'est valable qu'au sol.` }
    ],
    methode: [
      T`Convertis toutes les unités en SI.`,
      T`Choisis la loi (Coulomb, gravitation, condensateur).`,
      T`Calcule la valeur, puis précise direction et sens.`,
      T`Compare les ordres de grandeur si demandé.`
    ],
    exemple: {
      e: T`Force électrique entre le proton et l'électron de l'atome d'hydrogène ($d=5{,}3\times10^{-11}$ m).`,
      s: [T`$F=9\times10^9\times\frac{(1{,}6\times10^{-19})^2}{(5{,}3\times10^{-11})^2}$.`, T`$=\frac{9\times10^9\times2{,}56\times10^{-38}}{2{,}81\times10^{-21}}$.`],
      r: T`$F\approx8{,}2\times10^{-8}$ N (attractive)`
    },
    pieges: [
      T`Oublier le carré de la distance.`,
      T`Sens de la force sur un électron.`,
      T`Prendre $g=9{,}81$ en altitude.`
    ],
    exos: [
      { d: 1, t: 'Champ entre deux plaques', e: T`$U=200$ V, plaques distantes de 2 cm. Champ électrique ?`,
        h: T`$d=0{,}02$ m.`,
        s: [T`$E=\frac{200}{0{,}02}=10\,000$ V/m.`],
        r: T`$10^4$ V/m`, n: 10000, u: 'V/m' },
      { d: 2, t: 'Force sur un électron', e: T`Force subie par un électron dans ce champ ?`,
        h: T`$F=eE$.`,
        s: [T`$F=1{,}6\times10^{-19}\times10^4=1{,}6\times10^{-15}$ N, vers la plaque +.`],
        r: T`$1{,}6\times10^{-15}$ N`, n: 1.6e-15, u: 'N' },
      { d: 2, t: 'Deux charges', e: T`Deux charges de 1 µC distantes de 10 cm. Force ?`,
        h: T`$q=10^{-6}$ C, $d=0{,}1$ m.`,
        s: [T`$F=9\times10^9\times\frac{10^{-12}}{0{,}01}=0{,}9$ N, répulsive.`],
        r: T`$0{,}9$ N`, n: 0.9, u: 'N' },
      { d: 3, t: 'Électrique contre gravitation', e: T`Rapport force électrique / force gravitationnelle entre un proton ($1{,}67\times10^{-27}$ kg) et un électron ($9{,}11\times10^{-31}$ kg).`,
        h: T`La distance se simplifie : $\frac{ke^2}{Gm_pm_e}$.`,
        s: [T`$ke^2=2{,}30\times10^{-28}$ ; $Gm_pm_e=1{,}01\times10^{-67}$.`, T`Rapport $\approx2{,}3\times10^{39}$ : la gravitation est négligeable à l'échelle atomique.`],
        r: T`$\approx2{,}3\times10^{39}$`, n: 2.27e39, tol: 0.05 },
      { d: 3, t: 'Gravité dans l’ISS', e: T`Valeur de $g$ à 400 km d'altitude ($R_T=6370$ km, $g_0=9{,}81$).`,
        h: T`$g=g_0\left(\frac{R_T}{R_T+h}\right)^2$.`,
        s: [T`$g=9{,}81\times\left(\frac{6370}{6770}\right)^2\approx8{,}68$ N/kg.`, T`Les astronautes « flottent » parce qu'ils sont en chute libre permanente, pas parce que $g$ est nul.`],
        r: T`$\approx8{,}68$ N/kg`, n: 8.68, u: 'N/kg' }
    ]
  },

  {
    id: 'ondes-mecaniques', matiere: 'physique', niveau: 'Première', domaine: 'Ondes et signaux',
    titre: 'Ondes mécaniques progressives',
    resume: 'Propagation, célérité, retard, ondes périodiques, longueur d’onde et double périodicité.',
    motscles: 'onde progressive célérité retard longueur d’onde période transversale longitudinale',
    pourquoi: T`<p>Séismes, vagues, sons, ultrasons médicaux : ce sont des ondes mécaniques. La relation $\lambda=\frac vf$ est l'une des plus utilisées de toute la physique (antennes, radars, échographie).</p>`,
    cours: T`<h4>Définition</h4><p>Une onde mécanique est la propagation d'une perturbation dans un milieu matériel, <b>sans transport de matière</b> mais avec transport d'énergie. Transversale (perturbation perpendiculaire à la propagation : corde) ou longitudinale (parallèle : son).</p>
<h4>Célérité et retard</h4><p>Un point situé à $d$ de la source reproduit son mouvement avec un retard $\tau=\frac dv$.</p>
<h4>Ondes périodiques</h4><p>Périodicité temporelle $T$ et spatiale $\lambda$ (longueur d'onde = distance parcourue pendant une période) : $\lambda=vT=\frac vf$. Deux points distants de $k\lambda$ vibrent en phase.</p>`,
    formules: [
      { nom: 'Célérité', f: T`$$v=\frac{d}{\tau}$$`,
        quand: T`Retard entre deux capteurs, séismes.`,
        pas: T`$\tau$ est le retard entre deux points, pas la période.` },
      { nom: 'Longueur d’onde', f: T`$$\lambda=v\,T=\frac vf$$`,
        quand: T`Onde périodique : relie les périodicités spatiale et temporelle.`,
        pas: T`La fréquence est fixée par la source ; si le milieu change, $v$ et $\lambda$ changent, pas $f$.` }
    ],
    methode: [
      T`Repère ce qui est spatial ($\lambda$, $d$) et temporel ($T$, $\tau$).`,
      T`Choisis $v=d/\tau$ ou $\lambda=v/f$.`,
      T`Convertis les unités (kHz, mm, km).`,
      T`Vérifie l'ordre de grandeur.`
    ],
    exemple: {
      e: T`Des vagues ont une longueur d'onde de 2 m et une période de 4 s. Célérité ?`,
      s: [T`$v=\frac\lambda T=\frac24=0{,}5$ m/s.`],
      r: T`$0{,}5$ m/s`
    },
    pieges: [
      T`Confondre retard et période.`,
      T`Croire que l'onde transporte la matière (le bouchon reste sur place).`,
      T`Oublier de convertir les kHz.`
    ],
    exos: [
      { d: 1, t: 'Longueur d’onde d’un la', e: T`Le la à 440 Hz dans l'air (340 m/s). Longueur d'onde ?`,
        h: T`$\lambda=v/f$.`,
        s: [T`$\lambda=\frac{340}{440}\approx0{,}773$ m.`],
        r: T`$\approx0{,}77$ m`, n: 0.773, u: 'm' },
      { d: 1, t: 'Retard', e: T`Une onde sismique à 7 km/s atteint une station à 140 km. Retard ?`,
        h: T`$\tau=d/v$.`,
        s: [T`$\tau=\frac{140}{7}=20$ s.`],
        r: T`$20$ s`, n: 20, u: 's' },
      { d: 2, t: 'Ultrasons', e: T`Ultrasons à 40 kHz dans l'air (340 m/s). Longueur d'onde en mètres ?`,
        h: T`$f=4\times10^4$ Hz.`,
        s: [T`$\lambda=\frac{340}{40\,000}=8{,}5\times10^{-3}$ m $=8{,}5$ mm.`],
        r: T`$8{,}5$ mm`, n: 0.0085, u: 'm' },
      { d: 3, t: 'Localiser un séisme', e: T`Ondes P à 6 km/s, ondes S à 3,5 km/s. Une station enregistre les S 20 s après les P. Distance de l'épicentre ?`,
        h: T`$\frac d{3{,}5}-\frac d6=20$.`,
        s: [T`$d\left(\frac1{3{,}5}-\frac16\right)=20$.`, T`$d\times0{,}119=20\Rightarrow d\approx168$ km.`],
        r: T`$\approx168$ km`, n: 168, u: 'km' }
    ]
  },

  {
    id: 'lentilles', matiere: 'physique', niveau: 'Première', domaine: 'Optique',
    titre: 'Lentilles minces et instruments d’optique',
    resume: 'Relation de conjugaison, grandissement, vergence, loupe, œil et lunette astronomique.',
    motscles: 'lentille conjugaison grandissement vergence foyer image loupe lunette',
    pourquoi: T`<p>Appareils photo, caméras de smartphones, microscopes, lunettes de vue, projecteurs : tous reposent sur la relation de conjugaison. C'est aussi un excellent entraînement aux <b>grandeurs algébriques</b> (avec signe).</p>`,
    cours: T`<h4>Conventions</h4><p>Les distances sont <b>algébriques</b> le long de l'axe orienté dans le sens de la lumière, à partir du centre optique O. Un objet réel à gauche a $\overline{OA}<0$.</p>
<h4>Relations</h4><p>Conjugaison : $\frac1{\overline{OA'}}-\frac1{\overline{OA}}=\frac1{\overline{OF'}}$. Grandissement : $\gamma=\frac{\overline{A'B'}}{\overline{AB}}=\frac{\overline{OA'}}{\overline{OA}}$. Vergence $C=\frac1{f'}$ en dioptries (δ).</p>
<h4>Instruments</h4><p>Loupe : objet entre F et O, image virtuelle droite agrandie. Lunette astronomique : objectif (grande focale) et oculaire (petite focale), système afocal, grossissement $G=\frac{f'_1}{f'_2}$.</p>`,
    formules: [
      { nom: 'Relation de conjugaison', f: T`$$\frac1{\overline{OA'}}-\frac1{\overline{OA}}=\frac1{f'}$$`,
        quand: T`Position de l'image connaissant celle de l'objet (ou l'inverse).`,
        pas: T`Le signe de $\overline{OA}$ : négatif pour un objet réel. Si tu obtiens $\overline{OA'}<0$, l'image est virtuelle.` },
      { nom: 'Grandissement', f: T`$$\gamma=\frac{\overline{OA'}}{\overline{OA}}$$`,
        quand: T`Taille et sens de l'image.`,
        pas: T`$\gamma<0$ : image renversée ; $|\gamma|>1$ : agrandie.` },
      { nom: 'Vergence et grossissement', f: T`$$C=\frac1{f'}\qquad G=\frac{f'_1}{f'_2}$$`,
        quand: T`Lunettes de vue (dioptries), lunette astronomique.`,
        pas: T`$f'$ en mètres pour avoir des dioptries.` }
    ],
    methode: [
      T`Oriente l'axe et écris les distances algébriques (avec signe).`,
      T`Applique la conjugaison et isole $\frac1{\overline{OA'}}$.`,
      T`Calcule $\gamma$.`,
      T`Vérifie par une construction graphique.`
    ],
    exemple: {
      e: T`$f'=10$ cm, objet à $\overline{OA}=-30$ cm. Position et grandissement de l'image.`,
      s: [T`$\frac1{\overline{OA'}}=\frac1{10}+\frac1{-30}=\frac{3-1}{30}=\frac1{15}$.`, T`$\overline{OA'}=15$ cm (image réelle).`, T`$\gamma=\frac{15}{-30}=-0{,}5$ : renversée, deux fois plus petite.`],
      r: T`$\overline{OA'}=15$ cm, $\gamma=-0{,}5$`
    },
    pieges: [
      T`Oublier le signe de $\overline{OA}$.`,
      T`Vergence avec $f'$ en cm.`,
      T`Confondre grandissement et grossissement.`
    ],
    exos: [
      { d: 1, t: 'Vergence', e: T`Vergence d'une lentille de focale 25 cm ?`,
        h: T`$f'=0{,}25$ m.`,
        s: [T`$C=\frac1{0{,}25}=4$ δ.`],
        r: T`$4$ δ`, n: 4, u: 'δ' },
      { d: 2, t: 'Position de l’image', e: T`$f'=5$ cm, $\overline{OA}=-20$ cm. Calculer $\overline{OA'}$ en cm.`,
        h: T`$\frac1{\overline{OA'}}=\frac15-\frac1{20}$.`,
        s: [T`$\frac1{\overline{OA'}}=\frac{4-1}{20}=\frac3{20}$.`, T`$\overline{OA'}\approx6{,}67$ cm.`],
        r: T`$\approx6{,}67$ cm`, n: 6.67, u: 'cm' },
      { d: 2, t: 'Grandissement', e: T`Même situation : grandissement ?`,
        h: T`$\frac{6{,}67}{-20}$.`,
        s: [T`$\gamma\approx-0{,}333$ : image renversée, 3 fois plus petite.`],
        r: T`$\approx-0{,}33$`, n: -0.333 },
      { d: 3, t: 'Loupe', e: T`Loupe de focale 5 cm, objet à $\overline{OA}=-4$ cm. Position de l'image ?`,
        h: T`$\frac15-\frac14$.`,
        s: [T`$\frac1{\overline{OA'}}=\frac15-\frac14=-\frac1{20}$.`, T`$\overline{OA'}=-20$ cm : image virtuelle, du même côté que l'objet.`, T`$\gamma=\frac{-20}{-4}=5$ : droite, 5 fois plus grande.`],
        r: T`$-20$ cm (virtuelle)`, n: -20, u: 'cm' },
      { d: 3, t: 'Lunette astronomique', e: T`Objectif de focale 1 m, oculaire de 2 cm. Grossissement ?`,
        h: T`$G=\frac{f'_1}{f'_2}$.`,
        s: [T`$G=\frac{100}{2}=50$.`],
        r: T`$G=50$`, n: 50 }
    ]
  },

  {
    id: 'lumiere-photons', matiere: 'physique', niveau: 'Première', domaine: 'Optique',
    titre: 'Couleurs, ondes lumineuses et photons',
    resume: 'Synthèses additive et soustractive, spectre électromagnétique, photon, niveaux d’énergie, effet photoélectrique.',
    motscles: 'couleur photon énergie planck niveaux spectre électromagnétique photoélectrique',
    pourquoi: T`<p>Les écrans fonctionnent en synthèse additive (RVB), les imprimantes en soustractive (CMJ). Le modèle du photon explique les LED, les lasers, les panneaux solaires et les capteurs d'appareils photo. C'est l'entrée dans la physique quantique.</p>`,
    cours: T`<h4>Couleurs</h4><p>Synthèse additive : rouge + vert + bleu = blanc ; rouge + vert = jaune. Soustractive : filtres ou pigments cyan, magenta, jaune. Un objet diffuse les couleurs qu'il n'absorbe pas.</p>
<h4>Modèle ondulatoire</h4><p>Lumière visible : $\lambda$ de 400 nm (violet) à 800 nm (rouge). $\nu=\frac c\lambda$.</p>
<h4>Modèle corpusculaire</h4><p>La lumière est faite de photons d'énergie $E=h\nu=\frac{hc}\lambda$, $h=6{,}63\times10^{-34}$ J·s. $1\ \text{eV}=1{,}6\times10^{-19}$ J.</p>
<h4>Niveaux d'énergie</h4><p>L'énergie d'un atome est quantifiée. Une transition entre niveaux émet ou absorbe un photon de $\Delta E=h\nu$ : d'où les raies spectrales.</p>
<h4>Effet photoélectrique (Tle)</h4><p>Un photon d'énergie supérieure au travail d'extraction $W$ arrache un électron : $E_{c,max}=h\nu-W$.</p>`,
    formules: [
      { nom: 'Énergie d’un photon', f: T`$$E=h\nu=\frac{hc}{\lambda}$$`,
        quand: T`Lien entre couleur (longueur d'onde) et énergie.`,
        pas: T`$\lambda$ en mètres (nm = $10^{-9}$ m). Pour des eV, divise les joules par $1{,}6\times10^{-19}$.` },
      { nom: 'Transition atomique', f: T`$$\Delta E=E_{haut}-E_{bas}=h\nu$$`,
        quand: T`Raies d'émission/absorption, LED, laser.`,
        pas: T`L'atome n'absorbe que des photons d'énergie <b>exactement</b> égale à un écart entre niveaux.` },
      { nom: 'Effet photoélectrique', f: T`$$E_{c,max}=h\nu-W$$`,
        quand: T`Cellules photoélectriques, panneaux solaires.`,
        pas: T`Si $h\nu<W$, aucun électron n'est arraché, quelle que soit l'intensité lumineuse.` }
    ],
    methode: [
      T`Convertis $\lambda$ en mètres.`,
      T`Calcule $E$ en joules, puis en eV si besoin.`,
      T`Pour une transition, fais la différence des niveaux.`,
      T`Vérifie que $\lambda$ trouvée est réaliste (visible : 400-800 nm).`
    ],
    exemple: {
      e: T`Énergie d'un photon de longueur d'onde 500 nm.`,
      s: [T`$E=\frac{6{,}63\times10^{-34}\times3\times10^8}{500\times10^{-9}}\approx3{,}98\times10^{-19}$ J.`, T`En eV : $\frac{3{,}98\times10^{-19}}{1{,}6\times10^{-19}}\approx2{,}49$ eV.`],
      r: T`$\approx3{,}98\times10^{-19}$ J $\approx2{,}49$ eV`
    },
    pieges: [
      T`Oublier de convertir les nm.`,
      T`Mélanger J et eV.`,
      T`Croire qu'une lumière plus intense mais de trop grande longueur d'onde produit l'effet photoélectrique.`
    ],
    exos: [
      { d: 1, t: 'Fréquence', e: T`Fréquence d'une lumière de 600 nm ?`,
        h: T`$\nu=c/\lambda$.`,
        s: [T`$\nu=\frac{3\times10^8}{6\times10^{-7}}=5\times10^{14}$ Hz.`],
        r: T`$5\times10^{14}$ Hz`, n: 5e14, u: 'Hz' },
      { d: 2, t: 'Photon violet', e: T`Énergie en eV d'un photon de 400 nm ?`,
        h: T`$\frac{hc}\lambda$ puis divise par $1{,}6\times10^{-19}$.`,
        s: [T`$E=4{,}97\times10^{-19}$ J $\approx3{,}11$ eV.`],
        r: T`$\approx3{,}11$ eV`, n: 3.11, u: 'eV' },
      { d: 2, t: 'Raie de l’hydrogène', e: T`Une transition de 1,89 eV dans l'hydrogène émet quelle longueur d'onde (en nm) ?`,
        h: T`$\lambda=\frac{hc}{\Delta E}$ avec $\Delta E$ en J.`,
        s: [T`$\Delta E=1{,}89\times1{,}6\times10^{-19}=3{,}02\times10^{-19}$ J.`, T`$\lambda=\frac{1{,}99\times10^{-25}}{3{,}02\times10^{-19}}\approx658$ nm (rouge, raie H-α).`],
        r: T`$\approx658$ nm`, n: 658, u: 'nm' },
      { d: 3, t: 'Effet photoélectrique', e: T`Le sodium a un travail d'extraction de 2,3 eV. Il est éclairé à 300 nm. Énergie cinétique maximale des électrons (eV) ?`,
        h: T`Énergie du photon en eV, moins $W$.`,
        s: [T`$E=\frac{1{,}99\times10^{-25}}{3\times10^{-7}}=6{,}63\times10^{-19}$ J $\approx4{,}14$ eV.`, T`$E_c=4{,}14-2{,}3=1{,}84$ eV.`],
        r: T`$\approx1{,}84$ eV`, n: 1.84, u: 'eV' },
      { d: 3, t: 'Couleur des objets', e: T`Un objet vert est éclairé en lumière rouge. Quelle couleur paraît-il ?`,
        h: T`Un objet vert diffuse le vert et absorbe le reste.`,
        s: [T`Il absorbe le rouge et ne reçoit pas de vert à diffuser.`, T`Il paraît noir.`],
        r: T`Noir` }
    ]
  }

  ]);
})();

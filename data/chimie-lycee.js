/* CHIMIE — SECONDE ET PREMIÈRE (programme français) */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  /* ============================ SECONDE ============================ */
  {
    id: 'solutions', matiere: 'chimie', niveau: 'Seconde', domaine: 'Constitution de la matière',
    titre: 'Corps purs, mélanges et solutions',
    resume: 'Masse volumique, composition de l’air, solutions, concentration en masse, dissolution, dilution, étalonnage.',
    motscles: 'corps pur mélange solution concentration masse volumique dilution étalonnage soluté solvant',
    pourquoi: T`<p>Préparer un médicament, un sérum, une peinture, contrôler la qualité de l'eau : tout commence par savoir préparer une solution à la bonne concentration et la vérifier. La dilution est un geste de base de tout laboratoire.</p>`,
    cours: T`<h4>Corps purs et mélanges</h4><p>Un corps pur contient une seule espèce chimique ; on l'identifie par ses températures de changement d'état ou sa masse volumique $\rho=\frac mV$. L'air est un mélange : environ 78 % de diazote et 21 % de dioxygène (en volume).</p>
<h4>Solutions</h4><p>Un <b>soluté</b> dissous dans un <b>solvant</b>. Concentration en masse : $C_m=\frac{m_{soluté}}{V_{solution}}$ (g/L). La solubilité est la concentration maximale possible.</p>
<h4>Dilution</h4><p>On ajoute du solvant : la masse de soluté se conserve, donc $C_{mère}V_{mère}=C_{fille}V_{fille}$. Facteur de dilution $F=\frac{C_{mère}}{C_{fille}}=\frac{V_{fille}}{V_{mère}}$.</p>
<h4>Dosage par étalonnage</h4><p>On mesure une grandeur (masse volumique, couleur/absorbance) pour des solutions de concentrations connues, on trace la droite d'étalonnage et on y lit la concentration inconnue.</p>`,
    formules: [
      { nom: 'Masse volumique', f: T`$$\rho=\frac mV$$`,
        quand: T`Identifier un corps pur, convertir masse et volume.`,
        pas: T`Attention aux unités : g/cm³ = kg/L = 1000 kg/m³.` },
      { nom: 'Concentration en masse', f: T`$$C_m=\frac{m_{soluté}}{V_{solution}}$$`,
        quand: T`Préparer une solution, calculer la masse à peser.`,
        pas: T`C'est le volume de la <b>solution</b>, pas celui du solvant ; et ne pas confondre avec $\rho$.` },
      { nom: 'Dilution', f: T`$$C_{mère}\,V_{mère}=C_{fille}\,V_{fille}$$`,
        quand: T`Préparer une solution moins concentrée à partir d'une solution mère.`,
        pas: T`$V_{fille}$ est le volume total final (fiole jaugée), pas le volume d'eau ajouté.` }
    ],
    methode: [
      T`Identifie soluté, solvant, volume de solution.`,
      T`Convertis les volumes en litres.`,
      T`Applique $C_m=m/V$ ou la conservation de la masse lors d'une dilution.`,
      T`Décris le protocole (pipette jaugée, fiole jaugée, trait de jauge).`
    ],
    exemple: {
      e: T`On dispose d'une solution mère à 50 g/L. Volume à prélever pour préparer 100 mL à 5 g/L ?`,
      s: [T`$V_{mère}=\frac{C_{fille}V_{fille}}{C_{mère}}=\frac{5\times100}{50}=10$ mL.`, T`Protocole : pipette jaugée de 10 mL, fiole jaugée de 100 mL, compléter à l'eau jusqu'au trait.`],
      r: T`$10$ mL`
    },
    pieges: [
      T`Volumes en mL dans une formule en g/L.`,
      T`Confondre $\rho$ (masse volumique de la solution) et $C_m$ (concentration d'un soluté).`,
      T`Ajouter le volume d'eau au lieu de compléter jusqu'au volume final.`
    ],
    exos: [
      { d: 1, t: 'Concentration', e: T`5 g de sucre dissous dans 250 mL de solution. Concentration en masse ?`,
        h: T`$V=0{,}25$ L.`,
        s: [T`$C_m=\frac5{0{,}25}=20$ g/L.`],
        r: T`$20$ g/L`, n: 20, u: 'g/L' },
      { d: 1, t: 'Identifier un métal', e: T`Un objet de 54 g occupe 20 cm³. Masse volumique en g/cm³ ?`,
        h: T`$m/V$.`,
        s: [T`$\rho=\frac{54}{20}=2{,}7$ g/cm³ : c'est l'aluminium.`],
        r: T`$2{,}7$ g/cm³`, n: 2.7, u: 'g/cm³' },
      { d: 2, t: 'Sérum physiologique', e: T`Masse de sel à peser pour 500 mL de solution à 9 g/L ?`,
        h: T`$m=C_mV$.`,
        s: [T`$m=9\times0{,}5=4{,}5$ g.`],
        r: T`$4{,}5$ g`, n: 4.5, u: 'g' },
      { d: 2, t: 'Dilution', e: T`Volume de solution mère à 2 g/L à prélever pour obtenir 200 mL à 0,5 g/L ?`,
        h: T`Facteur de dilution 4.`,
        s: [T`$V_{mère}=\frac{0{,}5\times200}2=50$ mL.`],
        r: T`$50$ mL`, n: 50, u: 'mL' },
      { d: 3, t: 'Étalonnage', e: T`L'absorbance est proportionnelle à la concentration. Une solution à 10 mg/L a $A=0{,}40$. Un échantillon a $A=0{,}26$. Concentration ?`,
        h: T`Proportionnalité.`,
        s: [T`$C=10\times\frac{0{,}26}{0{,}40}=6{,}5$ mg/L.`],
        r: T`$6{,}5$ mg/L`, n: 6.5, u: 'mg/L' }
    ]
  },

  {
    id: 'atome-mole', matiere: 'chimie', niveau: 'Seconde', domaine: 'Constitution de la matière',
    titre: 'Atome, tableau périodique et quantité de matière',
    resume: 'Structure de l’atome, isotopes, configuration électronique, ions et molécules stables, la mole.',
    motscles: 'atome noyau proton neutron électron isotope configuration électronique tableau périodique mole avogadro',
    pourquoi: T`<p>Toute la chimie se comprend à partir des électrons de valence : ils expliquent pourquoi le sodium donne Na⁺ et le chlore Cl⁻. La mole est l'unité qui permet de passer du monde microscopique (atomes) au monde macroscopique (grammes) : indispensable pour tout calcul de chimie.</p>`,
    cours: T`<h4>Atome</h4><p>Noyau (protons et neutrons) très petit ($10^{-15}$ m) et électrons autour (atome $\approx10^{-10}$ m). Notation $^A_Z\mathrm X$ : $Z$ protons, $A$ nucléons, $N=A-Z$ neutrons. Isotopes : même $Z$, $A$ différent. La masse est concentrée dans le noyau.</p>
<h4>Configuration électronique</h4><p>Remplissage $1s^2\,2s^2\,2p^6\,3s^2\,3p^6$. Les électrons de la dernière couche sont les électrons de valence. Le tableau périodique est organisé par $Z$ : même colonne = même nombre d'électrons de valence = propriétés chimiques proches.</p>
<h4>Stabilité</h4><p>Les atomes tendent à acquérir la configuration du gaz noble le plus proche (duet ou octet), en formant des ions ou des liaisons covalentes.</p>
<h4>La mole</h4><p>1 mol $=6{,}02\times10^{23}$ entités ($N_A$). $n=\frac N{N_A}=\frac mM$, $M$ masse molaire en g/mol.</p>`,
    formules: [
      { nom: 'Composition du noyau', f: T`$$N=A-Z$$`,
        quand: T`Nombre de neutrons à partir de la notation $^A_Z\mathrm X$.`,
        pas: T`Un atome est neutre : autant d'électrons que de protons. Un ion a gagné ou perdu des électrons, pas des protons.` },
      { nom: 'Quantité de matière', f: T`$$n=\frac{m}{M}=\frac{N}{N_A}$$`,
        quand: T`Passer de la masse pesée au nombre de moles, puis au nombre d'entités.`,
        pas: T`$M$ d'une molécule = somme des masses molaires des atomes : $M(\mathrm{H_2O})=2\times1+16=18$ g/mol.` }
    ],
    methode: [
      T`Lis $Z$ et $A$ ; déduis protons, neutrons, électrons.`,
      T`Écris la configuration électronique et repère la valence.`,
      T`Déduis l'ion stable ou le nombre de liaisons.`,
      T`Pour la mole : calcule $M$, puis $n=m/M$.`
    ],
    exemple: {
      e: T`Combien de molécules dans 18 g d'eau ?`,
      s: [T`$M(\mathrm{H_2O})=18$ g/mol, donc $n=1$ mol.`, T`$N=nN_A=6{,}02\times10^{23}$ molécules.`],
      r: T`$6{,}02\times10^{23}$ molécules`
    },
    pieges: [
      T`Confondre $A$ et $Z$.`,
      T`Oublier qu'un cation a perdu des électrons.`,
      T`Masse molaire d'une molécule mal sommée.`
    ],
    exos: [
      { d: 1, t: 'Neutrons', e: T`Combien de neutrons dans $^{23}_{11}\mathrm{Na}$ ?`,
        h: T`$A-Z$.`,
        s: [T`$23-11=12$.`],
        r: T`$12$`, n: 12 },
      { d: 1, t: 'Quantité de matière', e: T`Quantité de matière dans 10 g de sel NaCl ($M=58{,}5$ g/mol) ?`,
        h: T`$n=m/M$.`,
        s: [T`$n=\frac{10}{58{,}5}\approx0{,}171$ mol.`],
        r: T`$\approx0{,}171$ mol`, n: 0.171, u: 'mol' },
      { d: 2, t: 'Électrons de valence', e: T`Configuration électronique du chlore ($Z=17$). Combien d'électrons de valence ? Quel ion forme-t-il ?`,
        h: T`$1s^2\,2s^2\,2p^6\,3s^2\,3p^5$.`,
        s: [T`Couche 3 : $3s^2\,3p^5$, soit 7 électrons.`, T`Il gagne 1 électron pour avoir l'octet : $\mathrm{Cl^-}$.`],
        r: T`7 électrons de valence ; $\mathrm{Cl^-}$`, n: 7 },
      { d: 2, t: 'Nombre d’atomes', e: T`Nombre d'atomes dans 1 g de carbone ($M=12$ g/mol) ?`,
        h: T`$N=\frac mMN_A$.`,
        s: [T`$N=\frac1{12}\times6{,}02\times10^{23}\approx5{,}02\times10^{22}$.`],
        r: T`$\approx5{,}0\times10^{22}$`, n: 5.02e22 },
      { d: 3, t: 'Masse d’un atome', e: T`Masse (en g) d'un atome de fer ($M=55{,}8$ g/mol) ?`,
        h: T`$\frac M{N_A}$.`,
        s: [T`$m=\frac{55{,}8}{6{,}02\times10^{23}}\approx9{,}27\times10^{-23}$ g.`],
        r: T`$\approx9{,}27\times10^{-23}$ g`, n: 9.27e-23, u: 'g' },
      { d: 3, t: 'Échelle de l’atome', e: T`Le noyau mesure $10^{-15}$ m et l'atome $10^{-10}$ m. Si le noyau était une bille de 1 cm, quelle serait la taille de l'atome (en km) ?`,
        h: T`Rapport $10^5$.`,
        s: [T`L'atome est $10^5$ fois plus grand que le noyau.`, T`$1\text{ cm}\times10^5=10^5$ cm $=1$ km : l'atome est essentiellement vide.`],
        r: T`$1$ km`, n: 1, u: 'km' }
    ]
  },

  {
    id: 'transformations', matiere: 'chimie', niveau: 'Seconde', domaine: 'Transformations de la matière',
    titre: 'Transformations physiques, chimiques et nucléaires',
    resume: 'Changements d’état et énergie, équations de réaction, réactif limitant, conservation en physique nucléaire.',
    motscles: 'changement d’état énergie massique équation réaction réactif limitant fission fusion conservation',
    pourquoi: T`<p>Savoir distinguer ce qui change dans une transformation (état, espèces chimiques ou noyaux) et ce qui se conserve (masse, éléments, charges, nucléons) est la base de toute la chimie et de l'énergie nucléaire.</p>`,
    cours: T`<h4>Transformation physique</h4><p>Changement d'état (fusion, solidification, vaporisation, liquéfaction, sublimation, condensation). Énergie échangée : $Q=mL$ ($L$ énergie massique de changement d'état, en J/kg).</p>
<h4>Transformation chimique</h4><p>Des réactifs deviennent des produits. L'équation doit conserver les <b>éléments</b> et les <b>charges</b>. Le réactif <b>limitant</b> est celui qui est entièrement consommé en premier.</p>
<h4>Transformation nucléaire</h4><p>Les noyaux changent. Conservation du nombre de nucléons $A$ et du nombre de charge $Z$. Fission (noyau lourd cassé), fusion (noyaux légers réunis, Soleil).</p>`,
    formules: [
      { nom: 'Énergie de changement d’état', f: T`$$Q=m\,L$$`,
        quand: T`Fusion de la glace, vaporisation de l'eau, sueur.`,
        pas: T`Pendant le changement d'état, la température d'un corps pur reste constante.` },
      { nom: 'Proportions stœchiométriques', f: T`$$aA+bB\to\dots\quad\text{limitant : plus petit des rapports }\frac{n_A}a,\ \frac{n_B}b$$`,
        quand: T`Trouver le réactif limitant et la quantité de produit.`,
        pas: T`Comparer $n_A$ et $n_B$ directement est faux : il faut diviser par les coefficients.` },
      { nom: 'Conservations nucléaires', f: T`$$\sum A\text{ conservé}\qquad\sum Z\text{ conservé}$$`,
        quand: T`Compléter une équation de réaction nucléaire.`,
        pas: T`L'élément chimique change (il est fixé par $Z$).` }
    ],
    methode: [
      T`Identifie le type de transformation.`,
      T`Équilibre en commençant par l'élément le moins fréquent, terminer par O et H.`,
      T`Pour le limitant, compare $\frac{n_i}{\text{coefficient}}$.`,
      T`En nucléaire, vérifie $A$ et $Z$ des deux côtés.`
    ],
    exemple: {
      e: T`Équilibrer la combustion du méthane : $\mathrm{CH_4+O_2\to CO_2+H_2O}$.`,
      s: [T`C : 1 de chaque côté. H : 4 à gauche, donc $2\,\mathrm{H_2O}$.`, T`O à droite : $2+2=4$, donc $2\,\mathrm{O_2}$.`],
      r: T`$\mathrm{CH_4+2O_2\longrightarrow CO_2+2H_2O}$`
    },
    pieges: [
      T`Modifier les indices au lieu des coefficients.`,
      T`Oublier les charges dans une équation avec des ions.`,
      T`Comparer les quantités sans tenir compte des coefficients.`
    ],
    exos: [
      { d: 1, t: 'Faire fondre la glace', e: T`Énergie pour faire fondre 200 g de glace à 0 °C ($L_f=334$ kJ/kg) ?`,
        h: T`$m=0{,}2$ kg.`,
        s: [T`$Q=0{,}2\times334=66{,}8$ kJ.`],
        r: T`$66{,}8$ kJ`, n: 66.8, u: 'kJ' },
      { d: 2, t: 'Équilibrer', e: T`Équilibrer la combustion du propane $\mathrm{C_3H_8+O_2\to CO_2+H_2O}$. Coefficient de $\mathrm{O_2}$ ?`,
        h: T`3 CO₂ et 4 H₂O.`,
        s: [T`C : $3\,\mathrm{CO_2}$ ; H : $4\,\mathrm{H_2O}$.`, T`O à droite : $6+4=10$, donc $5\,\mathrm{O_2}$.`],
        r: T`$\mathrm{C_3H_8+5O_2\to3CO_2+4H_2O}$`, n: 5 },
      { d: 2, t: 'Réactif limitant', e: T`$\mathrm{2H_2+O_2\to2H_2O}$ avec 3 mol de $\mathrm{H_2}$ et 2 mol de $\mathrm{O_2}$. Quantité d'eau formée ?`,
        h: T`Compare $\frac32$ et $\frac21$.`,
        s: [T`$\frac{3}{2}=1{,}5<\frac21=2$ : $\mathrm{H_2}$ est limitant.`, T`$x_{max}=1{,}5$ mol, eau $=2\times1{,}5=3$ mol.`],
        r: T`$3$ mol`, n: 3, u: 'mol' },
      { d: 3, t: 'Désintégration α', e: T`Compléter : $^{238}_{92}\mathrm U\to{}^{234}_{90}\mathrm{Th}+\ ?$`,
        h: T`Conservation de $A$ et de $Z$.`,
        s: [T`$A$ : $238-234=4$. $Z$ : $92-90=2$.`, T`$^4_2\mathrm{He}$ : particule α.`],
        r: T`$^4_2\mathrm{He}$` },
      { d: 3, t: 'Fusion', e: T`Compléter : $^2_1\mathrm H+{}^3_1\mathrm H\to{}^4_2\mathrm{He}+\ ?$`,
        h: T`$A$ : $5-4$ ; $Z$ : $2-2$.`,
        s: [T`Particule de $A=1$, $Z=0$ : un neutron $^1_0n$.`, T`C'est la réaction visée par les réacteurs de fusion (ITER).`],
        r: T`Un neutron` }
    ]
  },

  /* ============================ PREMIÈRE ============================ */
  {
    id: 'avancement-redox', matiere: 'chimie', niveau: 'Première', domaine: 'Transformations de la matière',
    titre: 'Avancement et oxydoréduction',
    resume: 'Concentration en quantité de matière, tableau d’avancement, réactif limitant, couples oxydant/réducteur, demi-équations.',
    motscles: 'avancement tableau réactif limitant oxydant réducteur demi-équation redox concentration',
    pourquoi: T`<p>Les piles, les batteries de téléphone, la corrosion des métaux, le traitement de l'eau à l'eau de Javel : tout cela, c'est de l'oxydoréduction. Le tableau d'avancement est l'outil universel pour prévoir les quantités de produits.</p>`,
    cours: T`<h4>Concentration en quantité de matière</h4><p>$c=\frac nV$ (mol/L).</p>
<h4>Tableau d'avancement</h4><p>On suit les quantités en fonction de l'avancement $x$ (mol). Pour $aA+bB\to cC+dD$ : il reste $n_A-ax$ de A, il se forme $cx$ de C. L'avancement maximal $x_{max}$ est atteint quand un réactif est épuisé.</p>
<h4>Oxydoréduction</h4><p>Oxydant : capte des électrons. Réducteur : cède des électrons. Couple $\mathrm{Ox/Red}$ : $\mathrm{Ox}+ne^-\rightleftharpoons\mathrm{Red}$. Une réaction redox échange des électrons entre deux couples ; les électrons ne doivent pas apparaître dans l'équation finale.</p>
<h4>Équilibrer une demi-équation (milieu acide)</h4><p>Élément principal, puis O avec $\mathrm{H_2O}$, puis H avec $\mathrm{H^+}$, puis charges avec $e^-$.</p>`,
    formules: [
      { nom: 'Concentration molaire', f: T`$$c=\frac nV$$`,
        quand: T`Lien entre quantité de matière et volume de solution.`,
        pas: T`$V$ en litres.` },
      { nom: 'Avancement maximal', f: T`$$x_{max}=\min\left(\frac{n_A}{a},\frac{n_B}{b}\right)$$`,
        quand: T`Transformation totale : quantités finales.`,
        pas: T`Ne pas oublier de diviser par les coefficients.` },
      { nom: 'Demi-équation', f: T`$$\mathrm{Ox}+n\,e^-\rightleftharpoons\mathrm{Red}$$`,
        quand: T`Écrire puis combiner deux couples pour obtenir l'équation redox.`,
        pas: T`On multiplie les demi-équations pour que le nombre d'électrons échangés soit le même.` }
    ],
    methode: [
      T`Calcule les quantités initiales ($n=m/M$ ou $n=cV$).`,
      T`Écris l'équation équilibrée et le tableau d'avancement.`,
      T`Détermine $x_{max}$ et le réactif limitant.`,
      T`Calcule l'état final (quantités, masses, concentrations).`
    ],
    exemple: {
      e: T`$\mathrm{Zn+Cu^{2+}\to Zn^{2+}+Cu}$ avec 0,1 mol de Zn et 0,05 mol de $\mathrm{Cu^{2+}}$. Avancement maximal ?`,
      s: [T`$\frac{0{,}1}1$ et $\frac{0{,}05}1$ : $x_{max}=0{,}05$ mol.`, T`$\mathrm{Cu^{2+}}$ est limitant. Il reste 0,05 mol de Zn.`],
      r: T`$x_{max}=0{,}05$ mol`
    },
    pieges: [
      T`Confondre oxydant et réducteur (moyen mnémotechnique : l'oxydant <b>gagne</b> des électrons).`,
      T`Laisser des électrons dans l'équation finale.`,
      T`Mauvais équilibrage des charges.`
    ],
    exos: [
      { d: 1, t: 'Concentration', e: T`0,02 mol de soluté dans 250 mL. Concentration en mol/L ?`,
        h: T`$V=0{,}25$ L.`,
        s: [T`$c=\frac{0{,}02}{0{,}25}=0{,}08$ mol/L.`],
        r: T`$0{,}08$ mol/L`, n: 0.08, u: 'mol/L' },
      { d: 2, t: 'Réactif limitant', e: T`$\mathrm{2Al+3S\to Al_2S_3}$ avec 0,4 mol d'Al et 0,45 mol de S. Avancement maximal ?`,
        h: T`$\frac{0{,}4}2$ et $\frac{0{,}45}3$.`,
        s: [T`$0{,}2$ et $0{,}15$ : $x_{max}=0{,}15$ mol, S limitant.`],
        r: T`$0{,}15$ mol`, n: 0.15, u: 'mol' },
      { d: 2, t: 'Demi-équation du permanganate', e: T`Équilibrer en milieu acide : $\mathrm{MnO_4^-/Mn^{2+}}$. Combien d'électrons ?`,
        h: T`4 O → $4\,\mathrm{H_2O}$ ; puis $8\,\mathrm{H^+}$.`,
        s: [T`$\mathrm{MnO_4^-+8H^++5e^-\to Mn^{2+}+4H_2O}$.`, T`Charges : $-1+8-5=+2$ ✔.`],
        r: T`$5$ électrons`, n: 5 },
      { d: 3, t: 'Équation redox', e: T`Écrire la réaction entre $\mathrm{MnO_4^-}$ et $\mathrm{Fe^{2+}}$ (couple $\mathrm{Fe^{3+}/Fe^{2+}}$). Coefficient de $\mathrm{Fe^{2+}}$ ?`,
        h: T`$\mathrm{Fe^{2+}\to Fe^{3+}+e^-}$, à multiplier par 5.`,
        s: [T`$\mathrm{MnO_4^-+8H^++5Fe^{2+}\to Mn^{2+}+4H_2O+5Fe^{3+}}$.`],
        r: T`$5$`, n: 5 },
      { d: 3, t: 'Masse de cuivre', e: T`Dans l'exemple (Zn + Cu²⁺), quelle masse de cuivre se dépose ($M=63{,}5$ g/mol) ?`,
        h: T`$n(\mathrm{Cu})=x_{max}$.`,
        s: [T`$m=0{,}05\times63{,}5\approx3{,}18$ g.`],
        r: T`$\approx3{,}18$ g`, n: 3.175, u: 'g' }
    ]
  },

  {
    id: 'titrages', matiere: 'chimie', niveau: 'Première', domaine: 'Analyse chimique',
    titre: 'Dosages par titrage',
    resume: 'Réaction support, équivalence, titrage colorimétrique, pH-métrique et conductimétrique.',
    motscles: 'titrage dosage équivalence indicateur coloré conductimétrie ph-métrie burette',
    pourquoi: T`<p>Vérifier l'acidité d'un vinaigre, la teneur en vitamine C d'un médicament, la pureté d'un produit industriel : le titrage est la méthode de référence du contrôle qualité en chimie.</p>`,
    cours: T`<h4>Principe</h4><p>On fait réagir l'espèce à doser (titrée) avec un réactif de concentration connue (titrant) versé à la burette. La réaction support doit être rapide, totale et unique.</p>
<h4>Équivalence</h4><p>Les réactifs ont été introduits en proportions stœchiométriques : changement de réactif limitant. Pour $aA+bB\to\dots$ : $\frac{n_A}a=\frac{n_{B,E}}b$, soit $\frac{c_AV_A}a=\frac{c_BV_E}b$.</p>
<h4>Repérage de l'équivalence</h4><ul><li>Colorimétrique : changement de couleur (indicateur ou espèce colorée).</li><li>pH-métrique (Tle) : saut de pH, méthode des tangentes ou maximum de la dérivée.</li><li>Conductimétrique (Tle) : changement de pente de $\sigma=f(V)$ (loi de Kohlrausch $\sigma=\sum\lambda_i[X_i]$).</li></ul>`,
    formules: [
      { nom: 'Relation à l’équivalence', f: T`$$\frac{c_A\,V_A}{a}=\frac{c_B\,V_E}{b}$$`,
        quand: T`Calculer la concentration inconnue à partir du volume équivalent.`,
        pas: T`Attention aux coefficients ($a$, $b$) : ils ne valent pas toujours 1 (redox !).` },
      { nom: 'Loi de Kohlrausch', f: T`$$\sigma=\sum_i\lambda_i\,[X_i]$$`,
        quand: T`Titrage conductimétrique : interpréter les changements de pente.`,
        pas: T`$[X_i]$ en mol/m³ si $\lambda$ est en S·m²·mol⁻¹.` },
      { nom: 'Choix de l’indicateur', f: T`$$\text{pH}_E\in\text{zone de virage}$$`,
        quand: T`Titrage acide-base colorimétrique.`,
        pas: T`Un indicateur dont la zone de virage ne contient pas le pH à l'équivalence donne un résultat faux.` }
    ],
    methode: [
      T`Écris la réaction support équilibrée.`,
      T`Repère $V_E$ (couleur, saut de pH, rupture de pente).`,
      T`Applique la relation à l'équivalence.`,
      T`Tiens compte d'une éventuelle dilution préalable.`
    ],
    exemple: {
      e: T`20 mL d'acide chlorhydrique sont titrés par de la soude à 0,1 mol/L ; $V_E=12$ mL. Concentration de l'acide ?`,
      s: [T`Réaction $\mathrm{H_3O^++HO^-\to2H_2O}$ : coefficients 1 et 1.`, T`$c_A=\frac{0{,}1\times12}{20}=0{,}06$ mol/L.`],
      r: T`$c_A=0{,}06$ mol/L`
    },
    pieges: [
      T`Oublier le facteur de dilution.`,
      T`Oublier les coefficients stœchiométriques.`,
      T`Lire $V_E$ au mauvais endroit (début du saut au lieu de son milieu).`
    ],
    exos: [
      { d: 1, t: 'Acide fort', e: T`10 mL d'acide titrés par NaOH à 0,05 mol/L, $V_E=16$ mL. Concentration ?`,
        h: T`$c_AV_A=c_BV_E$.`,
        s: [T`$c_A=\frac{0{,}05\times16}{10}=0{,}08$ mol/L.`],
        r: T`$0{,}08$ mol/L`, n: 0.08, u: 'mol/L' },
      { d: 2, t: 'Titrage redox', e: T`20 mL de $\mathrm{Fe^{2+}}$ titrés par $\mathrm{MnO_4^-}$ à 0,02 mol/L ; $V_E=12$ mL. Concentration en $\mathrm{Fe^{2+}}$ ?`,
        h: T`$n(\mathrm{Fe^{2+}})=5\,n(\mathrm{MnO_4^-})$.`,
        s: [T`$n(\mathrm{MnO_4^-})=0{,}02\times0{,}012=2{,}4\times10^{-4}$ mol.`, T`$n(\mathrm{Fe^{2+}})=1{,}2\times10^{-3}$ mol.`, T`$c=\frac{1{,}2\times10^{-3}}{0{,}020}=0{,}06$ mol/L.`],
        r: T`$0{,}06$ mol/L`, n: 0.06, u: 'mol/L' },
      { d: 2, t: 'Vinaigre', e: T`Un vinaigre est dilué 10 fois. 10 mL de solution diluée sont titrés par NaOH à 0,1 mol/L : $V_E=14$ mL. Concentration du vinaigre ?`,
        h: T`Concentration diluée, puis × 10.`,
        s: [T`$c_{dil}=\frac{0{,}1\times14}{10}=0{,}14$ mol/L.`, T`$c=10\times0{,}14=1{,}4$ mol/L.`],
        r: T`$1{,}4$ mol/L`, n: 1.4, u: 'mol/L' },
      { d: 3, t: 'Teneur en acide', e: T`Masse d'acide éthanoïque ($M=60$ g/mol) dans 1 L de ce vinaigre ?`,
        h: T`$m=cVM$.`,
        s: [T`$m=1{,}4\times60=84$ g par litre.`],
        r: T`$84$ g`, n: 84, u: 'g' }
    ]
  },

  {
    id: 'lewis-polarite', matiere: 'chimie', niveau: 'Première', domaine: 'Constitution de la matière',
    titre: 'Schéma de Lewis, géométrie et polarité',
    resume: 'Doublets liants et non liants, géométrie des molécules, électronégativité, polarité, cohésion et solubilité.',
    motscles: 'lewis doublet géométrie électronégativité polarité liaison hydrogène solubilité van der waals',
    pourquoi: T`<p>Pourquoi l'eau dissout le sel mais pas l'huile ? Pourquoi l'eau bout à 100 °C alors qu'une molécule plus lourde comme $\mathrm{H_2S}$ est un gaz ? La réponse est dans la structure et la polarité des molécules : c'est la base de la conception des médicaments, des matériaux et des solvants.</p>`,
    cours: T`<h4>Schéma de Lewis</h4><p>On représente les électrons de valence en <b>doublets</b> : liants (entre deux atomes) et non liants. Chaque atome tend à avoir 8 électrons autour de lui (2 pour H).</p>
<h4>Géométrie</h4><p>Les doublets autour d'un atome central se repoussent : 4 doublets → tétraèdre ($\mathrm{CH_4}$), pyramide si 1 non liant ($\mathrm{NH_3}$), coudée si 2 non liants ($\mathrm{H_2O}$) ; 2 groupes → linéaire ($\mathrm{CO_2}$).</p>
<h4>Polarité</h4><p>Une liaison entre atomes d'électronégativités différentes est polarisée ($\delta^+$, $\delta^-$). Une molécule est polaire si les centres des charges partielles positives et négatives ne coïncident pas (dépend de la géométrie).</p>
<h4>Cohésion</h4><p>Interactions de Van der Waals, liaisons hydrogène (H lié à O, N ou F). « Qui se ressemble s'assemble » : les solvants polaires dissolvent les espèces polaires et ioniques.</p>`,
    formules: [
      { nom: 'Nombre de doublets', f: T`$$n_{doublets}=\frac{\text{total des électrons de valence}}{2}$$`,
        quand: T`Construire un schéma de Lewis.`,
        pas: T`Pour un ion, ajoute (anion) ou retire (cation) des électrons avant de diviser.` },
      { nom: 'Critère de polarité', f: T`$$\text{polaire}\iff\text{barycentres de }\delta^+\text{ et }\delta^-\text{ distincts}$$`,
        quand: T`Prévoir la solubilité et les températures de changement d'état.`,
        pas: T`Des liaisons polarisées ne suffisent pas : $\mathrm{CO_2}$ est linéaire et symétrique, donc apolaire.` }
    ],
    methode: [
      T`Compte les électrons de valence.`,
      T`Place les liaisons, puis complète avec les doublets non liants (octet).`,
      T`Déduis la géométrie autour de l'atome central.`,
      T`Conclus sur la polarité et la solubilité.`
    ],
    exemple: {
      e: T`Géométrie et polarité de l'eau.`,
      s: [T`O a 6 électrons de valence : 2 liaisons O–H et 2 doublets non liants.`, T`4 doublets autour de O, dont 2 non liants : molécule coudée.`, T`O plus électronégatif que H : liaisons polarisées, et la géométrie coudée ne les compense pas.`],
      r: T`Coudée et polaire`
    },
    pieges: [
      T`Oublier les doublets non liants (ils déterminent la géométrie).`,
      T`Conclure « polaire » uniquement d'après les liaisons.`,
      T`Mettre plus de 8 électrons autour de C, N ou O.`
    ],
    exos: [
      { d: 1, t: 'Ammoniac', e: T`Combien de doublets non liants sur l'azote dans $\mathrm{NH_3}$ ?`,
        h: T`N a 5 électrons de valence.`,
        s: [T`3 liaisons N–H utilisent 3 électrons de N ; il en reste 2, soit 1 doublet non liant.`, T`Géométrie pyramidale.`],
        r: T`$1$`, n: 1 },
      { d: 2, t: 'Dioxyde de carbone', e: T`$\mathrm{CO_2}$ est-elle polaire ?`,
        h: T`Géométrie linéaire O=C=O.`,
        s: [T`Les deux liaisons C=O sont polarisées.`, T`Molécule linéaire symétrique : les effets se compensent, elle est apolaire.`],
        r: T`Apolaire` },
      { d: 3, t: 'Température d’ébullition', e: T`Pourquoi l'eau bout-elle à 100 °C alors que $\mathrm{H_2S}$ (plus lourde) bout à −60 °C ?`,
        h: T`Quelle interaction existe entre molécules d'eau et pas entre molécules de $\mathrm{H_2S}$ ?`,
        s: [T`O est très électronégatif : les molécules d'eau forment des liaisons hydrogène entre elles.`, T`S est peu électronégatif : pas de liaison hydrogène notable.`, T`Il faut beaucoup plus d'énergie pour séparer les molécules d'eau.`],
        r: T`Les liaisons hydrogène entre molécules d'eau` },
      { d: 3, t: 'Extraction', e: T`Pour extraire le diiode d'une solution aqueuse, choisit-on l'éthanol ou le cyclohexane ? Pourquoi ?`,
        h: T`Le solvant ne doit pas être miscible à l'eau.`,
        s: [T`L'éthanol est miscible à l'eau : impossible de séparer deux phases.`, T`Le cyclohexane n'est pas miscible à l'eau et le diiode (apolaire) y est très soluble.`],
        r: T`Le cyclohexane` }
    ]
  },

  {
    id: 'chimie-organique', matiere: 'chimie', niveau: 'Première', domaine: 'Chimie organique',
    titre: 'Chimie organique : familles, nomenclature et synthèse',
    resume: 'Formules, groupes caractéristiques, nomenclature, combustions, rendement d’une synthèse.',
    motscles: 'organique alcool acide carboxylique ester aldéhyde cétone nomenclature combustion rendement synthèse',
    pourquoi: T`<p>Carburants, plastiques, médicaments, parfums, textiles : la chimie organique (chimie du carbone) est partout dans l'industrie. Savoir nommer une molécule et calculer un rendement est indispensable en génie chimique et en industrie pharmaceutique.</p>`,
    cours: T`<h4>Représentations</h4><p>Formule brute, développée, semi-développée, topologique (zigzag où chaque sommet est un carbone).</p>
<h4>Groupes caractéristiques</h4><ul><li>Hydroxyle –OH : alcool (suffixe -ol)</li><li>Carbonyle C=O : aldéhyde (-al) ou cétone (-one)</li><li>Carboxyle –COOH : acide carboxylique (acide …-oïque)</li><li>Ester –COO– ; amine –NH₂ ; amide –CONH–</li></ul>
<h4>Nomenclature</h4><p>Chaîne la plus longue contenant le groupe : méth- (1 C), éth- (2), prop- (3), but- (4), pent- (5), hex- (6). Numérotation pour donner le plus petit numéro au groupe.</p>
<h4>Combustion et synthèse</h4><p>Combustion complète d'un composé C, H, O : $\mathrm{CO_2}$ et $\mathrm{H_2O}$. Rendement d'une synthèse : $\eta=\frac{n_{obtenu}}{n_{max}}$.</p>`,
    formules: [
      { nom: 'Masse molaire', f: T`$$M(\mathrm{C}_x\mathrm{H}_y\mathrm{O}_z)=12x+y+16z$$`,
        quand: T`Convertir masses et quantités de matière.`,
        pas: T`Ne pas oublier les H et O de tous les groupes.` },
      { nom: 'Rendement', f: T`$$\eta=\frac{n_{obtenu}}{n_{max}}=\frac{m_{obtenue}}{m_{max}}$$`,
        quand: T`Évaluer l'efficacité d'une synthèse.`,
        pas: T`$n_{max}$ se calcule avec le réactif <b>limitant</b>, pas avec celui en excès.` }
    ],
    methode: [
      T`Repère le groupe caractéristique (famille).`,
      T`Trouve la chaîne principale et numérote.`,
      T`Pour une combustion : équilibre C, puis H, puis O.`,
      T`Pour un rendement : quantité maximale via le limitant.`
    ],
    exemple: {
      e: T`Équation de combustion complète de l'éthanol $\mathrm{C_2H_6O}$.`,
      s: [T`C : $2\,\mathrm{CO_2}$. H : $3\,\mathrm{H_2O}$.`, T`O à droite : $4+3=7$ ; à gauche 1 dans l'éthanol, donc $3\,\mathrm{O_2}$.`],
      r: T`$\mathrm{C_2H_6O+3O_2\longrightarrow2CO_2+3H_2O}$`
    },
    pieges: [
      T`Oublier l'O de la molécule organique lors de l'équilibrage.`,
      T`Mauvaise chaîne principale.`,
      T`Rendement calculé avec le réactif en excès.`
    ],
    exos: [
      { d: 1, t: 'Masse molaire', e: T`Masse molaire de l'éthanol $\mathrm{C_2H_6O}$ ?`,
        h: T`$2\times12+6+16$.`,
        s: [T`$M=24+6+16=46$ g/mol.`],
        r: T`$46$ g/mol`, n: 46, u: 'g/mol' },
      { d: 1, t: 'Nommer', e: T`Nommer $\mathrm{CH_3{-}CH_2{-}CH_2{-}OH}$.`,
        h: T`3 carbones, groupe –OH sur le carbone 1.`,
        s: [T`Chaîne de 3 C : prop- ; alcool en position 1.`],
        r: T`Propan-1-ol` },
      { d: 2, t: 'CO₂ émis', e: T`Masse de $\mathrm{CO_2}$ produite par la combustion de 46 g d'éthanol ?`,
        h: T`1 mol d'éthanol donne 2 mol de CO₂ ($M=44$).`,
        s: [T`$n=1$ mol d'éthanol → 2 mol de $\mathrm{CO_2}$.`, T`$m=2\times44=88$ g.`],
        r: T`$88$ g`, n: 88, u: 'g' },
      { d: 3, t: 'Rendement', e: T`Une estérification utilise 0,5 mol d'acide (limitant) et donne 0,335 mol d'ester. Rendement en % ?`,
        h: T`$\frac{0{,}335}{0{,}5}$.`,
        s: [T`$\eta=0{,}67=67\,\%$ (l'estérification est limitée par un équilibre).`],
        r: T`$67\,\%$`, n: 67, u: '%' },
      { d: 3, t: 'Énergie d’un combustible', e: T`La combustion du méthane libère 890 kJ/mol. Énergie libérée par 1 kg de méthane ($M=16$ g/mol) ?`,
        h: T`$n=1000/16$.`,
        s: [T`$n=62{,}5$ mol.`, T`$E=62{,}5\times890=55\,625$ kJ $\approx55{,}6$ MJ.`],
        r: T`$\approx5{,}56\times10^4$ kJ`, n: 55625, u: 'kJ' }
    ]
  }

  ]);
})();

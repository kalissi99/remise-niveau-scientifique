/* CHIMIE — TERMINALE SPÉCIALITÉ */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  {
    id: 'acide-base', matiere: 'chimie', niveau: 'Terminale', domaine: 'Transformations de la matière',
    titre: 'Acides, bases et pH',
    resume: 'Couples acide/base, pH, produit ionique de l’eau, Ka et pKa, diagrammes de prédominance, solutions tampons.',
    motscles: 'acide base ph pka ka brønsted tampon prédominance produit ionique',
    pourquoi: T`<p>Le pH contrôle la qualité de l'eau potable, la conservation des aliments, l'efficacité des médicaments, la corrosion et le fonctionnement du corps humain (sang à pH 7,4). Les solutions tampons stabilisent les procédés industriels et biologiques.</p>`,
    cours: T`<h4>Définitions (Brønsted)</h4><p>Un acide cède un proton $\mathrm{H^+}$, une base en capte un. Couple $\mathrm{AH/A^-}$. L'eau est ampholyte (couples $\mathrm{H_3O^+/H_2O}$ et $\mathrm{H_2O/HO^-}$).</p>
<h4>pH</h4><p>$\mathrm{pH}=-\log[\mathrm{H_3O^+}]$, donc $[\mathrm{H_3O^+}]=10^{-\mathrm{pH}}$. Produit ionique : $[\mathrm{H_3O^+}][\mathrm{HO^-}]=K_e=10^{-14}$ à 25 °C.</p>
<h4>Force des acides</h4><p>Acide fort : réaction totale avec l'eau, $\mathrm{pH}=-\log c$. Acide faible : réaction limitée, caractérisée par $K_a=\frac{[\mathrm{A^-}][\mathrm{H_3O^+}]}{[\mathrm{AH}]}$ et $\mathrm{p}K_a=-\log K_a$.</p>
<h4>Prédominance</h4><p>$\mathrm{pH}=\mathrm{p}K_a+\log\frac{[\mathrm{A^-}]}{[\mathrm{AH}]}$ : si $\mathrm{pH}<\mathrm{p}K_a$, AH prédomine ; sinon $\mathrm{A^-}$. Une solution avec AH et $\mathrm{A^-}$ en quantités voisines est un <b>tampon</b>.</p>`,
    formules: [
      { nom: 'Définition du pH', f: T`$$\mathrm{pH}=-\log[\mathrm{H_3O^+}]\qquad[\mathrm{H_3O^+}]=10^{-\mathrm{pH}}$$`,
        quand: T`Passer de la concentration au pH et inversement.`,
        pas: T`Une unité de pH correspond à un facteur 10 de concentration, pas à une différence de 1 mol/L.` },
      { nom: 'Produit ionique de l’eau', f: T`$$[\mathrm{H_3O^+}]\,[\mathrm{HO^-}]=10^{-14}$$`,
        quand: T`Solutions basiques : trouver $[\mathrm{HO^-}]$ ou le pH.`,
        pas: T`Valable à 25 °C seulement.` },
      { nom: 'Relation de Henderson', f: T`$$\mathrm{pH}=\mathrm{p}K_a+\log\frac{[\mathrm{A^-}]}{[\mathrm{AH}]}$$`,
        quand: T`Espèce prédominante, tampons, choix d'indicateurs.`,
        pas: T`Ne donne pas directement le pH d'un acide faible seul : il faut alors un tableau d'avancement avec $K_a$.` }
    ],
    methode: [
      T`Identifie le couple et la force de l'acide.`,
      T`Acide fort : $\mathrm{pH}=-\log c$. Faible : tableau d'avancement et $K_a$.`,
      T`Prédominance : compare pH et $\mathrm pK_a$.`,
      T`Vérifie : un acide a un pH inférieur à 7 à 25 °C.`
    ],
    exemple: {
      e: T`pH d'une solution d'acide chlorhydrique (acide fort) à 0,01 mol/L.`,
      s: [T`Réaction totale : $[\mathrm{H_3O^+}]=0{,}01=10^{-2}$ mol/L.`, T`$\mathrm{pH}=2$.`],
      r: T`$\mathrm{pH}=2$`
    },
    pieges: [
      T`Appliquer $\mathrm{pH}=-\log c$ à un acide faible.`,
      T`Oublier que diluer 10 fois un acide fort augmente le pH de 1.`,
      T`Confondre $K_a$ et $\mathrm pK_a$.`
    ],
    exos: [
      { d: 1, t: 'Calcul de pH', e: T`$[\mathrm{H_3O^+}]=10^{-3}$ mol/L. pH ?`,
        h: T`$-\log$.`,
        s: [T`$\mathrm{pH}=3$.`],
        r: T`$3$`, n: 3 },
      { d: 1, t: 'Solution basique', e: T`pH = 9. Calculer $[\mathrm{HO^-}]$.`,
        h: T`$[\mathrm{H_3O^+}]=10^{-9}$.`,
        s: [T`$[\mathrm{HO^-}]=\frac{10^{-14}}{10^{-9}}=10^{-5}$ mol/L.`],
        r: T`$10^{-5}$ mol/L`, n: 1e-5, u: 'mol/L' },
      { d: 2, t: 'Acide fort', e: T`pH d'un acide fort à $5\times10^{-3}$ mol/L ?`,
        h: T`$-\log(0{,}005)$.`,
        s: [T`$\mathrm{pH}=-\log(5\times10^{-3})\approx2{,}30$.`],
        r: T`$\approx2{,}30$`, n: 2.30 },
      { d: 2, t: 'Tampon', e: T`$\mathrm pK_a=4{,}8$ et $[\mathrm{A^-}]=10[\mathrm{AH}]$. pH ?`,
        h: T`$\log10=1$.`,
        s: [T`$\mathrm{pH}=4{,}8+1=5{,}8$.`],
        r: T`$5{,}8$`, n: 5.8 },
      { d: 3, t: 'Acide faible', e: T`pH d'une solution d'acide éthanoïque à 0,1 mol/L ($\mathrm pK_a=4{,}76$) ?`,
        h: T`$\frac{x^2}{c-x}=K_a$ ; $x\ll c$ permet $x\approx\sqrt{K_ac}$.`,
        s: [T`$K_a=10^{-4{,}76}\approx1{,}74\times10^{-5}$.`, T`$x\approx\sqrt{1{,}74\times10^{-6}}\approx1{,}32\times10^{-3}$ mol/L (bien petit devant 0,1 : approximation valable).`, T`$\mathrm{pH}\approx2{,}88$ (contre 1 pour un acide fort de même concentration).`],
        r: T`$\approx2{,}88$`, n: 2.88 },
      { d: 3, t: 'Dilution', e: T`On dilue 100 fois une solution d'acide fort de pH 2. Nouveau pH ?`,
        h: T`Concentration divisée par $10^2$.`,
        s: [T`$[\mathrm{H_3O^+}]$ passe de $10^{-2}$ à $10^{-4}$.`, T`$\mathrm{pH}=4$.`],
        r: T`$4$`, n: 4 }
    ]
  },

  {
    id: 'cinetique', matiere: 'chimie', niveau: 'Terminale', domaine: 'Transformations de la matière',
    titre: 'Cinétique chimique',
    resume: 'Facteurs cinétiques, vitesse volumique, temps de demi-réaction, loi de vitesse d’ordre 1, mécanismes.',
    motscles: 'cinétique vitesse catalyseur demi-réaction ordre 1 mécanisme intermédiaire',
    pourquoi: T`<p>Un médicament qui se dégrade, une réaction industrielle qu'on veut accélérer, un pot catalytique, la conservation des aliments au froid : la cinétique dit <b>à quelle vitesse</b> se fait une transformation. C'est aussi une application directe de l'équation $y'=ay$.</p>`,
    cours: T`<h4>Facteurs cinétiques</h4><p>Température, concentration des réactifs, catalyseur (accélère sans être consommé), surface de contact.</p>
<h4>Vitesse volumique</h4><p>Vitesse de disparition d'un réactif : $v=-\frac{d[A]}{dt}$ (pente de la tangente à la courbe $[A](t)$, au signe près). Le temps de demi-réaction $t_{1/2}$ est la durée pour atteindre la moitié de l'avancement final.</p>
<h4>Ordre 1</h4><p>Si $v=k[A]$ : $\frac{d[A]}{dt}=-k[A]$, d'où $[A]=[A]_0e^{-kt}$ et $t_{1/2}=\frac{\ln2}k$, indépendant de $[A]_0$.</p>
<h4>Mécanisme</h4><p>Une réaction se fait souvent en plusieurs actes élémentaires, avec des intermédiaires réactionnels ; le catalyseur intervient et est régénéré.</p>`,
    formules: [
      { nom: 'Vitesse de disparition', f: T`$$v=-\frac{d[A]}{dt}$$`,
        quand: T`Lire une vitesse sur une courbe (pente de la tangente).`,
        pas: T`Le signe moins rend la vitesse positive pour un réactif qui disparaît.` },
      { nom: 'Loi d’ordre 1', f: T`$$[A](t)=[A]_0\,e^{-kt}\qquad t_{1/2}=\frac{\ln2}{k}$$`,
        quand: T`Vitesse proportionnelle à la concentration ; temps de demi-réaction constant.`,
        pas: T`Si $t_{1/2}$ dépend de la concentration initiale, la réaction n'est pas d'ordre 1.` }
    ],
    methode: [
      T`Repère comment la vitesse dépend des concentrations.`,
      T`Ordre 1 : exponentielle décroissante.`,
      T`Pour un temps : isole l'exponentielle, applique $\ln$.`,
      T`Vérifie l'ordre de grandeur sur le graphique.`
    ],
    exemple: {
      e: T`Réaction d'ordre 1 avec $k=0{,}02$ s⁻¹. Temps de demi-réaction ?`,
      s: [T`$t_{1/2}=\frac{\ln2}{0{,}02}\approx34{,}7$ s.`],
      r: T`$\approx34{,}7$ s`
    },
    pieges: [
      T`Oublier que $t_{1/2}$ n'est indépendant de $[A]_0$ que pour l'ordre 1.`,
      T`Confondre vitesse de disparition et d'apparition (signe).`,
      T`Unités de $k$ incohérentes avec le temps.`
    ],
    exos: [
      { d: 1, t: 'Demi-réaction', e: T`$k=0{,}01$ min⁻¹ (ordre 1). $t_{1/2}$ ?`,
        h: T`$\ln2/k$.`,
        s: [T`$t_{1/2}=69{,}3$ min.`],
        r: T`$\approx69{,}3$ min`, n: 69.3, u: 'min' },
      { d: 2, t: 'Concentration restante', e: T`$[A]_0=0{,}5$ mol/L, $k=0{,}05$ s⁻¹. $[A]$ à $t=20$ s ?`,
        h: T`$0{,}5e^{-1}$.`,
        s: [T`$[A]=0{,}5e^{-0{,}05\times20}=0{,}5e^{-1}\approx0{,}184$ mol/L.`],
        r: T`$\approx0{,}184$ mol/L`, n: 0.184, u: 'mol/L' },
      { d: 2, t: 'Vitesse initiale', e: T`Même réaction : vitesse initiale de disparition ?`,
        h: T`$v=k[A]_0$.`,
        s: [T`$v=0{,}05\times0{,}5=0{,}025$ mol·L⁻¹·s⁻¹.`],
        r: T`$0{,}025$ mol/(L·s)`, n: 0.025 },
      { d: 3, t: 'Identifier l’ordre', e: T`Le temps de demi-réaction vaut 40 s quelle que soit la concentration initiale. Ordre et constante $k$ ?`,
        h: T`$t_{1/2}$ constant ⇒ ordre 1.`,
        s: [T`Ordre 1.`, T`$k=\frac{\ln2}{40}\approx0{,}0173$ s⁻¹.`],
        r: T`Ordre 1, $k\approx0{,}0173$ s⁻¹`, n: 0.0173 },
      { d: 3, t: '90 % de conversion', e: T`Avec $k=0{,}0173$ s⁻¹, durée pour consommer 90 % du réactif ?`,
        h: T`Il reste 10 % : $e^{-kt}=0{,}1$.`,
        s: [T`$t=\frac{\ln10}{k}\approx133$ s (environ 3,3 temps de demi-réaction).`],
        r: T`$\approx133$ s`, n: 133, u: 's' }
    ]
  },

  {
    id: 'equilibre-piles', matiere: 'chimie', niveau: 'Terminale', domaine: 'Transformations de la matière',
    titre: 'Équilibres chimiques, piles et électrolyse',
    resume: 'Taux d’avancement, quotient de réaction, constante d’équilibre, sens d’évolution, piles, capacité, électrolyse.',
    motscles: 'équilibre quotient de réaction constante sens d’évolution pile anode cathode capacité faraday électrolyse',
    pourquoi: T`<p>Prévoir si une réaction va se faire, et jusqu'où, est indispensable en chimie industrielle. Les piles et les batteries (téléphones, voitures électriques, stockage solaire) fonctionnent grâce à des réactions redox spontanées ; l'électrolyse permet de les recharger et de produire de l'hydrogène.</p>`,
    cours: T`<h4>Transformations non totales</h4><p>Taux d'avancement final $\tau=\frac{x_f}{x_{max}}$ ($\tau<1$ : équilibre).</p>
<h4>Quotient de réaction</h4><p>Pour $aA+bB\rightleftharpoons cC+dD$ en solution : $Q_r=\frac{[C]^c[D]^d}{[A]^a[B]^b}$ (solides et solvant exclus). À l'équilibre $Q_{r,eq}=K$.</p>
<h4>Sens d'évolution</h4><p>$Q_r<K$ : sens direct ; $Q_r>K$ : sens inverse ; $Q_r=K$ : équilibre.</p>
<h4>Piles</h4><p>Anode : oxydation (pôle −). Cathode : réduction (pôle +). Capacité : charge maximale débitée $Q=n(e^-)\,\mathcal F$, $\mathcal F=96\,500$ C/mol. Durée : $\Delta t=\frac QI$.</p>
<h4>Électrolyse</h4><p>Un générateur force une réaction non spontanée (recharge d'une batterie, dépôt de métal).</p>`,
    formules: [
      { nom: 'Quotient de réaction', f: T`$$Q_r=\frac{[C]^c\,[D]^d}{[A]^a\,[B]^b}$$`,
        quand: T`Prévoir le sens d'évolution en comparant à $K$.`,
        pas: T`Ne pas inclure l'eau solvant ni les solides.` },
      { nom: 'Capacité d’une pile', f: T`$$Q=n(e^-)\times\mathcal F=I\,\Delta t$$`,
        quand: T`Durée de fonctionnement, masse de métal consommée ou déposée.`,
        pas: T`$n(e^-)$ dépend du nombre d'électrons par atome (2 pour $\mathrm{Zn\to Zn^{2+}}$).` },
      { nom: 'Taux d’avancement', f: T`$$\tau=\frac{x_f}{x_{max}}$$`,
        quand: T`Caractériser une transformation limitée.`,
        pas: T`$\tau=1$ : transformation totale.` }
    ],
    methode: [
      T`Écris l'équation et l'expression de $Q_r$.`,
      T`Calcule $Q_{r,i}$ et compare à $K$.`,
      T`Pour une pile : demi-équations aux électrodes, polarité.`,
      T`Capacité : $n(e^-)$ puis $Q$, puis durée.`
    ],
    exemple: {
      e: T`Pile Daniell $\mathrm{Zn/Zn^{2+}//Cu^{2+}/Cu}$ avec $[\mathrm{Zn^{2+}}]=[\mathrm{Cu^{2+}}]$ ; $K=10^{37}$. Sens d'évolution ?`,
      s: [T`$Q_{r,i}=\frac{[\mathrm{Zn^{2+}}]}{[\mathrm{Cu^{2+}}]}=1$.`, T`$1<10^{37}$ : sens direct, le zinc est oxydé (anode, pôle −), le cuivre se dépose (cathode).`],
      r: T`Sens direct`
    },
    pieges: [
      T`Inclure les solides dans $Q_r$.`,
      T`Inverser anode et cathode.`,
      T`Oublier le nombre d'électrons échangés par atome.`
    ],
    exos: [
      { d: 1, t: 'Taux d’avancement', e: T`$x_f=0{,}03$ mol, $x_{max}=0{,}1$ mol. $\tau$ ?`,
        h: T`$x_f/x_{max}$.`,
        s: [T`$\tau=0{,}3$ : transformation limitée.`],
        r: T`$0{,}3$`, n: 0.3 },
      { d: 2, t: 'Sens d’évolution', e: T`$A+B\rightleftharpoons C+D$, $K=4$, avec $[C]=0{,}1$, $[D]=0{,}2$, $[A]=0{,}5$, $[B]=0{,}4$ mol/L. $Q_r$ et sens ?`,
        h: T`$\frac{0{,}1\times0{,}2}{0{,}5\times0{,}4}$.`,
        s: [T`$Q_r=\frac{0{,}02}{0{,}2}=0{,}1$.`, T`$0{,}1<4$ : sens direct.`],
        r: T`$Q_r=0{,}1$, sens direct`, n: 0.1 },
      { d: 2, t: 'Capacité', e: T`Une pile consomme 0,1 mol de zinc ($\mathrm{Zn\to Zn^{2+}+2e^-}$). Charge débitée ?`,
        h: T`$n(e^-)=0{,}2$ mol.`,
        s: [T`$Q=0{,}2\times96\,500=19\,300$ C.`],
        r: T`$19\,300$ C`, n: 19300, u: 'C' },
      { d: 3, t: 'Durée de fonctionnement', e: T`Cette pile débite 0,2 A. Durée de fonctionnement en heures ?`,
        h: T`$\Delta t=Q/I$.`,
        s: [T`$\Delta t=\frac{19\,300}{0{,}2}=96\,500$ s $\approx26{,}8$ h.`],
        r: T`$\approx26{,}8$ h`, n: 26.8, u: 'h' },
      { d: 3, t: 'Électrolyse', e: T`Électrolyse d'une solution de $\mathrm{Cu^{2+}}$ sous 2 A pendant 1 h. Masse de cuivre déposée ($M=63{,}5$ g/mol) ?`,
        h: T`$Q=7200$ C ; 2 électrons par Cu.`,
        s: [T`$n(e^-)=\frac{7200}{96\,500}\approx0{,}0746$ mol.`, T`$n(\mathrm{Cu})=0{,}0373$ mol, $m\approx2{,}37$ g.`],
        r: T`$\approx2{,}37$ g`, n: 2.37, u: 'g' }
    ]
  }

  ]);
})();

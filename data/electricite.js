/* PHYSIQUE — ÉLECTRICITÉ */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  /* ================================================================ */
  {
    id: 'elec-bases', matiere: 'physique', niveau: 'Seconde', domaine: 'Électricité',
    titre: 'Lois de base : Ohm et Kirchhoff',
    resume: 'Tension, courant, loi d’Ohm, loi des nœuds, loi des mailles, puissance. Les fondations de tout circuit.',
    motscles: 'tension courant ohm kirchhoff noeud maille puissance joule',
    pourquoi: T`<p>Avec seulement deux lois (nœuds et mailles) et la loi d'Ohm, on peut analyser n'importe quel circuit de résistances. Tout le reste (électronique, électrotechnique, réseaux électriques) est construit sur ces fondations.</p>`,
    cours: T`<h4>Courant et tension</h4><p>Le <b>courant</b> $I$ (ampères, A) est un débit de charges : $I=\frac{dq}{dt}$. Il se mesure <b>en série</b>. La <b>tension</b> $U$ (volts, V) est une différence de potentiel entre deux points. Elle se mesure <b>en parallèle</b>.</p>
<p>Analogie : le courant est le débit d'eau dans un tuyau, la tension est la différence de hauteur qui fait couler l'eau.</p>
<h4>Conventions</h4><p>Convention <b>récepteur</b> : flèche de $U$ opposée à celle de $I$ (résistances). Convention <b>générateur</b> : flèches dans le même sens (piles).</p>
<h4>Lois de Kirchhoff</h4><ul><li><b>Nœuds</b> : la somme des courants qui arrivent = la somme des courants qui partent (la charge ne s'accumule pas).</li><li><b>Mailles</b> : la somme algébrique des tensions le long d'une boucle fermée est nulle (on revient au même potentiel).</li></ul>`,
    formules: [
      { nom: 'Loi d’Ohm', f: T`$$U=R\,I$$`,
        quand: T`Pour un <b>conducteur ohmique</b> (résistance), en convention récepteur.`,
        pas: T`Ne s'applique pas à une diode, une lampe à fortes variations de température, un condensateur ou une bobine. En convention générateur, $U=-RI$.` },
      { nom: 'Loi des nœuds', f: T`$$\sum I_{\text{entrants}}=\sum I_{\text{sortants}}$$`,
        quand: T`À chaque point de jonction de plusieurs fils, pour relier les courants entre eux.`,
        pas: T`Ne s'applique pas aux tensions. Si un courant trouvé est négatif, c'est juste qu'il circule dans l'autre sens que ta flèche.` },
      { nom: 'Loi des mailles', f: T`$$\sum_{\text{maille}}\pm U_k=0$$`,
        quand: T`Sur chaque boucle fermée, pour relier les tensions. On parcourt la maille dans un sens : $+U$ si la flèche est dans le sens du parcours, $-U$ sinon.`,
        pas: T`L'erreur classique est un signe faux. Dessine toujours toutes les flèches de tension avant d'écrire la loi.` },
      { nom: 'Puissance électrique', f: T`$$P=UI=RI^2=\frac{U^2}{R}$$`,
        quand: T`$P=UI$ toujours. $RI^2$ si tu connais le courant, $\frac{U^2}R$ si tu connais la tension (résistance seulement).`,
        pas: T`Les trois formes sont identiques pour une résistance : choisis celle qui utilise les données, ça évite un calcul intermédiaire.` }
    ],
    methode: [
      T`Dessine le circuit, nomme les nœuds et les courants (choisis un sens arbitraire).`,
      T`Place les flèches de tension (convention récepteur pour les résistances).`,
      T`Écris les lois des nœuds puis des mailles, et la loi d'Ohm pour chaque résistance.`,
      T`Résous le système. Un résultat négatif = sens réel opposé à ta flèche.`
    ],
    exemple: {
      e: T`Une résistance de 100 Ω est branchée sur une pile de 12 V. Courant et puissance dissipée ?`,
      s: [T`Loi d'Ohm : $I=\frac UR=\frac{12}{100}=0{,}12$ A.`, T`Puissance : on connaît $U$ et $R$, donc $P=\frac{U^2}R=\frac{144}{100}$.`, T`Vérification : $UI=12\times0{,}12=1{,}44$ W. Même résultat.`],
      r: T`$I=0{,}12\ \text{A}$, $P=1{,}44\ \text{W}$`
    },
    pieges: [
      T`Oublier les préfixes : $\text{k}\Omega=10^3\ \Omega$, $\text{mA}=10^{-3}$ A.`,
      T`Brancher un ampèremètre en parallèle (il court-circuite le montage).`,
      T`Mauvais signe dans la loi des mailles.`
    ],
    exos: [
      { d: 1, t: 'Loi d’Ohm', e: T`Quel courant (en A) traverse une résistance de 220 Ω soumise à 5 V ?`,
        h: T`$I=U/R$.`,
        s: [T`$I=\frac5{220}\approx0{,}0227$ A $=22{,}7$ mA.`],
        r: T`$I\approx22{,}7\ \text{mA}$`, n: 0.0227, u: 'A' },
      { d: 1, t: 'Loi des nœuds', e: T`À un nœud arrivent 3 A et 2 A. Il en part $I_1=1{,}5$ A et $I_2$. Calculer $I_2$.`,
        h: T`Entrants = sortants.`,
        s: [T`$3+2=1{,}5+I_2$.`, T`$I_2=3{,}5$ A.`],
        r: T`$I_2=3{,}5\ \text{A}$`, n: 3.5, u: 'A' },
      { d: 2, t: 'Lampe du salon', e: T`Une lampe de 60 W fonctionne sous 230 V. Calculer sa résistance en fonctionnement.`,
        h: T`Quelle forme de la puissance relie $P$, $U$ et $R$ ?`,
        s: [T`On connaît $P$ et $U$, on cherche $R$ : $P=\frac{U^2}{R}$.`, T`$R=\frac{U^2}P=\frac{52\,900}{60}\approx882\ \Omega$.`, T`(Et $I=\frac PU\approx0{,}26$ A.)`],
        r: T`$R\approx882\ \Omega$`, n: 882, u: 'Ω' },
      { d: 2, t: 'Loi des mailles', e: T`Un générateur de 12 V alimente deux résistances en série. La tension aux bornes de $R_1$ est 4 V. Tension aux bornes de $R_2$ ?`,
        h: T`Dans la maille : $E-U_1-U_2=0$.`,
        s: [T`Loi des mailles : $E=U_1+U_2$.`, T`$U_2=12-4=8$ V.`],
        r: T`$U_2=8\ \text{V}$`, n: 8, u: 'V' },
      { d: 3, t: 'Énergie consommée', e: T`Une bouilloire de 2000 W fonctionne pendant 5 minutes. Énergie consommée en joules, puis en kWh ?`,
        h: T`$E=P\times\Delta t$, avec $\Delta t$ en secondes.`,
        s: [T`$\Delta t=5\times60=300$ s.`, T`$E=2000\times300=600\,000$ J.`, T`En kWh : $2\ \text{kW}\times\frac{5}{60}\ \text{h}\approx0{,}167$ kWh.`],
        r: T`$600\ \text{kJ}\approx0{,}167\ \text{kWh}$`, n: 600000, u: 'J' }
    ]
  },

  /* ================================================================ */
  {
    id: 'associations', matiere: 'physique', niveau: 'Première', domaine: 'Électricité',
    titre: 'Associations de résistances et diviseurs',
    resume: 'Série, parallèle, diviseur de tension et de courant, modèle de Thévenin.',
    motscles: 'série parallèle résistance équivalente diviseur tension courant thévenin',
    pourquoi: T`<p>Les circuits réels contiennent beaucoup de résistances. Les regrouper en une seule <b>résistance équivalente</b> simplifie tout. Le diviseur de tension est partout : capteurs, réglage de volume, polarisation de transistors, entrées de microcontrôleurs (Arduino).</p>`,
    cours: T`<h4>Série</h4><p>Dipôles traversés par le <b>même courant</b> (les uns à la suite des autres). Les résistances s'additionnent.</p>
<h4>Parallèle (dérivation)</h4><p>Dipôles soumis à la <b>même tension</b> (branchés entre les deux mêmes nœuds). Ce sont les inverses qui s'additionnent : la résistance équivalente est <b>plus petite</b> que la plus petite.</p>
<h4>Thévenin</h4><p>Tout circuit linéaire vu de deux bornes se comporte comme un générateur $E_{th}$ en série avec $R_{th}$. $E_{th}$ = tension à vide, $R_{th}$ = résistance vue des bornes, sources éteintes (générateur de tension remplacé par un fil).</p>`,
    formules: [
      { nom: 'Série et parallèle', f: T`$$R_{\text{série}}=R_1+R_2+\dots\qquad \frac1{R_{//}}=\frac1{R_1}+\frac1{R_2}\ \Rightarrow\ R_{//}=\frac{R_1R_2}{R_1+R_2}$$`,
        quand: T`Série : même courant. Parallèle : même tension (mêmes deux nœuds).`,
        pas: T`La formule « produit sur somme » ne marche que pour <b>deux</b> résistances. Pour trois, utilise la somme des inverses.` },
      { nom: 'Diviseur de tension', f: T`$$U_2=E\,\frac{R_2}{R_1+R_2}$$`,
        quand: T`Résistances <b>en série</b>, et <b>rien</b> n'est branché en sortie (ou une charge qui ne tire pas de courant).`,
        pas: T`Si une charge $R_L$ est branchée sur $R_2$, remplace $R_2$ par $R_2/\!/R_L$ dans la formule, sinon le résultat est faux.` },
      { nom: 'Diviseur de courant', f: T`$$I_1=I\,\frac{R_2}{R_1+R_2}$$`,
        quand: T`Deux résistances <b>en parallèle</b>, courant total connu.`,
        pas: T`Au numérateur se trouve l'<b>autre</b> résistance : le courant préfère le chemin le moins résistant.` },
      { nom: 'Modèle de Thévenin', f: T`$$U=E_{th}-R_{th}\,I$$`,
        quand: T`On étudie ce qui se passe sur une charge variable branchée à un circuit compliqué.`,
        pas: T`$R_{th}$ se calcule sources <b>éteintes</b> : générateur de tension → fil, générateur de courant → circuit ouvert.` }
    ],
    methode: [
      T`Repère les groupes : même courant (série) ou mêmes nœuds (parallèle).`,
      T`Réduis de l'intérieur vers l'extérieur, en redessinant à chaque étape.`,
      T`Calcule le courant total avec $R_{eq}$, puis remonte avec les diviseurs.`,
      T`Vérifie avec la loi des mailles sur le circuit d'origine.`
    ],
    exemple: {
      e: T`$E=12$ V, $R_1=1\ \text{k}\Omega$ et $R_2=2\ \text{k}\Omega$ en série. Tension aux bornes de $R_2$ ?`,
      s: [T`Série, rien en sortie → diviseur de tension.`, T`$U_2=12\times\frac{2}{1+2}=8$ V. (Les k s'annulent dans le rapport.)`, T`Vérification : $I=\frac{12}{3000}=4$ mA, $U_2=2000\times0{,}004=8$ V ✔`],
      r: T`$U_2=8\ \text{V}$`
    },
    pieges: [
      T`Deux résistances qui se touchent ne sont pas forcément en série : vérifie qu'aucun fil ne part entre elles.`,
      T`Appliquer le diviseur de tension alors qu'une charge est branchée.`,
      T`Oublier que $R_{//}$ est plus petite que chaque résistance : bon moyen de détecter une erreur.`
    ],
    exos: [
      { d: 1, t: 'Série', e: T`Résistance équivalente de 100 Ω, 220 Ω et 330 Ω en série ?`,
        h: T`Somme.`,
        s: [T`$100+220+330=650\ \Omega$.`],
        r: T`$650\ \Omega$`, n: 650, u: 'Ω' },
      { d: 1, t: 'Parallèle', e: T`Résistance équivalente de 6 Ω et 3 Ω en parallèle ?`,
        h: T`Produit sur somme.`,
        s: [T`$\frac{6\times3}{6+3}=\frac{18}9=2\ \Omega$.`, T`Contrôle : $2<3$, plus petit que la plus petite ✔`],
        r: T`$2\ \Omega$`, n: 2, u: 'Ω' },
      { d: 2, t: 'Réseau mixte', e: T`$R_1=4\ \Omega$ est en série avec l'ensemble ($R_2=6\ \Omega$ en parallèle avec $R_3=12\ \Omega$). Résistance équivalente, puis courant total sous 16 V ?`,
        h: T`D'abord le groupe parallèle, puis la série.`,
        s: [T`$R_2/\!/R_3=\frac{72}{18}=4\ \Omega$.`, T`$R_{eq}=4+4=8\ \Omega$.`, T`$I=\frac{16}{8}=2$ A.`],
        r: T`$R_{eq}=8\ \Omega$, $I=2\ \text{A}$`, n: 8, u: 'Ω' },
      { d: 2, t: 'Diviseur de courant', e: T`Un courant de 3 A se partage entre $R_1=10\ \Omega$ et $R_2=20\ \Omega$ en parallèle. Courant dans $R_1$ ?`,
        h: T`L'autre résistance au numérateur.`,
        s: [T`$I_1=3\times\frac{20}{30}=2$ A.`, T`Logique : $R_1$ est plus petite, elle prend le plus gros courant. $I_2=1$ A et $10\times2=20\times1$ (même tension) ✔`],
        r: T`$I_1=2\ \text{A}$`, n: 2, u: 'A' },
      { d: 3, t: 'Diviseur chargé', e: T`$E=10$ V, $R_1=R_2=1\ \text{k}\Omega$. On branche une charge $R_L=1\ \text{k}\Omega$ aux bornes de $R_2$. Quelle tension aux bornes de la charge ?`,
        h: T`$R_2$ et $R_L$ sont en parallèle. Remplace-les par leur équivalent avant d'appliquer le diviseur.`,
        s: [T`Sans charge, on aurait 5 V. Mais la charge tire du courant : la formule simple ne s'applique plus.`, T`$R_2/\!/R_L=500\ \Omega$.`, T`Diviseur : $U=10\times\frac{500}{1000+500}\approx3{,}33$ V.`, T`Par Thévenin : $E_{th}=5$ V, $R_{th}=R_1/\!/R_2=500\ \Omega$, donc $U=5\times\frac{1000}{1500}=3{,}33$ V. Même résultat.`],
        r: T`$U\approx3{,}33\ \text{V}$`, n: 3.33, u: 'V' }
    ]
  },

  /* ================================================================ */
  {
    id: 'circuit-rc', matiere: 'physique', niveau: 'Terminale', domaine: 'Électricité',
    titre: 'Condensateur et circuit RC',
    resume: 'Charge et décharge d’un condensateur, constante de temps, énergie stockée.',
    motscles: 'condensateur capacité rc constante de temps charge décharge tau',
    pourquoi: T`<p>Le condensateur stocke de l'énergie et introduit le <b>temps</b> dans les circuits : flash d'appareil photo, temporisations, filtres, alimentations, mémoire des ordinateurs. C'est aussi la première vraie équation différentielle de l'électricité.</p>`,
    cours: T`<h4>Le condensateur</h4><p>Deux armatures séparées par un isolant. Il accumule une charge $q=Cu$ ($C$ en farads, souvent en µF ou nF).</p>
<p>Comme $i=\frac{dq}{dt}$ : $i=C\frac{du}{dt}$. Conséquence : la tension aux bornes d'un condensateur ne peut pas sauter brusquement (il faudrait un courant infini). C'est la <b>continuité de la tension</b>.</p>
<h4>Charge sous une tension E</h4><p>Loi des mailles : $E=Ri+u=RC\frac{du}{dt}+u$. Avec $\tau=RC$ : $u(t)=E\left(1-e^{-t/\tau}\right)$.</p>
<p>À $t=\tau$ : 63 % de $E$. À $t=5\tau$ : plus de 99 % (on considère la charge terminée).</p>
<h4>Décharge</h4><p>$u(t)=U_0\,e^{-t/\tau}$.</p>`,
    formules: [
      { nom: 'Relation courant-tension', f: T`$$q=Cu\qquad i=C\frac{du}{dt}$$`,
        quand: T`Pour écrire l'équation différentielle d'un circuit avec condensateur, ou trouver le courant à partir de $u(t)$.`,
        pas: T`Pas de loi d'Ohm pour un condensateur : $u\neq Ri$. En régime permanent continu, $\frac{du}{dt}=0$ donc $i=0$ : il se comporte comme un interrupteur ouvert.` },
      { nom: 'Constante de temps', f: T`$$\tau=RC$$`,
        quand: T`Ordre de grandeur de la durée de charge ou de décharge. Unité : la seconde ($\Omega\times\text{F}=\text{s}$).`,
        pas: T`$R$ est la résistance <b>vue par le condensateur</b>, pas forcément la seule résistance du circuit.` },
      { nom: 'Charge et décharge', f: T`$$\text{charge : } u=E\left(1-e^{-t/\tau}\right)\qquad \text{décharge : } u=U_0e^{-t/\tau}$$`,
        quand: T`Condensateur initialement déchargé alimenté par $E$ (charge) ; condensateur chargé relié à une résistance seule (décharge).`,
        pas: T`Si le condensateur n'est pas déchargé au départ, utilise la forme générale $u=E+(u(0)-E)e^{-t/\tau}$.` },
      { nom: 'Énergie stockée', f: T`$$\mathcal E=\tfrac12Cu^2$$`,
        quand: T`Énergie disponible dans le condensateur (flash, défibrillateur, supercondensateur).`,
        pas: T`L'énergie dépend de $u^2$ : doubler la tension = 4 fois plus d'énergie.` }
    ],
    methode: [
      T`Loi des mailles avec $u_R=Ri$ et $i=C\frac{du}{dt}$.`,
      T`Mets sous la forme $\tau\frac{du}{dt}+u=K$.`,
      T`Solution $u=K+(u(0)-K)e^{-t/\tau}$ (continuité de $u$ pour $u(0)$).`,
      T`Pour une durée : isole l'exponentielle puis applique $\ln$.`
    ],
    exemple: {
      e: T`$R=10\ \text{k}\Omega$, $C=100\ \mu\text{F}$, $E=10$ V. Calculer $\tau$ et la tension à $t=\tau$.`,
      s: [T`$\tau=10^4\times100\times10^{-6}=1$ s.`, T`$u(\tau)=10(1-e^{-1})=10\times0{,}632$.`, T`C'est toujours 63 % de $E$ à $t=\tau$, quelles que soient les valeurs : c'est une méthode pour lire $\tau$ sur une courbe.`],
      r: T`$\tau=1\ \text{s}$, $u(\tau)\approx6{,}32\ \text{V}$`
    },
    pieges: [
      T`µF = $10^{-6}$ F, nF = $10^{-9}$ F, pF = $10^{-12}$ F.`,
      T`Croire que le courant est continu à travers un condensateur : c'est la <b>tension</b> qui est continue, le courant peut sauter.`,
      T`Oublier que $i\to0$ en fin de charge.`
    ],
    exos: [
      { d: 1, t: 'Constante de temps', e: T`$R=4{,}7\ \text{k}\Omega$, $C=10\ \mu\text{F}$. Calculer $\tau$ en secondes.`,
        h: T`$\tau=RC$ en unités SI.`,
        s: [T`$\tau=4{,}7\times10^3\times10\times10^{-6}=4{,}7\times10^{-2}$ s.`],
        r: T`$\tau=0{,}047\ \text{s}=47\ \text{ms}$`, n: 0.047, u: 's' },
      { d: 1, t: 'Charge stockée', e: T`Charge (en C) d'un condensateur de 220 µF sous 9 V ?`,
        h: T`$q=Cu$.`,
        s: [T`$q=220\times10^{-6}\times9=1{,}98\times10^{-3}$ C.`],
        r: T`$q\approx1{,}98\ \text{mC}$`, n: 0.00198, u: 'C' },
      { d: 2, t: 'Tension pendant la charge', e: T`Charge sous $E=12$ V avec $\tau=2$ s, condensateur initialement déchargé. Tension à $t=3$ s ?`,
        h: T`$u=E(1-e^{-t/\tau})$.`,
        s: [T`$u(3)=12\left(1-e^{-1{,}5}\right)$.`, T`$e^{-1{,}5}\approx0{,}223$, donc $u\approx12\times0{,}777\approx9{,}32$ V.`],
        r: T`$u\approx9{,}32\ \text{V}$`, n: 9.32, u: 'V' },
      { d: 2, t: 'Énergie', e: T`Énergie stockée dans un condensateur de 1000 µF chargé sous 50 V ?`,
        h: T`$\frac12Cu^2$.`,
        s: [T`$\mathcal E=\frac12\times10^{-3}\times2500=1{,}25$ J.`],
        r: T`$1{,}25\ \text{J}$`, n: 1.25, u: 'J' },
      { d: 3, t: 'Établir et exploiter l’équation', e: T`Établir l'équation différentielle de la charge d'un condensateur à travers $R$ sous $E$. Puis : au bout de combien de $\tau$ atteint-on 99 % de $E$ ?`,
        h: T`Loi des mailles $E=Ri+u$ avec $i=C\frac{du}{dt}$. Ensuite : $1-e^{-t/\tau}=0{,}99$.`,
        s: [T`Maille : $E=u_R+u=Ri+u$.`, T`$i=C\frac{du}{dt}$ ⇒ $RC\frac{du}{dt}+u=E$.`, T`$0{,}99E=E(1-e^{-t/\tau})\Rightarrow e^{-t/\tau}=0{,}01$.`, T`$t=\tau\ln100\approx4{,}6\,\tau$. D'où la règle pratique « charge finie après $5\tau$ ».`],
        r: T`$RC\,\dot u+u=E$ ; $t\approx4{,}6\,\tau$`, n: 4.6, u: '× τ' },
      { d: 3, t: 'Durée de décharge', e: T`Un condensateur chargé à 10 V se décharge avec $\tau=0{,}5$ s. Au bout de combien de temps la tension vaut-elle 2 V ?`,
        h: T`$10e^{-t/0{,}5}=2$, puis $\ln$.`,
        s: [T`$e^{-t/\tau}=0{,}2$.`, T`$-\frac t\tau=\ln0{,}2=-\ln5$.`, T`$t=0{,}5\ln5\approx0{,}805$ s.`],
        r: T`$t\approx0{,}805\ \text{s}$`, n: 0.805, u: 's' }
    ]
  },

  /* ================================================================ */
  {
    id: 'rl-rlc', matiere: 'physique', niveau: 'Supérieur', domaine: 'Électricité',
    titre: 'Bobine, circuits RL et RLC',
    resume: 'Inductance, continuité du courant, oscillations électriques et régimes d’amortissement.',
    motscles: 'bobine inductance rl rlc oscillation amortissement résistance critique lc',
    pourquoi: T`<p>Les bobines sont dans les moteurs, transformateurs, alimentations à découpage et antennes. Le circuit RLC est l'<b>exact équivalent électrique</b> du ressort amorti : $L\leftrightarrow m$, $R\leftrightarrow h$, $\frac1C\leftrightarrow k$. Si tu as compris les oscillateurs mécaniques, tu as déjà compris ce chapitre.</p>`,
    cours: T`<h4>La bobine</h4><p>Une bobine d'inductance $L$ (henrys, H) s'oppose aux variations du courant : $u_L=L\frac{di}{dt}$. Conséquence : le <b>courant</b> dans une bobine est continu (il ne peut pas sauter). En régime permanent continu, elle se comporte comme un fil.</p>
<h4>Circuit RL</h4><p>$E=Ri+L\frac{di}{dt}$, soit $\frac LR\frac{di}{dt}+i=\frac ER$. $\tau=\frac LR$ et $i(t)=\frac ER\left(1-e^{-t/\tau}\right)$.</p>
<h4>Circuit RLC série</h4><p>Maille : $E=Ri+L\frac{di}{dt}+u_C$ avec $i=C\frac{du_C}{dt}$ ⇒ $LC\ddot u_C+RC\dot u_C+u_C=E$.</p>
<p>Forme canonique : $\ddot u+\frac{\omega_0}Q\dot u+\omega_0^2u=\omega_0^2E$ avec $\omega_0=\frac1{\sqrt{LC}}$ et $Q=\frac1R\sqrt{\frac LC}$.</p>`,
    formules: [
      { nom: 'Loi de la bobine', f: T`$$u_L=L\frac{di}{dt}\qquad \mathcal E=\tfrac12Li^2$$`,
        quand: T`Écrire l'équation d'un circuit avec bobine ; énergie magnétique stockée.`,
        pas: T`Ouvrir brutalement un circuit inductif crée une très forte tension (étincelle) : c'est la continuité du courant qui l'impose.` },
      { nom: 'Constante de temps RL', f: T`$$\tau=\frac LR$$`,
        quand: T`Établissement ou rupture du courant dans un circuit RL.`,
        pas: T`Ce n'est pas $RL$ ! Vérifie les unités : $\frac{\text{H}}{\Omega}=\text{s}$.` },
      { nom: 'Pulsation propre LC', f: T`$$\omega_0=\frac1{\sqrt{LC}}\qquad f_0=\frac1{2\pi\sqrt{LC}}$$`,
        quand: T`Fréquence d'oscillation d'un circuit LC (ou RLC faiblement amorti), fréquence de résonance.`,
        pas: T`Avec résistance, les oscillations sont amorties et la pseudo-période est un peu plus grande.` },
      { nom: 'Résistance critique', f: T`$$R_c=2\sqrt{\frac LC}$$`,
        quand: T`Savoir le régime : $R<R_c$ pseudo-périodique (oscille), $R=R_c$ critique (retour le plus rapide), $R>R_c$ apériodique.`,
        pas: T`Vient du discriminant de $LCr^2+RCr+1=0$ : $\Delta=R^2C^2-4LC=0$. Si tu l'oublies, refais le discriminant.` }
    ],
    methode: [
      T`Loi des mailles avec $u_R=Ri$, $u_L=L\frac{di}{dt}$, $i=C\frac{du_C}{dt}$.`,
      T`Choisis une seule inconnue ($u_C$ ou $i$) et élimine les autres.`,
      T`Forme canonique, équation caractéristique, régime.`,
      T`Conditions initiales : continuité de $u_C$ et de $i_L$.`
    ],
    exemple: {
      e: T`Circuit RL : $L=0{,}1$ H, $R=10\ \Omega$, $E=5$ V. Constante de temps et courant final ?`,
      s: [T`$\tau=\frac LR=\frac{0{,}1}{10}=0{,}01$ s $=10$ ms.`, T`En régime permanent, $\frac{di}{dt}=0$ : la bobine est un fil. Donc $I_\infty=\frac ER=0{,}5$ A.`],
      r: T`$\tau=10\ \text{ms}$, $I_\infty=0{,}5\ \text{A}$`
    },
    pieges: [
      T`Écrire $\tau=RL$ au lieu de $\frac LR$.`,
      T`Oublier que c'est le <b>courant</b> qui est continu dans une bobine (et la <b>tension</b> dans un condensateur).`,
      T`Mélanger $\omega_0$ (rad/s) et $f_0$ (Hz).`
    ],
    exos: [
      { d: 1, t: 'Constante de temps RL', e: T`$L=0{,}5$ H et $R=100\ \Omega$. Calculer $\tau$ en secondes.`,
        h: T`$\tau=L/R$.`,
        s: [T`$\tau=\frac{0{,}5}{100}=5\times10^{-3}$ s.`],
        r: T`$\tau=5\ \text{ms}$`, n: 0.005, u: 's' },
      { d: 1, t: 'Fréquence propre LC', e: T`$L=10$ mH, $C=1\ \mu\text{F}$. Fréquence propre $f_0$ en Hz ?`,
        h: T`$LC=10^{-2}\times10^{-6}=10^{-8}$.`,
        s: [T`$\omega_0=\frac1{\sqrt{10^{-8}}}=10^4$ rad/s.`, T`$f_0=\frac{\omega_0}{2\pi}\approx1592$ Hz.`],
        r: T`$f_0\approx1{,}59\ \text{kHz}$`, n: 1592, u: 'Hz' },
      { d: 2, t: 'Établissement du courant', e: T`Circuit RL : $E=12$ V, $R=6\ \Omega$, $L=0{,}3$ H, courant initial nul. Courant à $t=\tau$ ?`,
        h: T`$i=\frac ER(1-e^{-t/\tau})$ ; à $t=\tau$, 63 %.`,
        s: [T`$I_\infty=2$ A, $\tau=0{,}05$ s.`, T`$i(\tau)=2(1-e^{-1})\approx1{,}26$ A.`],
        r: T`$i\approx1{,}26\ \text{A}$`, n: 1.264, u: 'A' },
      { d: 2, t: 'Résistance critique', e: T`$L=10$ mH, $C=1\ \mu\text{F}$. Calculer la résistance critique.`,
        h: T`$R_c=2\sqrt{L/C}$.`,
        s: [T`$\frac LC=\frac{10^{-2}}{10^{-6}}=10^4$.`, T`$R_c=2\times100=200\ \Omega$.`],
        r: T`$R_c=200\ \Omega$`, n: 200, u: 'Ω' },
      { d: 3, t: 'Équation du RLC et régime', e: T`Établir l'équation différentielle vérifiée par $u_C$ dans un RLC série alimenté par $E$. Avec $L=10$ mH, $C=1\ \mu$F et $R=50\ \Omega$, quel est le régime ?`,
        h: T`Maille + $i=C\dot u_C$. Puis compare $R$ et $R_c$.`,
        s: [T`$E=Ri+L\frac{di}{dt}+u_C$ et $i=C\dot u_C$, $\frac{di}{dt}=C\ddot u_C$.`, T`$LC\ddot u_C+RC\dot u_C+u_C=E$.`, T`$R_c=200\ \Omega$ (exercice précédent) et $R=50<R_c$.`, T`Régime <b>pseudo-périodique</b> : la tension oscille autour de $E$ en s'amortissant.`],
        r: T`$LC\ddot u_C+RC\dot u_C+u_C=E$ ; pseudo-périodique` },
      { d: 3, t: 'Énergie magnétique', e: T`Énergie stockée dans une bobine de 0,2 H parcourue par 3 A ?`,
        h: T`$\frac12Li^2$.`,
        s: [T`$\mathcal E=\frac12\times0{,}2\times9=0{,}9$ J.`, T`Analogie : $\frac12Li^2\leftrightarrow\frac12mv^2$ (énergie cinétique).`],
        r: T`$0{,}9\ \text{J}$`, n: 0.9, u: 'J' }
    ]
  },

  /* ================================================================ */
  {
    id: 'sinusoidal', matiere: 'physique', niveau: 'Supérieur', domaine: 'Électricité',
    titre: 'Régime sinusoïdal et impédances',
    resume: 'Valeurs efficaces, impédances complexes, déphasage, puissance, filtres et résonance.',
    motscles: 'alternatif sinusoïdal impédance complexe efficace déphasage filtre résonance fréquence de coupure',
    pourquoi: T`<p>Le réseau électrique (230 V, 50 Hz), l'audio, les télécoms : tout fonctionne en sinusoïdal. Grâce aux nombres complexes, on remplace les équations différentielles par une simple « loi d'Ohm complexe » $\underline U=\underline Z\,\underline I$. C'est le chapitre où maths et électricité se rejoignent complètement.</p>`,
    cours: T`<h4>Signal sinusoïdal</h4><p>$u(t)=U_m\cos(\omega t+\varphi)$. $U_m$ amplitude, $\omega=2\pi f$ pulsation, $\varphi$ phase. Valeur efficace $U=\frac{U_m}{\sqrt2}$ (le « 230 V » du secteur est une valeur efficace).</p>
<h4>Notation complexe</h4><p>On associe $\underline u=U_me^{j(\omega t+\varphi)}$. Dériver revient à multiplier par $j\omega$. D'où les impédances :</p>
<ul><li>Résistance : $\underline Z_R=R$</li><li>Bobine : $\underline Z_L=jL\omega$ (car $u=L\frac{di}{dt}$)</li><li>Condensateur : $\underline Z_C=\frac1{jC\omega}$ (car $i=C\frac{du}{dt}$)</li></ul>
<p>Les impédances s'associent exactement comme des résistances (série : somme ; parallèle : inverses).</p>
<h4>Puissance</h4><p>Puissance active $P=UI\cos\varphi$ où $\varphi$ est le déphasage entre $u$ et $i$. $\cos\varphi$ est le <b>facteur de puissance</b>.</p>`,
    formules: [
      { nom: 'Valeur efficace', f: T`$$U_{\text{eff}}=\frac{U_m}{\sqrt2}$$`,
        quand: T`Signal <b>sinusoïdal</b> uniquement. Les appareils de mesure et les plaques signalétiques donnent les valeurs efficaces.`,
        pas: T`Pour un signal carré ou triangulaire, le facteur n'est pas $\sqrt2$ : il faut revenir à la définition intégrale.` },
      { nom: 'Impédances', f: T`$$\underline Z_R=R\qquad \underline Z_L=jL\omega\qquad \underline Z_C=\frac{1}{jC\omega}=-\frac{j}{C\omega}$$`,
        quand: T`Tout circuit en régime sinusoïdal établi.`,
        pas: T`Pas en régime transitoire (allumage) : là il faut les équations différentielles. Et l'impédance dépend de la fréquence : $Z_C\to\infty$ en continu, $Z_L\to\infty$ en haute fréquence.` },
      { nom: 'Module et phase du RLC série', f: T`$$|\underline Z|=\sqrt{R^2+\left(L\omega-\frac1{C\omega}\right)^2}\qquad \tan\varphi=\frac{L\omega-\frac1{C\omega}}{R}$$`,
        quand: T`Calculer le courant efficace $I=\frac U{|Z|}$ et le déphasage.`,
        pas: T`On n'additionne pas les modules : $|Z|\neq R+L\omega+\frac1{C\omega}$. Les parties imaginaires se compensent.` },
      { nom: 'Puissance active', f: T`$$P=UI\cos\varphi=RI^2$$`,
        quand: T`Puissance réellement consommée (chaleur, travail). Seule la résistance consomme.`,
        pas: T`$UI$ seul donne la puissance <b>apparente</b> (VA), pas la puissance réelle (W).` },
      { nom: 'Filtre RC passe-bas', f: T`$$\underline H=\frac1{1+jRC\omega}\qquad f_c=\frac1{2\pi RC}$$`,
        quand: T`Sortie prise aux bornes du condensateur : laisse passer les basses fréquences. À $f_c$, $|H|=\frac1{\sqrt2}$ ($-3$ dB).`,
        pas: T`Sortie aux bornes de $R$ → c'est un passe-<b>haut</b>, la fonction de transfert change.` }
    ],
    methode: [
      T`Remplace chaque composant par son impédance complexe.`,
      T`Associe les impédances (série, parallèle) ou applique le diviseur de tension complexe.`,
      T`Calcule le module (amplitude) et l'argument (déphasage).`,
      T`Reviens aux grandeurs réelles et vérifie les cas limites ($\omega\to0$, $\omega\to\infty$).`
    ],
    exemple: {
      e: T`$R=100\ \Omega$ en série avec $C=10\ \mu$F, à $f=50$ Hz. Module de l'impédance ?`,
      s: [T`$\omega=2\pi\times50\approx314$ rad/s.`, T`$\frac1{C\omega}=\frac1{10^{-5}\times314}\approx318{,}3\ \Omega$.`, T`$\underline Z=100-318{,}3j$, donc $|Z|=\sqrt{100^2+318{,}3^2}$.`],
      r: T`$|Z|\approx334\ \Omega$`
    },
    pieges: [
      T`Utiliser $f$ au lieu de $\omega$ dans $L\omega$ : oubli du $2\pi$.`,
      T`Additionner des modules au lieu des complexes.`,
      T`Confondre amplitude et valeur efficace (facteur $\sqrt2$).`
    ],
    exos: [
      { d: 1, t: 'Amplitude du secteur', e: T`Le secteur délivre 230 V efficaces. Quelle est l'amplitude $U_m$ ?`,
        h: T`$U_m=U\sqrt2$.`,
        s: [T`$U_m=230\times\sqrt2\approx325$ V.`],
        r: T`$U_m\approx325\ \text{V}$`, n: 325, u: 'V' },
      { d: 1, t: 'Impédance d’une bobine', e: T`Module de l'impédance d'une bobine de 0,1 H à 50 Hz ?`,
        h: T`$L\omega$ avec $\omega=2\pi f$.`,
        s: [T`$L\omega=0{,}1\times2\pi\times50\approx31{,}4\ \Omega$.`],
        r: T`$\approx31{,}4\ \Omega$`, n: 31.4, u: 'Ω' },
      { d: 2, t: 'Puissance en RL', e: T`Un dipôle RL série : $R=30\ \Omega$, $L\omega=40\ \Omega$, sous 100 V efficaces. Calculer $|Z|$, $I$, $\cos\varphi$ et la puissance active.`,
        h: T`$|Z|=\sqrt{R^2+(L\omega)^2}$, $\cos\varphi=\frac R{|Z|}$.`,
        s: [T`$|Z|=\sqrt{900+1600}=50\ \Omega$.`, T`$I=\frac{100}{50}=2$ A ; $\cos\varphi=\frac{30}{50}=0{,}6$.`, T`$P=UI\cos\varphi=100\times2\times0{,}6=120$ W.`, T`Vérification : $P=RI^2=30\times4=120$ W ✔ (seule la résistance consomme).`],
        r: T`$P=120\ \text{W}$`, n: 120, u: 'W' },
      { d: 2, t: 'Fréquence de coupure', e: T`Filtre RC passe-bas : $R=1\ \text{k}\Omega$, $C=100$ nF. Fréquence de coupure ?`,
        h: T`$RC=10^3\times10^{-7}=10^{-4}$ s.`,
        s: [T`$f_c=\frac1{2\pi\times10^{-4}}\approx1592$ Hz.`],
        r: T`$f_c\approx1{,}59\ \text{kHz}$`, n: 1592, u: 'Hz' },
      { d: 3, t: 'Résonance', e: T`RLC série : $L=0{,}1$ H, $C=10\ \mu$F, $R=20\ \Omega$. Fréquence de résonance et impédance à la résonance ?`,
        h: T`À la résonance, $L\omega=\frac1{C\omega}$.`,
        s: [T`Résonance : la partie imaginaire s'annule, $L\omega_0=\frac1{C\omega_0}\Rightarrow\omega_0=\frac1{\sqrt{LC}}$.`, T`$LC=10^{-6}$, $\omega_0=1000$ rad/s, $f_0=\frac{1000}{2\pi}\approx159$ Hz.`, T`À la résonance $\underline Z=R=20\ \Omega$ : l'impédance est minimale, le courant maximal.`],
        r: T`$f_0\approx159\ \text{Hz}$, $Z=20\ \Omega$`, n: 159, u: 'Hz' },
      { d: 3, t: 'Atténuation d’un filtre', e: T`Pour un passe-bas RC, calculer $|H|$ à $f=10f_c$, puis le gain en dB.`,
        h: T`$|H|=\frac1{\sqrt{1+(f/f_c)^2}}$ et $G_{dB}=20\log|H|$.`,
        s: [T`$RC\omega=\frac f{f_c}$, donc $|H|=\frac1{\sqrt{1+(f/f_c)^2}}$.`, T`$f=10f_c$ : $|H|=\frac1{\sqrt{101}}\approx0{,}0995$.`, T`$G=20\log(0{,}0995)\approx-20$ dB. Règle : au-delà de $f_c$, ce filtre perd 20 dB par décade.`],
        r: T`$|H|\approx0{,}0995$ ($-20$ dB)`, n: 0.0995 }
    ]
  }

  ]);
})();

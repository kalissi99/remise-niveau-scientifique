/* CRYPTOGRAPHIE — des chiffrements historiques à RSA et au hachage */
(function () {
  var T = String.raw;
  window.CHAPITRES = (window.CHAPITRES || []).concat([

  /* ================================================================ */
  {
    id: 'chiffrements-classiques', matiere: 'crypto', niveau: 'Lycée',
    titre: 'Chiffrements classiques : César, affine, Vigenère',
    resume: 'Les premiers chiffrements, comment on les casse, et les leçons qu’ils donnent encore aujourd’hui.',
    motscles: 'césar affine vigenère substitution fréquence analyse cryptanalyse',
    pourquoi: T`<p>Ces chiffrements ne protègent plus rien aujourd'hui, mais ils posent toutes les bonnes questions : qu'est-ce qu'une clé, combien y en a-t-il, comment un attaquant procède-t-il ? On y découvre la <b>force brute</b> et l'<b>analyse de fréquences</b>, et on y utilise déjà l'arithmétique modulaire.</p>`,
    cours: T`<h4>Codage des lettres</h4><p>On numérote A = 0, B = 1, …, Z = 25. Toutes les opérations se font <b>modulo 26</b> (après Z on revient à A).</p>
<h4>César</h4><p>Décalage fixe : $c=(m+k)\bmod26$. Seulement 25 clés utiles : on les essaie toutes (force brute).</p>
<h4>Affine</h4><p>$c=(am+b)\bmod26$. Pour pouvoir déchiffrer, $a$ doit être <b>inversible modulo 26</b>, c'est-à-dire premier avec 26 : $a\in\{1,3,5,7,9,11,15,17,19,21,23,25\}$. Déchiffrement : $m=a^{-1}(c-b)\bmod26$.</p>
<h4>Analyse de fréquences</h4><p>En français, E représente environ 15 à 17 % des lettres. Dans un chiffrement par substitution, la lettre la plus fréquente du message chiffré correspond probablement à E.</p>
<h4>Vigenère</h4><p>On utilise un mot-clé : chaque lettre du message est décalée par la lettre correspondante de la clé (répétée). La même lettre claire donne des lettres chiffrées différentes : l'analyse de fréquences simple ne marche plus.</p>`,
    formules: [
      { nom: 'César', f: T`$$c=(m+k)\bmod 26\qquad m=(c-k)\bmod26$$`,
        quand: T`Décalage simple. Pour casser : tester les 25 clés.`,
        pas: T`Un espace de clés de 25 n'offre aucune sécurité : un ordinateur teste tout en une microseconde.` },
      { nom: 'Chiffrement affine', f: T`$$c=(am+b)\bmod26\qquad m=a^{-1}(c-b)\bmod26$$`,
        quand: T`Substitution un peu plus riche ($12\times26=312$ clés).`,
        pas: T`Si $\text{pgcd}(a,26)\neq1$ (par ex. $a=2$), deux lettres différentes donnent la même lettre chiffrée : impossible de déchiffrer.` },
      { nom: 'Vigenère', f: T`$$c_i=(m_i+k_{i\bmod L})\bmod26$$`,
        quand: T`Chiffrement polyalphabétique avec une clé de longueur $L$.`,
        pas: T`Si on devine $L$ (test de Kasiski, indice de coïncidence), on se ramène à $L$ chiffrements de César, donc cassable. Si la clé est aussi longue que le message et aléatoire, c'est le masque jetable, incassable.` }
    ],
    methode: [
      T`Convertis les lettres en nombres (A = 0).`,
      T`Applique la formule modulo 26.`,
      T`Reconvertis en lettres.`,
      T`Pour casser : compte les clés possibles (force brute ?) ou analyse les fréquences.`
    ],
    exemple: {
      e: T`Chiffrer « SALUT » avec César, clé $k=3$.`,
      s: [T`S = 18, A = 0, L = 11, U = 20, T = 19.`, T`$+3$ : 21, 3, 14, 23, 22.`, T`Lettres : V, D, O, X, W.`],
      r: T`« VDOXW »`
    },
    pieges: [
      T`Oublier le modulo : $25+3=28\to28-26=2$ (C).`,
      T`Dans le déchiffrement affine, on <b>multiplie par l'inverse</b> de $a$, on ne divise pas.`,
      T`Penser qu'un grand nombre de clés suffit : la substitution générale a $26!\approx4\times10^{26}$ clés et se casse pourtant par les fréquences.`
    ],
    exos: [
      { d: 1, t: 'Déchiffrer César', e: T`Déchiffrer « KHOOR » (César, $k=3$).`,
        h: T`Recule de 3 lettres.`,
        s: [T`K = 10 → 7 = H ; H = 7 → 4 = E ; O = 14 → 11 = L ; R = 17 → 14 = O.`],
        r: T`« HELLO »` },
      { d: 1, t: 'Nombre de clés affines', e: T`Combien de clés $(a,b)$ valides pour le chiffrement affine modulo 26 ?`,
        h: T`Nombre de $a$ premiers avec 26, fois 26 valeurs de $b$.`,
        s: [T`$26=2\times13$ : $a$ doit être impair et différent de 13. Il y en a 12 ($\varphi(26)=12$).`, T`$b$ : 26 valeurs. Total $12\times26=312$.`],
        r: T`$312$`, n: 312 },
      { d: 2, t: 'Chiffrer en affine', e: T`Avec $a=5$, $b=8$, chiffrer la lettre H. Donne le numéro de la lettre obtenue.`,
        h: T`H = 7.`,
        s: [T`$5\times7+8=43$.`, T`$43\bmod26=17$, soit R.`],
        r: T`$17$ (R)`, n: 17 },
      { d: 2, t: 'Vigenère', e: T`Chiffrer « ATTAQUE » avec la clé « CLE ».`,
        h: T`Clé répétée : C L E C L E C (2, 11, 4, …).`,
        s: [T`A+C = 0+2 = C ; T+L = 19+11 = 30 → 4 = E ; T+E = 23 = X.`, T`A+C = C ; Q+L = 27 → 1 = B ; U+E = 24 = Y ; E+C = 6 = G.`, T`Remarque : les deux T donnent E et X, et les deux A donnent C et C (même position dans la clé).`],
        r: T`« CEXCBYG »` },
      { d: 3, t: 'Inverse pour déchiffrer', e: T`Pour déchiffrer l'affine $a=5$, $b=8$, il faut $5^{-1}\bmod26$. Calcule-le.`,
        h: T`Cherche $x$ tel que $5x\equiv1\pmod{26}$ : teste les multiples de 26 plus 1.`,
        s: [T`$27,53,79,105$ : $105=5\times21$.`, T`$5\times21=105=4\times26+1$, donc $5^{-1}\equiv21$.`, T`Vérif : R = 17 → $21\times(17-8)=189\equiv7$ = H ✔.`],
        r: T`$21$`, n: 21 },
      { d: 3, t: 'Analyse de fréquences', e: T`Un texte français chiffré par César contient surtout la lettre « I ». Quelle est probablement la clé $k$ ?`,
        h: T`La lettre la plus fréquente en français est E.`,
        s: [T`On suppose que I (8) chiffre E (4).`, T`$k=8-4=4$.`, T`On vérifie en déchiffrant quelques mots : s'ils ont un sens, c'est gagné.`],
        r: T`$k=4$`, n: 4 }
    ]
  },

  /* ================================================================ */
  {
    id: 'modulaire', matiere: 'crypto', niveau: 'Supérieur',
    titre: 'Arithmétique modulaire',
    resume: 'Congruences, PGCD, Bézout, inverse modulaire, Fermat, exponentiation rapide : les maths de toute la cryptographie moderne.',
    motscles: 'modulo congruence pgcd euclide bézout inverse fermat euler exponentiation',
    pourquoi: T`<p>RSA, Diffie-Hellman, les courbes elliptiques, les signatures de ta carte bancaire : tout se calcule <b>modulo</b> un nombre. Ce chapitre est le moteur mathématique de la cryptographie à clé publique. Sans lui, RSA reste une recette incompréhensible.</p>`,
    cours: T`<h4>Congruence</h4><p>$a\equiv b\pmod n$ si $n$ divise $a-b$, c'est-à-dire si $a$ et $b$ ont le même reste dans la division par $n$. Exemple : $17\equiv2\pmod5$. C'est l'arithmétique de l'horloge.</p>
<p>Les congruences se comportent bien avec $+$, $-$ et $\times$ : on peut réduire à chaque étape pour garder de petits nombres.</p>
<h4>PGCD et algorithme d'Euclide</h4><p>$\text{pgcd}(a,b)=\text{pgcd}(b,\ a\bmod b)$, jusqu'à obtenir un reste nul.</p>
<h4>Bézout et inverse</h4><p>Il existe $u,v$ entiers avec $au+bv=\text{pgcd}(a,b)$. Si $\text{pgcd}(a,n)=1$, alors $au\equiv1\pmod n$ : $u$ est l'<b>inverse</b> de $a$ modulo $n$. On le trouve en « remontant » Euclide.</p>
<h4>Fermat et Euler</h4><p>Si $p$ est premier et ne divise pas $a$ : $a^{p-1}\equiv1\pmod p$. Plus généralement $a^{\varphi(n)}\equiv1\pmod n$ si $\text{pgcd}(a,n)=1$, avec $\varphi(pq)=(p-1)(q-1)$.</p>`,
    formules: [
      { nom: 'Algorithme d’Euclide', f: T`$$\text{pgcd}(a,b)=\text{pgcd}(b,\ a\bmod b)$$`,
        quand: T`Calculer un PGCD, tester si un inverse modulaire existe.`,
        pas: T`Décomposer en facteurs premiers marche pour de petits nombres, mais est impossible pour des nombres de 600 chiffres. Euclide reste rapide.` },
      { nom: 'Inverse modulaire (Bézout)', f: T`$$au+nv=1\ \Rightarrow\ a^{-1}\equiv u\pmod n$$`,
        quand: T`Déchiffrement affine, calcul de la clé privée $d$ dans RSA.`,
        pas: T`L'inverse n'existe que si $\text{pgcd}(a,n)=1$. Modulo $n$, on ne « divise » pas : on multiplie par l'inverse.` },
      { nom: 'Petit théorème de Fermat / Euler', f: T`$$a^{p-1}\equiv1\pmod p\qquad a^{\varphi(n)}\equiv1\pmod n$$`,
        quand: T`Réduire un exposant énorme : $a^{k}\equiv a^{k\bmod(p-1)}\pmod p$. C'est aussi la preuve que RSA fonctionne.`,
        pas: T`Fermat exige $p$ <b>premier</b> et $a$ non multiple de $p$. Pour $n$ non premier, utilise Euler avec $\varphi(n)$.` },
      { nom: 'Exponentiation rapide', f: T`$$a^{2k}=(a^k)^2\qquad a^{2k+1}=a\cdot(a^k)^2$$`,
        quand: T`Calculer $a^e\bmod n$ avec $e$ très grand : environ $\log_2e$ mises au carré au lieu de $e$ multiplications.`,
        pas: T`Calculer $a^e$ puis réduire est impossible (le nombre aurait des milliards de chiffres). On réduit modulo $n$ après chaque multiplication.` }
    ],
    methode: [
      T`Réduis les nombres modulo $n$ dès que possible.`,
      T`Pour un inverse : Euclide, puis remonte pour obtenir Bézout.`,
      T`Pour une grande puissance : Fermat/Euler pour réduire l'exposant, puis exponentiation rapide.`,
      T`Vérifie toujours : $a\times a^{-1}\bmod n=1$.`
    ],
    exemple: {
      e: T`Trouver l'inverse de 3 modulo 11.`,
      s: [T`Euclide : $11=3\times3+2$, puis $3=1\times2+1$. Le PGCD vaut 1, l'inverse existe.`, T`Remontée : $1=3-2=3-(11-3\times3)=4\times3-11$.`, T`Donc $4\times3\equiv1\pmod{11}$. Vérif : $12=11+1$ ✔.`],
      r: T`$3^{-1}\equiv4\pmod{11}$`
    },
    pieges: [
      T`Diviser modulo $n$ : interdit, on multiplie par l'inverse.`,
      T`Un reste négatif : $-3\bmod26=23$. Ajoute $n$.`,
      T`Appliquer Fermat avec un modulo non premier.`
    ],
    exos: [
      { d: 1, t: 'Reste', e: T`Calculer $47\bmod5$.`,
        h: T`$47=9\times5+\ ?$`,
        s: [T`$47=9\times5+2$.`],
        r: T`$2$`, n: 2 },
      { d: 1, t: 'Produit modulo', e: T`Calculer $(7\times8)\bmod5$ en réduisant d'abord chaque facteur.`,
        h: T`$7\equiv2$, $8\equiv3$.`,
        s: [T`$7\times8\equiv2\times3=6\equiv1\pmod5$.`, T`Vérif : $56=11\times5+1$ ✔.`],
        r: T`$1$`, n: 1 },
      { d: 2, t: 'PGCD', e: T`Calculer $\text{pgcd}(252,105)$ par Euclide.`,
        h: T`$252=2\times105+42$.`,
        s: [T`$252=2\times105+42$.`, T`$105=2\times42+21$.`, T`$42=2\times21+0$ : dernier reste non nul $21$.`],
        r: T`$21$`, n: 21 },
      { d: 2, t: 'Inverse modulo 26', e: T`Calculer $7^{-1}\bmod26$.`,
        h: T`Euclide : $26=3\times7+5$, $7=5+2$, $5=2\times2+1$.`,
        s: [T`$1=5-2\times2=5-2(7-5)=3\times5-2\times7=3(26-3\times7)-2\times7=3\times26-11\times7$.`, T`Donc $-11\times7\equiv1$, et $-11\equiv15\pmod{26}$.`, T`Vérif : $7\times15=105=4\times26+1$ ✔.`],
        r: T`$15$`, n: 15 },
      { d: 3, t: 'Fermat', e: T`Calculer $3^{100}\bmod7$.`,
        h: T`7 est premier : $3^6\equiv1$. Divise 100 par 6.`,
        s: [T`Fermat : $3^6\equiv1\pmod7$.`, T`$100=6\times16+4$, donc $3^{100}=(3^6)^{16}\times3^4\equiv3^4$.`, T`$3^4=81=11\times7+4$.`],
        r: T`$4$`, n: 4 },
      { d: 3, t: 'Exposant réduit', e: T`Calculer $7^{13}\bmod11$.`,
        h: T`Fermat : $7^{10}\equiv1\pmod{11}$.`,
        s: [T`$7^{13}=7^{10}\times7^3\equiv7^3\pmod{11}$.`, T`$7^2=49\equiv5$ ; $7^3\equiv5\times7=35\equiv2$.`],
        r: T`$2$`, n: 2 }
    ]
  },

  /* ================================================================ */
  {
    id: 'symetrique', matiere: 'crypto', niveau: 'Supérieur',
    titre: 'XOR et chiffrement symétrique',
    resume: 'Masque jetable, AES, modes de chiffrement, force brute : la cryptographie qui chiffre réellement les données.',
    motscles: 'xor masque jetable one-time pad aes des bloc mode ecb cbc gcm force brute clé',
    pourquoi: T`<p>Quand tu te connectes à ta banque, l'échange de clé utilise RSA ou Diffie-Hellman, mais les données elles-mêmes sont chiffrées par un algorithme <b>symétrique</b> (AES), beaucoup plus rapide. Comprendre le XOR, la taille des clés et les modes de chiffrement est indispensable en cybersécurité.</p>`,
    cours: T`<h4>Le XOR (⊕)</h4><p>Bit à bit : $0\oplus0=0$, $1\oplus1=0$, $0\oplus1=1\oplus0=1$. Propriétés : $a\oplus a=0$, $a\oplus0=a$, commutatif et associatif. Donc $(m\oplus k)\oplus k=m$ : la même opération chiffre et déchiffre.</p>
<h4>Masque jetable (one-time pad)</h4><p>$c=m\oplus k$ avec $k$ aléatoire, aussi long que le message, utilisé <b>une seule fois</b>. Shannon a prouvé qu'il est parfaitement sûr. Problème : il faut partager autant de clé que de données.</p>
<h4>Chiffrement par blocs : AES</h4><p>AES chiffre des blocs de 128 bits avec une clé de 128, 192 ou 256 bits, en plusieurs tours (substitution, permutation, mélange, XOR avec la clé). Son prédécesseur DES (clé de 56 bits) est cassable par force brute.</p>
<h4>Modes</h4><p><b>ECB</b> chiffre chaque bloc indépendamment : deux blocs identiques donnent le même chiffré, les motifs restent visibles. <b>CBC</b> mélange chaque bloc avec le précédent. <b>GCM</b> chiffre et authentifie (recommandé).</p>`,
    formules: [
      { nom: 'Propriété fondamentale du XOR', f: T`$$c=m\oplus k\ \Rightarrow\ c\oplus k=m$$`,
        quand: T`Chiffrements de flux, masque jetable, et à l'intérieur d'AES.`,
        pas: T`Réutiliser la même clé est fatal : $c_1\oplus c_2=m_1\oplus m_2$, la clé disparaît et l'attaquant obtient le XOR des deux messages.` },
      { nom: 'Coût de la force brute', f: T`$$\text{temps moyen}\approx\frac{2^{n-1}}{\text{vitesse}}\qquad\text{temps maximal}=\frac{2^n}{\text{vitesse}}$$`,
        quand: T`Évaluer la sécurité d'une taille de clé de $n$ bits.`,
        pas: T`Chaque bit de clé en plus double l'effort : 128 bits n'est pas « 2 fois plus » que 64 bits, mais $2^{64}\approx1{,}8\times10^{19}$ fois plus.` }
    ],
    methode: [
      T`Écris les données en binaire, aligne les bits.`,
      T`Applique le XOR colonne par colonne.`,
      T`Pour la sécurité : nombre de clés $2^n$, divisé par la vitesse d'attaque.`,
      T`Vérifie le mode utilisé (ECB à éviter) et l'unicité des clés/IV.`
    ],
    exemple: {
      e: T`Chiffrer l'octet $m=01011010$ avec la clé $k=00111100$, puis déchiffrer.`,
      s: [T`$01011010\oplus00111100=01100110$ (bits différents → 1).`, T`Déchiffrement : $01100110\oplus00111100=01011010=m$ ✔.`, T`En hexadécimal : $\text{0x5A}\oplus\text{0x3C}=\text{0x66}$, soit 102 en décimal.`],
      r: T`$c=01100110$ (0x66 = 102)`
    },
    pieges: [
      T`Réutiliser une clé de flux ou un IV (vecteur d'initialisation).`,
      T`Utiliser le mode ECB.`,
      T`Confondre chiffrement (confidentialité) et authentification (intégrité) : un message chiffré peut être modifié sans être lu.`
    ],
    exos: [
      { d: 1, t: 'XOR simple', e: T`Calculer $1011\oplus0110$ et donner le résultat en décimal.`,
        h: T`Bit à bit : 1 si différents.`,
        s: [T`$1\oplus0=1$, $0\oplus1=1$, $1\oplus1=0$, $1\oplus0=1$ → $1101$.`, T`$1101_2=8+4+1=13$.`],
        r: T`$1101_2=13$`, n: 13 },
      { d: 1, t: 'Pourquoi le XOR se déchiffre lui-même', e: T`Montrer que $(m\oplus k)\oplus k=m$.`,
        h: T`Associativité, puis $k\oplus k=0$.`,
        s: [T`$(m\oplus k)\oplus k=m\oplus(k\oplus k)$ (associativité).`, T`$k\oplus k=0$ et $m\oplus0=m$.`],
        r: T`$(m\oplus k)\oplus k=m$` },
      { d: 2, t: 'Casser DES', e: T`DES a une clé de 56 bits. Une machine teste $10^{12}$ clés par seconde. Combien d'heures pour tester toutes les clés ?`,
        h: T`$2^{56}\approx7{,}2\times10^{16}$.`,
        s: [T`$\frac{7{,}2\times10^{16}}{10^{12}}=72\,000$ s environ.`, T`$72\,058/3600\approx20$ heures. DES n'est plus sûr.`],
        r: T`$\approx20$ heures`, n: 20.0, u: 'h' },
      { d: 2, t: 'Réutilisation de clé', e: T`Deux messages chiffrés avec la même clé : $c_1=1100$, $c_2=1010$. L'attaquant devine $m_1=0011$. Que vaut $m_2$ (en décimal) ?`,
        h: T`$c_1\oplus c_2=m_1\oplus m_2$.`,
        s: [T`$c_1\oplus c_2=0110=m_1\oplus m_2$ (la clé s'annule).`, T`$m_2=0110\oplus m_1=0110\oplus0011=0101$.`, T`Sans connaître la clé, on retrouve $m_2$ : c'est pourquoi une clé de flux ne sert qu'une fois.`],
        r: T`$m_2=0101=5$`, n: 5 },
      { d: 3, t: 'Force brute sur AES-128', e: T`Avec une puissance (irréaliste) de $10^{18}$ clés/s, combien d'années pour tester les $2^{128}$ clés d'AES-128 ? (1 an ≈ $3{,}15\times10^7$ s)`,
        h: T`$2^{128}\approx3{,}4\times10^{38}$.`,
        s: [T`$\frac{3{,}4\times10^{38}}{10^{18}}=3{,}4\times10^{20}$ s.`, T`$\frac{3{,}4\times10^{20}}{3{,}15\times10^{7}}\approx1{,}08\times10^{13}$ ans.`, T`Soit environ 800 fois l'âge de l'Univers. La force brute est inutile : on attaque plutôt les mots de passe, les implémentations et les humains.`],
        r: T`$\approx1{,}1\times10^{13}$ ans`, n: 1.08e13, tol: 0.05, u: 'ans' },
      { d: 3, t: 'Le problème du mode ECB', e: T`Expliquer pourquoi chiffrer une image avec AES en mode ECB laisse voir son contenu.`,
        h: T`Que donnent deux blocs clairs identiques avec la même clé ?`,
        s: [T`En ECB, chaque bloc est chiffré séparément avec la même clé : $E_k$ est une fonction déterministe.`, T`Les zones uniformes d'une image produisent des blocs identiques, donc des blocs chiffrés identiques.`, T`Les contours restent visibles (exemple célèbre du « pingouin ECB »). CBC ou GCM ajoutent un IV et un chaînage qui cassent cette répétition.`],
        r: T`Blocs identiques → chiffrés identiques ; utiliser CBC ou GCM.` }
    ]
  },

  /* ================================================================ */
  {
    id: 'rsa', matiere: 'crypto', niveau: 'Avancé',
    titre: 'RSA : chiffrement à clé publique',
    resume: 'Génération des clés, chiffrement, déchiffrement, signature et pourquoi tout cela fonctionne.',
    motscles: 'rsa clé publique privée factorisation euler signature',
    pourquoi: T`<p>RSA a résolu un problème qu'on croyait impossible : communiquer secrètement avec quelqu'un sans avoir partagé de secret avant. Il sert aux certificats HTTPS, aux signatures électroniques et à l'échange de clés. Sa sécurité repose sur un fait simple : multiplier deux grands nombres premiers est facile, retrouver ces nombres à partir du produit est extrêmement difficile.</p>`,
    cours: T`<h4>Génération des clés</h4><ol><li>Choisir deux grands nombres premiers $p$ et $q$.</li><li>$n=pq$ et $\varphi(n)=(p-1)(q-1)$.</li><li>Choisir $e$ premier avec $\varphi(n)$ (souvent $65537$).</li><li>Calculer $d=e^{-1}\bmod\varphi(n)$.</li></ol>
<p>Clé publique : $(n,e)$. Clé privée : $d$ (et $p$, $q$ restent secrets).</p>
<h4>Utilisation</h4><p>Chiffrer : $c=m^e\bmod n$. Déchiffrer : $m=c^d\bmod n$. Signer : $s=h^d\bmod n$, vérifier : $s^e\bmod n=h$ (où $h$ est le haché du message).</p>
<h4>Pourquoi ça marche</h4><p>$ed=1+k\varphi(n)$, donc $c^d=m^{ed}=m\cdot(m^{\varphi(n)})^k\equiv m\pmod n$ par le théorème d'Euler.</p>`,
    formules: [
      { nom: 'Clés RSA', f: T`$$n=pq\qquad\varphi(n)=(p-1)(q-1)\qquad ed\equiv1\pmod{\varphi(n)}$$`,
        quand: T`Générer une paire de clés.`,
        pas: T`$d$ est l'inverse modulo $\varphi(n)$, pas modulo $n$ : c'est l'erreur la plus fréquente.` },
      { nom: 'Chiffrer / déchiffrer', f: T`$$c=m^e\bmod n\qquad m=c^d\bmod n$$`,
        quand: T`Chiffrer avec la clé <b>publique</b> du destinataire ; il déchiffre avec sa clé privée.`,
        pas: T`RSA « textbook » (sans remplissage) est déterministe et vulnérable. En pratique on utilise un padding (OAEP), et RSA ne chiffre qu'une clé AES, pas les données.` },
      { nom: 'Sécurité', f: T`$$\text{connaître }p,q\iff\text{connaître }\varphi(n)\iff\text{trouver }d$$`,
        quand: T`Évaluer la sécurité : $n$ doit être impossible à factoriser (2048 bits minimum aujourd'hui).`,
        pas: T`Si $n$ est petit, on factorise et on casse tout (voir le dernier exercice).` }
    ],
    methode: [
      T`Calcule $n$ et $\varphi(n)$.`,
      T`Vérifie $\text{pgcd}(e,\varphi(n))=1$.`,
      T`Calcule $d$ par Euclide étendu (inverse modulo $\varphi(n)$).`,
      T`Chiffre/déchiffre par exponentiation modulaire, et vérifie que le déchiffrement redonne $m$.`
    ],
    exemple: {
      e: T`$p=5$, $q=11$, $e=3$. Générer $d$, puis chiffrer et déchiffrer $m=7$.`,
      s: [T`$n=55$, $\varphi=4\times10=40$. $\text{pgcd}(3,40)=1$ ✔.`, T`$d$ : $3d\equiv1\pmod{40}$, $3\times27=81=2\times40+1$, donc $d=27$.`, T`Chiffrer : $7^3=343=6\times55+13$, donc $c=13$.`, T`Déchiffrer : $13^{27}\bmod55=7$ (par exponentiation rapide) ✔.`],
      r: T`$d=27$, $c=13$, déchiffrement $=7$`
    },
    pieges: [
      T`Calculer $d$ modulo $n$ au lieu de $\varphi(n)$.`,
      T`Choisir $e$ non premier avec $\varphi(n)$.`,
      T`Utiliser $m\ge n$ (le message doit être inférieur à $n$).`
    ],
    exos: [
      { d: 1, t: 'Indicatrice d’Euler', e: T`$p=3$, $q=11$. Calculer $n$ et $\varphi(n)$. Donne $\varphi(n)$.`,
        h: T`$\varphi=(p-1)(q-1)$.`,
        s: [T`$n=33$, $\varphi=2\times10=20$.`],
        r: T`$\varphi(n)=20$`, n: 20 },
      { d: 2, t: 'Clé privée', e: T`Avec $\varphi(n)=20$ et $e=3$, calculer $d$.`,
        h: T`$3d\equiv1\pmod{20}$.`,
        s: [T`$\text{pgcd}(3,20)=1$ : l'inverse existe.`, T`$3\times7=21=20+1$, donc $d=7$.`],
        r: T`$d=7$`, n: 7 },
      { d: 2, t: 'Chiffrer', e: T`Clé publique $(n,e)=(33,3)$. Chiffrer $m=4$.`,
        h: T`$4^3\bmod33$.`,
        s: [T`$4^3=64=33+31$.`],
        r: T`$c=31$`, n: 31 },
      { d: 3, t: 'Déchiffrer', e: T`Avec $n=33$ et $d=7$, déchiffrer $c=31$.`,
        h: T`$31\equiv-2\pmod{33}$, donc calcule $(-2)^7$.`,
        s: [T`Astuce : $31\equiv-2$, plus simple à élever à la puissance.`, T`$(-2)^7=-128$.`, T`$128=3\times33+29$, donc $-128\equiv-29\equiv4\pmod{33}$.`, T`On retrouve $m=4$ ✔.`],
        r: T`$m=4$`, n: 4 },
      { d: 3, t: 'Casser une clé trop petite', e: T`Une clé publique est $(n,e)=(91,5)$. Retrouver la clé privée $d$.`,
        h: T`Factorise 91, calcule $\varphi$, puis l'inverse de 5.`,
        s: [T`$91=7\times13$ (on teste les petits premiers).`, T`$\varphi=6\times12=72$.`, T`$5d\equiv1\pmod{72}$ : $5\times29=145=2\times72+1$, donc $d=29$.`, T`Leçon : toute la sécurité repose sur la difficulté de factoriser $n$.`],
        r: T`$d=29$`, n: 29 }
    ]
  },

  /* ================================================================ */
  {
    id: 'diffie-hellman', matiere: 'crypto', niveau: 'Avancé',
    titre: 'Diffie-Hellman et logarithme discret',
    resume: 'Fabriquer un secret commun sur un canal public, et pourquoi l’attaque de l’homme du milieu oblige à authentifier.',
    motscles: 'diffie hellman échange de clé logarithme discret homme du milieu mitm groupe',
    pourquoi: T`<p>Chaque connexion HTTPS, VPN ou WhatsApp commence par un échange de clé de type Diffie-Hellman (souvent sur courbe elliptique). Deux personnes qui ne se sont jamais rencontrées obtiennent une clé commune, alors qu'un espion voit passer tous les messages.</p>`,
    cours: T`<h4>Le protocole</h4><ol><li>Paramètres publics : un grand premier $p$ et un générateur $g$.</li><li>Alice choisit un secret $a$ et envoie $A=g^a\bmod p$.</li><li>Bob choisit un secret $b$ et envoie $B=g^b\bmod p$.</li><li>Alice calcule $B^a$, Bob calcule $A^b$ : tous deux obtiennent $K=g^{ab}\bmod p$.</li></ol>
<h4>Sécurité</h4><p>L'espion connaît $p$, $g$, $A$, $B$. Pour trouver $K$, il lui faudrait $a$ à partir de $A=g^a$ : c'est le <b>logarithme discret</b>, très difficile pour un grand $p$.</p>
<h4>Limite</h4><p>Diffie-Hellman seul n'<b>authentifie</b> pas : un attaquant au milieu peut faire un échange avec chacun. On signe donc les messages (certificats, RSA ou ECDSA).</p>`,
    formules: [
      { nom: 'Échange de Diffie-Hellman', f: T`$$A=g^a,\quad B=g^b,\quad K=B^a=A^b=g^{ab}\pmod p$$`,
        quand: T`Établir une clé secrète partagée (ensuite utilisée par AES).`,
        pas: T`$K\neq A\times B$ : multiplier les valeurs publiques donne $g^{a+b}$, que l'espion peut calculer aussi.` },
      { nom: 'Logarithme discret', f: T`$$\text{trouver }x\text{ tel que }g^x\equiv y\pmod p$$`,
        quand: T`C'est le problème que l'attaquant doit résoudre. Facile pour un petit $p$ (on essaie tout), infaisable pour un $p$ de 2048 bits.`,
        pas: T`Le logarithme « réel » ($\ln$) ne sert à rien ici : modulo $p$, les puissances sautent dans tous les sens.` }
    ],
    methode: [
      T`Calcule $A$ et $B$ par exponentiation modulaire.`,
      T`Calcule $K$ des deux côtés, les résultats doivent coïncider.`,
      T`Réduis modulo $p$ à chaque multiplication.`,
      T`Pour attaquer un petit exemple : liste $g^1, g^2, \dots$ jusqu'à trouver la valeur.`
    ],
    exemple: {
      e: T`$p=23$, $g=5$, $a=6$, $b=15$. Calculer $A$, $B$ et la clé $K$.`,
      s: [T`$5^2=25\equiv2$, $5^4\equiv4$, $5^6=5^4\cdot5^2\equiv8$ : $A=8$.`, T`$5^8\equiv16$, $5^{15}=5^8\cdot5^4\cdot5^2\cdot5\equiv16\times4\times2\times5=640\equiv19$ : $B=19$.`, T`Alice : $K=19^6\equiv(-4)^6=4096\equiv2\pmod{23}$.`, T`Bob : $8^{15}=2^{45}$ ; $2^{11}=2048\equiv1$, donc $2^{45}=2^{44}\cdot2\equiv2$ ✔.`],
      r: T`$A=8$, $B=19$, $K=2$`
    },
    pieges: [
      T`Oublier de réduire modulo $p$ (les nombres explosent).`,
      T`Penser que Diffie-Hellman protège contre l'homme du milieu.`,
      T`Réutiliser les mêmes secrets $a$, $b$ (on perd la confidentialité persistante).`
    ],
    exos: [
      { d: 1, t: 'Valeur publique', e: T`$p=23$, $g=5$, Alice choisit $a=3$. Que vaut $A$ ?`,
        h: T`$5^3=125$.`,
        s: [T`$125=5\times23+10$.`],
        r: T`$A=10$`, n: 10 },
      { d: 2, t: 'Échange complet', e: T`$p=11$, $g=2$, $a=4$, $b=3$. Calculer la clé partagée $K$.`,
        h: T`$A=2^4\bmod11$, $B=2^3\bmod11$, puis $K=B^a$.`,
        s: [T`$A=16\equiv5$, $B=8$.`, T`Alice : $K=8^4$. $8^2=64\equiv9$, $9^2=81\equiv4$.`, T`Bob : $5^3=125\equiv4$ ✔.`],
        r: T`$K=4$`, n: 4 },
      { d: 2, t: 'Logarithme discret à la main', e: T`Trouver $x$ tel que $3^x\equiv13\pmod{17}$.`,
        h: T`Calcule les puissances successives de 3 modulo 17.`,
        s: [T`$3^1=3$, $3^2=9$, $3^3=27\equiv10$, $3^4\equiv30\equiv13$.`, T`$x=4$. Pour un $p$ de 600 chiffres, cette énumération prendrait plus que l'âge de l'Univers.`],
        r: T`$x=4$`, n: 4 },
      { d: 3, t: 'Exponentiation rapide', e: T`Combien de mises au carré faut-il pour calculer $g^{1024}$ par exponentiation rapide ?`,
        h: T`$1024=2^{10}$.`,
        s: [T`$g\to g^2\to g^4\to\dots\to g^{1024}$ : chaque carré double l'exposant.`, T`$2^{10}=1024$ : 10 mises au carré au lieu de 1023 multiplications.`],
        r: T`$10$`, n: 10 },
      { d: 3, t: 'Homme du milieu', e: T`Expliquer comment Mallory, placée entre Alice et Bob, lit tous leurs messages malgré Diffie-Hellman, et comment s'en protéger.`,
        h: T`Mallory fait un échange avec Alice et un autre avec Bob.`,
        s: [T`Mallory intercepte $A$ et envoie à Bob $M=g^m$ ; elle intercepte $B$ et envoie $M$ à Alice.`, T`Alice partage $K_1=g^{am}$ avec Mallory, Bob partage $K_2=g^{bm}$ avec Mallory, chacun croyant parler à l'autre.`, T`Mallory déchiffre avec $K_1$, lit, rechiffre avec $K_2$.`, T`Protection : <b>authentifier</b> les valeurs échangées (signature par certificat, comme dans TLS).`],
        r: T`Deux échanges séparés avec Mallory ; parade : signer $A$ et $B$ (certificats).` }
    ]
  },

  /* ================================================================ */
  {
    id: 'hachage', matiere: 'crypto', niveau: 'Avancé',
    titre: 'Fonctions de hachage, mots de passe et signatures',
    resume: 'SHA-256, collisions, paradoxe des anniversaires, entropie des mots de passe, sel, HMAC et signatures numériques.',
    motscles: 'hachage hash sha-256 collision anniversaire mot de passe entropie sel hmac signature',
    pourquoi: T`<p>Le hachage est partout : stockage des mots de passe, intégrité des fichiers, blockchain, signatures électroniques, HMAC dans les API bancaires. Savoir quantifier la sécurité (combien de bits ? combien d'essais ?) est une compétence directement utile en audit et en conformité.</p>`,
    cours: T`<h4>Fonction de hachage</h4><p>$h$ transforme un message de taille quelconque en empreinte de taille fixe (256 bits pour SHA-256). Propriétés exigées :</p><ul><li><b>Résistance à la préimage</b> : connaissant $y$, impossible de trouver $m$ avec $h(m)=y$.</li><li><b>Seconde préimage</b> : connaissant $m$, impossible de trouver $m'\neq m$ avec le même haché.</li><li><b>Collisions</b> : impossible de trouver n'importe quels $m\neq m'$ de même haché.</li></ul>
<h4>Paradoxe des anniversaires</h4><p>Pour une empreinte de $n$ bits, trouver une collision coûte environ $2^{n/2}$ essais, pas $2^n$. SHA-256 offre donc 128 bits de sécurité contre les collisions. MD5 et SHA-1 sont cassés.</p>
<h4>Mots de passe</h4><p>On ne stocke jamais un mot de passe, mais $h(\text{sel}\,\|\,\text{mdp})$ avec un <b>sel</b> aléatoire par utilisateur et une fonction <b>lente</b> (bcrypt, scrypt, Argon2). L'entropie d'un mot de passe aléatoire de $L$ caractères parmi $N$ est $L\log_2N$ bits.</p>
<h4>Signatures</h4><p>On signe le haché : $s=h(m)^d\bmod n$ (RSA). Toute modification de $m$ change $h(m)$ et invalide la signature.</p>`,
    formules: [
      { nom: 'Borne des anniversaires', f: T`$$k_{50\%}\approx1{,}18\sqrt{N}=1{,}18\times2^{n/2}$$`,
        quand: T`Nombre d'essais pour avoir 50 % de chances de collision sur une sortie de $n$ bits ($N=2^n$ valeurs).`,
        pas: T`Pour une <b>préimage</b> (trouver un message pour un haché donné), c'est bien $2^n$ : ne confonds pas les deux attaques.` },
      { nom: 'Entropie d’un mot de passe aléatoire', f: T`$$H=L\log_2N\ \text{bits}\qquad\log_2N=\frac{\ln N}{\ln2}$$`,
        quand: T`Mot de passe tiré <b>au hasard</b> : $L$ caractères dans un alphabet de $N$ symboles.`,
        pas: T`Un mot de passe choisi par un humain (« Senegal2026! ») a une entropie bien plus faible que la formule : les attaquants utilisent des dictionnaires.` },
      { nom: 'HMAC', f: T`$$\text{HMAC}_k(m)=h\big((k\oplus\text{opad})\,\|\,h((k\oplus\text{ipad})\,\|\,m)\big)$$`,
        quand: T`Garantir l'intégrité et l'origine d'un message avec une clé partagée (API, jetons).`,
        pas: T`$h(k\,\|\,m)$ tout seul est vulnérable à l'extension de longueur avec SHA-256 : utilise HMAC.` }
    ],
    methode: [
      T`Identifie l'attaque : préimage ($2^n$) ou collision ($2^{n/2}$) ?`,
      T`Calcule l'effort en nombre d'essais.`,
      T`Divise par la vitesse de l'attaquant pour obtenir un temps.`,
      T`Pour les mots de passe : entropie, puis effet du sel et de la lenteur de la fonction.`
    ],
    exemple: {
      e: T`Un mot de passe aléatoire de 8 lettres minuscules : entropie ?`,
      s: [T`$N=26$, $L=8$.`, T`$\log_226=\frac{\ln26}{\ln2}\approx4{,}70$ bits par caractère.`, T`$H=8\times4{,}70\approx37{,}6$ bits, soit environ $2\times10^{11}$ possibilités : cassable en quelques minutes sur GPU si le haché est rapide.`],
      r: T`$H\approx37{,}6$ bits`
    },
    pieges: [
      T`Utiliser MD5 ou SHA-1 pour la sécurité.`,
      T`Hacher les mots de passe avec SHA-256 seul (trop rapide) et sans sel.`,
      T`Croire qu'un haché est un chiffrement : il n'y a pas de clé pour « déhacher ».`
    ],
    exos: [
      { d: 1, t: 'Sécurité contre les collisions', e: T`Combien de bits de sécurité offre SHA-256 contre les collisions ?`,
        h: T`Paradoxe des anniversaires : $n/2$.`,
        s: [T`$2^{256/2}=2^{128}$ essais.`],
        r: T`$128$ bits`, n: 128 },
      { d: 2, t: 'Entropie (minuscules)', e: T`Entropie d'un mot de passe aléatoire de 8 lettres minuscules ?`,
        h: T`$8\log_226$.`,
        s: [T`$\log_226\approx4{,}70$.`, T`$H\approx37{,}6$ bits.`],
        r: T`$\approx37{,}6$ bits`, n: 37.6, u: 'bits' },
      { d: 2, t: 'Entropie (alphanumérique)', e: T`Entropie d'un mot de passe aléatoire de 12 caractères parmi 62 (a-z, A-Z, 0-9) ?`,
        h: T`$\log_262\approx5{,}954$.`,
        s: [T`$H=12\times5{,}954\approx71{,}5$ bits.`, T`Comparer : allonger le mot de passe rapporte plus qu'ajouter des symboles.`],
        r: T`$\approx71{,}5$ bits`, n: 71.45, u: 'bits' },
      { d: 3, t: 'Collision sur 32 bits', e: T`Une empreinte fait 32 bits. Combien de messages faut-il hacher pour avoir environ 50 % de chances de collision ?`,
        h: T`$1{,}18\sqrt{2^{32}}$ et $\sqrt{2^{32}}=2^{16}=65\,536$.`,
        s: [T`$N=2^{32}\approx4{,}3\times10^9$.`, T`$k\approx1{,}177\times65\,536\approx77\,000$.`, T`Seulement 77 000 messages pour 4 milliards de valeurs possibles : d'où des empreintes de 256 bits.`],
        r: T`$\approx77\,000$ messages`, n: 77163, tol: 0.03 },
      { d: 3, t: 'Rôle du sel', e: T`Expliquer pourquoi on ajoute un sel aléatoire, propre à chaque utilisateur, avant de hacher un mot de passe.`,
        h: T`Pense aux tables précalculées et aux utilisateurs ayant le même mot de passe.`,
        s: [T`Sans sel, deux utilisateurs avec le même mot de passe ont le même haché : une fuite révèle les doublons.`, T`Sans sel, l'attaquant peut précalculer une table (rainbow table) une fois pour toutes les bases de données.`, T`Avec un sel unique, chaque haché doit être attaqué séparément. Combiné à une fonction lente (Argon2, bcrypt), chaque essai coûte cher.`],
        r: T`Le sel empêche les tables précalculées et masque les mots de passe identiques.` }
    ]
  }

  ]);
})();

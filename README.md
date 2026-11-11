# Remise à niveau scientifique

Plateforme d'entraînement en **mathématiques, physique, chimie et cryptographie**, de la Seconde au niveau école d'ingénieur, organisée selon le programme français (y compris l'option **maths expertes**).

- 76 chapitres, 383 exercices (Facile → Moyen → Difficile)
- Classes : Seconde, Première, Terminale, Maths expertes, Supérieur, Avancé (+ parcours Cryptographie)
- Pour chaque chapitre : à quoi ça sert, cours, formules avec **quand les utiliser** et **pourquoi pas une autre**, méthode, exemple commenté, pièges, exercices
- Indice, correction pas à pas (étape par étape), vérification automatique des réponses numériques
- Accueil « Programme par classe », menu repliable par matière, recherche
- Progression enregistrée dans le navigateur
- Site 100 % statique : aucun serveur, aucune base de données, aucun build

## Structure

```
index.html                  page principale (liste des fichiers de contenu chargés)
css/style.css               design (thème clair/sombre automatique)
js/app.js                   moteur (navigation, classes, exercices, progression)
data/maths-seconde.js       maths Seconde
data/maths-lycee.js         calcul de base (2de) + second degré, trigo, dérivées, exp/ln, suites (1re)
data/maths-premiere.js      produit scalaire, probabilités conditionnelles, variables aléatoires
data/maths-terminale.js     récurrence, limites, continuité, convexité, trigo, équations différentielles
data/maths-terminale-2.js   dénombrement, géométrie dans l'espace, loi binomiale
data/maths-expertes.js      complexes (géométrie), arithmétique, graphes et Markov
data/maths-sup.js           intégrales (Tle), complexes et matrices (expertes), DL et équations diff. (sup)
data/maths-avance.js        diagonalisation, Fourier, probabilités avancées, Laplace
data/physique-lycee.js      physique Seconde et Première
data/mecanique.js           cinématique, Newton (Tle), énergie (1re), oscillateurs (sup)
data/electricite.js         lois de base (2de), associations (1re), RC (Tle), RLC et sinusoïdal (sup)
data/physique-terminale.js  champ uniforme, satellites, fluides, thermodynamique, ondes, radioactivité
data/chimie-lycee.js        chimie Seconde et Première
data/chimie-terminale.js    acide-base, cinétique, équilibres et piles
data/cryptographie.js       cryptographie
vercel.json                 configuration Vercel
```

Les formules sont affichées avec MathJax (chargé depuis le CDN jsDelivr).

## Tester sur ton ordinateur

Ouvre simplement `index.html` dans ton navigateur, ou lance un petit serveur :

```bash
cd remise-niveau-scientifique
python -m http.server 8000
# puis ouvre http://localhost:8000
```

## Déployer sur Vercel

### Option 1 : avec GitHub (recommandé, mise à jour automatique)

1. Crée un dépôt sur GitHub (ici `remise-niveau-scientifique`) et envoie le dossier :
   ```bash
   cd remise-niveau-scientifique
   git init
   git add .
   git commit -m "Prépa Ingénieur"
   git branch -M main
   git remote add origin https://github.com/kalissi99/remise-niveau-scientifique.git
   git push -u origin main
   ```
2. Va sur https://vercel.com, connecte-toi avec GitHub.
3. **Add New… → Project** → importe le dépôt `remise-niveau-scientifique`.
4. Framework Preset : **Other**. Laisse Build Command et Output Directory **vides**.
5. Clique **Deploy**. Ton site est en ligne sur `https://remise-niveau-scientifique.vercel.app` (ou un nom proche).

Ensuite, chaque `git push` met le site à jour automatiquement.

### Option 2 : avec la ligne de commande Vercel

```bash
npm install -g vercel
cd remise-niveau-scientifique
vercel          # première fois : répond aux questions (projet "Other", pas de build)
vercel --prod   # mise en production
```

## Ajouter un chapitre ou des exercices

Ouvre le fichier `data/...js` de la matière et copie un bloc de chapitre existant. Pour un nouveau fichier, ajoute aussi sa ligne `<script src="data/...js"></script>` dans `index.html`, avant `js/app.js`. Champs :

| Champ | Rôle |
|---|---|
| `id` | identifiant unique, lettres/chiffres/tirets (devient l'adresse `#id`) |
| `matiere` | `maths`, `physique`, `chimie` ou `crypto` |
| `niveau` | `Seconde`, `Première`, `Terminale`, `Maths expertes`, `Supérieur`, `Avancé` (crypto : `Initiation`, `Intermédiaire`, `Avancé`) |
| `domaine` | optionnel, sous-thème affiché (ex. `Mécanique`, `Optique`) |
| `titre`, `resume`, `motscles` | affichage et recherche |
| `pourquoi`, `cours` | texte HTML |
| `formules` | liste de `{ nom, f, quand, pas }` |
| `methode`, `pieges` | listes de phrases |
| `exemple` | `{ e: énoncé, s: [étapes], r: résultat }` |
| `exos` | liste de `{ d: 1|2|3, t: titre, e: énoncé, h: indice, s: [étapes], r: réponse, n: valeur numérique (optionnel), u: unité, tol: tolérance (0.02 = 2 %) }` |

Règles d'écriture des formules (LaTeX) :
- `$...$` pour une formule dans une phrase, `$$...$$` pour une formule centrée ;
- les textes sont entre `` T`...` `` (String.raw), donc on écrit `\frac` avec un seul antislash ;
- ne jamais écrire un `$` immédiatement suivi d'une accolade `{` (JavaScript l'interpréterait).

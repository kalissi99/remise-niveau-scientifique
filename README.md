# Prépa Ingénieur

Plateforme d'entraînement en **mathématiques, mécanique, électricité et cryptographie**, du lycée au niveau école d'ingénieur.

- 30 chapitres, 163 exercices (Facile → Moyen → Difficile)
- Pour chaque chapitre : à quoi ça sert, cours, formules avec **quand les utiliser** et **pourquoi pas une autre**, méthode, exemple commenté, pièges, exercices
- Indice, correction pas à pas (étape par étape), vérification automatique des réponses numériques
- Progression enregistrée dans le navigateur
- Site 100 % statique : aucun serveur, aucune base de données, aucun build

## Structure

```
index.html            page principale
css/style.css         design (thème clair/sombre automatique)
js/app.js             moteur (navigation, exercices, progression)
data/maths-lycee.js   maths niveau lycée
data/maths-sup.js     maths niveau supérieur
data/maths-avance.js  maths niveau avancé
data/mecanique.js     mécanique
data/electricite.js   électricité
data/cryptographie.js cryptographie
vercel.json           configuration Vercel
```

Les formules sont affichées avec MathJax (chargé depuis le CDN jsDelivr).

## Tester sur ton ordinateur

Ouvre simplement `index.html` dans ton navigateur, ou lance un petit serveur :

```bash
cd prepa-ingenieur
python -m http.server 8000
# puis ouvre http://localhost:8000
```

## Déployer sur Vercel

### Option 1 : avec GitHub (recommandé, mise à jour automatique)

1. Crée un dépôt sur GitHub (par ex. `prepa-ingenieur`) et envoie le dossier :
   ```bash
   cd prepa-ingenieur
   git init
   git add .
   git commit -m "Prépa Ingénieur"
   git branch -M main
   git remote add origin https://github.com/kalissi99/prepa-ingenieur.git
   git push -u origin main
   ```
2. Va sur https://vercel.com, connecte-toi avec GitHub.
3. **Add New… → Project** → importe le dépôt `prepa-ingenieur`.
4. Framework Preset : **Other**. Laisse Build Command et Output Directory **vides**.
5. Clique **Deploy**. Ton site est en ligne sur `https://prepa-ingenieur.vercel.app` (ou un nom proche).

Ensuite, chaque `git push` met le site à jour automatiquement.

### Option 2 : avec la ligne de commande Vercel

```bash
npm install -g vercel
cd prepa-ingenieur
vercel          # première fois : répond aux questions (projet "Other", pas de build)
vercel --prod   # mise en production
```

## Ajouter un chapitre ou des exercices

Ouvre le fichier `data/...js` de la matière et copie un bloc de chapitre existant. Champs :

| Champ | Rôle |
|---|---|
| `id` | identifiant unique, lettres/chiffres/tirets (devient l'adresse `#id`) |
| `matiere` | `maths`, `meca`, `elec` ou `crypto` |
| `niveau` | `Lycée`, `Supérieur` ou `Avancé` |
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

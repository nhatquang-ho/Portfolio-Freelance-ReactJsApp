# React Freelance Portfolio (FR / EN)

Mon portfolio personnel en React + TypeScript, configuré pour le multilingue (français / anglais) avec i18next.

## 🧩 Stack
- React 18 + TypeScript + Vite
- Material UI (MUI)
- React Router v6
- Framer Motion (animations)
- i18next + react-i18next (i18n)
- React Markdown + remark-gfm pour les posts
# Mon portfolio (FR / EN)

Voici le dépôt de mon portfolio personnel — une petite application React + TypeScript que j'ai montée pour présenter mon profil, mes projets et quelques démos techniques.

Je l'ai configurée pour être bilingue (français / anglais) avec i18next, et j'y ai intégré des démos client-side pour montrer des interactions simples.

## Stack
- React 18 + TypeScript + Vite
- Material UI (MUI)
- React Router v6
- Framer Motion (animations)
- i18next + react-i18next (i18n)
- React Markdown + remark-gfm pour afficher des posts
- Vitest + Testing Library pour les tests

## Installation & lancement
1. Installer les dépendances :

```bash
npm install
```

2. Lancer le serveur de dev :

```bash
npm run dev
```

Puis ouvrez http://localhost:5173/ dans votre navigateur.

## Tests
J'utilise Vitest avec l'environnement `jsdom`. Certains composants (framer-motion, recharts) utilisent des APIs navigateur (IntersectionObserver, ResizeObserver) : j'ai ajouté un petit setup de test qui fournit des polyfills minimaux.

- Pour lancer les tests :

```bash
npx vitest run --environment jsdom
# ou
npm test -- --environment jsdom
```

- Le fichier de setup des tests est `src/test/setupTests.ts`.
Si vous préférez que ce setup soit chargé automatiquement, je peux ajouter `vitest.config.ts` et y déclarer `setupFiles`.

## Traductions (i18n)
- Mes fichiers de traduction sont dans `src/locales/fr/translation.json` et `src/locales/en/translation.json`.
- L'initialisation se trouve dans `src/i18n.ts` et la langue par défaut actuelle est le français.

Si vous voulez ajouter ou modifier du texte, éditez ces fichiers.

## Formulaire de contact
Le formulaire (`src/components/ContactForm.tsx`) est pour l'instant une démo : il n'envoie pas de mail.
Quand on soumet le formulaire, j'affiche une Snackbar qui indique qu'il s'agit d'une démo et je propose un lien `mailto:` vers mon adresse : `nhatquang.ho.96@gmail.com`.

Si je veux recevoir les messages depuis le formulaire, je peux connecter le `handleSubmit` à un service externe (Formspree, Netlify Forms, SendGrid, etc.) ou ajouter une petite API.

## Blog / Posts
- Les articles se trouvent dans `src/posts/*.md`.
- Le chargement se fait via `import.meta.glob` (statique) — utile pour les petits sites statiques.

## Démos incluses
J'ai trois petites démos dans `src/components/demos/` et une page dédiée `/demos` :
- `MarkdownEditor` — éditeur et aperçu Markdown côté client
- `ChartDemo` — démo de graphiques avec Recharts
- `DragDropDemo` — exemple d'interactions drag & drop (dnd-kit)

## Build & preview

```bash
npm run build
npm run preview
```

## Astuces / dépannage
- Warning "You are loading @emotion/react when it is already loaded" : vérifiez les doublons d'`@emotion/react` si besoin — c'est souvent bénin.
- Si des tests échouent parce que des APIs navigateur manquent, vérifiez que `src/test/setupTests.ts` est bien chargé.

## Commandes rapides

```bash
# développement
npm run dev

# tests
npx vitest run --environment jsdom

# build & preview
npm run build
npm run preview
```

# ⚛️ Les hooks React les plus utiles en développement professionnel

Depuis l’introduction des **hooks** dans React 16.8, le développement frontend est devenu plus fluide, modulaire et maintenable.  
En tant que développeur fullstack, j’utilise les hooks quotidiennement pour gérer l’état, les effets secondaires, le contexte et les performances.  
Voici les principaux hooks que j’utilise dans mes projets React, avec des exemples concrets et des conseils pratiques.

---

## 🧠 `useState` — le pilier de l’état local

`useState` permet de gérer l’état dans les composants fonctionnels.  
C’est le hook le plus utilisé pour les interactions simples.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}
```

**Utilisations typiques :**
- Champs de formulaire  
- Toggles (afficher / masquer)  
- Gestion de l’état local d’un composant  

---

## 🔄 `useEffect` — pour les effets secondaires

`useEffect` permet d’exécuter du code **après le rendu** du composant.  
Il remplace les anciennes méthodes du cycle de vie comme `componentDidMount`.

```jsx
import { useEffect, useState } from 'react';

function UserFetcher() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return <div>{user ? user.name : 'Chargement...'}</div>;
}
```

**Cas d’usage :**
- Appels API  
- Abonnements / listeners  
- Timers et animations  

⚠️ *Attention à bien gérer les dépendances pour éviter les appels multiples ou les effets indésirables.*

---

## 🌍 `useContext` — pour partager des données globales

`useContext` permet d’accéder à des données **partagées** dans toute l’application sans passer par les props.

```jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function Header() {
  const theme = useContext(ThemeContext);
  return <h1 style={{ color: theme.text }}>Bienvenue</h1>;
}
```

**Utilisations fréquentes :**
- Thèmes (dark / light)  
- Authentification (user, token)  
- Langue / localisation  

---

## 🧩 `useReducer` — pour les états complexes

`useReducer` est une alternative à `useState` lorsque l’état devient trop complexe ou nécessite des transitions précises.

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Compteur : {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrémenter</button>
    </div>
  );
}
```

**Avantages :**
- Meilleure lisibilité pour les états imbriqués  
- Facile à tester  
- Inspiré de Redux  

---

## 🚀 `useMemo` et `useCallback` — pour optimiser les performances

Ces hooks permettent de **mémoriser des valeurs ou des fonctions** pour éviter les recalculs inutiles.

```jsx
import { useMemo, useCallback } from 'react';

function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    return [...items].sort();
  }, [items]);

  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return <button onClick={handleClick}>Action</button>;
}
```

**Utilisations :**
- Composants lourds  
- Listes filtrées ou triées  
- Fonctions passées en props  

---

✅ **Conclusion :**  
Les hooks ont profondément transformé la manière de structurer les composants React.  
Bien les comprendre et les utiliser à bon escient permet de créer des applications plus performantes, lisibles et maintenables.

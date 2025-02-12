# Installation et Exécution

## Prérequis

Assurez-vous d'avoir installé les dépendances suivantes sur votre machine :

- Node.js (https://nodejs.org/)
- Expo CLI : `npm install -g expo-cli`

## Installation

Clonez le projet et installez les dépendances :

```sh
git clone https://github.com/iMaisho/ulteam_exercice
cd ulteam_exercice
npm install
```

## Exécution

Lancez l'application en mode développement :

```sh
npx expo start
```

Scannez le QR code avec Expo Go sur votre téléphone ou utilisez un émulateur Android/iOS.

## Dépendances principales

- `react-native`
- `react-navigation`
- `react-native-reanimated`
- `@react-navigation/native`
- `@react-navigation/bottom-tabs`
- `@react-native-async-storage/async-storage`
- `react-native-vector-icons`

**Note** : Vérifiez le fichier `package.json` pour la liste complète des dépendances et leurs versions exactes.

# Notes :

- Je n'ai pas implenté la pagination car la quantité de données chargées était suffisamment réduite pour garantir une navigation fluide sans impact notable sur les performances. Mon effort a été concentré sur la gestion des favoris et la recherche, qui apportaient plus de valeur à l’expérience utilisateur.
- J'ai essayé d'animer mon bouton de **Dark Mode** avec **Reanimated**, sans succès. Pourtant leur doc est très claire, et j'arrivais à faire varier la valeur de `rotation` au clic du bouton, mais il ne se passait rien visuellement. Vous trouverez les vestiges de ces essais sous forme de commentaire dans `ToggleTheme.js`. _(Précision : une balise `<Animated.View style={{ animatedStyle }}>` entourait mon élément `<Ionicons/>`)_
- Lorsque j'ai présenté mon application hier à mes amis, l'un d'entre eux m'a suggéré d'**ajouter un highlight de la valeur textuelle recherchée** dans mes composants, idée que j'ai trouvée particulièrement **pertinente d'un point de vue UI/UX**, j'ai donc pris la liberté de l'implémenter.

# Vidéo de l'application en action

**Note :** Dans la vidéo j'ai affiché manuellement l'`ActivityIndicator`au départ, car le chargement des données est trop rapide pour qu'on puisse le voir. Dans le code, il apparait bien seulement pendant la durée du `fetch`

**Lien :** https://www.youtube.com/shorts/eMGK9Qy2Vpk

# Registre Vols PAF

Application de saisie du registre des vols (brigades, départ/arrivée, nuit/jour).
L'application web est dans `www/index.html` et peut être publiée sur GitHub Pages.
Une version Android peut aussi être générée automatiquement avec GitHub Actions.

## Utiliser l'application web sur GitHub

1. Dans le dépôt GitHub, ouvrez **Settings > Pages** et choisissez **GitHub Actions** comme source de déploiement.
2. Poussez le projet sur la branche `main` ou `master`.
3. Dans **Actions**, ouvrez l'exécution « Déployer sur GitHub Pages ». Une fois terminée, l'URL de l'application apparaît dans le résumé de l'exécution.

Les registres sont enregistrés dans le stockage local du navigateur. Ils ne sont pas synchronisés entre appareils ou navigateurs ; utilisez les sauvegardes de l'application pour les transférer.

## Récupérer l'APK (sans Android Studio)

1. Poussez le projet sur la branche `main` ou `master`.
2. Dans **Actions**, ouvrez l'exécution « Build APK Android » (elle se lance automatiquement, ou choisissez **Run workflow**).
3. Téléchargez l'artefact **registre-vols-apk**, puis dézippez-le pour obtenir `app-debug.apk`.
4. Transférez l'APK sur le téléphone et installez-le. Android peut demander d'autoriser l'installation depuis cette source.

## Mettre à jour l'application

Modifiez `www/index.html`, puis poussez les changements : GitHub Pages et l'APK seront reconstruits automatiquement.

Le contrôle `npm test` vérifie la syntaxe JavaScript de l'application avant la compilation Android. Il nécessite Node.js 22 ou ultérieur.

---
© Copyright by Serigne Mourtalla Thiaw

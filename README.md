# Registre Vols PAF — Application Android

Application de saisie du registre des vols (brigades, départ/arrivée, nuit/jour),
empaquetée en APK Android avec Capacitor. Le code de l'app est dans `www/index.html`.

## Récupérer l'APK (sans Android Studio)

1. Poussez ce dossier sur un dépôt GitHub (branche `main`).
2. Ouvrez l'onglet **Actions** du dépôt : le workflow « Build APK Android » se lance
   automatiquement (ou cliquez sur **Run workflow** pour le lancer à la main).
3. Quand il est vert (3 à 6 minutes), ouvrez l'exécution puis, en bas de page, section
   **Artifacts**, téléchargez **registre-vols-apk**.
4. Dézippez : vous obtenez `app-debug.apk`. Transférez-le sur le téléphone et installez-le
   (autoriser les sources inconnues si Android le demande).

## Mettre à jour l'application

Remplacez `www/index.html` par la nouvelle version, puis `git commit` et `git push` :
un nouvel APK est construit automatiquement.

---
© Copyright by Serigne Mourtalla Thiaw

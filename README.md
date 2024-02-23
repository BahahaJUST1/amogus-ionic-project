**Amogus Ionic Project**

---

### Présentation
Bienvenue dans l'application Amogus ! Cette application est développée avec Angular et le framework Ionic. Elle sert de plateforme pour gérer des personnages inspirés du jeu populaire "Among Us".

### Fonctionnalités
1. **Opérations CRUD** :
    - Les utilisateurs peuvent Créer, Lire, Mettre à jour et Supprimer (CRUD) des personnages dans l'application.
    - Les personnages peuvent être personnalisés avec des noms, des couleurs et d'autres attributs.

2. **Création de Personnages et Cartographie** :
    - La création d'un nouveau personnage l'ajoute automatiquement à une carte Leaflet.
    - Chaque personnage est représenté par un marqueur sur la carte, offrant une visualisation de leur position.

3. **Pages** :
    - **Créer un Personnage** : Permet aux utilisateurs de créer de nouveaux personnages avec des attributs personnalisés.
    - **Gestion des Personnages** : Fournit une vue complète de tous les personnages, avec des options pour les modifier et les supprimer.
    - **Page de Menu** : Sert de centre de navigation principal, offrant l'accès à différentes sections de l'application.
    - **Carte Leaflet** : Affiche une carte en utilisant la bibliothèque Leaflet, montrant les emplacements de tous les personnages.
    - **À Propos** : Fournit des informations sur l'application, son but et l'équipe de développement.

### Utilisation
1. **Installation** :
    - Clonez le dépôt sur votre machine locale.
    - Exécutez `npm install` pour installer les dépendances.
    - Assurez-vous que Angular et Ionic CLI sont installés globalement (`npm install -g @angular/cli @ionic/cli`).

2. **Lancement de l'application** :
    - Utilisez `ng serve --open` pour exécuter l'application en local.
    - L'application sera accessible à `http://localhost:4200` par défaut.

3. **Navigation** :
    - Utilisez le menu pour naviguer entre les différentes sections de l'application.
    - Créez, visualisez, modifiez et supprimez des personnages selon vos besoins.
    - Explorez la carte Leaflet pour visualiser les emplacements des personnages.

4. **Contributions** :
    - Les contributions sont les bienvenues ! N'hésitez pas à soumettre des pull requests ou à ouvrir des issues pour des corrections de bogues, des améliorations ou de nouvelles fonctionnalités.
    - Assurez-vous de suivre les normes et conventions de codage du projet.

### Technologies Utilisées
- Angular
- Ionic
- Leaflet
- Capacitor (pour la géolocalisation)

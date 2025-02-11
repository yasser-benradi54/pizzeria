# PizzaECF2

PizzaECF2 est une application PHP simple pour gérer les données de pizza. Elle utilise une base de données MySQL et suit l'architecture MVC (Modèle-Vue-Contrôleur).

## Prérequis

- PHP 7.4 ou supérieur
- Composer
- MySQL
- XAMPP (ou tout autre environnement de serveur local)

## Installation

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/hassangoooo/pizzaecf2.git
    ```

2. Accédez au répertoire du projet :
    ```sh
    cd pizzaecf2
    ```

3. Installez les dépendances avec Composer :
    ```sh
    composer install
    ```

4. Créez un fichier `.env` à la racine du répertoire et ajoutez vos identifiants de base de données :
    ```env
    DBHOST=localhost
    DBNAME=pizzaecf2
    DBUSER=root
    DBPASS=
    ``

## Utilisation

1. Démarrez votre serveur local (par exemple, XAMPP).

2. Ouvrez votre navigateur et accédez à :
    ```
    http://localhost/pizzaecf2/src/index.php
    ```

## Structure du projet

- `src/`
  - `controller/` - Contient les classes de contrôleur.
  - `model/` - Contient les classes de modèle.
  - `view/` - Contient les fichiers de vue (le cas échéant).
  - `index.php` - Le point d'entrée principal de l'application.
  - `Database.php` - Classe de connexion à la base de données.

## Points de terminaison API

- `GET /pizza` - Récupérer toutes les pizzas.


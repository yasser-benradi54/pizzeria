<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="css/pizzeria_yasser.css" />

    <script type="module" src="js/menuPizza.js"></script>
    <script type="module" src="js/pizzeria_yasser.js"></script>

    <title>Document</title>
  </head>
  <body>
    <header>
      <a href="#" class="logo"><img src="./image/logo.jpg" alt="" /></a>

      <nav class="navbar">
        <ul>
          
          <li><a href="pizzeria_page_menu.php">Menu</a></li>

          
        </ul>
      </nav>
    </header>

    <!DOCTYPE html>
<html lang="fr">
<head>
<section class="contenu">
      <h1 class="titre">Mama Maglione</h1>
      <div class="slider">
        <div class="slider_nav">
          <button
            class="slider_nav_button slider_nav_button_previous"
            id="precedent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <button class="slider_nav_button slider_nav_button_next" id="suivant">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <div class="slider_content">
          <div class="slider_content_item">
            <img src="./image/exterieur.jpg" alt="exterieur resto" />
          </div>
          <div class="slider_content_item">
            <img src="./image/interieur.jpg" alt="interieur resto" />
          </div>
          <div class="slider_content_item">
            <img src="./image/cuisine.jpg" alt="cuisine" />
          </div>
          <div class="slider_content_item">
            <img src="./image/equipe_cuisine.jpg" alt="equipe" />
          </div>
        </div>
      </div>
      <article>
        <div class="texte">
          <h2>Tutto è fatto in casa !</h2>
          <p>
            Il y a 49 ans, Papi Lulu ouvrait le Spina Grill. Aujourd’hui s’ouvre
            une nouvelle page, avec une superbe trattoria MAGLIONE développée en
            famille depuis plus de 3 ans et l’ouverture de MAMA MAGLIONE à
            Nancy. C’est avec molto amore que l’on se lance avec nos délicieuses
            pizze napolitane, sans oublier nos buoni piatti !
          </p>

          <h2>Le saviez vous ?</h2>
          <p>
            La pizza Napolitaine, avec une pâte molle et fine, mais avec des
            bords hauts est reconnue comme une spécialité traditionnelle
            garantie de l'Union Européenne. Elle a été déclarée par l'UNESCO
            comme patrimoine immatériel de l'humanité.
          </p>
        </div>
      </article>
    </section>
   
    <h1>Votre carte</h1>
    <!-- Boutons de filtre -->
    <div id="filter-buttons">
      <button id="all-pizzas">Toutes les pizzas</button>
      <button id="tomato-base">Pizzas à base de tomate</button>
      <button id="cream-base">Pizzas à base de crème</button>
    </div><button id="ouvrir-panier">Voir le panier</button>
    <menu id="carte"></menu>
    
   <!-- Bouton pour ouvrir le panier -->


<!-- Pop-up du panier -->
<div id="popup-panier" class="popup" style="display: none">
  <div class="popup-content">
    <span class="fermer" id="fermer-popup-panier">&times;</span>
    <h3>Mon panier</h3>
    <div id="panier-items"></div>
    <p id="totalPrixCommande">Prix total de la commande: 0€</p>
    <button id="valider-commande">Valider la commande</button>
  </div>
</div>

<!-- Pop-up de confirmation -->
<div id="popup-confirmation" class="popup" style="display: none">
  <div class="popup-content">
    <span class="fermer" id="fermer-popup-confirmation">&times;</span>
    <h3>Commande validée</h3>
    <p>Votre commande a été validée avec succès !</p>
  </div>
</div>
  

  </article>
  <article id="menu">
    <div id="sectionTomate">
      <h2>Pizzas à base de tomate</h2>
    </div>
    <div id="sectionCreme">
      <h2>Pizzas à base de crème</h2>
    </div>
  </article>
  <section class="contact">
      <h1 class="titre">Contactez-nous</h1>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.282453209067!2d6.1366026770670725!3d48.77649767132114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794bdb537e69949%3A0x1edec24dcbbb7c7a!2sAfpa%20-%20Centre%20de%20Pompey!5e0!3m2!1sfr!2sfr!4v1733238613279!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
 
  
  
  
  <footer class="footer">
    <div class="content_footer">
      <div class="content_footer_item">
        <h5><a href="pizzeria_page_contact_yasser.html">Adresse:</a></h5>
        <li>99 Rue d'Italie</li>
        <li>54000 Nancy</li>
      </div>
      <div class="content_footer_item">
        <h5><a href="pizzeria_page_contact_yasser.html">Horaire:</a></h5>
        <li>Lun Fermer ❌</li>
        <li>Mar 12h-21h ✔️</li>
        <li>Mer 12h-21h ✔️</li>
        <li>Jeu 12h-21h ✔️</li>
      </div>
      <div class="content_footer_item">
        <h5>
          <a href="pizzeria_page_contact_yasser.html">Contactez-nous:</a>
        </h5>
        <li>0699999954</li>
        <li>0383499999</li>
      </div>
      <div class="content_footer_item">
        <h5>
          <a href="pizzeria_page_contact_yasser.html">Retrouvez-nous sur:</a>
        </h5>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Tiktok</li>
      </div>
    </div>
  </footer>
  </footer>
  
    
  </body>
</html>



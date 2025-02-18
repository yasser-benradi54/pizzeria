/*const pizzaPromises = [
  fetch("indienne.JSON"),
  fetch("a_4_fromage.JSON"),
  fetch("bolognaise.JSON"),
  fetch("carnivore.JSON"),
  fetch("la_reine.JSON"),
  fetch("mama_maglione.JSON"),
  fetch("orientale.JSON"),
  fetch("margherita.JSON"),
];

Promise.all(pizzaPromises.map((p) => p.then((response) => response.json())))
  .then((pizzaData) => {
    afficherPizzas(pizzaData);
    configurerBoutonsFiltre(pizzaData);
  })
  .catch((error) => console.error("Erreur lors du chargement des pizzas:", error));*/
  
  
  /*const monMenu = document.getElementById("carte");
(async function recupePizza() {
  let pizzaData = await fetch("index.php?route=pizza")
  .then((response) => response.json());
  afficherPizzas(pizzaData);
  console.log(pizzaData);
})();
function afficherPizzas(pizzaData, filtre = "all") {
  const sectionTomate = document.getElementById("sectionTomate");
  const sectionCreme = document.getElementById("sectionCreme");

  // Vider les sections
  while (sectionTomate.firstChild) {
    sectionTomate.removeChild(sectionTomate.firstChild);
  }
  while (sectionCreme.firstChild) {
    sectionCreme.removeChild(sectionCreme.firstChild);
  }

  pizzaData.forEach((pizza) => {
    console.log(pizza);
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const nomPizza = document.createElement("h2");
    nomPizza.textContent = pizza.nom_pizza;
    

    const descriptionPizza = document.createElement("p");
    descriptionPizza.textContent = pizza.base_pizza;

    const prixPizza = document.createElement("h6");
    prixPizza.textContent = `Prix: ${pizza.prix_pizza}€`;


    const selectQuantite = document.createElement("select");
    const quantites = [1, 2, 3, 4, 5];
    quantites.forEach((qty) => {
      const option = document.createElement("option");
      option.value = qty;
      option.textContent = `Quantité: ${qty}`;
      selectQuantite.appendChild(option);
    });

    const boutonAjouter = document.createElement("button");
    boutonAjouter.textContent = "Ajouter";

    const imagePizza = document.createElement("img");
    imagePizza.src = pizza.chemin_image;
    imagePizza.alt = pizza.nom;
    imagePizza.classList.add("chemin_image");

    menu.appendChild(imagePizza);
    menu.appendChild(nomPizza);
    menu.appendChild(descriptionPizza);
    menu.appendChild(prixPizza);
    menu.appendChild(selectQuantite);
    menu.appendChild(boutonAjouter);
    monMenu.appendChild(menu);

    boutonAjouter.addEventListener("click", () => ajouterAuPanier(pizza, selectQuantite.value));

    // Filtrer les pizzas par base
    if (
      filtre === "all" ||
      (filtre === "tomate" && pizza.nom_base === "tomate") ||
      (filtre === "creme" && pizza.nom_base === "creme")
    ) {
      if (pizza.base === "tomate") {
        sectionTomate.appendChild(menu);
      } else if (pizza.base === "creme") {
        sectionCreme.appendChild(menu);
      }
    }
  });
}

function configurerBoutonsFiltre(pizzaData) {
  document
    .getElementById("all-pizzas")
    .addEventListener("click", () => afficherPizzas(pizzaData, "all"));
  document
    .getElementById("tomato-base")  
    .addEventListener("click", () => afficherPizzas(pizzaData, "tomate")); // Correction
  document
    .getElementById("cream-base")
    .addEventListener("click", () => afficherPizzas(pizzaData, "creme")); // Correction
}


function ajouterAuPanier(pizza, quantite) {
  const panierContainer = document.getElementById("panier-items");

  let itemExistant = Array.from(
    panierContainer.getElementsByClassName("commande-item")
  ).find((item) => item.dataset.nom === pizza.nom_pizza);

  if (itemExistant) {
    let quantiteExistante = parseInt(itemExistant.dataset.quantite);
    let nouvelleQuantite = quantiteExistante + parseInt(quantite);
    itemExistant.dataset.quantite = nouvelleQuantite;
    itemExistant.dataset.prix = pizza.prix_pizza * nouvelleQuantite;
    itemExistant.querySelector("h3").textContent = `${pizza.nom_pizza} x ${nouvelleQuantite}`;
    itemExistant.querySelector("p").textContent = `Prix total: ${itemExistant.dataset.prix}€`;
  } else {
    const commandeItem = document.createElement("div");
    commandeItem.classList.add("commande-item");
    commandeItem.dataset.nom = pizza.nom_pizza;
    commandeItem.dataset.quantite = quantite;
    commandeItem.dataset.prix = pizza.prix_pizza * quantite;

    const nomPizza = document.createElement("h3");
    nomPizza.textContent = `${pizza.nom_pizza} x ${quantite}`;

    const prixItem = document.createElement("p");
    prixItem.textContent = `Prix total: ${commandeItem.dataset.prix}€`;

    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "Supprimer";
    boutonSupprimer.addEventListener("click", () => {
      panierContainer.removeChild(commandeItem);
      mettreAJourPrixTotal();
    });

    commandeItem.appendChild(nomPizza);
    commandeItem.appendChild(prixItem);
    commandeItem.appendChild(boutonSupprimer);
    panierContainer.appendChild(commandeItem);
  }

  mettreAJourPrixTotal();
}


function mettreAJourPrixTotal() {
  const panierContainer = document.getElementById("panier-items");
  const totalPrixCommande = document.getElementById("totalPrixCommande");

  let totalPrix = Array.from(panierContainer.getElementsByClassName("commande-item"))
    .reduce((total, item) => total + parseFloat(item.dataset.prix), 0);

  totalPrixCommande.textContent = `Prix total de la commande: ${totalPrix.toFixed(2)}€`;
}


// Gestion de l'ouverture et de la fermeture du pop-up du panier
document.getElementById("ouvrir-panier").addEventListener("click", () => {
  document.getElementById("popup-panier").style.display = "flex";
});

document.getElementById("fermer-popup-panier").addEventListener("click", () => {
  document.getElementById("popup-panier").style.display = "none";
});

// Gestion de l'ouverture et de la fermeture du pop-up de confirmation
document.getElementById("valider-commande").addEventListener("click", () => {
  document.getElementById("popup-panier").style.display = "none";
  document.getElementById("popup-confirmation").style.display = "flex";
});

document.getElementById("fermer-popup-confirmation").addEventListener("click", () => {
  document.getElementById("popup-confirmation").style.display = "none";
});

*/


document.addEventListener("DOMContentLoaded", () => {
  const sectionTomate = document.getElementById("sectionTomate");
  const sectionCreme = document.getElementById("sectionCreme");
  const panierContainer = document.getElementById("panier-items");
  const totalPrixCommande = document.getElementById("totalPrixCommande");
  const btnVoirPanier = document.getElementById("ouvrir-panier");
  const popupPanier = document.getElementById("popup-panier");
  const btnFermerPanier = document.getElementById("fermer-popup-panier");
  const btnValiderCommande = document.getElementById("valider-commande");
  const messageValidation = document.getElementById("message-validation");

  let panier = [];

  // async function chargerPizzas() {
  //   try {
  //     const response = await fetch("index.php?route=pizza");
  //     const pizzas = await response.json();
  //     afficherPizzas(pizzas);
  //   } catch (error) {
  //     console.error("Erreur de récupération des pizzas :", error);
  //   }
  // }
 
  (async function chargerPizzas() {
    let pizzaData = await fetch("index.php?route=pizza")
    .then((response) => response.json());
    afficherPizzas(pizzaData);
    console.log(pizzaData);
  })(); 

  function afficherPizzas(pizzas) {
    sectionTomate.innerHTML = "";
    sectionCreme.innerHTML = "";

    pizzas.forEach((pizza) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu");

      const image = document.createElement("img");
      image.src = pizza.chemin_image;
      image.alt = pizza.nom_pizza;

      const nom = document.createElement("h2");
      nom.textContent = pizza.nom_pizza;

      const description = document.createElement("p");
      description.textContent = pizza.base_pizza;

      const prix = document.createElement("h6");
      prix.textContent = `Prix: ${pizza.prix_pizza}€`;

      const selectQuantite = document.createElement("select");
      [1, 2, 3, 4, 5].forEach((qty) => {
        const option = document.createElement("option");
        option.value = qty;
        option.textContent = `Quantité: ${qty}`;
        selectQuantite.appendChild(option);
      });

      const boutonAjouter = document.createElement("button");
      boutonAjouter.textContent = "Ajouter";

      boutonAjouter.addEventListener("click", () => {
        ajouterAuPanier(pizza, parseInt(selectQuantite.value));
      });

      menuItem.appendChild(image);
      menuItem.appendChild(nom);
      menuItem.appendChild(description);
      menuItem.appendChild(prix);
      menuItem.appendChild(selectQuantite);
      menuItem.appendChild(boutonAjouter);

      if (pizza.nom_base === "tomate") {
        sectionTomate.appendChild(menuItem);
      } else if (pizza.nom_base === "creme") {
        sectionCreme.appendChild(menuItem);
      }
    });
  }

  function ajouterAuPanier(pizza, quantite) {
    const pizzaExistante = panier.find((item) => item.id_pizza === pizza.id_pizza);

    if (pizzaExistante) {
      pizzaExistante.quantite += quantite;
    } else {
      panier.push({
        id_pizza: pizza.id_pizza,
        nom_pizza: pizza.nom_pizza,
        prix_pizza: pizza.prix_pizza,
        quantite: quantite,
      });
    }

    mettreAJourPanier();
  }

  function mettreAJourPanier() {
    panierContainer.innerHTML = "";
    let totalPrix = 0;

    panier.forEach((item) => {
      const commandeItem = document.createElement("div");

      const nomPizza = document.createElement("h3");
      nomPizza.textContent = `${item.nom_pizza} x ${item.quantite}`;

      const prixItem = document.createElement("p");
      prixItem.textContent = `Prix total: ${item.prix_pizza * item.quantite}€`;

      totalPrix += item.prix_pizza * item.quantite;

      const boutonSupprimer = document.createElement("button");
      boutonSupprimer.textContent = "Supprimer";
      boutonSupprimer.addEventListener("click", () => {
        supprimerDuPanier(item.id_pizza);
      });

      commandeItem.appendChild(nomPizza);
      commandeItem.appendChild(prixItem);
      commandeItem.appendChild(boutonSupprimer);
      panierContainer.appendChild(commandeItem);
    });

    totalPrixCommande.textContent = `Prix total de la commande: ${totalPrix.toFixed(2)}€`;

    btnValiderCommande.disabled = panier.length === 0;
  }

  function supprimerDuPanier(idPizza) {
    panier = panier.filter((item) => item.id_pizza !== idPizza);
    mettreAJourPanier();
  }

  async function validerCommande() {
    if (panier.length === 0) {
      alert("Votre panier est vide !");
      return;
    }

    const commandeData = panier.map((item) => ({
      id_pizza: item.id_pizza,
      quantite: item.quantite,
    }));

    try {
      const response = await fetch("index.php?route=commande", {
        method: "POST",
        headers: {
          
        },
        body: JSON.stringify({ commandes: commandeData }),
      });

      if (response.ok) {
        let totalPrix = panier.reduce((acc, item) => acc + item.prix_pizza * item.quantite, 0);
        messageValidation.textContent = `✅ Merci pour votre commande ! Total: ${totalPrix}€.`;
        messageValidation.style.display = "block";
        panier = [];
        mettreAJourPanier();
        setTimeout(() => {
          popupPanier.style.display = "none";
          messageValidation.style.display = "none";
        }, 3000);
      } else {
        console.error("Erreur lors de l'enregistrement de la commande.");
      }
    } catch (error) {
     // console.error("Erreur réseau :", error);
    }
  }

  // Gestion du popup panier
  btnVoirPanier.addEventListener("click", () => {
    popupPanier.style.display = "block";
  });

  btnFermerPanier.addEventListener("click", () => {
    popupPanier.style.display = "none";
  });

  // Validation de la commande
  btnValiderCommande.addEventListener("click", validerCommande);

  // Charger les pizzas au démarrage
  chargerPizzas();
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  formData.append('action', 'login');

  const response = await fetch('index.php?route=login', {
      method: 'POST',
      body: formData
  });

  const result = await response.json();
  if (result.success) {
      alert('Connexion réussie');
      // Stocker les informations de l'utilisateur dans le localStorage ou une variable globale
  } else {
      alert('Erreur de connexion');
  }
});

document.getElementById('registerForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  formData.append('action', 'register');

  const response = await fetch('index.php?route=login', {
      method: 'POST',
      body: formData
  });

  const result = await response.json();
  if (result.success) {
      alert('Inscription réussie');
  } else {
      alert('Erreur d\'inscription');
  }
});

async function fetchUserOrders(id_client) {
  const formData = new FormData();
  formData.append('action', 'getUserOrders');
  formData.append('id_client', id_client);

  const response = await fetch('index.php?route=pizza', {
      method: 'POST',
      body: formData
  });

  const orders = await response.json();
  console.log(orders);
  // Afficher les commandes dans l'interface utilisateur
}

// Appeler cette fonction après la connexion réussie de l'utilisateur
// fetchUserOrders(user.id_client);


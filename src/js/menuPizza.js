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
  const monMenu = document.getElementById("carte");
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
    .addEventListener("click", () => afficherPizzas(pizzaData, "tomato"));
  document
    .getElementById("cream-base")
    .addEventListener("click", () => afficherPizzas(pizzaData, "cream"));
}

function ajouterAuPanier(pizza, quantite) {
  const panierContainer = document.getElementById("panier-items");
  const totalPrixCommande = document.getElementById("totalPrixCommande");

  // Vérifier si la pizza est déjà dans le panier
  let itemExistant = Array.from(
    panierContainer.getElementsByClassName("commande-item")
  ).find((item) => item.dataset.nom === pizza.nom);

  if (itemExistant) {
    // Mettre à jour la quantité et le prix total de l'élément existant
    let quantiteExistante = parseInt(itemExistant.dataset.quantite);
    let nouvelleQuantite = quantiteExistante + parseInt(quantite);
    itemExistant.dataset.quantite = nouvelleQuantite;
    itemExistant.querySelector("h3").textContent = `${pizza.nom} x ${nouvelleQuantite}`;
    itemExistant.querySelector("p").textContent = `Prix total: ${pizza.prix * nouvelleQuantite}€`;
  } else {
    // Ajouter un nouvel élément au panier
    const commandeItem = document.createElement("div");
    commandeItem.classList.add("commande-item");
    commandeItem.dataset.nom = pizza.nom;
    commandeItem.dataset.quantite = quantite;

    const nomPizza = document.createElement("h3");
    nomPizza.textContent = `${pizza.nom} x ${quantite}`;

    const prixItem = document.createElement("p");
    prixItem.textContent = `Prix total: ${pizza.prix * quantite}€`;

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

  // Mettre à jour le prix total de la commande
  mettreAJourPrixTotal();
}

function mettreAJourPrixTotal() {
  const panierContainer = document.getElementById("panier-items");
  const totalPrixCommande = document.getElementById("totalPrixCommande");

  let totalPrix = Array.from(
    panierContainer.getElementsByClassName("commande-item")
  ).reduce((total, item) => {
    return total + parseInt(item.dataset.quantite) * parseFloat(item.querySelector("p").textContent.split(" ")[2]);
  }, 0);
  totalPrixCommande.textContent = `Prix total de la commande: ${totalPrix}€`;
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

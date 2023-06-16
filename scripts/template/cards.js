//? Import des modules
import { launchSearch } from "../utils/launchSearch.js";

//? Création de la fonction cards qui prend un objet "cards" en argument
export const cards = (cards) => {
	//? Création d'un élément div pour les cards
	const cardsElements = document.createElement("div");

	//? Ajout d'une classe CSS à l'élément cardsElements
	cardsElements.classList.add("container__main__section__cards__recipe");

	//? Création d'un template HTML pour les cards
	const cardsTemplate = `
        <img
            src="./assets/recipies/${cards.image}"
            alt="${cards.name}"
        />
        <div class="container__main__section__cards__recipe__textContainer">
            <div
              class="container__main__section__cards__recipe__textContainer__title"
            >
                <h2>${cards.name}</h2>
                <span class='time'>
                    <i class="far fa-clock"></i>
                    <strong>${cards.time} min</strong>
                </span>
            </div>
            <div
              class="container__main__section__cards__recipe__textContainer__lists"
            >
                <ul>
                  ${cards.ingredients
		.map(
			(ingredient) =>
				`<li><strong>${ingredient.ingredient} :</strong> ${
					ingredient.quantity || ""
				} ${ingredient.unit || ""}</li>`
		)
		.join("")}
                </ul>
                <p>
                  ${cards.description}
                </p>
            </div>
        </div>
  `;

	//? Ajout du template HTML dans l'élément cardsElements
	cardsElements.innerHTML = cardsTemplate;
  
	//? Retourne l'élément cardsElements
	return cardsElements;
};
  
//? Récuperation de mon input
const searchInput = document.querySelector("#search-input");
//? Faire un event dans mon input pour appliquer mon searchRecipes et filtre mes recipes
searchInput.addEventListener("input", () => {
	launchSearch(); 
});

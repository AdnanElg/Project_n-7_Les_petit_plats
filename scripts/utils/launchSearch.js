//? Import des modules
import { dataRecipes } from "../data/dataRecipes.js";
import { cards } from "../template/cards.js";

//? Fonction de recherche
export const launchSearch = () => {

	//? Récupération des tags d'ingrédients sélectionnés
	const tagsIngredientsList = document.querySelectorAll(
		".container__main__section__filtered__tags__lists__tags-ingredients--active li"
	);
	const selectedTagsIngredients = Array.from(tagsIngredientsList).map(
		(tag) => tag.textContent,
	);



	//? Récupération des tags d'appareils sélectionnés
	const tagsDevicesList = document.querySelectorAll(
		".container__main__section__filtered__tags__lists__tags-devices--active li"
	);
	const selectedTagsDevices = Array.from(tagsDevicesList).map(
		(tag) => tag.textContent
	);
  
  

	//? Récupération des tags d'ustensiles sélectionnés
	const tagsUstensilsList = document.querySelectorAll(
		".container__main__section__filtered__tags__lists__tags-ustensils--active li"
	);
	const selectedTagsUstensils = Array.from(tagsUstensilsList).map(
		(tag) => tag.textContent
	);



	//? Récupération de la valeur saisie dans l'input de recherche
	const searchInput = document.querySelector("#search-input");
	const searchTerm = searchInput.value.toLowerCase();



	//? Tableau pour stocker les recettes trouvées
	var foundRecipes = [];

	//? Parcours des recettes pour filtrer en fonction des critères sélectionnés
	dataRecipes.forEach((recipe) => {

		//? Récupération des ingrédients de la recette
		const recipeIngredients = recipe.ingredients.map((ingredient) => {
			if (ingredient && ingredient.ingredient) {
				return ingredient.ingredient.toLowerCase();
			}
		});


		//? Récupération des ustensiles de la recette
		const recipeUstensils = recipe.ustensils.map((ustensil) => {
			if (ustensil) {
				return ustensil.toLowerCase();
			}
		});


		//? Variables pour les contrôles des critères de filtrage
		let checkUstensil = true;
		let checkDevice = true;
		let checkIngredient = true;
		let checkSearch = true;

    
		//? Vérification des tags d'ingrédients sélectionnés
		if (selectedTagsIngredients.length > 0) {
			selectedTagsIngredients.forEach((tag) => {
				tag = tag.trim();
				if (!recipeIngredients.includes(tag.toLowerCase())) {
					checkIngredient = false;
				}
			});
		}



		// //? Vérification des tags d'appareils sélectionnés
		if (selectedTagsDevices.length > 0) {
			for (let i = 0; i < selectedTagsDevices.length; i++) {
				let tag = selectedTagsDevices[i].trim();
				if (!recipe.appliance.toLowerCase().includes(tag.toLowerCase())) {
					checkDevice = false;
				}
			}
		}


		//? Vérification des tags d'ustensiles sélectionnés
		if (selectedTagsUstensils.length > 0) {
			selectedTagsUstensils.forEach((tag) => {
				tag = tag.trim();
				if (!recipeUstensils.includes(tag.toLowerCase())) {
					checkUstensil = false;
				}
			});
		}


    
		//? Vérification du critère de recherche textuelle
		if (searchTerm.length >= 3) {
			if (
				!(recipe.name.toLowerCase().includes(searchTerm)) &&
        !recipeIngredients.includes(searchTerm) &&
        !(recipe.description.toLowerCase().includes(searchTerm))
			) {
				checkSearch = false;
			}
		}


		//? Ajout de la recette au tableau des recettes trouvées
		if (checkUstensil && checkDevice && checkIngredient && checkSearch) {
			foundRecipes.push(recipe);
		}
	});


	//? Récupération de la section des cartes
	const cardsSection = document.querySelector(
		".container__main__section__cards"
	);



	//? Affichage des résultats ou du message d'aucune recette trouvée
	if (foundRecipes.length === 0) {
		// eslint-disable-next-line quotes
		cardsSection.innerHTML = `<p id="no-recipes-message">Aucune recette trouvée :(</p>`;
	} else {
		cardsSection.innerHTML = "";
		foundRecipes.forEach((recipe) => {
			cardsSection.append(cards(recipe));
		});
	}



	// * INGREDIENTS SMALL *//
	// ! Filtered Dropdownd Ingrediants small :
	const searchInputIngredientsSmall = document.querySelector(
		"#sort__by__search__ingrédient__small"
	);

	const ingredientsArray = foundRecipes.flatMap(recipe =>
		recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase())
	);

	const ingredientSet = new Set(ingredientsArray);

	const allIngredientsArray = Array.from(ingredientSet);


	searchInputIngredientsSmall.addEventListener("input", (e) => {
		const searchValueIngredientsSmall = e.target.value.toLowerCase();

		const filteredIngredientsSmall = allIngredientsArray.filter((ingredient) =>
			ingredient.toLowerCase().includes(searchValueIngredientsSmall)
		);

		const ingredientsListSmall = document.querySelector(
			".container__main__section__dropdowns__lists__items__ingredients__small--active ul"
		);

		ingredientsListSmall.innerHTML = filteredIngredientsSmall
			.map((ingredient) => `<li>${ingredient}</li>`)
			.join("");
	});



	// * INGREDIENTS LARGE *//
	// ! Filtered Dropdownd Ingrediants large :
	const searchInputIngredientsLarge = document.querySelector(
		"#sort__by__search__ingrédient__small"
	);

	searchInputIngredientsLarge.addEventListener("click", (e) => {

		const searchValueIngredientsLarge = e.target.value.toLowerCase();
      
		const filteredIngredientsLarge = allIngredientsArray.filter((ingredient) =>
			ingredient.toLowerCase().includes(searchValueIngredientsLarge)
		);

		const ingredientsListLarge = document.querySelector(
			".container__main__section__dropdowns__lists__items__ingredients__large--active ul"
		);

		ingredientsListLarge.innerHTML = filteredIngredientsLarge
			.map((ingredient) => `<li>${ingredient}</li>`)
			.join("");
	});



	// ************************************************* Fin du DropDownFiltered Ingredient *********************************************************************//



	// * DEVICES SMALL *//
	// ! Filtered Dropdownd Devices small :
	const searchInputDevicesSmall = document.querySelector("#sort-by-appareil");

	const devicesArray = foundRecipes.map(recipe =>
		recipe.appliance.toLowerCase()
	);

	const devicesSet = new Set(devicesArray);

	const allDevicesArray = Array.from(devicesSet);


	searchInputDevicesSmall.addEventListener("input", (e) => {
		const searchValueDevicesSmall = e.target.value.toLowerCase();

		const filteredDevicesSmall = allDevicesArray.filter((appliance) =>
			appliance.includes(searchValueDevicesSmall)
		);

		const devicesListSmall = document.querySelector(
			".container__main__section__dropdowns__lists__items__devices__small--active ul"
		);

		devicesListSmall.innerHTML = filteredDevicesSmall
			.map((appliance) => `<li>${appliance}</li>`)
			.join("");
	});



	// * DEVICES LARGE *//
	// ! Filtered Dropdownd Devices large :
	const searchInputDevicesLarge = document.querySelector("#sort-by-appareil");

	searchInputDevicesLarge.addEventListener("click", (e) => {
		const searchValueDevicesLarge = e.target.value.toLowerCase();

		const filteredDevicesLarge = allDevicesArray.filter((appliance) =>
			appliance.includes(searchValueDevicesLarge)
		);

		const devicesListLarge = document.querySelector(
			".container__main__section__dropdowns__lists__items__devices__large--active ul"
		);
    
		devicesListLarge.innerHTML = filteredDevicesLarge
			.map((appliance) => `<li>${appliance}</li>`)
			.join("");
	});


	// ************************************************* Fin du DropDownFiltered Devices *********************************************************************//



	// * USTENSILS SMALL *//
	// ! Filtered Dropdownd Ustensils small :
	const searchInputUstensilsSmall = document.querySelector("#sort-by-ustensils");

	const ustensilsArray = foundRecipes.flatMap(recipe =>
		recipe.ustensils.map(ustensil => ustensil.toLowerCase())
	);
	const ustensilsSet = new Set(ustensilsArray);

	const allUstensilsArray = Array.from(ustensilsSet);

	searchInputUstensilsSmall.addEventListener("input", (e) => {
		const searchValueUstensilsSmall = e.target.value.toLowerCase();

		const filteredUstensilsSmall = allUstensilsArray.filter((ustensils) =>
			ustensils.includes(searchValueUstensilsSmall)
		);

		const ustensilsListSmall = document.querySelector(
			".container__main__section__dropdowns__lists__items__ustensils__small--active ul"
		);
		ustensilsListSmall.innerHTML = filteredUstensilsSmall
			.map((ustensils) => `<li>${ustensils}</li>`)
			.join("");
	});



	// * USTENSILS LARGE *//
	// ! Filtered Dropdownd Ustensils large :
	const searchInputUstensilsLarge = document.querySelector("#sort-by-ustensils");

	searchInputUstensilsLarge.addEventListener("click", (e) => {

		const searchValueUstensilsLarge = e.target.value.toLowerCase();

		const filteredUstensilsLarge = allUstensilsArray.filter((ustensils) =>
			ustensils.includes(searchValueUstensilsLarge)
		);

		const ustensilsListLarge = document.querySelector(
			".container__main__section__dropdowns__lists__items__ustensils__large--active ul"
		);
  
		ustensilsListLarge.innerHTML = filteredUstensilsLarge
			.map((ustensils) => `<li>${ustensils}</li>`)
			.join("");
	});
  
	// ************************************************* Fin du DropDownFiltered Ustensils *********************************************************************//

};

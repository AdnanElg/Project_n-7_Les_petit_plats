export const dropdownSelector = () => {

	//? Sélection des éléments HTML pour la recherche d'ingrédients
	let containerIngredientSmall = document.querySelector(".container__main__section__dropdowns__lists__items__ingredients__small");

	let ingredientSmallSearch = document.querySelector(
		"#sort__by__search__ingrédient__small"
	);

	let openListsSmallIngredient = document.querySelector(
		".container__main__section__dropdowns__lists__items__ingredients__small--active"
	);

	let listsSmallIngredient = document.querySelector(
		".container__main__section__dropdowns__lists__items__ingredients__small--active ul"
	);

	let openListsLargeIngredient = document.querySelector(
		".container__main__section__dropdowns__lists__items__ingredients__large--active"
	);

	let listsLargeIngredient = document.querySelector(
		".container__main__section__dropdowns__lists__items__ingredients__large--active ul"
	);

	let arrowSmallIngredientDown = document.querySelector(
		".container__main__section__dropdowns__lists__items__ingredients__small .fa-chevron-down"
	);

	let isDropdownIngredient = false;


	// ! IngredientSmall Input :
	//? Ajout d'un écouteur d'événements pour la recherche d'ingrédients
	ingredientSmallSearch.addEventListener("input", () => {
		//? Si la longueur de la chaîne de recherche est supérieure ou égale à 2 caractères et que le dropdown n'est pas étendu, affiche la liste déroulante des petits ingrédients
		if (ingredientSmallSearch.value.length >= 2 && !isDropdownIngredient) {
			openListsSmallIngredient.style.display = "block";
			arrowSmallIngredientDown.className = "arrows fas fa-chevron-up";
			listsSmallIngredient.style.height = "auto";
		} 
		//? Si non si la longueur de la chaîne de recherche est supérieure ou égale à 2 caractères et que le dropdown est étendu, affiche la liste déroulante des du grand ingrédients avec une height de auto.
		else if (ingredientSmallSearch.value.length >= 2 && isDropdownIngredient) {
			listsLargeIngredient.style.height = "auto";
		}
		//? Si la longueur de la chaîne de recherche est inférieure à 2 caractères, masque la liste déroulante des petits ingrédients, met la flèche vers le bas et rétablit la hauteur de la liste déroulante des grands ingrédients
		else {
			openListsSmallIngredient.style.display = "none";
			arrowSmallIngredientDown.className = "arrows fas fa-chevron-down";
		}
	});


	// ! IngredientLarge Click :
	//? Ajout d'un écouteur d'événements pour cliquer sur la flèche du menu déroulant
	arrowSmallIngredientDown.addEventListener("click", () => {
		//? Vérifie si le dropdown est déjà étendu
		if (!isDropdownIngredient) {
			//? Élargit le conteneur du dropdown en modifiant la largeur
			containerIngredientSmall.style.width = "500px";
			//? Modifie la position de la flèche
			arrowSmallIngredientDown.style.right = "45px";
			//? Modifie la classe de la flèche pour afficher une flèche vers le haut
			arrowSmallIngredientDown.className = "arrows fas fa-chevron-up";
			//? Ouvre la liste déroulante des grands ingrédients
			openListsLargeIngredient.style.display = "block";
			//? Masque la liste déroulante des petits ingrédients
			openListsSmallIngredient.style.display = "none"; 
			//? Met à jour l'état du dropdown pour indiquer qu'il est maintenant étendu
			isDropdownIngredient = true;    

		} else {
			//? Réduit le conteneur du dropdown en modifiant la largeur
			containerIngredientSmall.style.width = "300px";
			//? Modifie la position de la flèche
			arrowSmallIngredientDown.style.right = "25px";
			//? Modifie la classe de la flèche pour afficher une flèche vers le bas
			arrowSmallIngredientDown.className = "arrows fas fa-chevron-down";
			//? ferme la liste déroulante des grands ingrédients
			openListsLargeIngredient.style.display = "none";
			//? Met à jour l'état du dropdown pour indiquer qu'il n'est plus étendu
			isDropdownIngredient = false;
		}
	});

  
	// *************************************************** Fin dropdownSelector Ingredients **************************************************************************//


	//? Sélection des éléments HTML pour la recherche d'Appareils
	let containerApplianceSmall = document.querySelector(".container__main__section__dropdowns__lists__items__devices__small");

	let applianceSmallSearch = document.querySelector(
		"#sort-by-appareil"
	);

	let openListsSmallAppliance = document.querySelector(
		".container__main__section__dropdowns__lists__items__devices__small--active"
	);

	let listsSmallAppliance = document.querySelector(
		".container__main__section__dropdowns__lists__items__devices__small--active ul"
	);

	let openListsLargeAppliance = document.querySelector(
		".container__main__section__dropdowns__lists__items__devices__large--active"
	);

	let listsLargeAppliance = document.querySelector(
		".container__main__section__dropdowns__lists__items__devices__large--active ul"
	);

	let arrowSmallAppliance = document.querySelector(
		".container__main__section__dropdowns__lists__items__devices__small .fa-chevron-down"
	);

	let isDropdownAppliance = false;

  

	// ! ApplianceSmall :
	// Ajout d'un écouteur d'événements pour la recherche d'appareils
	applianceSmallSearch.addEventListener("input", () => {
		//? Si la longueur de la chaîne de recherche est supérieure ou égale à 2 caractères, affiche la liste déroulante
		if (applianceSmallSearch.value.length >= 2 && !isDropdownAppliance) {
			openListsSmallAppliance.style.display = "block";
			arrowSmallAppliance.className = "arrows fas fa-chevron-up";
			listsSmallAppliance.style.height = "auto";
		} 
		//? Si non si la longueur de la chaîne de recherche est supérieure ou égale à 2 caractères et que le dropdown est étendu, affiche la liste déroulante des grands appareils avec une hauteur de auto.
		else if (applianceSmallSearch.value.length >= 2 && isDropdownAppliance) {
			listsLargeAppliance.style.height = "auto";
		}
		//? Sinon, masque la liste déroulante, met la flèche vers le bas et rétablit la hauteur de la liste déroulante des grands appareils
		else {
			openListsSmallAppliance.style.display = "none";
			arrowSmallAppliance.className = "arrows fas fa-chevron-down";
		}
	});


	// ! ApplianceSmall Click :
	//? Ajout d'un écouteur d'événements pour que lorsque je click sur l'arrow le dropdown s'aggrandi
	arrowSmallAppliance.addEventListener("click", () => {
		//? Vérifie si le dropdown est déjà étendu
		if (!isDropdownAppliance) {
			//? Élargit le conteneur du dropdown en modifiant la largeur
			containerApplianceSmall.style.width = "500px";
			//? Modifie la position de la flèche
			arrowSmallAppliance.style.right ="45px";
			//? Modifie la classe de la flèche pour afficher une flèche vers le haut
			arrowSmallAppliance.className ="arrows fas fa-chevron-up";
			//? Ouvre la liste déroulante des grands Appliance
			openListsLargeAppliance.style.display = "block";
			//? Masque la liste déroulante des petits Appliance
			openListsSmallAppliance.style.display = "none"; 
			//? Met à jour l'état du dropdown pour indiquer qu'il est maintenant étendu
			isDropdownAppliance = true;
		} 
		else {
			//? Réduit le conteneur du dropdown en modifiant la largeur
			containerApplianceSmall.style.width = "300px";
			//? Modifie la position de la flèche
			arrowSmallAppliance.style.right ="25px";
			//? Modifie la classe de la flèche pour afficher une flèche vers le bas
			arrowSmallAppliance.className ="arrows fas fa-chevron-down";
			//? ferme la liste déroulante des grands ingrédients
			openListsLargeAppliance.style.display = "none";
			//? Met à jour l'état du dropdown pour indiquer qu'il n'est plus étendu
			isDropdownAppliance = false;
		}
	});


	// *************************************************** Fin dropdownSelector Appaliance **************************************************************************//


	//? Sélection des éléments HTML pour la recherche d'Ustensils
	let containerUstensilSmall = document.querySelector(".container__main__section__dropdowns__lists__items__ustensils__small");

	let ustensilsSmallSearch = document.querySelector(
		"#sort-by-ustensils"
	);

	let openListsSmallUstensils = document.querySelector(
		".container__main__section__dropdowns__lists__items__ustensils__small--active"
	);

	let listsSmallUstensils = document.querySelector(
		".container__main__section__dropdowns__lists__items__ustensils__small--active ul"
	);


	let arrowSmallUstensils = document.querySelector(
		".container__main__section__dropdowns__lists__items__ustensils__small .fa-chevron-down"
	);

	let openListsLargeUstensils = document.querySelector(
		".container__main__section__dropdowns__lists__items__ustensils__large--active"
	);

	let listsLargeUstensils = document.querySelector(
		".container__main__section__dropdowns__lists__items__ustensils__large--active ul"
	);

	let isDropdownUstensils = false;


	// ! UstensilsSmall :
	//? Ajout d'un écouteur d'événements pour la recherche d'ustensiles
	ustensilsSmallSearch.addEventListener("input", () => {
		//? Si la longueur de la chaîne de recherche est supérieure ou égale à 2 caractères, affiche la liste déroulante
		if (ustensilsSmallSearch.value.length >= 2 && !isDropdownUstensils) {
			openListsSmallUstensils.style.display = "block";
			arrowSmallUstensils.className = "arrows fas fa-chevron-up";
			listsSmallUstensils.style.height = "auto";
		}
		//? Si non si la longueur de la chaîne de recherche est supérieure ou égale à 2 caractères et que le dropdown est étendu, affiche la liste déroulante des grands ustensiles avec une hauteur de auto.
		else if (ustensilsSmallSearch.value.length >= 2 && isDropdownUstensils) {
			listsLargeUstensils.style.height = "auto";
		}
		//? Sinon, masque la liste déroulante, met la flèche vers le bas et rétablit la hauteur de la liste déroulante des grands ustensiles
		else {
			openListsSmallUstensils.style.display = "none";
			arrowSmallUstensils.className = "arrows fas fa-chevron-down";
		}
	});

  

	// ! UstensilsSmall Click :
	//? Ajout d'un écouteur d'événements pour que lorsque je click sur l'arrow le dropdown s'aggrandi
	arrowSmallUstensils.addEventListener("click", () => {
    
		//? Vérifie si le dropdown est déjà étendu
		if (!isDropdownUstensils) {
			//? Élargit le conteneur du dropdown en modifiant la largeur
			containerUstensilSmall.style.width = "500px";
			//? Modifie la position de la flèche
			arrowSmallUstensils.style.right ="45px";
			//? Modifie la classe de la flèche pour afficher une flèche vers le haut
			arrowSmallUstensils.className ="arrows fas fa-chevron-up";
			//? Ouvre la liste déroulante des grands Ustensils
			openListsLargeUstensils.style.display = "block";
			//? Masque la liste déroulante des petits Ustensils
			openListsSmallUstensils.style.display = "none"; 
			//? Met à jour l'état du dropdown pour indiquer qu'il est maintenant étendu
			isDropdownUstensils = true;
		} else {
		
			//? Réduit le conteneur du dropdown en modifiant la largeur
			containerUstensilSmall.style.width = "300px";
			//? Modifie la position de la flèche
			arrowSmallUstensils.style.right ="25px";
			//? Modifie la classe de la flèche pour afficher une flèche vers le bas
			arrowSmallUstensils.className ="arrows fas fa-chevron-down";
			//? ferme la liste déroulante des grands Ustensils
			openListsLargeUstensils.style.display = "none";
			//? Met à jour l'état du dropdown pour indiquer qu'il n'est plus étendu
			isDropdownUstensils = false;
		}
	});
};

// *************************************************** Fin dropdownSelector Ustensils **************************************************************************//

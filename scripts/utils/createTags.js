//? Import des modules
import { launchSearch } from "../utils/launchSearch.js";

export const createTags = () => {
  
	// * INGREGIENTS SMALL */
	//? Sélectionner tous les éléments ul dans les listes d'Ingredients
	const listsIngredientSmall = document.querySelectorAll(
		".container__main__section__dropdowns__lists__items__ingredients__small--active ul"
	);
	//? Tableau pour stocker les ingredients cliqués
	const clickedIngredients = [];
	//? Sélectionner la liste des tags d'ingredients
	const tagsIngredientsList = document.querySelector(
		".container__main__section__filtered__tags__lists__tags-ingredients--active"
	);
  
	//? Ajouter un événement click sur chaque élément de la liste d'ingredients
	listsIngredientSmall.forEach((ingredient) => {
		//? Effectue un addEventListener sur les li
		ingredient.addEventListener("click", (e) => {
			e.preventDefault();
			//? Renvoie l'élement cliquer
			const ingredient = e.target.textContent;
			//? Vérifier si l'ingrédient a déjà été cliqué
			if (!clickedIngredients.includes(ingredient)) {
				//? Ajouter l'ingrédient au tableau des ingredients cliqués
				clickedIngredients.push(ingredient);
				//? Créer un nouvel élément li pour afficher l'ingrédient cliqué
				const newTag = document.createElement("li");
				newTag.innerHTML = `${ingredient} <i class="fas fa-times-circle"></i>`;
				//? Afficher la liste des tags d'ingredients si elle n'est pas déjà affichée
				tagsIngredientsList.style.display = "flex";
				//? Ajouter le nouvel élément li à la liste des tags d'ingredients
				tagsIngredientsList.append(newTag);
				//? Sélectionner tous les éléments li de la liste des tags d'ingredients
				const allTagsIngredients = tagsIngredientsList.querySelectorAll("li");
				//? Ajouter un événement click pour chaque élément li de la liste des tags d'ingredients
				allTagsIngredients.forEach((tag, index) => {
					//? Sélectionner tous les éléments i dans li
					const tagCloseBtn = tag.querySelector("i");
					//? Je fait un addEventListener aux click sur le i dans le li pour suprimer le tag
					tagCloseBtn.addEventListener("click", (e) => {
						e.preventDefault();
						tag.remove();
						clickedIngredients.splice(index, 1); 
						launchSearch();
					});
				});
				launchSearch();
			}
		});
	});


	// * INGREGIENTS LARGE */
	//? Sélectionner tous les éléments ul dans les listes d'Ingredients
	const listsIngredientLarge = document.querySelectorAll(
		".container__main__section__dropdowns__lists__items__ingredients__large--active ul"
	);

	//? Ajouter un événement click sur chaque élément de la liste d'ingredients
	listsIngredientLarge.forEach((ingredient) => {
		//? Effectue un addEventListener sur les li
		ingredient.addEventListener("click", (e) => {
			e.preventDefault();
			//? Renvoie l'élement cliquer
			const ingredient = e.target.textContent;
			//? Vérifier si l'ingrédient a déjà été cliqué
			if (!clickedIngredients.includes(ingredient)) {
				//? Ajouter l'ingrédient au tableau des ingredients cliqués
				clickedIngredients.push(ingredient);
				//? Créer un nouvel élément li pour afficher l'ingrédient cliqué
				const newTag = document.createElement("li");
				newTag.innerHTML = `${ingredient} <i class="fas fa-times-circle"></i>`;
				//? Afficher la liste des tags d'ingredients si elle n'est pas déjà affichée
				tagsIngredientsList.style.display = "flex";
				//? Ajouter le nouvel élément li à la liste des tags d'ingredients
				tagsIngredientsList.append(newTag);
				//? Sélectionner tous les éléments li de la liste des tags d'ingredients
				const allTagsIngredients = tagsIngredientsList.querySelectorAll("li");
				//? Ajouter un événement click pour chaque élément li de la liste des tags d'ingredients
				allTagsIngredients.forEach((tag, index) => {
					//? Sélectionner tous les éléments i dans li
					const tagCloseBtn = tag.querySelector("i");
					//? Je fait un addEventListener aux click sur le i dans le li pour suprimer le tag
					tagCloseBtn.addEventListener("click", (e) => {
						e.preventDefault();
						tag.remove();
						clickedIngredients.splice(index, 1); 
						launchSearch();
					});
				});
				launchSearch();
			}
		});
	});


	//************************************************************ Fin des Tags Ingredients ***************************************************************//


	// * DEVICES SMALL */
	//? Sélectionner tous les éléments ul dans les listes devices
	const listsDevicesSmall = document.querySelectorAll(
		".container__main__section__dropdowns__lists__items__devices__small--active ul"
	);
	//? Tableau pour stocker les devices cliqués
	const clickedDevices = [];
	//? Sélectionner la liste des tags devices
	const tagsDevicesList = document.querySelector(
		".container__main__section__filtered__tags__lists__tags-devices--active"
	);

	//? Ajouter un événement click sur chaque élément de la liste devices
	listsDevicesSmall.forEach((devices) => {
		//? Effectue un addEventListener sur les li
		devices.addEventListener("click", (e) => {
			e.preventDefault();
			//? Renvoie l'élement cliquer
			const devices = e.target.textContent;
			//? Vérifier si l'ingrédient a déjà été cliqué
			if (!clickedDevices.includes(devices)) {
				//? Ajouter l'ingrédient au tableau des devices cliqués
				clickedDevices.push(devices);
				//? Créer un nouvel élément li pour afficher devices cliqué
				const newTag = document.createElement("li");
				newTag.innerHTML = `${devices} <i class="fas fa-times-circle"></i>`;
				//? Afficher la liste des tags devices si elle n'est pas déjà affichée
				tagsDevicesList.style.display = "flex";
				//? Ajouter le nouvel élément li à la liste des tags devices
				tagsDevicesList.append(newTag);
				//? Sélectionner tous les éléments li de la liste des tags devices
				const allTagsDevices = tagsDevicesList.querySelectorAll("li");
				//? Ajouter un événement click pour chaque élément li de la liste des tags devices
				allTagsDevices.forEach((tag, index) => {
					//? Sélectionner tous les éléments i dans li
					const tagCloseBtn = tag.querySelector("i");
					//? Je fait un addEventListener aux click sur le i dans le li pour suprimer le tag
					tagCloseBtn.addEventListener("click", (e) => {
						e.preventDefault();
						tag.remove();
						clickedDevices.splice(index, 1); 
						launchSearch();
					});
				});
				launchSearch();
			}
		});
	});



	// * DEVICES LARGE */
	//? Sélectionner tous les éléments ul dans les listes devices
	const listsDevicesLarge = document.querySelectorAll(
		".container__main__section__dropdowns__lists__items__devices__large--active ul"
	);

	//? Ajouter un événement click sur chaque élément de la liste devices
	listsDevicesLarge.forEach((devices) => {
		//? Effectue un addEventListener sur les li
		devices.addEventListener("click", (e) => {
			e.preventDefault();
			//? Renvoie l'élement cliquer
			const devices = e.target.textContent;
			//? Vérifier si l'ingrédient a déjà été cliqué
			if (!clickedDevices.includes(devices)) {
				//? Ajouter l'ingrédient au tableau des devices cliqués
				clickedDevices.push(devices);
				//? Créer un nouvel élément li pour afficher devices cliqué
				const newTag = document.createElement("li");
				newTag.innerHTML = `${devices} <i class="fas fa-times-circle"></i>`;
				//? Afficher la liste des tags devices si elle n'est pas déjà affichée
				tagsDevicesList.style.display = "flex";
				//? Ajouter le nouvel élément li à la liste des tags devices
				tagsDevicesList.append(newTag);
				//? Sélectionner tous les éléments li de la liste des tags devices
				const allTagsDevices = tagsDevicesList.querySelectorAll("li");
				//? Ajouter un événement click pour chaque élément li de la liste des tags devices
				allTagsDevices.forEach((tag, index) => {
					//? Sélectionner tous les éléments i dans li
					const tagCloseBtn = tag.querySelector("i");
					//? Je fait un addEventListener aux click sur le i dans le li pour suprimer le tag
					tagCloseBtn.addEventListener("click", (e) => {
						e.preventDefault();
						tag.remove();
						clickedDevices.splice(index, 1); 
						launchSearch();
					});
				});
				launchSearch();
			}
		});
	});



	//************************************************************ Fin des Tags Devices ***************************************************************//


	// * UTENSILS SMALL */
	// Sélectionner tous les éléments ul dans les listes
	const listsUstensilsSmall = document.querySelectorAll(
		".container__main__section__dropdowns__lists__items__ustensils__small--active ul"
	);
	//? Tableau pour stocker les utensils cliqués
	const clickedUtensils = [];
	//? Sélectionner la liste des tags d'utensils
	const tagsUtensilsList = document.querySelector(
		".container__main__section__filtered__tags__lists__tags-ustensils--active"
	);

	//? Ajouter un événement click sur chaque élément de la liste d'utensils
	listsUstensilsSmall.forEach((utensils) => {
		//? Effectue un addEventListener sur les li
		utensils.addEventListener("click", (e) => {
			e.preventDefault();
			//? Renvoie l'élement cliquer
			const utensils = e.target.textContent;
			//? Vérifier si l'utensils a déjà été cliqué
			if (!clickedUtensils.includes(utensils)) {
				//? Ajouter utensils au tableau des utensils cliqués
				clickedUtensils.push(utensils);
				//? Créer un nouvel élément li pour afficher utensils cliqué
				const newTag = document.createElement("li");
				newTag.innerHTML = `${utensils} <i class="fas fa-times-circle"></i>`;
				//? Afficher la liste des tags d'utensils si elle n'est pas déjà affichée
				tagsUtensilsList.style.display = "flex";
				//? Ajouter le nouvel élément li à la liste des tags d'utensils
				tagsUtensilsList.append(newTag);
				//? Sélectionner tous les éléments li de la liste des tags d'utensils
				const allTagsUtensils = tagsUtensilsList.querySelectorAll("li");
				//? Ajouter un événement click pour chaque élément li de la liste des tags d'utensils
				allTagsUtensils.forEach((tag, index) => {
					//? Sélectionner tous les éléments i dans li
					const tagCloseBtn = tag.querySelector("i");
					//? Je fait un addEventListener aux click sur le i dans le li pour suprimer le tag
					tagCloseBtn.addEventListener("click", (e) => {
						e.preventDefault();
						tag.remove();
						clickedUtensils.splice(index, 1); 
						launchSearch();
					});
				});
				launchSearch();
			}
		});
	});




	// * UTENSILS LARGE */
	//? Sélectionner tous les éléments ul dans les listes
	const listsUstensilsLarge = document.querySelectorAll(
		".container__main__section__dropdowns__lists__items__ustensils__large--active ul"
	);

	//? Ajouter un événement click sur chaque élément de la liste d'utensils
	listsUstensilsLarge.forEach((utensils) => {
		//? Effectue un addEventListener sur les li
		utensils.addEventListener("click", (e) => {
			e.preventDefault();
			//? Renvoie l'élement cliquer
			const utensils = e.target.textContent;
			//? Vérifier si l'utensils a déjà été cliqué
			if (!clickedUtensils.includes(utensils)) {
				//? Ajouter utensils au tableau des utensils cliqués
				clickedUtensils.push(utensils);
				//? Créer un nouvel élément li pour afficher utensils cliqué
				const newTag = document.createElement("li");
				newTag.innerHTML = `${utensils} <i class="fas fa-times-circle"></i>`;
				//? Afficher la liste des tags d'utensils si elle n'est pas déjà affichée
				tagsUtensilsList.style.display = "flex";
				//? Ajouter le nouvel élément li à la liste des tags d'utensils
				tagsUtensilsList.append(newTag);
				//? Sélectionner tous les éléments li de la liste des tags d'utensils
				const allTagsUtensils = tagsUtensilsList.querySelectorAll("li");
				//? Ajouter un événement click pour chaque élément li de la liste des tags d'utensils
				allTagsUtensils.forEach((tag, index) => {
					//? Sélectionner tous les éléments i dans li
					const tagCloseBtn = tag.querySelector("i");
					//? Je fait un addEventListener aux click sur le i dans le li pour suprimer le tag
					tagCloseBtn.addEventListener("click", (e) => {
						e.preventDefault();
						tag.remove();
						clickedUtensils.splice(index, 1); 
						launchSearch();
					});
				});
				launchSearch();
			}
		});
	});
};
//************************************************************ Fin des Tags Ustensils ***************************************************************//

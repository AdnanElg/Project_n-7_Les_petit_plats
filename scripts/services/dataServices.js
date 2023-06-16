//? Importation du module contenant les données des recettes
import { dataRecipes } from "../data/dataRecipes.js";

export const dataServices = {
	//? Fonction pour récupérer toutes les recettes
	async getAllRecipes() {
		try {
			//? Affichage des données pour vérification
			// console.log(dataRecipes);
			//? Retour des données
			return dataRecipes;
		} catch (err) {
			//? En cas d'erreur, affichage d'un message explicite
			throw new Error(`Error getting recipes: ${err.message}`);
		}
	},

	async getAllIngredients() {
		try {
			//? Récupération de tous les ingrédients dans un tableau d'arrays et les transforme en minuscule
			const ingredientsArrays = dataRecipes
				.map((recipe) => recipe.ingredients)
				.flat()
				.map((ingredient) => ingredient.ingredient.toLowerCase());

			//? Création d'un Set d'ingrédients pour éviter les doublons
			const allIngredientsSet = new Set(ingredientsArrays);

			//? Conversion du Set en tableau
			const allIngredients = Array.from(allIngredientsSet);

			//? Affichage des données pour vérification
			// console.log(allIngredients);
			//? Retour des données
			return allIngredients;
		} catch (err) {
			//? En cas d'erreur, affichage d'un message explicite
			throw new Error(`Error getting ingredients: ${err.message}`);
		}
	},

	//? Fonction pour récupérer tous les appareils
	async getAllAppliance() {
		try {
			//? Récupération de tous les appareils dans un tableau et les transforme en minuscule
			const applianceArrays = dataRecipes.map((recipe) =>
				recipe.appliance.toLowerCase()
			);

			//? Création d'un Set d'appliance pour éviter les doublons
			const allApplianceSet = new Set(applianceArrays);

			//? Conversion du Set en tableau
			const allAppliance = Array.from(allApplianceSet);

			//? Affichage des données pour vérification
			// console.log(allAppliance);

			//? Retour des données
			return allAppliance;
		} catch (err) {
			//? En cas d'erreur, affichage d'un message explicite
			throw new Error(`Error getting appliance: ${err.message}`);
		}
	},

	//? Fonction pour récupérer tous les ustensiles
	async getAllUstensils() {
		try {
			//? Récupération de tous les ustensiles dans un tableau et les transforme en minuscule
			const ustensilsArrays = dataRecipes
				.map((recipe) => recipe.ustensils)
				.flat()
				.map((ustensil) => ustensil.toLowerCase());

			//? Création d'un Set d'ustensils pour éviter les doublons
			const allUstensilsSet = new Set(ustensilsArrays);

			//? Conversion du Set en tableau
			const allUstensils = Array.from(allUstensilsSet);

			//? Affichage des données pour vérification
			// console.log(allUstensils);

			//? Retour des données
			return allUstensils;
		} catch (err) {
			//? En cas d'erreur, affichage d'un message explicite
			throw new Error(`Error getting ustensils: ${err.message}`);
		}
	},
};

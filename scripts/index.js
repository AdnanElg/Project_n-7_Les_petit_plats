import { dataServices } from "./services/dataServices.js";
import { tags } from "./template/tags.js";
import { dropdowns } from "./template/dropdowns.js";
import { cards } from "./template/cards.js";

const index = async () => {
  const recipesAll = await dataServices.getAllRecipes(); //? Récupère toutes les recettes
  const ingredientAll = await dataServices.getAllIngredients(); //? Récupère tous les ingrédients
  const applianceAll = await dataServices.getAllAppliance(); //? Récupère tous les appareils de cuisine
  const ustensilsAll = await dataServices.getAllUstensils(); //? Récupère tous les ustensiles de cuisine

  const tagsListElement = document.querySelector(
    ".container__main__section__filtered__tags"
  );
  tagsListElement.append(tags()); //? Ajoute les tags à la section des tags filtrés

  const dropdownsSection = document.querySelector(
    ".container__main__section__dropdowns__lists"
  );
  dropdownsSection.append(dropdowns(ingredientAll, applianceAll, ustensilsAll)); //? Ajoute les menus déroulants à la section des menus déroulants

  recipesAll.forEach((recipesAll) => {
    const cardsSection = document.querySelector(
      ".container__main__section__cards"
    );
    cardsSection.append(cards(recipesAll)); //? Ajoute les cartes de recettes à la section des cartes
  });
};

index(); //? Exécute la fonction principale

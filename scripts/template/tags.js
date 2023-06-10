//? Import des modules
import { createTags } from "../utils/createTags.js";

export const tags = () => {
  //? Crée un élément div pour la liste des tags
  const tagsListElement = document.createElement("div");

  //? Ajoute une classe à l'élément div créé précédemment
  tagsListElement.classList.add(
    "container__main__section__filtered__tags__lists"
  );

  //? Template HTML pour la liste des tags
  const tagsTemplate = `
    <ul class='container__main__section__filtered__tags__lists__tags-ingredients--active'>

    </ul>

    <ul class='container__main__section__filtered__tags__lists__tags-devices--active'>
   
    </ul>

    <ul class='container__main__section__filtered__tags__lists__tags-ustensils--active'>
     
    </ul>
  `;

  //? Ajoute le template HTML à l'élément div
  tagsListElement.innerHTML = tagsTemplate;

  setTimeout(() => {
    createTags();
  }, 50);

  //? Retourne l'élément div contenant la liste des tags
  return tagsListElement;
};

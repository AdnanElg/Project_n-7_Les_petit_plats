//? Import des modules
import { dropdownSelector } from "../utils/dropdown-selector.js";

export const dropdowns = (ingredients, appliance, ustensils) => {
  //? Création du container pour les dropdowns
  const dropdownsContainer = document.createElement("div");

  //? Ajout de la classe CSS au container
  dropdownsContainer.classList.add(
    "container__main__section__dropdowns__lists__items"
  );

  //? Création du template pour les dropdowns
  const dropdownsTemplate = `

        <div
          class="container__main__section__dropdowns__lists__items__ingredients__small"
        >
          <input
            type="text"
            id="sort__by__search__ingrédient__small"
            placeholder="Ingrédients"
          />
          <label for="sort__by__search__ingrédient__small">
            <i class="arrows fas fa-chevron-down"></i>
          </label>
          <div
            class="container__main__section__dropdowns__lists__items__ingredients__small--active"
          >
            <ul>
              ${ingredients
                .map((ingredient) => `<li>${ingredient}</li>`)
                .join("")}
            </ul>
          </div>
          <div
            class="container__main__section__dropdowns__lists__items__ingredients__large--active"
          >
            <ul>
              ${ingredients
                .map((ingredient) => `<li>${ingredient}</li>`)
                .join("")}
            </ul>
          </div>
        </div> 


        <div
          class="container__main__section__dropdowns__lists__items__devices__small"
        >
          <input type="text" id="sort-by-appareil" placeholder="Appareils" />
          <label for="sort-by-appareil">
            <i class="arrows fas fa-chevron-down"></i>
          </label>
          <div
            class="container__main__section__dropdowns__lists__items__devices__small--active"
          >
            <ul>
              ${appliance.map((appliance) => `<li>${appliance}</li>`).join("")}
            </ul>
          </div>
          <div
            class="container__main__section__dropdowns__lists__items__devices__large--active"
          >
            <ul>
              ${appliance
                .map((appliance) => `<li>${appliance}</li>`)
                .join("")}
            </ul>
          </div>
        </div> 


        <div
          class="container__main__section__dropdowns__lists__items__ustensils__small"
        >
          <input type="text" id="sort-by-ustensils" placeholder="Ustensils" />
          <label for="sort-by-ustensils">
            <i class="arrows fas fa-chevron-down"></i>
          </label> 
          <div
            class="container__main__section__dropdowns__lists__items__ustensils__small--active"
          >
            <ul>
              ${ustensils.map((ustensils) => `<li>${ustensils}</li>`).join("")}
            </ul>
          </div>
          <div
            class="container__main__section__dropdowns__lists__items__ustensils__large--active"
          >
            <ul>
              ${ustensils
                .map((ustensils) => `<li>${ustensils}</li>`)
                .join("")}
            </ul>
          </div>
        </div>
  `;

  //? Ajout du template à l'intérieur du container
  dropdownsContainer.innerHTML = dropdownsTemplate;

  setTimeout(() => {
    dropdownSelector();
  }, 50);

  //? Renvoie le container avec les dropdowns
  return dropdownsContainer;
};

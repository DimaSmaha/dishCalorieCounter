import { generateInitialIngredientsInputs } from "./modules/ingredients/ingredientsInputs.mjs";

window.onload = function () {
  if (document.title == "Dish Calorie Counter") {
    generateInitialIngredientsInputs();
  }
};

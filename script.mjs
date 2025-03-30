import loc from "./const/locators.mjs";
import { renderDishNutritions } from "./modules/ingredients/calculateValues.mjs";
import { generateInitialIngredientsInputs } from "./modules/ingredients/ingredientsInputs.mjs";

window.onload = function () {
  if (document.title == "Dish Calorie Counter") {
    generateInitialIngredientsInputs();
  }
};

loc.getDishCaloriesBtn.addEventListener("click", () => {
  renderDishNutritions();
});

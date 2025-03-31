import loc from "./const/locators.mjs";
import { renderDishNutritions } from "./modules/calculateNutritionsValues.mjs";
import { generateInitialIngredientsInputs } from "./modules/ingredientsInputs.mjs";

window.onload = function () {
  if (document.title == "Dish Calorie Counter") {
    generateInitialIngredientsInputs();
  }
};

loc.getDishCaloriesBtn.addEventListener("click", () => {
  renderDishNutritions();
});

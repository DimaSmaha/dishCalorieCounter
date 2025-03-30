import loc from "./const/locators.mjs";
import { getNutritionsPerHundredGrams } from "./modules/ingredients/calculateValues.mjs";
import { generateInitialIngredientsInputs } from "./modules/ingredients/ingredientsInputs.mjs";

window.onload = function () {
  if (document.title == "Dish Calorie Counter") {
    generateInitialIngredientsInputs();
  }
};

loc.getDishCaloriesBtn.addEventListener("click", () => {
  getNutritionsPerHundredGrams();
});

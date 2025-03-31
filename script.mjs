import loc from "./const/locators.mjs";
import { renderDishNutritions } from "./modules/calculateNutritionsValues.mjs";
import { generateInitialIngredientsInputs } from "./modules/ingredientsInputs.mjs";

window.onload = function () {
  if (document.title == "Dish Calorie Counter") {
    generateInitialIngredientsInputs();
  }
  if (document.title == "Saved Dishes") {
    console.log("GUT");
  }
};

if (document.title == "Dish Calorie Counter") {
  loc.getDishCaloriesBtn.addEventListener("click", () => {
    renderDishNutritions();
  });
}

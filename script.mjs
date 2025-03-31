import loc from "./const/locators.mjs";
import { renderDishNutritions } from "./modules/calculateNutritionsValues.mjs";
import { generateInitialIngredientsInputs } from "./modules/ingredientsInputs.mjs";
import { renderSavedDishes } from "./modules/savedDishesDisplay.mjs";
import { setImportExportTools } from "./modules/savedDishesImportExport.mjs";

window.onload = function () {
  if (document.title == "Dish Calorie Counter") {
    generateInitialIngredientsInputs();
  }
  if (document.title == "Saved Dishes") {
    renderSavedDishes();
    setImportExportTools();
  }
};

if (document.title == "Dish Calorie Counter") {
  loc.getDishCaloriesBtn.addEventListener("click", () => {
    renderDishNutritions();
  });
}

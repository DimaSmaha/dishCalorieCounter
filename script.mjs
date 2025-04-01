import loc from "./const/locators.mjs";
import { renderDishNutritions } from "./modules/calculateNutritionsValues.mjs";
import {
  generateInitialIngredientsInputs,
  setDeleteInputBtns,
} from "./modules/ingredientsInputs.mjs";
import { renderSavedDishes } from "./modules/savedDishesDisplay.mjs";
import { setImportExportTools } from "./modules/savedDishesImportExport.mjs";
import {
  setConfirmSaveDishBtn,
  setDeclineSaveDishBtn,
  setSaveButton,
} from "./modules/saveDish.mjs";

window.onload = function () {
  if (document.title == "Dish Calorie Counter") {
    generateInitialIngredientsInputs();
    setSaveButton();
    setDeclineSaveDishBtn();
    setConfirmSaveDishBtn();
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

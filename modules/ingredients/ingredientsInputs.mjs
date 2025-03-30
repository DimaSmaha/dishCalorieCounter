import loc from "../../const/locators.mjs";
import { renderDishNutritions } from "./calculateValues.mjs";

function generateIngredientInput() {
  const generateId = loc.inputBox.length;

  loc.ingredientsBox.insertAdjacentHTML(
    "beforeEnd",
    `
    <div class='inputBox' id="inputBox_${generateId}">
      <input class="ingredientInput mandatory" type="number" placeholder="Weight gr" id="weightInput_${generateId}"/>

      
      <input class="ingredientInput mandatory" type="number" placeholder="Calories per 100gr" id="caloriesInput_${generateId}" />
      <input class="ingredientInput" type="number" placeholder="Protein per 100gr" id="proteinInput_${generateId}"/>
      <input class="ingredientInput" type="number" placeholder="Fats per 100gr" id="fatsInput_${generateId}"/>
      <input class="ingredientInput" type="number" placeholder="Carbohydrates per 100gr" id="carbsInput_${generateId}" />
    </div>
      `
  );
}

function deleteIngredientInput() {
  const generateLastId = loc.inputBox.length - 1;

  const getLastInput = document.getElementById(`inputBox_${generateLastId}`);
  if (generateLastId > 1) {
    getLastInput.remove();
  }
  if (generateLastId <= 1) {
    console.log(" U can not have less than 2 inputs");
  }
}

export function generateInitialIngredientsInputs() {
  generateIngredientInput();
  generateIngredientInput();
}

loc.addIngredientBtn.addEventListener("click", () => {
  generateIngredientInput();
});

loc.removeInputBtn.addEventListener("click", () => {
  deleteIngredientInput();
  renderDishNutritions();
});

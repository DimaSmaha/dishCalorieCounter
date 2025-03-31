import loc from "../const/locators.mjs";
import { renderDishNutritions } from "./calculateNutritionsValues.mjs";

function generateIngredientInput() {
  const generateId = loc.inputBox.length;

  loc.ingredientsBox.insertAdjacentHTML(
    "beforeEnd",
    `
    <div class='inputBox' id="inputBox_${generateId}">
      <input class="ingredientInput" type="string" placeholder="Ingredient Name" id="ingredientInput_${generateId}"/>
      <input class="ingredientInput mandatory" type="number" placeholder="Weight gr" id="weightInput_${generateId}"/>
      <input class="ingredientInput mandatory" type="number" placeholder="Calories per 100gr" id="caloriesInput_${generateId}" />
      <input class="ingredientInput" type="number" placeholder="Protein per 100gr" id="proteinInput_${generateId}"/>
      <input class="ingredientInput" type="number" placeholder="Fats per 100gr" id="fatsInput_${generateId}"/>
      <input class="ingredientInput" type="number" placeholder="Carbs per 100gr" id="carbsInput_${generateId}" />
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
    loc.removeInputBtnError.style.display = "flex";
    setTimeout(() => {
      loc.removeInputBtnError.style.display = "none";
    }, 3000);
  }
}

function deleteAllIngredientsInputs() {
  const generateId = loc.inputBox.length;

  for (let i = generateId - 1; i > 1; i--) {
    const getLastInput = document.getElementById(`inputBox_${i}`);
    getLastInput.remove();
  }
}

function clearInputs() {
  const generateId = loc.inputBox.length;

  for (let i = 0; i < generateId; i++) {
    loc.ingredientInputByNumber(i).value = "";
    loc.weightInputByNumber(i).value = "";
    loc.caloriesInputByNumber(i).value = "";
    loc.proteinInputByNumber(i).value = "";
    loc.fatsInputByNumber(i).value = "";
    loc.carbsInputByNumber(i).value = "";
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

loc.clearInputsBtn.addEventListener("click", () => {
  clearInputs();
  renderDishNutritions();
});

loc.resetInputsBtn.addEventListener("click", () => {
  deleteAllIngredientsInputs();
  clearInputs();
  renderDishNutritions();
});

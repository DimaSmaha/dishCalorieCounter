import loc from "../../const/locators.mjs";

function generateIngredientInput() {
  const generateId = loc.inputBox.length;

  loc.ingredientsBox.insertAdjacentHTML(
    "beforeEnd",
    `
    <div class='inputBox' id="inputBox_${generateId}">
      <input class="ingredientInput mandatory" type="number" placeholder="Weight (gr)" id="weightInput_${generateId}"/>
      <input class="ingredientInput mandatory" type="number" placeholder="Calories per 100gr" id="caloriesInput_${generateId}" />
      <input class="ingredientInput" type="number" placeholder="Protein (gr)" id="proteinInput_${generateId}"/>
      <input class="ingredientInput" type="number" placeholder="Fats (gr)" id="fatsInput_${generateId}"/>
      <input class="ingredientInput" type="number" placeholder="Carbohydrates (gr)" id="carbsInput_${generateId}" />
    </div>
      `
  );
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
});

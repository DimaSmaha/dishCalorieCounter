import loc from "./../const/locators.mjs";
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
      <button class="savedDishesControlBtn" id="removeIngredientInput_${generateId}">DEL</button>
      <button class="acceptBtn" id="confirmRemoveIngredientInput_${generateId}" style="display: none"><b>V</b></button>
      <button class="cancelBtn" id="declineRemoveIngredientInput_${generateId}" style="display: none"><b>X</b></button>
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
  setDeleteInputBtns();
}

if (document.title == "Dish Calorie Counter") {
  loc.addIngredientBtn.addEventListener("click", () => {
    generateIngredientInput();
    setDeleteInputBtns();
  });

  loc.removeInputBtn.addEventListener("click", () => {
    deleteIngredientInput();
    renderDishNutritions();
    setDeleteInputBtns();
  });

  loc.clearInputsBtn.addEventListener("click", () => {
    clearInputs();
    renderDishNutritions();
  });

  loc.resetInputsBtn.addEventListener("click", () => {
    deleteAllIngredientsInputs();
    clearInputs();
    renderDishNutritions();
    setDeleteInputBtns();
  });
}

// export function setDeleteInputBtns() {
//   for (let i = 0; i < loc.inputBox.length; i++) {
//     document
//       .getElementById(`removeIngredientInput_${i}`)
//       .addEventListener("click", () => {
//         document.getElementById(`removeIngredientInput_${i}`).style.display =
//           "none";
//         document.getElementById(
//           `confirmRemoveIngredientInput_${i}`
//         ).style.display = "inline-block";
//         document.getElementById(
//           `declineRemoveIngredientInput_${i}`
//         ).style.display = "inline-block";
//       });
//     document
//       .getElementById(`confirmRemoveIngredientInput_${i}`)
//       .addEventListener("click", () => {
//         deleteInputByNumber(i);
//         renderDishNutritions();
//         setDeleteInputBtns();
//       });
//     document
//       .getElementById(`declineRemoveIngredientInput_${i}`)
//       .addEventListener("click", () => {
//         document.getElementById(`removeIngredientInput_${i}`).style.display =
//           "inline-block";
//         document.getElementById(
//           `confirmRemoveIngredientInput_${i}`
//         ).style.display = "none";
//         document.getElementById(
//           `declineRemoveIngredientInput_${i}`
//         ).style.display = "none";
//       });
//   }
// }

export function setDeleteInputBtns() {
  // I got it from chatgpt
  for (let i = 0; i < loc.inputBox.length; i++) {
    const confirmBtn = document.getElementById(
      `confirmRemoveIngredientInput_${i}`
    );
    const removeBtn = document.getElementById(`removeIngredientInput_${i}`);
    const declineBtn = document.getElementById(
      `declineRemoveIngredientInput_${i}`
    );

    if (!confirmBtn || !removeBtn || !declineBtn) continue;

    // Remove previous event listeners by cloning the elements
    const newConfirmBtn = confirmBtn.cloneNode(true);
    const newRemoveBtn = removeBtn.cloneNode(true);
    const newDeclineBtn = declineBtn.cloneNode(true);

    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
    removeBtn.parentNode.replaceChild(newRemoveBtn, removeBtn);
    declineBtn.parentNode.replaceChild(newDeclineBtn, declineBtn);

    newRemoveBtn.addEventListener("click", () => {
      newRemoveBtn.style.display = "none";
      newConfirmBtn.style.display = "inline-block";
      newDeclineBtn.style.display = "inline-block";
    });

    newConfirmBtn.addEventListener("click", () => {
      deleteInputByNumber(i);
      renderDishNutritions();
      setDeleteInputBtns();
    });

    newDeclineBtn.addEventListener("click", () => {
      newRemoveBtn.style.display = "inline-block";
      newConfirmBtn.style.display = "none";
      newDeclineBtn.style.display = "none";
    });
  }
}

function getCurrentInputValues() {
  const inputNumber = loc.inputBox.length;

  let currentInputValuesArr = [];
  for (let i = 0; i < inputNumber; i++) {
    let rowValues = {};

    rowValues.ingredientInput = loc.ingredientInputByNumber(i).value;
    rowValues.weightInput = loc.weightInputByNumber(i).value;
    rowValues.caloriesInput = loc.caloriesInputByNumber(i).value;
    rowValues.proteinInput = loc.proteinInputByNumber(i).value;
    rowValues.fatsInput = loc.fatsInputByNumber(i).value;
    rowValues.carbsInput = loc.carbsInputByNumber(i).value;

    currentInputValuesArr.push(rowValues);
  }

  return currentInputValuesArr;
}

function deleteInputByNumber(i) {
  const getInputsNum = loc.inputBox.length - 1;

  if (getInputsNum > 1) {
    let getInputValues = getCurrentInputValues();
    getInputValues.splice(i, 1);
    recalculateIngredientInputs(getInputValues);
  }
  if (getInputsNum <= 1) {
    loc.removeInputBtnError.style.display = "flex";
    setTimeout(() => {
      loc.removeInputBtnError.style.display = "none";
    }, 3000);
  }
}

function recalculateIngredientInputs(valuesArr) {
  loc.ingredientsBox.innerHTML = "";

  for (let i = 0; i < valuesArr.length; i++) {
    loc.ingredientsBox.insertAdjacentHTML(
      "beforeEnd",
      `
    <div class='inputBox' id="inputBox_${i}">
      <input class="ingredientInput" type="string" placeholder="Ingredient Name" id="ingredientInput_${i}" value="${valuesArr[i].ingredientInput}"/>
      <input class="ingredientInput mandatory" type="number" placeholder="Weight gr" id="weightInput_${i}"value="${valuesArr[i].weightInput}"/>
      <input class="ingredientInput mandatory" type="number" placeholder="Calories per 100gr" id="caloriesInput_${i}" value="${valuesArr[i].caloriesInput}"/>
      <input class="ingredientInput" type="number" placeholder="Protein per 100gr" id="proteinInput_${i}"value="${valuesArr[i].proteinInput}"/>
      <input class="ingredientInput" type="number" placeholder="Fats per 100gr" id="fatsInput_${i}"value="${valuesArr[i].fatsInput}"/>
      <input class="ingredientInput" type="number" placeholder="Carbs per 100gr" id="carbsInput_${i}" value="${valuesArr[i].carbsInput}"/>
      <button class="savedDishesControlBtn" id="removeIngredientInput_${i}">DEL</button>
      <button class="acceptBtn" id="confirmRemoveIngredientInput_${i}" style="display: none"><b>V</b></button>
      <button class="cancelBtn" id="declineRemoveIngredientInput_${i}" style="display: none"><b>X</b></button>
    </div>
    `
    );
  }
}

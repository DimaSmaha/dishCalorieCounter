import { formatIngredietsList } from "../../const/ingredientsList.helper.mjs";
import loc from "../../const/locators.mjs";
import {
  getNumberFromInput,
  verifyValueIsNaN,
} from "../../const/numbers.helper.mjs";
import { getStringFromInput } from "../../const/string.helper.mjs";
import { saveDish } from "./saveDish.mjs";

function getIngredietsNutritions() {
  const generateInputRows = loc.inputBox.length;

  let ingredientsArr = [];

  for (let i = 0; i < generateInputRows; i++) {
    const ingredientName = getStringFromInput(loc.ingredientInputByNumber(i));
    const weight = getNumberFromInput(loc.weightInputByNumber(i));
    const calories = getNumberFromInput(loc.caloriesInputByNumber(i));
    const protein = getNumberFromInput(loc.proteinInputByNumber(i));
    const fats = getNumberFromInput(loc.fatsInputByNumber(i));
    const carbs = getNumberFromInput(loc.carbsInputByNumber(i));

    const generateObj = {
      ingredientName,
      weight,
      calories,
      protein,
      fats,
      carbs,
    };
    ingredientsArr.push(generateObj);
  }
  return ingredientsArr;
}

function getIngredientNutritionsPerHundredGrams() {
  const ingredientsArr = getIngredietsNutritions();

  const nutritionsPerHundred = [];
  for (let i = 0; i < ingredientsArr.length; i++) {
    const getTotalIngredientName = `${ingredientsArr[i].ingredientName}`;
    const getTotalWeight = ingredientsArr[i].weight;
    const getTotalCalories =
      (ingredientsArr[i].calories * ingredientsArr[i].weight) / 100;
    const getTotalProtein =
      (ingredientsArr[i].protein * ingredientsArr[i].weight) / 100;
    const getTotalFats =
      (ingredientsArr[i].fats * ingredientsArr[i].weight) / 100;
    const getTotalCarbs =
      (ingredientsArr[i].carbs * ingredientsArr[i].weight) / 100;

    const generateObj = {
      getTotalIngredientName,
      getTotalWeight,
      getTotalCalories,
      getTotalProtein,
      getTotalFats,
      getTotalCarbs,
    };
    nutritionsPerHundred.push(generateObj);
  }

  console.log("get Ingredients Nutritions", nutritionsPerHundred);
  return nutritionsPerHundred;
}

function getTotalDishNutritions() {
  const getIngredientsNutritions = getIngredientNutritionsPerHundredGrams();

  let ingredientsList = ``;
  let weightSum = 0;
  let caloriesSum = 0;
  let proteinSum = 0;
  let fatsSum = 0;
  let carbsSum = 0;

  for (let i = 0; i < getIngredientsNutritions.length; i++) {
    ingredientsList += `${getIngredientsNutritions[i].getTotalIngredientName}, `;
    weightSum += getIngredientsNutritions[i].getTotalWeight;
    caloriesSum += getIngredientsNutritions[i].getTotalCalories;
    proteinSum += getIngredientsNutritions[i].getTotalProtein;
    fatsSum += getIngredientsNutritions[i].getTotalFats;
    carbsSum += getIngredientsNutritions[i].getTotalCarbs;
  }

  const totalNutritions = {
    ingredientsList,
    weightSum,
    caloriesSum,
    proteinSum,
    fatsSum,
    carbsSum,
  };
  console.log("total Dish Nutritions", totalNutritions);
  return totalNutritions;
}

function getDishNutritionPerHundredGrams() {
  const totalNutritions = getTotalDishNutritions();

  let getCaloriesPerHundredGrams =
    (totalNutritions.caloriesSum / totalNutritions.weightSum) * 100;
  let getProteinsPerHundredGrams =
    (totalNutritions.proteinSum / totalNutritions.weightSum) * 100;
  let getFatsPerHundredGrams =
    (totalNutritions.fatsSum / totalNutritions.weightSum) * 100;
  let getCarbsPerHundredGrams =
    (totalNutritions.carbsSum / totalNutritions.weightSum) * 100;
  let getTotalWeight = totalNutritions.weightSum;

  getCaloriesPerHundredGrams = verifyValueIsNaN(getCaloriesPerHundredGrams);
  getProteinsPerHundredGrams = verifyValueIsNaN(getProteinsPerHundredGrams);
  getFatsPerHundredGrams = verifyValueIsNaN(getFatsPerHundredGrams);
  getCarbsPerHundredGrams = verifyValueIsNaN(getCarbsPerHundredGrams);
  getTotalWeight = verifyValueIsNaN(getTotalWeight);

  const nutritionsPerHundredGrams = {
    getCaloriesPerHundredGrams,
    getProteinsPerHundredGrams,
    getFatsPerHundredGrams,
    getCarbsPerHundredGrams,
    getTotalWeight,
  };

  console.log("nutritionsPerHundredGrams", nutritionsPerHundredGrams);
  return { totalNutritions, nutritionsPerHundredGrams };
}

export function renderDishNutritions() {
  const totalNutritions = getDishNutritionPerHundredGrams().totalNutritions;
  const nutritionsPerHundredGrams =
    getDishNutritionPerHundredGrams().nutritionsPerHundredGrams;

  const ingredientsList = formatIngredietsList(totalNutritions.ingredientsList);
  const weightSum = totalNutritions.weightSum.toFixed(0);
  const caloriesSum = totalNutritions.caloriesSum.toFixed(0);
  const proteinSum = totalNutritions.proteinSum.toFixed(0);
  const fatsSum = totalNutritions.fatsSum.toFixed(0);
  const carbsSum = totalNutritions.carbsSum.toFixed(0);
  const caloriesPerHundredGrams =
    nutritionsPerHundredGrams.getCaloriesPerHundredGrams.toFixed(0);
  const proteinsPerHundredGrams =
    nutritionsPerHundredGrams.getProteinsPerHundredGrams.toFixed(0);
  const fatsPerHundredGrams =
    nutritionsPerHundredGrams.getFatsPerHundredGrams.toFixed(0);
  const carbsPerHundredGrams =
    nutritionsPerHundredGrams.getCarbsPerHundredGrams.toFixed(0);

  const dishNutritionsValues = document.querySelector("#dishNutritionsValues");

  if (dishNutritionsValues) {
    dishNutritionsValues.remove();
  }

  loc.dishNutritionsBox.insertAdjacentHTML(
    "beforeEnd",
    `
    <div id="dishNutritionsValues">
      <h2>Total dish nutritions are</h2>
      <p>Total Weight: <b>${weightSum}gr</b> <br>
      Total Calories and nutritions: <b>${caloriesSum}/${proteinSum}/${fatsSum}/${carbsSum}</b></p>
      <p>Calories per 100gr: <b>${caloriesPerHundredGrams}</b> <br>
      Proteins per 100gr: <b>${proteinsPerHundredGrams}</b>, Fats per 100gr: <b>${fatsPerHundredGrams}</b>, Carbs per 100gr: <b>${carbsPerHundredGrams}</b></p>
      <p>Your dish: <b>${ingredientsList}</b></p>
      <button id='saveDishBtn'>Save Dish</button>
      <input id='customDishNameInput' class='ingredientInput' placeholder='Enter dish name' style="display: none;">
      <button class="acceptBtn" id="confirmSaveDishBtn" style="display: none;"><b>V</b></button>
      <button class="cancelBtn" id="declineSaveDishBtn" style="display: none;"><b>X</b></button
    </div>
    `
  );
  const saveDishBtn = document.getElementById("saveDishBtn");
  const customDishNameInput = document.getElementById("customDishNameInput");
  const confirmSaveDishBtn = document.getElementById("confirmSaveDishBtn");
  const declineSaveDishBtn = document.getElementById("declineSaveDishBtn");

  saveDishBtn.addEventListener("click", () => {
    saveDishBtn.style.display = "none";
    customDishNameInput.style.display = "inline-block";
    confirmSaveDishBtn.style.display = "inline-block";
    declineSaveDishBtn.style.display = "inline-block";
  });

  declineSaveDishBtn.addEventListener("click", () => {
    saveDishBtn.style.display = "inline-block";
    customDishNameInput.style.display = "none";
    confirmSaveDishBtn.style.display = "none";
    declineSaveDishBtn.style.display = "none";
  });

  confirmSaveDishBtn.addEventListener("click", () => {
    customDishNameInput.value;
    saveDish({
      weightSum,
      caloriesSum,
      proteinSum,
      fatsSum,
      carbsSum,
      caloriesPerHundredGrams,
      proteinsPerHundredGrams,
      fatsPerHundredGrams,
      caloriesPerHundredGrams,
      ingredientsList,
    });
  });
}

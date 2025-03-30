import loc from "../../const/locators.mjs";

const getNumberFromInput = (locator) =>
  Number(locator.value) > 0 ? Number(locator.value) : 0;

function getIngredietsNutritions() {
  const generateInputRows = loc.inputBox.length;

  let ingredientsArr = [];

  for (let i = 0; i < generateInputRows; i++) {
    const weight = getNumberFromInput(loc.weightInputByNumber(i));
    const calories = getNumberFromInput(loc.caloriesInputByNumber(i));
    const protein = getNumberFromInput(loc.proteinInputByNumber(i));
    const fats = getNumberFromInput(loc.fatsInputByNumber(i));
    const carbs = getNumberFromInput(loc.carbsInputByNumber(i));

    const generateObj = { weight, calories, protein, fats, carbs };
    ingredientsArr.push(generateObj);
  }
  return ingredientsArr;
}

function getIngredientNutritionsPerHundredGrams() {
  const ingredientsArr = getIngredietsNutritions();

  const nutritionsPerHundred = [];
  for (let i = 0; i < ingredientsArr.length; i++) {
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
      getTotalWeight,
      getTotalCalories,
      getTotalProtein,
      getTotalFats,
      getTotalCarbs,
    };
    nutritionsPerHundred.push(generateObj);
  }

  console.log("get Ingredients Nutritions", getIngredientsNutritions);
  return nutritionsPerHundred;
}

function getTotalDishNutritions() {
  const getIngredientsNutritions = getIngredientNutritionsPerHundredGrams();

  let weightSum = 0;
  let caloriesSum = 0;
  let proteinSum = 0;
  let fatsSum = 0;
  let carbsSum = 0;

  for (let i = 0; i < getIngredientsNutritions.length; i++) {
    weightSum += getIngredientsNutritions[i].getTotalWeight;
    caloriesSum += getIngredientsNutritions[i].getTotalCalories;
    proteinSum += getIngredientsNutritions[i].getTotalProtein;
    fatsSum += getIngredientsNutritions[i].getTotalFats;
    carbsSum += getIngredientsNutritions[i].getTotalCarbs;
  }

  const totalNutritions = {
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

  const getCaloriesPerHundredGrams = (
    (totalNutritions.caloriesSum / totalNutritions.weightSum) *
    100
  ).toFixed(0);
  const getProteinsPerHundredGrams = (
    (totalNutritions.proteinSum / totalNutritions.weightSum) *
    100
  ).toFixed(0);
  const getFatsPerHundredGrams = (
    (totalNutritions.fatsSum / totalNutritions.weightSum) *
    100
  ).toFixed(0);
  const getCarbsPerHundredGrams = (
    (totalNutritions.carbsSum / totalNutritions.weightSum) *
    100
  ).toFixed(0);
  const getTotalWeight = totalNutritions.weightSum.toFixed(0);

  const nutritionsPerHundredGrams = {
    getCaloriesPerHundredGrams,
    getProteinsPerHundredGrams,
    getFatsPerHundredGrams,
    getCarbsPerHundredGrams,
    getTotalWeight,
  };

  console.log("nutritionsPerHundredGrams", nutritionsPerHundredGrams);
  return nutritionsPerHundredGrams;
}

export function renderDishNutritions() {}

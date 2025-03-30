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

export function getNutritionsPerHundredGrams() {
  const ingredientsArr = getNutritionsSum();

  for (let i = 0; i < ingredientsArr.length; i++) {
    const getTotalCalories =
      (ingredientsArr[i].calories * ingredientsArr[i].weight) / 100;
    const getTotalProtein =
      (ingredientsArr[i].protein * ingredientsArr[i].weight) / 100;
    const getTotalFats =
      (ingredientsArr[i].fats * ingredientsArr[i].weight) / 100;
    const getTotalCarbs =
      (ingredientsArr[i].carbs * ingredientsArr[i].weight) / 100;

    console.log(getTotalCalories);
  }
}

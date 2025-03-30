class Locators {
  constructor() {
    this.ingredientsBox = document.querySelector("#ingredientsBox");
    this.getDishCaloriesBtn = document.querySelector("#getDishCalories");
    this.addIngredientBtn = document.getElementById("addInputBtn");
    this.removeInputBtn = document.getElementById("removeInputBtn");
    this.ingredietsNutritionsBox = document.querySelector(
      "#ingredietsNutritionsBox"
    );
    this.dishNutritionsBox = document.querySelector("#dishNutritionsBox");
    this.dishNutritionsValues = document.querySelector("#dishNutritionsValues");

    this.ingredientInput = document.querySelector("#ingredientInput");
    this.inputBox = document.getElementsByClassName("inputBox");

    this.weightInputByNumber = (n) =>
      document.querySelector(`#weightInput_${n}`);
    this.caloriesInputByNumber = (n) =>
      document.querySelector(`#caloriesInput_${n}`);
    this.proteinInputByNumber = (n) =>
      document.querySelector(`#proteinInput_${n}`);
    this.fatsInputByNumber = (n) => document.querySelector(`#fatsInput_${n}`);
    this.carbsInputByNumber = (n) => document.querySelector(`#carbsInput_${n}`);
  }
}

export default new Locators();

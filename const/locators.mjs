class Locators {
  constructor() {
    this.ingredientsBox = document.querySelector("#ingredientsBox");
    this.getDishCaloriesBtn = document.querySelector("#getDishCalories");
    this.addIngredientBtn = document.getElementById("addInputBtn");
    this.removeInputBtn = document.getElementById("removeInputBtn");
    this.clearInputsBtn = document.getElementById("clearInputsBtn");
    this.resetInputsBtn = document.getElementById("resetInputsBtn");
    this.ingredietsNutritionsBox = document.querySelector(
      "#ingredietsNutritionsBox"
    );
    this.dishNutritionsBox = document.querySelector("#dishNutritionsBox");
    this.dishNutritionsValues = document.querySelector("#dishNutritionsValues");

    this.ingredientInput = document.querySelector("#ingredientInput");
    this.inputBox = document.getElementsByClassName("inputBox");

    this.ingredientInputByNumber = (n) =>
      document.querySelector(`#ingredientInput_${n}`);
    this.weightInputByNumber = (n) =>
      document.querySelector(`#weightInput_${n}`);
    this.caloriesInputByNumber = (n) =>
      document.querySelector(`#caloriesInput_${n}`);
    this.proteinInputByNumber = (n) =>
      document.querySelector(`#proteinInput_${n}`);
    this.fatsInputByNumber = (n) => document.querySelector(`#fatsInput_${n}`);
    this.carbsInputByNumber = (n) => document.querySelector(`#carbsInput_${n}`);

    this.removeInputBtnError = document.getElementById("removeInputBtnError");

    this.saveDishBtn = document.getElementById("saveDishBtn");
    this.confirmSaveDishBtn = document.getElementById("confirmSaveDishBtn");
    this.declineSaveDishBtn = document.getElementById("declineSaveDishBtn");
    this.customDishNameInput = document.getElementById("customDishNameInput");
    this.noCustomNameError = document.getElementById("noCustomNameError");
    this.dishAddedNotification = document.getElementById(
      "dishAddedNotification"
    );

    this.savedDishesBox = document.getElementById("savedDishesBox");
    this.savedDishesControlBox = document.getElementsByClassName(
      "savedDishesControlBox"
    );
  }
}

export default new Locators();

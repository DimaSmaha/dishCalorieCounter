class Locators {
  constructor() {
    this.ingredientsBox = document.querySelector("#ingredientsBox");
    this.getDishCaloriesBtn = document.getElementById("getDishCalores");
    this.addIngredientBtn = document.getElementById("addInputBtn");
    this.removeInputBtn = document.getElementById("removeInputBtn");

    this.ingredientInput = document.querySelector("#ingredientInput");
    this.inputBox = document.getElementsByClassName("inputBox");
  }
}

export default new Locators();

import { formatIngredietsList } from "../const/ingredientsList.helper.mjs";
import loc from "../const/locators.mjs";
import { getCookie, setCookie } from "./cookies/cookies.mjs";

export const renderSavedDishes = () => {
  let dishes = getCookie("savedDishes");

  // if length 0, make empty state
  for (let i = 0; i < dishes.length; i++) {
    let formulateIngredients = "";
    for (let ii = 0; ii < dishes[i].ingredientsArr.length; ii++) {
      formulateIngredients += `${dishes[i].ingredientsArr[ii].ingredientName} - ${dishes[i].ingredientsArr[ii].weight}gr, `;
    }

    formulateIngredients = formatIngredietsList(formulateIngredients);

    loc.savedDishesBox.insertAdjacentHTML(
      "beforeend",
      `
      <div class="savedDish" id="savedDish_${i}">
          <h4 class="dishTitle">${dishes[i].customDishName}</h4>
          <p class="dishDesciption">
          Ingrediets: ${dishes[i].ingredientsList}
          <br>
          Nutritions per 100grams (P/F/C): ${dishes[i].caloriesPerHundredGrams}cal/${dishes[i].proteinsPerHundredGrams}/${dishes[i].fatsPerHundredGrams}/${dishes[i].carbsPerHundredGrams}. 
          <br>
          <br>
          Ingredients list: ${formulateIngredients} Total weight ${dishes[i].weightSum}gr.
          <br>
          Total nutritions with this ingredients (P/F/C): ${dishes[i].caloriesSum}cal/${dishes[i].proteinSum}/${dishes[i].fatsSum}/${dishes[i].carbsSum}
          </p>
      </div>
      <div class="savedDishesControlBox" id="savedDishesControlBox_${i}">
          <button class="savedDishesControlBtn" id="deleteSavedDish_${i}">DEL</button>
          <button class="acceptBtn" id="confirmDeleteDishBtn_${i}" style="display: none">
          <b>V</b>
          </button>
          <button class="cancelBtn" id="declineDeleteDishBtn_${i}" style="display: none">
          <b>X</b>
          </button>
      </div>
      `
    );
  }
  setDeleteSavedDishesBtns();
};

const setDeleteSavedDishesBtns = () => {
  for (let i = 0; i < loc.savedDishesControlBox.length; i++) {
    document
      .getElementById(`deleteSavedDish_${i}`)
      .addEventListener("click", () => {
        document.getElementById(`deleteSavedDish_${i}`).style.display = "none";
        document.getElementById(`confirmDeleteDishBtn_${i}`).style.display =
          "inline-block";
        document.getElementById(`declineDeleteDishBtn_${i}`).style.display =
          "inline-block";
      });
    document
      .getElementById(`confirmDeleteDishBtn_${i}`)
      .addEventListener("click", () => {
        deleteDishByNumber(i);
      });
    document
      .getElementById(`declineDeleteDishBtn_${i}`)
      .addEventListener("click", () => {
        document.getElementById(`deleteSavedDish_${i}`).style.display =
          "inline-block";
        document.getElementById(`confirmDeleteDishBtn_${i}`).style.display =
          "none";
        document.getElementById(`declineDeleteDishBtn_${i}`).style.display =
          "none";
      });
  }
};

const deleteDishByNumber = (i) => {
  document.getElementById(`savedDishesBox`).innerHTML = "";

  let dishes = getCookie("savedDishes");
  dishes.splice(i, 1);
  setCookie("savedDishes", dishes);

  renderSavedDishes();
};

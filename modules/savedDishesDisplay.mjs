import { formatIngredietsList } from "./../const/ingredientsList.helper.mjs";
import loc from "./../const/locators.mjs";
import { getCookie, setCookie } from "./cookies/cookies.mjs";

export const renderSavedDishes = () => {
  document.getElementById(`savedDishesBox`).innerHTML = "";

  let dishes = getCookie("savedDishes");

  if (dishes == undefined) {
    loc.savedDishesBox.insertAdjacentHTML(
      "beforeend",
      `
      <h3>Currently you didnt save any dishes</h3>
      `
    );
    return;
  }

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
          <p class="dishDescription">
          Ingredients: ${dishes[i].ingredientsList} ${dishes[i].description}
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
          <button class="savedDishesControlBtn" id="editDescriptionForSavedDish_${i}">EditDescription</button>
          <input id="editDescriptionForSavedDishInput_${i}" class="ingredientInput" placeholder="Description" style="display: none" value='${dishes[i].description}'/>
          <button class="acceptBtn" id="confirmDescriptionForSavedBtn_${i}" style="display: none"><b>V</b></button>
          <button class="cancelBtn" id="declineDescriptionForSavedBtn_${i}" style="display: none"><b>X</b></button>
          <div class="error" id="emptyDescriptionInputError_${i}" style="display: none">
            <b>The input can not be empty<b>
          </div>
          <button class="savedDishesControlBtn" id="deleteSavedDish_${i}">DEL</button>
          <button class="acceptBtn" id="confirmDeleteDishBtn_${i}" style="display: none"><b>V</b></button>
          <button class="cancelBtn" id="declineDeleteDishBtn_${i}" style="display: none"><b>X</b></button>
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

    //
    document
      .getElementById(`editDescriptionForSavedDish_${i}`)
      .addEventListener("click", () => {
        document.getElementById(
          `editDescriptionForSavedDish_${i}`
        ).style.display = "none";
        document.getElementById(
          `confirmDescriptionForSavedBtn_${i}`
        ).style.display = "inline-block";
        document.getElementById(
          `declineDescriptionForSavedBtn_${i}`
        ).style.display = "inline-block";
        document.getElementById(
          `editDescriptionForSavedDishInput_${i}`
        ).style.display = "inline-block";
      });
    document
      .getElementById(`confirmDescriptionForSavedBtn_${i}`)
      .addEventListener("click", () => {
        editDishByNumber(i);
      });
    document
      .getElementById(`declineDescriptionForSavedBtn_${i}`)
      .addEventListener("click", () => {
        document.getElementById(
          `editDescriptionForSavedDish_${i}`
        ).style.display = "inline-block";
        document.getElementById(
          `confirmDescriptionForSavedBtn_${i}`
        ).style.display = "none";
        document.getElementById(
          `declineDescriptionForSavedBtn_${i}`
        ).style.display = "none";
        document.getElementById(
          `editDescriptionForSavedDishInput_${i}`
        ).style.display = "none";
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

const editDishByNumber = (i) => {
  const inputValue = document.getElementById(
    `editDescriptionForSavedDishInput_${i}`
  ).value;

  if (inputValue == "") {
    document.getElementById(`emptyDescriptionInputError_${i}`).style.display =
      "inline";
    setTimeout(() => {
      document.getElementById(`emptyDescriptionInputError_${i}`).style.display =
        "none";
    }, 3000);
    return;
  }

  let dishes = getCookie("savedDishes");

  dishes[i].description = inputValue;

  setCookie("savedDishes", dishes);

  renderSavedDishes();
};

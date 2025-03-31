import loc from "../const/locators.mjs";
import { getCookie, setCookie } from "./cookies/cookies.mjs";

export const saveDish = (dishObj) => {
  if (getCookie("savedDishes") == undefined) {
    const getDishesArr = [];
    getDishesArr.push(dishObj);
    setCookie("savedDishes", getDishesArr);
    return;
  }

  if (getCookie("savedDishes") != undefined) {
    const getDishesArr = getCookie("savedDishes");
    getDishesArr.push(dishObj);
    setCookie("savedDishes", getDishesArr);
  }
};

const showSaveBtn = () => {
  loc.saveDishBtn.style.display = "inline-block";
  loc.customDishNameInput.style.display = "none";
  loc.confirmSaveDishBtn.style.display = "none";
  loc.declineSaveDishBtn.style.display = "none";
  loc.customDishNameInput.value = "";
};

const showSaveInput = () => {
  loc.saveDishBtn.style.display = "none";
  loc.customDishNameInput.style.display = "inline-block";
  loc.confirmSaveDishBtn.style.display = "inline-block";
  loc.declineSaveDishBtn.style.display = "inline-block";
};

export const setSaveButton = () => {
  loc.saveDishBtn.addEventListener("click", () => {
    showSaveInput();
  });
};

export const setDeclineSaveDishBtn = () => {
  loc.declineSaveDishBtn.addEventListener("click", () => {
    showSaveBtn();
  });
};

export const setConfirmSaveDishBtn = (saveDishObj) => {
  loc.confirmSaveDishBtn.addEventListener("click", () => {
    if (loc.customDishNameInput.value == "") {
      loc.noCustomNameError.style.display = "inline";
      setTimeout(() => {
        loc.noCustomNameError.style.display = "none";
      }, 3000);
      return;
    }

    const customDishName = loc.customDishNameInput.value;

    saveDishObj.customDishName = customDishName;
    saveDishObj.description = "";

    saveDish(saveDishObj);
    showSaveBtn();

    loc.dishAddedNotification.style.display = "inline";
    setTimeout(() => {
      loc.dishAddedNotification.style.display = "none";
    }, 3000);
  });
};

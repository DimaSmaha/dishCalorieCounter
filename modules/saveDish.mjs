import { getCookie, setCookie } from "./cookies/cookies.mjs";

export const saveDish = (dishObj) => {
  if (getCookie("savedDishes") == undefined) {
    const getDishesArr = [];
    getDishesArr.push(dishObj);
    setCookie("savedDishes", getDishesArr);
  }

  if (getCookie("savedDishes") != undefined) {
    const getDishesArr = getCookie("savedDishes");
    getDishesArr.push(dishObj);
    setCookie("savedDishes", getDishesArr);
  }
};

import { exampleImportDish } from "./../const/exampleImport.mjs";
import loc from "./../const/locators.mjs";
import { verifyPropertyOfObject } from "./../const/verifyProperties.mjs";
import { getCookie, setCookie } from "./cookies/cookies.mjs";
import { renderSavedDishes } from "./savedDishesDisplay.mjs";

export const setImportExportTools = () => {
  loc.importSavedDishesDataBtn.addEventListener("click", () => {
    importData();
  });
  loc.exportSavedDishesDataBtn.addEventListener("click", () => {
    exportData();
  });
};

const importData = () => {
  if (document.getElementById("textAreaBox")) {
    return;
  }

  const data = getCookie("savedDishes");
  let textAreaValue = "";

  document.querySelector(".tools").insertAdjacentHTML(
    "beforeend",
    `
      <div id='textAreaBox'>
          <textarea id='textArea'>${JSON.stringify(
            exampleImportDish
          )}</textarea>
          <button class='acceptBtn' id='acceptTextAreaBtn'>V</button>
          <input type="checkbox" id='saveOldValuesCheckbox' name='saveOldValuesCheckbox'>
          <label for='saveOldValuesCheckbox'>Save old dishes</label>
          <button class='cancelBtn' id='closeTextAreaBtn'>X</button>
      <div>
      `
  );

  document.getElementById("closeTextAreaBtn").addEventListener("click", () => {
    document.getElementById("textAreaBox").remove();
  });

  document.getElementById("acceptTextAreaBtn").addEventListener("click", () => {
    textAreaValue = document.getElementById("textArea").value;
    let newDishesObj = JSON.parse(textAreaValue.trim());

    for (let i = 0; i < newDishesObj.length; i++) {
      newDishesObj[i].weightSum = verifyPropertyOfObject(
        newDishesObj[i].weightSum
      );
      newDishesObj[i].caloriesSum = verifyPropertyOfObject(
        newDishesObj[i].caloriesSum
      );
      newDishesObj[i].proteinSum = verifyPropertyOfObject(
        newDishesObj[i].proteinSum
      );
      newDishesObj[i].fatsSum = verifyPropertyOfObject(newDishesObj[i].fatsSum);
      newDishesObj[i].carbsSum = verifyPropertyOfObject(
        newDishesObj[i].carbsSum
      );
      newDishesObj[i].caloriesPerHundredGrams = verifyPropertyOfObject(
        newDishesObj[i].caloriesPerHundredGrams
      );
      newDishesObj[i].proteinsPerHundredGrams = verifyPropertyOfObject(
        newDishesObj[i].proteinsPerHundredGrams
      );
      newDishesObj[i].fatsPerHundredGrams = verifyPropertyOfObject(
        newDishesObj[i].fatsPerHundredGrams
      );
      newDishesObj[i].carbsPerHundredGrams = verifyPropertyOfObject(
        newDishesObj[i].carbsPerHundredGrams
      );
      newDishesObj[i].ingredientsList = verifyPropertyOfObject(
        newDishesObj[i].ingredientsList
      );
      newDishesObj[i].ingredientsArr = verifyPropertyOfObject(
        newDishesObj[i].ingredientsArr
      );
      newDishesObj[i].customDishName = verifyPropertyOfObject(
        newDishesObj[i].customDishName
      );
      newDishesObj[i].ingredientsArr = verifyPropertyOfObject(
        newDishesObj[i].ingredientsArr
      );
    }

    for (let i = 0; i < newDishesObj.length; i++) {
      //   console.log("gggg", typeof newDishesObj[i].ingredientsArr);
      if (newDishesObj[i].ingredientsArr !== "notSpecified") {
        for (let ii = 0; ii < newDishesObj[i].ingredientsArr.length; ii++) {
          newDishesObj[i].ingredientsArr[ii].ingredientName =
            verifyPropertyOfObject(
              newDishesObj[i]?.ingredientsArr[ii].ingredientName
            );
          newDishesObj[i].ingredientsArr[ii].weight = verifyPropertyOfObject(
            newDishesObj[i]?.ingredientsArr[ii].weight
          );
          newDishesObj[i].ingredientsArr[ii].calories = verifyPropertyOfObject(
            newDishesObj[i]?.ingredientsArr[ii].calories
          );
          newDishesObj[i].ingredientsArr[ii].protein = verifyPropertyOfObject(
            newDishesObj[i]?.ingredientsArr[ii].protein
          );
          newDishesObj[i].ingredientsArr[ii].fats = verifyPropertyOfObject(
            newDishesObj[i]?.ingredientsArr[ii].fats
          );
          newDishesObj[i].ingredientsArr[ii].carbs = verifyPropertyOfObject(
            newDishesObj[i]?.ingredientsArr[ii].carbs
          );
        }
      }
      if (newDishesObj[i].ingredientsArr == "notSpecified") {
        newDishesObj[i].ingredientsArr = [];
        for (let ii = 0; ii < newDishesObj[i].ingredientsArr.length; ii++) {
          newDishesObj[i].ingredientsArr[ii].ingredientName = "notSpecified";
          newDishesObj[i].ingredientsArr[ii].weight = "notSpecified";
          newDishesObj[i].ingredientsArr[ii].calories = "notSpecified";
          newDishesObj[i].ingredientsArr[ii].protein = "notSpecified";
          newDishesObj[i].ingredientsArr[ii].fats = "notSpecified";
          newDishesObj[i].ingredientsArr[ii].carbs = "notSpecified";
        }
      }
    }

    if (document.getElementById("saveOldValuesCheckbox").checked) {
      for (let i = data.length; i > 0; i--) {
        newDishesObj.unshift(data[i - 1]);
      }
    }
    document.getElementById("textAreaBox").remove();

    setCookie("savedDishes", newDishesObj);
    renderSavedDishes();
  });
};

const exportData = () => {
  if (document.getElementById("textAreaBox")) {
    return;
  }

  const data = getCookie("savedDishes");

  document.querySelector(".tools").insertAdjacentHTML(
    "beforeend",
    `
    <div id='textAreaBox'>
        <textarea id='textArea'>${JSON.stringify(data)}
        </textarea>
        <button class='cancelBtn' id='closeTextAreaBtn'>X</button>
    <div>
    `
  );

  document.getElementById("textArea").focus();
  document.getElementById("textArea").select();
  document.getElementById("closeTextAreaBtn").addEventListener("click", () => {
    document.getElementById("textAreaBox").remove();
  });
};

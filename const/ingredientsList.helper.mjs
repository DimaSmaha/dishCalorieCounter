export function formatIngredietsList(ingredientsList) {
  ingredientsList = ingredientsList.replace(/ ,/g, "").replace(/, $/, ".");

  return ingredientsList;
}

export const getStringFromInput = (locator) =>
  String(locator.value) !== "" ? String(locator.value) : "";

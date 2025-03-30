export const verifyValueIsNaN = (value) => (isNaN(value) ? 0 : value);

export const getNumberFromInput = (locator) =>
  Number(locator.value) > 0 ? Number(locator.value) : 0;

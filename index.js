/***
 * @description Parse a value into a valid Boolean
 * @param {unknown} value Value to parse to bool
 * @returns {boolean}
 */
export const parseBool = (value) => {
  const s =
    value === null || value === undefined
      ? ""
      : String(value).trim().toLowerCase();

  switch (s) {
    case "true":
    case "1":
    case "yes":
    case "y":
    case "on":
      return true;

    default:
      return false;
  }
};

export default parseBool;

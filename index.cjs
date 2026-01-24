/***
 * @description Parse a value into a valid Boolean
 * @param {unknown} value Value to parse to bool
 * @returns {boolean}
 */
const parseBool = (value) => {
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
module.exports = parseBool;
module.exports.parseBool = parseBool;
module.exports.default = parseBool;

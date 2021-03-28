const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  if (arr.length === 0 || typeof(arr) != 'object') return arr;

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next' || arr[i] == '--discard-prev' || arr[i] == '--double-next' || arr[i] == '--double-prev') {
      continue;
    }

    if (arr[i - 1] == '--discard-next') {
      continue;
    }

    if (arr[i - 1] == '--double-next') {
      newArr.push(arr[i], arr[i]);
    } else {
      newArr.push(arr[i]);
    }

    if (arr[i + 1] == '--discard-prev') {
      newArr.splice(newArr.length - 1, 1);
    }

    if (arr[i + 1] == '--double-prev') {
        newArr.push(arr[i]);
    }
  }

  return newArr;
};
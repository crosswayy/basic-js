const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach((elem) => {
    elem.forEach((el) => {
      if (el === '^^')
        count++;
    });
  });

  return count;
};

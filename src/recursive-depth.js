const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;
    maxDepth = Math.max(...arr.map((elem) =>
      Array.isArray(elem) ?
        this.calculateDepth(elem) : 0), maxDepth);
    return maxDepth + 1;
  }
};
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (Number(sampleActivity) != sampleActivity) return false;
  if (typeof(sampleActivity) != 'string') return false;
  if (sampleActivity.trim() == '') return false;
  if (sampleActivity <= 0) return false;
  let solution = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  if (solution <= 0) return false;

  return solution;
};
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  throw new CustomError('Not implemented');

  if (Number(sampleActivity) != sampleActivity || typeof(sampleActivity) != 'string') return false;
  let solution = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  return solution;
};

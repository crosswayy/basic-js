const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  let addition;

  if ('addition' in options) {
    addition = [];
    if (options.additionRepeatTimes) {
      addition.length = options.additionRepeatTimes;
    } else {
      addition.length = 1;
    }
    addition.fill(options.addition + '');
    addition = addition.join(options.additionSeparator);
  } else {
    addition = '';
  }

  let result = [];
  if (options.repeatTimes) {
    result.length = options.repeatTimes;
  } else {
    result.length = 1;
  }
  result.fill(str + addition);
  result = result.join(options.separator);

  return result;
};
  
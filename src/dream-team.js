const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof(members) != 'object') return false;
  if (!members) return false;
  if (!members.length) return false;
  let dreamTeam = '';

  members.forEach((elem) => {
    if (typeof(elem) != 'string') return false;
    dreamTeam += elem.trim()[0].toUpperCase();
  });

  return dreamTeam.split('').sort().join('');
};

const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type === false ? 'reverse' : 'direct';
  }

  encrypt(message, key) {
    if (!message || !key) throw Error;

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];;
    let result = '';
    let c;
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) != -1) {
        c = (alphabet.indexOf(message[i]) + alphabet.indexOf(key[keyIndex])) % 26;
        result += alphabet[c];
        if (keyIndex + 1 == key.length)
          keyIndex = 0;
        else
          keyIndex++;
      } else {
        result += message[i];
      }
    }

    result = this.type == 'direct' ? result : result.split('').reverse().join('');
    return result;
  }

  decrypt(message, key) {
    if (!message || !key) throw Error;

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let result = '';
    let p;
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) != -1) {
        p = (alphabet.indexOf(message[i]) + 26 - alphabet.indexOf(key[keyIndex])) % 26;
        result += alphabet[p];
        if (keyIndex + 1 == key.length)
          keyIndex = 0;
        else
          keyIndex++;
      } else {
        result += message[i];
      }
    }

    result = this.type == 'direct' ? result : result.split('').reverse().join('');
    return result;
  }
}

module.exports = VigenereCipheringMachine;

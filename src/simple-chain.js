const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (typeof(value) == 'undefined') {
      value = '( )';
    } else {
      value = `( ${value} )`;
    }

    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof(position) == 'number' && position < this.chain.length && position > 0) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain=[];
      throw Error;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let chainEnd = '';
    for (let i = 0; i < this.chain.length; i++) {
      if (i == 0) chainEnd += this.chain[i];
      else chainEnd += `~~${this.chain[i]}`;
    }
    this.chain = [];
    return chainEnd;
  }
};

module.exports = chainMaker;

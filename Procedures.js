const Rpc = require("./Rpc");

module.exports = class Procedures extends Rpc {
  multiplyByOneThousand(number) {
    console.log("Multiplying!");
    return number * 1000;
  }

  doSquareRoot(number) {
    console.log("Square Rooting!");
    return Math.sqrt(number);
  }
};

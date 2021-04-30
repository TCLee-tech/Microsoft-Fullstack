console.log("LTC");

const randomer = require('complete-randomer');

var ranNumber = randomer.NUMBER.INTEGER(10,20);
console.log(ranNumber);

var ranString = randomer.STRING.GIBBERISH(15);
console.log(ranString);

var ranHex = randomer.COLOR.HEX();
console.log(ranHex);
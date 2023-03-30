const add = function(n1, n2) {
  n1 += n2;
  return n1;
};

const subtract = function(n1, n2) {
	n1 -= n2;
  return n1;
};

const sum = function(array, sum) {
  if (array.length > 0){
    let sum = 0;
    for (let i=0; i<array.length; i++){
      sum += array[i];
    }
    return sum;
  } else {
    return 0;
  }


};

const multiply = function(array) {
  let product = 1;
  for (let i = 0; i<array.length;i++){
      product = product * array[i];
  }
  product = parseInt(product);
  return product;
};

const power = function(num, pow) {
  return Math.pow(num, pow);

	
};

const factorial = function(num) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

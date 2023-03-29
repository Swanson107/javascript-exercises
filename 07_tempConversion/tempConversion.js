const convertToCelsius = function(tempf) {
  let tempc = (tempf - 32) * 5/9;
  newTemp = parseFloat(tempc).toFixed(1);
  newTemp = parseFloat(newTemp);
  return newTemp;
};

const convertToFahrenheit = function(tempc) {
  let tempf = (tempc * 9/5) + 32;
  newTemp = parseFloat(tempf).toFixed(1);
  newTemp = parseFloat(newTemp);
  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

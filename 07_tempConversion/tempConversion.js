const convertToCelsius = function(temp) {
  let convertedTemp = (temp - 32) * 5/9;
  if (!Number.isInteger(convertedTemp)) {
      return parseFloat(convertedTemp.toFixed(1));
  }else {
      return parseFloat(convertedTemp);
  }
};
const convertToFahrenheit = function(temp) {
  let fahrenheitTemp = (temp * 9/5) + 32;
  if (!Number.isInteger(fahrenheitTemp)) {
    return parseFloat(fahrenheitTemp.toFixed(1));
  }else{
    return  parseFloat(fahrenheitTemp);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


const stockPrices = [10, 7, 5, 8, 11, 9];

var highestPrice = Math.max.apply(null, stockPrices);
var indexToSlice = stockPrices.indexOf(highestPrice);

var newArr = stockPrices.slice(0,indexToSlice);

var lowestPrice = Math.min.apply(null, newArr);

console.log(highestPrice - lowestPrice);







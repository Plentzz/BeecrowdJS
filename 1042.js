var input = require("fs").readFileSync("stdin", "utf-8")
var lines = input.split('\n');
var sort = lines.shift().split(" ")


var a = parseInt(sort.shift("\n"))
var b = parseInt(sort.shift())
var c = parseInt(sort.shift())

var numbers = [a, b, c];
function ordenacao(a, b) {
  return a - b;
};
console.log(numbers.join())
console.log(numbers.sort(ordenacao))

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);
var input = require("fs").readFileSync("stdin", "utf-8")
var lines = input.split('\n');

var PI = 3.14159
var raio = parseFloat(input)
var area = PI * Math.pow(raio, 2)
console.log("A=" + area.toFixed(4))
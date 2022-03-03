var input = require("fs").readFileSync("stdin", "utf-8")
var valores = input.split(" ")

var A = parseFloat(valores.shift())
var B = parseFloat(valores.shift())
var C = parseFloat(valores.shift())

var MaiorAB = parseFloat(A + B + Math.abs(A - B)) / 2
var MaiorBC = parseFloat(MaiorAB + C + Math.abs(MaiorAB - C)) / 2

console.log(MaiorBC + " eh o maior")
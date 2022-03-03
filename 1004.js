var input = require("fs").readFileSync("stdin", "utf-8")

var valores = input.split("\n")

var A = parseFloat(valores.shift())
var B = parseFloat(valores.shift())

var PROD = A * B
console.log("PROD = " + PROD)
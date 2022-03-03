var input = require("fs").readFileSync("stdin", "utf-8")
var valores = input.split("\n")

var A = parseFloat(valores.shift())
var B = parseFloat(valores.shift())

var soma = A + B

console.log("SOMA = " + soma)
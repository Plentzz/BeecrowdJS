var input = require("fs").readFileSync("stdin", "utf-8")
var valores = input.split("\n")

var vendedor = parseFloat(valores.shift())
var SF = parseFloat(valores.shift())
var TV = parseFloat(valores.shift())

var total = (15 / 100 * TV) + (SF)
console.log("TOTAL = R$ " + total.toFixed(2))
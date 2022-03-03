var input = require("fs").readFileSync("stdin", "utf-8")

var valores = input.split("\n")
var FC = parseFloat(valores.shift())
var HRT = parseFloat(valores.shift())
var VH = parseFloat(valores.shift())

var salary = HRT * VH

console.log("NUMBER = " + FC)
console.log("SALARY = U$ " + salary.toFixed(2))
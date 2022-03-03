var input = require("fs").readFileSync("stdin", "utf-8")
var valores = input.split("\n")

var infoItem1 = valores.shift().split(" ")
var infoItem2 = valores.shift().split(" ")

var idItem1 = infoItem1.shift()
var numberItem1 = infoItem1.shift()
var valueItem1 = infoItem1.shift()

var idItem2 = infoItem2.shift()
var numberItem2 = infoItem2.shift()
var valueItem2 = infoItem2.shift()

var total = (valueItem1 * numberItem1) + (valueItem2 * numberItem2)
console.log("VALOR A PAGAR: R$ " + total.toFixed(2))
var input = require("fs").readFileSync("stdin", "utf-8")
var valores = input.split("\n")

var grupo1 = valores.shift().split(" ")
var grupo2 = valores.shift().split(" ")

var x1 = grupo1.shift()
var y1 = grupo1.shift()

var x2 = grupo2.shift()
var y2 = grupo2.shift()

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
console.log(distancia.toFixed(4))
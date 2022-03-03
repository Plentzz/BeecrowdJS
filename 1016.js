var input = require("fs").readFileSync("stdin", "utf-8")
var valores = input.split("\n")

var distancia = valores.shift()

var minutos = distancia * 2

console.log(minutos + " minutos" )
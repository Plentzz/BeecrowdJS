var input = require("fs").readFileSync("stdin", "utf-8")
var valores = input.split("\n")


var distancia = parseFloat(valores.shift())
var combustivel = parseFloat(valores.shift())
console.log(distancia)
console.log(combustivel)
var consumo = distancia / combustivel
console.log(consumo.toFixed(3) + " km/l")
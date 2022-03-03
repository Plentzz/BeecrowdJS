var input = require("fs").readFileSync("stdin", "utf-8")
var valores = input.split("\n")

const combustivel = 12
var tempoGasto = valores.shift()
var velMedia = valores.shift()

var litros = (tempoGasto / combustivel) * velMedia
console.log(litros.toFixed(3))
var input = require("fs").readFileSync("stdin", "utf-8")
var valores = input.split("\n")

const Pi = 3.14159
var raio = parseFloat(valores.shift())

var volume = (4 / 3) * Pi * Math.pow(raio, 3)
console.log("VOLUME = " + volume.toFixed(3))
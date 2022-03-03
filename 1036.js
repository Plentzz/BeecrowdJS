var input = require("fs").readFileSync("stdin", "utf-8")
var lines = input.split(" ")

var a = parseFloat(lines.shift())
var b = parseFloat(lines.shift())
var c = parseFloat(lines.shift())

var delta = (b * b) - 4 * a * c

if (delta < 0 || a === 0){
    console.log("Impossivel calcular")
}else{
    var coeficiente1 = (-b + Math.sqrt(delta)) / (2 * a)
    var coeficiente2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log("R1 =", coeficiente1.toFixed(5))
    console.log("R2 =", coeficiente2.toFixed(5))
}



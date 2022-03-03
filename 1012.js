var input = require("fs").readFileSync("stdin", "utf-8")
var valores = input.split(" ")

const Pi = 3.14159
var A = parseFloat(valores.shift())
var B = parseFloat(valores.shift())
var C = parseFloat(valores.shift())

//área do triângulo retângulo
var areaTriangulo = (A * C) / 2
// área do círculo de raio C
var areaCirculo = Pi * Math.pow(C, 2)
// área do trapézio que tem A e B por bases e C por altura
var areaTrapezio = (A + B) * C / 2
//área do quadrado que tem lado
var areaQuadrado = B * B
//área do retângulo que tem lados A e B
var areaRetangulo = A * B

console.log("TRIANGULO: " + areaTriangulo.toFixed(3))
console.log("CIRCULO: " + areaCirculo.toFixed(3))
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3))
console.log("QUADRADO: " + areaQuadrado.toFixed(3))
console.log("RETANGULO: " + areaRetangulo.toFixed(3))


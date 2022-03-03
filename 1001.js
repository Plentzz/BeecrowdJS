var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//lines é o objeto que vai receber os dados
//Shift vai passar os valores
//parseInt transforma em número a string
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

var X = a + b;

console.log('X = ', X);
var input = require("fs").readFileSync("stdin", "utf-8")
var lines = input.split('\n');

const abdc = lines.shift().split(" ")

const a = parseInt(abdc.shift());

const b = parseInt(abdc.shift());

const c = parseInt(abdc.shift());

const d = parseInt(abdc.shift());

if ((b > c) && (d > a) && (c + d) > (a + b) && (c > 0) && (d > 0) && (a % 2 === 0)) {

console.log("Valores aceitos");
} else {

console.log("Valores nao aceitos");
}

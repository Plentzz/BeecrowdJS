var input = require("fs").readFileSync("stdin", "utf-8")
var lines = input.split('\n');
var xyz = lines.shift().split(" ")

var X = parseFloat(xyz.shift())
var Y = parseFloat(xyz.shift())

if(X > 0 && Y > 0){
    console.log("Q1")
}else if(X < 0 && Y > 0){
    console.log("Q2")
}else if(X < 0 && Y < 0){
    console.log("Q3")
}else if(X > 0 && Y <0){
    console.log("Q4")
}else if(X === 0 && Y===0){
    console.log("Origem")
}else if(X === 0){
    console.log("Eixo Y")
}else if(Y === 0){
    console.log("Eixo X")
}

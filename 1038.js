var input = require("fs").readFileSync("stdin", "utf-8")
var lines = input.split(" ")

var a = parseFloat(lines.shift())
var b = parseFloat(lines.shift())
var price = 0

if(a == 1){
    price = 4.00 * b
}else if(a == 2){
    price = 4.50 * b
}else if(a == 3){
    price = 5.00 * b
}else if(a == 4){
    price = 2.00 * b
}else if(a == 5){
    price = 1.50 * b
}

console.log("Total: R$", price.toFixed(2))
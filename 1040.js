var input = require("fs").readFileSync("stdin", "utf-8")
var lines = input.split('\n');
var xyz = lines.shift().split(" ")
const pesos = [2, 3, 4, 1]

var a = parseFloat(xyz.shift())
var b = parseFloat(xyz.shift())
var c = parseFloat(xyz.shift())
var d = parseFloat(xyz.shift())

function somar() {
    let soma = 0
    for(let i in pesos) {
      soma += pesos[i]
    }
    return soma
}

var mediaPonderada = ((a * pesos[0]) + (b * pesos[1]) + (c * pesos[2]) + (d * pesos[3])) / somar()

if(mediaPonderada >= 7.0){
    console.log("Media:", mediaPonderada.toFixed(1))
    console.log("Aluno aprovado.")
}else if(mediaPonderada < 5.0){
    console.log("Media:", mediaPonderada.toFixed(1))
    console.log("Aluno reprovado.")
}else if(mediaPonderada >= 5.0 && mediaPonderada <= 6.9){    
    var NExame = parseFloat(lines.shift());
    var final = ((NExame + mediaPonderada) / 2)
    console.log("Media:", mediaPonderada.toFixed(1))
    console.log("Aluno em exame.")
    console.log("Nota do exame:", NExame.toFixed(1))
        if(final >= 5.0){
            console.log("Aluno aprovado.")
            console.log("Media final:", final.toFixed(1))
        }else if (final <= 4.9){
            console.log("Aluno reprovado")
            console.log("Media final:", final.toFixed(1))
        }
}
var input = require("fs").readFileSync("stdin", "utf-8")
let valor = parseInt(input)

const notas = [100, 50, 20, 10, 5, 2]
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log("NOTAS:")
for (let nota of notas){
    qtdNotas = parseInt(valor / nota)
    console.log(`${qtdNotas} nota(s) de R$ ${nota}.00`)
    valor = valor % nota
}


console.log("MOEDAS:")
for (let nota of moedas){
    qtdMoedas = parseInt(valor / nota)
    console.log(`${qtdMoedas} moeda(s) de R$ ${nota}`)
    valor = valor % nota
}

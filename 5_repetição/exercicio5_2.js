// 2) Crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// // Ex.: Usuário informa 5 e o programa retorna
// // *
// // * *
// // * * *
// // * * * * 
// // * * * * * 
// - Você pode concatenar uma string usando: + ou +=

const r = require("readline-sync")

let num = parseInt(r.question("Insira o numero de estrelas:  "))
i = 1
let text = "  "

while (i<=num){
    text = text + " * "
    console.log(text)
    i++
}

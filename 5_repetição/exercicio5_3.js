// 3) Crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
// Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
// O programa vai dizer "Tchau [nome]" e finalizar o programa.
// - Aqui você pode usar while ou do/while para resolver
const r = require("readline-sync")

let nome = r.question("Qual seu nome? :) ")
console.log("Olá  " + nome + "  =^.^=")
let digite = " " //declara a variavel fora do while para modificar dentro do while
while (digite != "Tchau") {
    digite = r.question("Fale comigo *0* e se cansar, digite 'Tchau' ")
    console.log("vc falou  " ,digite)
}
console.log("Tchau T^T " + nome)

// usando o do

// let nome = r.question("Digite nome")
// console.log("ola", nome)
// let text = ""

// do{
//     text = r.question("digite algo ou tchau para sair")
//     console.log("Voce digitou " +text)
// }while (text != "tchau") { 
//     console.log ("tchau", nome)
// }
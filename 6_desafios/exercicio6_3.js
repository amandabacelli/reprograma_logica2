const r = require("readline-sync")

let nome = r.question("Qual seu nome: ")
console.log("Olá  ", nome)
let digite = ""

do{
    digite = r.question("digite algo ou tchau para sair:  ")
    console.log("voce digitou", digite)
}while(digite != "tchau"){
    console.log ("tchau ", nome)
}
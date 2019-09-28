const r = require("readline-sync")

let list = [5,37,18,59,12,-5]
console.log(list)
let maior = -Infinity //pega o menor numero que existe mas posso usar o 0 
let menor = Infinity // pega o maior numero que existe mas posso usar o 0

for (let i = 0; i < list.length; i++) {
    
    let numeroAtual = list[i]
    if(numeroAtual>maior){
         maior= numeroAtual
    } if(numeroAtual<menor){
        menor=numeroAtual
    }
        
    
}
console.log("o maior numero é " + maior + " e o menor é " +menor)

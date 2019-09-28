const r = require("readline-sync")

let num = parseInt(r.question("Insira o numero de estrelas:  "))
let text = ""

for (let i = 1; i<=num; i++) {
    text = text + " * "
    console.log(text)    
}
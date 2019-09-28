const r = require("readline-sync")

const meta = 500
let passos = ""
for (passos = 0; passos<meta; passos++) {
   passos+=(parseInt(r.question("digite a quantidade de passos:  ")))
    
} 
console.log("parabens vc atingiu a meta:  ", passos)
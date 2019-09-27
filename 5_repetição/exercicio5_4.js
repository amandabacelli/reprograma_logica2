// 4) Crie um  programa contador de passos, que acumule os valores de passos informados pelo usuário até que a meta seja atingida.
// A meta a ser atingida é de 500 passos.
// - Aqui você pode usar while ou do/while para resolver, mas tente resolver com o que você não utilizou no exercicio 3.

const r = require("readline-sync")

let passos = 0
const meta = 500

while(passos<meta){
    passos += parseInt(r.question("Digite a quantidade de passos:  ")//+= pega o valor anterior e adiciona na variavel pode ser ++
}
console.log("Parabens, vc atingiu a meta:  ", passos)
const r = require("readline-sync")

let operacao = r.question("Digite a operacao (+, -, *, /)  ")
let valor1 = parseInt(r.question("Digite o primeiro valor  "))
let valor2 = parseInt(r.question("Digite o segundo valor  "))


function soma(v1, v2) { // na funcao eu declaro os parametros q serao utilizados, nao a variavel; a variavel q sera usada eh declarada
    //... no momento que eu chamo a função para rodar.
    //let resultado valor1+valor2
    //return resultado
     return v1+v2        
}
function subtrair(v1, v2) {
    return v1-v2
}
function multiplicar(v1, v2) {
    return v1*v2
}
function dividir (v1, v2) {
    return v1/v2
}
   
let resultado
switch (operacao) {
    case "+":
       resultado = soma(valor1, valor2)
    console.log(`O resultado da soma é ${resultado}`)
    break;
    case "-":
        resultado = subtrair(valor1, valor2) //mostro para o programa quais os valores que serão utilizados nos parametros
    console.log(`O resultado da subtração é ${resultado}`)
    break
    case "*":
        resultado = multiplicar(valor1, valor2)
    console.log(`O resultado da multiplicação é ${resultado}`)
    break
    case "/":
        resultado = dividir(valor1, valor2)
    console.log(`O resultado da divisão é ${resultado}`)

    break
    default:
    return console.log("Operação Invalida")
    break

}
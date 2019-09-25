var r = require("readline-sync")

let cadastroProdutos = [
    { nome: "iogurte de morango", tempoDeValidade: 100, congelado: false },
    { nome: "farinha", tempoDeValidade: 200, congelado: false },
    { nome: "nuggets", tempoDeValidade: 150, congelado: true}

]

let escolherProduto = parseInt(r.question("Escolha um produto entre 0 e 3:  "))
let diasparaVencimento = parseInt(r.question("Digite quantos dias faltam para vencer:  "))
let validadeProduto = cadastroProdutos[escolherProduto].tempoDeValidade
let porcentagem = (diasparaVencimento*100)/validadeProduto
let produtoCongelado = cadastroProdutos[escolherProduto].congelado

if (porcentagem <= 2) {
    console.log("Descartar produto, muito proximo de vencer")
} else if ((porcentagem>=10&&porcentagem<10) && (produtoCongelado = "false")) { //ou !produtoCongelado
        console.log("Desconto! Produto não congelado e próximo da validade")
    }else if ((porcentagem>2&&porcentagem<=5) && (produtoCongelado = "true")){ //não precisa por o >2 que o programa entende, pode tirar o = true e deixa sem nada pq ele entende q eh true
        console.log("Desconto! Produto congelado e próximo da validade")
    }
else {
    console.log("Produto longe do vencimento")
}
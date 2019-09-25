//resposta aqui

var r = require("readline-sync") //importar a biblioteca

// listaProd = ["produto1", "produto2", "produto3", "produto4"]
// listaPreco = [1.50, 2.45, 1.60, 10.25] - nao precisa declarar quando vai dentro do objeto

const produto = [
    {nome: "produto1", preco: 1.50},
    {nome: "produto2", preco: 2.45},
    {nome: "produto3", preco: 1.60},
    {nome: "produto4", preco: 10.25}
]

var posicao = (r.question("Escolha o produto de 0 a 4:   "))
var porcentagem = parseInt(r.question("Digite o valor do desconto desejavel de 0 a 60:    "))
var produtoSelecionado = produto[posicao]
var precoSelecionado = produtoSelecionado.preco
var desconto = (precoSelecionado*(1-(porcentagem/100))).toFixed(3)

console.log(`O valor do produto ${produtoSelecionado.nome} com desconto é R$ ${desconto}`)

// console.log("Produto  " + produtoSelecionado.nome + "  com desconto é R$  " + desconto) - segunda forma com concatenação

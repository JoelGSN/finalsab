const express = require('express');
const app = express();
const porta = 3000;


app.listen(porta,()=>{
    console.log("Server Up!!! Rodando na Porta", porta )
    
});



  const produtos = [
      { id: 1, nome: "Mouse", preco: 80, estoque: 10 },
      { id: 2, nome: "Teclado", preco: 150, estoque: 5 },
      { id: 3, nome: "Monitor", preco: 900, estoque: 2 }
  ];


function listar() {
    console.log(produtos)

}



function buscar(id) {
    console.log('\n\nProdutos id', produtos.filter((produto) => produto.id === id))
    
}


function somap() {
let soma = 0;
for(let produto of produtos){
    soma += produto.preco * produto.estoque
}
console.log('\n\nSoma Estoque R$ ', soma, '\n\n')
}





listar();
buscar(1);
somap();



/*

  Atividade principal — Estoque via Node

  const produtos = [
      { id: 1, nome: "Mouse", preco: 80, estoque: 10 },
      { id: 2, nome: "Teclado", preco: 150, estoque: 5 },
      { id: 3, nome: "Monitor", preco: 900, estoque: 2 }
  ];

  Criar as seguintes funções:
    listarProdutos()
    buscarProduto(id)
    calcularValorEstoque()
    */
const express = require('express')
const app = express()
const porta = 3000

app.use(express.json())

const produtos = [
  { id: 1, nome: "Mouse", preco: 80, estoque: 10 },
  { id: 2, nome: "Teclado", preco: 150, estoque: 5 },
  { id: 3, nome: "Monitor", preco: 900, estoque: 2 }
];

app.listen(porta, () => {
  console.log("Server API is Up!!! Rodando na Porta", porta)
})

app.get("/produtos", (req, res) => {
  return res.json(produtos)

})

app.get("/produtos/:id", (req, res) => {
  let produto = produtos.find((produto) => produto.id == req.params.id)
  if (produto)
    return res.json(produto)
  else
    return res.status(404).json({ Message: "Produto não Encontrado" })
})



app.get("/valorestoque", (req, res) => {
  total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco * produtos[i].estoque
  }

  res.send(total)
})

app.get("/valorestoque2", (req, res) => {

  res.send(produtos.reduce((total, produto) => {
    return total + (produto.preco * produto.estoque)
  }, 0))
  res.send(total)
})

app.post("/produtos", (req, res) => { // cria conteúdos
  const { nome, preco, estoque } = req.body
  const id = produtos.length + 1

  if (nome
    && Number(preco) !== undefined && Number(estoque) !== undefined
    && Number(preco) !== null && Number(estoque) !== null
    && !isNaN(preco) && !isNaN(estoque)
    && Number(preco) >= 0 && Number(estoque) >= 0) {


    const produto = {
      id,
      nome,
      preco: Number(preco),
      estoque: Number(estoque),

    }
    produtos.push(produto)
    res.status(201).json(produto)
  }
  else
    res.status(400).json({ Message: "Os dados estão errados mula!!!" })

})


app.put("/produtos", (req, res) => { // atualiza conteúdos
  const id = req.params.id
  const produto = produtos.find(produto => produto.id === Number(id))
  if (!produto)
    res.status(400).json({ Message: "O Produto Não Foi Encontrado!!!" })
  else {
    const { nome, preco, estoque } = req.body
    if (nome)
      produto.nome = nome
    if (isNaN(preco) && Number(preco) >= 0)
      produto.preco = Number(preco)
    if (isNaN(estoque) && Number(estoque) >= 0)
      produto.estoque = Number(estoque)
    if(nome || isNaN(estoque) || Number(estoque) >= 0 || Number(preco) >= 0 || isNaN(preco))
      res.status(200).json({ Message: "Produto Atualizado com Sucesso!!!" })
    else
    res.status(400).json({ Message: "Não Houve Atualização do Produto" })
  }
})

app.delete("/produtos/:id", (req, res) => { // deleta conteúdos
  const id = req.params.id
  const index = produtos.findIndex(produto => produto.id === Number(id))

  if (index === -1)
    res.status(400).json({ Message: "O Produto Não Foi Encontrado!!!" })
  else {


    produtos.splice(index, 1)
    res.status(200).json({ Message: "Produto Removido com Sucesso!!!" })
  }

})



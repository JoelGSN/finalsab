const express = require('express')
const app = express()
const porta = 3000

app.use(express.json())

app.listen(porta, () => {
    console.log("Server API is Up!!! Rodando na Porta", porta)
})

const alunos = [
    { id: "", nome: "", cpf: "" }
];

app.get('/alunos', (req,res) =>{
    return res.json(alunos)
})


app.post('/alunos', (req, res) => {
    const { nome, cpf } = req.body
    const id = alunos.length + 1
    if (nome) {
        const aluno = {
            id,
            nome,
            cpf

        }
        alunos.push(aluno)
        res.status(201).json(aluno)
    }
    else {
        res.status(400).json({ Message: "Os dados errados" })
    }
})

app.delete('/alunos/:id', (req,res) => {
    const id = req.params.id
    const index = alunos.findIndex(aluno => aluno.id === Number(id))

    if (index === -1)
    res.status(400).json({ Message: "O Produto Não Foi Encontrado!!!" })
  else {


    alunos.splice(index, 1)
    res.status(200).json({ Message: "Produto Removido com Sucesso!!!" })
  }

})
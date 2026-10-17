const inp_livro = document.getElementById("input_livro")
const inp_autor = document.getElementById("input_autor")
const array_livros = JSON.parse(localStorage.getItem("livro")) || []

function cadastrar_livro() {
    const novolivro = {
        nome: inp_livro.value,
        autor: inp_autor.value
    }
    console.log(novolivro)
    array_livros.push(novolivro)
    localStorage.setItem("livro", JSON.stringify(array_livros))
    alert(inp_livro.value+" Foi cadastrado com sucesso!!!")
    inp_livro.value = ""
    inp_autor.value = ""
}

const inp_emplivro = document.getElementById("input_emp")
const inp_nome = document.getElementById("input_nome")
const array_emprestimo = JSON.parse(localStorage.getItem("emprestimo")) || []


function cadastrar_emprestimo () {
    buscar_livro(inp_emplivro.value)
    const novoemprestimo = {
        livro: inp_emplivro.value,
        aluno: inp_nome.value
    }
    console.log(novoemprestimo)
    array_emprestimo.push(novoemprestimo)
    localStorage.setItem("emprestimo", JSON.stringify(array_emprestimo))
    alert(inp_nome.value+" o emprestimo foi cadastrado com sucesso!!!")
    inp_emplivro.value = ""
    inp_nome.value = ""

}

function buscar_livro (nome) {
const livro = array_livros.filter ( (l) =>{
    return l.livro.toLowerCase() === nome.toLowerCase()
}) 
console.log(livro)
}

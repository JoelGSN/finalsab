import Produto from '../models/Produto.js'

export async function listarProdutos() {
    return await Produto.findAll({ order: [['id', 'ASC']] })

}

export async function buscarProdutoPorId(id) {
    return await Produto.findByPk(id)

}

export async function cadastrarProduto(dados) {
    const { nome, preco, estoque } = dados
    return Produto.create({ nome, preco, estoque })

}

export async function removerproduto(id) {
    const produto = await buscarProdutoPorId(id)
    if(produto){
        produto.destroy()
    }

    return produto
    
}

export async function atualizarproduto(id, dados) {
    const { nome, preco, estoque } = dados

       const produto = await buscarProdutoPorId(id)
if(produto){
    produto.update({ nome, preco, estoque })
}
        return produto

}


import * as produtoService from '../services/produtoService.js'
export async function listar (req,res) {
    
const produtos = await produtoService.listarProdutos()
    
    return res.status(200).json(produtos)

}

export async function buscarid (req,res) {
const produtos = await produtoService.buscarProdutoPorId(req.params.id)
   if(!produtos){
    return res.status(404).json({Message: 'O Produto não foi encontrado.'} )
}
    return res.status(200).json(produtos)
}

export async function cadastrar (req,res)  {
    const produtos = await produtoService.cadastrarProduto(req.body)
    return res.status(200).json(produtos)
}

export async function remover(req, res) {
    const produto = await produtoService.removerproduto(req.params.id)
    if(!produto){
        return res.status(404).json({ Message: 'O Produto não foi encontrado.'})
    }
    return res.status(200).json(produto)
}

export async function atualizar(req, res) {
    const produto = await produtoService.atualizarproduto(req.params.id, req.body)
    if(!produto) {
        return res.status(404).json({Message: 'O Produto não foi encontrado.'})

    }
    return res.status(200).json(produto)

    
}

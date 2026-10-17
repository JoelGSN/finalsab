import * as tarefaservice from '../services/tarefaservice.js'


 export async function listar(req, res) {
    const tarefa = await tarefaservice.listartarefa()

    return res.status(200).json(tarefa)

}




export async function buscarid(req, res) {
    const tarefa = await tarefaservice.buscartarefaPorId(req.params.id)
    if (!tarefa) {
        return res.status(404).json({ Message: 'A tarefa não foi encontrada.' })
    }
    return res.status(200).json(tarefa)
} 





export async function cadastrar(req, res) {
    const tarefa = await tarefaservice.cadastrartarefa(req.body)
    return res.status(200).json(tarefa)
}

export async function remover(req, res) {
    const tarefa = await tarefaservice.removertarefa(req.params.id)
    if (!tarefa) {
        return res.status(404).json({ Message: 'O Produto não foi encontrado.' })
    }
    return res.status(200).json(tarefa)
}

export async function atualizar(req, res) {
    const tarefa = await tarefaservice.atualizartarefa(req.params.id, req.body)
    if (!tarefa) {
        return res.status(404).json({ Message: 'O Produto não foi encontrado.' })

    }
    return res.status(200).json(tarefa)


}










import Tarefa from '../models/tarefaproduto.js'

export async function listartarefa() {
    return await Tarefa.findAll({
        order: [['id', 'ASC']]
    })
}

export async function buscartarefaPorId(id) {
    return await Tarefa.findByPk(id)
}

export async function cadastrartarefa(dados) {
    const { nome, nota } = dados

    return await Tarefa.create({ nome,nota})
}

export async function removertarefa(id) {
    const tarefa = await buscartarefaPorId(id)

    if (tarefa) {
        await tarefa.destroy()
    }

    return tarefa
}

export async function atualizartarefa(id, dados) {
    const { nome, nota } = dados

    const tarefa = await buscartarefaPorId(id)

    if (tarefa) {
        await tarefa.update({nome, nota })
    }

    return tarefa
}

// export async function concluir(id) {

    
// }
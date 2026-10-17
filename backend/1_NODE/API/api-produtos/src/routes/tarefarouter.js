import * as tarefacontroller from '../controllers/tarefacontroller.js'
import { Router } from 'express'

const router = Router()

router.get('/', tarefacontroller.listar )

router.get('/:id', tarefacontroller.buscarid )

router.post('/', tarefacontroller.cadastrar)

router.delete('/:id', tarefacontroller.remover)

router.put('/:id', tarefacontroller.atualizar)

// router.patch('/:id', tarefacontroller.concluir)

export default router
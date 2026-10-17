import express from 'express'
import tarefarouter from './routes/tarefarouter.js'
import sequelize from './config/tarefadb.js'

const app = express();
app.use(express.json())

app.use('/tarefa', tarefarouter)


try{
  await sequelize.authenticate()
  await sequelize.sync()
  app.listen(3000, () => console.log("\x1b[1;4;36m","Server Tarefa inicializado."))
}catch (erro){
    console.error('Falha ao Iniciar:', erro)
    process.exit(1)
}
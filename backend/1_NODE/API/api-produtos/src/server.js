import express from 'express'
import produtoRouter from './routes/produtoRouter.js'
import sequelize from './config/database.js';
// import { Sequelize } from 'sequelize';

const app = express();
app.use(express.json())

app.use('/produtos', produtoRouter)


try{
  await sequelize.authenticate()
  await sequelize.sync()
  app.listen(3000, () => console.log("\x1b[1;4;36m","Server inicializado."))
}catch (erro){
    console.error('Falha ao Iniciar:', erro)
    process.exit(1)
}
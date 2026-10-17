import Sequelize from 'sequelize'
import sequelize from '../config/tarefadb.js'

const {DataTypes} = Sequelize
const Tarefa = sequelize.define('tarefa', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nota: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
  
}, {
    timestamps: false,
    tableName: 'Tarefa'
})

export default Tarefa

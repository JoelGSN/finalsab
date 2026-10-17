import Sequelize from 'sequelize'
import sequelize from '../config/database.js'

const {DataTypes} = Sequelize
const Produto = sequelize.define('produto', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'Produtos'
})

export default Produto

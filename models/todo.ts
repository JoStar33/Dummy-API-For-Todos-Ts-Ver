import Sequelize, {
  CreationOptional, InferAttributes, InferCreationAttributes, Model
} from 'sequelize';

class Todo extends Model<InferAttributes<Todo>, InferCreationAttributes<Todo>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  static initiate(sequelize: Sequelize.Sequelize) {
    Todo.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(500),
        allowNull: true
      }
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Todo',
      tableName: 'todos',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};

export default Todo;

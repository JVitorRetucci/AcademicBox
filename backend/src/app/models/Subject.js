import { Model, Sequelize } from 'sequelize';

class Subject extends Model {
  static init(sequelize) {
    super.init(
      {
        materia_nome: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Subject;

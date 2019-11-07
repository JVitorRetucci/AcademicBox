import Sequelize, { Model } from 'sequelize';

class Content extends Model {
  static init(sequelize) {
    super.init(
      {
        material_titulo: Sequelize.STRING,
        material_descricao: Sequelize.STRING,
        material_link: Sequelize.STRING,
        material_categoria: Sequelize.STRING,
        material_avaliacao: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'material_usuario_id',
      as: 'usuario',
    });
    this.belongsTo(models.File, {
      foreignKey: 'material_imagem_id',
      as: 'imagem',
    });
    this.belongsTo(models.Subject, {
      foreignKey: 'material_materia_id',
      as: 'materia',
    });
  }
}

export default Content;

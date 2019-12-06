import Sequelize, { Model } from 'sequelize';

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        comentario_texto: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'comentario_usuario_id',
      as: 'usuario',
    });
    this.belongsTo(models.Content, {
      foreignKey: 'comentario_conteudo_id',
      as: 'conteudo',
    });
  }
}

export default Comment;

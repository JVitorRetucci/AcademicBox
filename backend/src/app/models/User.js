import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        usuario_nome: Sequelize.STRING,
        senha: Sequelize.VIRTUAL,
        usuario_senha: Sequelize.STRING,
        usuario_email: Sequelize.STRING,
        usuario_adm: Sequelize.BOOLEAN,
        usuario_xp: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.senha) {
        user.usuario_senha = await bcrypt.hash(user.senha, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, {
      foreignKey: 'usuario_id_avatar',
      as: 'avatar',
    });
  }

  checkPassword(senha) {
    return bcrypt.compare(senha, this.usuario_senha);
  }
}

export default User;

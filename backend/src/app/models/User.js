// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from 'bcryptjs';
import { Model, Sequelize } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        UsuarioNome: Sequelize.STRING,
        UsuarioEmail: Sequelize.STRING,
        senhaNoCrip: Sequelize.VIRTUAL,
        UsuarioSenha: Sequelize.STRING,
        UsuarioAdm: Sequelize.BOOLEAN,
        UsuarioXp: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async user => {
      if (user.senhaNoCrip) {
        user.UsuarioSenha = await bcrypt.hash(user.senhaNoCrip, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, {
      foreignKey: 'Arquivos_idArquivos',
      as: 'avatar',
    });
  }

  checkPassword(senhaNoCrip) {
    return bcrypt.compare(senhaNoCrip, this.UsuarioSenha);
  }
}

export default User;

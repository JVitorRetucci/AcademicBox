module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      UsuarioNome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      usuarioEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      usuarioSenha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      UsuarioAdm: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      UsuarioXp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};

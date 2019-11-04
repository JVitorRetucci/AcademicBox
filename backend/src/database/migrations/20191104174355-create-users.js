module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usuario_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      usuario_senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      usuario_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      usuario_adm: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      usuario_xp: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
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

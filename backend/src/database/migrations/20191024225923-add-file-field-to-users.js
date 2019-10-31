module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'Arquivos_idArquivos', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'Arquivos_idArquivos');
  },
};

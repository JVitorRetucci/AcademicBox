module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'usuario_id_avatar', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'usuario_id_avatar');
  },
};

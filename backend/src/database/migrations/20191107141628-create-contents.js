module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contents', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      material_titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      material_descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      material_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      material_categoria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      material_avaliacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      material_imagem_id: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      material_usuario_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      material_materia_id: {
        type: Sequelize.INTEGER,
        references: { model: 'subjects', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('contents');
  },
};

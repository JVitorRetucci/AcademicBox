module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contents', {
      idMateriais: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      MatTitulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      MatDesc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      MatLink: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      MatCategoria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      MatAvaliacoes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Usuario_idUsuario: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'idUsuario' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      Materias_idMaterias: {
        type: Sequelize.INTEGER,
        references: { model: 'subjects', key: 'idMaterias' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      Comentarios_idComentarios: {
        type: Sequelize.INTEGER,
        references: { model: 'comments', key: 'idComentario' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      Arquivos_idArquivos: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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

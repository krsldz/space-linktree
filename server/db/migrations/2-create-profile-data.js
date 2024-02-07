/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProfileData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      linkedin: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      github: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      behance: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      link: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      whatsapp: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      telegram: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      facebook: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      instagram: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      tiktok: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      spotify: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      youtube: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          underscored: true,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProfileData');
  },
};

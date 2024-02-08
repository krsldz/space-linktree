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
        allowNull: false,
        type: Sequelize.STRING,
      },
      linkedin: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      github: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      behance: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      link: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      whatsapp: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      telegram: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      facebook: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      instagram: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tiktok: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      spotify: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      youtube: {
        allowNull: false,
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
      public_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'PublicLinks',
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

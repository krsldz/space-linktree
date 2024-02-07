const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProfileData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  ProfileData.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    github: DataTypes.STRING,
    behance: DataTypes.STRING,
    link: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    telegram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    tiktok: DataTypes.STRING,
    spotify: DataTypes.STRING,
    youtube: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      references: 'Users',
    },
  }, {
    sequelize,
    modelName: 'ProfileData',
  });
  return ProfileData;
};

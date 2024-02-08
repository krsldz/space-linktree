const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProfileData extends Model {
    static associate({ User, PublicLinks }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(PublicLinks, { foreignKey: 'public_id' });
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
    public_id: {
      type: DataTypes.INTEGER,
      references: 'PublicLinks',
    },
  }, {
    sequelize,
    modelName: 'ProfileData',
  });
  return ProfileData;
};

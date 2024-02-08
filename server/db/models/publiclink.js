const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PublicLink extends Model {
    static associate({ User, ProfileData }) {
      this.belongsTo(User, { foreignKey: 'owner_id' });
      this.hasOne(ProfileData, { foreignKey: 'public_id' });
    }
  }
  PublicLink.init({
    link: DataTypes.STRING,
    owner_id: {
      type: DataTypes.INTEGER,
      references: 'Users',
    },
  }, {
    sequelize,
    modelName: 'PublicLinks',
  });
  return PublicLink;
};

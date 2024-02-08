const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ ProfileData, PublicLinks }) {
      this.hasOne(ProfileData, { foreignKey: 'user_id' });
      this.hasOne(PublicLinks, { foreignKey: 'owner_id' });
    }
  }
  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    googleId: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

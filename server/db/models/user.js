const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ProfileData }) {
      this.hasOne(ProfileData, { foreignKey: 'user_id' });
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

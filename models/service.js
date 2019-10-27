'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Service extends Model {
    
  }
  Service.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {sequelize});
  Service.associate = function(models) {
    // associations can be defined here
    Service.belongsToMany(models.User,{through : models.UserServiceMechanic})
    Service.belongsToMany(models.Mechanic,{through : models.UserServiceMechanic})
  };
  return Service;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Mechanic extends Model {}
  Mechanic.init({
    name: DataTypes.STRING,
    serviceId: DataTypes.INTEGER
  }, {sequelize});
  Mechanic.associate = function(models) {
    // associations can be defined here
    Mechanic.belongsToMany(models.User,{through : models.UserServiceMechanic})
    Mechanic.belongsToMany(models.Service,{through : models.UserServiceMechanic})
  };
  return Mechanic;
};

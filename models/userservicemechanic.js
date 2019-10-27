'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class UserServiceMechanic extends Model {
    static detail(service,conjuction){
      return ` ${service.name} - ${conjuction.serviceDetail}`
    }
  }
  UserServiceMechanic.init({
    id :{ autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER},
    UserId: DataTypes.INTEGER,
    ServiceId: DataTypes.INTEGER,
    MechanicId: DataTypes.INTEGER,
    status : DataTypes.BOOLEAN,
    schedule : DataTypes.STRING,
    hour : DataTypes.STRING,
    serviceDetail : DataTypes.STRING
  }, { hooks : {
    beforeCreate(serviceUser,options){
      let newdate = new Date(serviceUser.schedule).toISOString()
      let hour = String(newdate).substring(11,16) 
      let date = String(newdate).substring(0,10)
      date = date.split('-')
      let schedule = `${date[1]}/${date[2]}/${date[0]}`  
      serviceUser.status = false
      serviceUser.schedule = schedule
      serviceUser.hour = hour
    }
  },sequelize });
  UserServiceMechanic.associate = function(models) {
    // associations can be defined here
    UserServiceMechanic.belongsTo(models.Mechanic)
    UserServiceMechanic.belongsTo(models.User)
    UserServiceMechanic.belongsTo(models.Service)
  };
  return UserServiceMechanic;
};

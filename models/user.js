'use strict';
// const cryptoHashing = require('../helpers/crytoNodeJs')
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {
    userRole(){
      return `[ ${this.role} ] ${this.name}`
    }
  }
  User.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'name tidak boleh kosong'
        },
        isAlpha : {
          args : true,
          msg : 'name tidak boleh angka'
        },
        len : {
          args : [5,9999999],
          msg : 'panjang nama kurang dari 5'
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'email tidak boleh kosong'
        },
        isEmail : {
          args : true,
          msg : 'gunakan format email co/ yourname@gmail.com'
        },
        uniqueEmail : (value,next)=>{
          User.findOne({
            where : {
              email : value
            }
          })
          .then(email=>{
            if(email) { return next('email sudah digunakan') }
            else {
              next()
            }
          })
        }
      }
    },
    phone: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'phone tidak boleh kosong'
        },
        isNumeric : {
          args : true,
          msg : 'phone tidak boleh huruf dan symbol'
        },
        len : {
          args : [0,13],
          msg : 'silahkan masukkan nomor hp yang sesuai 0 - 12'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'password tidak boleh kosong'
        },
        len : {
          args : [8,9999999],
          msg : 'panjang password kurang dari 8'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks : {
      beforeCreate : (user, options) => {
        const saltRounds = 10;
        user.password = bcrypt.hashSync(user.password, saltRounds);
        //CRYPTO
        // const secret = 'dedycobuzer'
        // user.password = cryptoHashing(user.password,secret)
        !user.role ? user.role = 'customer' : user.role = user.role
      }
    }
    ,sequelize
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Service,{through : models.UserServiceMechanic})
    User.belongsToMany(models.Mechanic,{through : models.UserServiceMechanic})
  };
  return User;
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Services', [{
      name : "Bensin",
      price : 0,
      createdAt : new Date,
      updatedAt : new Date
    },{
      name : "Oli",
      price : 0,
      createdAt : new Date,
      updatedAt : new Date
    },{
      name : "TambalBan",
      price : 0,
      createdAt : new Date,
      updatedAt : new Date
    },{
      name : "AutoCare",
      price : 0,
      createdAt : new Date,
      updatedAt : new Date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Services', null, {});
  }
};
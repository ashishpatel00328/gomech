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
    return queryInterface.bulkInsert('Mechanics', [{
      name: 'Edwin Satya',
      serviceId: 1,
      createdAt : new Date,
      updatedAt : new Date,
    },{
      name: 'Imanuel Jodi',
      serviceId: 2,
      createdAt : new Date,
      updatedAt : new Date,
    },{
      name: 'Peter Lee',
      serviceId: 3,
      createdAt : new Date,
      updatedAt : new Date,
    },{
      name: 'Risanto',
      serviceId: 4,
      createdAt : new Date,
      updatedAt : new Date,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Mechanics', null, {});
  }
};
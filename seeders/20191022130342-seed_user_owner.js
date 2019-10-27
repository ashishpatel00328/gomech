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
    return queryInterface.bulkInsert('Users',[{
      name : 'anggabanny',
      email : 'anggabanny@gmail.com',
      phone : '0895348159713',
      password : 'hacktiv8Super',
      role : 'owner',
      createdAt : new Date,
      updatedAt : new Date
    },
    {
      name : 'dwitamaalfred',
      email : 'dwitama.alfred@gmail.com',
      phone : '081952801122',
      password : 'hacktiv8Jos',
      role : 'owner',
      createdAt : new Date,
      updatedAt : new Date
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users',null,{})
  }
};
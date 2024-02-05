'use strict';
const { faker } = require('@faker-js/faker')
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    // await queryInterface.bulkInsert('Users', [
    //   { name: 'John Doe', email: 'john@gmail.com', password: '1'},
    //   { name: 'James Dow', email: 'james@gmail.com', password: '1'},
    //   { name: 'Susan Lane', email: 'sus@gmail.com', password: '1'},
    //   { name: 'Chris Robbins', email: 'chr@gmail.com', password: '1'},
    // ], {});
    const userData = []

    for (let i = 0; i < 5; i++) {
      const seed = {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: await bcrypt.hash(faker.internet.password(), 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      userData.push(seed)
    }
    await queryInterface.bulkInsert('Users', userData)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    
  }
};

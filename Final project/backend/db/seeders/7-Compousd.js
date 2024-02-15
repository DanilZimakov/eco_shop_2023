'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Compounds",
      [
        {
          material_id: 1,
          post_id: 1,
          parcent: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          material_id: 2,
          post_id: 1,
          parcent: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          material_id: 3,
          post_id: 1,
          parcent: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          material_id: 4,
          post_id: 2,
          parcent: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          material_id: 6,
          post_id: 2,
          parcent: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          material_id: 7,
          post_id: 2,
          parcent: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Compounds", null, {});
  }
};

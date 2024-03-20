"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tokens",
      [
        {
          user_id: 1,
          refresh_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhIiwicGhvbmUiOiI3OTk5MzAwNDkxMiIsImFkbWluIjp0cnVlLCJpYXQiOjE3MDczOTk1MzgsImV4cCI6MTcwODY5NTUzOH0.qlLb9HxvJ4dmK0JuLvVGYj2rGa77mVUyv0c8fLNHS5U",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tokens", null, {});
  },
};

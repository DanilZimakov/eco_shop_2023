"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const materialsData = [
      {
        name: "Хлопок",
        harm: "Хотя хлопок является естественным волокном, его производство требует большого количества воды и пестицидов.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Полиэстер",
        harm: "Полиэстер создается из нефти, что приводит к высокому уровню энергопотребления и выбросам парниковых газов.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Кожа",
        harm: "Производство кожи включает использование химикатов для дубления, что может нанести вред окружающей среде.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Лен",
        harm: "Лен - растительное волокно, которое требует меньше воды и пестицидов в процессе производства по сравнению с хлопком.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Вискоза",
        harm: "Вискоза - искусственное волокно, созданное из древесной целлюлозы. Производство вискозы может потребовать химических процессов.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Шерсть",
        harm: "Шерсть - естественное волокно, получаемое от овец. Однако, для производства может потребоваться обработка химическими веществами.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Нейлон",
        harm: "Нейлон - синтетическое волокно, производство которого включает использование химических веществ и энергозатратных процессов.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Materials", materialsData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Materials", null, {});
  },
};

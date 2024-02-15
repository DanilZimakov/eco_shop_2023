"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const materialsData = [
      {
        name: "Хлопок",
        harm: "Хотя хлопок является естественным волокном, его производство требует большого количества воды и пестицидов.",
        environmental_impact: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Полиэстер",
        harm: "Полиэстер создается из нефти, что приводит к высокому уровню энергопотребления и выбросам парниковых газов.",
        environmental_impact: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Кожа",
        harm: "Производство кожи включает использование химикатов для дубления, что может нанести вред окружающей среде.",
        environmental_impact: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Лен",
        harm: "Лен - растительное волокно, которое требует меньше воды и пестицидов в процессе производства по сравнению с хлопком.",
        environmental_impact: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Вискоза",
        harm: "Вискоза - искусственное волокно, созданное из древесной целлюлозы. Производство вискозы может потребовать химических процессов.",
        environmental_impact: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Шерсть",
        harm: "Шерсть - естественное волокно, получаемое от овец. Однако, для производства может потребоваться обработка химическими веществами.",
        environmental_impact: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Нейлон",
        harm: "Нейлон - синтетическое волокно, производство которого включает использование химических веществ и энергозатратных процессов.",
        environmental_impact: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Пластик",
        harm: "Пластик - наносит серьезный ущерб окружающей среде, начиная с его производства и заканчивая утилизацией.",
        environmental_impact: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Стекло",
        harm: "Стекло - подвергается коррозии — то есть разрушается, выделяя при этом большое количество щелочи",
        environmental_impact: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Металл",
        harm: "Металлы - загрязняют все слои биосферы. В результате антропогенной нагрузки в атмосферу попадают выбросы дыма, пыли и аэрозоли, которые выпадают в виде кислотных дождей.",
        environmental_impact: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Кашемир",
        harm: "Кашемир поддается биологическому разложению и при правильном обращении может быть экологически безопасным",
        environmental_impact: 2,
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

//от 1 до 10, где 1 - минимальный уровень вреда, а 10 - максимальный.

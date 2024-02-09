'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert(
       "Sub_categories",
       [
         {
           name: "Очки",
           category_id: 1,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Ремни",
           category_id: 1,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Перчатки",
           category_id: 1,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Шарфы",
           category_id: 1,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Головные уборы",
           category_id: 1,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Верхняя одежда",
           category_id: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Спортивная одежда",
           category_id: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Костюмы",
           category_id: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Брюки",
           category_id: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Майки и Футболки",
           category_id: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Платья",
           category_id: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Юбки",
           category_id: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Шорты",
           category_id: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Нижнее белье",
           category_id: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Рюкзаки",
           category_id: 3,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Спортивные и дорожные сумки",
           category_id: 3,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Клатчи",
           category_id: 3,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Сумки через плечо",
           category_id: 3,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Аксессуары для сумок",
           category_id: 3,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Кроссовки",
           category_id: 4,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Ботинки",
           category_id: 4,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Туфли",
           category_id: 4,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Кеды",
           category_id: 4,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Сапоги",
           category_id: 4,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Кольца",
           category_id: 5,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Часы",
           category_id: 5,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Цепочки и подвески",
           category_id: 5,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Серьги",
           category_id: 5,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "DOLCE&GABBANA",
           category_id: 6,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "BALENCIAGA",
           category_id: 6,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "DIOR",
           category_id: 6,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "GUCCI",
           category_id: 6,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "PRADA",
           category_id: 6,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
       ],
       {}
     );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Sub_categories", null, {});
  }
};

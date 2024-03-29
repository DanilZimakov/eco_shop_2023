"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const categoryName = [
      "Аксессуары",
      "Одежда",
      "Сумки",
      "Обувь",
      "Украшения",
      "Бренды",
    ];
    const images = [
      "https://i.pinimg.com/564x/63/a7/e9/63a7e956d7db6fd9b119fa43bbc900b4.jpg",
      "https://i.pinimg.com/564x/7d/8d/fe/7d8dfe0f7f340d12ff988b3beba19b42.jpg",
      "https://i.pinimg.com/564x/60/b1/8b/60b18b8c6b21db4ebffad8a26588b395.jpg",
      "https://i.pinimg.com/564x/ec/a1/c4/eca1c43a9d74ec06afac1dbe514a01c8.jpg",
      "https://i.pinimg.com/564x/01/f2/1b/01f21bfaab12e909212a5dc1d1731995.jpg",
      "https://i.pinimg.com/564x/16/38/51/1638511491dde8abe9b08fcb53c70a2d.jpg",
    ];
    const data = categoryName.map((name, i) => ({
      category_name: name,
      category_image: images[i],
    }));
    await queryInterface.bulkInsert("Categories", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};

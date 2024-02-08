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
      "https://i.pinimg.com/564x/08/15/7a/08157a7c50c36905a5322f31fafed697.jpg",
      "https://i.pinimg.com/564x/90/af/5c/90af5c10b2ab9c075e71ab3730478611.jpg",
      "https://i.pinimg.com/564x/a8/f5/ba/a8f5baabd6be6b764c7dc9b2af0069a8.jpg",
      "https://i.pinimg.com/564x/27/85/5b/27855b2c7c5795b1f2289dcd0af101f5.jpg",
      "https://i.pinimg.com/564x/11/0c/d5/110cd5a4f31bbc80048145e3fd579802.jpg",
      "https://i.pinimg.com/564x/b9/2a/8d/b92a8ddfbccb9ccc7e23f5aa25234f93.jpg",
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

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Items', [
      { 
        title: 'item 1',
        image: 'https://cs13.pikabu.ru/post_img/big/2023/08/08/7/1691493171122420166.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit temporibus iste repudiandae reprehenderit iusto non eius corporis id. Cumque non laudantium illum aliquam voluptatem, maxime quam esse! Voluptatem, repudiandae qui!',
        user_id: 1,
      },
      { 
        title: 'item 2',
        image: 'https://cs14.pikabu.ru/post_img/big/2023/08/08/7/1691493170170686255.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit temporibus iste repudiandae reprehenderit iusto non eius corporis id. Cumque non laudantium illum aliquam voluptatem, maxime quam esse! Voluptatem, repudiandae qui!',
        user_id: 1,
      },
      { 
        title: 'item 3',
        image: 'https://cs14.pikabu.ru/post_img/big/2023/08/08/7/1691493167181916769.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit temporibus iste repudiandae reprehenderit iusto non eius corporis id. Cumque non laudantium illum aliquam voluptatem, maxime quam esse! Voluptatem, repudiandae qui!',
        user_id: 1,
      },
      { 
        title: 'item 4',
        image: 'https://cs14.pikabu.ru/post_img/big/2023/02/26/10/1677428547161349780.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit temporibus iste repudiandae reprehenderit iusto non eius corporis id. Cumque non laudantium illum aliquam voluptatem, maxime quam esse! Voluptatem, repudiandae qui!',
        user_id: 1,
      },
      { 
        title: 'item 5',
        image: 'https://cs13.pikabu.ru/post_img/big/2023/08/08/7/1691493166187495804.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit temporibus iste repudiandae reprehenderit iusto non eius corporis id. Cumque non laudantium illum aliquam voluptatem, maxime quam esse! Voluptatem, repudiandae qui!',
        user_id: 1,
      },
      { 
        title: 'item 6',
        image: 'https://cs13.pikabu.ru/post_img/big/2023/08/08/7/169149316911979551.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit temporibus iste repudiandae reprehenderit iusto non eius corporis id. Cumque non laudantium illum aliquam voluptatem, maxime quam esse! Voluptatem, repudiandae qui!',
        user_id: 1,
      },
      { 
        title: 'item 7',
        image: 'https://cs14.pikabu.ru/post_img/big/2023/02/26/10/167742854815478101.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit temporibus iste repudiandae reprehenderit iusto non eius corporis id. Cumque non laudantium illum aliquam voluptatem, maxime quam esse! Voluptatem, repudiandae qui!',
        user_id: 1,
      },
      { 
        title: 'item 8',
        image: 'https://i.pinimg.com/736x/d1/50/80/d15080d4ea3fcf5a575e22f7cf058480.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit temporibus iste repudiandae reprehenderit iusto non eius corporis id. Cumque non laudantium illum aliquam voluptatem, maxime quam esse! Voluptatem, repudiandae qui!',
        user_id: 1,
      },
    ], {});

  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};

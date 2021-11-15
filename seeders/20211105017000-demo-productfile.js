const fs = require('fs-extra');
const path = require('path');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const imgs = fs.readdirSync(path.join(__dirname, '../storages/211109'));
    const details = fs.readdirSync(path.join(__dirname, '../storages/211110'));
    const insertFile = [];
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 3; j++) {
        insertFile.push({
          prd_id: i,
          oriName: `상품이미지_${i}_${j}.jpg`,
          saveName: files[Math.floor(Math.random() * imgs.length)],
          mimeType: 'image/jpg',
          fileType: 'I',
          size: 12369,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
      for (let j = 0; j < 2; j++) {
        insertFile.push({
          prd_id: i,
          oriName: `상세이미지_${i}_${j}.jpg`,
          saveName: files[Math.floor(Math.random() * details.length)],
          mimeType: 'image/jpg',
          fileType: 'F',
          size: 12369,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }
    await queryInterface.bulkInsert('productfile', insertFile);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cate', null, {});
  },
};

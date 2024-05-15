'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('attribute', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        comment: 'Tên thuộc tính'
      },
      icon: {
        type: Sequelize.STRING,
        comment: 'Icon/hình ảnh đại diện'
      },
      priority: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('attribute');
  }
};
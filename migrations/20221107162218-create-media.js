'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      target_table: {
        type: Sequelize.STRING(30),
        comment: 'Tên bảng'
      },
      target_id: {
        type: Sequelize.INTEGER,
        comment: 'ID đối tượng'
      },
      target_type: {
        type: Sequelize.STRING,
        comment: 'Kiểu đối tượng'
      },
      media_name: {
        type: Sequelize.STRING,
        comment: 'Tên file'
      },
      media_type: {
        type: Sequelize.STRING(100),
        comment: 'Kiểu file: pdf, jpg, png, docx,...'
      },
      path: {
        type: Sequelize.STRING,
        comment: 'Đường dẫn'
      },
    });
    await queryInterface.addIndex('media', ['target_table', 'target_id'])
  },
  async down(queryInterface) {
    await queryInterface.dropTable('media');
  }
};
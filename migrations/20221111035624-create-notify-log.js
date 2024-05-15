'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notify_log', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      noty_app: {
        type: Sequelize.TINYINT,
      },
      noty_app_type: {
        type: Sequelize.TINYINT,
        comment: '1-Backend, 2-Customer'
      },
      user_id: {
        type: Sequelize.INTEGER,
        comment: 'ID người nhận thông báo'
      },
      noty_type: {
        type: Sequelize.STRING,
        comment: 'Kiểu thông báo'
      },
      json_data: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notify_log');
  }
};
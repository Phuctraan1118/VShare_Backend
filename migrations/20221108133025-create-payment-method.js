'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payment_method', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: '>0 các hình thức dùng để thanh toán, =0 group các hình thức thanh toán'
      },
      name: {
        type: Sequelize.STRING,
        comment: 'Tên hình thức thanh toán'
      },
      icon: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
        comment: 'Mô tả'
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('payment_method');
  }
};
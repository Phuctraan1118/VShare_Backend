'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer_day_price_rule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vehicle_price_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'vehicle_price_template',
          key: 'id'
        }
      },
      branch_vehicle_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'branch_vehicle',
          key: 'id'
        }
      },
      day_count_from: {
        type: Sequelize.INTEGER,
        comment: 'Bắt đầu từ ngày'
      },
      day_count_to: {
        type: Sequelize.INTEGER,
        comment: 'Đến hết ngày'
      },
      price: {
        type: Sequelize.INTEGER,
        comment: 'giá giảm: <=100 là %, >100 là giá fixed'
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('customer_day_price_rule');
  }
};
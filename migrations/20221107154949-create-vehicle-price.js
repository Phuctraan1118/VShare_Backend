'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle_price_template', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      branch_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'branch',
          key: 'id',
        }
      },
      vehicle_class: {
        type: Sequelize.STRING(10),
        comment: 'Mã hạng xe (trong system_config)'
      },
      base_price: {
        type: Sequelize.INTEGER,
        comment: 'Giá thuê ngày thường'
      },
      weekend_price: {
        type: Sequelize.INTEGER,
        comment: 'Giá thuê ngày cuối tuần'
      },
      month_price: {
        type: Sequelize.INTEGER,
        comment: 'Giá thuê tháng'
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
      }
    });
    await queryInterface.addIndex('vehicle_price_template', ['vehicle_class'])
  },
  async down(queryInterface) {
    await queryInterface.dropTable('vehicle_price_template');
  }
};
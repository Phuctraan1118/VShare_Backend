'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle_model', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand_id: {
        type: Sequelize.INTEGER,
        comment: 'ID hãng xe',
        onDelete: 'CASCADE',
        references: {
          model: 'vehicle_brand',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING,
        comment: 'Tên hiệu xe'
      },
    });
    await queryInterface.addIndex('vehicle_model', ['brand_id']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vehicle_model');
  }
};
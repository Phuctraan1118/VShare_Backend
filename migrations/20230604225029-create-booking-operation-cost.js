'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_operation_cost', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      booking_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'booking',
          key: 'id'
        }
      },
      code: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.INTEGER
      },
      note: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING(10),
        comment: 'Loại chi phí: pre-trước, post-sau'
      },
    });
    await queryInterface.removeColumn('booking_other_cost', 'created_at');
    await queryInterface.removeColumn('booking_other_cost', 'updated_at');
    await queryInterface.removeColumn('booking_other_cost', 'deleted_at');
  },
  async down(queryInterface) {
    await queryInterface.dropTable('booking_operation_cost');
  }
};
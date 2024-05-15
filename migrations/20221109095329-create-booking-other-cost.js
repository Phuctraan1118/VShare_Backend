'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_other_cost', {
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
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('booking_other_cost');
  }
};
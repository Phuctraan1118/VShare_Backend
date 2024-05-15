'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booked_schedule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      branch_vehicle_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'branch_vehicle',
          key: 'id'
        }
      },
      booking_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'booking',
          key: 'id'
        }
      },
      from_datetime: {
        type: Sequelize.DATE,
        comment: 'Ngày giờ nhận xe'
      },
      to_datetime: {
        type: Sequelize.DATE,
        comment: 'Ngày giờ trả xe'
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('booked_schedule');
  }
};
"use strict";

const Constants = require('../constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.removeColumn("booked_schedule", "active"),
      await queryInterface.addColumn("booked_schedule", "delivery_status", {
        type: Sequelize.STRING(10),
        defaultValue: Constants.DELIVERY_STATUS_PENDING,
        comment: "Trạng thái giao nhận: pending, returned, received, canceled",
      }),
      await queryInterface.addIndex('booked_schedule', ['delivery_status']),
    ]);
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("booked_schedule", "active", {
        type: Sequelize.BOOLEAN,
      }),
      await queryInterface.removeColumn("booked_schedule", "delivery_status"),
    ]);
  },
};

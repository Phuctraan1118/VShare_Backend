"use strict";

const { CUSTOMER_PROFILE_STATUS_UNCOMPLETED } = require('../constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("customer", "number_success_booking", {
        type: Sequelize.INTEGER,
        comment: "Số lượng đơn hàng thành công",
        defaultValue: 0,
      }),
      await queryInterface.addColumn("customer", "profile_status", {
        type: Sequelize.INTEGER,
        comment: "Trạng thái hồ sơ",
        defaultValue: CUSTOMER_PROFILE_STATUS_UNCOMPLETED
      }),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn("customer", "number_success_booking"),
      await queryInterface.removeColumn("customer", "profile_status"),
    ]);
  },
};

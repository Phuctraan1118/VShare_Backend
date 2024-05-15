"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("booking", "total_price", {
        type: Sequelize.INTEGER,
        comment: "Tổng tiền thuê xe sau KM",
      }),
      await queryInterface.addColumn("branch_vehicle", "active", {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        comment: "Trạng thái hoạt động",
      }),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn("booking", "total_price"),
      await queryInterface.removeColumn("branch_vehicle", "active"),
    ]);
  },
};
      
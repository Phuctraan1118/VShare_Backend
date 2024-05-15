"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.removeColumn("booking", "return_fuel"),
      await queryInterface.removeColumn("booking", "receive_fuel"),
      await queryInterface.removeColumn("booking", "receive_km"),
      await queryInterface.removeColumn("booking", "return_km"),
      await queryInterface.addColumn("booking", "other_cost", {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: "Tổng tiền phụ trội",
      }),
      await queryInterface.addColumn("booking", "operation_cost", {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: "Chi phí vận hành trước và trong GD",
      }),
      await queryInterface.addColumn("booking", "post_operation_cost", {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: "Chi phí vận hành sau GD",
      }),
      await queryInterface.addColumn("booking", "revenue", {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: "Doanh thu",
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("booking", "return_fuel", {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
      await queryInterface.addColumn("booking", "receive_fuel", {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
      await queryInterface.addColumn("booking", "receive_km", {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
      await queryInterface.addColumn("booking", "return_km", {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
      await queryInterface.removeColumn("booking", "other_cost"),
      await queryInterface.removeColumn("booking", "operation_cost"),
      await queryInterface.removeColumn("booking", "post_operation_cost"),
      await queryInterface.removeColumn("booking", "revenue"),
    ]);
  },
};
      
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.renameColumn("booking", "total_price", "total_amount"),
      await queryInterface.renameColumn("booking", "add_ons_fee", "total_addon_amount"),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.renameColumn("booking", "total_amount", "total_price"),
      await queryInterface.renameColumn("booking", "total_addon_amount", "add_ons_fee"),
    ]);
  },
};
      
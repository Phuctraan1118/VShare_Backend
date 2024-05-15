"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("customer_trust_score", "note", {
        type: Sequelize.STRING,
        comment: "Ghi chú",
      }),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn("customer_trust_score", "note"),
    ]);
  },
};

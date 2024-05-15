"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("booking", "discount_code", {
        type: Sequelize.STRING,
        comment: "Mã khuyến mại",
      }),
      await queryInterface.addColumn("booking", "discount_amount", {
        type: Sequelize.INTEGER,
        comment: "Số tiền khuyến mại",
      }),
      await queryInterface.addColumn("booking", "vat_cost", {
        type: Sequelize.INTEGER,
        comment: "Phí VAT",
      }),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn("booking", "discount_code"),
      await queryInterface.removeColumn("booking", "discount_amount"),
      await queryInterface.removeColumn("booking", "vat_cost"),
    ]);
  },
};
      
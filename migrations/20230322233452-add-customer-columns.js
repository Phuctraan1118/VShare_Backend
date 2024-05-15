"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("customer", "referral_code", {
        type: Sequelize.STRING,
        comment: "Mã giới thiệu của khách hàng",
      }),
      await queryInterface.addColumn("customer", "referral_by", {
        type: Sequelize.INTEGER,
        comment: "Giới thiệu bởi khách hàng nào",
        allowNull: true,
        references: {
          model: "customer",
          key: "id",
        },
      }),
      await queryInterface.addColumn("customer", "branch_id", {
        type: Sequelize.INTEGER,
        comment: "Thuộc cư dân của Vin",
        allowNull: true,
        references: {
          model: "branch",
          key: "id",
        },
      }),
      await queryInterface.addColumn("customer", "other_data", {
        type: Sequelize.TEXT,
        comment: "Các thông tin khác",
        defaultValue: JSON.stringify({}),
      }),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn("customer", "referral_code"),
      await queryInterface.removeColumn("customer", "referral_by"),
      await queryInterface.removeColumn("customer", "branch_id"),
      await queryInterface.removeColumn("customer", "other_data"),
    ]);
  },
};

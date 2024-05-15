"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.removeColumn("branch_vehicle", "rental_date"),
      await queryInterface.addColumn("branch_vehicle", "rental_from_date", {
        type: Sequelize.DATE,
        comment: "Ngày bắt đầu thuê",
      }),
      await queryInterface.addColumn("branch_vehicle", "rental_to_date", {
        type: Sequelize.DATE,
        comment: "Ngày kết thúc",
      }),
      await queryInterface.addColumn("branch_vehicle", "owner_pin_price", {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: "Giá thuê pin",
      }),
      await queryInterface.addColumn("branch_vehicle", "reconciliation", {
        type: Sequelize.STRING(10),
        comment: "Kiểu đổi soát",
      }),
      await queryInterface.addColumn("branch_vehicle", "contract_sign_date", {
        type: Sequelize.DATE,
        comment: "Ngày ký HD",
      }),
      await queryInterface.addColumn("branch_vehicle", "contract_expired_date", {
        type: Sequelize.DATE,
        comment: "Ngày hết hạn HD",
      }),
      await queryInterface.addColumn("branch_vehicle", "revenue_rate", {
        type: Sequelize.FLOAT,
        comment: "Tỉ lệ chia sẻ",
      }),
      await queryInterface.addColumn("branch_vehicle", "contract_created_by", {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "user"
        },
        comment: "Người tạo HD",
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("branch_vehicle", "rental_date", {
        type: Sequelize.DATE,
      }),
      await queryInterface.removeColumn("branch_vehicle", "rental_from_date"),
      await queryInterface.removeColumn("branch_vehicle", "rental_to_date"),
      await queryInterface.removeColumn("branch_vehicle", "owner_pin_price"),
      await queryInterface.removeColumn("branch_vehicle", "reconciliation"),
      await queryInterface.removeColumn("branch_vehicle", "contract_sign_date"),
      await queryInterface.removeColumn("branch_vehicle", "contract_expired_date"),
      await queryInterface.removeColumn("branch_vehicle", "revenue_rate"),
      await queryInterface.removeColumn("branch_vehicle", "contract_created_by"),
    ]);
  },
};

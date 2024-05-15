'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn('branch_vehicle', 'customer_day_km_limit', {
        type: Sequelize.SMALLINT,
        comment: 'Số km giới hạn/ngày'
      }),
      await queryInterface.addColumn('customer', 'approve_note', {
        type: Sequelize.STRING(1000),
        comment: 'Ghi chú thẩm định'
      }),
      await queryInterface.renameColumn('customer', 'note', 'customer_note'),
      await queryInterface.addColumn('branch', 'other_data', {
        type: Sequelize.TEXT,
        comment: 'Các thông tin khác',
        defaultValue: JSON.stringify({})
      }),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn('branch_vehicle', 'customer_day_km_limit'),
      await queryInterface.removeColumn('customer', 'approve_note'),
      await queryInterface.renameColumn('customer', 'customer_note', 'note'),
    ]);
  }
};
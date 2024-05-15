'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn('booking', 'booking_status', {
        type: Sequelize.INTEGER,
      }),
      await queryInterface.addColumn('booking', 'add_ons', {
        type: Sequelize.TEXT,
        comment: 'Các dịch vụ add-on đã mua',
        defaultValue: JSON.stringify([])
      }),
      await queryInterface.addColumn('booking', 'add_ons_fee', {
        type: Sequelize.INTEGER,
        comment: 'Tổng phí các dịch vụ mua thêm'
      }),
      await queryInterface.removeColumn('booking', 'insurance_fee'),
    ]);
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.removeColumn('booking', 'booking_status'),
      await queryInterface.removeColumn('booking', 'add_ons'),
      await queryInterface.removeColumn('booking', 'add_ons_fee'),
      await queryInterface.addColumn('booking', 'insurance_fee', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: 'Phí bảo hiểm chuyến đi'
      }),
    ]);
  }
};
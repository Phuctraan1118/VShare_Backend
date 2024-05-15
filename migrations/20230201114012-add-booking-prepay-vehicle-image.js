'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn('booking', 'prepay', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: 'Tiền đặt cọc/ thanh toán trước để giữ xe, trị giá 30% giá thuê'
      }),
      await queryInterface.addColumn('vehicle', 'image', {
        type: Sequelize.STRING,
        comment: 'Ảnh đại diện'
      }),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn('booking', 'prepay'),
      await queryInterface.removeColumn('vehicle', 'image'),
    ]);
  }
};
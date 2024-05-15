'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn('booking', 'code', {
        type: Sequelize.STRING(50),
        comment: 'Mã đơn hàng'
      }),
      await queryInterface.addIndex('booking', ['code'])
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn('booking', 'code'),
    ]);
  }
};
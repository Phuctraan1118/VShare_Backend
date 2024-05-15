'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn('branch', 'full_address', {
        type: Sequelize.STRING(1000),
        comment: 'Địa chỉ đầy đủ'
      }),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn('branch', 'full_address'),
    ]);
  }
};
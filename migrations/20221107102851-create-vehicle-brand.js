'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle_brand', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vehicle_type: {
        type: Sequelize.STRING(10),
        comment: 'C-ô tô, M-xe máy'
      },
      name: {
        type: Sequelize.STRING,
        comment: 'Tên hãng xe'
      },
      position: {
        type: Sequelize.SMALLINT,
        comment: 'Thứ tự sắp xếp',
        defaultValue: 0
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('vehicle_brand');
  }
};
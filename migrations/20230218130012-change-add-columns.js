'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await Promise.all([
      await queryInterface.removeColumn('booking', 'returned'),
      await queryInterface.removeColumn('booking', 'receive_fuel'),
      await queryInterface.removeColumn('booking', 'return_fuel'),
      await queryInterface.addColumn('booking', 'receive_fuel', {
        type: Sequelize.SMALLINT,
        allowNull: true,
        comment: 'Nhiên liệu (%) khi giao xe',
      }),
      await queryInterface.addColumn('booking', 'return_fuel', {
        type: Sequelize.SMALLINT,
        allowNull: true,
        comment: 'Nhiên liệu (%) khi trả xe',
      }),
      await queryInterface.addColumn('booking', 'insurance_fee', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: 'Phí bảo hiểm chuyến đi'
      }),
      await queryInterface.addColumn('booking', 'delivery_fee', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: 'Phí giao nhận xe'
      }),
      await queryInterface.addColumn('branch_vehicle', 'other_data', {
        type: Sequelize.TEXT,
        defaultValue: JSON.stringify({}),
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    return await Promise.all([
      await queryInterface.removeColumn('booking', 'receive_fuel'),
      await queryInterface.removeColumn('booking', 'return_fuel'),
      await queryInterface.addColumn('booking', 'receive_fuel', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      await queryInterface.addColumn('booking', 'return_fuel', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      await queryInterface.removeColumn('booking', 'insurance_fee'),
      await queryInterface.removeColumn('booking', 'delivery_fee'),
      await queryInterface.addColumn('booking', 'returned', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
      await queryInterface.removeColumn('branch_vehicle', 'other_data'),
    ]);
  }
};
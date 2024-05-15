'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('owner_avaiable_day', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      branch_vehicle_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'branch_vehicle',
          key: 'id'
        }
      },
      day_to: {
        type: Sequelize.DATEONLY,
        comment: 'Sẵn xe từ ngày'
      },
      day_from: {
        type: Sequelize.DATEONLY,
        comment: 'Sẵn xe đến ngày'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('owner_avaiable_day');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('maintain_schedule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      branch_vehicle_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'branch_vehicle',
          key: 'id'
        }
      },
      km: {
        type: Sequelize.INTEGER,
        comment: 'Số km đến kỳ bảo dưỡng'
      },
      date: {
        type: Sequelize.DATE,
        comment: 'Ngày hẹn bảo dưỡng'
      },
      status: {
        type: Sequelize.INTEGER,
        comment: '0-pending, 1-done',
        defaultValue: 0,
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
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('maintain_schedule');
  }
};
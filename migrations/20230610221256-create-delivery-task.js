'use strict';

const { TASK_STATUS_PENDING } = require('../constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.createTable('delivery_task', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        task_type: {
          type: Sequelize.STRING(10),
          allowNull: false,
          comment: 'Loại công việc'
        },
        booking_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'booking',
            key: 'id'
          }
        },
        branch_vehicle_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'branch_vehicle',
            key: 'id'
          }
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'user',
            key: 'id'
          },
          comment: 'Người giao/nhận',
        },
        do_at: {
          type: Sequelize.DATE,
          comment: 'Thời gian thực hiện'
        },
        task_status: {
          type: Sequelize.STRING(10),
          comment: 'Trạng thái công việc',
          defaultValue: TASK_STATUS_PENDING
        }
      }),
      await queryInterface.addIndex('delivery_task', ['booking_id', 'user_id']),
    ])
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.dropTable('delivery_task'),
    ]);
  }
};
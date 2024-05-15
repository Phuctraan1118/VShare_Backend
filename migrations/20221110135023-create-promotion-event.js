'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('promotion_event', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      branch_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'branch',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING
      },
      from_date: {
        type: Sequelize.DATE,
      },
      to_date: {
        type: Sequelize.DATE,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        comment: 'Kích hoạt'
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
    await queryInterface.dropTable('promotion_event');
  }
};
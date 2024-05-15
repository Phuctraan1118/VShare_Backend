'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle_attribute', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vehicle_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'vehicle',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      branch_vehicle_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'branch_vehicle',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      attribute_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'attribute',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      priority: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('vehicle_attribute');
  }
};
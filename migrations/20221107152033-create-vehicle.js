'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vehicle_type: {
        type: Sequelize.STRING(10),
        comment: 'Loại xe (C-Ô tô, M-Xe máy)',
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        comment: 'Tên xe'
      },
      brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'vehicle_brand',
          key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      model_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'vehicle_model',
          key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      vehicle_class: {
        type: Sequelize.STRING(10),
        comment: 'Mã hạng xe (trong system_config)'
      },
      version: {
        type: Sequelize.STRING,
        comment: 'Phiên bản'
      },
      seats: {
        type: Sequelize.TINYINT,
        comment: 'Số chỗ ngồi'
      },
      transmission: {
        type: Sequelize.STRING(10),
        comment: 'Truyền động: M-Số sàn, A-Số tự động (trong system_config)'
      },
      fuel: {
        type: Sequelize.STRING(10),
        comment: 'Nhiên liệu: G-Xăng, O-Dầu, E-Điện (trong system_config)'
      },
      fuel_consumption: {
        type: Sequelize.STRING,
        comment: 'Mức tiêu hao nhiên liệu'
      },
      style: {
        type: Sequelize.STRING,
        comment: 'Kiểu dáng'
      }
    });
    await queryInterface.addIndex('vehicle', ['vehicle_class']);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('vehicle');
  }
};
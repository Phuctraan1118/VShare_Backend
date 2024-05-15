'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trust_score_config', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        comment: 'Tên'
      },
      point: {
        type: Sequelize.TINYINT,
        comment: 'Số điểm tin tưởng'
      },
      note: {
        type: Sequelize.STRING,
        comment: 'Ghi chú'
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
  async down(queryInterface) {
    await queryInterface.dropTable('trust_score_config');
  }
};
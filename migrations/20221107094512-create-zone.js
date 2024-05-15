'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('zone', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        comment: 'Tên tỉnh thành, quận huyện'
      },
      code: {
        type: Sequelize.STRING,
        comment: 'Mã tỉnh thành, quận huyện'
      },
      position: {
        type: Sequelize.INTEGER,
        comment: 'Thứ tự'
      },
      parent_id: {
        type: Sequelize.INTEGER,
        comment: 'ID cha'
      },
      left: {
        type: Sequelize.INTEGER,
      },
      right: {
        type: Sequelize.INTEGER,
      },
      level: {
        type: Sequelize.TINYINT,
        comment: 'Cấp 1-tỉnh thành, 2-quận huyện, 3-xã thị trấn'
      },
      status: {
        type: Sequelize.TINYINT,
        comment: 'Trạng thái'
      },
    });
    await queryInterface.addIndex('zone', ['parent_id']);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('zone');
  }
};
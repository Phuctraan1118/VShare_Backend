'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING(200),
        comment: 'Họ và tên'
      },
      phone: {
        type: Sequelize.STRING(20),
        comment: 'Số điện thoại'
      },
      phone0x: {
        type: Sequelize.STRING(20),
        comment: 'Convert sdt về đầu 0'
      },
      birthday: {
        type: Sequelize.DATEONLY,
        comment: 'Ngày sinh'
      },
      identity_number: {
        type: Sequelize.STRING(20),
        comment: 'CCCD/CMND/Hộ chiếu'
      },
      identity_date: {
        type: Sequelize.DATEONLY,
        comment: 'Ngày cấp CCCD/CMND/Hộ chiếu'
      },
      driver_licence_number: {
        type: Sequelize.STRING(20),
        comment: 'Số GPLX'
      },
      driver_licence_date: {
        type: Sequelize.DATEONLY,
        comment: 'Ngày cấp GPLX'
      },
      zalo: {
        type: Sequelize.STRING,
        comment: 'Tài khoản zalo'
      },
      email: {
        type: Sequelize.STRING(100),
      },
      password: {
        type: Sequelize.STRING,
        comment: 'Hash mật khẩu'
      },
      address: {
        type: Sequelize.STRING,
        comment: 'Địa chỉ'
      },
      note: {
        type: Sequelize.STRING,
        comment: 'Ghi chú'
      },
      approve_date: {
        type: Sequelize.DATE,
        comment: 'Ngày duyệt'
      },
      approve_by: {
        type: Sequelize.INTEGER,
        comment: 'Duyệt bởi ai',
        references: {
          model: 'user',
          key: 'id',
        },
      },
      approve_status: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
        comment: 'Trạng thái duyệt',
      },
      trust_score: {
        type: Sequelize.TINYINT,
        comment: 'Tổng số điểm tin tưởng'
      },
      trusted_at: {
        type: Sequelize.DATE,
        comment: 'Thời gian gần nhất cập nhật điểm tin tưởng'
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
    await queryInterface.addIndex('customer', ['phone0x']);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('customer');
  }
};
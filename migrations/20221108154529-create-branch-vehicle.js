'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('branch_vehicle', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vehicle_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'vehicle',
          key: 'id',
        }
      },
      branch_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'branch',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: true,
      },
      owner_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        comment: 'Chủ xe',
        references: {
          model: 'user',
          key: 'id',
        },
        allowNull: true,
      },
      license_number: {
        type: Sequelize.STRING(20),
        comment: 'Biển kiểm soát'
      },
      name: {
        type: Sequelize.STRING,
        comment: 'Tên xe (Tự sinh theo tên xe + BKS + màu sắc)'
      },
      rental_type: {
        type: Sequelize.STRING(10),
        defaultValue: 'A',
        comment: 'Hình thức thuê xe: D, M, A',
      },
      rental_date: {
        type: Sequelize.DATEONLY,
        comment: 'Ngày thuê từ chủ xe',
      },
      owner_day_price: {
        type: Sequelize.INTEGER,
        comment: 'Chi phí phải trả cho chủ xe trên mỗi booking theo ngày',
      },
      owner_month_price: {
        type: Sequelize.INTEGER,
        comment: 'Chi phí phải trả cho chủ xe trên mỗi booking theo tháng',
      },
      owner_month_km_limit: {
        type: Sequelize.SMALLINT,
        comment: 'Số km giới hạn/tháng'
      },
      owner_overkm_price: {
        type: Sequelize.INTEGER,
        comment: 'Phí vượt km phải trả cho chủ xe',
      },
      customer_base_price: {
        type: Sequelize.INTEGER,
        comment: 'Giá cho khách thuê ngày thường'
      },
      customer_weekend_price: {
        type: Sequelize.INTEGER,
        comment: 'Giá thuê xe ngày cuối tuần',
      },
      customer_month_price: {
        type: Sequelize.INTEGER,
        comment: 'Giá cho khách thuê theo tháng'
      },
      customer_month_km_limit: {
        type: Sequelize.SMALLINT,
        comment: 'Giới hạn km/tháng cho khách'
      },
      customer_overkm_price: {
        type: Sequelize.INTEGER,
        comment: 'Phí vượt km khách phải trả',
      },
      customer_overtime_price: {
        type: Sequelize.INTEGER,
        comment: 'Phí quá giờ trả xe/giờ khách phải trả',
      },
      position_company: {
        type: Sequelize.STRING,
      },
      position_username: {
        type: Sequelize.STRING,
        comment: 'Tên đăng nhập tk định vị'
      },
      position_password: {
        type: Sequelize.STRING,
        comment: 'Mật khẩu tk định vị'
      },
      has_maintain: {
        type: Sequelize.BOOLEAN,
        comment: 'Bảo dưỡng',
        defaultValue: false,
      },
      has_insurance: {
        type: Sequelize.BOOLEAN,
        comment: 'Bảo hiểm',
        defaultValue: false,
      },
      insurance_brand: {
        type: Sequelize.STRING,
        comment: 'Hãng bảo hiểm'
      },
      insurance_phone: {
        type: Sequelize.STRING,
        comment: 'Số điện thoại bảo hiểm'
      },
      insurance_expire_date: {
        type: Sequelize.DATEONLY,
        comment: 'Ngày hết hạn bảo hiểm'
      },
      etc_username: {
        type: Sequelize.STRING,
        comment: 'Tài khoản ETC'
      },
      etc_password: {
        type: Sequelize.STRING,
        comment: 'Mật khẩu ETC'
      },
      etc_balance: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: 'Số dư tài khoản ETC'
      },
      registry_date: {
        type: Sequelize.DATEONLY,
        comment: 'Ngày đăng kiểm'
      },
      current_km: {
        type: Sequelize.INTEGER,
        comment: 'Số km hiện tại'
      },
      vehicle_color: {
        type: Sequelize.STRING,
        comment: 'Màu sắc xe'
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
    await queryInterface.addIndex('branch_vehicle', ['license_number']);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('branch_vehicle');
  }
};
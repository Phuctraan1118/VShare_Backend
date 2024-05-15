'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source: {
        type: Sequelize.STRING(50),
        comment: 'Nguồn'
      },
      vehicle_type: {
        type: Sequelize.STRING(10),
        comment: 'Loại xe'
      },
      branch_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'branch',
          key: 'id'
        }
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'customer',
          key: 'id'
        }
      },
      estimate_branch_vehicle_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'branch_vehicle',
          key: 'id',
          deferrable: 'abc',
        },
        comment: 'ID Xe dự kiến giao',
      },
      actual_branch_vehicle_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'branch_vehicle',
          key: 'id'
        },
        comment: 'ID Xe thực tế nhận'
      },
      rental_type: {
        type: Sequelize.STRING(10),
        comment: 'Hình thức thuê: all, day, month (trong system_config)'
      },
      estimate_price: {
        type: Sequelize.INTEGER,
        comment: "Giá thuê tạm tính trước khi giao xe"
      },
      actual_price: {
        type: Sequelize.INTEGER,
        comment: "Giá thực tế phải trả khi thanh toán"
      },
      note: {
        type: Sequelize.STRING,
        comment: 'Ghi chú'
      },
      receive_type: {
        type: Sequelize.STRING(10),
        comment: 'Hình thức nhận xe'
      },
      estimate_receive_datetime: {
        type: Sequelize.DATE,
        comment: "Thời gian nhận xe dự kiến"
      },
      estimate_return_datetime: {
        type: Sequelize.DATE,
        comment: "Thời gian trả xe dự kiến"
      },
      estimate_rental_duration: {
        type: Sequelize.STRING(9),
        comment: "Số ngày|tháng|năm thuê dự kiến"
      },
      actual_receive_datetime: {
        type: Sequelize.DATE,
        comment: "Thời gian nhận xe thực tế"
      },
      actual_return_datetime: {
        type: Sequelize.DATE,
        comment: "Thời gian trả xe thực tế"
      },
      actual_rental_duration: {
        type: Sequelize.STRING(9),
        comment: "Số ngày|tháng|năm thuê thực tế"
      },
      receive_km: {
        type: Sequelize.INTEGER,
        comment: 'Số km lúc nhận xe'
      },
      return_km: {
        type: Sequelize.INTEGER,
        comment: "Số km khi trả xe"
      },
      receive_fuel: {
        type: Sequelize.STRING,
        comment: 'Nhiên liệu lúc nhận xe'
      },
      return_fuel: {
        type: Sequelize.STRING,
        comment: 'Nhiên liệu lúc trả xe'
      },
      returned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        comment: "Đã trả xe hay chưa"
      },
      give_user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        },
        comment: 'Người giao xe'
      },
      return_user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        },
        comment: 'Người nhận xe từ khách hàng'
      },
      saler_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        },
        comment: 'Nv chăm sóc khách hàng'
      },
      level: {
        type: Sequelize.STRING(2),
        comment: 'Từ C3 đến L9'
      },
      deposit: {
        type: Sequelize.TEXT,
        comment: 'Các giấy tờ KH đặt cọc',
        defaultValue: "{}",
      },
      payment_method_id: {
        type: Sequelize.INTEGER,
        comment: 'ID hình thức thanh toán',
        references: {
          model: 'payment_method',
          key: 'id'
        }
      },
      vat: {
        type: Sequelize.TEXT,
        comment: 'Thông tin hóa đơn',
        defaultValue: "{}",
      },
      other: {
        type: Sequelize.TEXT,
        comment: 'Các thông tin khác',
        defaultValue: "{}",
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
    await queryInterface.dropTable('booking');
  }
};
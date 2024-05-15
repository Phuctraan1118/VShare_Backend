'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('branch', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        comment: 'Tên chi nhánh'
      },
      code: {
        type: Sequelize.STRING,
        comment: 'Mã chi nhánh'
      },
      province_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'zone',
          key: 'id'
        }
      },
      district_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'zone',
          key: 'id'
        }
      },
      address: {
        type: Sequelize.STRING,
        comment: 'Địa chỉ'
      },
      latlng: {
        type: Sequelize.STRING,
        comment: 'Tọa độ địa lý, vd: 21.0244247,105.7938073'
      },
      rental_time_from: {
        type: Sequelize.STRING(5),
        comment: 'Giờ cho thuê, định dạng HH:mm',
      },
      rental_time_to: {
        type: Sequelize.STRING(5),
        comment: 'Giờ cho thuê, định dạng HH:mm',
      },
      limit_km: {
        type: Sequelize.INTEGER,
        comment: 'Số km giới hạn/ngày'
      },
      overkm_fee: {
        type: Sequelize.INTEGER,
        comment: 'Phụ trội km (đ/km)'
      },
      overtime_fee: {
        type: Sequelize.INTEGER,
        comment: 'Phụ trội thời gian (đ/giờ)'
      },
      free_delivery_km: {
        type: Sequelize.TINYINT,
        comment: 'Số km giao nhận miễn phí (km)'
      },
      delivery_fee: {
        type: Sequelize.INTEGER,
        comment: 'Phí giao nhận (đ/km)'
      },
      procedure: {
        type: Sequelize.TEXT,
        comment: 'Thủ tục thuê xe'
      },
      holiday_event_price: {
        type: Sequelize.TEXT,
        comment: "Giá theo ngày lễ"
      },
      week_days_price: {
        type: Sequelize.TEXT,
        comment: 'Giá theo ngày trong tuần'
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable('branch');
  }
};
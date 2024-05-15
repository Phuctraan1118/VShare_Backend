"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("booking", "phone", {
        type: Sequelize.STRING(20),
      }),
      await queryInterface.addColumn("booking", "fullname", {
        type: Sequelize.STRING(100)
      }),
      await queryInterface.addColumn("booking", "email", {
        type: Sequelize.STRING(100)
      }),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn("booking", "phone"),
      await queryInterface.removeColumn("booking", "fullname"),
      await queryInterface.removeColumn("booking", "email"),
    ]);
  },
};
      
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn('branch', 'agent_name', {
        type: Sequelize.STRING,
        comment: 'Tên người đại diện'
      }),
      await queryInterface.addColumn('branch', 'agent_phone', {
        type: Sequelize.STRING,
        comment: 'SDT người đại diện'
      })
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn('branch', 'agent_name'),
      await queryInterface.removeColumn('branch', 'agent_phone'),
    ]);
  }
};
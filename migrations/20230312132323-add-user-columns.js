'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn('user', 'branch_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'branch',
          key: 'id'
        }
      }),
      await queryInterface.addIndex('user', ['branch_id']),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn('user', 'branch_id'),
    ]);
  }
};
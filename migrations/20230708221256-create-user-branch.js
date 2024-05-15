'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.createTable('user_branch', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        branch_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'branch',
            key: 'id'
          }
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'user',
            key: 'id'
          }
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),
      await queryInterface.addIndex('user_branch', ['branch_id', 'user_id']),
    ])
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.dropTable('user_branch'),
    ]);
  }
};
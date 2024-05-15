"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("trust_score_config", "parent_id", {
        type: Sequelize.INTEGER,
        references: {
          model: "trust_score_config",
          key: "id",
        },
      }),
      await queryInterface.addColumn("trust_score_config", "path", {
        type: Sequelize.STRING,
      }),
    ]);
  },
  async down(queryInterface) {
    return Promise.all([
      await queryInterface.removeColumn("trust_score_config", "parent_id"),
      await queryInterface.removeColumn("trust_score_config", "path"),
    ]);
  },
};

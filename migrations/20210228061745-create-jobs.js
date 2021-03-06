"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Jobs", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING(22),
      },
      requester_name: {
        type: Sequelize.STRING(50),
      },
      job_name: {
        type: Sequelize.STRING(50),
      },
      thumbnail: {
        type: Sequelize.STRING(255),
        defaultValue: "picture.jpg",
      },
      fee: {
        type: Sequelize.STRING(7),
      },
      content: {
        type: Sequelize.STRING,
      },
      is_approved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      category_id: {
        type: Sequelize.STRING(22),
        references: {
          model: "Categories",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Jobs");
  },
};

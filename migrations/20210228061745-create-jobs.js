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
      job_name: {
        type: Sequelize.STRING(50),
        defaultValue: "job title",
      },
      job_email: {
        type: Sequelize.STRING(50),
      },
      thumbnail: {
        type: Sequelize.STRING(255),
        defaultValue: "job_thumbnail.jpg",
      },
      fee: {
        type: Sequelize.STRING(7),
        defaultValue: "0",
      },
      content: {
        type: Sequelize.STRING,
        defaultValue: "job description",
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

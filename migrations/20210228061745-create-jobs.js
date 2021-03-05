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
      name: {
        type: Sequelize.STRING(50),
      },
      thumbnail: {
        type: Sequelize.STRING(255),
        defaultValue: "thumbnail.jpg",
      },
      status: {
        type: Sequelize.STRING(6),
      },
      content: {
        type: Sequelize.STRING,
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

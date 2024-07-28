"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airports",[
        {
          name: "Mumbai Airport",
          address: "Mysore",
          cityId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kolkata Airport",
          address: "Kolkata",
          cityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
        {
          name: "lucknow Airport",
          address: "lucknow",
          cityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bihar Airport",
          address: "patna",
          cityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        } 
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

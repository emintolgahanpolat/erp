'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('SatinAlmas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ad: {
                type: Sequelize.STRING
            },
            tedarikciID: {
                type: Sequelize.INTEGER
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('SatinAlmas');
    }
};
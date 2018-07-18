'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('UrunTasarims', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ad: {
                type: Sequelize.STRING
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('UrunTasarims');
    }
};
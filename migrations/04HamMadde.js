'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('HamMaddes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            stokID: {
                type: Sequelize.INTEGER
            },
            miktar: {
                type: Sequelize.DOUBLE
            },
            urunTasarimID: {
                type: Sequelize.INTEGER
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('HamMaddes');
    }
};
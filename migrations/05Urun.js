'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Uruns', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            miktar: {
                type: Sequelize.INTEGER
            },
            karOrani: {
                type: Sequelize.INTEGER
            },
            urunTasarimID: {
                type: Sequelize.INTEGER
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Uruns');
    }
};
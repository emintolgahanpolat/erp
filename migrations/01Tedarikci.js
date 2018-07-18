'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Tedarikcis', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ad: {
                type: Sequelize.STRING
            },
            tel: {
                type: Sequelize.STRING
            },
            mail: {
                type: Sequelize.STRING
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Tedarikcis');
    }
};
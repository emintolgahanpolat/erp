'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Stoks', {
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
            },
            miktar: {
                type: Sequelize.INTEGER
            },
            kullanilan: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            birimFiyat: {
                type: Sequelize.DOUBLE
            },
            islemTarihi: {
                type: Sequelize.DATE
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Stoks');
    }
};
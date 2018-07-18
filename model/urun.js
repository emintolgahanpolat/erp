'use strict';
module.exports = function(sequelize, DataTypes) {
    var Urun= sequelize.define('Urun', {
            miktar: {type: DataTypes.INTEGER},
            karOrani: {type: DataTypes.INTEGER}
        },
        {
            timestamps: false
        });

    Urun.associate = function (models) {
        models.Urun.belongsTo(models.UrunTasarim, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Urun;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
    var UrunTasarim = sequelize.define('UrunTasarim', {
            ad: {type: DataTypes.STRING},
        },
        {
            timestamps: false
        });

    UrunTasarim.associate = function (models) {
        models.UrunTasarim.hasMany(models.HamMadde, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        models.UrunTasarim.hasMany(models.Urun, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return UrunTasarim;
};
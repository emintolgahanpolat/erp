'use strict';
module.exports = function(sequelize, DataTypes) {
    var SatinAlma = sequelize.define('SatinAlma', {
            ad: {type: DataTypes.STRING},
        },
        {
            timestamps: false
        });

    SatinAlma.associate = function (models) {
        models.SatinAlma.hasMany(models.SiparisHamMadde, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        models.SatinAlma.belongsTo(models.Tedarikci, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return SatinAlma;
};
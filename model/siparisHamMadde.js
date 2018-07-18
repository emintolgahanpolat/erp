'use strict';
module.exports = function(sequelize, DataTypes) {
    var SiparisHamMadde = sequelize.define('SiparisHamMadde', {
        miktar: {type: DataTypes.DOUBLE}
    },{
        timestamps: false
    });

    SiparisHamMadde.associate = function (models) {
        models.SiparisHamMadde.belongsTo(models.SatinAlma, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        models.SiparisHamMadde.belongsTo(models.Stok, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return SiparisHamMadde;
};
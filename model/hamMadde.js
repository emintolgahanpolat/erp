'use strict';
module.exports = function(sequelize, DataTypes) {
    var HamMadde = sequelize.define('HamMadde', {
            miktar: {type: DataTypes.DOUBLE}
        },{
            timestamps: false
        });

    HamMadde.associate = function (models) {
        models.HamMadde.belongsTo(models.UrunTasarim, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        models.HamMadde.belongsTo(models.Stok, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return HamMadde;
};
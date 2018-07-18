'use strict';
module.exports = function(sequelize, DataTypes) {
    var Stok = sequelize.define('Stok', {
        ad: {type: DataTypes.STRING},
        miktar: {type: DataTypes.INTEGER},
        kullanilan: {type: DataTypes.INTEGER},
        birimFiyat: {type: DataTypes.DOUBLE},
        islemTarihi:{
            type: DataTypes.STRING,
            defaultValue: sequelize.fn('NOW')

        }
    },
        {
        timestamps: false
    });
    Stok.associate = function (models) {
        models.Stok.belongsTo(models.Tedarikci, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Stok;
};
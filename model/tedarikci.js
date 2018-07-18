'use strict';
module.exports = function(sequelize, DataTypes) {
    var Tedarikci = sequelize.define('Tedarikci', {
            ad: {type: DataTypes.STRING},
            tel: {type: DataTypes.STRING},
            mail: {type: DataTypes.STRING}
        },
        {
            timestamps: false
        });
    return Tedarikci;
};
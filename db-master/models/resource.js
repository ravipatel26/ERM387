"use strict";

module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define("Resource", {
    resourceId: {type: DataTypes.INTEGER(), allowNull: false, autoIncrement: true, primaryKey: true},
    resourceType : {type: DataTypes.STRING(), allowNull: false},
    isIt: {type: DataTypes.BOOLEAN(), allowNull: false, defaultValue: false},
    available: {type: DataTypes.BOOLEAN(), allowNull: false, defaultValue: true}
  },{
    tableName: 'Resource',
    classMethods: {
      associate: function(models) {
        Resource.hasOne(models.Room, {foreignKey: "resourceId"});
        Resource.belongsToMany(models.User, {through: models.Reservation, foreignKey: 'resourceId'});
        Resource.hasOne(models.Computer, {foreignKey: 'resourceId'});
        Resource.hasOne(models.Projector, {foreignKey: 'resourceId'});
        Resource.hasOne(models.WhiteBoard, {foreignKey: 'resourceId'});
      }
    }
  });

  return Resource;
};

//character Model
'use strict';

//export this module to index.js
module.exports = function(sequelize, DataTypes) {

  // the model itself is character, defined in sequelize
  var Characters = sequelize.define('Characters', {
    //the roleName which is a string
    routeName: DataTypes.STRING,
    //the name which is a string
    name: DataTypes.STRING,
    //the role which is a string
    role: DataTypes.STRING,
    //the age which is a integer
    age: DataTypes.INTEGER,
    //the forcePoints which is a integer
    forcePoints: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Characters;
};
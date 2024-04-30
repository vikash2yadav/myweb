'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service_details extends Model {
    static associate(models) {
      // define association here
    }
  }
  service_details.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    logo: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'service_details',
  });
  return service_details;
};
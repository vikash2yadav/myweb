'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project_details extends Model {
    static associate(models) {
      // define association here
    }
  }
  project_details.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    count: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.BIGINT(20)
    },
    title: {
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
    modelName: 'project_details',
  });
  return project_details;
};
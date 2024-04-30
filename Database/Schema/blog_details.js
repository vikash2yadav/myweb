'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog_details extends Model {
    static associate(models) {
      // define association here
    }
  }
  blog_details.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    images: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    date:{
      allowNull: false,
      defaultValue: new Date(),
      type: DataTypes.DATE
    },
    branch:{
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
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
    modelName: 'blog_details',
  });
  return blog_details;
};
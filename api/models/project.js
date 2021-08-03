'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Project extends Sequelize.Model {}
  Project.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name is required'
        },
        notEmpty: {
          msg: 'Please provide a name'
        }
      }
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description is required'
        },
        notEmpty : {
          msg: 'Please provide a description'
        }
      }
    },
    skills: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Skills are required'
          },
          notEmpty : {
            msg: 'Please provide skills'
          }
        }
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Image is required'
          },
          notEmpty : {
            msg: 'Please provide an image'
          }
        }
      },
  }, { sequelize });

  return Project;
};

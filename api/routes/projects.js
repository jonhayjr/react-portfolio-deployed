var express = require('express');
var router = express.Router();
const {Project} = require('../models');
const {Op} = require('sequelize');

//Imports asyncHandler middleware function
const { asyncHandler } = require('../middleware/async-handler');

// Route that returns all projects
router.get('/projects', asyncHandler(async (req, res) => {
  const projects = await Project.findAll({
  });

  res.json(projects);
}));

// Route that returns project for a specific skill
router.get('/projects/:skill', asyncHandler(async (req, res) => {
  const {skill} = req.params;
  const project = await Project.findAll({
    where: {
      skills: {
        [Op.like]: `%${skill}%`
      }
    }
  });
  res.json(project);
}));



module.exports = router;

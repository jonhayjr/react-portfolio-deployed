var express = require('express');
var router = express.Router();
const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) {
    throw error;
  }

  console.log("Successfully connected to the database.");
});


/* GET projects. */
router.get('/projects', (req, res, next) => {
  let sql = `Select * from projects`;
  connection.query(sql, (err, data, fields) => {
      if (err) throw err;

      res.status(200).json({
        data
      })
  });

});

/* GET projects by skill. */
router.get('/projects/:skill', (req, res, next) => {
  //Get skill from parameters and surround with wildcards
  const skill = `%${req.params.skill}%`;
  let sql = `Select * from projects where skills like ?`;

  //Query DB for project with skill
  connection.query(sql, [skill], (err, data, fields) => {
      if (err) throw err;
      res.status(200).json({
        data
      })
  });

});


module.exports = router;

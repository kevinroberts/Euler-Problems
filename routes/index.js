const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {

  // read all the problem files from the euler folder
  const path = './public/javascripts/euler';
  let filenames = [];

  fs.readdir(path, function (err, items) {
    for (var i = 0; i < items.length; i++) {
      filenames.push(items[i]);
      console.log(items[i]);
    }
    const regex = /^(\d{2,3})_(.+)$/;
    let problems = [];

    filenames.map(function (filename) {
      const info = regex.exec(filename);
      const id = info[1];
      let name = info[2].replace(/_|\.js/g, " ").trim();
      name = name.substr(0, 1).toUpperCase() + name.substr(1, name.length);

      let problem = {filename: filename, id: id, name: name};
      problems.push(problem);
    });

    res.render('index', {title: 'Project Euler Sandbox', problems});

  });
});

module.exports = router;

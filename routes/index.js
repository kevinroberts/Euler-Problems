const express = require('express');

const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', (req, res) => {
  // read all the problem files from the euler folder
  const path = './public/javascripts/euler';
  const filenames = [];

  fs.readdir(path, (err, items) => {
    for (let i = 0; i < items.length; i += 1) {
      filenames.push(items[i]);
      console.log(items[i]);
    }
    const regex = /^(\d{2,3})_(.+)$/;
    const problems = [];

    filenames.forEach((filename) => {
      const info = regex.exec(filename);
      const id = info[1];
      let name = info[2].replace(/_|\.js/g, ' ').trim();
      name = name.substr(0, 1).toUpperCase() + name.substr(1, name.length);

      const problem = { filename, id, name };
      problems.push(problem);
    });

    res.render('index', { title: 'Project Euler Sandbox', problems });
  });
});

module.exports = router;

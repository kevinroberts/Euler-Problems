const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const filenames = ['01_multiples_of_3_and_5.js', '02_Even_Fibonacci_numbers.js'];
  const regex = /^(\d{2,3})_(.+)$/;
  let problems = [];

  filenames.map(function(filename) {
    const info = regex.exec(filename);
    const id = info[1];
    const name = info[2].replace(/_|\.js/g, " ").trim();
    let problem = {filename: filename, id: id, name: name};
    problems.push(problem);
  });

  res.render('index', { title: 'Project Euler Sandbox', problems });
});

module.exports = router;

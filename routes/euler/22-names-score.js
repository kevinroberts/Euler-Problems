const express = require('express');
const fs = require('fs');

const router = express.Router();

function getNameScore(name, pos) {
  name = name.toLowerCase();
  let alphaTotal = 0
  name.split('').forEach((char) => {
    // 'a'.charCodeAt(0) - 96 == 1 ... 'z'.charCodeAt(0) - 96 = 26
    alphaTotal += (char.charCodeAt(0) - 96);
  });
  return alphaTotal * pos;
}

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  // read in the names files
  const data = fs.readFileSync('./public/data/p022_names.txt', 'utf8');
  // get sorted names array from file contents
  const namesArr = data.split(',').sort();

  let score = 0;

  for (let i = 0; i < namesArr.length; i += 1) {
    score += getNameScore(namesArr[i], i + 1);
  }

  res.send(JSON.stringify({ score }));
});

module.exports = router;

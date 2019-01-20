const express = require('express');
const fs = require('fs');

const router = express.Router();

function getNameScore(name, pos) {
  name = name.toLowerCase();
  let alphaTotal = 0;
  name.split('').forEach((char) => {
    // 'a'.charCodeAt(0) - 96 == 1 ... 'z'.charCodeAt(0) - 96 = 26
    alphaTotal += (char.charCodeAt(0) - 96);
  });
  return alphaTotal * pos;
}


// Quick sort implantation modified to check alpha order
function partition(arr, low, high) {
  const pivot = arr[high];
  let i = (low - 1); // index of smaller element
  for (let j = low; j < high; j += 1) {
    const compareScore = arr[j].localeCompare(pivot);
    // if arr[j] comes before pivot or is at the same order...
    if (compareScore === -1 || compareScore === 0) {
      i += 1;
      // swap arr[i] and arr[j]
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  // swap arr[i+1] and arr[high] (or pivot)
  const temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}

// The main function that implements QuickSort()
// arr[] --> Array to be sorted,
// low --> Starting index,
// high --> Ending index
function sort(arr, low, high) {
  if (low < high) {
    // partition index
    const pi = partition(arr, low, high);
    // recursively sort elements before
    // partition and after partition
    sort(arr, low, pi - 1);
    sort(arr, pi + 1, high);
  }
}

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  // read in the names files
  const data = fs.readFileSync('./public/data/p022_names.txt', 'utf8');
  // get sorted names array from file contents
  const namesArr = data.split(',');
  // use custom implemented sorting function using QuickSort algorithm to alpha sort
  const n = namesArr.length;
  sort(namesArr, 0, n - 1);

  let score = 0;

  for (let i = 0; i < namesArr.length; i += 1) {
    score += getNameScore(namesArr[i], i + 1);
  }

  res.send(JSON.stringify({ score }));
});

module.exports = router;

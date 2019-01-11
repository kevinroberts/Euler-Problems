Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

function maxPathSum1(triangle) {
  const maxDigits = [];
  // add the top number from the triangle
  maxDigits.push(triangle[0][0]);

  let indexOfLastNumber = 0;
  for (let i = 1; i < triangle.length; i += 1) {
    const currentRow = triangle[i];
    const indexToFindNextNumber = indexOfLastNumber;

    const firstChoice = triangle[i][indexToFindNextNumber];
    let secondChoiceIndex = indexToFindNextNumber + 1;
    let secondChoice;
    if (secondChoiceIndex >= (currentRow.length - 1) && currentRow.length > 2) {
      secondChoiceIndex = indexToFindNextNumber - 1;
      secondChoice = triangle[i][secondChoiceIndex];
    } else {
      secondChoice = triangle[i][secondChoiceIndex];
    }
    if (firstChoice > secondChoice) {
      indexOfLastNumber = indexToFindNextNumber;
      maxDigits.push(firstChoice);
    } else {
      indexOfLastNumber = indexToFindNextNumber + 1;
      maxDigits.push(secondChoice);
    }
  }
  console.log(maxDigits);

  let maxSum = maxDigits.reduce((total, num) => total + num);
  let newMax = 0;
  let iterations = 20000;

  while (iterations > 0) {
    const newMaxDigits = [];
    newMaxDigits.push(triangle[0][0]);
    iterations -= 1;
    indexOfLastNumber = 0;
    for (let i = 1; i < triangle.length; i += 1) {
      const currentRow = triangle[i];
      const indexToFindNextNumber = indexOfLastNumber;
      let firstChoiceIndex = indexToFindNextNumber + (Math.round(Math.random()) ? 1 : -1);
      let firstChoice;
      if (firstChoiceIndex >= (currentRow.length - 1) && currentRow.length > 2) {
        firstChoiceIndex = indexToFindNextNumber - 1;
        firstChoice = triangle[i][firstChoiceIndex];
      } else {
        firstChoice = triangle[i][firstChoiceIndex];
      }
      let secondChoiceIndex = firstChoiceIndex + 1;
      let secondChoice;
      if (secondChoiceIndex >= (currentRow.length - 1) && currentRow.length > 2) {
        secondChoiceIndex = firstChoiceIndex - 1;
        secondChoice = triangle[i][secondChoiceIndex];
      } else {
        secondChoice = triangle[i][secondChoiceIndex];
      }
      if (firstChoice > secondChoice) {
        indexOfLastNumber = firstChoiceIndex;
        newMaxDigits.push(firstChoice);
      } else {
        indexOfLastNumber = secondChoiceIndex;
        newMaxDigits.push(secondChoice);
      }
    }
    newMax = newMaxDigits.reduce((total, num) => total + num);
    if (newMax > maxSum) {
      maxSum = newMax;
      console.log('new max: ', newMaxDigits);
    }
  }

  iterations = 2000;

  // while (iterations > 0) {
  //   const newMaxDigits = [];
  //   iterations -= 1;
  //   indexOfLastNumber = 0;
  //   const lastLength = triangle[triangle.length - 1].length - 1;
  //   newMaxDigits.push(triangle[triangle.length - 1][Math.floor(Math.random() * lastLength)]);
  //
  //   for (let i = triangle.length - 2; i >= 0; i -= 1) {
  //     const currentRow = triangle[i];
  //     const indexToFindNextNumber = indexOfLastNumber;
  //     let firstChoiceIndex = indexToFindNextNumber + (Math.round(Math.random()) ? 1 : 0);
  //     let firstChoice;
  //     if (firstChoiceIndex >= (currentRow.length - 1) && currentRow.length > 2) {
  //       firstChoiceIndex = indexToFindNextNumber - 1;
  //       firstChoice = triangle[i][firstChoiceIndex];
  //     } else {
  //       firstChoice = triangle[i][firstChoiceIndex];
  //     }
  //     let secondChoiceIndex = firstChoiceIndex + 1;
  //     let secondChoice;
  //     if (secondChoiceIndex >= (currentRow.length - 1) && currentRow.length > 2) {
  //       secondChoiceIndex = firstChoiceIndex - 1;
  //       secondChoice = triangle[i][secondChoiceIndex];
  //     } else {
  //       secondChoice = triangle[i][secondChoiceIndex];
  //     }
  //     if (typeof firstChoice === 'undefined') {
  //       firstChoice = 0;
  //     }
  //     if (typeof secondChoice === 'undefined') {
  //       secondChoice = 0;
  //     }
  //     if (firstChoice > secondChoice) {
  //       indexOfLastNumber = firstChoiceIndex;
  //       newMaxDigits.push(firstChoice);
  //     } else {
  //       indexOfLastNumber = secondChoiceIndex;
  //       newMaxDigits.push(secondChoice);
  //     }
  //   }
  //   newMax = newMaxDigits.reduce((total, num) => total + num);
  //   if (newMax > maxSum) {
  //     maxSum = newMax;
  //     console.log('new max2: ', newMaxDigits);
  //   }
  // }
  return maxSum;
}

// START OF NON SOLUTION CODE
window.jQuery(function ($) {
  const id = '#18';
  const description = 'By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.\n' +
    '<div class="mx-auto pyramid" style="width: 200px">' +
    '<p style="color: red">&nbsp;&nbsp;&nbsp;&nbsp;3</p>' +
    '<p>&nbsp;&nbsp;<span style="color: red">7</span> 4</p>' +
    '<p>&nbsp;2 <span style="color: red">4</span> 6</p>' +
    '<p>8 5 <span style="color: red;">9</span> 3</p>' +
    '</div>\n' +
    'That is, 3 + 7 + 4 + 9 = 23.\nFind the maximum total from top to bottom of the triangle below:\n<a target="_blank" href="https://projecteuler.net/problem=18">See Problem 18 for the triangle</a>\n' +
    'NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method!';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('maxPathSum1');
    const triangle = [
      [75],
      [95, 64],
      [17, 47, 82],
      [18, 35, 87, 10],
      [20, 4, 82, 47, 65],
      [19, 1, 23, 75, 3, 34],
      [88, 2, 77, 73, 7, 63, 67],
      [99, 65, 4, 28, 6, 16, 70, 92],
      [41, 41, 26, 56, 83, 40, 80, 70, 33],
      [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
      [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
      [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
      [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
      [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
      [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
    ];
    const result = maxPathSum1(triangle);
    console.timeEnd('maxPathSum1');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

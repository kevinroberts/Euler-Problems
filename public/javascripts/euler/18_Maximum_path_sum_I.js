
function maxPathSum1(triangle, rows) {
  const tri = triangle;
  // loop for bottom-up calculation
  for (let i = rows - 1; i >= 0; i -= 1) {
    for (let j = 0; j <= i; j += 1) {
      // for each element, check both
      // elements just below the number
      // and below right to the number
      // add the maximum of them to it
      if (tri[i + 1][j] > tri[i + 1][j + 1]) {
        tri[i][j] += tri[i + 1][j];
      } else {
        tri[i][j] += tri[i + 1][j + 1];
      }
    }
  }
  // return the top element
  // which stores the maximum sum
  return tri[0][0];
}

function maxPathSumRecursive(triangle, n, row) {
  let currentSum = triangle[row][n];

  if (row < triangle.length - 1) {
    const left = maxPathSumRecursive(triangle, n, row + 1);
    const right = maxPathSumRecursive(triangle, n + 1, row + 1);
    currentSum += Math.max(left, right);
  }

  return currentSum;
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
    // triangle converted to a regular matrix (empty spots replaced with zero)
    const triangleAsMatrix = [
      [75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [95, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [17, 47, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [18, 35, 87, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [20, 4, 82, 47, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [19, 1, 23, 75, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [88, 2, 77, 73, 7, 63, 67, 0, 0, 0, 0, 0, 0, 0, 0],
      [99, 65, 4, 28, 6, 16, 70, 92, 0, 0, 0, 0, 0, 0, 0],
      [41, 41, 26, 56, 83, 40, 80, 70, 33, 0, 0, 0, 0, 0, 0],
      [41, 48, 72, 33, 47, 32, 37, 16, 94, 29, 0, 0, 0, 0, 0],
      [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14, 0, 0, 0, 0],
      [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57, 0, 0, 0],
      [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48, 0, 0],
      [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31, 0],
      [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
    ];
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
    // const result = maxPathSum1(triangleAsMatrix, 14);
    const result = maxPathSumRecursive(triangle, 0, 0);
    console.timeEnd('maxPathSum1');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

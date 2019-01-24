
// The Binomial Coefficient -- using the multiplicative formula
function calculateLatticePaths(rows, columns) {
  let paths = 1;
  let gridSize = rows;
  for (let i = 0; i < gridSize; i += 1) {
    paths *= (2 * gridSize) - i;
    paths /= i + 1;
  }

  return paths;
}


// START OF NON SOLUTION CODE
window.jQuery(function ($) {
  const id = '#15';
  const description = 'Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.\n' +
    '\n' +
    'How many such routes are there through a 20×20 grid?';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('calculateLatticePaths');
    const result = calculateLatticePaths(20, 20);
    console.timeEnd('calculateLatticePaths');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

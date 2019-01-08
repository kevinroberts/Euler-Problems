function sumSquares() {

  let sumOfSquares = 0;
  let sumOfNaturals = 0;

  for (let i = 1; i <= 100; i += 1) {
    sumOfNaturals += i;
    sumOfSquares += i ** 2;
  }
  return (sumOfNaturals ** 2) - sumOfSquares;
}

// START OF NON SOLUTION CODE
window.jQuery(function ($) {
  const id = '#06';
  const description = 'The sum of the squares of the first ten natural numbers is,\n' +
    '\n' +
    '<p>12 + 2<sup>2</sup> + <span>&#8230;</span> + 10<sup>2</sup> = 385</p>' +
    'The square of the sum of the first ten natural numbers is,\n' +
    '\n' +
    '<p>(1 + 2 + <span>&#8230;</span> + 10)<sup>2</sup> = 55<sup>2</sup> = 3025</p>' +
    'Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.\n' +
    '\n' +
    'Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('sumSquares');
    const result = sumSquares();
    console.timeEnd('sumSquares');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

function sumOfMultiplesBelow(limit) {
  let sum = 0;

  for (let i = 0; i < limit; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// START OF NON SOLUTION CODE
window.jQuery(function($) {
  const id = '#01';
  const description = 'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\n' +
    '\n' +
    'Find the sum of all the multiples of 3 or 5 below 1000.';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));
  $(id).find('button').click(function() {
    const result = sumOfMultiplesBelow(1000);
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

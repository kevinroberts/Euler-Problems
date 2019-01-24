function factorial(num) {
  if (num === 0n || num === 1n)
    return 1n;
  for (var i = num - 1n; i >= 1n; i--) {
    num *= i;
  }
  return num;
}

function sumOfFactorial(limit) {
  const factSum = BigInt(factorial(limit));
  const factSumStrArr = factSum.toString().split('');
  return factSumStrArr.reduce((memo, num) => parseInt(memo, 10) + parseInt(num, 10));
}

// START OF NON SOLUTION CODE
window.jQuery(function($) {
  const id = '#20';
  let description = '<em>n</em>! means n × (n − 1) × ... × 3 × 2 × 1\n' +
    '\n' +
    'For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,\n' +
    'and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.\n' +
    '\n' +
    'Find the sum of the digits in the number 100!\n' +
  'Note: this solution needs to be run on an up to date version of Chrome. Uses the BigInt a built-in object that provides a way to represent whole numbers larger than 2<sup>53</sup>, which is the largest number Javascript can reliably represent with the Number primitive.';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));
  $(id).find('button').click(function() {
    const result = sumOfFactorial(BigInt(100));
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

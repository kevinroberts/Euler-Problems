function nonAbundantSums() {
  // calculate all the abundant numbers under 28123
  const abundants = [];
  for (let i = 12; i < 28123; i += 1) {
    // see 21_Amicable_numbers.js for sum of divisors
    const sumOfD = sumOfDivisors(i);
    if (sumOfD > i) {
      abundants.push(i);
    }
  }
  const isSumOfTwoAbundants = new Array(28123 + 1);
  for (let i = 0; i < abundants.length; i += 1) {
    for (let j = i; j < abundants.length; j += 1) {
      if (abundants[i] + abundants[j] <= 28123) {
        isSumOfTwoAbundants[abundants[i] + abundants[j]] = true;
      } else {
        break;
      }
    }
  }
  // go through all the positive ints under the max possible
  // and add them up if they don't equal a sum of an abundant
  let sum = 0;
  for (let i = 1; i <= 28123; i += 1) {
    if (!isSumOfTwoAbundants[i]) {
      sum += i;
    }
  }
  return sum;
}

// START OF NON SOLUTION CODE
window.jQuery(function($) {
  const id = '#23';
  const description = 'A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.\n' +
    '\n' +
    'A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.\n' +
    '\n' +
    'As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.\n' +
    '\n' +
    'Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));
  $(id).find('button').click(() => {
    const result = nonAbundantSums();
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

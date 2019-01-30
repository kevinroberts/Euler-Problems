function getDivisorsCnt(n) {

  let numDivisors = 1;
  let factor = 2; // Candidate for prime factor of `n`

  // If `n` is not a prime number then it must have one factor
  // which is <= `sqrt(n)`, so we try these first:
  while (factor * factor <= n) {
    if (n % factor === 0) {
      // `factor` is a prime factor of `n`, determine the exponent:
      let exponent = 0;
      do {
        n /= factor;
        exponent += 1;
      } while (n % factor === 0);
      // `factor^exponent` is one term in the prime factorization of n,
      // this contributes as factor `exponent + 1`:
      numDivisors *= exponent + 1;
    }
    // Next possible prime factor:
    factor = factor == 2 ? 3 : factor + 2;
  }

  // Now `n` is either 1 or a prime number. In the latter case,
  // it contributes a factor 2:
  if (n > 1) {
    numDivisors *= 2;
  }

  return numDivisors;
}

function divisibleTriangularNumber() {
  let maxFactorsSize = -1;
  let maxTriNumber = 0;

  for (let i = 100; i < 99999; i += 1) {
    const triNum = (i * (i + 1)) / 2;
    const factorsSize = getDivisorsCnt(triNum);
    // find the factors for tri num:
    if (factorsSize > maxFactorsSize) {
      maxFactorsSize = factorsSize;
      maxTriNumber = triNum;
      if (factorsSize >= 500) {
        console.log('goal reached: ', triNum);
        break;
      }
    }
  }

  console.log(maxFactorsSize);
  return maxTriNumber;
}

// START OF NON SOLUTION CODE
window.jQuery(($) => {
  const id = '#12';
  let description = 'The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:\n' +
    '\n' +
    '1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...\n' +
    '\n' +
    'Let us list the factors of the first seven triangle numbers:\n' +
    '\n' +
    ' 1: 1\n' +
    ' 3: 1,3\n' +
    ' 6: 1,2,3,6\n' +
    '10: 1,2,5,10\n' +
    '15: 1,3,5,15\n' +
    '21: 1,3,7,21\n' +
    '28: 1,2,4,7,14,28\n' +
    'We can see that 28 is the first triangle number to have over five divisors.\n' +
    '\n' +
    'What is the value of the first triangle number to have over five hundred divisors?';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));
  $(id).find('button').click(function () {
    console.time('divisibleTriangularNumber');
    const result = divisibleTriangularNumber();
    console.timeEnd('divisibleTriangularNumber');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

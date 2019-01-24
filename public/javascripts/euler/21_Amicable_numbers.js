function getProperDivisors(num) {
  const divisors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function sumOfDivisors(n) {
  const divisors = getProperDivisors(n);
  if (divisors && divisors.length > 1) {
    return divisors.reduce((memo, num) => memo + num);
  }
  if (divisors && divisors.length === 1) {
    return divisors[0];
  }
  return 0;
}

function calcAmicableNumbers(num) {
  const amicableNumbers = [];
  for (let a = 1; a < num; a += 1) {
    // d(a) = b | d(b) = a, and a != b
    const b = sumOfDivisors(a);
    const divOfB = sumOfDivisors(b);
    if (a === divOfB && a !== b) {
      // found amicable numbers
      amicableNumbers.push(a);
      amicableNumbers.push(b);
    }
  }
  console.log(amicableNumbers);
  const uniqueArray = amicableNumbers.filter(function(item, pos, self) {
    return self.indexOf(item) === pos;
  });
  return uniqueArray.reduce((memo, numb) => memo + numb);
}

// START OF NON SOLUTION CODE
window.jQuery(function ($) {
  const id = '#21';
  const description = 'Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).\n' +
    'If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.\n' +
    '\n' +
    'For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.\n' +
    '\n' +
    'Evaluate the sum of all the amicable numbers under 10000.';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('calcAmicableNumbers');
    const result = calcAmicableNumbers(10000);
    console.timeEnd('calcAmicableNumbers');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

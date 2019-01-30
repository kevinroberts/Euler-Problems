function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  if (n % 3 === 0) {
    return n === 3;
  }

  const h = Math.floor(1 + Math.sqrt(n));
  let i = 5;

  while (i <= h) {
    if (n % i === 0) {
      return false;
    }
    if (n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function largestPrimeFactor(number) {
  let max = 0;
  for (let i = 3; i < Math.floor(Math.sqrt(number)); i += 1) {
    if ((number / i) % 1 === 0 && isPrime(i)) {
      max = i;
    }
  }
  return max;
}


// START OF NON SOLUTION CODE
window.jQuery(($) => {
  const id = '#03';
  const description = 'The prime factors of 13195 are 5, 7, 13 and 29.\n' +
    '\n' +
    'What is the largest prime factor of the number 600851475143 ?';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function() {
    console.time('LargestPrimeFactor');
    const result = largestPrimeFactor(600851475143);
    console.timeEnd('LargestPrimeFactor');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

function sumOfPrimes() {
  let primes = [];
  for (let i = 1; i <= 2000000; i++) {
    // See solution #03 JS for isPrime function
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  const sum = primes.reduce((total, num) => total + num);
  return sum;
}

// START OF NON SOLUTION CODE
$(function () {
  const id = '#10';
  const description = 'The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.\n' +
    '\n' +
    'Find the sum of all the primes below two million.';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('sumOfPrimes');
    const result = sumOfPrimes();
    console.timeEnd('sumOfPrimes');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

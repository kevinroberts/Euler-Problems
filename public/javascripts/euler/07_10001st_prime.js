function primeOfN(n) {
  let prime = 0;
  let primeCount = 0;

  for (let i = 1; i <= 99999999; i++) {
    // See solution #03 JS for isPrime function
    if (isPrime(i)) {
      primeCount++;

      if (primeCount === n) {
        prime = i;
        break;
      }
    }
  }
  return prime;
}

// START OF NON SOLUTION CODE
window.jQuery(($) => {
  const id = '#07';
  const description = 'By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.\n' +
    '\n' +
    'What is the 10 001st prime number?';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('primeN');
    const result = primeOfN(10001);
    console.timeEnd('primeN');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

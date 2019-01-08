function largestPrimeFactor(number) {
  let max = 0;
  for (let i=3; i < Math.floor(Math.sqrt(number)); i++) {
    if ((number / i) % 1 === 0 && isPrime(i)) {
      max = i;
    }
  }
  return max;
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false;
  return num !== 1 && num !== 0;
};


// START OF NON SOLUTION CODE
window.jQuery(function($) {
  const id = '#03';
  const description = 'The prime factors of 13195 are 5, 7, 13 and 29.\n' +
    '\n' +
    'What is the largest prime factor of the number 600851475143 ?';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function() {
    console.time('LargestPrimeFactor');
    const result = largestPrimeFactor(600851475143);
    console.timeEnd('LargestPrimeFactor');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

function evenFibonacciNumbers(limit) {
  let sum = 0;
  let stop = 0;
  // calculate the first 100 sequence of Fibonacci
  const array = new Array(100 + 1).fill(null);
  array[0] = 0;
  array[1] = 1;
  for (let i = 2; i <= 100; i += 1) {
    array[i] = array[i - 1] + array[i - 2];
    // only go as far as the upper limit
    if (array[i] >= limit) {
      stop = i;
      break;
    }
  }

  for (let i = 0; i <= stop; i += 1) {
    const fibOfi = array[i];
    if (fibOfi % 2 === 0) {
      // Fib sequence whose values do not exceed limit
      sum += fibOfi;
    }
  }

  return sum;
}

// START OF NON SOLUTION CODE
window.jQuery(($) => {
  const id = '#02';
  const description = 'Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:\n' +
    '\n' +
    '1, 2, 3, 5, 8, 13, 21, 34, 55, 89, &#8230;\n' +
    '\n' +
    'By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function() {
    console.time('EvenFibonacciNumbers');
    const result = evenFibonacciNumbers(4000000);
    console.timeEnd('EvenFibonacciNumbers');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

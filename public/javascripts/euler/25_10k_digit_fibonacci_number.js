function fib (num) {
  if (num <= 2) {
    return 1;
  }
  let fibo1 = BigInt(1);
  let fibo2 = BigInt(1);
  let fibonacci = BigInt(1);

  for (let i = 3; i <= num; i += 1) {
    fibonacci = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = fibonacci;
  }
  return fibonacci;
}

function thousandDigitFib() {
  let index = 400;
  let digits = 0;

  while (digits < 1000) {
    index++;
    const fibno = fib(index);
    digits = fibno.toString().length;
  }
  return index;
}

// START OF NON SOLUTION CODE
window.jQuery(function($) {
  const id = '#25';
  const description = 'What is the index of the first term in the Fibonacci sequence to contain 1000 digits?\n';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));
  $(id).find('button').click(() => {
    console.time('thousandDigitFib');
    const result = thousandDigitFib();
    console.timeEnd('thousandDigitFib');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

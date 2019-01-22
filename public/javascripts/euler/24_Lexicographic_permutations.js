function lexographicalPermuations(num) {
  const fac = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let ret = '';
  num--;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    const t = num / fac[i] | 0;
    num %= fac[i];
    ret += digits[t];
    digits.splice(t, 1);
  }
  return ret;
}

// START OF NON SOLUTION CODE
window.jQuery(function($) {
  const id = '#24';
  const description = 'A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:\n' +
    '\n' +
    '012   021   102   120   201   210\n' +
    '\n' +
    'What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));
  $(id).find('button').click(() => {
    const result = lexographicalPermuations(1000000);
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

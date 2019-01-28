
function cycleLength(b) {
  let a = 1;
  let t = 0;
  do {
    a = a * 10 % b;
    t++;
  } while (a !== 1);
  return t;
}

function reciprocalCycle() {
  // A list of Full reptend primes (A001913) will produce the largest cycle lengths d = p - 1
  // looping over all primes and maximize cycle length (primes under 1000)
  const primes = [7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
    127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
    179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
    233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
    283, 293, 307, 311, 313, 317, 331, 337, 347, 349,
    353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
    419, 421, 431, 433, 439, 443, 449, 457, 461, 463,
    467, 479, 487, 491, 499, 503, 509, 521, 523, 541,
    547, 557, 563, 569, 571, 577, 587, 593, 599, 601,
    607, 613, 617, 619, 631, 641, 643, 647, 653, 659,
    661, 673, 677, 683, 691, 701, 709, 719, 727, 733,
    739, 743, 751, 757, 761, 769, 773, 787, 797, 809,
    811, 821, 823, 827, 829, 839, 853, 857, 859, 863,
    877, 881, 883, 887, 907, 911, 919, 929, 937, 941,
    947, 953, 967, 971, 977, 983, 991, 997];

  let max = 0;
  let maxP = 0;
  for (let i = 0; i < primes.length; i++) {
    const tmp = cycleLength(primes[i]);
    if (max < tmp) {
      console.log('Cycle Length 0f ' + primes[i] + ' = ', tmp);
      maxP = primes[i];
      max = tmp;
    }
  }
  return maxP;
}

// START OF NON SOLUTION CODE
window.jQuery(function($) {
  const id = '#26';
  const description = 'A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:\n' +
    '\n' +
    '1/2\t= \t0.5\n' +
    '1/3\t= \t0.(3)\n' +
    '1/4\t= \t0.25\n' +
    '1/5\t= \t0.2\n' +
    '1/6\t= \t0.1(6)\n' +
    '1/7\t= \t0.(142857)\n' +
    '1/8\t= \t0.125\n' +
    '1/9\t= \t0.(1)\n' +
    '1/10\t= \t0.1\n' +
    'Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.\n' +
    '\n' +
    'Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));
  $(id).find('button').click(() => {
    const result = reciprocalCycle();
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

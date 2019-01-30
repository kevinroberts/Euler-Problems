function countConsecutivePrimes(a, b) {

  for (let n = 0; ; n += 1) {
    const t = n * n + a * n + b;
    // see solution 03 for isPrime() function
    if (!isPrime(t)) {
      return n;
    }
  }
}

const primes = [
  2,   3,   5,   7,  11,  13,  17,  19,  23,  29,  31,  37,  41,
  43,  47,  53,  59,  61,  67,  71,  73,  79,  83,  89,  97, 101,
  103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167,
  173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239,
  241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
  317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
  401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467,
  479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569,
  571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643,
  647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733,
  739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823,
  827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
  919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];


function quadraticPrimes() {
  let maxC = 0;
  let maxAB = 0;
  for (let a = -999; a <= 1001; a += 2) {
    for (let i = 0; i < primes.length; i += 1) {
      const b = primes[i];
      const c = countConsecutivePrimes(a - (i === 0 ? 1 : 0), b);
      if (c > maxC) {
        maxC = c;
        maxAB = a * b;
      }
    }
  }
  return maxAB;
}

// START OF NON SOLUTION CODE
window.jQuery(($) => {
  const id = '#27';
  const description = 'Euler discovered the remarkable quadratic formula:\n\n n2+n+41\n'
  + 'It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39. However, when n=40,402+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41 is clearly divisible by 41.\n'
  + 'The incredible formula n2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.\n\n'
  + 'Considering quadratics of the form:\n'
  + 'n2+an+b, where |a|<1000 and |b|≤1000\n'
  + 'where |n| is the modulus/absolute value of n\n'
  + 'e.g. |11|=11 and |−4|=4\n'
  + 'Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));
  $(id).find('button').click(() => {
    console.time('quadraticPrimes');
    const result = quadraticPrimes();
    console.timeEnd('quadraticPrimes');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

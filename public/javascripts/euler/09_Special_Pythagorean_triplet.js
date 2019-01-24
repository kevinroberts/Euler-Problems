function specialTriplet() {
  let m = 2;
  let n = 1;
  // monte-carlo approach -- random n / m sample (w/Euclid's formula)
  for (let i = 1; i < 10000; i += 1) {
    n = Math.floor(Math.random() * 50);
    m = Math.floor(Math.random() * 50);
    while (n > m) {
      n = Math.floor(Math.random() * 50);
      m = Math.floor(Math.random() * 50);
    }
    const a = (m ** 2) - (n ** 2);
    const b = 2 * m * n;
    const c = (a ** 2) + (b ** 2);

    const sum = a + b + Math.sqrt(c);

    if (sum === 1000) {
      console.log('found triplet with sum of 1000:', a, b, Math.sqrt(c));
      return (a * b * Math.sqrt(c));
    }
  }

  return 'triplet not found';
}

// START OF NON SOLUTION CODE
window.jQuery(function ($) {
  const id = '#09';
  const description = 'A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,\n' +
    '\n' +
    '<p>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>\n</p>' +
    'For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.\n' +
    '\n' +
    'There exists exactly one Pythagorean triplet for which a + b + c = 1000.\n' +
    'Find the product <em>abc</em>.';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('specialTriplet');
    const result = specialTriplet();
    console.timeEnd('specialTriplet');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

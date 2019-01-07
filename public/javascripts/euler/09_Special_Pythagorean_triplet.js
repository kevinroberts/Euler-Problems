function specialTriplet () {
  let a = 0;
  let b = 1;
  let c = 2;

  for (let i = 1; i < 9999999; i += 1) {

      a = a+i ** 2;
      b = b+i ** 2;
      c = c+i ** 2;

      if (a + b === c) {
        console.log('Triplet found: ', a, b, c);
        break;
      }

  }


  return smallestMultiple;
}

// START OF NON SOLUTION CODE
$(function () {
  const id = '#09';
  const description = 'A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,\n' +
    '\n' +
    '<p>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>\n</p>' +
    'For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.\n' +
    '\n' +
    'There exists exactly one Pythagorean triplet for which a + b + c = 1000.\n' +
    'Find the product <em>abc</em>.';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('specialTriplet');
    const result = specialTriplet();
    console.timeEnd('specialTriplet');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

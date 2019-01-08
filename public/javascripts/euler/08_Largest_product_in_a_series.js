function largestProduct () {
  // find the largest product series in the following number
  const digits = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450'.split('');

  let maxProduct = 0;
  let maxDigitSeries = [];

  for (let i = 0; i <= digits.length; i += 1) {
    let product = 0;
    let iterations = 0;
    let digitSeries = [];

    for (let j = i; j <= digits.length; j += 1) {
      iterations += 1;
      digitSeries.push(parseInt(digits[j], 10));
      if (iterations === 13) {
        // multiply all the digits in series
        product = digitSeries.reduce((memo, num) => memo * num);

        if (maxProduct < product) {
          maxProduct = product;
          maxDigitSeries = digitSeries;
        }
        digitSeries = [];
        break;
      }
    }
  }
  console.log('Sequence giving greatest product is: ', maxDigitSeries);
  return maxProduct;

}

// START OF NON SOLUTION CODE
window.jQuery(function ($) {
  const id = '#08';
  const description = 'Find the thirteen adjacent digits in the 1000-digit number that have the greatest product.\n<a target="_blank" href="https://projecteuler.net/problem=8">See Problem 8 for number</a>\n\n What is the value of this product?\n';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('largestProduct');
    const result = largestProduct();
    console.timeEnd('largestProduct');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

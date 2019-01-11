
function calculatePowerSum(power) {
  const powerSum = BigInt(2**1000);
  const powerSumStrArr = powerSum.toString().split('');
  return powerSumStrArr.reduce((memo, num) => parseInt(memo, 10) + parseInt(num, 10));
}


// START OF NON SOLUTION CODE
window.jQuery(function ($) {
  const id = '#16';
  const description = '215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.\n' +
    '\n' +
    'What is the sum of the digits of the number 2<sup>1000</sup>?\n Note: this solution needs to be run on a up to date version of Chrome.';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('calculatePowerSum');
    const result = calculatePowerSum(1000);
    console.timeEnd('calculatePowerSum');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

function smallestMultiple () {
  let smallestMultiple = 1;

  for (let i = 1; i < 999999999; i++) {
    if (i%20 == 0 && i%19 == 0 && i%18 == 0 && i%17 == 0 && i%16 == 0 && i%15 == 0 && i%14 == 0 && i%13 == 0
      && i%12 == 0 && i%11 == 0 && i%10 == 0 && i%9 == 0 && i%8 == 0 && i%7 == 0 && i%6 == 0 && i%5 == 0
      && i%4 == 0 && i%3 == 0 && i%2 == 0) {
      smallestMultiple = i;
      break;
    }
  }
  return smallestMultiple;
}

// START OF NON SOLUTION CODE
window.jQuery(($) => {
  const id = '#05';
  const description = '2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.\n' +
    '\n' +
    'What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('smallestMultiple');
    const result = smallestMultiple();
    console.timeEnd('smallestMultiple');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

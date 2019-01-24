
function numberLetterCount(num) {
  const wordNumArray = [
    [1, 'One'], [2, 'Two'], [3, 'Three'], [4, 'Four'], [5, 'Five'], [6, 'Six'], [7, 'Seven'],
    [8, 'Eight'], [9, 'Nine'], [10, 'Ten'], [11, 'Eleven'], [12, 'Twelve'], [13, 'Thirteen'], [14, 'Fourteen'],
    [15, 'Fifteen'], [16, 'Sixteen'], [17, 'Seventeen'], [18, 'Eighteen'], [19, 'Nineteen'], [20, 'Twenty'],
    [30, 'Thirty'], [40, 'Forty'], [50, 'Fifty'], [60, 'Sixty'], [70, 'Seventy'], [80, 'Eighty'],
    [90, 'Ninety'], [100, 'Hundred'], [1000, 'Thousand'],
  ];
  const numberWords = new Map(wordNumArray);
  let letterCount = 0;

  for (let i = 1; i <= num; i += 1) {
    let numberAsWords = '';
    if (i <= 20) {
      letterCount += numberWords.get(i).length;
      numberAsWords += numberWords.get(i);
    }
    if (i > 20 && i < 100) {
      const secondDigit = parseInt(i.toString().substr(1, 2), 10);
      letterCount += numberWords.get(i - secondDigit).length;
      numberAsWords += numberWords.get(i - secondDigit);
      if (secondDigit !== 0) {
        letterCount += numberWords.get(secondDigit).length;
        numberAsWords += ` ${numberWords.get(secondDigit)}`;
      }
    }
    if (i >= 100 && i < 1000) {
      const firstDigit = parseInt(i.toString().substr(0, 1), 10);
      // get first digit number length (1-9)
      letterCount += numberWords.get(firstDigit).length;
      numberAsWords += numberWords.get(firstDigit);
      // plus hundred length
      letterCount += numberWords.get(100).length;
      numberAsWords += ` ${numberWords.get(100)}`;
      // plus third digit
      const lastTwoDigits = parseInt(i.toString().substr(1, 2), 10);
      if (lastTwoDigits <= 20 && lastTwoDigits > 0) {
        letterCount += numberWords.get(lastTwoDigits).length;
        letterCount += 3; // for 'and'
        numberAsWords += ` and ${numberWords.get(lastTwoDigits)}`;
      } else if (lastTwoDigits > 20) {
        const lastDigit = parseInt(i.toString().substr(2, 3), 10);
        // add the base second digit word
        letterCount += numberWords.get(lastTwoDigits - lastDigit).length;
        letterCount += 3; // for 'and'
        numberAsWords += ` and ${numberWords.get(lastTwoDigits - lastDigit)}`;
        // add the third digit word if not zero
        if (lastDigit !== 0) {
          letterCount += numberWords.get(lastDigit).length;
          numberAsWords += ` ${numberWords.get(lastDigit)}`;
        }
      }
    }
    if (i === 1000) {
      letterCount += numberWords.get(i).length + numberWords.get(1).length;
      numberAsWords += `${numberWords.get(1)} ${numberWords.get(i)}`;
    }
    console.log(numberAsWords);
  }

  return letterCount;
}


// START OF NON SOLUTION CODE
window.jQuery(function ($) {
  const id = '#17';
  const description = 'If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.\n' +
    '\n' +
    'If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?\n\nNOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('numberLetterCount');
    const result = numberLetterCount(1000);
    console.timeEnd('numberLetterCount');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

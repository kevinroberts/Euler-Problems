function largestPalindromeProduct(numberOfDigits) {

  return numberOfDigits;
}

// START OF NON SOLUTION CODE
$(function() {
  const id = '#04';
  const description = 'A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.\n' +
    '\n' +
    'Find the largest palindrome made from the product of two 3-digit numbers.';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function() {
    const result = largestPalindromeProduct(3);
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

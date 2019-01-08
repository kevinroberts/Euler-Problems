function largestPalindromeProduct () {
  let num1 = 999;
  let num2 = 999;
  let largestProduct = 0;

  for (let i = 0; i <= 999; i++) {
    num1--;
    const product1 = num1 * num2;
    if (checkPalindrome(product1)) {
      if (largestProduct < product1) {
        largestProduct = product1;
      }
    }
    for (let j = 0; j <= 999; j++) {
      if (j > 0 && num1 > 0) {
        const product2 = num1 * j;
        if (checkPalindrome(product2)) {
          if (largestProduct < product2) {
            largestProduct = product2;
          }
        }
      }
    }
  }
  return largestProduct;
}

function checkPalindrome(num) {
  let strNum = num.toString();
  let isPal = true;
  if (strNum.length < 2) {
    return true;
  }

  for (let i = 0; i <= strNum.length / 2; i++) {
    const lead = strNum.charAt(i);

    const edge = strNum.charAt((strNum.length - i) - 1);

    if (lead !== edge) {
      isPal = false;
    }

  }

  return isPal;
}

// START OF NON SOLUTION CODE
window.jQuery(function ($) {
  const id = '#04';
  const description = 'A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.\n' +
    '\n' +
    'Find the largest palindrome made from the product of two 3-digit numbers.';

  $(id).find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    const result = largestPalindromeProduct();
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

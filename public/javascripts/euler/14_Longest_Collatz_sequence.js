function calculateCollatzSteps(num) {
  let n = num;
  // first step includes the num itself
  let steps = 1;
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else if (n % 2 === 1) {
      n = (3 * n) + 1;
    }
    steps += 1;
  }
  return steps;
}

function longestCollatz() {
  let longestSteps = -1;
  let largestStart = -1;

  for (let i = 1; i < 1000000; i += 1) {
    const steps = calculateCollatzSteps(i);
    if (steps > longestSteps) {
      longestSteps = steps;
      largestStart = i;
    }
  }
  return largestStart;
}

// START OF NON SOLUTION CODE
window.jQuery(($) => {
  const id = '#14';
  const description = 'The following iterative sequence is defined for the set of positive integers:\n' +
    '\n' +
    'n → n/2 (n is even)\n' +
    'n → 3n + 1 (n is odd)\n' +
    '\n' +
    'Using the rule above and starting with 13, we generate the following sequence:\n' +
    '\n' +
    '13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1\n' +
    'It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.\n' +
    '\n' +
    'Which starting number, under one million, produces the longest chain?\n' +
    '\n';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('longestCollatz');
    const result = longestCollatz();
    console.timeEnd('longestCollatz');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

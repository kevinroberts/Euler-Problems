function sumOfMultiplesBelow(limit) {
  var sum = 0;
  _.each(_.range(0, limit), function(i) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  });
  return sum;
}

$(function() {
  let description = 'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\n' +
    '\n' +
    'Find the sum of all the multiples of 3 or 5 below 1000.';

  $('#01').find('div').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $('#01').find('button').click(function() {
    var result = sumOfMultiplesBelow(1000);
    $('#01').find('textarea').html("Sum of 3s and 5s for 1000: " + result);
  });
});
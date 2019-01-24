function namesScores(cb) {
  // use server side processing to obtain name score
  $.getJSON('/namesScore', (data) => {
    cb(data.score);
  });
}

// START OF NON SOLUTION CODE
window.jQuery(function($) {
  const id = '#22';
  const description = 'Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.\n' +
    '\n' +
    'For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.\n' +
    '\n' +
    'What is the total of all the name scores in the file?';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));
  $(id).find('button').click(() => {
    namesScores((result) => {
      $(id).find('textarea').html(result);
    });
  });
});
// END NON-SOLUTION CODE

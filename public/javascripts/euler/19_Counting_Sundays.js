function ordinalSuffixOf(i) {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return i + 'st';
  }
  if (j === 2 && k !== 12) {
    return i + 'nd';
  }
  if (j === 3 && k !== 13) {
    return i + 'rd';
  }
  return i + 'th';
}

function countSundays() {
  // calc total number of days between 1/1/1901 -> 12/31/2000
  const one = new Date(1901, 1, 1, 0, 0, 0, 0);
  const two = new Date(2000, 12, 31, 0, 0, 0, 0);
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  // calculate based on millis diff between first and second date / one day in millis
  const totalDays = Math.round(Math.abs((two.getTime() - one.getTime()) / (oneDay)));
  // ==> 36524 days
  // Maps of Days and Months just for testing purposes
  const dayNumArray = [
    [1, 'Monday'], [2, 'Tuesday'], [3, 'Wednesday'], [4, 'Thursday'], [5, 'Friday'], [6, 'Saturday'], [7, 'Sunday'],
  ];
  const monthNumArray = [
    [1, 'January'], [2, 'February'], [3, 'March'], [4, 'April'],
    [5, 'May'], [6, 'June'], [7, 'July'], [8, 'August'], [9, 'September'], [10, 'October'], [11, 'Nov'], [12, 'Dec'],
  ];
  const dayNumMap = new Map(dayNumArray);
  const monthNumMap = new Map(monthNumArray);
  let totalSundays = 0;
  let currentMonth = 1;
  let currentYear = 1901;
  let daysElapsedInYear = 0;
  let daysElapsedInMonth = 0;
  let dayOfWeekIndex = 1;
  let isLeapYear = false;

  for (let i = 0; i <= totalDays; i += 1) {
    // first day is a tuesday
    daysElapsedInYear += 1;
    dayOfWeekIndex += 1;
    daysElapsedInMonth += 1;
    // if current day is a sunday
    if (dayOfWeekIndex === 7) {
      // if this was the first of the month
      if (daysElapsedInMonth === 1) {
        totalSundays += 1;
        // this is a sunday on the first of the month:
        console.log(`${ordinalSuffixOf(totalSundays)} First sunday of month found: `);
        console.log(`Date currently: ${dayNumMap.get(dayOfWeekIndex)}, ${daysElapsedInMonth} ${monthNumMap.get(currentMonth)}, ${currentYear}`);
      }
      dayOfWeekIndex = 0;
    }
    // check for ends of various months
    if (daysElapsedInMonth === 28 && currentMonth === 2 && !isLeapYear) {
      // 28 days in Feb
      currentMonth += 1;
      daysElapsedInMonth = 0;
    }
    if (daysElapsedInMonth === 29 && currentMonth === 2 && isLeapYear) {
      // 29 days in Feb only on leap years
      currentMonth += 1;
      daysElapsedInMonth = 0;
    }
    if (daysElapsedInMonth === 30
      && (currentMonth === 9 || currentMonth === 4 || currentMonth === 6 || currentMonth === 11)) {
      // 30 Days in Sep, April, June, November
      currentMonth += 1;
      daysElapsedInMonth = 0;
    }
    if (daysElapsedInMonth === 31
      && (currentMonth === 1 || currentMonth === 3 || currentMonth === 5
        || currentMonth === 7 || currentMonth === 8 || currentMonth === 10
        || currentMonth === 12)) {
      // 31 Days in Jan, March, May, Jul, Aug, Nov, Dec
      currentMonth += 1;
      daysElapsedInMonth = 0;
    }
    if (daysElapsedInYear === 365 && !isLeapYear) {
      // console.log('year is now:', currentYear);
      currentYear += 1;
      daysElapsedInYear = 0;
      currentMonth = 1;
      daysElapsedInMonth = 0;
      isLeapYear = (currentYear % 4 === 0 || currentYear === 2000);
    }
    if (daysElapsedInYear === 366 && isLeapYear) {
      // console.log('year is now:', currentYear);
      currentYear += 1;
      daysElapsedInYear = 0;
      daysElapsedInMonth = 0;
      currentMonth = 1;
      isLeapYear = (currentYear % 4 === 0 || currentYear === 2000);
    }
  }
  return totalSundays;
}


// START OF NON SOLUTION CODE
window.jQuery(function ($) {
  const id = '#19';
  const description = 'You are given the following information, but you may prefer to do some research for yourself.\n' +
    '<ul>' +
    '<li>1 Jan 1900 was a Monday.</li>' +
    '<li>Thirty days has September,\n' +
    'April, June and November.\n' +
    'All the rest have thirty-one,\n' +
    'Saving February alone,\n' +
    'Which has twenty-eight, rain or shine.\n' +
    'And on leap years, twenty-nine.</li>' +
    '<li>A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.</li></ul>' +
    'How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?';

  $(id).find('div.description').html(description.replace(/(?:\r\n|\r|\n)/g, '<br>'));

  $(id).find('button').click(function () {
    console.time('countSundays');
    const result = countSundays();
    console.timeEnd('countSundays');
    $(id).find('textarea').html(result);
  });
});
// END NON-SOLUTION CODE

/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  if (!data || !data.asteroids || data.asteroids.length === 0) {
    return null;
  }

  var yearCounts = {};

  for (var i = 0; i < data.asteroids.length; i++) {
    var year = data.asteroids[i].discoveryYear;
    if (yearCounts[year]) {
      yearCounts[year]++;
    } else {
      yearCounts[year] = 1;
    }
  }

  var maxYear = null;
  var maxCount = 0;

  for (var year in yearCounts) {
    if (yearCounts[year] > maxCount) {
      maxYear = year;
      maxCount = yearCounts[year];
    }
  }

  return parseInt(maxYear, 10);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

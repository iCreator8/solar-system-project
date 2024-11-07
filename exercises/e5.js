import { data } from "../data/data";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
  // Your code goes here...
  number === 7;
   var massValueGreaterOrEqualToSeven = data.planets
.filter(function(findMassValue) {
  return findMassValue.mass.massValue >= number;
})
.map(function(planetName) {
  return planetName.name;
});
return massValueGreaterOrEqualToSeven;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

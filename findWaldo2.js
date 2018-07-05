function findWaldo(arr, found) {
  arr.forEach(function(person, i){
    if (person === "Waldo") {
      found(i);
    }
  })
}

function actionWhenFound(index) {
  console.log("Found him at index" + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// Exercise - Callback Arguments
// Did you know that we can pass results via callback functions?

// Modify the callback function in the previous example so that logs the index of the array where Waldo is found, ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)

// Once you have this working, remember to commit your changes using Git. A good commit message should be concise and descriptive of the changes you have made. An example commit message: Print the index of Waldo when found.

// Exercise - Array forEach
// A very common implementation of callback functions is with forEach which uses callbacks to allow us to easily iterate through the elements of an array.

// Read about iterating through elements of an array using JavaScript's Array.prototype.forEach() method.

// Refactor the function findWaldo to use the forEach() method instead of a for loop.

// Submit Your Work
// Once you have finished refactoring, then commit your changes to Git with an appropriate commit message.
const removeFromArray = function(numArray, ...numbers) {
  // takes the array, and counts through every value and checks if the number in the second argument is in the array
  // need to chek argument count, so use argument.legnth != 2 to cancel out
  let args = [...numbers];
  return args;
  for (let i = 0; i < numArray.length(); i++) {
    if (delNum == numArray[i]) {
      delete numArray[i];
    }
  }
};

// Do not edit below this line
module.exports = removeFromArray;

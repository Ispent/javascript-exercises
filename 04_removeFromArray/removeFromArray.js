const removeFromArray = function(numArray, ...numbers) {
  // takes the array, and counts through every value and checks if the number in the second argument is in the array
  // need to chek argument count, so use argument.legnth != 2 to cancel out

  for (let i = 0; i < numArray.length; i++) {
    for (let j = 0; j < numbers.length; j++){
    if (numArray[i] === numbers[j]) {
      numArray.splice(i, 1)
      i--;
    }
    }
  }
  return numArray;
};

// Do not edit below this line
module.exports = removeFromArray;

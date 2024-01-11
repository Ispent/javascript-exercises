const repeatString = function(string, num) {
/* takes two variables, a string with what you want to repeat
and the number of times you want the word to be repeated*/
// use 'string' and 'num'

// first, find the two varaibles from the function call and assign them
// use num as the number of times to loop the code, and concatenate the string along with each other over and over again 
  let reapeatedStr = ''
  if (num < 0) {
    return 'ERROR'
  }

  for (let i = 0; i < num; i++) {
    reapeatedStr += string;
  }
  return reapeatedStr;
};

// Do not edit below this line
module.exports = repeatString;

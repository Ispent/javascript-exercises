const sumAll = function(val1, val2) {
  if (typeof val1 !== 'number' || typeof val2 !== 'number') return 'ERROR'
  if (val1 < 0 || val2 < 0) return 'ERROR'
  
  let sum = (val1 > val2) ? val1 : val2;
  for (let i = 0; i <= (Math.abs(val1 - val2)); i++) {
    sum += i;
  }
  return sum;
  
};

// Do not edit below this line
module.exports = sumAll;

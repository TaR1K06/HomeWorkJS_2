function ArrayMinValue (Numbers) {
  let min = Numbers[0];
  for (const number of Numbers) {
    if (number < min) {
      min = number
    }
  }
  return min;
}

console.log(ArrayMinValue([11, 22, 31, -133, 'Hi guys']))

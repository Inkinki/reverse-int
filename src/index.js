module.exports = function reverse (n) {
  numAbs = Math.abs(n);
  const numToArray =  Array.from(String(numAbs), Number);
  const reverseArray = numToArray.reverse();
  const reverseNumber = Number(reverseArray.join(''));
  return reverseNumber;
}




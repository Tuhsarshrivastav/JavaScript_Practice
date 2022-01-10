// Spread & Rest Operator

// Example Rest in array
function addNumbers(a, b, c, ...others) {
  console.log(others); // rest operator
  return a + b + c;
}
const result = addNumbers(1, 2, 3, 4, 5);
console.log(result);

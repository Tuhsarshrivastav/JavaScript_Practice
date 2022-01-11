//Closures example

// var sum = function (a) {
//   var c = 5;
//   return function (b) {
//     return a + b + c;
//   };
// };
// const store = sum(2);
// console.log(store(3));

var sum = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree() {
      return a + b + c;
    },
  };
};
var store = sum(1, 2, 3);

console.log(store.getSumThree());

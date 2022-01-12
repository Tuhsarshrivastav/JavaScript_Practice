// Call, apply & Bind
let userDetails = {
  name: "Tushar shrivastav",
  age: 23,
  Designation: "Full Stack Engineer",
};

let printDetails = function () {
  console.log(this);
};
printDetails.call(userDetails);

let userDetails1 = {
  name: "sushar",
  age: 23,
  Designation: "backend Engineer",
};
printDetails.call(userDetails1);

let newFuc = printDetails.bind(userDetails);
console.log(newFuc());

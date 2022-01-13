const obj = {
  name: "tushar",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
};
console.log(obj);

const obj2 = {
  roll: 1,
  name: "sushar",
  __proto__: obj,
};
console.log(obj2.getRoll());

const obj3 = {
  class: "Mca",
  __proto__: obj2,
};
console.log(obj3.getName());

const array = ["tushar"];
console.log(array);

Array.prototype.show = function () {
  return this;
};
const cities = ["jabalpur"];
console.log(cities.show());

Array.prototype.ConvertInotObject = function () {
  let newObj = {};
  this.forEach((element) => {
    newObj[element] = element;
  });
  return newObj;
};
console.log(cities.ConvertInotObject());

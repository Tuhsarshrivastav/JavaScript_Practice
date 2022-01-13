// map,set,weakset,weakmap
// "use strict";

// set
//  contains only unique values
//object construtor
// let myArray = [1, 2, 3, 4, 4];
// let obj = new Set(myArray);
// obj.add(5);
// console.log(obj);

// map => key -> values
// let myMap = new Map([["a1", "tushar"]]);
// myMap.get("a1");
// console.log(myMap);
// for (let [key, value] of myMap) {
//   console.log(key, value);
// }

// weakset
// only store object it can't  be interted
// let ws = new WeakSet();
// var obj = { name: "tushar" };
// ws.add(obj);
// console.log(ws);

// weakset
// only store object it can't be interted
let wm = new WeakMap();
var obj = { name: "tushar" };
wm.set(obj);
console.log(wm);

const companies = [
  { name: "Google", category: "Product Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product Based", start: 1992, end: 1992 },
  { name: "Pytem", category: "Product Based", start: 1999, end: 2007 },
  { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
  { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
];

const ages = [33, 22, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// foreach
// companies.forEach((companie) => console.log(companie));

// filter
// const finalage = ages.filter(age => age > 20);
// console.log(finalage);

// filter 2nd example
// const sbc = companies.filter((compney) => compney.category == "Service Based");
// console.log(sbc);

// map function
// companies.map((compney) => console.log(compney.name));

// sorting
// const res = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
// console.log(res);

// sorting 2nd example
// const sort = ages.sort((a, b) => b - a);
// console.log(sort);

//reduce
const res = ages.reduce((total, age) => total + age, 0);
console.log(res);

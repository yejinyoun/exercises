"use strict";

/* const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

const person2 = person1;

person2.firstName = "other Peter";

console.log(person1.firstName);
console.log(person2); */

// person1 and person2 both variables point to the same object
// let person2, person3 ..etc are another name for the same object

let person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

let person2 = {
  firstName: "other Peter",
  age: 28,
  student: false,
};

let person3 = person1;

person3.firstName = "changed";

person3 = person2;

person2.firstName = "also changed";

person1 = person3;

console.log(person1);
console.log(person2);
console.log(person3);

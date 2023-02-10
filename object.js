"use strict";

const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

console.log(person1.lastName);

person1.lastName = "Lind";
console.log(person1.lastName);

person1.lastName = undefined;

console.log(person1.lastName);
console.log(person1.middleName);
console.log(person1);

delete person1.lastName;

console.log(person1);

// delete removes property completely
// but setting it to = undefined, property remains but with value of undefined

person1.age++;

console.log(person1.age);
console.log(person1);

const person2 = {
  firstName: "Jin",
  age: 22,
  student: true,
};

console.log(person2);

// person1 = person2; -> does not work

person1.firstName = person2.firstName;
// this works, in this way u can change the value of a property

console.log(person1);

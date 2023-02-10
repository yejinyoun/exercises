"use strict";

/* const person1 = {
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
 */

// exercise1

const person1 = {
  firstName: "Peter",
  age: 43,
  student: false,
};

console.log(person1.lastName);

person1.lastName = "Tolstrup";
console.log(person1.lastName);

person1.lastName = undefined;
console.log(person1.lastName);
console.log("person1.Middlename:", person1.middleName);

delete person1.lastName;
// setting it to undefined still keeps the property and value is undefined,
// but if you delete it, it removes the property

person1.age++;
console.log(person1.age);

const person2 = person1;
// Reference : the object is the same, but the variables are different!
// object values are passed by references
// two variables are referring - pointing - to the same object
// person1 is a reference to student2

person2.firstName = "Bob";

console.log(person1);

// person1 = person2; -> doesn't work bc person1 is declared with const

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

if (student1 == student2) {
  console.log("same");
} else {
  console.log("not same");
}
// not same

"use strict";

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

//not same

if (student1 == student2) {
  // this means comparing if variable A and B are pointing at exact same object
  console.log("They are the same!");
} else {
  console.log("No they are not...");
}

// even though the object has same properties, each variable pointing at different objects

student1.firstName = "Potty";

console.log(student1);
console.log(student2);

// only the student1.firstName changes bc they aren't pointing at the same object

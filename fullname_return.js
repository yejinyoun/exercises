"use strict";

const firstNameVar = "Harry";
const middleNameVar = "James";
const lastNameVar = "Potter";
// putting return value in a variable
const fullFullName = fullName(lastNameVar, firstNameVar, middleNameVar);

console.log(fullFullName);

//function of making a full name
function fullName(lastName, firstName, middleName) {
  if (middleName == undefined) {
    let newString = `${firstName} ${lastName}`;
    return newString;
  } else {
    let newString = `${firstName} ${middleName} ${lastName}`;
    return newString;
  }
}

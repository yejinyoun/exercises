"use strict";

/* const firstNameVar = "Harry";
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
} */

//

const myName = "Yejin Jini Youn";

//console.log(getNameParts(myName));

console.log(getNameParts(myName));

function getNameParts(fullName) {
  // if the fullName inclues more than 1 spacebar
  if (fullName.includes(" ", fullName.indexOf(" ") + 1) == true) {
    let firstName = fullName.substring(0, fullName.indexOf(" "));

    let middleName = fullName.substring(
      fullName.indexOf(" ") + 1,
      fullName.indexOf(" ", fullName.indexOf(" ") + 1)
    );

    let lastName = fullName.substring(fullName.indexOf(" ", fullName.indexOf(" ") + 1) + 1);

    return getFullName(lastName, firstName, middleName);
  } else {
    //if it only includes 1 or less spacebar
    let firstName = fullName.substring(0, fullName.indexOf(" "));

    let lastName = fullName.substring(fullName.indexOf(" ") + 1);

    let middleName = undefined;

    return getFullName(lastName, firstName, middleName);
  }
}

function getFullName(lastName, firstName, middleName) {
  if (middleName !== undefined) {
    let entireName = `${firstName} ${middleName} ${lastName}`;

    return entireName;
  } else {
    let entireName = `${firstName} ${lastName}`;

    return entireName;
  }
}

// if i return from getNameParts it won't go to getFullName function and return,
// getNameParts function itself doesn't have any return value
// instead we could set return value connected to getFullName function
// so return value of getNameParts will be return value of getFullName;

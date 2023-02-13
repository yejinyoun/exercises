"use strict";

console.log("hihi");

// function if there's no parameter of middleName, ignore it

/* 

//1

function fullName(lastName, firstName, middleName) {
  if (middleName !== undefined) {
    let newString = `${firstName} ${middleName} ${lastName}`;

    console.log(newString);
  } else {
    let newString = `${firstName} ${lastName}`;
    console.log(newString);
  }
}

fullName("Potter", "Harry", "James");

//2

function fullName(lastName, firstName, middleName) {
  if (middleName == undefined) {
    let newString = `${firstName} ${lastName}`;
    console.log(newString);
  } else {
    let newString = `${firstName} ${middleName} ${lastName}`;
    console.log(newString);
  }
}

fullName("Potter", "Harry", "James");

 */

// connected with getNameParts function
// (be careful !!) don't name the function and parameter same;

getNameParts("Harry Potter");

function getNameParts(fullName) {
  // if the fullName inclues more than 1 spacebar
  if (fullName.includes(" ", fullName.indexOf(" ") + 1) == true) {
    let firstName = fullName.substring(0, fullName.indexOf(" "));

    console.log(`_${firstName}_`);

    let middleName = fullName.substring(
      fullName.indexOf(" ") + 1,
      fullName.indexOf(" ", fullName.indexOf(" ") + 1)
    );
    console.log(`_${middleName}_`);

    let lastName = fullName.substring(fullName.indexOf(" ", fullName.indexOf(" ") + 1) + 1);

    console.log(`_${lastName}_`);

    getFullName(lastName, firstName, middleName);
  } else {
    //if it only includes 1 or less spacebar
    let firstName = fullName.substring(0, fullName.indexOf(" "));
    let lastName = fullName.substring(fullName.indexOf(" ") + 1);
    let middleName = undefined;

    console.log(`_${firstName}_`);
    console.log(`_${lastName}_`);
    console.log(`_${middleName}_`);

    getFullName(lastName, firstName, middleName);
  }
}

function getFullName(lastName, firstName, middleName) {
  if (middleName !== undefined) {
    let entireName = `${firstName} ${middleName} ${lastName}`;
    console.log(entireName);
  } else {
    let entireName = `${firstName} ${lastName}`;
    console.log(entireName);
  }
}

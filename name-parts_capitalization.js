"use strict";

// separate fullname (parameter) into firstName, middleName, lastName
// capitalize each
// return an object

const fullName = "Harry";

console.log(getNameParts(fullName));

function getNameParts(fullname) {
  // case 1. firstname + middlename + lastname
  if (fullname.split(" ").length >= 3) {
    let firstName = fullname.split(" ")[0];
    let middleName = fullname
      .split(" ")
      .slice(1, fullname.split(" ").length - 1) //returns new array (startpoint,endpoint)
      .join(" "); //convert into string, using " " in between elements
    let lastName = fullname.split(" ")[fullname.split(" ").length - 1];

    return {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
    };
  }
  // case 2. firstname + lastname (no middle name)
  else if (fullname.split(" ").length == 2) {
    let firstName = fullname.split(" ")[0];
    let lastName = fullname.split(" ")[1];
    let middleName = undefined;

    return {
      firstName: firstName,
      lastName: lastName,
      middleName: undefined,
    };
  } else {
    let firstName = fullname;
    return {
      firstName: firstName,
      middleName: undefined,
      lastName: undefined,
    };
  }
}

function capitalize() {}

function fullnameToArray() {}

"use strict";

// separate fullname (parameter) into firstName, middleName, lastName
// capitalize each
// return an object

const fullName = "Harry James Potter";

getNameParts(fullName);

function getNameParts(fullname) {
  // case 1. firstname + middlename + lastname
  if (fullname.split(" ").length >= 3) {
    let firstName = fullname.split(" ")[0];
    let middleName = fullname
      .split(" ")
      .slice(1, fullname.split(" ").length - 1) //returns new array (startpoint,endpoint)
      .join(" "); //convert into string, using " " in between elements
    let lastName = fullname.split(" ")[fullname.split(" ").length - 1];
    console.log(lastName);
    console.log(`_${middleName}_`);
    console.log(typeof middleName);
  }
  // else
}

function capitalize() {}

function fullnameToArray() {}

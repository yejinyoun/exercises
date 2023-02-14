"use strict";

// separate fullname (parameter) into firstName, middleName, lastName
// capitalize each
// return an object

const fullName = "harry";

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

    return capitalize({
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
    });
  }
  // case 2. firstname + lastname (no middle name)
  else if (fullname.split(" ").length == 2) {
    let firstName = fullname.split(" ")[0];
    let lastName = fullname.split(" ")[1];

    return capitalize({
      firstName: firstName,
      lastName: lastName,
    });
  } else {
    let firstName = fullname;
    return capitalize({
      firstName: firstName,
    });
  }
}

function capitalize(str) {
  // when there are more than 1 middle name, 2nd or more middle name doesn't capitalize tho

  //
  if (str.middleName !== undefined) {
    let capFirstName =
      str.firstName.substring(0, 1).toUpperCase() + str.firstName.substring(1).toLowerCase();
    let capMiddleName =
      str.middleName.substring(0, 1).toUpperCase() + str.middleName.substring(1).toLowerCase();
    let capLastName =
      str.lastName.substring(0, 1).toUpperCase() + str.lastName.substring(1).toLowerCase();

    return {
      firstName: capFirstName,
      middleName: capMiddleName,
      lastName: capLastName,
    };
  } else if (str.lastName !== undefined) {
    let capFirstName =
      str.firstName.substring(0, 1).toUpperCase() + str.firstName.substring(1).toLowerCase();
    let capLastName =
      str.lastName.substring(0, 1).toUpperCase() + str.lastName.substring(1).toLowerCase();

    return {
      firstName: capFirstName,
      middleName: undefined,
      lastName: capLastName,
    };
  } else {
    let capFirstName =
      str.firstName.substring(0, 1).toUpperCase() + str.firstName.substring(1).toLowerCase();
    return {
      firstName: capFirstName,
      middleName: undefined,
      lastName: undefined,
    };
  }
}

//problem : when middleName or lastName is undefined, it capitalize function doesn't work
// bc it use string method "substring", so I had to put if else statement to separate
// 1. when it has all first,middle,last name 2. only first,last name, 3. only first name
// at the end return the object and not existing property value to undefined
// there is maybe a simpler way?

"use strict";

//make a function that converts "rbg(255, 99, 71)"" to r : "255", so on
//steps parameter - cssColor (string)
// get the cssColor parameter and extract only the number part
// turn it into an array ["num1", "num2", "num3"]
// set each variable r,g,b and value is - array item(string), and trim, turn into number

/* cssToRGB("rbg(255, 99, 71)");

function cssToRGB(cssColor) {
  let rgb = cssColor.slice(4, cssColor.indexOf(")"));
  let r = parseInt(rgb.split(",")[0].trim());
  let g = parseInt(rgb.split(",")[1].trim());
  let b = parseInt(rgb.split(",")[2].trim());

  console.log(`_${r}_`);
  console.log(typeof r);

  console.log(`_${g}_`);
  console.log(typeof g);

  console.log(`_${b}_`);
  console.log(typeof b);
} */

//hexToRGB
//#ff6347 - digit 1-2 = red, 3-4 = green, 5-6 = blue

/* hexToRGB("#ff6347");

function hexToRGB(hexColor) {
  let hex = hexColor.substring(1); // to remove # on the front

  let r = parseInt(hex.substring(0, 2), 16); //convert first 2digit into 16 radix number
  let g = parseInt(hex.substring(2, 4), 16); //convert 3-4digit into 16 radix number
  let b = parseInt(hex.substring(4, 6), 16); //convert last 2digit into 16 radix number

  console.log(`_${r}_`);
  console.log(`_${g}_`);
  console.log(`_${b}_`);
} */

// rgbToHEX
// take each r,g,b value(number) as parameter
// hex code is in a string "#xxxxxx"
// convert each number (r,g,b) to 16 radix number(in a string)
// if the converted value is less than 2digit, - (1digit) so add 0 in front
// add all together and put # on the front

/* rgbToHEX(9, 0, 37);

function rgbToHEX(r, g, b) {
  let red = r.toString(16);
  if (red.length < 2) {
    red = "0" + red;
  }

  let green = g.toString(16);
  if (green.length < 2) {
    green = "0" + green;
  }

  let blue = b.toString(16);
  if (blue.length < 2) {
    blue = "0" + blue;
  }

  let hex = "#" + red + green + blue;

  console.log(hex);
  console.log(typeof hex);
} */

// with return
// instead of let hex = value inside the function,
// defined hex outside and the value is function return

let rgb = {
  r: 9,
  g: 0,
  b: 37,
};

let hex = rgbToHEX(rgb);

console.log(`_${hex}_`);
console.log(typeof hex);

function rgbToHEX(input) {
  let red = input.r.toString(16);
  if (red.length < 2) {
    red = "0" + red;
  }

  let green = input.g.toString(16);
  if (green.length < 2) {
    green = "0" + green;
  }

  let blue = input.b.toString(16);
  if (blue.length < 2) {
    blue = "0" + blue;
  }

  return "#" + red + green + blue;
}

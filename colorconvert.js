"use strict";
console.log("hihi");

//make a function that converts "rbg(255, 99, 71)"" to r : "255", so on
//steps parameter - cssColor (string)
// get the cssColor parameter and extract only the number part
// turn it into an array ["num1", "num2", "num3"]
// set each variable r,g,b and value is - array item(string), and trim, turn into number

cssToRGB("rbg(255, 99, 71)");

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
}

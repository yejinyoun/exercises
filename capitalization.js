"use strict";

/* Use the 3caPitalization exercise as a basis for this exercise. Modify the code,

so that only the first letter is upper case, and the rest is lower case.

Make sure that it can take names of any length! */

let name = "adkjklaevjkvjaeiCDFKDKSDALVJLVJEKAWVJ";

let newname = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();

console.log(newname);

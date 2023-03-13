"use-strict";

const myName = "lISe";
console.log(myName)

const capFirst = myName.substring(0,1).toUpperCase();
console.log(capFirst);

const smallBefore = myName.substring(1).toLowerCase();
console.log(smallBefore);

const newName = `${capFirst}${smallBefore}`
console.log(newName);
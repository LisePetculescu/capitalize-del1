"use-strict";

// const myName = "lISe";
// console.log(myName);

function capitalized(myName) {
  const capFirst = myName.substring(0, 1).toUpperCase();
  console.log(capFirst);

  const smallAfter = myName.substring(1).toLowerCase();
  console.log(smallAfter);

  const newName = `${capFirst}${smallAfter}`;
  console.log(newName);

  return newName;
}

capitalized("lISe");

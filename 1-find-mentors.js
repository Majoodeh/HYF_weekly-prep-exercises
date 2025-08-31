import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */

const possibleMentorsForModule = (moduleName) => {
  const modulesArray = [];
  for (let i of mentors) {
    console.log(i);
    for (let x = 0; x < i["canTeach"].length; x++) {
      if (i.canTeach[x] === moduleName) {
        modulesArray.push(i["name"]);
      } else {
        console.log("There are no modules");
      }
    }
  }

  return modulesArray;
};

console.log(possibleMentorsForModule("javascript"));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const arrayIndex = Math.floor(
    Math.random() * possibleMentorsForModule(moduleName).length
  );
  return possibleMentorsForModule(moduleName)[arrayIndex];
};
// You can uncomment out this line to try your function
// console.log(findMentorForModule('javascript'));

console.log(findMentorForModule("javascript"));

import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */

const getPeopleOfClass = (className) => {
  const currentlyParticipating = [];
  for (let aClass of classes) {
    console.log(aClass);
    if (aClass.name === className) {
      if (aClass.active === true) {
        for (let student of students) {
          if (student.class === className) {
            currentlyParticipating.push({
              name: student.name,
              role: "student",
            });
          }
        }

        for (let mentor of mentors) {
          if (
            mentor.nowTeaching &&
            aClass.currentModule === mentor.nowTeaching
          ) {
            currentlyParticipating.push({ name: mentor.name, role: "mentor" });
          }
        }
      }
    }
  }
  return currentlyParticipating;
};

console.log(getPeopleOfClass("class34"));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */

const getActiveClasses = () => {
  const classesObj = {};

  for (const class_ of classes) {
    if (class_.active) {
      const studentsArray = [];
      const mentorsArray = [];

      for (const student of students) {
        if (student.class === class_.name) {
          studentsArray.push({ name: student.name, role: "student" });
        }
      }

      for (const mentor of mentors) {
        if (mentor.nowTeaching === class_.currentModule) {
          mentorsArray.push({ name: mentor.name, role: "mentor" });
        }
      }
      classesObj[class_.name] = [...studentsArray, ...mentorsArray];
    }
  }

  return classesObj;
};

console.log(getActiveClasses());
// You can uncomment out this line to try your function
// console.log(getActiveClasses());

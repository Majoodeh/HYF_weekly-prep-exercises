/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments (in the order listed): 
     * the array with the options for the number of children, 
     * the array with the options for the partner's name, 
     * the array with the options for the geographic location and 
     * the array with the options for the job title.
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
 const numKids = [ 0, 1, 2, 3, 4] ; 


  const partnerNames = [
    "Sven",
    "Fleur",
    "Jeroen",
    "Marieke",
    "Daan"
  ];

  const locations = [
    "Amsterdam",
    "Rotterdam",
    "Budapest",
    "Utrecht",
    "Eindhoven"
  ];

  const jobTitles = [
    "Software Engineer",
    "Teacher",
    "Designer",
    "Doctor",
    "Chef"
  ];
 
function selectRandomly(arrayName) {
  const index = Math.floor(Math.random()*5);   index 
return arrayName[index];

};


       
const arraysList = [numKids, partnerNames, locations, jobTitles]
for (const i of arraysList) {
let selectedItem = selectRandomly(i);   i
 
let newArray = [];
newArray.push(selectedItem);   
return newArray                     
    newArray ;            
} 


export function tellFortune(array_1, array_2, array_3, array_4) {
const arraysList = [array_1, array_2, array_3, array_4]; 
let Arry2 =[]
for (const i in arraysList) {
selectRandomly(i); 
Arry2.push(i);
return Arry2;
}; 
return `You will be a ${Arry2[0]} in ${Arry2[1]}, 
    married to ${Arry2[2]} with ${Arry2[3]} kids.`;
}

  console.log(tellFortune(jobTitles, locations, partnerNames, numKids)); 


function main() {
  const numKids = [ 0, 1, 2, 3, 4] ; 


  const partnerNames = [
    "Sven",
    "Fleur",
    "Jeroen",
    "Marieke",
    "Daan"
  ];

  const locations = [
    "Amsterdam",
    "Rotterdam",
    "Budapest",
    "Utrecht",
    "Eindhoven"
  ];

  const jobTitles = [
    "Software Engineer",
    "Teacher",
    "Designer",
    "Doctor",
    "Chef"
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}

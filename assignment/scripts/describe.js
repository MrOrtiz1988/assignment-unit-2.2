// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called name with the value 'Dane' as a string,
// then we use an if statement to check is name if strictly equals to 'Mary',
// if it is then the console will log out the string 'Hi, Mary' if it is not then the console 
//will log ot the string 'How do you do', which in this case name has 'Dane' for a value therefore the string 'How do you do' will ba the result.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Here we declare a variable called secret without a value assuming the assignment will come later
// we also have another variable called code with the number value of 123, then we have a conditional statement to check if code is strictly equals to
// the number 123. if it is (which it is) that value the variable secret will have a value with the string 'super' assigned to it
//and the value for the variable code will update itself by multiplying itself by 2 so now code has the numeric value of 246.
//now we have another conditional statement checking if the variable called code is greater than 250 (which is not) and if it is
//then the variable called secret will be updated to the string value 'duper'. then finally we console log the variable secret which will then return the string 'super'. 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// the isStudent variable is declared with the boolean value of true, another variable called age is declared with the numeric value of 34
// and a third variable called zip is declared with the value of 55407. now we have a few conditionals, the first one checks if isStudent is
// true AND zip number greater than 80000 the console will log the string 'you're a studenton the west coast!', even though isStudent is true zip is not greater than
//80000 therefore this block of code gets skipped to the next conditional. if isStudent is false OR age is less than 30 then tho console will log 
//the string 'what are your hobbies?', you only need one of these conditionals to be true but since both are false this code block also gets skipped and go to the next one.
//next we are only checking if isStudent is true and if it is the the console log will log the string 'Welcome to prime' and in this case it is true so this is
//the code that will execute and stopping there. if none of these conditionals met requirements then the last else statement would have ran as a default.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
FIX - let colorOne = 'red'; - colorOne should be blue as per instructions.
FIX - let colorTwo = 'blue'; - colorTwo should be red as per instructions.
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

FIX - if (temp > 39 || time >= 4) { - instructions says if temp is higher than 39 and if time is greater or equal to  4 and code has an OR operater, it should look like this:
  if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

FIX - if(minAge <= age) { - instructions states if age is greater than or equals to minAge so it should look like this:
  if(age >= minAge) {
 FIX - console.log('no entry');
} else {
 FIX - console.log('enter'); - both console logs should be switched in order to get the desired outcome. code can be re-written like this:
}

let age = 21;
const minAge = 21;

if(age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}


*/


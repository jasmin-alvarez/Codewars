// Quarter of the year
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
}

// //Grasshopper - Grade book//
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  var score = (s1 + s2 + s3) / 3;
  if (score >= 90 && score <= 100) {
      return 'A';
  } else if (score >= 80 ) {
    return 'B';
  } else if (score >= 70 ) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else{
    return 'F';
  }
}

// using if & else statements 

//Difference of Volumes of Cuboids
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.

function find_difference([a,b,c], [d,e,f]) {
return Math.abs(a*b*c-d*e*f)
}

//get character from ASCII Value
// Write a function which takes a number and returns the corresponding ASCII char for that value.
// Example:
// get_char(65) # => 'A'
function getChar(c){
  return String.fromCharCode(c)
} getChar(65);


//Counting sheep...
//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17

function countSheeps(arrayOfSheep) {
  let counter = 0 
  for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) counter += 1
  }
  return counter
}







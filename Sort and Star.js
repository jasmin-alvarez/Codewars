
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.







// PREP
// Params : array of string ["bitcoin","ice","fish"]
// Return : first value of the string 
//  Example : ["bitcoin","ice"] => "b***i***t***c***o***i***n"
//Pesudo : functions called two sort 
// sort method () target index of the  array ==first string of the array "bitcoin"
// split("")
// join ("***")
function twoSort(s) {
 const sort = s.sort() 
 
 return sort[0].split("").join("***")
}
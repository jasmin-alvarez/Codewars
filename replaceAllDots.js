// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task


var replaceDots = function(str) {

  return str.replace(/[.]/g, '-'); //the global regex expression, this is because 
  // it should replace the dots with dashes for all strings
}
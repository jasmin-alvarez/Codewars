// Moving Zeros To The End


// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
  var j = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      arr.splice (i, 1); // find out where the position 0 and with splice () method to delete 0
      j += 1;
             i = i - 1; // calculates the total number of deleted 0
    }
  }
     for (var k = 0; k <j; k ++) {// add array deleted 0;
    arr.push(0);
  }
  return arr; }
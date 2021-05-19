
// Fans of The Wire will appreciate this one. For those that haven't seen the show, the Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers: "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."

// Here's a keypad for visualization.

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// Detective, we're hot on their trail! We have a big pile of encoded messages here to use as evidence, but it would take way too long to decode by hand. Could you write a program to do this for us?

// Write a funciton called decode(). Given an encoded string, return the actual phone number in string form. Don't worry about input validation, parenthesies, or hyphens.




function decode(string) {
  var s='';
  for (var i=0; i<string.length; ++i)
  {
    if (string[i]=='0') s+=5; 
    if (string[i]=='1') s+=9; 
    if (string[i]=='2') s+=8; 
    if (string[i]=='3') s+=7; 
    if (string[i]=='4') s+=6; 
    if (string[i]=='5') s+=0; 
    if (string[i]=='6') s+=4; 
    if (string[i]=='7') s+=3; 
    if (string[i]=='8') s+=2; 
    if (string[i]=='9') s+=1; 
  }
  return s;
}

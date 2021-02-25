// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycleLength)
{
  let month = today.getMonth()- last.getMonth();
  if(month){
    month = month * new Date(today.getYear(), today.getMonth(), 0).getDate()
  }
  return today.getDate() - last.getDate() + month > cycleLength ? true : false ;
}
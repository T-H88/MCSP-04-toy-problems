// Write a function that takes in a string of the time and returns the time in military format.
//Ex: militaryTime('7:47pm') returns '19:47'

 //if hour is 0 then change to 12, if hour is 1200-2300 subtract 12.

function militaryTime(timeStr) {
  const regularTime = '12:00 p.m'
    let amPm = time.slice(-3)
    let mil = ''

    if (amPm === 'a.m') {
      let arr = time.slice(0, -4)
}
};

//Stuck right here. not sure how im going to divide the string up for time purposes. 
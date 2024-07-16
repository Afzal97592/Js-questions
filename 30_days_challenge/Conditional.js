// write a program that use a switch case to determine the day of the week based on number (1-7) and log the day name to the console.

function getDayName(day) {
  switch (day) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";

    default:
      return "Please enter a number between 1 and 7.";
  }
}

// console.log("Day name: ", getDayName(2));

function getTheGrade(marks) {
  switch (true) {
    case marks >= 90:
      return "A";
    case marks >= 80 && marks < 90:
      return "B";
    case marks >= 70 && marks < 80:
      return "C";
    case marks >= 60 && marks < 70:
      return "D";
    default:
      return "You haven't get the passing marks";
  }
}

// console.log("You got the grade: ", getTheGrade(92));
// console.log("You got the grade: ", getTheGrade(82));
// console.log("You got the grade: ", getTheGrade(72));
// console.log("You got the grade: ", getTheGrade(62));
// console.log("You got the grade: ", getTheGrade(52));

const isEvenOdd = (value) => {
  return value % 2 === 0 ? `${value} is Even Number` : `${value} is Odd Number`;
};

// console.log(isEvenOdd(102));

function checkLeapYear(year) {
  switch (true) {
    case year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0):
      return `${year} is A Leap Year`;

    default:
      return `${year} is Not A Leap Year`;
  }
}

// console.log(checkLeapYear(2030));

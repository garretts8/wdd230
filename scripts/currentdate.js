const monthNames = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];


const todaysDate = new Date();
//const time = todaysDate.toLocaleTimeString(); // Use if AM/PM desired on time
// const dayName = dayNames[todaysDate.getDay()];
// console.log(dayName)
const dateName = todaysDate.getDate();
console.log(dateName)
const monthName = monthNames[todaysDate.getMonth()];
console.log(monthName)
const year = todaysDate.getFullYear();
console.log(year)
const timeHour = todaysDate.getHours(); 
console.log(timeHour)
const timeMinute = todaysDate.getMinutes();
console.log(timeMinute)
const timeSecond = todaysDate.getSeconds();
console.log(timeSecond)
const currentDate = `${monthName}/${dateName}/${year} ${timeHour.toString().padStart(2, '0')}:${timeMinute.toString().padStart(2, '0')}:${timeSecond.toString().padStart(2, '0')} `;
// //const currentDate = `${monthName}/${dayName}/${todaysDate.getFullYear()} ${time} `; // Used to print AM/PM formated time
console.log(currentDate)

document.getElementById('currentdate').textContent = currentDate;
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
const monthName = monthNames[todaysDate.getMonth()];
const year = todaysDate.getFullYear();
const timeHour = todaysDate.getHours(); 
const timeMinute = todaysDate.getMinutes();
const timeSecond = todaysDate.getSeconds();
const currentDate = `${monthName}/${dateName}/${year} ${timeHour.toString().padStart(2, '0')}:${timeMinute.toString().padStart(2, '0')}:${timeSecond.toString().padStart(2, '0')} `;
// //const currentDate = `${monthName}/${dayName}/${todaysDate.getFullYear()} ${time} `; // Used to print AM/PM formated time
 
document.getElementById('currentdate').textContent = currentDate;
document.getElementById('year').textContent = year;
const months = [
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

const days = [
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
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31"
];

const todaysDate = new Date();
//const time = todaysDate.toLocaleTimeString(); // Use if AM/PM desired on time
const dayName = days[todaysDate.getDay()];
const monthName = months[todaysDate.getMonth()];
const timeHour = todaysDate.getHours(); 
const timeMinute = todaysDate.getMinutes();
const timeSecond = todaysDate.getSeconds();
const currentDate = `${monthName}/${dayName}/${todaysDate.getFullYear()} ${timeHour.toString().padStart(2, '0')}:${timeMinute.toString().padStart(2, '0')}:${timeSecond.toString().padStart(2, '0')} `;
//const currentDate = `${monthName}/${dayName}/${todaysDate.getFullYear()} ${time} `; // Used to print AM/PM formated time


document.getElementById('currentdate').textContent = currentDate;
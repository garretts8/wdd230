// initialize display elements
const visitsDisplay = document.querySelector(".visits");
const todayDisplay = document.querySelector(".today");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
todayDisplay.textContent = Date.now();


// window.localStorage.setItem("firstDay",`${monthNumber.getMonth()}${todaysDate.getDate()} ${todaysDate.getFullYear()}`);

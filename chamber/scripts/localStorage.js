// initialize display elements
const visitsDisplay = document.querySelector(".visits");
const todayDisplay = document.querySelector(".today");
const submitButton = document.querySelector('.submitBtn');

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

// "if" statement only needed if page does not have a submitBtn
if (submitButton !== null) {
	submitButton.addEventListener('click', submitFunction);
}

function submitFunction() {
	// set local storage to modifiedDate from currentdate.js
	// window.localStorage.setItem("firstDay",`${monthNumber.getMonth()}${todaysDate.getDate()} ${todaysDate.getFullYear()}`);
		localStorage.setItem("subTime-ls", modifiedDate);
}

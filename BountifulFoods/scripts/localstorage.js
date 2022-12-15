/////////To calculate days since last visit/////////////
let visit = window.localStorage.getItem("latestVisit");
let vis = document.getElementById("VisitedLast");
let visits = 0;
const today = Date.now();
if (visit == null || visit == undefined) {
	localStorage.setItem("latestVisit", today);
	vis.textContent = visits;
} else if (visit !== 0) {
		const dayLastVisit = today - visit;
		const oneDay = 24 * 60 * 60 * 1000;
		const days = Math.round(dayLastVisit / oneDay); 
		// vis.textContent = days;
		localStorage.setItem("latestVisit", today);
};

let numOrders = Number(window.localStorage.getItem("numOrders"));
let orderz = document.querySelector(".order");
orderz.innerHTML = numOrders;
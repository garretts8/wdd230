const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
const date = document.getElementById("currentdate");
date.textContent = new Date().toLocaleDateString('en-us', options);
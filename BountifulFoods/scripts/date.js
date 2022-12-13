// const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
// const date = document.getElementById("currentdate");
// date.textContent = new Date().toLocaleDateString('en-us', options);


const datefield = document.querySelector(".currentdate");
// const date = document.querySelector("#date");
const now = new Date();
console.log(now);
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;
// date.innerHTML = `<em>${fulldate}</em>`;
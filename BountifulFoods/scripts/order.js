const select = document.querySelector("#select");
const addBtn = document.querySelector(".addBtn");
const orderBtn = document.querySelector(".orderBtn");
const order1 = document.querySelector("#order1");
const order2 = document.querySelector("#order2");
const order3 = document.querySelector("#order3");
const selectedFruits = document.querySelector(".fruitsSelected");
const totCarbs = document.querySelector(".totCarbs");
const totProteins = document.querySelector(".totProteins");
const totFats = document.querySelector(".totFats");
const totSugar = document.querySelector(".totSugar");
const totCal = document.querySelector(".totCal");
const orderTitle = document.querySelector(".orderTitle");
const orderDiv = document.querySelector(".orderDiv");
const date_Time = document.querySelector(".date");
const firstname = document.querySelector(".firstname");
const firName = document.querySelector(".firName");
const email = document.querySelector(".email");
const mail = document.querySelector(".mail");
const phone = document.querySelector(".phone");
const ph = document.querySelector(".ph");
const fruitsSelected = document.querySelector(".fruitsSelected");
const textArea = document.querySelector("#textArea");
const special = document.querySelector(".special");


const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

async function apiFetch() {
  try {
    const response = await fetch(url);
  if (response.ok) {
    const fruitList = await response.json();
    // console.log(fruitList);
    fruitList.forEach(displayOrder);
    fruitList.forEach(orderList);
  } else {
      throw Error(await response.text());
    }
  } catch(error) {
    console.log(error.message);
  }
}

function displayOrder(list) {
  // let ordername = document.querySelector(".firstname");
  let options = document.createElement("option");
  let name = `${list.name}`;

  options.innerHTML = name;
  options.setAttribute("value", name);
  // option1.setAttribute("value", carb);
  // options.setAttribute("class", )
  select.appendChild(options);

}

addBtn.addEventListener('click', () => {
  if (order1.value == '') {
    order1.value = select.value;
    console.log(select.value);
  } else if (order2.value == '') {
    order2.value = select.value;
    console.log(select.value);
  } else if ( order3.value == '') {
    order3.value = select.value;
    console.log(select.value);
  }
})

let carb1 = 0.0;
let pro1 = 0.0;
let fat1 = 0.0;
let cal1 = 0.0;
let sugar1 = 0.0;
let carb2 = 0.0;
let pro2 = 0.0;
let fat2 = 0.0;
let cal2 = 0.0;
let sugar2 = 0.0;
let carb3 = 0.0;
let pro3 = 0.0;
let fat3 = 0.0;
let cal3 = 0.0;
let sugar3 = 0.0;

function orderList(items) {
  orderBtn.addEventListener('click', () => {
    if (order1.value == items.name) {
      carb1 = `${parseFloat(items.nutritions.carbohydrates)}`;
      pro1 = `${parseFloat(items.nutritions.protein)}`;
      fat1 = `${parseFloat(items.nutritions.fat)}`;
      cal1 = `${parseFloat(items.nutritions.calories)}`;
      sugar1 = `${parseFloat(items.nutritions.sugar)}`;
    } else if (order2.value == items.name) {
      carb2 = `${parseFloat(items.nutritions.carbohydrates)}`;
      pro2 = `${parseFloat(items.nutritions.protein)}`;
      fat2 = `${parseFloat(items.nutritions.fat)}`;
      cal2 = `${parseFloat(items.nutritions.calories)}`;
      sugar2 = `${parseFloat(items.nutritions.sugar)}`;
    } else if (order3.value == items.name) {
      carb3 = `${parseFloat(items.nutritions.carbohydrates)}`;
      pro3 = `${parseFloat(items.nutritions.protein)}`;
      fat3 = `${parseFloat(items.nutritions.fat)}`;
      cal3 = `${parseFloat(items.nutritions.calories)}`;
      sugar3 = `${parseFloat(items.nutritions.sugar)}`;
    }

    console.log(+pro1 + +pro2 + +pro3);
    console.log(+carb1 + +carb2 + +carb3);
    console.log(+fat1 + +fat2 + +fat3);
    console.log(+sugar1 + +sugar2 + +sugar3);
    console.log(+sugar1 + +sugar2 + +sugar3); 
    console.log(+cal1 + +cal2 + +cal3);

    let today = new Date();
    console.log(today);
    let date = (today.getMonth()+1) + '-' + today.getDate() + '-' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes();
    let ampm = today.getHours() >= 12 ? 'PM' : 'AM';
    let dateTime = date+' '+time+' '+ampm;

    date_Time.innerHTML = dateTime;
    firstname.innerHTML =  firName.value;
    mail.innerHTML =  email.value;
    ph.innerHTML =  phone.value;
    fruitsSelected.innerHTML =  `Fruits Ordered: ${order1.value},  ${order2.value},  ${order3.value}`;
    special.innerHTML = `Special Instructions: "${textArea.value}"`;
    orderTitle.innerHTML = `Your Order has been processed!`
    totCarbs.innerHTML = `Total Carbohydrates: ${+carb1 + +carb2 + +carb3}g`;
    totProteins.innerHTML = `Total Proteins: ${+pro1 + +pro2 + +pro3}g`;
    totFats.innerHTML = `Total Fat: ${+fat1 + +fat2 + +fat3}g`;
    totSugar.innerHTML = `Total Sugar: ${+sugar1 + +sugar2 + +sugar3}g`;
    totCal.innerHTML = `Total Calories: ${+cal1 + +cal2 + +cal3} calories`;
    
    let visits = Number(window.localStorage.getItem("numOrders"));
    let order = document.querySelector(".order");

  })
}

orderBtn.addEventListener('click', () => {

  let numOrders = Number(window.localStorage.getItem("numOrders"));
  let orderz = document.querySelector(".order");

  if (numOrders == 0) {
    numOrders = numOrders + 1;
    localStorage.setItem("numOrders", numOrders)
    orderz.innerHTML = numOrders;
  } else if (numOrders > 0) {
    numOrders = numOrders + 1;
    localStorage.setItem("numOrders", numOrders)
    orderz.innerHTML = numOrders;
  };
});

apiFetch();


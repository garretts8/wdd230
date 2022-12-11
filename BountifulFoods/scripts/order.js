const select = document.querySelector("#select");

const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

async function apiFetch() {
  try {
    const response = await fetch(url);
  if (response.ok) {  
    const fruitList = await response.json();
    console.log(fruitList);
    displayOrder(fruitList);
  } else {
      throw Error(await response.text());
    }
  } catch(error) {
    console.log(error.message);
  }
}

function displayOrder(list) {
  let options = document.createElement("option");
  let name = `${list.name}`;
  options.innerHTML = name;

  options.setAttribute("value", name);
  select.appendChild(options);

  

  

}






apiFetch();


console.log(fruit);
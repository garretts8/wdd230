// first we create a function with the name toggleMenu
function toggleMenu() {
    // console.log("It worked!")
    // we locate an element with a ID name of primaryNav (ul), and toggle the classList
    document.getElementById("ulList").classList.toggle("open");
    // // To add the 'X' inplace of the hamburger button.
    document.getElementById("hambtn").classList.toggle("open");
  }
  
  // call the function toogleMenu
  const x = document.getElementById("hambtn");
  x.onclick = toggleMenu;
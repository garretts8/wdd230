function toggleMenu() {
  console.log("it worked");
  document.getElementById("primNav").classList.toggle("open");
  document.getElementById("hambtn").classList.toggle("open");
}

const x = document.getElementById("hambtn");
x.onclick = toggleMenu;
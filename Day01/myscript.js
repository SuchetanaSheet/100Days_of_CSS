let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", forward);

function forward() {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
    hamburger.classList.add("close");
  } else {
    hamburger.classList.remove("close");
    hamburger.classList.add("open");
  }
}
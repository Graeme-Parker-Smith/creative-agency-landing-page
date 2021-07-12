// Select DOM Elements
const btnHamburger = document.querySelector("#btnHamburger");
// const btnHamburgerImg = document.querySelector('#btnHamburgerImg');
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

function closeMobileMenu() {
  console.log("hamburger clicked.");
  console.log("triggered close menu event");
  // Close Hamburger Menu
  body.classList.remove("noscroll");

  header.classList.remove("open");
  fadeElems.forEach(function (element) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
  });
  overlay.classList.remove("fade-in");
  overlay.classList.add("fade-out");
}

function openMobileMenu() {
  body.classList.add("noscroll");
  header.classList.add("open");
  fadeElems.forEach(function (element) {
    element.classList.remove("fade-out");
    element.classList.add("fade-in");
  });
  overlay.classList.remove("fade-out");
  overlay.classList.add("fade-in");
}

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    closeMobileMenu();
  } else {
    // Open Hamburger Menu
    openMobileMenu();
  }
});

// click overlay to close menu too
overlay.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    closeMobileMenu();
  }
});


// close mobile menu and overlay if window is resized above tablet size
// and menu is open at the time
window.onresize = function () {
  if (window.innerWidth > 767 && header.classList.contains("open")) {
    closeMobileMenu();
  }
};

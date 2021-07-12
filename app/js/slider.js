const previousButton = document.querySelector("#slider-previous");
const nextButton = document.querySelector("#slider-next");
const slides = document.querySelectorAll(".slider__container__slide");

// iterate through slides until reaching one with "active" class
// remove "active" class, then put "active" class on previous slide in slides array
const prevSlide = () => {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      slides[i].classList.remove("active");
      if (i - 1 === -1) {
        slides[slides.length - 1].classList.add("active");
        break;
      }
      slides[i - 1].classList.add("active");
      break;
    }
  }
};
// iterate through slides until reaching one with "active" class
// remove "active" class, then put "active" class on next slide in slides array
const nextSlide = () => {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      slides[i].classList.remove("active");
      if (i + 1 === slides.length) {
        slides[0].classList.add("active");
        break;
      }
      slides[i + 1].classList.add("active");
      break;
    }
  }
};
// assign slide changing functions to buttons
previousButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

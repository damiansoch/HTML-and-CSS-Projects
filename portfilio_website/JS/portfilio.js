// open and close the contact form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// changes the slide when the left or right arrows are clicked
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//  changes the slide when the dots are clicked
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.addEventListener(
  "click",
  function (event) {
    // Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (
      event.target.matches(".cancel") ||
      (!event.target.closest(".form-popup") &&
        !event.target.closest(".Pop_Up_Button") &&
        !event.target.closest(".contact"))
    ) {
      closeForm();
    }
  },
  false
);
// added the active nav links toggle
const navLinks = document.getElementsByClassName("navLink");

for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    for (i = 0; i < navLinks.length; i++) {
      if (event.target.id == navLinks[i].id) {
        navLinks[i].classList.add("active");
        navLinks[i].style.pointerEvents = "none";
      } else {
        navLinks[i].classList.remove("active");
        navLinks[i].style.pointerEvents = "auto";
      }
    }
    return false;
  });
}

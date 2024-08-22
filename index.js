let leftButton = document.getElementById("left-arrow-button");
let rightButton = document.getElementById("right-arrow-button");
let testimonialContainer = document.getElementsByClassName("testimonials")[0];
let scrollWidth = 315;
let cardCount = document.getElementsByClassName("testimonial-card").length;
let clickCount = 0;
updateButtonVisibility();
function updateButtonVisibility() {
  if (clickCount > 0) {
    leftButton.style.display = "block";
  } else {
    leftButton.style.display = "none";
  }
  if (clickCount >= cardCount - 1) {
    rightButton.style.display = "none";
  } else {
    rightButton.style.display = "block";
  }
}
leftButton.addEventListener("click", function () {
  testimonialContainer.scrollBy(-315, 0);
  if (clickCount != 0) {
    clickCount--;
  }
  updateButtonVisibility();
});
rightButton.addEventListener("click", function () {
  testimonialContainer.scrollBy(315, 0);
  clickCount++;
  updateButtonVisibility();
});

let navBarCourses = document.getElementById("navbar-courses");
let dropDown = document.getElementsByClassName("courses-drop-down")[0];
navBarCourses.addEventListener("mouseover", function () {
  dropDown.style.display = "flex";
});
navBarCourses.addEventListener("mouseout", function () {
  dropDown.style.display = "none";
});
dropDown.addEventListener("mouseover", function () {
  dropDown.style.display = "flex";
});
dropDown.addEventListener("mouseout", function () {
  dropDown.style.display = "none";
});

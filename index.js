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

let navBarCourses = document.getElementsByClassName("navbar-courses");
let dropDown = document.getElementsByClassName("courses-drop-down")[0];
if (navBarCourses[0].style.display !== "none") {
  navBarCourses[0].addEventListener("mouseover", function () {
    dropDown.style.display = "flex";
  });
  navBarCourses[0].addEventListener("mouseout", function () {
    dropDown.style.display = "none";
  });
}
if (navBarCourses[1].style.display !== "none") {
  navBarCourses[1].addEventListener("mouseover", function () {
    dropDown.style.display = "flex";
  });
  navBarCourses[1].addEventListener("mouseout", function () {
    dropDown.style.display = "none";
  });
}

dropDown.addEventListener("mouseover", function () {
  dropDown.style.display = "flex";
});
dropDown.addEventListener("mouseout", function () {
  dropDown.style.display = "none";
});

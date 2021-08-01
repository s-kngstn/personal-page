const elements = document.querySelectorAll(".nav-link");
const colChangeElements = document.querySelectorAll(
  ".logo, .bio-toggler, .page-subheading"
);
const colors = ["#2BBC8A", "#ffd05b", "#5555FF", "#ff5353"];

(function () {
  setRandomColors();

  setInterval(function () {
    randomPhoto();
  }, 5000);

  setInterval(function () {
    setRandomColors();
  }, 10000);
})();

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomColors() {
  const setColor = randomColor();
  Array.from(colChangeElements).forEach(function (element) {
    element.style.color = setColor;
    element.style.borderColor = setColor;
  });
}

Array.from(elements).forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    setRandomColors();
  });
});

// Shuffle Photos

function randomPhoto() {
  let num = Math.floor(Math.random() * 4) + 1;
  document.getElementById("about-img").src = `images/me${num}.jpg`;
}

// Bio Toggler

const toggleButton = document.getElementById("toggle");
const longBio = document.getElementById("long-bio");
longBio.style.display = "none";

function theToggler() {
  if (longBio.style.display === "none") {
    longBio.style.display = "block";
    toggleButton.innerHTML = "Tell me less";
  } else {
    longBio.style.display = "none";
    toggleButton.innerHTML = "Tell me more";
  }
}

toggleButton.addEventListener("mousedown", function () {
  theToggler();
});

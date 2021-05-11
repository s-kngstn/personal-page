const elements = document.querySelectorAll("a, hr, .logo");
const colChangeElements = document.querySelectorAll(".logo, .page-subheading, .bio-toggler");
const colors = ['#2BBC8A', '#ffd05b', '#5555FF', '#D980FA', '#ff5353'];

(function(){
  setRandomColors();

  setInterval(function(){
    randomPhoto();
  }, 3000);

  setInterval(function(){
    setRandomColors();
  }, 4000);
})();

function randomColor(){
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomColors(){
  Array.from(colChangeElements).forEach(function(element){
    element.style.color = randomColor();
    element.style.borderColor = randomColor();
  });
}

Array.from(elements).forEach(function(element){
  element.addEventListener("mouseover", function(){
    setRandomColors();  
  });
});

// Shuffle Photos

function randomPhoto(){
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

toggleButton.addEventListener("mousedown", function(){
  theToggler();
});
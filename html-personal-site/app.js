const elements = document.querySelectorAll("a, hr, .logo");
const colChangeElements = document.querySelectorAll("hr, .logo, .page-subheading");
const colors = ['#2BBC8A', '#ffd05b', '#5555FF', '#D980FA', '#ff5353'];

(function(){
  setRandomColors();

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

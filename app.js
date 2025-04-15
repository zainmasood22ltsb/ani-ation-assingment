
let image = document.querySelector(".car-image");
let red = document.querySelector("#red");
let green = document.querySelector("#green");
let car = document.getElementById("img");
let position = 0;
let animationId = null;

function start() {
  if (animationId) return;

  function move() {
    position += 2;

    // ✅ Auto reset if car reaches end of screen
    if (position > window.innerWidth) {
      position = -car.offsetWidth; // start from left again
    }

    car.style.transform = `translateX(${position}px)`;
    animationId = requestAnimationFrame(move);
  }

  move();
  red.style.backgroundColor = "none";
    green.style.backgroundColor = "green";
}

function stop() {
  cancelAnimationFrame(animationId);
  animationId = null;
  green.style.backgroundColor = "none";
    red.style.backgroundColor = "red";

}



const images = [
  "./images/avocado.jpeg",
  "./images/pancake.jpeg",
  "./images/sandwich.jpeg",
  "./images/spaghetti.jpeg",
];

const img = document.querySelector("img");

window.addEventListener("DOMContentLoaded", () => {
  img.src = images[0];
});

const nextbtn = document.querySelector("#next-button");
const prebtn = document.querySelector("#prev-button");

let number = 0;
const getNextPic = function () {
  clearInterval(interval);
  if (number < images.length - 1) {
    number++;
    img.src = images[number];
  } else if (number === images.length - 1) {
    // clearInterval(interval);
    number = 0;
    img.src = images[number];
  }
  interval = setInterval(autoImgSwitch, 3000);
};

const getPreviousPic = function () {
  clearInterval(interval);
  if (number > 0) {
    number--;
    img.src = images[number];
  } else if (number === 0) {
    number = 3;
    img.src = images[number];
  }
  interval = setInterval(autoImgSwitch, 3000);
};

const autoImgSwitch = () => {
  if (number < images.length - 1) {
    number++;
    img.src = images[number];
  } else if (number === images.length - 1) {
    number = 0;
    img.src = images[number];
  }
};

nextbtn.addEventListener("click", getNextPic);
prebtn.addEventListener("click", getPreviousPic);
let interval = setInterval(autoImgSwitch, 3000);

"use strict";

// const buttons = document.querySelectorAll("button"),
//   link = document.querySelector("a");

// buttons[0].onclick = function () {
//   console.log("hello");
// };

// buttons[1].addEventListener("click", () => {
//   console.log("hello");
// });
// buttons.forEach((button) => {
//   button.addEventListener("click", () => console.log("new hello"));
// });

// link.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("hello");
// });

// const box = document.querySelector(".box");

// box.addEventListener("touchmove", () => {
//   console.log("touch");
// });
// box.addEventListener("touchstart", () => {
//   console.log("touchstart");
// });
// const buttons = document.querySelectorAll("button"),
//   container = document.querySelector(".container");

// buttons[0].classList.add("blueBox");
// buttons[0].classList.toggle("blueBox");

// buttons[0].addEventListener("click", () => {
//   buttons[0].classList.toggle("blueBox");
// });

// for (let i = 0; i < buttons.length; i = i + 2) {
//   buttons[i].classList.add("blueBox");
// }

// const box = document.querySelector(".box"),
//   frame = document.querySelector(".frame"),
//   button = document.querySelector("button");

// const classicTimeouot = setTimeout(() => {
//   console.log("hello");
// }, 2000);

// button.addEventListener("click", () => {
//   let coord = 0;
//   const movingBlockInterval = setInterval(move, 10);
//   function move() {
//     if (coord == 400) {
//       clearInterval(movingBlockInterval);
//     } else {
//       coord++;
//       box.style.top = coord + "px";
//       box.style.left = coord + "px";
//     }
//   }
// });

const listItems = document.querySelectorAll("li");
const image = document.querySelector("img");

listItems[0].style.fontWeight = "bold";

listItems.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    image.src = `${index}.jpg`;
    listItems.forEach((item) => (item.style.fontWeight = "normal"));
    e.target.style.fontWeight = "bold";
  });
});

document.body.style.cursor = "none"; //cursor vanish

//code for cursor starts
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "#388087";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
//code for cursor ends

let cube = document.querySelector(".image-cube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let btnUp = document.getElementById("up");
let btnDown = document.getElementById("down");
let btnRot = document.getElementById("rot");

let posx = 0;
let posy = 0;
let posz = 0;

btnNext.addEventListener("click", () => {
  posy -= 90;
  cube.style.transform = `rotateY(${posy}deg)`;
  if (posy == 360 || posy == -360) {
    posy = 0;
  }
  console.log(posy);
});

btnPrev.addEventListener("click", () => {
  posy += 90;
  cube.style.transform = `rotateY(${posy}deg)`;
  if (posy == 360 || posy == -360) {
    posy = 0;
  }
  console.log(posy);
});

btnUp.addEventListener("click", () => {
  posx -= 90;
  cube.style.transform = `rotateX(${posx}deg)`;
  if (posx == 360 || posx == -360) {
    posx = 0;
  }
  console.log(posx);
});

btnDown.addEventListener("click", () => {
  posx += 90;
  cube.style.transform = `rotateX(${posx}deg)`;
  if (posx == 360 || posx == -360) {
    posx = 0;
  }
  console.log(posx);
});

setInterval(() => {
  // posz += 180;
  // cube.style.transform = `rotateZ(${posz}deg)`;
  // console.log(posz);
  let x = Math.floor(Math.random() * 7 + 1);
  if (x == 1) {
    cube.style.transform = `rotateX(90deg)`;
  }
  if (x == 2) {
    cube.style.transform = `rotateX(180deg)`;
  }
  if (x == 3) {
    cube.style.transform = `rotateX(270deg)`;
  }
  if (x == 4) {
    cube.style.transform = `rotateY(90deg)`;
  }
  if (x == 5) {
    cube.style.transform = `rotateY(180deg)`;
  }
  if (x == 6) {
    cube.style.transform = `rotateY(270deg)`;
  }
  if (x == 7) {
    cube.style.transform = `rotateY(0deg)`;
  }
}, 2000);

// left = 0;
// lft = true;
// right = 0;
// rght = true;
// count = 0;
// x = 0;
// y = 0;
// setInterval(() => {
//   condition1: if (count % 2 == 0) {
//     count++;
//     if (lft) {
//       left++;
//       if (left == 4) {
//         left = 0;
//         lft = !lft;
//       }
//       x++;
//       clickleft();
//     } else {
//       left++;
//       if (left == 4) {
//         left = 0;
//         lft = !lft;
//         break condition1;
//       }
//       clickup();
//     }
//   }
//   condition2: if (count % 2 != 0) {
//     count++;
//     if (rght) {
//       right++;
//       if (right == 4) {
//         right = 0;
//         rght = !rght;
//       }
//       clickright();
//     } else {
//       right++;
//       if (right == 4) {
//         right = 0;
//         rght = !rght;
//         break condition2;
//       }
//       clickdown();
//     }
//   }
// }, 2000);

// setInterval(() => {
//   clickup();
// }, 2000);

// function clickleft() {
//   // btnPrev.addEventListener("click", () => {
//   posy += 90;
//   cube.style.transform = `rotateY(${posy}deg)`;
//   // console.log(posy);
//   // });
// }

// function clickup() {
//   // btnDown.addEventListener("click", () => {
//   posx += 90;
//   cube.style.transform = `rotateX(${posx}deg)`;
//   // console.log(pos);
//   // });
// }

// function clickright() {
//   // btnPrev.addEventListener("click", () => {
//   posy -= 90;
//   cube.style.transform = `rotateY(${posy}deg)`;
//   // console.log(posy);
//   // });
// }

// function clickdown() {
//   // btnDown.addEventListener("click", () => {
//   posx -= 90;
//   cube.style.transform = `rotateX(${posx}deg)`;
//   // console.log(pos);
//   // });
// }

// function isScrolledIntoView(elem) {
//   var docViewTop = $(window).scrollTop();
//   var docViewBottom = docViewTop + $(window).height();

//   var elemTop = $(elem).offset().top;
//   var elemBottom = elemTop + $(elem).height();

//   return elemBottom <= docViewBottom && elemTop >= docViewTop;
// }

// function Utils() {}

// Utils.prototype = {
//   constructor: Utils,
//   isElementInView: function (element, fullyInView) {
//     var pageTop = $(window).scrollTop();
//     var pageBottom = pageTop + $(window).height();
//     var elementTop = $(element).offset().top;
//     var elementBottom = elementTop + $(element).height();

//     if (fullyInView === true) {
//       return pageTop < elementTop && pageBottom > elementBottom;
//     } else {
//       return elementTop <= pageBottom && elementBottom >= pageTop;
//     }
//   },
// };

// var Utils = new Utils();

// setTimeout(function () {
//   check();
// }, 2);

// function check() {
//   // $(window).scroll(function () {
//   var isElementInView = Utils.isElementInView($(".upper-s2"), false);

//   if (isElementInView) {
//     console.log("in view");
//   } else {
//     console.log("out of view");
//   }

//   // do something computationally expensive
//   // });
// }

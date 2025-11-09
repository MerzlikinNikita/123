const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.fillRect(10, 15, 150, 100);
// ctx.clearRect(0, 0, canvas.width, canvas.height)

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 120);
// ctx.closePath();
// ctx.stroke();

// canvas.width = 400;
// canvas.height = 200;

// ctx.fillStyle = 'blue';

// ctx.fillRect(50, 50, 100, 100);
// ctx.clearRect(75, 75, 50, 50);

// ctx.strokeStyle = 'yellow';
// ctx.lineWidth = 5;
// ctx.fillStyle = 'blue';

// ctx.beginPath();
// ctx.moveTo(100, 10);
// ctx.lineTo(10, 150);
// ctx.lineTo(190, 150);
// ctx.fill();
// ctx.closePath();
// ctx.stroke();

// ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
// ctx.fillRect(0, 0, 300, 150);

// ctx.globalAlpha = 0.5;
// ctx.fillStyle = 'yellow';
// ctx.fillRect(50, 50, 200, 300);

// const img = new Image();

// img.onload = function () {
//   ctx.drawImage(img, 0, 0, img.width, img.height);
// };

// img.src = "img/pic.jpg";

// canvas.width = 500;
// canvas.height = 200;

// ctx.font = "42px Arial";

// ctx.fillText("Hello, I'm Canvas", 50, 100);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drawCircle = (x, y, radius) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.strokeStyle = "blue";
  ctx.stroke();
};

// drawCircle(50, 50, 50);

let dynamicX = 10;

const animateCircle = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle(dynamicX, 50, 25);

  dynamicX += 10;

  requestAnimationFrame(animateCircle);
};

animateCircle();

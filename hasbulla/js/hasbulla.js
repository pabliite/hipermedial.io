const canvas = document.querySelector("canvas");
const contador = document.querySelector(".segundos");
const nivel = document.querySelector(".grado");
const context = canvas.getContext("2d");
const pugDimensions = { width: 353 * 1.2, height: 325 * 1.2 };


const niveles = {
  5: "Sr asistente",
  10: "Jr Honorario",
  15: "Sr honorario",
  35: "S Tier Honorario",
  65: "Jr Hasbulla",
  105: "Hasbulla Master",
  150: "Senior Acolyte",
  250: "Priest",
  450: "Sage",
  650: "Hemerito",
  1000: "jr Hemerito",
  1500: "Senior Hemerito",
  1500: "CEO",
  2500: "Papa",
  3500: "Conde",
  4500: "Lord",
  10500: "OverLord",
  20500: "Rey Hasbulla",
}

const startTime = Date.now();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.translate(window.innerWidth / 2, window.innerHeight / 2);

const image = new Image();
image.src = "./img/hasbulla.png"; 

const loopingPugs = 40; 
const offsetDistance = 120;
let currentOffset = 0;

const movementRange = 200

const mouseOffset = {
  x: 0,
  y: 0
}

const movementOffset = {
  x: 0,
  y: 0
}

image.onload = () => {
  startLooping();
};

window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.setTransform(1, 0, 0, 1, 0, 0); //Reset the canvas context
  context.translate(window.innerWidth / 2, window.innerHeight / 2);
};

window.addEventListener('mousemove', onMouseMove)

function draw(offset, loopCount) {

  let currentPercentage = (loopingPugs - loopCount) / loopingPugs
  context.drawImage(
    image,
    -pugDimensions.width / 2 - offset/2 + (movementOffset.x * currentPercentage),
    -pugDimensions.height / 2 - offset/2 + (movementOffset.y * currentPercentage),
    pugDimensions.width + offset,
    pugDimensions.height + offset
  );
}

function onMouseMove(e) {
  mouseOffset.x = (e.clientX - window.innerWidth / 2) / window.innerWidth / 2 * movementRange
  mouseOffset.y = (e.clientY - window.innerHeight / 2) / window.innerHeight / 2 * movementRange
}

function lerp(start, end, amount) {
  return start*(1-amount)+end*amount
}

function loopDraw() {

  movementOffset.x = lerp(movementOffset.x, mouseOffset.x, 0.05)
  movementOffset.y = lerp(movementOffset.y, mouseOffset.y, 0.05)

  for (let i = loopingPugs; i >= 1; i--) {
    draw(i * offsetDistance + currentOffset, i);
  }

  draw(offsetDistance, 1);

  currentOffset++;
  if (currentOffset >= offsetDistance) {
    currentOffset = 0;
  }

  const newTime = Math.floor((Date.now() - startTime) / 1000);

  contador.innerText = newTime;

  if(niveles[newTime]) {
    nivel.innerText = niveles[newTime]
  }

  requestAnimationFrame(loopDraw);
}

function startLooping() {
  requestAnimationFrame(loopDraw);
}

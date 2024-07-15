let cantidad = 10;
const cuadrados = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  
  for (let index = 0; index < cantidad; index++) {
    const cuadrado = {
      x: random(0, width),
      y: random(0, height),
      ancho: random(20, 60),
      alto: random(20, 60),
      velocidadX: random(-15, 15),
      velocidadY: random(-15, 15),
   
    };
    
    cuadrados.push(cuadrado);
  }
  
  if (navigator.vibrate == undefined) {
    alert("Este dispositivo no soporta vibracion!")
  }
}

function draw() {
  background(250, 250, 250, 10);
  for (let index = 0; index < cuadrados.length; index++) {
    if (cuadrados[index].relleno == false) {
      noFill();
    } else {
      fill("colores");
    }
    
    
    
  
  
    rect(cuadrados[index].x, cuadrados[index].y, cuadrados[index].ancho,cuadrados[index].alto);
  
    cuadrados[index].x += cuadrados[index].velocidadX + cuadrados[index].velocidadX * sin(frameCount * 0.25);
    cuadrados[index].y += cuadrados[index].velocidadY;
  
    // rebote eje X
    if (cuadrados[index].x < 0 || cuadrados[index].x >= width) {
      cuadrados[index].velocidadX = -cuadrados[index].velocidadX;
    }
  
    // rebote eje Y
    if (cuadrados[index].y < 0 || cuadrados[index].y >= height) {
      if (navigator.vibrate) {
        navigator.vibrate(200)
      }
      cuadrados[index].velocidadY = -cuadrados[index].velocidadY;
    }
  }
}

function mouseClicked() {
  const cuadrado = {
      x: random(0, width),
      y: random(0, height),
      ancho: random(20, 60),
      alto: random(20, 60),
      diametro: random(20, 60),
      velocidadX: random(-25, 25),
      velocidadY: random(-25, 25),
      relleno: random([true, true, false])
    };
    
    cuadrados.push(cuadrado);
}
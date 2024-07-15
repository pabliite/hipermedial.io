let cantidadCuadrados = 1000;
let cuadrados;
let ancho = 50;
let alto = 50;
function setup() {
    createCanvas(windowWidth, windowHeight);
    cuadrados = new Array(cantidadCuadrados);
    for (let i = 0; i < cantidadCuadrados; i++) {
        cuadrados[i] = new Cuadrado();
    }
}
function draw() {
    background(0,0,0);
    noStroke();
    for (let i = 0; i < cantidadCuadrados; i++) {
        cuadrados[i].update();
        cuadrados[i].display();
    }
}
class Cuadrado {
    x;
    y;
    xVel = 1;
    yVel = 1;
    
    constructor() {
        this.x = random(width);
        this.y = random(height);
    }
    update() {
        this.x += this.xVel;
        this.y += this.yVel;
        if (this.x > width || this.x < 0) {
            this.xVel *= -1;
        }
        if (this.y > height || this.y < 0) {
            this.yVel *= -1;
        }
        if (dist(mouseX, mouseY, this.x, this.y) < ancho / 2) {
            this.xVel = (mouseX - this.x) * 1;
            this.yVel = (mouseY - this.y) * 1;
        }
    }
    display() {
        fill(color(random(255,0,0),random(0,255,0),random(0,1, 100)));
        rect(this.x, this.y, ancho, alto);
      
    }
}

  
  
  
  
  
  
  
  
  
  
  
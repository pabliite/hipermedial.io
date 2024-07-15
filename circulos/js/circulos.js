class ArrayList extends Array {
    constructor() {
        super(...[]);
    }
    size() {
        return this.length;
    }
    add(x) {
        this.push(x);
    }
    get(i) {
        return this[i];
    }
    remove(i) {
        this.splice(i, 1);
    }
}

let x;
let y;
let angle = 0.0;
let speed = 0.05; //lista para guardar las posiciones y animaciones de los circulos
let circles = new ArrayList();
let angles = new ArrayList();
let speeds = new ArrayList();
let colors = new ArrayList();
let diameters = new ArrayList();
function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth();
}
function draw() {
    background(255);
    x = width / 2 + cos(angle) * 100;
    y = height / 2 + sin(angle) * 100;
    ellipse(x, y, 20, 20); // angle += speed;
    //iterar para dibujar todos los circulos guardados en la lista
    for (let i = 0; i < circles.size(); i++) {
        let pos = circles.get(i);
        let a = angles.get(i);
        let s = speeds.get(i);
        let c = colors.get(i);
        let d = diameters.get(i);
        pos.x += cos(a) * s;
        pos.y += sin(a) * s;
        noStroke();
        fill(c);
        ellipse(pos.x, pos.y, d, d);
        a += s;
        angleMode(i, a);
    }
}
function mousePressed() {
    //agregar un nuevo circulo a la lista al hacer clic en la pantalla
    circles.add(new p5.Vector(mouseX, mouseY));
    angles.add(random(TWO_PI));
    speeds.add(random(-0.1, 0.1));
    colors.add(color(random(255), random(255), random(255)));
    diameters.add(random(50, 100));
}
function mouseDragged() {
    //agregar un nuevo circulo a la lista al hacer clic en la pantalla
    circles.add(new p5.Vector(mouseX, mouseY));
    angles.add(random(TWO_PI));
    speeds.add(random(-0.1, 0.1));
    colors.add(color(random(255), random(255), random(255)));
    diameters.add(random(50, 100));
}

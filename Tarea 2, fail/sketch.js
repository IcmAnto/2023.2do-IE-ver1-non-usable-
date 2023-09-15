//hay clickear el canvas para que se realice la acción

let circles = []; // Array to store the circles

function setup() {
  createCanvas(400, 400);
  stroke(200)
}

function draw() {
  background(0);
  
    for (let i = 0; i <= width; i += 50) {
    // Draw lines starting from (0, 0) to various points on the canvas
    line(0, 0, i, height);
  }
  
  for (let i = 0; i <= width; i += 50) {
    // Draw lines starting from (0, 0) to various points on the canvas
    line(windowWidth, 0, i, height);
  }
  
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].display();
  }
}

function mousePressed() {
  let newCircle = new Circle(mouseX, mouseY, 10); // Create a new circle at the mouse position
  circles.push(newCircle); // Add the new circle to the array
}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  update() {
    this.r += 1; // Increase the radius of the circle over time
  }
  
  display() {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    noFill();
    stroke(r,g,b);
    ellipse(this.x, this.y, this.r * 2, this.r * 2); // Draw the circle
  }
}

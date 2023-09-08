let r = 5;
let g = 60;
let b = 180;
let extraCanvas;
let centerX;
let centerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1); // Controla la velocidad de cambio de color
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.background(0, 0, 0, 0); 
  centerX=windowWidth/2;
  centerY=windowHeight/2;
}

function draw() {
  background(255, 0);
  noStroke();
  r = (r + 10) % 256;
  g = (g + 10) % 256;
  b = (b + 10) % 256;
  
  // Cambia el color desde adentro hacia afuera
  for (let diam = windowHeight - 100; diam > 0; diam -= 2) {
    fill((r + diam) % 256, (g + diam) % 256, (b + diam) % 256, 20);
    ellipse(windowWidth / 2, windowHeight / 2, diam, diam);
  }

  // Aquí muestras el lienzo adicional con texto
  image(extraCanvas, 0, 0);
  extraCanvas.horizAlign(center);
  extraCanvas.vertAlign(center);
  extraCanvas.textSize(60);
  extraCanvas.textFont
  extraCanvas.fill(255); // Agregamos color de texto (blanco)
  extraCanvas.text("Bienvenidx", 0, 0);
}

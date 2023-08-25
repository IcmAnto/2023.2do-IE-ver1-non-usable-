let yPosition = 0; // Posición inicial en Y de las líneas

function setup() {
  createCanvas(400, 400);
  canvas
}

function draw() {
  background(255, 0); // fondo
  
  // Dibuja las líneas blancas intermitentes
  for (let x = 0; x < width; x += 40) {
    stroke(255);
    line(x, yPosition, x + 20, yPosition + 20);
  }
  
  yPosition += 2; // Incrementa la posición Y para que las líneas bajen en diagonal
  
  // Reinicia la posición Y cuando las líneas salen de la pantalla
  if (yPosition > height) {
    yPosition = -20;
  }

  fill(255);
  circle(width/2, height/2, 350);

  textFont('Italic');
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Página en construcción...", width/2, height/2);
}

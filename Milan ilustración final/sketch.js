function setup() {
  createCanvas(windowWidth, 400);
}

function draw() {
  background(150, 220, 57);
  let CENTER = windowWidth / 2; //se define que el centro de la página sea "CENTER" para poder usar esta variable en las siguientes operaciones.

//CABEZA, CONTORNO

  //Se dibuja primero los triangulos (que serán las orejas) ya que van atrás de los rectangulos de la cara.

  //OREJAS
  //izquierda
      fill(43, 31, 40); //negro
  triangle(CENTER - 145, 50, CENTER - 32.5, 100, CENTER - 120, 200); //2do triangulo de las orejas (de izq a der, parte de arriba)
      fill(100, 65, 0); //cafe
  triangle(CENTER - 145, 50, CENTER - 120, 200, CENTER - 260, 200); //1er triangulo

  //Ahora, para la otra oreja, se hace la operación contraria a la anterior, pero se usan los mismos valores, si se busca asimetría.

  //derecha
      fill(43, 31, 40);
  triangle(CENTER + 145, 50, CENTER + 32.5, 100, CENTER + 120, 200); //3er triangulo, orejas.
      fill(100, 65, 0);
  triangle(CENTER + 145, 50, CENTER + 120, 200, CENTER + 260, 200); //4to triangulo, orejas.

  //primero se centran los elementos, para luego empezar a dibujar los rectagulos que forman su rostro.

  //ROSTRO
      fill(43, 31, 40);
  rectMode(CENTER);
  rect(CENTER - 150, 100, 300, 150, 100, 100, 0, 0); //1er rectangulo de la cara para los ojos (de arriba hacía abajo).
      fill(100, 65, 0);
  rect(CENTER - 150, 250, 300, 25, 0, 0, 2, 2); //2do rectangulo.

  //mandibula
      fill(240); //blanco grisaseo
  triangle(CENTER - 149, 275, CENTER - 87.5, 275, CENTER - 87.5, 370); //mandibula izquierda.
  triangle(CENTER + 149, 275, CENTER + 87.5, 275, CENTER + 87.5, 370); //mandibula derecha.

  rect(CENTER - 87.5, 275, 175, 100); //3er rectangulo; de la nariz y boca.

      fill(240);
  triangle(CENTER - 35, 100, CENTER + 35, 100, CENTER, 270); //Marca triangular de su pelaje.

//ROSTRO;DETALLES
  
      stroke(0, 150);
  
  //OJOS
  //izquierdo
      fill(100, 65, 0);
  triangle(CENTER - 85, 167, CENTER - 35, 155, CENTER - 35, 202); //ceja izquierda.
      fill(240, 100);
  arc(CENTER - 56, 215, 70, 50, PI, PI + HALF_PI); //eyelid(?
      fill(50, 20, 0);
  circle(CENTER - 60, 215, 50); //ojo izquierdo.
      fill(0);
  circle(CENTER - 60, 215, 35); //ojo izquierdo, pupila.

  //derecho
      fill(100, 65, 0);
      stroke(0, 150);
  triangle(CENTER + 85, 167, CENTER + 35, 155, CENTER + 35, 202); //ceja derecha.
      fill(240, 100);
  arc(CENTER + 56, 215, 70, 50, PI + HALF_PI, 0); //eyelid(?
      fill(50, 20, 0);
      stroke(0, 150);
  circle(CENTER + 60, 215, 50); //ojo derecho.
      fill(0);
  circle(CENTER + 60, 215, 35); //ojo derecho, pupila.

  //NARIZ
      fill(43, 31, 40); //negro
  rect(CENTER - 25, 290, 50, 50, 4, 4, 10, 10);

  //BOCA
  //comisura izq
      fill(240);
      strokeWeight(3)
  arc(CENTER - 85, 340, 175, 70, 0, HALF_PI);
  //comisura der
  arc(CENTER + 85, 340, 175, 70, HALF_PI, PI);
}

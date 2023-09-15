function setup() {
  createCanvas(windowWidth, 400);
}

function draw() {
  background(150, 220, 57);
  let CENTER = windowWidth / 2; //se define que el centro de la página sea "CENTER" para poder usar esta variable en las siguientes operaciones.

  //noStroke();
//CABEZA, CONTORNO
  
      //Se dibuja primero los triangulos (que serán las orejas) ya que van atrás de los rectangulos de la cara.
  
  //OREJAS
  //izquierda
  triangle(CENTER - 200, 50, CENTER - 87.5, 100, CENTER - 175, 200); //2do triangulo de las orejas (de izq a der, parte de arriba)
  triangle(CENTER - 200, 50, CENTER - 175, 200, CENTER - 315, 200); //1er triangulo

  //Ahora, para la otra oreja, se hace la operación contraria a la anterior, pero se usan los mismos valores, si se busca asimetría.
  
  //derecha
  triangle(CENTER + 200, 50, CENTER + 87.5, 100, CENTER + 175, 200); //3er triangulo, orejas.
  triangle(CENTER + 200, 50, CENTER + 175, 200, CENTER + 315, 200); //4to triangulo, orejas.

    //primero se centran los elementos, para luego empezar a dibujar los rectagulos que forman su rostro.
  
  //ROSTRO
  rectMode(CENTER);
  rect(CENTER - 175, 100, 350, 150, 55, 55, 0, 0);  //1er rectangulo de la cara para los ojos (de arriba hacía abajo).
  rect(CENTER - 175, 250, 350, 25);  //2do rectangulo.
  rect(CENTER - 87.5, 275, 175, 100);  //3er rectangulo; de la nariz y boca.
  
  //mandibula
  triangle(CENTER - 175, 275, CENTER - 87.5, 275, CENTER - 87.5, 375); //mandibula izquierda.
  triangle(CENTER + 175, 275, CENTER + 87.5, 275, CENTER + 87.5, 375); //mandibula derecha.
  
  
  triangle(CENTER - 35, 100, CENTER + 35, 100, CENTER, 250); //Marca triangular de su pelaje.
  
  
//ROSTRO;DETALLES
  
  //OJOS
  //izquierdo
  triangle(CENTER-85, 167, CENTER-35, 155, CENTER-35, 202) //ceja izquierda.
  arc(CENTER- 56, 215, 70, 50, PI, PI + HALF_PI); //eyelid(?
  circle(CENTER- 60, 215, 50) //ojo izquierdo.
  
  //derecho
  triangle(CENTER+85, 167, CENTER+35, 155, CENTER+35, 202) //ceja derecha.
  arc(CENTER+ 56, 215, 70, 50, PI+HALF_PI, 0); //eyelid(?
  circle(CENTER + 60, 215, 50) //ojo derecho. 
  
  //NARIZ
  rect(CENTER-25, 290, 50, 50, 4, 4, 10, 10)
  
  //BOCA
  //comisura izq
  arc(CENTER-87.5, 340, 175, 70, 0, HALF_PI)
  //comisura der
  arc(CENTER+87.5, 340, 175, 70, HALF_PI, PI)
  
}

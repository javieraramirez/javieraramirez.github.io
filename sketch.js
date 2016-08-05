// taller de programación TD2_UDD

// setup() se ejecuta una vez al principio de los tiempos
//  (condiciones iniciales de la programación)
// camelCase, UPPERCASE, lowercase
function setup() {
  // crear un lienzo para dibujar
  // createCanvas(dimHOR, dimVER); > en pixeles
  createCanvas(800, 600);
  // pintar el fondo
  //background(color);
  //1: grayscale, 0 es negro, 255 es blanco
  //2: greyscale + alpha (gs, r, g, b)
  //3: rgb, redgreenblue ,0 nada, 255 todo
  background(0, 255, 0);
}

// draw() corre justo despues de setup()
// draw() se ejecuta 60 veces por segundo
function draw() {
  //pintr el fondo (para que no se vean las otras elipses
  //si se saca esto se pinta el canvas con elipses)
  background(0, 255, 0);
  //definir ancho de las figuras: cada figura viene por defecto
  //con un borde de un px de ancho
  strokeWeight(10);
  //definir color del borde
  //stroke(color);
  //para no dibujar color
  //noStroke();
  stroke(0, 0, 255);
  //definir color del relleno
  //fill(color);
  fill(255, 0, 0);
  //para dibujar una elipse en draw
  //ellipse(posX, posY, width, height);
  //width, height > en pixeles
  //posX, posY > para que siga al mouse > mouseX, mouseY
  ellipse(mouseX, mouseY, 50, 50);
}
var cols, rows;
var scl = 30;
var w = 3000;
var h = 2000;

var flying = 0;

var terrain = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; 
    }
  }
}

function draw() {

  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -120, 120);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  background(0);
  translate(0, -100);
    stroke(102, 153, 255);

  rotateX(PI/3);
  noFill();
  translate(-w/2, -h/2+50);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}
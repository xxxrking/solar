const planets = [];

function setup() {
  createCanvas(900, 500);

  planets.push(new Planet(width * 30, height * 8));
}

function mousePressed() {
  planets.push(new Planet(mouseX, mouseY));
}

function draw() {
  background(32);

  // sun
  fill(800, 800, 0);
  circle(width / 2, height / 2, 300);

  for (const planet of planets) {
    planet.draw();
  }
}

class Planet {
  constructor(x, y) {
    this.x = x;
    this.y = y;

  
    this.size = random(10, 50);

    this.deltaX = random(-20, 20);
    this.deltaY = random(-20, 20);

    
    this.c = color(random(128, 255), random(128, 255), random(128, 255));
  }

  draw() {
    const sunX = width / 2;
    const sunY = height / 2;
    const distanceFromSun = dist(this.x, this.y, sunX, sunY);

 
    this.deltaX += (sunX - this.x) / distanceFromSun;
    this.deltaY += (sunY - this.y) / distanceFromSun;

    this.x += this.deltaX;
    this.y += this.deltaY;

    fill(this.c);
    ellipse(this.x, this.y, this.size);
  }
}
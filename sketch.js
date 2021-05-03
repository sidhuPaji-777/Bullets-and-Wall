var bullet1, bullet2, bullet3, bullet4;
var wall1, wall2, wall3, wall4, crackedWall;
var speed, weight, thickness;

function preload()
{

  crackedWall = loadImage("image/crackedWall.png");

}

function setup() {
  createCanvas(1000, 500);
// Creating random values for velocityX

speed = random(223, 321);
console.log(speed);

weight = random(30, 52);
console.log(weight);

thickness = random(22, 83);
console.log(thickness);


// Creating Bullets

  bullet1 = createSprite(70, 80, 40, 17);
  bullet1.velocityX = speed;
  // bullet1.lifetime = 120;
  

  bullet2 = createSprite(70, bullet1.y+110, 40, 17);
  bullet2.velocityX = speed;
  // bullet2.lifetime = 120;

  bullet3 = createSprite(70, bullet2.y+110, 40, 17);
  bullet3.velocityX = speed;
  // bullet3.lifetime = 120;

  bullet4 = createSprite(70, bullet2.y+220, 40, 17);
  bullet4.velocityX = speed;
  // bullet4.lifetime = 120;
    

  // Creating walls
  wall1 = createSprite(930, 80, thickness, 80);
  wall1.shapeColor = color(0, 191, 255);

  wall2 = createSprite(930, wall1.y+110, thickness, 80);
  wall2.shapeColor = color(0, 191, 255);

  wall3 = createSprite(930, wall2.y+110, thickness, 80);
  wall3.shapeColor = color(0, 191, 255);

  wall4 = createSprite(930, wall3.y+110, thickness, 80);
  wall4.shapeColor = color(0, 191, 255);

}

function draw() {
  background(0, 0, 0);


  bullet1.collide(wall1);
  bullet2.collide(wall2);
  bullet3.collide(wall3);
  bullet4.collide(wall4);




  damageFunt();

// console.log(deformation);
  drawSprites();
}


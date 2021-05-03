var crack1;
function damageFunt()
{

if(wall1.x-bullet1.x < (bullet1.width + wall1.width)/2 || 
wall2.x-bullet2.x < (bullet2.width + wall2.width)/2 ||
wall3.x-bullet3.x < (bullet3.width + wall3.width)/2 ||
wall4.x-bullet4.x < (bullet4.width + wall4.width)/2);
{
  // bullet1.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage > 10)
  {
    bullet1.shapeColor = color(255, 0, 0);
    bullet2.shapeColor = color(255, 0, 0);
    bullet3.shapeColor = color(255, 0, 0);
    bullet4.shapeColor = color(255, 0, 0);

    crack1 = createSprite(930, 100, 20, 100);
    crack1.addImage("Cracked", crackedWall);
    crack1.scale = 0.5;

    fill("yellow");
    textSize(40);
    text("Wall Cracked", 100, 70);
  }


  if(damage<10)
  {
    bullet1.shapeColor = color(0, 255, 0);
    bullet2.shapeColor = color(0, 255, 0);
    bullet3.shapeColor = color(0, 255, 0);
    bullet4.shapeColor = color(0, 255, 0);
    fill("yellow");
    textSize(40);
    text("Fired bullet is not Capable", 100, 70);
  }

}

}


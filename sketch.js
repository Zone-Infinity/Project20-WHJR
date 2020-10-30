var car, wall;
var speed, weight;

function setup() {
  speed = random(55, 90);
  weight = random(400,1500)
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = rgb(80,80,80);
  car.velocityX = speed;
}

function draw() {
  background(0);  

  car.collide(wall);

  if (car.x - wall.x <= wall.width/2 + car.width/2
    && wall.x - car.x <= wall.width/2 + car.width/2
    && car.y - wall.y <= wall.height/2 + car.height/2
    && wall.y - car.y <= wall.height/2 + car.height/2) {
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / 22500;
    if(deformation<100){
      car.shapeColor = rgb(0, 255, 0);
    }
    else if(deformation<180){
      car.shapeColor = rgb(230, 230, 0);
    }
    else{
      car.shapeColor = rgb(255, 0, 0);
    }
  }

  drawSprites();
}

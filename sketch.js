var car,wall;
var speed,weight;
var deformation


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight =random(400,1500);
  deformation = speed*speed*weight*0.5/22500
}

function draw() {
  car = createSprite(50,200,50,50);
  car.velocity=speed/10;
  wall = createSprite(1500,200,60,400);
  wall.shapeColor=(800,80,80);

  if(car.x-wall.x<car.width/2+wall.width/2
    &&wall.x-car.x<car.width/2+wall.width/2
    && car.y-wall.y<car.height/2+wall.height/2
      &&wall.y-car.y<car.height/2+wall.height/2){
    car.velocity = 0;
    }
    if(deformation<80){
      car.shapeColor = "green";
    }
    if(deformation>80
      &&deformation<180){
      car.shapeColor = "yellow";
    }
    if(deformation>180){
      
      car.shapeColor = "red";
    }
  background(0);  
  drawSprites();
}

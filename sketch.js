var car, wall,replay, replayImg;
var bg, bgImg;
var weight, speed;

function preload(){
  bgImg = loadImage("bg.jpg");
  replayImg = loadImage("re.png");
}

function setup() {
  createCanvas(1600,400);
  bg  = createSprite(800,200,1600,400);
  bg.addImage(bgImg);
  bg.scale = 2.5;
  speed = random(55,90);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "blue";
  car.velocityX = speed;
  wall = createSprite(1420, 200, 60, 200);
  wall.shapeColor = "white";
  weight = random(400, 1500);
  replay = createSprite(800,300);
  replay.addImage(replayImg);
  replay.scale = 0.7;

  textSize(40);
  textFont("Edwardian Script ITC");
  textStyle(BOLD);
}

function draw() {
  background(0,0,0);
  console.log(wall.x-car.x);

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var diformation = 0.5*weight*speed*speed/22500;
    if(diformation>180){
      car.shapeColor = "red";
    }

    if(diformation<180 && diformation>100){
      car.shapeColor = "yellow";
    }

    if(diformation<100){
      car.shapeColor = "green";
    }

  }

  if(mousePressedOver(replay)){
    car.x = 50;
    car.velocityX = speed;
    car.shapeColor = "blue";
  }

  /*if(car.x-wall.x>= car.width/2+wall.width/2 ||
    wall.x-car.x<= car.width/2+wall.width/2){
    car.shapeColor = "red";
    wall.shapeColor = "red";
  }
  else{
    car.shapeColor = "blue";
    wall.shapeColor = "blue";
  }*/
  fill("orange");
  //rect(150,20,270, 70);
  drawSprites();
  text("To See It Again With This Color Press This Button", 500,250);
}
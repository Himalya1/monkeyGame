
var monkey , monkey_running;
var banana ,bananaImage, Obstacle, ObstacleImage;
var FoodGroup, ObstacleGroup;
var score;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  ObstacleImage = loadImage("obstacle.png");
   
}

function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  ObstacleGroup = createGroup();
  bananaGroup = createGroup();

  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);

  
}


function draw() {
 background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY =-12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
   
  banana=createSprite(200,150,20,20);
  banana.addAnimation("banana.png",bananaImage);
  banana.scale=0.1;
  
  Obstacle=createSprite(250,315,20,20);
  Obstacle.addAnimation("obstacle.png",ObstacleImage);
  Obstacle.scale=0.2;
  
  drawSprites();
  
     function Obstacles(){
   if (frameCount % 300 === 0){
   var Obstacle = createSprite(250,315,20,20);
   Obstacle.addImage(ObstacleImage);
   Obstacle.scale = 0.2;
   Obstacle.velocityX = -(6 + score/100);
   Obstacle.lifetime = 300;
   ObstaclesGroup.addStoneImage("obstacle.png",ObstacleImage);
   }  
   }  
   
    function spawnBanana() {
    if (frameCount % 80 === 0) {
    var banana = createSprite(200,150,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    bananaGroup.add(banana);
    }
    }
  
var survivalTime=0;

stroke("white");
textSize(20);
fill("white");
text("Score:" +score, 500,50);

stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("SurvivalTime:" +survivalTime ,100,50);
}

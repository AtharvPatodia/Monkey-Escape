var PLAY = 0;
var END = 0;
var GameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, ground, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var inviground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 200);
  
  monkey = createSprite(50,155,20,50);
  monkey.addAnimation("monkeyrun", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,190,800,20);
  ground.x = ground.width/2;
  
  inviground = createSprite(200, 200, 400, 50);
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
}


function draw() {
  background ("lightblue");
  if(GameState ===PLAY){
    ground.velocityX = -4;
    if(monkey.collide(bananaGroup)){
      score ++;
      bananaGroup.destroyEach();
    }
      monkey.velocityX = 0.05;
    if(keyDown ("space") && monkey.y>145){
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
    spawnObstacles();  
    bananas();
    if (monkey.collide(obstacleGroup)){
      ground.velocityX = 0;
      monkey.velocityY = 0;
      bananaGroup.setVelocityXEach(0);
      obstacleGroup.setVelocityXEach(0);
      obstacleGroup.setLifetimeEach(-1);
      bananaGroup.setLifetimeEach(-1);
      frameCount = 0;
      GameState = END;
  }
  
  
  if(ground.x ===0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
  }
  
  //nkey.debug = true;
  //stacleGroupg = true;
  monkey.setCollider("circle", 0, 0, 210);
  
    ground.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  
  text ("Survival Time = " + score,300, 50);
  drawSprites();  
}

function spawnObstacles(){
 if (frameCount % 100=== 0){
   obstacle = createSprite(400,160);
   obstacle.velocityX = -(6 + score/10);
   obstacle.addImage("obstac", obstaceImage);
   obstacle.scale = 0.14;
   obstacleGroup.add(obstacle);
   obstacle.lifetime = 100;
 }
}

function bananas(){
  if (frameCount % 80 === 0){
    banana = createSprite(400,100);
    banana.y = Math.round (random(100, 150));
    banana. velocityX = -(6 + score/5);
    banana.addImage("kela", bananaImage);
    banana.scale = 0.1;
    bananaGroup.add(banana);
    banana.lifetime = 100;
  }
}






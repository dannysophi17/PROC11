var trex, trex_running;

var ground, groundImg;

function preload(){

trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")

groundImg = loadImage("ground2.png")

trex_collide= loadAnimation("trex_collide.png")

}

function setup(){
  createCanvas(600,200)
  trex = createSprite(50,50,20,50)
  trex.addAnimation("running", trex_running)

  trex.scale=0.5;
  trex.x=50

  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImg);
  ground.velocityX = -5;
  

  
 
}

function draw(){
  background("white")
  

  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.VelocityY + 0.8;
  trex.collide(ground);
 
  drawSprites();
}

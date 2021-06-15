var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if (keyDown(Up_Arow))
  rabbit.velocityY = +6
  if (keyDown(Down_Arrow))
  apple.velocityY = -3
  if (keydown(Right_Arow))
  apple.velocityX = -2
  if (keydown(Left_Arow))
  apple.velocityX = +2
  if(keydown(Up_Arow))
  apple.velocityY = +3
  drawSprites();
}

function createApple (){
apple = createSprite(random(50,350),40,10,10);
var select_sprite= Math.round(random(1,2));
if (frameCount%80 == 0))  {
if (select_sprites == 1) {
  
}  
}


}












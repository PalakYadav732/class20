var BALL1,BALL2;

function setup() {
  createCanvas(800,400);
  BALL1 = createSprite (400,200,50,20)
  BALL2 = createSprite(600, 200, 100, 100);
}

function draw() {
  background(0);  
  BALL1.x = World.mouseX;
  BALL1.y = World.mouseY;




if( BALL1.x - BALL2.x   < BALL1.width/2 + BALL2.width/2 
  &&  BALL2.x - BALL1.x   < BALL1.width/2 + BALL2.width/2 
  &&  BALL1.y - BALL2.y   < BALL1.height/2 + BALL2.height/2
  &&  BALL2.y - BALL1.y   < BALL1.height/2 + BALL2.height/2){


BALL1.shapeColor = "green"
BALL2.shapeColor = "green"


}else{

 

  BALL1.shapeColor = "red"
  BALL2.shapeColor = "red"




}










  drawSprites();
}
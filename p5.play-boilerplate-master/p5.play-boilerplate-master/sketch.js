
var rect1,rect2;



function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 30, 70);
  rect1.shapeColor=("blue");

  rect2=createSprite(200,200,70,30);
  rect2.shapeColor=("blue")




}

function draw() {
  background("RED"); 
  
  rect2.x=mouseX;
  rect2.y=mouseY;

  if(rect2.x-rect1.x<rect1.width/2+rect2.width/2  &&  rect1.x-rect2.x<rect1.width/2+rect2.width/2
    && rect2.y-rect1.y<rect1.height/2+rect2.height/2  &&  rect1.y-rect2.y<rect1.height/2+rect2.height/2){
    rect2.shapeColor=("green");
    rect1.shapeColor=("green");
  } else {
    rect2.shapeColor=("blue");
    rect1.shapeColor=("blue");
  }






  drawSprites()
}
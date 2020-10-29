var rect1, rect2;
var sq1, sq2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 80);
  rect2 = createSprite(500,200,80,50);

  sq1 = createSprite(300,200,60,60);
  sq2 = createSprite(600,200,60,60);
}

function draw() {
  background(0); 
  
  rect1.shapeColor = "red";
  rect2.shapeColor = "yellow"; 

  sq1.shapeColor = "brown";
  sq2.shapeColor = "white";

  rect2.x = mouseX;
  rect2.y = mouseY;

  if(isTouching(rect1, rect2)) {
    rect1.shapeColor = "green";
    rect2.shapeColor = "blue";
  }else{
    rect1.shapeColor = "red";
    rect2.shapeColor = "yellow";
  }

  if(isTouching(rect2, sq1)) {
    sq1.shapeColor = "orange";
    rect2.shapeColor = "blue";
  }else{
    sq1.shapeColor = "brown";
    rect2.shapeColor = "yellow"; 
  }

  if(isTouching(rect2, sq2)) {
    sq2.shapeColor = "pink";
    rect2.shapeColor = "blue";
  }else{
    sq2.shapeColor = "white";
    rect2.shapeColor = "yellow"; 
  }

  drawSprites();
}

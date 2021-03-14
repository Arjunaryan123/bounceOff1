var movingrect,fixedrect;
var rect1,rect2;
var rect3,rect4;

function setup() {
 createCanvas(400,400);
 movingrect = createSprite(50, 200, 50, 50);
 movingrect.shapeColor="red";

 fixedrect = createSprite(200, 200, 50, 50);
 fixedrect.shapeColor="blue";

 rect1 = createSprite(30,50,40,60);
 rect1.shapeColor="green";

 rect2 = createSprite(30,350,40,60);
 rect2.shapeColor="brown";

 //rect1.velocityX=2;
 //rect2.velocityX=-2;

 rect1.velocityY=2;
 rect2.velocityY=-2;

 rect3 = createSprite(300,200,40,60);
 rect3.shapeColor="black";

 rect4 = createSprite(100,200,40,60);
 rect4.shapeColor="white";

}

function draw() {
  background("yellow");
  
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  // m.x-f.x=fixedwidth/2 + movingwidth/2  right
  //f.x-m.x=fixedwidth/2 + movingwidth/2  left
  //m.y-f.y<fixed.height/2+moving.height/2  bottom   
  //f.y-m.y<fixed.height/2+moving.height/2  top

  bounceOff(rect1,rect2);

  if(isTouching(movingrect,fixedrect)){
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  else{
    movingrect.shapeColor="red";
    fixedrect.shapeColor="blue";
  }

  if(isTouching(movingrect,rect3)){
    movingrect.shapeColor="green";
    rect3.shapeColor="green";
  }
  else{
    movingrect.shapeColor="red";
    rect3.shapeColor="black";
  }

  if(isTouching(movingrect,rect4)){
    movingrect.shapeColor="green";
    rect4.shapeColor="green";
  }
  else{
    movingrect.shapeColor="red";
    rect4.shapeColor="white";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object2.height/2+object1.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2){
   return true;
}
else{
 return false; 
}  
}

function bounceOff(rect1,rect2){
  if(rect1.x-rect2.x<rect2.width/2+rect1.width/2 &&
    rect2.x-rect1.x<rect2.width/2+rect1.width/2){
      rect1.velocityX=rect1.velocityX * (-1);
      rect2.velocityX=rect2.velocityX * (-1);
    }
  
    if(rect1.y-rect2.y<rect2.height/2+rect1.height/2 &&
      rect2.y-rect1.y<rect2.width/2+rect1.height/2){
        rect1.velocityY=rect1.velocityY * (-1);
      rect2.velocityY=rect2.velocityY * (-1); 
      } 
}
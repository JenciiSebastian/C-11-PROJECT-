var ship, shipping ;
var sea, sailing;

function preload(){
  shipping = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-3.png");
  sailing = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(100,160,20,50);
  sea.addImage(sailing);

  ship = createSprite(100,290,20,50);
  ship.addAnimation("running", shipping);
  ship.scale = 0.2;

}

function draw() {
  background("white");
 
  sea.velocityX = -2

  if(sea.x < 0){
    sea.x = sea.width / 2 ;
    }
   

  drawSprites();
}
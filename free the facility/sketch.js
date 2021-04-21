var canvas, backgroundImage;
var playerImg, zombieImg;
var player, player2, player3, player4,players;
var backgroundImg, background2Img;
var comp;

function preload(){


playerImg=loadImage("images/player.png")
zombieImg=loadImage("images/zombie.png")
backgroundImg=loadImage("images/background1.jpg")
background2Img=loadImage("images/background2.jpg")

}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  player= createSprite(200,100,10,10);
  player2= createSprite(300,300,10,10);
  player3= createSprite(400,400,10,10);
  player4= createSprite(500,100,10,10);
  
  player.addImage(playerImg);
  player2.addImage(playerImg);
  player3.addImage(playerImg);
  player4.addImage(playerImg);
  players=[player,player2,player3,player4];
  player4.scale=0.17;
  player.scale=0.5
  player2.scale=0.5
  player3.scale=0.5


  
}


function draw(){
  background(background2Img);
  createEdgeSprites();
  
var rand=Math.round(random(1,4))
switch(rand){
  case 1: player.addImage(playerImg);
   break;
  case 2: player2.addImage(playerImg);
   break;
  case 3: player3.addImage(playerImg);
   break;
  case 4: player4.addImage(zombieImg);
  break;
  default: break;}

  if(keyDown(UP_ARROW)){
    player.y=player.y-3
  }
  if(keyDown(DOWN_ARROW)){
    player.y=player.y+3
  }
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+3
  }
  if(keyDown(LEFT_ARROW)){
    player.x=player.x-3
  }

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
    textSize(20);
    text("Game over",400,200);
    
  }
 
  

  

  

  

    drawSprites();
  }


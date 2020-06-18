var box;
var zombiesGroup,zombiesGroup2;
var score=0;
var player;
var bulletGroup;
var life = 3;
var gameState = "play";
var infectedFloorCount = 0;
function setup() {
  createCanvas(1200,850);
  zombiesGroup = new Group();
  zombiesGroup2 = new Group();
  bulletGroup = new Group();
  createBuilding1();
  createBuilding2();
  createBuilding3();
  createBuilding4();
  createBuilding5();
  createBuilding6();
  helicopter1 = new Helicopter(100,50,50,50);
  helicopter2 = new Helicopter(1100,50,50,50);
  player1 = new Player(100,800,50,50);
}

function draw() {
  background("white"); 
  text("SCORE:"+score,100,300);
  text("LIVES LEFT:"+life,100,250);
  if(gameState === "play"&&life>0){
  
  player1.player.x = mouseX;
  if(helicopter1.helicopter.x>1200){
    helicopter1.helicopter.x = 0;
  }
  if(helicopter2.helicopter.x>1200){
    helicopter2.helicopter.x = 0;
  }
  if(keyDown("space")){
    createBullet(player1.player.x);
  }
  stroke("red");
  line(0,100,1200,100); 
  stroke("red");
  line(0,800,1200,800);
  stroke("red");
  line(1200,100,1200,800);
  createZombie(helicopter1.helicopter.x);
  createZombie2(helicopter2.helicopter.x);
  infection(zombiesGroup);
  infection(zombiesGroup2);
  destroyZombie(zombiesGroup);
  destroyZombie(zombiesGroup2);
}
if(life === 0){
  gameState = "end";
}
  drawSprites();
}
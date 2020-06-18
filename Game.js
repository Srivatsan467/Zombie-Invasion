function createZombie(x){
    if(frameCount%100 === 0){
      var zombie = createSprite(x,50,20,20);
      zombie.velocityY = 2;
      zombie.shapeColor = "green";
      zombiesGroup.add(zombie);     
    }
}
function createZombie2(x){
  if(frameCount%100 === 0){
    var zombie2 = createSprite(x,50,20,20);
    zombie2.velocityY = 2;
    zombie2 .shapeColor = "green";
    zombiesGroup2.add(zombie2);   
  }
}
function createBullet(x) {
  var bullet= createSprite(100,100,5,10);
  bullet.y = 850;
  bullet.x = player1.player.x;                                           
  bullet.shapeColor = "red";
  bullet.velocityY = -4;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
}
function infection(ZG){
    for(var i = 0;i<ZG.maxDepth();i++){
        var z = ZG.get(i);
        //building1
        if(z != null&&(z.isTouching(floor8.box))){
          floor8.box.shapeColor = "green";
          z.velocityY = 0.5;
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor7.box))){
          floor7.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor6.box))){
          floor6.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor5.box))){
          floor5.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor4.box))){
          floor4.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor3.box))){
          floor3.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor2.box))){
          floor2.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor1.box))){
          floor1.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        //building2
        if(z != null&&(z.isTouching(floor18.box))){
          floor18.box.shapeColor = "green";
          infectedFloorCount += 1;
          z.velocityY = 0.5;
        }
        if(z != null&&(z.isTouching(floor17.box))){
          floor17.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor16.box))){
          floor16.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor15.box))){
          floor15.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor14.box))){
          floor14.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor13.box))){
          floor13.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor12.box))){
          floor12.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor11.box))){
          floor11.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor10.box))){
          floor10.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor9.box))){
          floor9.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        //building3
        if(z != null&&(z.isTouching(floor23.box))){
          floor23.box.shapeColor = "green";
          infectedFloorCount += 1;
          z.velocityY = 0.5;
        }
        if(z != null&&(z.isTouching(floor22.box))){
          floor22.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor21.box))){
          floor21.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor20.box))){
          floor20.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor19.box))){
          floor19.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        //building4
        if(z != null&&(z.isTouching(floor30.box))){
          floor30.box.shapeColor = "green";
          infectedFloorCount += 1;
          z.velocityY = 0.5;
        }
        if(z != null&&(z.isTouching(floor29.box))){
          floor29.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor28.box))){
          floor28.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor27.box))){
          floor27.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor26.box))){
          floor26.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor25.box))){
          floor25.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor24.box))){
          floor24.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        //building5
        if(z != null&&(z.isTouching(floor36.box))){
          floor36.box.shapeColor = "green";
          infectedFloorCount += 1;
          z.velocityY = 0.5;
        }
        if(z != null&&(z.isTouching(floor35.box))){
          floor35.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor34.box))){
          floor34.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor33.box))){
          floor33.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor32.box))){
          floor32.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor31.box))){
          floor31.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        //building6
        if(z != null&&(z.isTouching(floor45.box))){
          floor45.box.shapeColor = "green";
          infectedFloorCount += 1;
          z.velocityY = 0.5;
        }
        if(z != null&&(z.isTouching(floor44.box))){
          floor44.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor43.box))){
          floor43.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor42.box))){
          floor42.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor41.box))){
          floor41.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor40.box))){
          floor40.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor39.box))){
          floor39.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor38.box))){
          floor38.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&(z.isTouching(floor37.box))){
          floor37.box.shapeColor = "green";
          infectedFloorCount += 1;
        }
        if(z != null&&z.isTouching(player1.player)){
          life = life - 1;
          player1.player.x = 550;
          z.destroy();
        }    
    }
}
function destroyZombie(ZGG){
  for(var i = 0;i<ZGG.maxDepth();i++){
    var o = ZGG.get(i);
    if(o != null&&bulletGroup.isTouching(o)){
      o.destroy();
      score = score + 15;
    }
  }
}
function createBuilding1(){
  floor1 = new Box(100,750,70,50);
  floor2 = new Box(100,700,70,50);
  floor3 = new Box(100,650,70,50);
  floor4 = new Box(100,600,70,50);
  floor5 = new Box(100,550,70,50);
  floor6 = new Box(100,500,70,50);
  floor7 = new Box(100,450,70,50);
  floor8 = new Box(100,400,70,50);
}
function createBuilding2(){
  floor9 = new Box(300,750,70,50);
  floor10 = new Box(300,700,70,50);
  floor11 = new Box(300,650,70,50);
  floor12 = new Box(300,600,70,50);
  floor13 = new Box(300,550,70,50);
  floor14 = new Box(300,500,70,50);
  floor15 = new Box(300,450,70,50);
  floor16 = new Box(300,400,70,50);
  floor17 = new Box(300,350,70,50);
  floor18 = new Box(300,300,70,50); 
}
function createBuilding3(){
  floor19 = new Box(500,750,70,50);
  floor20 = new Box(500,700,70,50);
  floor21 = new Box(500,650,70,50);
  floor22 = new Box(500,600,70,50);
  floor23 = new Box(500,550,70,50);
}
function createBuilding4(){
  floor24 = new Box(700,750,70,50);
  floor25 = new Box(700,700,70,50);
  floor26 = new Box(700,650,70,50);
  floor27 = new Box(700,600,70,50);
  floor28 = new Box(700,550,70,50);
  floor29 = new Box(700,500,70,50);
  floor30 = new Box(700,450,70,50);
}
function createBuilding5(){
  floor31 = new Box(900,750,70,50);
  floor32 = new Box(900,700,70,50);
  floor33 = new Box(900,650,70,50);
  floor34 = new Box(900,600,70,50);
  floor35 = new Box(900,550,70,50);
  floor36 = new Box(900,500,70,50);
}
function createBuilding6(){
  floor37 = new Box(1100,750,70,50);
  floor38 = new Box(1100,700,70,50);
  floor39 = new Box(1100,650,70,50);
  floor40 = new Box(1100,600,70,50);
  floor41 = new Box(1100,550,70,50);
  floor42 = new Box(1100,500,70,50);
  floor43 = new Box(1100,450,70,50);
  floor44 = new Box(1100,400,70,50);
  floor45 = new Box(1100,350,70,50);
}
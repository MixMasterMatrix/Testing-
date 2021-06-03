var gameState = "titleScreen";
var hitTargets = 0;
var timer = 60;


function preload() {
    level5 = loadImage("pics/7 star hotel.jpg");
    citizen2 = loadImage("pics/billy.png");
    citizen1 = loadImage("pics/bob.png");
    titlePage = loadImage("pics/cover screen.jpg");
    level1 = loadImage("pics/hitman background.jpg");
    citizen3 = loadImage("pics/mary.png");
    level4 = loadImage("pics/my private jet.jpg");
    nextBtn = loadImage("pics/next.png");
    level3 = loadImage("pics/nice restaurant.jpg");
    playBtn = loadImage("pics/play.png");
    citizen4 = loadImage("pics/some guy.png");
    level2 = loadImage("pics/some mall.jpg");
    targetImg1 = loadImage("pics/target.png");
    targetImg2 = loadImage("pics/weird target.png");
    targetImg3 = loadImage("pics/wannabe target.png");
    citizen5 = loadImage("pics/zoe.png");
    retryBtn = loadImage("pics/retry button.png");
    pistolImage = loadImage("pics/pistol image.png");

}




function setup() {
  createCanvas(1520,750);
  
  play = createSprite(width/2, height/2 + 150)
  play.addImage(playBtn);
  play.scale = 0.5;

  next = createSprite(1325,625);
  next.addImage(nextBtn);
  next.scale = 0.3;

  retry = createSprite(width/2, height/2 + 150);
  retry.addImage(retryBtn);
  retry.scale = 0.5;

  targetsGroup1 = new Group()
  targetsGroup2 = new Group()
  citizensGroup = new Group()

  pistol = createSprite(100,100);
  pistol.addImage(pistolImage);
  pistol.scale = 0.25;

  pistol.setCollider("circle",0,0,50);

  
}




function draw() {

  if(gameState === "titleScreen"){
    background(titlePage);
    play.visible = true;
    next.visible = false;
    retry.visible = false;
    pistol.visible = false;

    if(mousePressedOver(play)){
      gameState = "introScreen"
    }
  }
  


  if(gameState === "introScreen"){
    background("black");
    play.visible = false;
    next.visible = true;
    retry.visible = false;
    pistol.visible = false;

    fill("white")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    
    text("You are a secret agent who is hunting down various targets in the city", 1520/2, 625/2 - 150);
    text("who are suspected to be up to no good. Your job", 1520/2, 625/2 - 100) ;
    text("is to eliminate the targets, while not harming the citizens.", 1520/2, 625/2 - 50);
    text("This is a target.",900,410);
    text("This is a citizen.",900,570);

    imageMode(CENTER)
    image(targetImg1,450, 400, 150, 150);
    image(citizen1, 450, 550, 110, 150);

    stroke(255,255,255);
    strokeWeight(7);
    line(width/2,560,540,560)
    line(600,520,540,560);
    line(600,600,540,560);

    line(width/2,400,540,400)
    line(600,360,540,400);
    line(600,440,540,400);
   
    if(mousePressedOver(next)){
      gameState = "Level1"
    }
  }
  


  if(gameState === "Level1"){
    background(level1);    
    play.visible = false;
    next.visible = false;
    retry.visible = false;
    pistol.visible = true;
    pistol.x = mouseX;
    pistol.y = mouseY;
   
    if(targetsGroup1.isTouching(pistol)){
      hitTargets +=1;
      targetsGroup1[0].destroy();
    }

    if(targetsGroup2.isTouching(pistol)){
      hitTargets +=1;
      targetsGroup2[0].destroy();
    }

    if(citizensGroup.isTouching(pistol)){
      gameState = "retry2";
    }
    if(frameCount % Math.round(random(60,120)) === 0){
      spawnTargets1();
    }

    if(frameCount % Math.round(random(60,120)) === 0){
      spawnTargets2();
    }

    if(frameCount % Math.round(random(120,200)) === 0){
      spawnCitizens();
    }

    fill("black")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    text("Targets hit: " + hitTargets, 750, 60);

    if(frameCount % 30 === 0){
      timer -= 1;
  }

    fill("white");
    text("Time left: " + timer, 275, 60);
    text("Required Targets: 15", 1275,60)
    if(timer === 0 && hitTargets < 15){
      gameState = "retry1"
    }

    if(timer > 0 && hitTargets === 15){
      gameState = "introLevel2";
      timer = 60;
      hitTargets = 0;
    }

  }



  if(gameState === "introLevel2"){
    background("black");
    play.visible = false;
    next.visible = true;
    retry.visible = false;
    pistol.visible = false;

    fill("white")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    
    text("You Completed The Mission!", 1520/2, 625/2 - 50);
    text("Click Next to Move on to the Second Mission, the Mall!", 1520/2, 625/2) ;
   
    if(mousePressedOver(next)){
      gameState = "Level2"
    }
  }



  if(gameState === "Level2"){
    background(level2);    
    play.visible = false;
    next.visible = false;
    retry.visible = false;
    pistol.visible = true;
    pistol.x = mouseX;
    pistol.y = mouseY;
   
    if(targetsGroup1.isTouching(pistol)){
      hitTargets +=1;
      targetsGroup1[0].destroy();
    }

    if(targetsGroup2.isTouching(pistol)){
      hitTargets +=1;
      targetsGroup2[0].destroy();
    }

    if(citizensGroup.isTouching(pistol)){
      gameState = "retry2";
    }
    if(frameCount % Math.round(random(50,110)) === 0){
      spawnTargets1();
    }

    if(frameCount % Math.round(random(50,110)) === 0){
      spawnTargets2();
    }

    if(frameCount % Math.round(random(120,200)) === 0){
      spawnCitizens();
    }

    fill("white")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    text("Targets hit: " + hitTargets, 750, 60);
    
    if(frameCount % 30 === 0){
      timer -= 1;
  }

    fill("white");
    text("Time left: " + timer, 275, 60);
    text("Required Targets: 20", 1275,60);
    if(timer === 0 && hitTargets < 20){
      gameState = "retry1"
    }

    if(timer > 0 && hitTargets === 20){
      gameState = "introLevel3";
      timer = 60;
      hitTargets = 0;
    }

  }



  if(gameState === "introLevel3"){
    background("black");
    play.visible = false;
    next.visible = true;
    retry.visible = false;
    pistol.visible = false;

    fill("white")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    
    text("You Completed The Mission!", 1520/2, 625/2 - 50);
    text("Click Next to Move on to the Third Mission, the Restaurant!", 1520/2, 625/2) ;
   
    if(mousePressedOver(next)){
      gameState = "Level3"
    }
  }



  if(gameState === "Level3"){
    background(level3);    
    play.visible = false;
    next.visible = false;
    retry.visible = false;
    pistol.visible = true;
    pistol.x = mouseX;
    pistol.y = mouseY;
   
    if(targetsGroup1.isTouching(pistol)){
      hitTargets +=1;
      targetsGroup1[0].destroy();
    }

    if(targetsGroup2.isTouching(pistol)){
      hitTargets +=1;
      targetsGroup2[0].destroy();
    }

    if(citizensGroup.isTouching(pistol)){
      gameState = "retry2";
    }
    
    if(frameCount % Math.round(random(45,100)) === 0){
      spawnTargets1();
    }

    if(frameCount % Math.round(random(45,100)) === 0){
      spawnTargets2();
    }

    if(frameCount % Math.round(random(120,200)) === 0){
      spawnCitizens();
    }

    fill("black")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    text("Targets hit: " + hitTargets, 750, 60);
    
    if(frameCount % 30 === 0){
      timer -= 1;
  }

    fill("black");
    text("Time left: " + timer, 275, 60);
    text("Required Targets: 25", 1275,60);
    if(timer === 0 && hitTargets < 25){
      gameState = "retry1"
    }

    if(timer > 0 && hitTargets === 25){
      gameState = "introLevel4";
      timer = 60;
      hitTargets = 0;
    }

  } 



  if(gameState === "introLevel4"){
    background("black");
    play.visible = false;
    next.visible = true;
    retry.visible = false;
    pistol.visible = false;

    fill("white")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    
    text("You Completed The Mission!", 1520/2, 625/2 - 50);
    text("Click Next to Move on to the Fourth Mission, the Plane!", 1520/2, 625/2) ;
   
    if(mousePressedOver(next)){
      gameState = "Level4"
    }
  }



  if(gameState === "Level4"){
    background(level4);    
    play.visible = false;
    next.visible = false;
    retry.visible = false;
    pistol.visible = true;
    pistol.x = mouseX;
    pistol.y = mouseY;
   
    if(targetsGroup1.isTouching(pistol)){
      hitTargets +=1;
      targetsGroup1[0].destroy();
    }

    if(targetsGroup2.isTouching(pistol)){
      hitTargets +=1;
      targetsGroup2[0].destroy();
    }

    if(citizensGroup.isTouching(pistol)){
      gameState = "retry2";
    }
    
    if(frameCount % Math.round(random(40,90)) === 0){
      spawnTargets1();
    }

    if(frameCount % Math.round(random(40,90)) === 0){
      spawnTargets2();
    }

    if(frameCount % Math.round(random(120,200)) === 0){
      spawnCitizens();
    }

    fill("black")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    text("Targets hit: " + hitTargets, 750, 60);
    
    if(frameCount % 30 === 0){
      timer -= 1;
  }

    fill("black");
    text("Time left: " + timer, 275, 60);
    text("Required Targets: 30", 1275,60)
    if(timer === 0 && hitTargets < 30){
      gameState = "retry1"
    }

    if(timer > 0 && hitTargets === 30){
      gameState = "introLevel5";
      timer = 60;
      hitTargets = 0;
    }

  } 



  if(gameState === "introLevel5"){
    background("black");
    play.visible = false;
    next.visible = true;
    retry.visible = false;
    pistol.visible = false;

    fill("white")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    
    text("You Completed The Mission!", 1520/2, 625/2 - 50);
    text("Click Next to Move on to the Final Mission, the Hotel!", 1520/2, 625/2) ;
   
    if(mousePressedOver(next)){
      gameState = "Level5"
    }
  }



  if(gameState === "Level5"){
    background(level5);    
    play.visible = false;
    next.visible = false;
    retry.visible = false;
    pistol.visible = true;
    pistol.x = mouseX;
    pistol.y = mouseY;
   
    if(targetsGroup1.isTouching(pistol)){
      hitTargets +=1;
      targetsGroup1[0].destroy();
    }

    if(targetsGroup2.isTouching(pistol)){
      hitTargets +=1;
      targetsGroup2[0].destroy();
    }

    if(citizensGroup.isTouching(pistol)){
      gameState = "retry2";
    }
    
    if(frameCount % Math.round(random(30,80)) === 0){
      spawnTargets1();
    }

    if(frameCount % Math.round(random(30,80)) === 0){
      spawnTargets2();
    }

    if(frameCount % Math.round(random(120,200)) === 0){
      spawnCitizens();
    }

    fill("black")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    text("Targets hit: " + hitTargets, 750, 60);
    
    if(frameCount % 30 === 0){
      timer -= 1;
  }

    fill("black");
    text("Time left: " + timer, 275, 60);
    text("Required Targets: 45", 1275,60);
    if(timer === 0 && hitTargets < 45){
      gameState = "retry1"
    }

    if(timer > 0 && hitTargets === 45){
      gameState = "gameOver";
      timer = 60;
      hitTargets = 0;
    }

  }
  
  

  if(gameState === "gameOver"){
    background("black");
    play.visible = false;
    next.visible = false;
    retry.visible = true;
    pistol.visible = false;

    fill("white")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    
    text("Congratulations! You completed all the missions!", 1520/2, 625/2 - 50);
    text("To play again, click the retry button.", 1520/2, 625/2) ;
   
    if(mousePressedOver(retry)){
      gameState = "titleScreen";
    }
  }



  if(gameState === "retry1"){
    background("black")
    play.visible = false;
    next.visible = false;
    retry.visible = true;
    pistol.visible = false;
    
    fill("white");
    textSize(40);
    textFont("Segoe UI");
    textAlign(CENTER);
    text("You Failed!", width/2, height/2 - 150)
    text("You failed to eliminate all your targets, and you were dispatched from your mission.", width/2, height/2 - 50);

    if(mousePressedOver(retry)){
      gameState = "titleScreen";
      hitTargets = 0;
      timer = 60;
    }
  }



  if(gameState === "retry2"){
    background("black")
    play.visible = false;
    next.visible = false;
    retry.visible = true;
    pistol.visible = false;
    
    fill("white");
    textSize(40);
    textFont("Segoe UI");
    textAlign(CENTER);
    text("You were Caught!", width/2, height/2 - 150)
    text("You fired onto a citizen, and you were dispatched from your mission.", width/2, height/2 - 50);

    if(mousePressedOver(retry)){
      gameState = "titleScreen";
      hitTargets = 0;
      timer = 60;
    }
  }

  drawSprites()
  text(mouseX + ", " + mouseY, mouseX, mouseY);
}




function spawnTargets1(){
  
  target = createSprite(random(100,1500),random(50,575),100,100);
  target.lifetime = 60;
  target.scale = 0.3;

  var rand = Math.round(random(1,3));
  switch(rand){
    case 1:
      target.addImage(targetImg1);
      break;
    case 2:
      target.addImage(targetImg2);
      break;
    case 3:
      target.addImage(targetImg3);
      break;
  }

  targetsGroup1.add(target)
}




function spawnTargets2(){
  
    target = createSprite(random(100,1500),random(50,575),100,100);
    target.lifetime = 60;
    target.scale = 0.3;

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:
        target.addImage(targetImg1);
        break;
      case 2:
        target.addImage(targetImg2);
        break;
      case 3:
        target.addImage(targetImg3);
        break;
    }

    targetsGroup2.add(target)
  }




function spawnCitizens(){
  
    citizen = createSprite(random(100,1500),random(50,575),100,100);
    citizen.lifetime = 60;
    citizen.scale = 0.3;

    var rand = Math.round(random(1,5));
    switch(rand){
      case 1:
        citizen.addImage(citizen1);
        break;
      case 2:
        citizen.addImage(citizen2);
        break;
      case 3:
        citizen.addImage(citizen3);
        break;
      case 4:
        citizen.addImage(citizen4);
        break;
      case 5:
        citizen.addImage(citizen5);
        break;
      }
    citizensGroup.add(citizen)
  }

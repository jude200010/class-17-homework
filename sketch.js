//Game States
var PLAY=1;
var END=0;
var gameState=1;
var score
var knife;
var knifeImage ;
var fruit1_Image,fruit2_Image,fruit3_Image,fruit4_Image,end_Image;
var fruit1,fruit2,fruit3,fruit4;
var alien1_Image,alien2_Image,alien1,alien2;


function preload(){
  
  knifeImage = loadImage("knife.png");
  fruit1_Image = loadImage("fruit1.png");
  fruit2_Image = loadImage("fruit2.png");
  fruit3_Image = loadImage("fruit3.png");
  fruit4_Image = loadImage("fruit4.png");
  end_Image = loadImage("gameover.png");
  //aline1_Image = loadImage("alien1.png");
  //aline2_Image = loadImage("alien2.png");
  monsterImage = loadAnimation("alien1.png","alien2.png");
  
  gameOver = loadSound("gameover.mp3");
  knifeswoosh = loadSound("knifeSwoosh.mp3");
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
  
  monsterG= new Group()
  fruitG= new Group()
  
}

function draw() {
  background("lightblue");
  
  if (gameState===PLAY) {
knife.x=World.mouseX
knife.y=World.mouseY
  
  var select_item = Math.round(random(1,5));
  if (World.frameCount%100===0){
   if (select_item == 1) {
      fruit1()
    } else if (select_item == 2){
      fruit2()
    } else if (select_item == 3){
      fruit3()
    } else if (select_item == 4){
      fruit4()
   } else if  (select_item == 5){
      alien()
    }
     }
 
   if(knife.isTouching(fruitG)){
     fruitG.destroyEach()
     score=score+1
     knifeswoosh.play();
     }
   
   else
     
   if(knife.isTouching(monsterG)){
     monsterG.destroyEach()
     gameState=END;
     fruitG.destroyEach()
     monsterG.setVelocityXEach(0)
     fruitG.setVelocityXEach(0)
     knife.addImage(end_Image)
     knife.scale=2
     knife.x=300
     knife.y=200
     drawSprites();
     gameOver.play();
     
     
     }
   }
  
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}

function alien(){

 var alien2=createSprite(600,Math.round(random(30,400)),10,10)
  
  //alien2.addAnimation(alien1_Image)
  alien2.addAnimation("moving", monsterImage);
  alien2.velocityX=-6
  alien2.scale=0.75
  alien2.lifetime=150
  monsterG.add(alien2)
  
}

function fruit1(){
   var fruit1=createSprite(600,Math.round(random(30,400)),10,10)
    fruit1.addImage(fruit1_Image)
  fruit1.velocityX=-6
  fruit1.scale=0.2
  fruit1.lifetime=150
  fruitG.add(fruit1)
  }

function fruit2(){
   var fruit2=createSprite(600,Math.round(random(30,400)),10,10)
    fruit2.addImage(fruit2_Image)
  fruit2.velocityX=-6
  fruit2.scale=0.2
  fruit2.lifetime=150
  fruitG.add(fruit2)
  }

function fruit3(){
   var fruit3=createSprite(600,Math.round(random(30,400)),10,10)
    fruit3.addImage(fruit3_Image)
  fruit3.velocityX=-6
  fruit3.scale=0.2
  fruit3.lifetime=150
  fruitG.add(fruit3)
  }

function fruit4(){
   var fruit4=createSprite(600,Math.round(random(30,400)),10,10)
    fruit4.addImage(fruit4_Image)
  fruit4.velocityX=-6
  fruit4.scale=0.2
  fruit4.lifetime=150
  fruitG.add(fruit4)
  }

//Create variables here
var dog;
var database;
var gameState=0;
var form,game,player;
var playerCount;
var food;
var fedTime;
var DogImg,DogHappy,milkImg;
//var foodStock;

function preload()
{
  //load images here
  
  DogImg=loadImage("dogImg.png");
  
  DogHappy=loadImage("dogImg1.png");
 milkImg=loadImage("Milk.png");
  Bedroom=loadImage("Bed Room.png");
 Garden=loadImage("Garden.png");
 Washroom=loadImage("Wash Room.png");

}

function setup() {
  createCanvas(800, 750);
  
 dog=createSprite(400,350,50,50);
 dog.scale=0.14;
 dog.addImage(DogImg);
 

  database=firebase.database();
  var fedTimeRef=database.ref("lastFed");
  fedTimeRef.on("value",readTime);


  game=new Game();
  game.getState();
  game.getStock();
  game.start();

}


function draw() { 
     if(gameState==0){
       background(146, 93, 211);
     }
  
      if(gameState===1){    
        game.getStock(); 
      background(5,170,170);
      textSize(30);
      fill("white");
      text("Food remaining : "+food,280,250);
      text("Last fed at : "+fedTime,280,300);   
      //dog.addImage(DogImg);
      if(keyWentDown(UP_ARROW)){
      game.updateStock(food);
      fedTime=hour()+" : "+minute(); 
      var fed=hour();  
      writeTime(fedTime);
      }

      console.log(fed);
      var nowTime=hour();
      console.log(nowTime);
      if(nowTime==fed+1){
      Food.garden();
      }else if(nowTime==fed+2){
        Food.bedroom();
        }else if(nowTime==fed+3){
          Food.washroom();
          }else{
            Food.display();
          }

      var x=30,y=400;
      if(food!=0){
        for(var i=0;i<food;i++){       
            if(i%10==0){
                x=30;
                y+=100;
            }
            image(milkImg,x,y,60,70);
            x+=80;
           // x=x+30;
        }

        if(gameState==2){
          form.hide();
          Bedroomform=new BedRoom();
          
        }
      }

      drawSprites();

    }//if gameState=1 close

}

//database functions

function readTime(data){
  var fedTimeRef=database.ref("lastFed");
      fedTimeRef.on("value",function(data){
        fedTime=data.val();
      });
}

function writeTime(fedTime){
database.ref('/').update({
  lastFed:fedTime
})
}






















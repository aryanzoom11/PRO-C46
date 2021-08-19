var chrono
function preload(){





}
function setup(){
createCanvas(1000,500);
chrono=createSprite(100,400);
chrono.shapeColor="blue";

track1=createSprite(50,450,500,20)
track1.shapeColor="yellow"
track1.velocityX=-5

track2=createSprite(550,450,500,20)
track2.shapeColor="blue"
track2.velocityX=-5


}
function draw(){
background("red");
//resetting the ground
 if(track1.x<0){
   track1.x=50;
 }
 if(track2.x<0){
  track2.x=550;
}


chrono.velocityY=chrono.velocityY+0.7

chrono.collide(track1)
chrono.collide(track2)
//calling the keycontrol funtion
keyControls();
spawnCoin();





drawSprites()
}
// this is a function definition of keycontrols 



function keyControls(){
  if (keyDown (RIGHT_ARROW)) {
    chrono.x=chrono.x+5
      
      
    }
    if (keyDown (UP_ARROW)) {
      chrono.y=chrono.y-5
        
        
      }
      if (keyDown (DOWN_ARROW)) {
        chrono.y=chrono.y+5
          
          
        }
        if(keyDown("space")){
          chrono.velocityY=-4
        }
}
function spawnCoin(){
  if(frameCount%60==0){
    var coin=createSprite(random(50,1000),random(50,250),50,50)
    coin.velocityX=-7;
  }

}




























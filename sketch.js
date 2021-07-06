var cat,catIMG;
var catIMG2;
var garden,gardenIMG;
var mouse,mouseIMG,mouseIMG2,mouseIMG3;

function preload() {
   
  catIMG=loadAnimation("images/cat1.png");
  catIMG2=loadAnimation("images/cat4.png");
  gardenIMG=loadImage("images/garden.png");
  mouseIMG=loadAnimation("images/mouse1.png");
  mouseIMG3=loadAnimation("images/mouse3.png");
  mouseIMG2=loadAnimation("images/mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat=createSprite(600,600);
    cat.addAnimation("catSitting",catIMG);
    cat.scale=0.25;
    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseIMG2);
    mouse.scale=0.15;
}

function draw() {

    background(gardenIMG);
 //Write condition here to evalute if tom and jerry collide

if(cat.x-mouse.x<(cat.width+mouse.width)/2||mouse.x-cat.x<(cat.width+mouse.width)/2){
  cat.addAnimation("catHappy",catIMG2);
  cat.changeAnimation("catHappy");
  mouse.addAnimation("mousehappy",mouseIMG);
  mouse.changeAnimation("mousehappy");



}


    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseteasing",mouseIMG3);
// mouse.changeAnimation("mouseteasing");
mouse.frameDelay=25;
cat.x=cat.x-20;

}


}

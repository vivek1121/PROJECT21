var canvas;
var block1,block2,block3,block4;
var ball, edges;
var musicSound;

function preload(){
    // load sound here
    musicSound=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
   
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";


    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(510,582,180,30);
    block3.shapeColor = "red";

    block4 = createSprite(707,582,180,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY=4.5;
    ball.velocityX=-4.5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        musicSound.play();
    }



    if(block2.isTouching(ball)){
         ball.shapeColor = "orange";
         ball.velocityY = 0;
         ball.velocityX=0;
         musicSound.stop();         
           

    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        musicSound.play();
    }

    if(block4.isTouching(ball) && ball.bouncOff(block4)){
        ball.shapeColor = "green";
        musicSound.play();
    }

    
    drawSprites();
}

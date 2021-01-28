var canvas,wallpaperImage;
var tomImg1, tomImg1,tomImg2;
var jerryImg1, jerryImg1,jerryImg2;

function preload() 
{
    wallpaperImage = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");

}

function setup()
{
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;
    

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

    tom.addAnimation("tomLastImage", tomImg3);
    jerry.addAnimation("jerryLastImage", jerryImg3);
    tom.addAnimation("tomRunning", tomImg2);
    jerry.addAnimation("jerryTeasing", jerryImg2);
}

function draw() 
{

    background(wallpaperImage);
    if(keyDown("left"))
    {
        tom.velocityX=-5;
        
        tom.changeAnimation("tomRunning");        
        jerry.changeAnimation("jerryTeasing");
    }
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");

        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}




//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var Can,can
var Bottles,bott
var packet,pack
var converter,cimg
var score =0;
var bgimg
var plastic

function preload()
{
	can=loadImage("can.png")
	bott=loadImage("bottle.png")
	pack=loadImage("packet.png")
	cimg=loadImage("converter.png")
	bgimg=loadImage("bg.jpg")

	
}

function setup() {
	createCanvas(800, 700);


	
					

					 plasticGroup= new Group()


	
  
}


function draw() {
 // rectMode(CENTER);
  background(bgimg);

  if (frameCount % 5 === 0) {
	plastic= createSprite(random(100, 1000), 0, 100, 100);
   plastic.velocityY = 6;
   var rand = Math.round(random(1,5));
   switch(rand){
	   case 1: Bottles.addImage(bott);
	   break;
	   case 2: packet.addImage(pack);
	   break;
	   case 3: Can.addImage(can);
	   break;
   }
   plasticGroup.add (plastic);
   }
   converter=createSprite(400,600)
   converter.addImage(cimg)
   converter.scale=0.5

  
  drawSprites();
 
}




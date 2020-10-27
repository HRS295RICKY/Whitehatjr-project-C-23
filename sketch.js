var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var keyPressed;
var boxsidebottom,boxsideright,boxsideleft;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	
	boxsidebottom = createSprite(375,640,200,20);
	boxsidebottom.shapeColor = ("red");
	


	boxsideleft = createSprite(285,580,20,100);
	boxsideleft.shapeColor = ("red");
	

	boxsideright = createSprite(465,580,20,100);
	boxsideright.shapeColor = ("red");
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	bottombody = Bodies.rectangle(375,630,200,20,{isStatic : true});
	World.add(world,bottombody);

	leftbody = Bodies.rectangle(300,580,20,100,{isStatic : true});
	World.add(world,leftbody);

	rightbody = Bodies.rectangle(490,580,20,100,{isStatic : true});
	World.add(world,rightbody);

	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}




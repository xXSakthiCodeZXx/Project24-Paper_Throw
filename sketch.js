
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	rect1 = new Box(1000,250,20,100);
	rect2 = new Box(1200,250,20,100);
	rect3 = new Box(1100,300,200,20);

	floor = new Box(800,310,1600,20);

    ball = new Paper(200,300,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rect1.display();
  rect2.display();
  rect3.display();

  floor.display();

  ball.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {

		//Matter.Body.setStatic(ball.body, false);
		Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-20});
	}
}


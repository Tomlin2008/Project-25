//extracting constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creatiing variables
var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;

function preload() {

	//loading variables
	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");

}


function setup() {

	//creating canvas
	createCanvas(1300, 650);

	//fixing center of mass
	rectMode(CENTER);

	//creating an engine and a world
	engine = Engine.create();
	world = engine.world;

	//setting properties of paper ball
	var ball_options={

		isStatic:false,
		restitution:0.3,
		density:0.4

		}

	//creating body of paper ball
	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	//creating bodies using classes
	ground=new Ground(width/2,620,width,20);
	leftSide = new Ground(1000,550,10,120);
	rightSide = new Ground(1170,550,10,120);
	bottomSide = new Ground(1085,600,150,20);

	//running the engine
	Engine.run(engine);
  
}


function draw() {

	//setting background colour
	background(225);

	//fixing center of mass
	rectMode(CENTER);

	//displaying bodies
	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	//fixing center of image
	imageMode(CENTER);

	//adding image to paper ball
	image(paperImg,ball.position.x,ball.position.y,radius,radius);
	
	//adding image to dustbin
	image(dustbinImg, 1085, 515, 200,200);
	
}

//function to throw the paper ball in the dustbin
function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:45,y:-55});
    
  	}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var block, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1 = new Ball(400,400);
	ball2 = new Ball(450,400);
	ball3 = new Ball(500,400);
	ball4 = new Ball(350,400);
	ball5 = new Ball(300,400);
  block = new Block(400,200,550,30); 
  rope1 = new Rope(ball1.body, block.body, 0, 0);``
  rope2 = new Rope(ball2.body, block.body,50,0);
  rope3 = new Rope(ball3.body, block.body,100, 0);
  rope4 = new Rope(ball4.body, block.body, -50, 0);
  rope5 = new Rope(ball5.body, block.body, -100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  block.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 }
 function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball3.body, ball5.body.position,{x:35,y:-50});
   }
 }







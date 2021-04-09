
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world,engine;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var ground;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  
   bob1 = new Bob();
	 bob2 = new Bob();
	 bob3 = new Bob();
	 bob4 = new Bob();
	 bob5 = new Bob();
   ground = new Roof(250,200,150,20);
   rope1 = new Chain(bob1.body,ground.body,-BobDiameter*2,0);
	 


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  drawSprites();
 
}
function keyPressed() {
   if (keyCode === UP_ARROW) { 
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
   } 
 }



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var object;
var ground;
var stand1,stand2;

function preload(){
  
}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
  
  ground = new Ground();
  stand1 = new Stand(380,300,250,10);
  stand2 = new Stand(700,200,200,10);

  //level one
  bottle1 = new Bottle(290,100,10);
  console.log(bottle1);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
}

function draw() {
  background("white");
  Engine.update(engine);
  
  fill("black");
  stand1.display();
  stand2.display();
  ground.display();

  fill("red");
  bottle1.display();

  fill("gold");
  
}
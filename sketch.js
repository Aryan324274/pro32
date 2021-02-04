
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
    
}

function setup(){
    createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

car=new Carsafe(200,200,20,20)


	Engine.run(engine);
    
}

function draw(){
    rectMode(CENTER);
  background(0);
 car.display();


  drawSprites();
    
} 

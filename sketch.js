const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paperBall;
var ground;
var Box1,Box2,Box3,BoxImage;

function preload(){
  BoxImage = loadImage("dustbingreen.png")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create(); 
  world=engine.world;

  paperBall = new Paper(56,55,50);
  ground = new Ground(400,height,800,20);
   
  Box1 = new Dustbin(700,345,100,100);
  Box2 = new Dustbin(750,345,100,100);
  Box3 = new Dustbin(710,375,150,15);
  

}

function draw() {
  background("white");  
  Engine.update(engine);
  image(BoxImage,700,300,100,100);
  Dustbin.debug = true;
  ground.display();
  paperBall.display();
  Box1.display();
  Box2.display();
  Box3.display();


  drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:200,y:-200});
}

}
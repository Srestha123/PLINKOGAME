
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,div;
var plinkos = [];
var particles = [];
var divisions = [];
function preload()
{
}
function setup() {
	createCanvas(480, 800);
	engine = Engine.create();
	world = engine.world;
  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Ball(j,75));
  }
  for(var j = 25; j<=width; j=j+50){
    plinkos.push(new Ball(j,175));
  }
  for(var j = 10; j<=width; j=j+50){
    plinkos.push(new Ball(j,275));
  }
  for(var j = 50; j<=width; j=j+50){
    plinkos.push(new Ball(j,375));
  }
  for(var j =0; j<=width; j=j+60){
    divisions.push(new Division(j,500));
  }
  
  ground=new Block(240,600);
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
   ptcl();
  for(var j=0; j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var j=0; j<particles.length;j++){
    particles[j].display();
  }
  for(var j=0; j<divisions.length;j++){
    divisions[j].display();
  }
  ground.display();
  drawSprites();
}
function ptcl(){
  if(frameCount%60===0){
    particles.push(new Particle(random(100,380),10,10));
  }
}



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var divisions = [];
var plinkos = [];
var particles = [];

function setup() {

  createCanvas(480,800);

  ground = createSprite(240,700,480,20);

  for(var k  = 0; k <= width; k = k+80){
    divisions.push(new Division(k, 550, 20, 300));
  }

  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j = 15; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }
  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j = 15; j <= width; j = j+50){
    plinkos,push(new Plinko(j, 375));
  }

}

function draw() {

  background(0);  

  if(frameCount%90===0) {
    particle = new Particle(random(230, 250), 10,10);
  }

  for(var j = 0; j < particles.lenght; j++){
    particles[j].display();
  }
  for(var k = 0; k < divisions.lenght; k++){
    divisions[k].display();
  }
  for(var k = 0; i < plinkos.lenght; i++){
    plinkos[i].display();
  }
  
  drawSprites();
}
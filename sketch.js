const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player;
var ground;

function preload(){
  bgImg = loadImage("snow2.jpg");
  snowImg = loadImage("snow4.webp");
  // kidImg = loadImage("kid.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,400,800,1);
  ground.visible = false;
  player = new Player(600,300,20,20);
  // player = createSprite(600,300,20,20);
  
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  
  if(frameCount%8===0){
    var snow = createSprite(400,0,30,30);
    snow.x = random(0,800);
    snow.scale = 0.07;
    snow.velocityY = 2;
    snow.addImage("snowImage",snowImg);
  }
  
  ground.display();
  player.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-0.009});
    console.log("Player Jumped");
	}
}
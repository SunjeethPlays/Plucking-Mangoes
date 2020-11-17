
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy, tree;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;
var catapult;

function preload()
{
  boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}


function setup() {
	createCanvas(2000, 700);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground (1000,740,2000,100);

  stone = new Stone (200,450,60);
  
  catapult = new Catapult (stone.body,{x:210,y:540});

	mango1 = new Mango (1300,320,60,60);
	mango2 = new Mango (1410,200,60,60);
	mango3 = new Mango (1400,300,60,60);
	mango4 = new Mango (1400,390,60,60);
	mango5 = new Mango (1500,350,60,60);
	mango6 = new Mango (1500,190,60,60);
	mango7 = new Mango (1500,270,60,60);
	mango8 = new Mango (1600,240,60,60);
	mango9 = new Mango (1600,350,60,60);
	mango10 = new Mango (1670,280,60,60);
	mango11 = new Mango (1730,330,60,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  Engine.update(engine);

  imageMode(CENTER);
  image(tree,1500,420,600,600);
  image(boy,300,610,300,300);

  keyPressed();

  ground.display();

  stone.display();

  catapult.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);
  detectcollision(stone,mango11);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
  catapult.fly();
}

function keyPressed(){
  if(keyCode === 32){
     catapult.attach(stone.body);
  }
}

function detectcollision(lstone,lmango) {

  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if (distance <=lmango.r+lstone.r) {

    Matter.Body.setStatic(lmango.body,false);
  }
}

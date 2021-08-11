
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	, paperObject
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject = new Paper(200,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display()

  if(keyDown("up_arrow")){
	Matter.Body.applyForce(paperObject.paper,paperObject.paper.position,{x:19,y:-30})
	console.log("ho")
}
//keyDown()

  drawSprites()
}

//function keyPressed(){
//	if(keyDown(up_arrow)){
//		Matter.Body.applyForce(paperObject.boby,paperObject.body.position,{x:130,y:-145})
//	}
  // console.log("hi")
//}

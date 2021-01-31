

const Engine = Matter.Engine;
const World = Matter.World;

const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyS,treeS,groundS,stoneS,m1,m2,m3,m4,m5,m6,m7,m8,Launch
function preload()
{
	boy=loadImage("boy.png")
}
function setup() {
	engine = Engine.create();
	world = engine.world;
  createCanvas(800, 700);
  stoneS=new stone(50,500,40)
boyS=createSprite(120,570,40,40)
boyS.addImage(boy)
boyS.scale=0.13
treeS=new tree(340,60,480,690)
treeS.scale=0.1	
groundS=new ground(400,700,820,20)
m1=new mango(500,200,80);
m2=new mango(595,345,80);
m3=new mango(634,179,70);
m4=new mango(520,268,70);
m5=new mango(700,320,70);
m6=new mango(690,268,80);
m7=new mango(450,340,67);
Launch=new SlingShot(stoneS.body,{x:50,y:500})
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {   
  rectMode(CENTER);
  background(255,255,255);
  
  treeS.display();
  
  ;groundS.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
Launch.display();
  stoneS.display() 
   detectCollision(stoneS,m7);
   detectCollision(stoneS,m6);
   detectCollision(stoneS,m5);
  detectCollision(stoneS,m4);
  detectCollision(stoneS,m3);
  detectCollision(stoneS,m2);
  detectCollision(stoneS,m1);

  //// detectCollision(stoneS)
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stoneS.body,{x:mouseX,y:mouseY})  
}


function mouseReleased(){
 Launch .fly();

}
function keyPressed(){
    if(keyCode === 32){
     
        Matter.Body.setPosition(stoneS.body,{x:50,y:500})
       Launch.attach(stoneS.body);
    }
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position 
  stoneBodyPosition=lstone.body.position
   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r)
   { Matter.Body.setStatic(lmango.body,false) } }
class mango{
  constructor(x,y,r){
var options={
restitution:0.3,
friction:0.5,
isStatic:true, 
density:0.8
}
this.r=r
this.body=Bodies.circle(x,y,r,options)
this.image =loadImage("mango.png");

//this.colour=color(ramdom(0,255),ramdom(0,255),ramdom(0,255))
World.add(world,this.body) 
}
display(){
var paperpos=this.body.position;
push()
translate(paperpos.x,paperpos.y)
image(this.image, 0, 0, this.r,this.r);
strokeWeight(3)
fill(255,0,255)

pop()   
}//
}
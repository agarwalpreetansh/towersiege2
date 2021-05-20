const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var engine, world;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;

var ground1;
var launcher;

var hitter;



function setup() {
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world;

block1=new Block(630,235,30,40);
block2=new Block(690,235,30,40);
block3=new Block(720,235,30,40);
block4=new Block(750,235,30,40);
block5=new Block(660,235,30,40)

block6=new Block(660,195,30,40)
block7=new Block(690,195,30,40)
block8=new Block(720,195,30,40)

block9=new Block(690,155,30,40)

ground1=new Ground(700,260,200,5)

hitter=new Hitter(200,200,50)


launcher=new Launcher(hitter.body,{x:200,y:100})

}

function draw() {
  background("lightblue");  
  Engine.update(engine)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ground1.display();
  hitter.display();
  launcher.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(hitter.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 launcher.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(hitter.body,{x:200,y:100})
    Matter.Body.setAngularVelocity(hitter.body,0)
    Matter.Body.setAngle(hitter.body,0)
       
      launcher.attach(hitter.body);
  }
}
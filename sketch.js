 var Engine = Matter.Engine,
 World = Matter.World,
 Bodies = Matter.Bodies;
var Pad
var ball
var bricks=[]
var floor
var wall1
var wall2
var engine,world
function setup() {
  createCanvas(800,500);
  engine=Engine.create();
   world=engine.world;
 // console.log(windowWidth/75)

 for(var i=50;i<windowWidth;i=i+50){
   bricks.push(new Brick(i,75))
 }
 for(var i=50;i<windowWidth;i=i+50){
  bricks.push(new Brick(i,105))
 }
 for(var i=50;i<windowWidth;i=i+50){
  bricks.push(new Brick(i,135))
 }
 for(var i=50;i<windowWidth;i=i+50){
  bricks.push(new Brick(i,165))
 }
 for(var i=50;i<windowWidth;i=i+50){
  bricks.push(new Brick(i,195))
 }
 
 pad= new Paddle(390,450,200,20)
 ball= new Ball(300,400)
// fill("orange");
 
wall1= new Wall(10,height/2,17,height)
wall2= new Wall(792,height/2,17,height)
//fill("white")
 floor= new Ground(width/2,492,800,17)
}


function draw() {
  background(0);
  Engine.update(engine);
 
 wall1.display();
 wall2.display()
 floor.display();
  pad.display();
  ball.display();
  for(var i=0;i<bricks.length;i++){
    bricks[i].display()
  }
  pad.move()  ;
  
}


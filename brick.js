class Brick{
constructor(x,y){
  var options={
      restitution:0.4,
      friction:0,
      isStatic:true
  }
  
  this.body=Bodies.rectangle(x,y,this.width,this.height,options)
 
  this.width=40;
  this.height=20;
  World.add(world, this.body);
}
display(){
    var angle = this.body.angle;
    var c=["white","red","green","blue","yellow"]
    var pos=this.body.position
    push(); 
  translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER)
    fill (c[Math.floor(Math.random()*4+1)])
    rect(0,0,this.width,this.height)
  pop ();
}

}
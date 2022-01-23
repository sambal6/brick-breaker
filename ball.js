class Ball {
    constructor(x,y) {
        var options = {
            restitution: 2,
            friction: 0,
            isStatic:false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
      
        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
        pop();
    }

};
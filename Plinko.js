class Plinko {
    constructor(x, y, radius){
        
        var options = {
        isStatic: true,
        'restitution':0.5,
        'friction':1.0,
        'density':1.0

    }
    this.body = Bodies.circle(x, y, 10, options);
    this.radius = 10;
    World.add(world, this.body);
}
display(){
    fill("green");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
  }
}
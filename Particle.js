class Particle {
    constructor(x, y, radius){
      var options = {

        restitution:0.5,
        isStatic: false
    }

    this.body = Bodies.circle(x, y, this.radius, options);
    this.radius = radius; 
    this.color = color(random(0,255), random(0,255), random(0,255));
    World.add(world, this.body);
}
display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    ellipseMode(CENTER);
    ellipseMode(RADIUS);
    ellipse(0,0, this.radius, this.radius);
    pop();
  }
};
class Stone {

    constructor (x,y,radius,angle) {

        this.radius = radius;

        var options = {
            isStatic:false,
            restitution:0,
            frition:1,
            density:1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        this.image = loadImage("stone.png");
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}
class Mango {

    constructor(x,y,radius) {

        this.radius = radius;

        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        this.image = loadImage ("mango.png");

    }

    display () {

        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();

    }
}
class Ground {

    constructor(x,y,width,height) {

    this.height = height;
    this.width = width;

    var options = {
        isStatic:true,
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);

    }

    display() {

        var pos = this.body.position;

        push();
        rectMode(CENTER);
        fill("grey");
        rect(pos.x,pos.y,this.width,this.height);
        pop();

    }
}
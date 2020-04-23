class Box {
    constructor(x,y,w,h){
        var options = {
            restitution:0.5,
            friction:0
        }
        this.width = w;
        this.height = h;

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display(){
        fill("red")
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
}


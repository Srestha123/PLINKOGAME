class Ball{
    constructor(x,y){
        var options={
            isStatic:true,
            density:3
        }
        this.radius=10;
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    }
    display(){
        var a=this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(a.x,a.y,this.radius+10,this.radius+10);
    } 
}
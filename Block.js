class Block{
    constructor(x,y){
        var options={
            isStatic:true  
        }
        this.width=700;
        this.height=20;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
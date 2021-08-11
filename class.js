class Paper {

    constructor(x,y){

var paperOptions ={
    isStatic : false,
    restitution :  0.3,
    friction : 0,
    density:1.2
}
    this.paper = Bodies.rectangle(x, y,30,30,paperOptions);
    this.x = x
    this.y = y
        //this.width = width;
        //this.height = height;
        this.image = loadImage("paper.png");
        World.add(world, this.paper);
      

    }

    display(){
        push()
        translate(this.paper.position.x ,this.paper.position.y)
      //  rotate(250  )
        imageMode(CENTER);
        image(this.image,0,0,30,30 );
        pop()
       
    }
}
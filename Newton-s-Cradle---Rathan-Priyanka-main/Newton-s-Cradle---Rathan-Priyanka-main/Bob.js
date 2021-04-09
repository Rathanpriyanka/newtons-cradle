class Bob {

    constructor() {
    var options = {
    isStatic : true,
    restitution: 0.3,
    friction:0.5,
    density:1.2
    }
    this.bob1 = Matter.Bodies.circle(200,380,15,options);
    this.bob2 = Matter.Bodies.circle(230,380,15,options);
    this.bob3 = Matter.Bodies.circle(260,380,15,options);
    this.bob4 = Matter.Bodies.circle(290,380,15,options);
    this.bob5 = Matter.Bodies.circle(320,380,15,options);
    World.add(world,this.bob1);
    World.add(world,this.bob2);
    World.add(world,this.bob3);
    World.add(world,this.bob4);
    World.add(world,this.bob5);
    }
    display() {
    
    ellipseMode(RADIUS)
    fill("pink");
    ellipse(200,380,15,15);
    ellipse(230,380,15,15);
    ellipse(260,380,15,15);
    ellipse(290,380,15,15);
    ellipse(320,380,15,15);
    }
    
    
    }
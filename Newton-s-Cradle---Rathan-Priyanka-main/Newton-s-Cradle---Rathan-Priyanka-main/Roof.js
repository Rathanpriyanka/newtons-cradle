class Roof {

constructor(x,y,width,height,check) {
var options = {isStatic : check}
this.ground = Bodies.rectangle(x,y,width,height);
this.width = width;
this.height = height;
}
display() {

fill("yellow");
rect(this.ground.position.x,this.ground.position.y,this.width,this.height);

}

}
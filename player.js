class Player{
	constructor(x,y,width,height){
	  var options = {
		'restitution':0.1,
		'friction':0.07,
	  }
	  
	  this.image=loadImage("kid.png");
	  this.body=Bodies.rectangle(x,y,width,height,options);
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  World.add(world, this.body);
	  }
  
	  display(){
		var pos=this.body.position;
		push();
		// fill("yellow");
		rectMode(CENTER);
	    imageMode(CENTER);
		image(this.image,pos.x,pos.y,this.width,this.height);
		pop();
   }
  }
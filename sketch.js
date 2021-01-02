const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var options= {
    isStatic: true
  }

  var options2={
    restitution: 1,
    //friction: 2
  }

  object=Bodies.circle(200,200,50,options2);
  World.add(world, object);

  ground=Bodies.rectangle(400,380,800,10, options);
  World.add(world, ground);
}

function draw() {
  background(0,0,0);
  Engine.update(engine);  
  rectMode(CENTER);
  rect (400,200,50,50);

  ellipse(object.position.x, object.position.y, 50);
  rect(ground.position.x, ground.position.y, 800,10);
}
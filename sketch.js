const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;


function setup() {
  createCanvas(400,400);

  //creating physics engine
  engine = Engine.create();
  //creating a world using physics engine
  world = engine.world;

  var ground_options = {
    isStatic : true
  }
  //creating ground
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  //add the ground to the world
  World.add(world, ground);
  var ball_options = {
    restitution : 1.0
  }
  //creating ball
  ball = Bodies.circle(200,100,20,ball_options);
  //add the ball to the world
  World.add(world, ball);

  //console.log(object);
  //console.log(object.type);
  //console.log(object.position);
  //console.log(object.position.x);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}
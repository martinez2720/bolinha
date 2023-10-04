
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, block1, block2;
var rotator1, rotator2, rotator3;
var particle1, particle2, particle3, particle4, particle5;
var angle1, angle2, angle3;

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  // Ajustar o tamanho da tela
  var canvasMouse = Matter.Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  var options = {
    mouse: canvasMouse
  };
  var mConstraint = Matter.MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  // Criar o corpo plano (ground)
  ground = Bodies.rectangle(width/2, height, width, 50, { isStatic: true });
  World.add(world, ground);

  // Criar os corpos retangulares block1 e block2
  block1 = Bodies.rectangle(200, 500, 200, 20, { isStatic: true });
  block2 = Bodies.rectangle(600, 500, 200, 20, { isStatic: true });
  World.add(world, [block1, block2]);

  // Criar os corpos de rotadores (rotator1, rotator2, rotator3)
  rotator1 = Bodies.rectangle(400, 300, 150, 20,  { isStatic: true });
  rotator2 = Bodies.rectangle(400, 300, 150, 20, { isStatic: true });
  rotator3 = Bodies.rectangle(400, 300, 150, 20,  { isStatic: true });
  World.add(world, [rotator1, rotator2, rotator3]);

  // Criar os corpos de partículas
  particle1 = Bodies.circle(380, 200, 10);
  particle2 = Bodies.circle(400, 200, 10);
  particle3 = Bodies.circle(420, 200, 10);
  particle4 = Bodies.circle(400, 230, 10);
  particle5 = Bodies.circle(400, 250, 10);
  World.add(world, [particle1, particle2, particle3, particle4, particle5]);

  // Ajustar restituição e atrito dos corpos de partículas
  var particleOptions = {
    restitution: 0.4,
    friction: 0.02
  };
  particle1.restitution = particleOptions.restitution;
  particle2.restitution = particleOptions.restitution;
  particle3.restitution = particleOptions.restitution;
  particle4.restitution = particleOptions.restitution;
  particle5.restitution = particleOptions.restitution;
  particle1.friction = particleOptions.friction;
  particle2.friction = particleOptions.friction;
  particle3.friction = particleOptions.friction;
  particle4.friction = particleOptions.friction;
  particle5.friction = particleOptions.friction;
}

function draw() {
  background(51);
  

  Engine.update(engine);

  // Desenhar os corpos retangulares block1 e block2
  rectMode(CENTER);
  rect(block1.position.x, block1.position.y, 200, 20);
  rect(block2.position.x, block2.position.y, 200, 20);

  // Desenhar os corpos de rotadores
  Matter.Body.rotate(rotator1,angle1);
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  pop();
  angle1 += 0.2;

  Matter.Body.rotate(rotator2,angle2);
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop();
  angle2 += 0.5;

  Matter.Body.rotate(rotator3,angle3);
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  pop();
  angle3 += 0.8;

 
  // Desenhar os corpos de partículas
  ellipseMode(RADIUS);
  ellipse(particle1.position.x, particle1.position.y, 10, 10);
  ellipse(particle2.position.x, particle2.position.y, 10, 10);
  ellipse(particle3.position.x, particle3.position.y, 10, 10);
  ellipse(particle4.position.x, particle4.position.y, 10, 10);
  ellipse(particle5.position.x, particle5.position.y, 10, 10);

  // Desenhar o corpo plano (ground)
  rectMode(CENTER);

  rect(ground.position.x, ground.position.y, width, 50);
}



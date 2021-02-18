const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;

var engine, world;
var box1,box2,box3,box4,box5,log;
var Wball1,Wball2,chain1,chain2,Wball3,Wball4,chain3,chain4;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(540,100,300,20);

    //box1 = new Box(700,320,70,70);
    //box2 = new Box(770,320,70,70);
    //box3 = new Box(700,240,70,70);
   // box4 = new Box(770,240,70,70);
   // box5 = new Box(735,160,70,70);

    Wball1 = new MyPolygon(500,320,40);
    chain1 = new WreckingChain(Wball1.body,{x:500,y:100});

    Wball2 = new MyPolygon(580,320,40);
    chain2 = new WreckingChain(Wball2.body,{x:580,y:100});

    Wball3 = new MyPolygon(660,320,40);
    chain3 = new WreckingChain(Wball3.body,{x:660,y:100});

    Wball4 = new MyPolygon(320,60,40);
    chain4 = new WreckingChain(Wball4.body,{x:420,y:100});
}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);
   // box1.display();
   // box2.display();
    ground.display();
    //box3.display();
    //box4.display();
    //box5.display();
    Wball1.display();
    chain1.display();
    Wball2.display();
    chain2.display();
    Wball3.display();
    Wball4.display();
    chain3.display();
    chain4.display();
}

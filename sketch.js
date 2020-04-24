
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 65);
    
    
    ground = new Ground(200,390,400,20);

}
 
function mouseClicked() {
    if (mouseY < 350) {
    // boxes created between random size 10 - 100
        random_width = random(10, 100);
        random_height = random(10, 100);
        // a box is spawned at the mouse click
        var box = new Box(mouseX,mouseY,random_width,random_height);
        boxes.push(box);
    }    
}
 
function draw() {
    Engine.update(engine);
    // Draw all the elements including the slider that 
    background(200);
    ground.display();
    // This is the value of your gravity. You can optionally show it to the viewer.
    for(var i=0; i<boxes.length; i++){
        boxes[i].display();
    }
    var g = map(gSlider.value(),0,100,0,1); 
    text("Gravity " + g, 160, 65);

    
    engine.world.gravity.y =  g

}

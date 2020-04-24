
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes 
 
var ground;
var gSlider;
 
var box;
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    
    var ground_option = {
        isStatic : true
    }
    // boxes created between random size 10 - 100
    random_width = random(10, 100);
    random_height = random(10, 100);
    random_x = random(50,350);
    random_y = random(50,350)
    box = new Box(random_x,random_y,random_width,random_height);  
    
}
 
function mouseClicked() {
    
    
    
}
 
function draw() {
    Engine.update(engine);
    // Draw all the elements including the slider that 
    background(200);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    // console.log(box)
    box.display();
    

    
    
}

   


 
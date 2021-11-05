var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var clouds;
var cloudsimg;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png");
    cloudsimg = loadImage("cloud.png");

}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50, 160, 20, 50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200, 180, 400, 20);
    ground.addImage("ground", groundImage);
    ground.x = ground.width / 2;
    ground.velocityX = -4;

    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;

    var ran = Math.round(random(10, 60));
    console.log(ran);
}

function draw() {
    background(220);
    //jump when the space button is pressed
    if (keyDown("space")&&trex.y >= 161 ) {
        trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8;
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);

    spawnClouds();

    drawSprites();
    
}
function spawnClouds(){
    
    if(frameCount %90 === 0){
    clouds = createSprite(600,100,40,10);
    clouds.addImage(cloudsimg);
    clouds.y = Math.round(random(10,60));
    clouds.scale = 0.4;
    clouds.velocityX = -3;
    console.log(trex.depth,clouds.depth);
    clouds.depth = trex.depth;
    trex.depth = trex.depth+1;
    }
}
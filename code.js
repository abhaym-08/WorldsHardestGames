var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7be83a0d-e13e-4854-945f-84c44ce9ae7f","b4ed6357-d1c0-48e5-985d-d4012d5a94e6","09b34178-4383-485d-ba2e-70103eef9f9c","9d5bf5e7-bc51-49a5-a9db-851e09ad3fb1","015d42f3-732d-404e-a14f-2f18871f3209"],"propsByKey":{"7be83a0d-e13e-4854-945f-84c44ce9ae7f":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"b4ed6357-d1c0-48e5-985d-d4012d5a94e6":{"name":"car1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"09b34178-4383-485d-ba2e-70103eef9f9c":{"name":"car2","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"9d5bf5e7-bc51-49a5-a9db-851e09ad3fb1":{"name":"car3","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"015d42f3-732d-404e-a14f-2f18871f3209":{"name":"car4","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 5;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;


  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("sam")
  sam.scale=.05
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("car1")
  car1.scale=.15
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("car2")
  car2.scale=.15
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("car3")
  car3.scale=.15
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("car4")
  car4.scale=.15
  car4.shapeColor = "red";
  
  carsMoving();
//add the velocity to make the car move.

function draw() {

   background("white");
  text("Lives Left: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  if(life===0){
  car1.setVelocity(0,0)
  car1.y = 130
  car2.setVelocity(0,0)
  car2.y = 130
  car3.setVelocity(0,0)
  car3.y = 250
  car4.setVelocity(0,0)
  car4.y = 250
  sam.x = 20
  sam.setVelocity(0,0)
  fill("black")
  text("You Lost! Press Enter to Try Again.", 75, 300)
  reset();
}
  
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
  
 drawSprites();
samMoving();
 bounce();
 hit();
 win();
}


function carsMoving(){
  car1.setVelocity(0,5)
  car2.setVelocity(0,5)
  car3.setVelocity(0,5)
  car4.setVelocity(0,5)
}

function bounce()
{
  car1.bounceOff(boundary1)
  car1.bounceOff(boundary2)
  car2.bounceOff(boundary1)
  car2.bounceOff(boundary2)
  car3.bounceOff(boundary1)
  car3.bounceOff(boundary2)
  car4.bounceOff(boundary1)
  car4.bounceOff(boundary2)
  
}

function samMoving(){
  if(keyDown("left")){
    sam.x-=3
  }
  if(keyDown("right")){
    sam.x+=3
  }
}

function hit()
{
  if(sam.isTouching(car1)){
    sam.x = 20
    life-=1
  }
  if(sam.isTouching(car2)){
    sam.x = 20
    life-=1
  }
  if(sam.isTouching(car3)){
    sam.x = 20
    life-=1
  }
  if(sam.isTouching(car4)){
    sam.x = 20
    life-=1
  }
}
function reset(){
  if (keyDown("ENTER")){
    life = 5
    samMoving();
    hit();
    bounce();
    carsMoving();
  }
}
function win(){
  if(sam.x>348){
    text("You Win! Press Enter to Play Again", 75, 300)
  }
}

function rotation(){
  if (car1.isTouching(boundary1)|| car1.isTouching(boundary2)){
    car1.mirrorY(180)
  }
  if (car2.isTouching(boundary1)|| car2.isTouching(boundary2)){
    car2.mirrorY(180)
  }
  if (car3.isTouching(boundary1)|| car3.isTouching(boundary2)){
    car3.mirrorY(180)
  }
  if (car4.isTouching(boundary1)|| car4.isTouching(boundary2)){
    car4.mirrorY(180)
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

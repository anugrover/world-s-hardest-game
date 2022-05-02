var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var path = createSprite(60, 270, 70, 100);
path.shapeColor = "yellow";
var path2 = createSprite(120, 305, 50, 30);
path2.shapeColor = "yellow";
var path3 = createSprite(230, 230, 170, 180);
path3.shapeColor = "yellow";
var winnerline = createSprite(230, 90, 70, 100);
winnerline.shapeColor = "red";
var car1 = createSprite(175, 175, 15, 15);

var car2 = createSprite(275, 275, 15, 15);

var hero = createSprite(60, 280, 20, 20);
hero.shapeColor = "green";
var boundary1 = createSprite(145, 217, 5, 150);
var boundary2 = createSprite(317, 230, 5, 180);
var boundary3 = createSprite(171, 320, 295, 5);
var boundary4 = createSprite(23, 271, 5, 100);
var boundary5 = createSprite(57, 220, 72, 5);
var boundary6 = createSprite(95, 254, 5, 72);
var boundary7 = createSprite(118, 289, 50, 5);
var boundary8 = createSprite(168, 141, 50, 5);
var boundary9 = createSprite(291, 141, 53, 5);
var boundary10 = createSprite(229, 141, 71, 5);
var boundary11 = createSprite(145, 305, 5, 25);
var score = 0;
var gamestate = "serve";

function draw() {
  background("white");
   
  
  textSize(24);
  text("score="+score, 200, 30);
  if (gamestate= "serve") {
    textSize(24);
    text("PRESS ENTER TO PLAY", 120, 350);
    if (keyDown("enter")) {
      car1.velocityX = 3;
      car2.velocityX = -3;
      car1.velocityY = -3;
      car2.velocityY = 3;
      gamestate = "play";
    }
  }
  if (gamestate="play") {
      if (hero.isTouching(winnerline)) {
        score = score+1;
        hero.x = 60;
        hero.y = 280;
      }
      if (keyDown("left")) {
      hero.x = hero.x-3;
      }
       if (keyDown("right")) {
    hero.x = hero.x+3;
  }
  if (keyDown("up")) {
    hero.y = hero.y-3;
  }
  if (keyDown("down")) {
    hero.y = hero.y+3;
  }
      
    
    if (hero.isTouching(car1)) {
      car1.x = 175;
      car1.y = 175;
      car2.x = 275;
      car2.y = 275;
      car2.velocityX = 0;
      car1.velocityX = 0;
      car1.velocityY = 0;
      car2.velocityY = 0;
      hero.x = 60;
      hero.y = 280;
          }
      if (hero.isTouching(car2)) {
      car1.x = 175;
      car1.y = 175;
      car2.x = 275;
      car2.y = 275;
      car2.velocityX = 0;
      car1.velocityX = 0;
      car1.velocityY = 0;
      car2.velocityY = 0;
      hero.x = 60;
      hero.y = 280;  
      gamestate = "end";
      }
  }
  if (gamestate="end") {
    if (score==5) {
      textSize(15);
      text("you won the game", 0, 150);
      car1.x = 175;
      car1.y = 175;
      car2.x = 275;
      car2.y = 275;
      car2.velocityX = 0;
      car1.velocityX = 0;
      car1.velocityY = 0;
      car2.velocityY = 0;
      hero.x = 60;
      hero.y = 280;
      hero.velocityX = 0;
      hero.velocityY = 0;
      
    }
  }
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car1.bounceOff(boundary3);
  car1.bounceOff(boundary4);
  car1.bounceOff(boundary5);
  car1.bounceOff(boundary6);
  car1.bounceOff(boundary7);
  car1.bounceOff(boundary8);
  car1.bounceOff(boundary9);
  car1.bounceOff(boundary10);
  car1.bounceOff(boundary11);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car2.bounceOff(boundary3);
  car2.bounceOff(boundary4);
  car2.bounceOff(boundary5);
  car2.bounceOff(boundary6);
  car2.bounceOff(boundary7);
  car2.bounceOff(boundary8);
  car2.bounceOff(boundary9);
  car2.bounceOff(boundary10);
  car2.bounceOff(boundary11);
  car1.bounce(car2);
  car2.bounce(car1)
  hero.bounceOff(boundary1);
  hero.bounceOff(boundary2);
  hero.bounceOff(boundary3);
  hero.bounceOff(boundary4);
  hero.bounceOff(boundary5);
  hero.bounceOff(boundary6);
  hero.bounceOff(boundary7);
  hero.bounceOff(boundary8);
  hero.bounceOff(boundary9);
  drawSprites();
  

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

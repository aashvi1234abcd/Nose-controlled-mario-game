function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_kick=loadSound("kick.wav");
	mario_coin=loadSound("coin.wav");
	mario_die=loadSound("mariodie.wav");
	mario_gameover=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1140,326);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("gameconsole")
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on("pose",posesgo);
	
}


nosex="";
nosey="";                                                                                                                                                                                                                                            
img="";




function modelLoaded(){
  console.log("🙌🏻🙌🏻MODEL LOADED!🙌🏻🙌🏻");
}

function posesgo(error,results){
  if (error){
    console.log(error);
  }
  else{
    if(results.length>0){
		console.log(results);
      nosex=results[0].pose.nose.x;
      nosey=results[0].pose.nose.y;
    }
  }
}

function draw() {
	game();
}




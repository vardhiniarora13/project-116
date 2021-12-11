nosex = 0; 
nosey = 0; 
function preload(){
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache, nosex , nosey , 80,35 );
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x -40;
        nosey = results[0].pose.nose.y;
        console.log("nose x: "+nosex );
        console.log("nose y: "+nosey);
    };
}
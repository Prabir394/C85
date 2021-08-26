canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_images_Array = ["NASA Image 1.jpg", "NASA Image 2.jpg", "NASA Image 3.jpg", "NASA Image 4.jpg"]
randomNumber = Math.floor(Math.random()*4);
console.log(randomNumber);

rover_width = 100;
rover_height = 90;
background_image = nasa_images_Array[randomNumber];
console.log("background image = "+ background_image);
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add(){
    background_image_tag = new Image();
    background_image_tag.onload = upload_background;
    background_image_tag.src = background_image;

    rover_image_tag = new Image();
    rover_image_tag.onload = upload_rover;
    rover_image_tag.src = rover_image;
}
function upload_background(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed== "38" ){
        up();
        console.log("up");
    }
    if(keyPressed== "40" ){
        down();
        console.log("down");
    }
    if(keyPressed== "37" ){
        left();
        console.log("left");
    }
    if(keyPressed== "39" ){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>= 0){
        rover_y= rover_y - 10;
        console.log("when up arrow is pressed, x= " + rover_x + ", y = " + rover_y);
        upload_background();
        upload_rover();
    }
}
function down(){
    if(rover_y<= 500){
        rover_y= rover_y + 10;
        console.log("when down arrow is pressed, x= " + rover_x + ", y = " + rover_y);
        upload_background();
        upload_rover();
    }
}
function left(){
    if(rover_x>= 0){    
        rover_x= rover_x - 10;
        console.log("when left arrow is pressed, x= " + rover_x + ", y = " + rover_y);
        upload_background();
        upload_rover();
    }
}
function right(){
    if(rover_x<= 700){
        rover_x= rover_x + 10;
        console.log("when right arrow is pressed, x= " + rover_x + ", y = " + rover_y);
        upload_background();
        upload_rover();
    } 
}

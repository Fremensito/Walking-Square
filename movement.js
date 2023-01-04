var square = document.getElementById("square");
var movementRight = 0;
var idMovement = setInterval(voidFunction, 20000);
var ticks = 0;
var stopMovement;
var rightMove = false;
var leftMove = false;
var button;

function voidFunction(){}

document.body.addEventListener("keydown", movement);
document.body.addEventListener("keyup", stopMovementFunction);

function movement(e){
    button = e.key
    if(button == "ArrowRight" && !rightMove){
        clearInterval(idMovement);
        leftMove = false;
        rightMove = true;
        stopMovement = false;
        idMovement = setInterval(movementRightAnimation, 20);
    }
    if(button == "ArrowLeft" && !leftMove){
        clearInterval(idMovement);
        rightMove = false;
        leftMove = true;
        stopMovement = false;
        idMovement = setInterval(movementLeftAnimation, 20);
    }
}

function movementLeftAnimation(){
    switch(ticks){
        case 0:
            ticks++;
            movementRight -= 10;
            square.style.left = movementRight + "px";
            square.style.bottom = "8px";
            square.style.transform = "rotate(-10deg)";
            break;
        case 1:
            ticks++;
            movementRight -= 15;
            square.style.left = movementRight + "px";
            square.style.bottom = "15px";
            square.style.transform = "rotate(-20deg)";
            break;
        case 2:
            movementRight -= 20;
            ticks++;
            square.style.left = movementRight + "px";
            square.style.bottom = "23px";
            square.style.transform = "rotate(-45deg)";
            break;
        case 3:
            ticks++;
            movementRight -= 20;
            square.style.left = movementRight + "px";
            square.style.bottom = "15px";
            square.style.transform = "rotate(-70deg)";
            break;
        case 4:
            ticks++;
            movementRight -= 15;
            square.style.left = movementRight + "px";
            square.style.bottom = "8px";
            square.style.transform = "rotate(-80deg)";
            break;
        case 5:
            movementRight -= 10;
            ticks = 0;
            square.style.left = movementRight + "px";
            square.style.bottom = "0px";
            square.style.transform = "none";
            if(stopMovement){
                leftMove = false;
                clearInterval(idMovement);
            }
            break;
    }
}

function movementRightAnimation(){
    switch(ticks){
        case 0:
            ticks++;
            movementRight += 10;
            square.style.left = movementRight + "px";
            square.style.bottom = "8px";
            square.style.transform = "rotate(10deg)";
            break;
        case 1:
            ticks++;
            movementRight += 15;
            square.style.left = movementRight + "px";
            square.style.bottom = "15px";
            square.style.transform = "rotate(20deg)";
            break;
        case 2:
            movementRight += 20;
            ticks++;
            square.style.left = movementRight + "px";
            square.style.bottom = "23px";
            square.style.transform = "rotate(45deg)";
            break;
        case 3:
            ticks++;
            movementRight += 20;
            square.style.left = movementRight + "px";
            square.style.bottom = "15px";
            square.style.transform = "rotate(70deg)";
            break;
        case 4:
            ticks++;
            movementRight += 15;
            square.style.left = movementRight + "px";
            square.style.bottom = "8px";
            square.style.transform = "rotate(80deg)";
            break;
        case 5:
            movementRight += 10;
            ticks = 0;
            square.style.bottom = "0px";
            square.style.transform = "none";
            square.style.left = movementRight + "px";
            if(stopMovement){
                rightMove = false;
                clearInterval(idMovement);
            }
            break;
    }
}

function stopMovementFunction(e){
    console.log(e.key);
    if(button == e.key)
        stopMovement = true;
}
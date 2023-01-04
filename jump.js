jumpTicks = 0;

function jump (){
    console.log("hola 2");
    switch(jumpTicks){
        case 0:
            movementJump += 100;
            square.style.marginBottom = "unset";
            square.style.right = movementRight + "px";
            square.style.bottom = movementJump + "px";
            jumpTicks++;
            break;
        case 1:
            movementJump += 50;
            square.style.right = movementRight + "px";
            square.style.bottom = movementJump + "px";
            jumpTicks++;
            break;
        case 2:
            movementJump += 30;
            square.style.right = movementRight + "px";
            square.style.bottom = movementJump + "px";
            jumpTicks++;
            break;
        case 3:
            movementJump += 30;
            square.style.right = movementRight + "px";
            square.style.bottom = movementJump + "px";
            jumpTicks++;
            break;
        case 4:
            square.style.right = movementRight + "px";
            square.style.bottom = movementJump + "px";
            jumpTicks++;
            break;
        case 5:
            square.style.right = movementRight + "px";
            square.style.bottom = movementJump + "px";
            jumpTicks++;
            break;
        case 6:
            square.style.right = movementRight + "px";
            square.style.bottom = movementJump + "px";
            jumpTicks++;
            break;
        case 7:
            movementJump -= 30;
            square.style.right = movementRight + "px";
            square.style.bottom = movementJump + "px";
            jumpTicks++;
            break;
        case 8:
            movementJump -= 30;
            square.style.right = movementRight + "px";
            square.style.bottom = movementJump + "px";
            jumpTicks++;
            break;
        case 9:
            movementJump -= 50;
            square.style.right = movementRight + "px";
            square.style.bottom = movementJump + "px";
            jumpTicks++;
            break;
        case 10:
            movementJump -= 100;
            square.style.bottom = "unset"
            square.style.marginBottom = "0px";
            square.style.right = movementRight + "px";
            jumpTicks = 0;
            jumpMove = false;
            clearInterval(idJump);
            break;
    }
}
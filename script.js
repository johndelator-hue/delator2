const upbutton = document.getElementById("up");
const leftbutton = document.getElementById("left");
const rightbutton = document.getElementById("right");
const downbutton = document.getElementById("down");
const playerChar = document.getElementById("player");

   let x = 0;
   let y = 0;

     playerChar.style.position = "absolute";
     playerChar.style.left = (window.innerWidth / 2 - 35) + "px";
     playerChar.style.top = (window.innerHeight / 2 - 35) + "px";

 function movePlayerChar(direction) {
 const step = 100; 
    switch (direction) {
        case "up":
            y -= step;
            break;
        case "down":
            y += step;
            break;
        case "left":
            x -= step;
            break;
        case "right":
            x += step;
            break;
    }

    playerChar.style.left = (window.innerWidth / 2 - 35 + x) + "px";
    playerChar.style.top = (window.innerHeight / 2 - 35 + y) + "px";
}


upbutton.onclick = () => movePlayerChar("up");
downbutton.onclick = () => movePlayerChar("down");
leftbutton.onclick = () => movePlayerChar("left");
rightbutton.onclick = () => movePlayerChar("right");

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
            movePlayerChar("up");
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            movePlayerChar("down");
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            movePlayerChar("left");
            break;
        case 'd':
        case 'D':
        case 'ArrowRight':
            movePlayerChar("right");
            break;
    }
});
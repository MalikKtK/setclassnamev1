//Make a red box bounce around the screen *

var redBox = document.createElement('div');
redBox.style.width = '100px';
redBox.style.height = '100px';
redBox.style.backgroundColor = 'red';
redBox.style.position = 'absolute';
document.body.appendChild(redBox);

var x = 0;
var y = 0;
var dx = 1;
var dy = 1;

function moveRedBox() {
    debugger
    x += dx;
    y += dy;
    if (x < 0 || x > window.innerWidth - 100) {
        dx = -dx;
    }
    if (y < 0 || y > window.innerHeight - 100) {
        dy = -dy;
    }
    redBox.style.left = x + 'px';
    redBox.style.top = y + 'px';
}

setInterval(moveRedBox, 10);
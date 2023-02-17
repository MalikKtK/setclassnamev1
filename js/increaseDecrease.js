console.log("jeg er i inc font")
const ptag = document.querySelector(".first");
console.log(ptag)

let fontSize = 10;

function increaseFont(e) {
    console.log("jeg er i inc font")
    fontSize++;
    ptag.style.fontSize = fontSize + "px";

}

function decreaseFont(e) {
    console.log("jeg er i dec font")
    fontSize--;
    ptag.style.fontSize = fontSize + "px";
}

function testEscapePressed(e) {
    console.log(e)
    if (e.key === "Escape") {
        fontSize = 10;
        ptag.style.fontSize = fontSize + "px"
    }
}

const pbIncrease = document.querySelector(".pbIncrease")
pbIncrease.addEventListener("click", increaseFont)

const pbDecrease = document.querySelector(".pbDecrease")
pbDecrease.addEventListener("click", decreaseFont)

document.addEventListener("keydown", e => testEscapePressed(e))
console.log("jeg er i inc font")

const ptag = document.querySelector(".first")
console.log(ptag)

let fontsize = 10;

function increaseFont(e) {
    console.log("set font")
    fontsize++;
    ptag.style.fontSize = fontsize + "px"
}

function decreaseFont(e) {
    console.log("set font")
    fontsize--;
    ptag.style.fontSize = fontsize + "px"
}

function testEscapePressed(e) {
    console.log(e)
    if (e.key === 'Escape') {
        fontsize = 10
        ptag.style.fontSize = fontsize + "px"
    }
}


const pbIncrease = document.querySelector(".pbIncrease")
pbIncrease.addEventListener('click', increaseFont)

const pbDecrease = document.querySelector(".pbDecrease")
pbDecrease.addEventListener('click', decreaseFont)


document.addEventListener('keydown', e => testEscapePressed(e))
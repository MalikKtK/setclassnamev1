console.log("Jeg er i setclassname")

let inpElementName = document.querySelector(".elementName")
let inpStyleName = document.querySelector(".styleName")
let pbSetClassName = document.querySelector(".pbSetClassName")

function setStyle() {
    const elm = document.querySelector("." + inpElementName.value)
}

pbSetClassName.addEventListener('click', setStyle)
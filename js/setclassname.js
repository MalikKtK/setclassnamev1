console.log("jeg er i setclassname")

let inpElementName = document.getElementById("elementName")
let inpStyleName = document.getElementById("styleName")
let pbSetClassName = document.getElementById("pbSetStyle")

function setStyle() {
    const elm = document.querySelector("." + inpElementName.value)
    console.log(elm)
    elm.className = ""
    elm.classList.add(inpStyleName.value)
    elm.classList.add(inpElementName.value)
    console.log(elm.classList)
}

pbSetClassName.addEventListener('click', setStyle)
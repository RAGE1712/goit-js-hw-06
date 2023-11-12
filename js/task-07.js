const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

input.addEventListener("input", fontSizeControl);
span.style.fontSize = input.value + "px";
function fontSizeControl(event) {
    span.style.fontSize = event.currentTarget.value + "px"
}
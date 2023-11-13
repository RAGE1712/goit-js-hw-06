const input = document.querySelector("input#name-input");
let span = document.querySelector("span#name-output");

input.addEventListener("input", handleInput)

function handleInput(event) {
    if (event.currentTarget.value.trim() !== "") {
        span.textContent = event.currentTarget.value;
    } else { span.textContent = "Anonymous"; }
}
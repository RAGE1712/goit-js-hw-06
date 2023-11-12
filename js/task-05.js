const input = document.querySelector("input#name-input");
let span = document.querySelector("span#name-output");

input.addEventListener("input", handleInput)

function handleInput(event) {
    const name = event.currentTarget.value;
    span.textContent = name.trim();
}
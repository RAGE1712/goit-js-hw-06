const input = document.querySelector("input#validation-input");
const limit = document.querySelector('input[data-length="6"]');

input.addEventListener("blur", handleInput);

function handleInput(event) {
    const inputLength = event.currentTarget.value.trim().length;
    console.log(length);
    const symbolLimit = Number(limit.dataset.length);
    console.log(symbolLimit)

    if ( inputLength === symbolLimit) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
}
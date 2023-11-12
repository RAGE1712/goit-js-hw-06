const decreBtn = document.querySelector('button[data-action="decrement"]');
const increBtn = document.querySelector('button[data-action="increment"]');
const count = document.querySelector("#value");

let counterValue = 0

decreBtn.addEventListener("click", handleDecreClick);
increBtn.addEventListener("click", handleIncreClick);

function handleIncreClick() {
  counterValue += 1;
  count.textContent = counterValue;
}
function handleDecreClick() {
  counterValue -= 1;
  count.textContent = counterValue;
}

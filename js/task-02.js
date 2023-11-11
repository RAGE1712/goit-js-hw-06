// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

const elements = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  const pEl = document.createElement("p");
  pEl.textContent = ingredient;
  liEl.classList.add("title");
  liEl.append(pEl);
  return liEl
})
list.append(...elements)

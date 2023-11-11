const itemCategories = document.querySelectorAll(".item")
console.log(`Number of categories: ${itemCategories.length}`)

itemCategories.forEach((category) => {
    const header = category.querySelector("h2")
    console.log("");
    console.dir(`Category: ${header.textContent}`)
    const element = category.querySelectorAll("li")
    console.dir(`Elements: ${element.length}`)
})
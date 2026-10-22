const paragraph = document.getElementById("changeble")
const button = document.getElementById("changer")
button.addEventListener("click", function () {
    paragraph.textContent = "Content has changed"
})
const box = document.getElementById("box")
const colorBtn = document.getElementById("colorButton")
colorBtn.addEventListener("click", function () {
    box.style.backgroundColor = "lightblue"
})
const sizeBtn = document.getElementById("sizeButton")
sizeBtn.addEventListener("click", function () {
    box.style.fontSize = "20px"
})
const itemList = document.getElementById("itemList")
const addBtn = document.getElementById("addButton")
let itemCount = 3
addBtn.addEventListener("click", function () {
    itemCount++
    const newItem = document.createElement("li")
    newItem.textContent = "Item" + " " + itemCount
    itemList.appendChild(newItem)
})
const removeBtn = document.getElementById("removeButton")
removeBtn.addEventListener("click", function () {
    const lastItem = itemList.lastElementChild
    if (lastItem) {
        itemCount--
        lastItem.remove()
    }
})
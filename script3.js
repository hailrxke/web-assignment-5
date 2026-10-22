const hoverBox = document.getElementById("hoverBox")
hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = "lightblue"
})
hoverBox.addEventListener("mouseout", function () {
    hoverBox.style.backgroundColor = "lightgray"
})
const textInput = document.getElementById("textInput")
const textOutput = document.getElementById("textOutput")
textInput.addEventListener("keyup", function () {
    textOutput.textContent = "Typed: " + textInput.value
})

const num = document.getElementById("num")
const num2 = document.getElementById("num2")

const addBtn = document.getElementById("addBtn")
const subBtn = document.getElementById("subBtn")
const mulBtn = document.getElementById("mulBtn")
const divBtn = document.getElementById("divBtn")
const result = document.getElementById("result")
addBtn.addEventListener("click", function () {
    let add = Number(num.value) + Number(num2.value)
    result.textContent = "Result: " + add
})
subBtn.addEventListener("click", function () {
    let sub = Number(num.value) - Number(num2.value)
    result.textContent = "Result: " + sub
})
mulBtn.addEventListener("click", function () {
    let mul = Number(num.value) * Number(num2.value)
    result.textContent = "Result: " + mul
})
divBtn.addEventListener("click", function () {
    if (Number(num2.value == 0)) {
        result.textContent = "Result: cannot divide by zero"
    }
    else {
        let div = Number(num.value) / Number(num2.value)
        result.textContent = "Result: " + div
    }

})
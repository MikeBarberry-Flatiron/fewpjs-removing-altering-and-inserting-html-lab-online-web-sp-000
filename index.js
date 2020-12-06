// Write your code here!
document.getElementById("main").remove()

const newHeader = document.createElement("h1")

newHeader.id = "victory"

newHeader.innerHTML = "Mike is the champion"

newHeader.style.color = "blue"

document.body.appendChild(newHeader)

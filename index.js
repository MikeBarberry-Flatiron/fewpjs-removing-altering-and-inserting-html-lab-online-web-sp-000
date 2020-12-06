// Write your code here!
document.getElementById("main").remove()

const newHeader = document.createElement("h1")

newHeader.id = "victory"

newHeader.innerHTML = "Mike is the champion"

newHeader.style.color = "blue"

newHeader.addEventListener('click', function(event) {
  alert('I was clicked')
})

document.body.appendChild(newHeader)

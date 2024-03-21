
const button = document.querySelectorAll("button");
const heading = document.getElementById("heading"); 

button.addEventListener('click', changeText);

function changeText() {
    heading.textContent = "New text for the heading";
}
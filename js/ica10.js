const button1 = document.querySelector(".button1");
const button2 = document.getElementById("button2");
const heading = document.getElementById("heading");

button1.addEventListener('click', changeText);
button2.addEventListener('click', changeText);

function changeText() {
    const head = prompt("Tell me a secret");
    heading.textContent = head;
}
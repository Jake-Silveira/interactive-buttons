const colorBtn = document.getElementById("colorBtn");
const addParaBtn = document.getElementById("addParaBtn");
const content = document.getElementById("content");
const resetBtn = document.getElementById("resetBtn");

colorBtn.addEventListener("click", ()=> {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorBtn.style.backgroundColor = randomColor;

    document.getElementById("heading").textContent = `Color changed to ${randomColor}`;
});

addParaBtn.addEventListener("click", ()=>{
    const newPara = document.createElement("p");
    newPara.textContent = "You've added a new paragraph!"
    content.appendChild(newPara);
});

resetBtn.addEventListener("click", ()=>{
    colorBtn.style.backgroundColor = "";
    document.getElementById("heading").textContent = "Welcome to Button Playground";
    content.innerHTML = "";
});
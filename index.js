let colorArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
let randombtnEl = document.getElementById("randombtn");
let bodyEl = document.querySelector("body");
let inputEl = document.getElementById('input');
let savebtn = document.getElementById('savebtn')
let savedHexEl = document.getElementById('savedHex');
let searchbtn = document.getElementById('searchbtn');
let savecolor = [];
let bgcolor = '';

inputEl.value = ""
randombtnEl.addEventListener('click', function () {
    let hexColor = '';
    for (let i = 1; i < 7; i++) {
        let randomNumber = Math.floor(Math.random() * colorArray.length);
        hexColor += colorArray[randomNumber];
    }
    bgcolor = "#" + hexColor;
    bodyEl.style.background = bgcolor;
    inputEl.value = bgcolor;
})

savebtn.addEventListener('click', function () {
    let savearray = bgcolor + " ";
    savecolor.push(savearray);
    savedHexEl.textContent = savecolor;
})

searchbtn.addEventListener('click', function () {
    bgcolor = inputEl.value;
    bodyEl.style.background = bgcolor;
})

function heading() {
    
}


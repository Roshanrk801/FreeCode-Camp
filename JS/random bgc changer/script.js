let button = document.querySelector("#btn")
let body = document.querySelector("body")
let bgHexCode=document.querySelector("#bg-hex-code")

const colorArr = [
    "#FF5733",
    "#3498DB",
    "#2ECC71",
    "#F39C12",
    "#8E44AD",
    "#1ABC9C",
    "#E74C3C",
    "#9B59B6",
    "#34495E",
    "#16A085"
];

function getRandomIndex() {
    let randomInd = Math.floor(colorArr.length * Math.random())
    return randomInd;
}
// console.log(colorArr[getRandomIndex()])

function backgroundColorChange() {
    let bgColor = colorArr[getRandomIndex()]
    body.style.backgroundColor = bgColor

    bgHexCode.innerText=bgColor
    return bgColor

}
// backgroundColorChange();
// console.log(backgroundColorChange());


button.onclick = backgroundColorChange;

// button.addEventListener("click",()=>{
//     backgroundColorChange();
// })
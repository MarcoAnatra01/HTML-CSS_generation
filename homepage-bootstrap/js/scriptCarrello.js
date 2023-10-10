
let container = document.querySelector(".itemsNumber");


let albumType = document.querySelectorAll(".albumType");

[...albumType].forEach(element => {
    element.setAttribute("class", "text-secondary");
});


let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");

parentPlus = plus.parentNode;

let cartCounter = parentPlus.querySelector("input[type=number]");

plus.addEventListener("click", function(){
    cartCounter.stepUp();
});

minus.addEventListener("click", function(){
    cartCounter.stepDown();
});
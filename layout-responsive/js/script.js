
let htmlTag = document.querySelector("html");
let menuIcon = document.querySelector("#menuIcon");

function addMenuClass(){
    let header = document.querySelector(".mainHeader");
    header.classList.toggle("is-mobile-open");

    htmlTag.classList.toggle("no-scroll");
}

menuIcon.addEventListener("click", addMenuClass);
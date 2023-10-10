
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      // elemento su cui vogliamo inizializzare la pagination  
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


let firstList = document.querySelectorAll("#firstList li");

[...firstList].forEach(li => {

  let iTag = document.createElement("i");
  iTag.setAttribute("class", "ri-check-double-fill text-primary me-2"); 

  li.prepend(iTag);

});
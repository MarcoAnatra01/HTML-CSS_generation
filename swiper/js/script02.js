
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    //se voglio una dissolvenza anziché l'effetto trascinamento
    // effect: "fade",


    // se voglio che parta e scorra da solo:
    autoplay: {
      delay: 2500, //intervallo in millisecondi tra una slide e l'altra
      disableOnInteraction: false,
    },

    // Default parameters: come si comporta lo slider prima dei breakpoints
    slidesPerView: 2,
    spaceBetween: 10,
    
    // Responsive breakpoints
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  });
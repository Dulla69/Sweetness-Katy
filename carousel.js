/* CAROUSEL */
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    initialSlide: 1,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });
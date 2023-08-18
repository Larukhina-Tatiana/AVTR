const swiperOne = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  }
});


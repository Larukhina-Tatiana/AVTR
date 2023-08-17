$('.desing__slider').slick({
  dots: false,
  arrows: true,
  veriableWidth: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<img class="arrow arrow-prev" src="../images/icons/arrow-prev.svg" alt="icon prev">',
  nextArrow: '<img class="arrow arrow-next" src="../images/icons/arrow-next.svg" alt="icon prev">'
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }

  // ]
});




// $(".nav__burger-btn").on("click", function () {
//   $(".nav__list").toggleClass("menu--open");
// });

// $(function () {
// $(".reviews__slider").slick({
//   dots: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false

  //     responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {},
  //   },
  //   {
  //     breakpoint: 640,
  //     settings: {
  //       arrows: false,
  //     },
  //   },
  // ],
// });
// });

// const swiperOne = new Swiper(".reviews__slider", {
//   loop: true,
//   // effect: "coverflow",
//   // effect: 'fade',
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: true
//   }
// });

// const swiperTvo = new Swiper(".certificates__slider", {
//   // loop: true,
//   slidesPerView: 1,
//   spaceBetween: 10,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     1000: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//   },
// //   autoplay: {
// //     delay: 4000,
// //     disableOnInteraction: true
// //   }
// });

// const accordeon = document.querySelector('.accordeon__list');
// const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');
// accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
//   accordeonTitle.addEventListener('click', function () {
//           const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');
//     accordeonTitle.classList.toggle('accordeon__title--active');
//     currentText.classList.toggle('accordeon__text--visible');

//     if (currentText.classList.contains('accordeon__text--visible')) {
//       currentText.style.maxHeight = currentText.scrollHeight + 'px'
//     } else {
//       currentText.style.maxHeight = null
//     }

//   });
// });

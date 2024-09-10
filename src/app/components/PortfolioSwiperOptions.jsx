import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const options = {
    // Параметры слайдера для экранов мобильных гаджетов шириной < 450px
  loop: false,
  spaceBetween: 10,
  allowTouchMove: true,
  slidesPerView: 1,
  autoplay: {
    enabled: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    enabled: true,
    clickable: true,
  },
        // Параметры слайдера для мониторов компьютера
  breakpoints: {
    450: {
      loop: true,
      spaceBetween: 15,
      slidesPerView: 1,
      allowTouchMove: true,
      speed: 6500,
      autoplay: {
        enabled: true,
        delay: 0,
      },
      pagination: {
        enabled: true,
      },
    },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  modules: [Autoplay, Pagination, Navigation],
};
/*CHO SLIDE CHẠY VÀ ĐỔI*/
var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Phân trang
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Nút chuyển slide
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
});
/*Hien thi them item in ====SAN PHAM NOI BAT=======*/
var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*Hien thi them them in=====SAN PHAM MOI=======*/
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  
});
/*Hien thi them them in=====BAN CHAY TRONG TUAN=======*/
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Thư Viện AOS
AOS.init();
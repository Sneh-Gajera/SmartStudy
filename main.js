
// preloader

$(document).ready(function () {
  setTimeout(() => {
    $("#pre_loader").addClass("loaded");
  }, 2000);
  setTimeout(() => {
    $("#pre_loader").remove("loaded");
  }, 4000);
});





//responsive menu
$(document).ready(function () {
  $(".humberger i").click(function () {
    $(this).toggleClass("fa-times");
    $(".menu").toggleClass("active");
  });
});

// sticky nav

window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navigate_bar");
  nav.classList.toggle("sticky", window.scrollY > 50);
});

//   swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});



//   pure counter

new PureCounter({
  selector: ".purecounter",
  duration: 2,
  delay: 10,
  repeat: false,
  decimals: 0,
  legacy: true,
  filesizing: false,
  currency: false,
  separator: true,
});


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
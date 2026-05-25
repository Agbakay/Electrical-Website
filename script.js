function openMenu() {
  document.querySelector(".mobile-sidebar").style.left = "0px";
  document.querySelector(".mobile-sidebar").style.opacity = "1";
}

// Close Menu
function closeSidebar() {
  document.querySelector(".mobile-sidebar").style.left = "-100%";
  document.querySelector(".mobile-sidebar").style.opacity = "0";
}

//OnScroll Logic

const header = document.querySelector(".desktop-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("fixed");
    document.querySelector(".announcement-bar").style.display = "none";
    header.style.backgroundColor = "#fff";
  } else {
    header.classList.remove("fixed");
    header.style.backgroundColor = "#f3e7de";
    document.querySelector(".announcement-bar").style.display = "block";
  }
});

// SWIPPER

var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 3,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

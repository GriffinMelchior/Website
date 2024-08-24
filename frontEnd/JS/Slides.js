

const buttons = document.querySelectorAll("[data-carousel-button]");
let timerInterval = null;

const updateSlide = (slides, activeSlide, offset) => {
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;
  
  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;

  return newIndex;
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    
    updateSlide(slides, activeSlide, offset);
  
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    

    timerInterval = setInterval(() => {
      const activeSlide = slides.querySelector("[data-active]");
      updateSlide(slides, activeSlide, offset);
    }, 3500);
  });
});

export const carousel = document.querySelector('.carousel');
const loginContainer = document.querySelector('.loginContainer')
const slidesHeight = () => {
  const widthWindow = window.innerWidth;
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|BlackBerry|IEMobile|Mobile|Kindle|Silk|Windows Phone/i.test(navigator.userAgent);
  if (isMobile || widthWindow <= 800) {
    carousel.style.height = '200px';
  } else {
    carousel.style.height = '400px';
  }
  if(isMobile){
    loginContainer.style.width = '250px';
  }
};


window.addEventListener('DOMContentLoaded', slidesHeight);
window.addEventListener('resize', slidesHeight);


const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slide.length;
  slides.style.transform = `translateX(${-index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slide.length) % slide.length;
  slides.style.transform = `translateX(${-index * 100}%)`;
});
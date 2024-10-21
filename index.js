let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  // Calculate new index based on direction
  currentIndex += direction;

  // Loop the index
  if (currentIndex < 0) {
    currentIndex = Math.ceil(totalSlides / 3) - 1; // Adjust for 3 images
  } else if (currentIndex >= Math.ceil(totalSlides / 3)) {
    currentIndex = 0;
  }

  // Move the slides
  const offset = -currentIndex * 100; // Calculate the offset
  slides.style.transform = `translateX(${offset}%)`; // Move the slides
}

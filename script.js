const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const counter = carousel.querySelector("[data-carousel-counter]");
  let activeIndex = 0;

  const updateCarousel = () => {
    if (!track || slides.length === 0) {
      return;
    }

    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    if (counter) {
      counter.textContent = `${activeIndex + 1} / ${slides.length}`;
    }

    slides.forEach((slide, index) => {
      slide.toggleAttribute("aria-hidden", index !== activeIndex);
      if (index !== activeIndex) {
        slide.querySelectorAll("video").forEach((video) => video.pause());
      }
    });
  };

  const moveCarousel = (direction) => {
    activeIndex = (activeIndex + direction + slides.length) % slides.length;
    updateCarousel();
  };

  prevButton?.addEventListener("click", () => moveCarousel(-1));
  nextButton?.addEventListener("click", () => moveCarousel(1));
  updateCarousel();
});

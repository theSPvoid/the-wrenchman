// Carousel Functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('focus');
        item.style.display = 'none';
    });

    let prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    let nextIndex = (currentIndex + 1) % totalItems;

    items[prevIndex].style.display = 'flex';
    items[currentIndex].style.display = 'flex';
    items[nextIndex].style.display = 'flex';

    items[currentIndex].classList.add('focus');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showCarousel();
}

items.forEach(item => {
    item.addEventListener('click', () => {
        openLightbox(item.querySelector('img').src);
    });
});

showCarousel();
let carouselInterval = setInterval(nextSlide, 3000);

// Pause on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});
carouselContainer.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextSlide, 3000);
});

// Lightbox functions
function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox').focus();
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
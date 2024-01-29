let carouselImages = document.querySelectorAll('.carousel-image');
        let currentIndex = 0;

        function changeImage() {
            carouselImages[currentIndex].classList.remove('active');

            currentIndex++;

            if (currentIndex >= carouselImages.length) {
                currentIndex = 0;
            }

            carouselImages[currentIndex].classList.add('active');
        }
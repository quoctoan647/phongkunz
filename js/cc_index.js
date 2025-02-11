let currentSlide = 0;
        const slides = document.querySelectorAll('.slideshow img');
        const totalSlides = slides.length;

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add('active');
        }, 2000);
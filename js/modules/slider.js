function slider({
    slide,
    nextArrow,
    prevArrow,
    wrapper,
    field
}) {
    // Slider

    const slides = document.querySelectorAll(slide),
        // slider = document.querySelector('.film'),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.6s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    // slider.style.position = 'relative';


    // const indicators = document.createElement('ol'),
    //     dots = [];

    // indicators.classList.add('carousel-indicators');
    // slider.append(indicators);

    // for (let i = 0; i < slides.length; i++) {
    //     const dot = document.createElement('li');
    //     dot.setAttribute('data-slide-to', i + 1);
    //     dot.classList.add('dot');
    //     if (i == 0) {
    //         dot.style.opacity = 1;
    //     }
    //     indicators.append(dot);
    //     dots.push(dot);
    // }

    // function dotsItem(dots) {
    //     dots.forEach(dot => dot.style.opacity = '.5');
    //     dots[slideIndex - 1].style.opacity = 1;
    // }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        // dotsItem(dots);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        // dotsItem(dots);
    });

}

export default slider;
const sliders = (slides, dir, interval, prev, next) => {

    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slides);

    function showSlide(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n <= 0) {
            slideIndex = items.length;
        }

        items.forEach(slide => {
            slide.classList.add('animated');
            slide.style.display = 'none';
        });
    
        items[slideIndex - 1].style.display = 'block';
    }

    showSlide(slideIndex);

    function changeSlide(n) {
        showSlide(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

              prevBtn.addEventListener('click', (e) => {
                changeSlide(-1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');

              });
              nextBtn.addEventListener('click', (e) => {
                changeSlide(1);

                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');

              });
       
    } catch (error) {
        
    }

    function startAnimation(arg) {
        if (arg == 'vertical') {
            paused = setInterval(() => {
                changeSlide(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, interval);

        } else {
            paused = setInterval(() => {
                changeSlide(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, interval);
        }
    }

    startAnimation(dir);

    items[0].parentNode.addEventListener('mouseover', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseout', () => {
        startAnimation(dir);
    });
    
    

};

export default sliders;
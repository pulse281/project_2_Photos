const modals = () => {

    let clickBtn;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              scrollWidth = calcScrollWidth();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {

                clickBtn = true;

                if (destroy) {
                    item.remove();
                }
                
                modal.classList.add('animated', 'fadeInDown');

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scrollWidth}px`;
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains(closeSelector)) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = 0;
            }
        });
    }

    function openModalByScroll(selector) {
        window.addEventListener('scroll', () => {
            let docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            
            if(!clickBtn && (window.pageYOffset + document.documentElement.clientHeight >= docHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    function calcScrollWidth() {
        const div = document.createElement('div');
        div.style.cssText = `width: 50px; height: 50px; visibility: hidden; overflow-y: scroll;`;
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();
        return scrollWidth;
    }
    
    function showModalByTime(modalSelector, time) {
       setTimeout(() => {
           const scrollWidth = calcScrollWidth();
           let display;
           document.querySelectorAll('[data-modal]').forEach(item => {
                if(getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
           });
           if (!display) {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollWidth}px`;
        }
       }, time);
    }

    bindModal('.button-design', '.popup-design', 'popup-close');
    bindModal('.button-consultation', '.popup-consultation', 'popup-close');
    bindModal('.fixed-gift', '.popup-gift', 'popup-close', true);
    //showModalByTime('.popup-consultation', 60000);
    openModalByScroll('.fixed-gift');

};

export default modals;
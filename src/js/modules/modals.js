const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scrollWidth = calcScrollWidth();

        function calcScrollWidth() {
            const div = document.createElement('div');
            div.style.cssText = `width: 50px; height: 50px; visibility: hidden; overflow-y: scroll;`;
            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;

            div.remove();
            return scrollWidth;
        }


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {

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
    

    function showModalFromTime(modalSelector, time) {
       setTimeout(() => {
           let display;
           document.querySelectorAll('[data-modal]').forEach(item => {
                if(getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
           });
           if (!display) {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

       }, time);
        
    }

    

    bindModal('.button-design', '.popup-design', 'popup-close');
    bindModal('.button-consultation', '.popup-consultation', 'popup-close');
    bindModal('.fixed-gift', '.popup-gift', 'popup-close');
    showModalFromTime('.popup-consultation', 9000);

};

export default modals;
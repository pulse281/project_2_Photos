const styles = () => {

    const styleItems = document.querySelectorAll('.styles .row > div'),
          activeClasses = styleItems[0].className.split(' '),
          trigger = document.querySelector('.button-styles');
    
    trigger.addEventListener('click', () => {
        styleItems.forEach(item => {
            if (!item.classList.contains(activeClasses)) {
                let itemClasses = item.className.split(' ');
                item.classList.remove(...itemClasses);
                item.classList.add(...activeClasses);
            }
        });
        trigger.style.display = 'none';
    });



};

export default styles;
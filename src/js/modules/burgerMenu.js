const burger = () => {

    const menuBtn = document.querySelector('.burger'),
          menuDialog = document.querySelector('.burger-menu'),
          wrapper = document.createElement('div');

    menuBtn.appendChild(wrapper);
    wrapper.insertAdjacentHTML('beforeend', `<div></div><div></div><div></div>`);

    function changeBurger() {
        const img = menuBtn.querySelector('img');
        img.style.display = 'none';
        wrapper.style.cssText = `display: flex;
        width: 40px;
        height: 20px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;`;

        wrapper.querySelectorAll('div').forEach( item => {
            item.style = `display: block; width: 70%; height: 2px; background-color: #fff;`;
        });
    }

    function rotateBurger() {
        const div = wrapper.querySelectorAll('div');
        wrapper.style.justifyContent = 'center';
        div[0].style.cssText = `width: 70%; height: 2px; background-color: #fff; width: 70%; height: 2px; background-color: #fff; margin: 0; transform: translate(0, 50%) rotate(45deg);`;
        div[1].style = 'display: none';
        div[2].style.cssText = `width: 70%; height: 2px; background-color: #fff; width: 70%; height: 2px; background-color: #fff; margin: 0; transform: translate(0, -50%) rotate(-45deg);`;

        menuBtn.classList.add('closeMenu');
    }

    menuBtn.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            if (menuBtn.classList.contains('closeMenu')) {
                changeBurger();
                menuDialog.style.display = 'none';
                menuBtn.classList.remove('closeMenu');
            } else {
                rotateBurger();
                menuDialog.style.display = 'block';
            }
        }
        
    });

    window.addEventListener('load', () => {
        if (window.innerWidth < 992) {
            changeBurger();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 991) {
            wrapper.style.display = 'none';
            menuDialog.style.display = 'none';
            menuBtn.querySelector('img').style.display = '';
        } else { 
            changeBurger();
        }
    });

};

export default burger;
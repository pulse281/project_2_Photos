const portfolio = (menuSelector, blocksSelector) => {

    const menu = document.querySelector(menuSelector),
          blocks = document.querySelectorAll(blocksSelector),
          category = document.querySelectorAll('.portfolio-menu li');

    const classes = {
        curent: 'all',
        change: ''
    };

    menu.addEventListener('click', (e) => {
        const target = e.target;

        category.forEach(item => {
            item.classList.remove('active');
            if (target && target == item) {
                classes.change = item.className;
                item.classList.add('active');

                blocks.forEach(block => {
                    block.style.display = 'none';
                    setTimeout(() => {
                        if (block.classList.contains(classes.change)) {
                            block.classList.add('animated', 'fadeIn');
                            block.style.display = '';
                        }
                    }, 10);
                });
                classes.curent = classes.change;

                if (item.classList.contains('grandmother') || item.classList.contains('granddad')) {
                    document.querySelector('.portfolio-no').style.display = 'block';
                } else {
                    document.querySelector('.portfolio-no').style.display = 'none';
                }
            }
        });
    });

};

export default portfolio;
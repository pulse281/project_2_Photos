const size = (itemSelectors) => {

const item = document.querySelectorAll(itemSelectors);

item.forEach((picture, i) => {
    picture.addEventListener('mouseover', (e) => {
        const img = picture.querySelector('img');
        img.setAttribute('src', `assets/img/sizes-${i + 1}-1.png`);
    });
    picture.addEventListener('mouseout', (e) => {
        const img = picture.querySelector('img');
        img.setAttribute('src', `assets/img/sizes-${i + 1}.png`);
    });
});

};

export default size;
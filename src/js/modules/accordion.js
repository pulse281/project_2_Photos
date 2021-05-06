const accordion = (headersSelector, blocksSelector) => {

    const headers = document.querySelectorAll(headersSelector),
          blocks = document.querySelectorAll(blocksSelector);

    function hideBlocks(){
        blocks.forEach(item => {
            item.classList.add('animated', 'zoomIn');
            item.style.display = 'none';
        });
    }
    hideBlocks();
    
    headers.forEach((item, i) => {
        item.addEventListener('click', () => {
            hideBlocks();
            blocks[i].style.display = 'block';
        });
    });

};

export default accordion;
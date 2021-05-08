import modals from './modules/modals';
import forms from './modules/forms';
import sliders from './modules/sliders';
import styles from './modules/styles';
import calc from './modules/calc';
import portfolio from './modules/portfolio';
import size from './modules/showSizePict';
import accordion from './modules/accordion';
import burger from './modules/burgerMenu';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

const calcArgs = {};

modals();
forms(calcArgs);
sliders('.main-slider-item', 'vertical', 5000);
sliders('.feedback-slider-item', 'horizont', 3000, '.main-prev-btn', '.main-next-btn');
styles();
calc('#size', '#material', '#options', '.calc-price', '.promocode', 'IWANTPOPART', );
portfolio('.portfolio-menu', '.portfolio-block');
size('.sizes-block');
accordion('.accordion-heading', '.accordion-block');
burger();

});

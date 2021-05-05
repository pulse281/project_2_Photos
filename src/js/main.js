import modals from './modules/modals';
import forms from './modules/forms';
import sliders from './modules/sliders';
import styles from './modules/styles';
import calc from './modules/calc';
import portfolio from './modules/portfolio';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

const calcArgs = {};

modals();
forms(calcArgs);
sliders('.main-slider-item', 'vertical', 5000);
sliders('.feedback-slider-item', 'horizont', 3000, '.main-prev-btn', '.main-next-btn');
styles();
calc(calcArgs, '.calc-price', '.promocode', 'IWANTPOPART', '#size', '#material', '#options');
portfolio('.portfolio-menu', '.portfolio-block');

});
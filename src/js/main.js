import modals from './modules/modals';
import forms from './modules/forms';
import sliders from './modules/sliders';
import styles from './modules/styles';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

modals();
forms();
sliders('.main-slider-item', 'vertical', 5000);
sliders('.feedback-slider-item', 'horizont', 3000, '.main-prev-btn', '.main-next-btn');
styles();
calc('.calc-price', '.promocode', '#size', '#material', '#options');

});
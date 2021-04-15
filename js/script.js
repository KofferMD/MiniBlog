'use strict';
import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {
    openModal
} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.top__tab-item', '.top__tabcontent', '.top__tab-items', 'top__tab-item--active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.bot__timer-items', '2021-04-31');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        slide: '.film__item',
        nextArrow: '.film__slider-next',
        prevArrow: '.film__slider-prev',
        wrapper: '.item__slider',
        field: '.item__slider-inner'
    });

});
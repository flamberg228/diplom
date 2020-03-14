'use strict';

import popupCalls from './modules/popupCalls';
import getFigures from './modules/getFigures';
import getLetters from './modules/getLetters';
import accordions from './modules/accordions';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// вызов модальных окон и контента в секции sentence


popupCalls();

// валидация полей с телефоном


getFigures();

// валидация полей с именами и вопросами


getLetters();

// аккордеоны


accordions();

// калькулятор


calc();

// отправка ajax формы


sendForm();
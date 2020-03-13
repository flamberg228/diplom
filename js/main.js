window.addEventListener("DOMContentLoaded", function() {
  'use strict';

  // вызов модальных окон и контента в секции sentence
  
  const popupCalls = () => {

    const popupCall = document.querySelector('.popup-call'),
          popupDiscount = document.querySelector('.popup-discount'),
          popupCheck = document.querySelector('.popup-check'),
          popupConsultation = document.querySelector('.popup-consultation'),
          body = document.querySelector('body'),
          callBtn = document.querySelectorAll('.call-popup'),
          popupClose = document.querySelectorAll('.popup-close'),
          addSentence = document.querySelector('.add-sentence-btn'),
          checkBtn = document.querySelectorAll('.check-btn');

    let columns = document.querySelectorAll('.sentence > .container > .text-center > .row > .col-xs-12');
    
    body.addEventListener('click', (event) => {
      
      const target = event.target;

      if(target === callBtn[0] || target === callBtn[1] ) {
        event.preventDefault();
        popupCall.style.display = 'block';
      };

      if(target.classList.contains('popup-close')) {
        target.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
      } 

      if(target.classList.contains('popup')) {
        document.querySelectorAll('.popup').forEach((item) => {
          item.style.display = 'none';
        });
      };
      
      if(target.classList.contains('discount-btn')) {
        popupDiscount.style.display = 'block';
      };

      if(target === addSentence) {
        columns[3].classList.toggle('visible-sm-block')
        columns[5].classList.toggle('hidden');
        columns[4].classList.toggle('hidden');
        addSentence.setAttribute('style', 'display: none;')
      };

      if(target.classList.contains('check-btn')) {
        popupCheck.style.display = 'block';
      }
    });        
  };
  popupCalls();

  // валидация полей с телефоном

  const getFigures = () => {
    const patternPhone = /[^0-9\+]/;
    document.querySelector('body').addEventListener('input', (event) => {
      if(event.target.name === 'user_phone') {
        event.target.value = event.target.value.replace(patternPhone, '');
      };
    });
  };
  getFigures();

  // валидация полей с именами и вопросами

  const getLetters = () => {
    const patternWriting = /[^А-Яа-яёЁ ]/;
    document.querySelector('body').addEventListener('input', (event) => {
      if(event.target.name === 'user_name' || event.target.name === 'user_quest') {
        event.target.value = event.target.value.replace(patternWriting, '');
      };
    });
  };
  getLetters();

  // аккордеоны

  const accordions = () => {
    const body = document.querySelector('body'),
          panels = document.querySelectorAll('.panel');
          
    body.addEventListener('click', (event) => {
      let target = event.target;
     

      target = target.closest('.collapsed')

      // закрытие всех других аккордеонов при включении другого
      
      if(target) {
        event.preventDefault();
        let parentPanel = target.parentNode.parentNode.parentNode;
        parentPanel.children[1].classList.toggle('in');

        for(let i=0; i < panels.length; i++) {
          if(panels[i] !== parentPanel && panels[i].children[1].classList.contains('in')) {
            panels[i].children[1].classList.remove('in')
          };
        };  
      }; 
    });

    // закрытие предыдущего аккордеона при нажатии кнопки и включение следующего

    document.querySelector('.constructor').addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.onoffswitch-label')
      if(target) {
        document.querySelector('.second-well').classList.toggle('empty');
        target.classList.toggle('two');
      }
      target = event.target;
      target = target.closest('.construct-btn')

      if(target) {
        event.preventDefault();
        let parentPanel = target.parentNode.parentNode.parentNode,
            count = 0;

        parentPanel.children[1].classList.remove('in');
        console.log(parentPanel)

        for(let i=0; i < panels.length; i++) {
          if(panels[i] === parentPanel) {
            count = i;
            break;
          };
        };  
        panels[count+1].children[1].classList.add('in');
        panels[4].children[1].classList.remove('in');
      };
    });
  };
  accordions();

  // калькулятор

  const calc = () => {
    const diameter = document.querySelectorAll('.form-control')[0],
          rings = document.querySelectorAll('.form-control')[1],
          diameter2 = document.querySelectorAll('.form-control')[2],
          rings2 = document.querySelectorAll('.form-control')[3],
          bottom = document.querySelectorAll('.onoffswitch-inner')[1],
          type = document.querySelectorAll('.onoffswitch-inner')[0],
          distance = document.querySelector('.distance'),
          paymentBtn = document.querySelector('.payment'),
          calcResult = document.getElementById('calc-result'),
          label = document.querySelectorAll('.onoffswitch-label');

    
    paymentBtn.addEventListener('click', (event) => {
      let total = 0,
        typeValue = 10000;

      if(label[0].matches('.two')) {
        typeValue = 15000;
      };
      total = typeValue;
      if(diameter.selectedIndex === 1) {
        total = total + ((typeValue / 100) * 20);
      }

      if(rings.selectedIndex === 1) { 
        total = total + ((typeValue / 100) * 30); 
        console.log(total)  
      } else if(rings.selectedIndex === 2) {
        total = total + ((typeValue / 100) * 50);  
        console.log(total)
      }

      if(diameter2.selectedIndex === 1) {
        total = total + ((typeValue / 100) * 20);
      }

      if(rings2.selectedIndex === 1) { 
        total = total + ((typeValue / 100) * 30); 
        console.log(total)  
      } else if(rings2.selectedIndex === 2) {
        total = total + ((typeValue / 100) * 50);  
        console.log(total)
      }
      console.log(type)
      if(!label[1].classList.contains('two') && label[0].classList.contains('two')) {
        total = total + 2000;
      } else if(!label[1].classList.contains('two') && !label[0].classList.contains('two')) {
        total = total + 1000;
      };
      console.log(total)
      calcResult.value = total;

      diameter.selectedIndex = 0;
      rings.selectedIndex = 0;
      diameter2.selectedIndex = 0;
      rings2.selectedIndex = 0;
      // console.log(type.contentText)
    }) 
  };
  calc();
});
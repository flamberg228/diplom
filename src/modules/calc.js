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
        label = document.querySelectorAll('.onoffswitch-label'),
        popupDiscount = document.querySelector('.popup-discount'),
        panels = document.querySelectorAll('.panel');
  calcResult.value = '';
  diameter.selectedIndex = 0;
  rings.selectedIndex = 0;
  diameter2.selectedIndex = 0;
  rings2.selectedIndex = 0;
  distance.value = '';

  const countSum = () => {
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
    } else if(rings.selectedIndex === 2) {
      total = total + ((typeValue / 100) * 50);  
    }

    if(diameter2.selectedIndex === 1) {
      total = total + ((typeValue / 100) * 20);
    }

    if(rings2.selectedIndex === 1) { 
      total = total + ((typeValue / 100) * 30); 
    } else if(rings2.selectedIndex === 2) {
      total = total + ((typeValue / 100) * 50);  
    }
    
    if(!label[1].classList.contains('two') && label[0].classList.contains('two')) {
      total = total + 2000;
    } else if(!label[1].classList.contains('two') && !label[0].classList.contains('two')) {
      total = total + 1000;
    };
    
    calcResult.value = total;
  };

  document.querySelector('.constructor').addEventListener('click', (event) => {
    let target = event.target;

    target = target.closest('.onoffswitch-label-1')
    if(target) {
      document.querySelector('.second-well').classList.toggle('empty');
      target.classList.toggle('two');
      document.querySelectorAll('.form-control')[2].selectedIndex = 0;
      document.querySelectorAll('.form-control')[3].selectedIndex = 0;
      countSum();
    }
    target = event.target;
    target = target.closest('.onoffswitch-label-2')
    if(target) {
      target.classList.toggle('two');
      countSum();
    }
    target = event.target;
    target = target.closest('.construct-btn')

    if(target) {
      event.preventDefault();
      countSum();
      let parentPanel = target.parentNode.parentNode.parentNode,
          count = 0;

      parentPanel.children[1].classList.remove('in');

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

  document.querySelector('.constructor').addEventListener('change', (event) => {
    const target = event.target;

    if(target.tagName === 'SELECT' || target.tagName === 'SPAN') {
      countSum();
    }
  })
  
  paymentBtn.addEventListener('click', () => {

    countSum();
    paymentBtn.classList.add('calcked');
    popupDiscount.style.display = 'block';
   
  }); 
};

export default calc;
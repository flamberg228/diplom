const accordions = () => {
  const body = document.querySelector('body'),
        panels = document.querySelectorAll('.panel');
  
  document.querySelectorAll('.panel-heading').forEach((item) => {
    item.style.cursor = 'pointer';
  });      
  body.addEventListener('click', (event) => {
    let target = event.target;
   

    target = target.closest('.panel-heading')

    // закрытие всех других аккордеонов при включении другого
    
    if(target) {
      event.preventDefault();
      let parentPanel = target.parentNode;
      parentPanel.children[1].classList.toggle('in');

      for(let i=0; i < panels.length; i++) {
        if(panels[i] !== parentPanel && panels[i].children[1].classList.contains('in')) {
          panels[i].children[1].classList.remove('in')
        };
      };  
    }; 
  });

  // закрытие предыдущего аккордеона при нажатии кнопки и включение следующего


};

export default accordions;
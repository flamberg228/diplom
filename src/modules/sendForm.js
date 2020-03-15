const sendForm = () => {
  const loadMessage = 'Идет загрузка...',
        succesMessage = 'Данные успешно отправлены',
        errorMessage = 'Произошла ошибка',
        mainForm = document.querySelector('.main-form'),
        statusMessage = document.createElement('div'),
        captureForm = document.querySelectorAll('.capture-form'),
        directorForm = document.querySelector('.director-form'),
        popupConsultation = document.querySelector('.popup-consultation');
  
  mainForm.children[3].removeAttribute('required');
  mainForm.children[3].value = '';
  mainForm.children[3].addEventListener('input', () => {
    mainForm.children[3].setAttribute('required', '');
  })
  mainForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(mainForm.children[3].value === '') {
      mainForm.children[3].setAttribute('required', '');
      return;
    }
   
    mainForm.appendChild(statusMessage);
    statusMessage.style.cssText = `font-size: 2rem;
                                  color: #85be32;
                                  font-weight: bold;`

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      
      statusMessage.textContent = loadMessage;
      
      if(request.readyState !== 4) {
        return;
      }
      
      if(request.readyState === 4 && request.status === 200) {
        
        statusMessage.textContent = succesMessage;
        setTimeout(() =>{
          mainForm.removeChild(statusMessage);
        }, 5000);
        mainForm.children[3].value = '';
        mainForm.children[3].removeAttribute('required');
        
      } else {
        statusMessage.textContent = errorMessage;
      };
    });
    
    request.open('POST', './server.php', true);

    request.setRequestHeader('Content-Type', 'application/json');

    const formData = new FormData(mainForm);
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    })
    request.send(JSON.stringify(body));

  });

  captureForm.forEach((item) => {
    item.children[1].removeAttribute('required');
    item.children[1].value = '';
    item.children[3].removeAttribute('required');
    item.children[3].value = '';
    item.children[1].addEventListener('input', () => {
      item.children[1].setAttribute('required', '');
    });

    item.children[3].addEventListener('input', () => {
      item.children[3].setAttribute('required', '');
    });

    item.addEventListener('submit', (event) => {
      event.preventDefault();
      if(item.children[3].value === '' || item.children[1].value === '') {
        item.children[1].setAttribute('required', '');
        item.children[3].setAttribute('required', '');
        return;
      }
     
      item.appendChild(statusMessage);
      statusMessage.style.cssText = `font-size: 2rem;
                                    color: #85be32;
                                    font-weight: bold;`

      const request = new XMLHttpRequest();

      request.addEventListener('readystatechange', () => {
        
        statusMessage.textContent = loadMessage;
        
        if(request.readyState !== 4) {
          return;
        };
        
        if(request.readyState === 4 && request.status === 200) {
          
          statusMessage.textContent = succesMessage;
          
          setTimeout(() =>{
            item.removeChild(statusMessage);
          }, 5000);
         
          item.children[1].value = '';
          item.children[3].value = '';
          item.children[1].removeAttribute('required');
          item.children[3].removeAttribute('required');
          
        } else {
          statusMessage.textContent = errorMessage;
        };
      });
      
      request.open('POST', './server.php', true);

      request.setRequestHeader('Content-Type', 'application/json');

      const formData = new FormData(item);
      let body = {};
      
      if(document.getElementById('calc-result').value !== '') {
        body['diameter'] = document.querySelectorAll('.form-control')[0].value;
        body['rings'] = document.querySelectorAll('.form-control')[1].value;
        if(document.querySelectorAll('.onoffswitch-label')[0].classList.contains('two')) {
          body['diameter2'] = document.querySelectorAll('.form-control')[2].value;
          body['rings2'] = document.querySelectorAll('.form-control')[3].value;
        }
        body['result'] = document.getElementById('calc-result').value;
        body['distance'] = document.querySelector('.distance').value;
        
        document.querySelectorAll('.form-control')[0].selectedIndex = 0;
        document.querySelectorAll('.form-control')[1].selectedIndex = 0;
        document.querySelectorAll('.form-control')[2].selectedIndex = 0;
        document.querySelectorAll('.form-control')[3].selectedIndex = 0;
        document.querySelector('.distance').value = '';
      }
      if(directorForm.children[0].value !== '' && popupConsultation.style.display === 'block') {
        body['question'] = directorForm.children[0].value;
        directorForm.children[0].value = '';
        directorForm.children[0].removeAttribute('required');
      }

      formData.forEach((val, key) => {
        body[key] = val;
      })
      request.send(JSON.stringify(body));

    });
  })
  directorForm.children[0].removeAttribute('required');
  directorForm.children[0].value = '';
  directorForm.children[0].addEventListener('input', () => {
  directorForm.children[0].setAttribute('required', '');
  });
    
};

export default sendForm;
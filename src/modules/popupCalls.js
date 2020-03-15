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
      columns[3].classList.toggle('visible-sm-block');
      columns[5].classList.toggle('hidden');
      columns[4].classList.toggle('hidden');
      addSentence.setAttribute('style', 'display: none;')
    };
    if(target.classList.contains('director-btn')) {
      event.preventDefault();
      if(document.querySelector('.director-form').children[0].value !== '') {
        popupConsultation.style.display = 'block';
      }
     
    }
    if(target.classList.contains('check-btn')) {
      popupCheck.style.display = 'block';
    }
  });        
};

export default popupCalls;
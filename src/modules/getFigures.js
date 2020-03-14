const getFigures = () => {
  const patternPhone = /[^0-9\+]/,
        distance = document.querySelector('.distance'),
        figuresPattern = /[^0-9]/;
  document.querySelector('body').addEventListener('input', (event) => {
    if(event.target.name === 'user_phone') {
      event.target.value = event.target.value.replace(patternPhone, '');
    };
    if(event.target === distance) {
      event.target.value = event.target.value.replace(figuresPattern, '');
    };
  });
};

export default getFigures;
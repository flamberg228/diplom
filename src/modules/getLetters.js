const getLetters = () => {
  const patternWriting = /[^А-Яа-яёЁ ]/;
  document.querySelector('body').addEventListener('input', (event) => {
    if(event.target.name === 'user_name' || event.target.name === 'user_quest') {
      event.target.value = event.target.value.replace(patternWriting, '');
    };
  });
};

export default getLetters;
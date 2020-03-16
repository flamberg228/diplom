const getLetters = () => {
  const patternWriting = /[^А-Яа-яёЁ ]/;
  const patternWritingQuest = /[^А-Яа-яёЁ\W ]/;
  document.querySelector('body').addEventListener('input', (event) => {
    if(event.target.name === 'user_name') {
      event.target.value = event.target.value.replace(patternWriting, '');
    };
    if(event.target.name === 'user_quest') {
      event.target.value = event.target.value.replace(patternWritingQuest, '');
    }
  });
};

export default getLetters;
const url = 'https://api.adviceslip.com/advice';
const header = document.querySelector('.header');
const button = document.querySelector('.button');
const adviceContent = document.querySelector('.advice-content');


const getAdvice = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showAdvice(data))
    .catch((error) => console.log(error))
  };
  
  button.addEventListener('click', getAdvice);

  const showAdvice = (data) => {
    header.innerText = `ADVICE #${data.slip.id}`;
    adviceContent.innerText = `"${data.slip.advice}"`;
  }
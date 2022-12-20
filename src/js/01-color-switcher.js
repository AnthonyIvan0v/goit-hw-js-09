const refs = {
    buttonStart: document.querySelector('button[data-start]'),
    buttonStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};
const DELAY = 1000;
let timer = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

refs.buttonStop.setAttribute('disabled', true);
  
refs.buttonStart.addEventListener('click', onStartClick);
refs.buttonStop.addEventListener('click', onStopClick);

function onStopClick() {
    refs.buttonStart.removeAttribute('disabled');
    clearInterval(timer);
    refs.buttonStop.setAttribute('disabled', true);
  };
 
function onStartClick() {
    refs.buttonStart.setAttribute('disabled', true);
    refs.buttonStop.removeAttribute('disabled');
    timer = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, DELAY)
  };
  



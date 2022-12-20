import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', submint);

function submint(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  const dataForm = {
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  };

  for (let i = 1; i <= dataForm.amount; i += 1) {
    createPromise(i, dataForm.delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    dataForm.delay += dataForm.step;
  }
  form.reset();

  return dataForm;
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

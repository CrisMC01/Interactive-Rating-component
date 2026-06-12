const submit = document.getElementById('submit');
const rates = document.querySelectorAll('.rating-btn');
const successMessage = document.querySelector('.success-message');
const container = document.querySelector('.container');
const rateSelected = document.querySelector('#rateSelected');
const errorMsg = document.querySelector('#error-msg');

let selectedRate =null;

rates.forEach(button => {
    button.addEventListener('click',()=>{
         selectedRate = button.dataset.value;

        rates.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        rates.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
        button.setAttribute('aria-pressed', 'true');

        if (!errorMsg.classList.contains('is-hidden')) {
        errorMsg.classList.add('is-hidden');
        }
    });
  });

submit.addEventListener('click', function(event) {
  event.preventDefault();
  
  
    if (!selectedRate) {
        errorMsg.classList.remove('is-hidden');
        errorMsg.focus();
        return;
    }
        rateSelected.textContent = selectedRate;

        successMessage.classList.remove('is-hidden');
        successMessage.setAttribute('aria-hidden', 'false');

        container.classList.add('is-hidden');
        container.setAttribute('aria-hidden', 'true');

        successMessage.focus();


});
// JavaScript for form submission and success message
const form = document.querySelector('#newsletter-form');
const successMessage = document.querySelector('#success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = document.querySelector('#email');
  const email = emailInput.value.trim();
  if (email !== '') {
    // Send email to server here (code not shown)
    form.reset();
    successMessage.classList.remove('hidden');
  }
});

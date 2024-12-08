const form = document.querySelector('form.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email;
  const password = form.elements.password;

  if (!email.value.trim() || !password.value.trim()) {
    alert('All form fields must be filled in');
    return;
  }
  const validOutputForm = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(validOutputForm);

  form.reset();
});

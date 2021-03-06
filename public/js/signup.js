
const signupFormHandler = async (event) => {
    event.preventDefault();
    const postcode = document.querySelector('#postcode').value.trim();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, email, postcode, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
}; 

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
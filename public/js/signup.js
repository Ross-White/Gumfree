
const signupFormHandler = async (event) => {
    event.preventDefault();
    const postcode = document.querySelector('#postcode').value.trim();
    const data = await fetch(`https://api.postcodes.io/postcodes/${postcode}`, {
      method: "GET",
    });
    const {result} = await data.json();
    const lat = result.latitude;
    const long = result.longitude;

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, email, lat, long, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);   
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
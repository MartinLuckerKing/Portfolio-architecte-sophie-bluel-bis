
export const login = () => {
document.querySelector('#formLogin').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const url = 'http://localhost:5678/api/users/login';

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
    
  if (response.status === 200) {
    const data = await response.json();
    localStorage.setItem('token', data.token);
    window.location.replace("./../../index.html");
  }

  if (response.status === 401) {
    const errorElement = document.querySelector('#errorMessage');
    errorElement.textContent = 'Email ou mot de passe  incorrect';
    errorElement.style.marginTop = '10px';
    errorElement.style.display = 'block';
  }

  else {
    return response.json()
  }
});
}


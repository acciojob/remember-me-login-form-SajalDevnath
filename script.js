document.addEventListener('DOMContentLoaded', (event) => {
  const loginForm = document.getElementById('login-form');
  const existingButton = document.getElementById('existing');

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (storedUsername && storedPassword) {
    existingButton.style.display = 'block';
  }

  // Handle form submission
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
  });

  existingButton.addEventListener('click', () => {
    alert(`Logged in as ${storedUsername}`);
  });
});

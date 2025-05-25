document.querySelector('.login-btn').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username === "admin" || !password === "password123") {
      
    } else {
      alert(`login succesfully`);
      
    }
  });
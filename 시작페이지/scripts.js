document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
      window.location.href = '../방입장/index.html';
    } else {
      alert('아이디 또는 패스워드가 잘못되었습니다.');
    }
  });

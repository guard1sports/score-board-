let score1 = 0;
let score2 = 0;

document.getElementById('score1').addEventListener('click', function () {
  score1++;
  this.textContent = score1;
});

document.getElementById('score2').addEventListener('click', function () {
  score2++;
  this.textContent = score2;
});

document.getElementById('resetButton').addEventListener('click', function () {
  score1 = 0;
  score2 = 0;
  document.getElementById('score1').textContent = score1;
  document.getElementById('score2').textContent = score2;
});

document.getElementById('saveButton').addEventListener('click', function () {
  alert('점수가 저장되었습니다.');
});

document.getElementById('singleBtn').addEventListener('click', function () {
  document.getElementById('singleNumber').value =
    Math.floor(Math.random() * 100) + 1;
});

document.getElementById('doubleBtn').addEventListener('click', function () {
  document.getElementById('doubleNumber').value =
    Math.floor(Math.random() * 100) + 1;
});

document.getElementById('enterBtn').addEventListener('click', function () {
  var roomNo = document.getElementById('roomNo').value;
  if (roomNo) {
    // 방 번호가 입력되었을 때 입장
    alert('Room No. ' + roomNo + ' 방에 입장합니다.');
  } else {
    alert('방 번호를 입력해주세요.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const rankFilter = document.getElementById('rankFilter');
  const regionFilter = document.getElementById('regionFilter');
  const friendSearchBtn = document.getElementById('friendSearchBtn');

  // Mock data for demonstration
  const players = [
    { name: 'Player1', score: 1000, rank: '1부', region: '서울특별시' },
    { name: 'Player2', score: 900, rank: '2부', region: '부산광역시' },
    { name: 'Player3', score: 850, rank: '3부', region: '대구광역시' },
    { name: 'Player4', score: 800, rank: '4부', region: '인천광역시' },
    { name: 'Player5', score: 750, rank: '5부', region: '광주광역시' },
    { name: 'Player6', score: 700, rank: '6부', region: '대전광역시' },
    { name: 'Player7', score: 650, rank: '7부', region: '울산광역시' },
    { name: 'Player8', score: 600, rank: '8부', region: '세종특별자치시' },
    { name: 'Player9', score: 550, rank: '9부', region: '경기도' },
    { name: 'Player10', score: 500, rank: '10부', region: '강원도' },
    { name: 'Player11', score: 450, rank: '7부', region: '서울특별시' },
    // Add more mock data as needed
  ];

  function updateRankingTable(filteredPlayers) {
    const tbody = document.querySelector('#rankingTable tbody');
    tbody.innerHTML = '';

    filteredPlayers.slice(0, 10).forEach((player, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${player.name}</td>
        <td>${player.score}</td>
        <td>${player.rank}</td>
        <td>${player.region}</td>
      `;
      tbody.appendChild(row);
    });
  }

  function filterPlayers() {
    const rankValue = rankFilter.value;
    const regionValue = regionFilter.value;

    const filteredPlayers = players.filter(player => {
      return (rankValue === 'all' || player.rank === rankValue) &&
             (regionValue === 'all' || player.region === regionValue);
    });

    filteredPlayers.sort((a, b) => b.score - a.score);

    updateRankingTable(filteredPlayers);
  }

  function searchFriend() {
    const friendSearchValue = document.getElementById('friendSearch').value.toLowerCase();
    const foundPlayer = players.find(player => player.name.toLowerCase() === friendSearchValue);
    if (foundPlayer) {
      alert(`닉네임: ${foundPlayer.name}\n부수: ${foundPlayer.rank}\n지역: ${foundPlayer.region}`);
    } else {
      alert('해당 닉네임을 찾을 수 없습니다.');
    }
  }

  rankFilter.addEventListener('change', filterPlayers);
  regionFilter.addEventListener('change', filterPlayers);
  friendSearchBtn.addEventListener('click', searchFriend);

  // Initial load
  filterPlayers();
});

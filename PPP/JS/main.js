// 팝업 닫기 기능
document.getElementById('closeButton').addEventListener('click', function() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
});

// 드롭다운 메뉴 아이템 클릭 시 페이지 이동
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function() {
    window.location.href = this.getAttribute('data-href');
  });
});

//로그인   
document.addEventListener('DOMContentLoaded', function() {
  console.log('main.js loaded');
  const userid = localStorage.getItem('userid');
  const userName = localStorage.getItem('userName');

  if (userid) {
      // 로그인 상태일 때
      document.getElementById('userid-display').innerText = `환영합니다, ${userid}님!`;
      document.getElementById('userid-display').style.display = 'inline';
      document.getElementById('logout-button').style.display = 'inline';
      document.getElementById('signup-button').style.display = 'none';
      document.getElementById('login-button').style.display = 'none';
  } else {
      // 로그인되지 않은 상태일 때
      document.getElementById('userid-display').style.display = 'none';
      document.getElementById('logout-button').style.display = 'none';
      document.getElementById('signup-button').style.display = 'inline';
      document.getElementById('login-button').style.display = 'inline';
  }

  // 로그아웃 버튼 클릭 시 로그아웃 처리
  document.getElementById('logout-button').addEventListener('click', function() {
      localStorage.removeItem('userid'); // 로컬 스토리지에서 사용자 아이디 삭제
      localStorage.removeItem('userName');
      window.location.href = 'login.html'; // 로그인 페이지로 리다이렉트
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // 모든 하트 버튼에 클릭 이벤트 리스너 추가
  document.querySelectorAll('.btn.heart').forEach(function(button) {
      button.addEventListener('click', function() {
          this.classList.toggle('liked');
          handleHeartClick(this);
      });
  });

  // 로컬스토리지에서 관심 목록을 불러와 UI에 반영
  const storedInterestList = JSON.parse(localStorage.getItem('interestList')) || [];
  storedInterestList.forEach(pet => {
      addPetToList(pet, false); // false는 새로 추가된 것이 아니라는 표시
  });
});

function handleHeartClick(button) {
  const message = document.getElementById('interestMessage');
  const petInfo = button.closest('.card-body').querySelector('.card-text').innerHTML;
  const petImage = button.closest('.card').querySelector('img').src;
  const pet = { info: petInfo, image: petImage };

  let interestList = JSON.parse(localStorage.getItem('interestList')) || [];

  if (button.classList.contains('red')) {
      message.textContent = '관심 등록이 취소 되었습니다.';
      interestList = interestList.filter(item => item.info !== pet.info); // 관심 목록에서 제거
      localStorage.setItem('interestList', JSON.stringify(interestList));
  } else {
      message.textContent = '관심 등록이 되었습니다.';
      interestList.unshift(pet); // 관심 목록에 추가
      localStorage.setItem('interestList', JSON.stringify(interestList));
      addPetToList(pet, false); // UI에 새로 추가하지 않음
  }

  message.style.display = 'block';
  setTimeout(() => {
      message.style.display = 'none';
  }, 1500);

  // 하트 색상 토글
  button.classList.toggle('red');
}

// 관심 목록에 새로운 애완동물을 추가하는 함수
function addPetToList(pet, isNew) {
  const petList = document.querySelector('.container'); // 관심 목록이 위치한 컨테이너
  
  // 만약 isNew가 true일 때만 UI에 카드 추가
  if (isNew) {
    const newPetCard = document.createElement('div');
    newPetCard.classList.add('pet-card');
    newPetCard.innerHTML = `
        <img src="${pet.image}" alt="관심있는 동물">
        <div class="pet-info">
            ${pet.info}
        </div>
        <button class="btn heart red" aria-label="Like">
            <i class="fas fa-heart"></i>
        </button>
        <div class="interest-message" style="display: none;">관심 등록이 되었습니다.</div>
    `;
    petList.appendChild(newPetCard);

    // 새로 추가된 카드에도 클릭 이벤트 리스너 추가
    newPetCard.querySelector('.btn.heart').addEventListener('click', function() {
        this.classList.toggle('liked');
        handleHeartClick(this);
    });
  }
}

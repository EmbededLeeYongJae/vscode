document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('register-form');
    const useridInput = document.getElementById('register-userid'); // ID 입력 필드
    const checkUseridButton = document.querySelector('.btn-check-userid'); // 중복 확인 버튼
    const passwordInput = document.getElementById('register-password');
    const confirmPasswordInput = document.getElementById('register-confirm-password');
    const emailLocalInput = document.getElementById('register-email-local');
    const emailDomainInput = document.getElementById('register-email-domain');
    const phoneNumberInput = document.getElementById('register-phonenumber');
    const usernameInput = document.getElementById('register-username'); // 이름 입력 필드
    const birthdateInput = document.getElementById('register-birthdate');

    // 사용자 ID 중복 확인 함수
    function checkUserid() {
        const userid = useridInput.value;

        if (!userid) {
            alert('ID를 입력해 주세요.');
            return;
        }

        // 서버와의 통신을 통해 중복 확인
        fetch('/check-userid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userid }) // ID 값으로 전송
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.exists) {
                alert('이미 사용 중인 ID입니다.');
            } else {
                alert('사용 가능한 ID입니다.');
            }
        })
        .catch(error => {
            console.error('중복 확인 요청 오류:', error);
            alert('중복 확인 요청 중 오류가 발생했습니다.');
        });
    }

    // 중복 확인 버튼 클릭 이벤트 리스너
    if (checkUseridButton) {
        checkUseridButton.addEventListener('click', checkUserid);
    } else {
        console.error('중복 확인 버튼을 찾을 수 없습니다.');
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 폼 제출 기본 동작 방지

        const userid = useridInput.value.trim(); // ID 입력 값
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const email = `${emailLocalInput.value.trim()}@${emailDomainInput.value.trim()}`;
        const phoneNumber = phoneNumberInput.value.trim();
        const username = usernameInput.value.trim(); // 이름 입력 값
        const birthdate = birthdateInput.value;

        if (userid === '' || password === '' || confirmPassword === '' || email === '' || phoneNumber === '' || username === '' || !birthdate) {
            alert('모든 필드를 입력해 주세요.');
            return;
        }

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 회원가입 요청
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid,
                password,
                email,
                phoneNumber,
                username, // 이름 필드
                birthdate
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                alert('회원가입이 완료되었습니다!');
                form.reset(); // 폼 리셋
            } else {
                alert('회원가입에 실패했습니다: ' + data.message);
            }
        })
        .catch(error => {
            console.error('회원가입 요청 오류:', error);
            alert('회원가입 요청 중 오류가 발생했습니다.');
        });
    });
});
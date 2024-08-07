document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register-form');
    const checkButton = document.querySelector('.btn-check-userid');

    // 중복 확인 버튼 클릭 이벤트
    checkButton.addEventListener('click', async function () {
        const userId = document.getElementById('register-userid').value;
        if (!userId) {
            alert('ID를 입력하세요.');
            return;
        }

        try {
            const response = await fetch('/check-userid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userid: userId })
            });

            const data = await response.json();
            if (data.exists) {
                alert('사용중인 ID입니다.');
            } else {
                alert('사용 가능한 ID입니다.');
            }
        } catch (error) {
            console.error('중복 확인 오류:', error);
        }
    });

    // 폼 제출 이벤트
    form.addEventListener('submit', async function (e) {
        e.preventDefault(); // 기본 폼 제출 방지

        const userId = document.getElementById('register-userid').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        const username = document.getElementById('register-username').value;
        const phoneNumber = document.getElementById('register-phonenumber').value;
        const emailLocal = document.getElementById('register-email-local').value;
        const emailDomain = document.getElementById('register-email-domain').value;
        const birthdate = document.getElementById('register-birthdate').value;

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: userId,
                    password: password,
                    email: `${emailLocal}@${emailDomain}`,
                    phoneNumber: phoneNumber,
                    username: username,
                    birthdate: birthdate
                })
            });

            const data = await response.json();
            if (data.success) {
                alert('회원가입이 완료되었습니다.');
                form.reset();
            } else {
                alert('회원가입에 실패했습니다.');
            }
        } catch (error) {
            console.error('회원가입 오류:', error);
        }
    });
});
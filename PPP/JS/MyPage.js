// 프로필 사진 업로드 기능
document.querySelector(".photo-upload").addEventListener("click", function () {
    document.getElementById("photo").click();
});

document.getElementById("photo").addEventListener("change", function () {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var imgElement = document.getElementById("uploaded-image");
            imgElement.src = e.target.result;
            imgElement.style.display = "block"; // 이미지 표시
            document.querySelector(".photo-placeholder").style.display = "none"; // 텍스트 숨기기
            
            // photo-upload의 테두리를 제거
            document.querySelector(".photo-upload").style.border = "none";
        }
        reader.readAsDataURL(this.files[0]);
    }
});

// 회원 탈퇴 기능
function confirmWithdrawal() {
    if (confirm("정말로 탈퇴하시겠습니까?")) {
        fetch('/api/withdrawal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: '사용자ID'  // 실제 사용자 ID로 대체해야 합니다.
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                window.location.href = '/';  // 메인 페이지로 리디렉션
            } else {
                alert("탈퇴 처리에 실패했습니다. 다시 시도해주세요.");
            }
        })
        .catch(error => console.error('Error:', error));
    }
}

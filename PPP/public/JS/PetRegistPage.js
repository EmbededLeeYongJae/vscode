// 탭 전환 기능
function openTab(tabName, event) {
    var i;
    var x = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[i].classList.remove("active");
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// 초기화면에서는 소개 탭이 열려 있도록 설정
document.getElementById("intro").style.display = "block";
document.getElementById("intro").classList.add("active");

// 사진 선택 시 파일 선택 창을 트리거
function triggerFileInput() {
    document.getElementById("photo").click(); // 파일 선택 창 열기
}

document.querySelector(".photo-placeholder").addEventListener("click", triggerFileInput);

// 파일 선택 시 이미지 표시 및 테두리 제거
document.getElementById("photo").addEventListener("change", function() {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imgElement = document.getElementById("uploaded-image");
            imgElement.src = e.target.result;
            imgElement.style.display = "block"; // 이미지 표시
            document.querySelector(".photo-placeholder").style.display = "none"; // 텍스트 숨기기
            document.querySelector(".photo-upload").style.border = "none"; // 테두리 제거
        }
        reader.readAsDataURL(this.files[0]); // 파일을 읽어와서 이미지로 변환
    }
});

// 이미지 클릭 시 다시 파일 선택 창을 열 수 있도록 설정
document.getElementById("uploaded-image").addEventListener("click", triggerFileInput);

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 제출을 막음

    var form = document.getElementById("petForm");
    var formData = new FormData(form);

    fetch('http://localhost:5500/register-pet', { // 절대 경로 사용
        method: 'POST',
        body: formData, // FormData 객체를 전송
    })
    .then(response => {
        if (!response.ok) {
            console.error('Server response not OK:', response);
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Server response data:', data);
        if (data.success) {
            alert('애완동물 등록 성공');
            console.log('Redirecting to MyPage.html');
            window.location.href = '../html/MyPage.html';
        } else {
            alert('애완동물 등록 실패: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Fetch Error:', error);
        alert('애완동물 등록 중 오류가 발생했습니다.');
    });
});

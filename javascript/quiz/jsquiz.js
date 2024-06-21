/*
# 프로그램 1 : 퀴즈프로그램
# 개요
# - 프로그램이 시작되면 이름을 입력 받는다.
# - 초기화면에서 이름과 점수를 고득점자 순으로 출력한다.
# - 10개의 단답형 퀴즈를 10초마다 한 문제씩 출제한다. 
# - 건너뛰기 버튼을 클릭하면 다음퀴즈로 넘어간다.
# - 10개의 퀴즈를 끝내면 이름과 점수를 localStorage에 저장한다.
*/

$(function() { 
    
    let currentQuestionIndex = 0;
    let score = 0;
    let quizData = [];
    let quizTimer;
    let userInput;

    $("#start").on("click", function() {
       userInput = prompt("이름을 입력하세요");
        console.log(userInput);

        $.getJSON("jsquiz.json", function(result){
            quizData = result;

            showQuestion();
       
            quizTimer = setTimeout(function nextQuestion(){
                currentQuestionIndex++;
                if(currentQuestionIndex < quizData.length) {
                    showQuestion();
                    quizTimer = setTimeout(nextQuestion, 10000);
                }else{
                    endQuiz();
                }
               
            }, 10000);            
        });
    }); 

    $("#pass").on("click", function(){
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            endQuiz();
        } 
    });

    $(document).on("click", "#O, #X", function() {
        const selectedOption = $(this).val(); 
        const correctAnswer = quizData[currentQuestionIndex].correct === 1 ? 'O' : 'X';
       
        if (selectedOption === correctAnswer) {
            score++;
            alert("정답입니다.");
        }else{
            alert("오답입니다.");
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    });

    function showQuestion(){
        const question = quizData[currentQuestionIndex].question;
        const options = quizData[currentQuestionIndex].explanations;


    $("#quizbox").html(`
        <h2>${question}</h2>
        <div id="options">
        <input type="button" name="O" id="O" value="O">${options[0]}&nbsp;
        <input type="button" name="X" id="X" value="X">${options[1]}
        </div> 
    `);
}  

function endQuiz() {
    clearTimeout(quizTimer); 
    const totalScore = score * 10;

    $("#quizbox").html(`
    <h2>퀴즈 종료</h2>  
    <p>${userInput}님이 ${totalScore}점을 획득하셨습니다!</p>
    `);
    
    $("#scoreboard").append(`
        <tr>
            <td>${$("#scoreboard tr").length + 1}</td>
            <td>${userInput}</td>
            <td>${totalScore}</td>
        </tr>
    `);

    score = 0; 
    currentQuestionIndex = 0; 

    $("#pass").attr("disabled", "disabled"); // 퀴즈가 끝나면 건너뛰기 버튼을 못누르게 만드는 코드.
}

});

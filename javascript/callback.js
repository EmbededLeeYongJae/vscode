// 콜백함수(callback function)

// const { default: axios } = require("axios");

// 1. 이벤트리스너 (event listener) = 이벤트콜백 = 이벤트핸들러
// javascript
// load 이벤트에 대한 콜백함수
// window.addEventListener('load', function(){

//     //click 이벤트에 대한 콜백함수  1)
//     // document.getElementById("btn").onclick = function(){
//     //     document.getElementById("result").innerHTML;
//     //         document.getElementById("txt").value;
//     // };

//     // click 이벤트에 대한 콜백함수 2)
//     document.getElementById("btn").addEventListener('click',function(){
//         document.getElementById("result").innerHTML;
//             document.getElementById("txt").value;
//     });

//     document.getElementById("btn").addEventListener('click',function(){
//         alert('버튼이 클릭됨!');       
//     });

//   });

// jquery
// load이벤트콜백
// $(function(){
//     // click이벤트콜백

//     $("#btn").click(function(){
//         console.log('1');
//     });

//     $("#btn").click(function(){
//         $("#result").html($("#txt").val());
//     });
  
//     $("#btn").on("click", function(){
//         console.log('2');
//     });
// });

// 2. AJAX 콜백함수
// window.onload = function(){
// const xhr = new XMLHttpRequest();
// xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
// xhr.send();
// // readystatechange 이벤트콜백함수
// // xhr.onreadystatechange = function(){
// //     if(xhr.readystate==4 && xhr.status==200){
// //         document.getElementById("result").innerHTML
// //             = xhr.respenseText;
// //         }    
// //     };
// xhr.addEventListener('readystatechange',function(){
//     if(xhr.readystate==4 && xhr.status==200){
//         document.getElementById("result").innerHTML
//             = xhr.respenseText;
//         }    
//  });
// xhr.addEventListener('readystatechange',function(){
//     if(xhr.readystate==4 && xhr.status==200){
//         alert(xhr.respenseText);
//         }    
//     });

// };

// $(function(){
//     $.ajax({
//         method: 'get',
//         url:'https://jsonplaceholder.typicode.com/posts',
//         success: function(result){
//             $("#result").html(JSON.stringify(result));
//         }
//     });
// });

// $(function(){
//     $.ajax({
//         method: 'get',
//         url:'https://jsonplaceholder.typicode.com/posts'
//     }).done(function(result){
//             $("#result").html(JSON.stringify(result));
//     }).fail(function(err){
//         console.log(err);
//     });
// });

// // 3. axios
// axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then(function(response){
//         $("#result").html(JSON.stringify(response));
//     })
//     .catch(function(error){
//         console.log(error);
//     })
//     .finally(function(){
//     });

    // 3. timing function
    // setTimeout : 특정 시간 후에 콜백 수행
    // setInterval : 특정 시간 간격으로 콜백 수행

// // 1) setTimeout(callback함수, milliseconds) 밀리세컨 후에 실행해라
//  $(function(){
//     setTimeout(cbfunc, 3000);
// });
// const cbfunc = function(){
//     console.log("cbfunc수행됨!");
// };

// 2) setInterval(callback함수, milliseconds) 밀리세컨 후에 실행해라
// let count = 0;
// let timer = null;
// $(function(){
//     timer = setInterval(cbfunc, 1000);
// });
// const cbfunc = function(){
//     console.log(`cbfunc ${++count}번 수행됨!`);
//     if(count==5){
//         clearInterval(timer);
//     }
// };

// 실습) 타이머 멈춰! 버튼 누르면 타이머 멈추도록 코드 수정
    
// let count = 0;
// let timer = null;
// $(function(){
//     timer = setInterval(cbfunc, 4000);
//     $("#stop").click(function(){
//         clearInterval(timer);
//     });
//     $("#start").click(function(){
//         timer = setInterval(cbfunc, 4000);
//     });
// });
// const cbfunc = function(){
//     console.log(`cbfunc ${++count}번 수행됨!`);
   
// };









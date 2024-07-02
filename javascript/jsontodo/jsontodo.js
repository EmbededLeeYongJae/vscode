const requestTodo = function(method, url, payload){
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if(payload){
        xhr.setRequestHeader('Content-Type', 'application/json');
    }
    xhr.send(payload);
}

$("#registBtn").on("click", () => {
    const newTodo = new Todo(1, $("#content").val(), new Date(), false);
    requestTodo("POST", "http://localhost:3000/todos", JSON.stringify(newTodo));
    


});



// $("#deleteBtn").on("click", () => {
//     requestTodo("DELETE", "http://localhost:3000/todos/1");
// });


// 할일목록 : GET http://localhost:3000/todos
// list 
//requestTodo("GET", "http://localhost:3000/todos");

// 할일등록 : POST http://localhost:3000/todos
// requestTodo("POST", "http://localhost:3000/todos",
//     JSON.stringify({tdno: "1", tdcontent: "react", tdregdate: " ", tdcompleted: false})
// );

// 할일삭제 : DELETE http://localhost:3000/todos/번호
//requestTodo("DELETE", "http://localhost:3000/todos/1");

// 할일검색 : GET http://localhost:3000/todos
//requestTodo("GET","http://localhost:3000/todos");
const requestTodo = function(method, url, payload){
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    if(payload){
        xhr.setRequestHeader('content-type', 'application/json');
    }

    xhr.send(payload);


    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.querySelector("#db").innerHTML = xhr.responseText;
         }
    }
}

// list
// requestTodo("GET", "http://localhost:3000/todos");


// retrieve (read)
// requestTodo("GET", "http://localhost:3000/todos");

// post 
// requestTodo("POST", "http://localhost:3000/todos",
//     JSON.stringify({id: "4", content: "react", completed: false})
// );

// put 
// requestTodo("PUT", "http://localhost:3000/todos/4",
//     JSON.stringify({id: 4, content: 'vue', completed: false})
// );

// requestTodo("GET","http://localhost:3000/todos/4");

//delete
requestTodo("DELETE", "http://localhost:3000/todos/4");
requestTodo("GET","http://localhost:3000/todos");
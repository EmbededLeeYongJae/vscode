// 스코프 (Scope, 식별자 참조범위)
// 1. 전역 스코프
// 2. 함수 스코프
// 3. 블록 스코프
// 4. 모듈 스코프 

// * varr 키워드의 경우 함수내에서 var 키워드로 선언된 변수만  
//   함수의 지역변수임, var는 블록스코프를 따르지 않음 

// 스코프 체인 
// : 하위스코프에서 상위스코프로 연결되어 있는 것 
// : 변수 참조나 함수 호출시에 자신의 스코프부터 상위 스코프로 계속해서 검색

var x = 1;      //G
let y = 2;      //G
const z = 3;    //G
console.log(x, y, z);

//func1 : G, x : L, y : L
function func1(x,y){
    console.log(x,y);
}
func1(5,10);

// func2 : G
function func2(){
    var x = 4;          // func2-L
    let y = 5;          // func2-L
    const z = 6;        // func2-L
    function func3(){   // func2-L
        // var x; -->> undefined
        // x를 선언하기 전에 사용하면 
        // func3의 첫 라인에 선언문을 호이스팅함 
        console.log(x);
        var x = 7;      // func3-L
        let y = 8;      // func3-L
        const z = 9;    // func3-L
        console.log(x, y, z);
    }
    func3();
}
func2();

// var로 선언한 변수는 Global Scope을 따름.
{
    var x = 10;   //G
    let y = 11;   //L
    const z = 12; //L
}
console.log(x,y,z);
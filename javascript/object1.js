// 객체 (Object)

// 객체 생성법

// 1. 객체리터럴
// 프라퍼티명에 기호가 있으면 '' 또는 ""로 묶어줘야 함
const obj1 = {
    name : '홍길동',        //JSON "name " : "홍길동"
    age : 20,               //      " age " : 20
    "first-name":"gildong",   // - 를 중간에 쓰기위해 ""를 사용
    "last-name":"Hong"       
};
console.log(obj1.name);
console.log(obj1.age);
// 프라퍼티명에 기호가 있으면 []로 접근해야함.
console.log(obj1['first-name']);
console.log(obj1['last-name']);

// 2. object 생성자 함수
const obj2 = new Object();
obj2.name = "홍길동";
obj2.age = 20;
obj2['first-name'] = 'gildong';
obj2['last-name'] = 'hong';
console.log(obj2.name);
console.log(obj2.age);
console.log(obj2['first-name']);
console.log(obj2['last-name']);

// 3. 생성자 함수
function Person(name, age){
    this.name = name;
    this.age = age;
    this.getName = function(){
        return this.name;
    },
    this.getAge = function(){
        return this.age;
    }
}
const person = new Person("홍길동",20);
console.log(person.getName());
console.log(person.getAge());
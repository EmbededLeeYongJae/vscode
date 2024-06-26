//정규표현식 (Regular Experssion)
// * 패턴과 플래그로 구성된 문자열에서 서브 문자열을 탐색하기 위한 표현식
// * // : 정규표현식 리터럴
// * /패턴/플래그 문법을 사용

// 패턴 
/*

/d : 숫자 하나
/D : 숫자가 아닌 것 하나
/w : 알파벳, 숫자, 언더스코어(_) 하나 
/W : 알파벳, 숫자, 언더스코어(_) 아닌 것 하나
/s : 공백문자 하나 
/S : 공백문자가 아닌 것 하나 
. : 문자 하나
? : 문자 0개 또는 1개 
* : 문자 0개 또는 1개 이상
+ : 문자가 1개 이상 
{n} : n번 반복 
{n,m} : 최소 n번, 최대 m번 반복 
| : OR
[] : OR
^ : 시작 
$ : 끝 
[^] : 부정 (not)

*/

// 플래그 
/*
i : 대소문자구별 안함 (ignore case)
g : 전체문자열에서 검색 (global)
m : 문자열이 여러 라인일때 여러 라인에서 모두 검색(multi-line)
*/ 

// 정규표현식 메소드 

// 1. RegExp 객체 메소드 
// test() : 정규표현식에 일치하는 문자열이 있는지 true/false 반환
// exec() : 정규표현식에 일치하는 문자열을 반환

// 2. String 객체 메소드 
// match() : 정규표현식에 일치하는 문자열을 반환
// replace() : 정규표현식에 일치하는 문자열을 다른 문자열로 대체
// search() : 정규표현식에 일치하는 첫번째 문자열의 인덱스를 반환  

// 정규표현식 실습)

// 1) 아이디 : 문자로 시작하고 문자 또는 숫자 또는 _만 허용 
//             최소 8자리 최대 12자리 

const strId = 'abcd1234';
const reId = /^[A-Za-z]\w{7,11}$/;

console.log(reId.test(strId));

// 2) 주민번호 : 숫자6자리-숫자7자리
//              년도2자리월2자리일2자리-성별숫자(1~4)숫자6개

const strSno = '000101-1234567';
const reSno = /^\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}$/;
console.log(reSno.test(strSno));



// 3) 아이피주소 : 숫자1~3자리.숫자1~3자리.숫자1~3자리.숫자1~3자리
//                숫자는 0~255로 제한 

const strIp = '127.0.0.135';
const reIp = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;

console.log(reIp.test(strIp));
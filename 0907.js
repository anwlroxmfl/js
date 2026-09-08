// 연결 연산자 "+" 
// 문자열과 문자열을 연결하는 연산자
user = prompt("이름을 압력하세요")
alert(user + "님 안녕하세요.")
// 문자열 + 숫자 => 문자열
// "2010" + 10 => "201010"


// 반복문
for (let i = 0; i <= 10; i++) {
    실행할 명령
}

// forEach
배열명.forBach(콜백함수) {
    ...
}

season = ["봄", "여름", "가을", "겨울"]
season.forEach(function (Pseason) {
    console.log(`${season}`)
});

// for...in
// 객체에서 사용 가능한 반복문
for (변수 in 객체) {
    ...
}

for (x in season) {
    console.log(x)
}

const Teacher = {
    name: "윤영준",
    birth: 1000,
    email: "123@123.com",
    job: true
}

for (k in Teacher) {
    console.log(`${k}: ${Teacher[k]}`)
}

// for..of
// 객체 중에서도 이터러블 객체

for (let s of season) {
    console.log(`${season}`)
}


for (let i = 0; i <= 3; i++) {
    let str = ""
    for (let j = 1; j <= 3; j++) {
        str += " "
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*"
    }
    console.log(str)
}
for (let i = 2; i >= 1; i--) {
    let str = ""
    for (let j = 1; j <= 3 - i; j++) {
        str += " "
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*"
    }
    console.log(str)
}
// while / do...while
while (조건) {
    실행할 명령
}

do {
    실행할 명령
} while (조건)

// 함수 function
function 함수 명() {
    명령(들)
}

function calSum() {
    result = 0;
    for (let i = 1; i <= 10; i++) {
        result += i;
    }
    console.log(`${result}`)
}

calSum()

function mul(a, b = 5, c = 10) {
    return a * b + c
}

console.log(mul(5, 10, 20))
console.log(mul(5, 10))
console.log(mul(5))

let a = 10

function name() {
    let = kim
    a = 20
}

kim = "ajdfklsa;dfjksal"

//  함수 표현 방법

//  함수를 변수에 할당해서 사용하기
let sum = function (a, b) {
    return a + b;
}
console.log(`함수 실행 결과: ${sum(10, 20)}`);

// 즉시 실행 함수
(function (매개변수) {
    ...
})(인수)

    (function () {
        let userName = prompt("이름을 입력하세요");
        alert(`${userName}님, 안녕하세요`);
    })

    (function (a, b) {
        let sum = a + b;
    })(100, 200)

    // 화살표 함수
    () => {함수 내용 }
(매개변수) => {함수 내용 }

let hi = function () {
    return "안녕하세요"
}
let hi = () => { return "안녕하세요" }

//  실행할 명령어 한 줄 뿐이라면 중괄호 생략가능
//  그 한줄에 return이 포함되면 return도 생략가능
let hi = () => "안녕하세요"
hi();

let sum = function (a, b) {
    return a + b;
}
sum(10, 20)

let sum (a, b) => a + b;
sum(10, 20)

let countNum = (n) => {
    result = 0
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            result++;
        }
    }
    return result
}
let c = parseInt(prompt('숫자를 입력해주세요'))
countNum(c)
